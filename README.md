# Web del Kit NFC para anfitriones

Web estática (HTML + JS) con base de datos en Supabase. Sin Stripe: cobros por PayPal, transferencia o Bizum (y Shopify como opción).

| Archivo | Qué es |
|---|---|
| `index.html` | Página de venta (en inglés: el cliente está en Reino Unido, Alemania y Países Bajos) |
| `order.html` | Formulario de pedido + instrucciones de pago (PayPal, transferencia, Bizum, Shopify) |
| `g.html?t=CODIGO` | Lo que ve el huésped al tocar un chip (multidioma, wifi con botón de copiar) |
| `panel.html` | Panel del anfitrión: activar kit, editar la guía, wifi, etiquetas y estadísticas |
| `admin.html` | **Tu** panel: pedidos, marcar pagado o enviado, crear kits, placa en SVG, renovaciones |
| `legal.html` | Aviso legal, privacidad y condiciones (plantilla para revisar) |
| `config.js` | **El único archivo que tienes que editar** |
| `supabase/schema.sql` | Tablas y permisos: se pega en Supabase > SQL Editor |

**Probar ya:** abre `index.html` con doble clic. Mientras `SUPABASE_URL` esté vacío funciona en MODO DEMO, con los datos guardados en tu navegador:
- Panel del anfitrión: `panel.html`, con el email `host@demo.test`.
- Tu panel de vendedor: `admin.html`, con el email `admin@demo.test`.

**Ponerla en marcha:** sigue la guía `../guia/guia-kit-anfitriones.pdf`, días 3 a 7 y anexo B.
