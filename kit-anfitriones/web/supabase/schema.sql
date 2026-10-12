-- =====================================================================
--  TocToc — esquema de base de datos para Supabase
--  Cómo usarlo: Supabase > SQL Editor > New query > pega TODO > Run.
--  Después, en la última línea, cambia el email por el tuyo y ejecútala.
-- =====================================================================

create extension if not exists pgcrypto;

-- ---------- Administradores (tú) ----------
create table if not exists public.admins (email text primary key);
alter table public.admins enable row level security;  -- sin políticas: nadie la lee desde la web

create or replace function public.am_i_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where lower(email) = lower(auth.jwt() ->> 'email'));
$$;

-- ---------- Propiedades (una por alojamiento) ----------
create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  owner uuid not null default auth.uid() references auth.users(id) on delete cascade,
  name text not null default 'Mi piso' check (char_length(name) <= 120),
  slug text unique,
  languages text[] not null default '{es,en}',
  welcome jsonb not null default '{}'::jsonb,
  sections jsonb not null default '[]'::jsonb,
  wifi_ssid text check (char_length(wifi_ssid) <= 64),
  wifi_password text check (char_length(wifi_password) <= 128),
  wifi_security text not null default 'WPA',
  wifi_hidden boolean not null default false,
  contact text check (char_length(contact) <= 200),
  license_number text check (char_length(license_number) <= 60),   -- nº de registro turístico autonómico
  checkin_url text check (checkin_url is null or checkin_url = '' or checkin_url like 'https://%'), -- check-in online (registro de viajeros)
  paid_until date,
  created_at timestamptz not null default now()
);
alter table public.properties enable row level security;
drop policy if exists "owner can do everything" on public.properties;
create policy "owner can do everything" on public.properties
  for all using (owner = auth.uid()) with check (owner = auth.uid());

-- El anfitrión no puede alargarse la suscripción: solo el admin cambia paid_until.
create or replace function public.protect_paid_until() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if tg_op = 'INSERT' then
    new.paid_until := (current_date + interval '1 year')::date;
  elsif new.paid_until is distinct from old.paid_until and not public.am_i_admin() then
    new.paid_until := old.paid_until;
  end if;
  return new;
end $$;
drop trigger if exists trg_protect_paid_until on public.properties;
create trigger trg_protect_paid_until before insert or update on public.properties
  for each row execute function public.protect_paid_until();

-- ---------- Kits (código de activación que va en la caja) ----------
create table if not exists public.kits (
  code text primary key,
  order_ref text,
  tag_count int not null default 4,
  claimed_by uuid references auth.users(id) on delete set null,
  claimed_at timestamptz,
  created_at timestamptz not null default now()
);
alter table public.kits enable row level security;
drop policy if exists "read own or admin" on public.kits;
create policy "read own or admin" on public.kits for select using (claimed_by = auth.uid() or public.am_i_admin());
drop policy if exists "admin writes" on public.kits;
create policy "admin writes" on public.kits for insert with check (public.am_i_admin());

-- ---------- Etiquetas NFC (una fila por chip) ----------
create table if not exists public.tags (
  code text primary key,
  kit_code text not null references public.kits(code) on delete cascade,
  property_id uuid references public.properties(id) on delete set null,
  section_key text,
  label text check (char_length(label) <= 60),
  created_at timestamptz not null default now()
);
alter table public.tags enable row level security;
drop policy if exists "read own kit tags or admin" on public.tags;
create policy "read own kit tags or admin" on public.tags for select using (
  public.am_i_admin() or exists (select 1 from public.kits k where k.code = kit_code and k.claimed_by = auth.uid()));
drop policy if exists "host links own tags" on public.tags;
create policy "host links own tags" on public.tags for update using (
  exists (select 1 from public.kits k where k.code = kit_code and k.claimed_by = auth.uid()))
  with check (property_id is null or exists (select 1 from public.properties p where p.id = property_id and p.owner = auth.uid()));
drop policy if exists "admin inserts tags" on public.tags;
create policy "admin inserts tags" on public.tags for insert with check (public.am_i_admin());
-- El anfitrión solo puede tocar estas columnas:
revoke update on public.tags from anon, authenticated;
grant update (property_id, section_key, label) on public.tags to authenticated;

-- ---------- Toques (anónimos: sin IP, sin cookies) ----------
create table if not exists public.taps (
  id bigserial primary key,
  tag_code text not null references public.tags(code) on delete cascade,
  at timestamptz not null default now(),
  lang text
);
alter table public.taps enable row level security;  -- sin políticas: solo vía funciones
create index if not exists taps_tag_at on public.taps (tag_code, at);

