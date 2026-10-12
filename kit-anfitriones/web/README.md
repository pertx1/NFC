# Web de TocToc: azulejo NFC para pisos turísticos en España

Web estática (HTML + JS) con base de datos en Supabase. Sin Stripe: cobros por **Bizum, transferencia o tarjeta (PayPal)**, con Shopify como opción. Venta enfocada en España (península y Baleares).

| Archivo | Qué es |
|---|---|
| `index.html` | Portada en español con la demo en vivo (cambias la clave y el móvil se actualiza) |
| `order.html` | Pedido: productos, acabado, envío a península o Baleares, Bizum, transferencia o tarjeta |
| `g.html?t=CODIGO` | Lo que ve el huésped: 7 idiomas, wifi, botón de registro de viajeros y nº de registro turístico |
| `panel.html` | Panel del anfitrión: activar kit, guía con selector de iconos, wifi, etiquetas y estadísticas |
| `pedidos.html` | **App de pedidos para el móvil** (instalable): pedidos en directo, avisos, llamar o WhatsApp, marcar pagado o enviado y nº de seguimiento |
| `admin.html` | **Tu** panel: pedidos, kits, azulejo en SVG con su QR, tarjeta de activación y renovaciones |
| `legal.html` | Aviso legal (LSSI), privacidad (RGPD) y condiciones (plantilla para revisar) |
| `config.js` | **El único archivo que tienes que editar** |
| `assets/` | Estilos (sistema "azulejo de portal"), iconos propios y capa de datos |
| `supabase/schema.sql` | Tablas y permisos: se pega en Supabase > SQL Editor |
| `supabase/avisos-telegram.sql` | Opcional: te manda cada pedido por Telegram, aunque la app esté cerrada |
| `DESIGN.md` | Sistema visual: colores, tipografías, componentes y reglas |

**Probar ya:** abre `index.html` con doble clic. Mientras `SUPABASE_URL` esté vacío funciona en modo demo:
- Panel del anfitrión: `panel.html`, con el email `host@demo.test`.
- Tu panel de vendedor: `admin.html`, con el email `admin@demo.test`.

**Ponerla en marcha:** sigue `../guia/guia-kit-anfitriones.pdf` (días 3 a 7 y anexo B).

**Si ya tenías la base de datos creada** con la versión anterior, ejecuta esto en el SQL Editor de Supabase:

```sql
alter table public.properties add column if not exists license_number text, add column if not exists checkin_url text;
alter table public.orders add column if not exists phone text, add column if not exists zone text, add column if not exists tracking text;
alter publication supabase_realtime add table public.orders;
```

## App de pedidos en el móvil
1. Abre `https://TU-WEB/pedidos.html` en el móvil y entra con tu email de admin.
2. Instálala:
   - **iPhone (Safari):** botón Compartir → *Añadir a pantalla de inicio*.
   - **Android (Chrome):** botón *Instalar* o menú ⋮ → *Instalar app*.
3. Pulsa la campana para activar los avisos. Los pedidos llegan en directo (Supabase Realtime) con sonido y vibración.
4. Para avisos con la app **cerrada**, ejecuta `supabase/avisos-telegram.sql` (Telegram, gratis).
