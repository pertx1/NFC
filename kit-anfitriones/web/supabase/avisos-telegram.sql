-- =====================================================================
--  AVISOS DE PEDIDOS POR TELEGRAM (opcional, gratis)
--  Te llega un mensaje al móvil con cada pedido nuevo, aunque la app esté cerrada.
--
--  Antes de ejecutar:
--   1. En Telegram, habla con @BotFather → /newbot → elige un nombre → copia el TOKEN.
--   2. Escribe cualquier mensaje a tu bot nuevo (para que pueda hablarte).
--   3. Habla con @userinfobot → te dice tu "Id" (un número): es tu CHAT_ID.
--   4. Abajo, sustituye TU_TOKEN y TU_CHAT_ID y ejecuta todo en Supabase > SQL Editor.
--  El token se guarda en una tabla privada que la web no puede leer.
-- =====================================================================

create extension if not exists pg_net;

create table if not exists public.app_secrets (key text primary key, value text not null);
alter table public.app_secrets enable row level security;   -- sin políticas: invisible desde la web
revoke all on public.app_secrets from anon, authenticated;

insert into public.app_secrets (key, value) values
  ('telegram_token', 'TU_TOKEN'),
  ('telegram_chat_id', 'TU_CHAT_ID')
on conflict (key) do update set value = excluded.value;

create or replace function public.notify_order_telegram() returns trigger
language plpgsql security definer set search_path = public as $$
declare
  tok text := (select value from public.app_secrets where key = 'telegram_token');
  chat text := (select value from public.app_secrets where key = 'telegram_chat_id');
  pago text := case new.payment_method when 'bizum' then 'Bizum' when 'transfer' then 'Transferencia'
               when 'paypal' then 'Tarjeta/PayPal' else coalesce(new.payment_method, '') end;
begin
  if tok is null or chat is null or tok = 'TU_TOKEN' then return new; end if;
  perform net.http_post(
    url := 'https://api.telegram.org/bot' || tok || '/sendMessage',
    body := jsonb_build_object(
      'chat_id', chat,
      'text', '🛎️ Pedido nuevo ' || new.ref || chr(10) ||
              new.name || ' · ' || to_char(new.total, 'FM999990.00') || ' € · ' || pago || chr(10) ||
              coalesce(new.address, '')
    ),
    headers := '{"Content-Type": "application/json"}'::jsonb
  );
  return new;
exception when others then
  return new;   -- un fallo del aviso nunca debe impedir guardar el pedido
end $$;

drop trigger if exists trg_notify_order_telegram on public.orders;
create trigger trg_notify_order_telegram after insert on public.orders
  for each row execute function public.notify_order_telegram();

-- Prueba: haz un pedido en tu web y debería llegarte el mensaje en unos segundos.
-- Para desactivarlo:  drop trigger trg_notify_order_telegram on public.orders;