-- ---------- Pedidos ----------
create table if not exists public.orders (
  id bigserial primary key,
  ref text unique not null check (char_length(ref) <= 20),
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) <= 200),
  email text not null check (char_length(email) <= 200),
  phone text check (char_length(phone) <= 30),
  zone text check (zone in ('PEN','BAL')),   -- península / Baleares
  address text check (char_length(address) <= 600),
  vat text check (char_length(vat) <= 120),
  finish text check (char_length(finish) <= 40),
  items jsonb not null default '[]'::jsonb,
  total numeric(10,2) not null,
  currency text not null default 'EUR',
  payment_method text check (payment_method in ('paypal','transfer','bizum','shopify')),
  status text not null default 'pending' check (status in ('pending','paid','shipped','cancelled')),
  tracking text check (char_length(tracking) <= 80),   -- nº de seguimiento del envío
  notes text
);
alter table public.orders enable row level security;
drop policy if exists "anyone can place an order" on public.orders;
create policy "anyone can place an order" on public.orders for insert to anon, authenticated with check (status = 'pending');
drop policy if exists "admin reads orders" on public.orders;
create policy "admin reads orders" on public.orders for select using (public.am_i_admin());
drop policy if exists "admin updates orders" on public.orders;
create policy "admin updates orders" on public.orders for update using (public.am_i_admin());

-- App de pedidos (pedidos.html): avisos en tiempo real. Realtime respeta RLS: solo el admin los recibe.
do $ begin
  alter publication supabase_realtime add table public.orders;
exception when duplicate_object then null; end $;

-- ---------- Funciones públicas ----------
-- Página del huésped: devuelve la guía de la etiqueta (sin datos del dueño).
create or replace function public.get_guide(p_code text) returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object(
    'section_key', g.section_key,
    'property',
      case when p.paid_until is not null and p.paid_until < current_date
        then (to_jsonb(p) - 'owner' - 'created_at' - 'sections' - 'contact') || '{"sections": []}'::jsonb
        else (to_jsonb(p) - 'owner' - 'created_at') end
      || case when p.wifi_hidden then '{"wifi_password": null}'::jsonb else '{}'::jsonb end)
  from public.tags g join public.properties p on p.id = g.property_id
  where g.code = p_code;
$$;

create or replace function public.log_tap(p_code text, p_lang text) returns void
language sql volatile security definer set search_path = public as $$
  insert into public.taps (tag_code, lang)
  select code, left(p_lang, 5) from public.tags where code = p_code and property_id is not null;
$$;

create or replace function public.claim_kit(p_kit text) returns public.kits
language plpgsql volatile security definer set search_path = public as $$
declare k public.kits;
begin
  if auth.uid() is null then raise exception 'Please log in first'; end if;
  update public.kits set claimed_by = auth.uid(), claimed_at = now()
   where code = upper(trim(p_kit)) and (claimed_by is null or claimed_by = auth.uid())
   returning * into k;
  if k.code is null then raise exception 'Kit code not found or already activated'; end if;
  return k;
end $$;

create or replace function public.tap_stats(p_days int default 30)
returns table (tag_code text, taps bigint)
language sql stable security definer set search_path = public as $$
  select t.tag_code, count(*) from public.taps t
  join public.tags g on g.code = t.tag_code
  join public.kits k on k.code = g.kit_code
  where k.claimed_by = auth.uid() and t.at > now() - make_interval(days => p_days)
  group by t.tag_code;
$$;

-- ---------- Funciones de admin ----------
create or replace function public.admin_properties()
returns table (id uuid, name text, owner_email text, paid_until date)
language plpgsql stable security definer set search_path = public as $$
begin
  if not public.am_i_admin() then raise exception 'Not allowed'; end if;
  return query select p.id, p.name, u.email::text, p.paid_until
    from public.properties p join auth.users u on u.id = p.owner order by p.paid_until nulls first;
end $$;

create or replace function public.admin_set_paid_until(p_id uuid, p_date date) returns void
language plpgsql volatile security definer set search_path = public as $$
begin
  if not public.am_i_admin() then raise exception 'Not allowed'; end if;
  update public.properties set paid_until = p_date where id = p_id;
end $$;

-- Funciones de admin: que no las pueda llamar nadie sin sesión
revoke execute on function public.admin_properties() from anon;
revoke execute on function public.admin_set_paid_until(uuid, date) from anon;

-- =====================================================================
--  ÚLTIMO PASO: pon TU email (el que usarás para entrar en admin.html)
-- =====================================================================
insert into public.admins (email) values ('tu-email@ejemplo.com') on conflict do nothing;
