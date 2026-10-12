-- =====================================================================
--  LISTA DE ESPERA (modo "Apúntame", SALES_OPEN: false en config.js)
--  Pega esto en Supabase > SQL Editor > Run. Se puede ejecutar varias veces.
--  (Ya va incluido en schema.sql: si ejecutas schema.sql entero, no hace falta.)
-- =====================================================================
create table if not exists public.waitlist (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  name text not null check (char_length(name) <= 200),
  email text not null check (char_length(email) <= 200),
  phone text check (char_length(phone) <= 30),
  city text check (char_length(city) <= 120),
  units int check (units between 1 and 500),
  product text check (char_length(product) <= 40),
  contacted boolean not null default false,
  notes text check (char_length(notes) <= 1000)
);
alter table public.waitlist enable row level security;
drop policy if exists "anyone can join" on public.waitlist;
create policy "anyone can join" on public.waitlist for insert to anon, authenticated with check (contacted = false);
drop policy if exists "admin reads waitlist" on public.waitlist;
create policy "admin reads waitlist" on public.waitlist for select using (public.am_i_admin());
drop policy if exists "admin updates waitlist" on public.waitlist;
create policy "admin updates waitlist" on public.waitlist for update using (public.am_i_admin());
drop policy if exists "admin deletes waitlist" on public.waitlist;
create policy "admin deletes waitlist" on public.waitlist for delete using (public.am_i_admin());
do $$ begin
  alter publication supabase_realtime add table public.waitlist;
exception when duplicate_object then null; end $$;
