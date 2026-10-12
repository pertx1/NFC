# Kit NFC para anfitriones (España): guía día a día

*Versión del 11-10-2026. Supuestos: 2 h al día, 25 € de presupuesto propio, sin Stripe y venta a anfitriones de pisos turísticos en España. Las referencias [n] remiten a la lista de fuentes del final.*

## 0. Antes de empezar: qué vas a montar y con qué

### Qué vendes
Un **azulejo NFC para la entrada de un piso turístico**:
- azulejo de 10 × 10 cm con cenefa de cobalto, chip NFC y QR de respaldo;
- 3 pegatinas NFC para la cafetera, el aire o la puerta;
- 12 meses de **guía digital editable**: wifi, llegada, electrodomésticos, normas, recomendaciones y enlace al check-in online, en 7 idiomas.

El huésped (casi siempre extranjero) acerca el móvil y ve la guía en su idioma. El anfitrión cambia lo que quiera desde el móvil sin reimprimir nada.

### Por qué en España
- **Hay muchísimos pisos turísticos** y anfitriones pequeños que gestionan desde el móvil.
- **El registro de viajeros (SES.HOSPEDAJES) es obligatorio desde el 2-12-2024** [16]. Los anfitriones necesitan que el huésped meta sus datos, y la guía lleva un botón destacado a su check-in online.
- **Cada comunidad autónoma tiene su registro turístico**, y la guía muestra su número.
  > ⚠️ El **registro único estatal (NRUA)** fue anulado en gran parte por el Tribunal Supremo en mayo de 2026 [17]. **No lo uses como argumento de venta.**
- **Vender solo en España simplifica todo:** IVA español al 21 %, sin aduanas (salvo Canarias, Ceuta y Melilla), Bizum y envíos de 24-72 h.

### Lo que ya tienes hecho (carpeta `kit-anfitriones/`)
| Carpeta o archivo | Qué es |
|---|---|
| `web/index.html` | Portada en español, con la demo en vivo (cambias la clave y el móvil de ejemplo se actualiza) |
| `web/order.html` | Pedido + pago con **Bizum, transferencia o tarjeta (PayPal)**; envío a península o Baleares |
| `web/g.html` | Lo que ve el huésped: 7 idiomas, wifi con botón de copiar, botón de registro de viajeros y nº de registro turístico |
| `web/panel.html` | Panel del anfitrión: activar kit, guía con iconos, wifi, etiquetas y estadísticas |
| `web/admin.html` | **Tu** panel: pedidos, crear kits, diseño del azulejo con su QR, renovaciones |
| `web/legal.html` | Aviso legal (LSSI), privacidad (RGPD) y condiciones de venta (plantilla) |
| `web/config.js` | **El único archivo que editas** |
| `web/supabase/schema.sql` | Base de datos con sus permisos |
| `plantillas/` | Azulejo de ejemplo (SVG) y hoja A4 de pegatinas de 30 mm |

Abre `web/index.html` con doble clic: funciona en **modo demo** sin conectar nada.

![Portada](img/web-landing.png)

![Cómo funciona](img/diagrama-d1.png)

### Precios recomendados para España
Las placas NFC de reseñas en Amazon.es cuestan 17-35 € (búsqueda del 11-10-2026). Por eso el kit baja a 39 €, y la cuota pasa a **anual**, porque sin Stripe no hay cobro mensual automático.

| Producto | Precio (IVA incluido) | Qué incluye |
|---|---|---|
| Kit Anfitrión | **39 €** | Azulejo + 3 pegatinas + 12 meses de guía |
| Pegatinas extra | **9 €** | 5 pegatinas NFC |
| Pack Gestor | **169 €** | 5 kits con un único acceso |
| Renovación | **24 €/año** | Desde el mes 13; sin renovar, el azulejo sigue mostrando el wifi |
| Envío | Península 4,90 € · Baleares 7,90 € | Tarifas reales **sin confirmar** [E]: compruébalas el día 13 |

**Números de un kit cobrado por Bizum o transferencia** [E]:

| Concepto | € |
|---|---|
| Precio cobrado (sin envío) | 39,00 |
| − IVA 21 % (39 / 1,21) | −6,77 |
| − Azulejo (taller) | −4,50 [E] |
| − 4 chips (70 por 7,99 € en Amazon.es = 0,11 € cada uno) | −0,46 |
| − Caja, tarjeta y adhesivo | −1,20 [E] |
| **Margen por kit** | **≈ 26 €** |

Con tarjeta vía PayPal resta además 2,9 % + 0,35 € (unos 1,6 €) [1]. El envío lo cobras aparte.

### En qué te gastas los 25 €
| Compra | € | Cuándo |
|---|---|---|
| 70 pegatinas NTAG213 (Amazon.es, 7,99 €) | 7,99 | Día 2 |
| Prototipo del azulejo: impresión en papel fotográfico + marco de 13×13 cm sin metal, o un azulejo blanco de 10×10 cm de una tienda de bricolaje | ~4 [E] | Día 8 |
| **Total de tu bolsillo** | **~12 €** | |
| Colchón | ~13 € | Imprevistos |
| Dominio `.es` (~10 €/año [E]) | — | **Con el primer cobro**, día 22 |
| Azulejos de taller, cajas, envíos | — | **Con el dinero de cada pedido** |

**Gratis:**
- Supabase, plan gratuito (se pausa tras una semana sin uso) [5].
- Cloudflare Pages [6].
- Brevo, 300 emails al día [7].
- Formspree, avisos de pedido.
- NFC Tools.
- PayPal, solo comisión por venta [1].

### Las reglas de este plan
1. **Primero se cobra y después se fabrica.**
2. **La URL grabada en un chip es para siempre**: pon tu dominio definitivo en `config.js` antes del primer chip de un cliente (día 22).
3. **Con 2 horas al día, cada día tiene una sola meta.**
4. **Hay fechas para decidir**: días 21, 56 y 90.

---

## 1. Cómo cobrar sin Stripe (en España)

| Opción | Coste | Ventajas | Inconvenientes | Uso |
|---|---|---|---|---|
| **Bizum** | 0 € | Instantáneo y lo usa todo el mundo en España | 🔍 El Bizum de particulares es para uso personal; para cobrar como negocio pregunta a tu banco si tiene Bizum para autónomos o comercios | **Método principal** |
| **Transferencia** | 0 € | Sin comisiones; ideal para gestoras con factura | Tarda unas horas o un día | Gestores y Pack Gestor |
| **Tarjeta vía PayPal** | 2,9 % + 0,35 € por venta [1] | El cliente paga con tarjeta sin cuenta PayPal | Comisión | Quien no quiera Bizum |
| **Shopify Starter** | ~5 $/mes (precio en EE. UU.; confirma el de España) [2] | Tarjeta, Apple Pay y Google Pay sin cuenta de Stripe | Cuota mensual | Fase 2 (día 57+), con más de 8 kits al mes |

![Circuito de pedido](img/diagrama-d2.png)

> **Canarias, Ceuta y Melilla.** Fiscalmente son envíos fuera del territorio del IVA. Llevan DUA (declaración de aduana), y el destinatario paga el IGIC o el IPSI y la gestión aduanera [18]. Por eso la web no los ofrece en el pedido: se atienden por email. 🔍 Pregunta a tu gestor cómo facturarlos antes del primero.

---

## 2. Plan día a día

**Cómo leer cada día:** 🎯 objetivo · ⏱️ tiempo · ✅ tareas · 🧨 paranoia (lo que suele salir mal).

### Semana 1 · Preparación: cuentas y web en internet

#### Día 1 · Nombre, correo y hoja de control
🎯 Tener nombre de marca, email y hoja de seguimiento. ⏱️ 2 h
✅ Tareas:
1. Elige nombre. `TocToc` es **provisional**. Compruébalo en **OEPM** (marcas en España) y **TMview** (UE), además del dominio `.es` e Instagram.
2. Crea el email de marca (un Gmail nuevo vale).
3. Crea una hoja de cálculo con 4 pestañas: **Pedidos**, **Contactos** (anfitriones a los que escribes), **Métricas** y **Gastos**.
4. Recorre la demo: portada → prueba la demo del móvil → *Ver una guía de ejemplo* → *Pedir kit* → *Entrar* (`host@demo.test`) → `admin.html` (`admin@demo.test`).

🧨 Paranoia: "Toc Toc" o "TocToc" puede estar registrado por otras empresas (inmobiliarias, apps). Si sale algo parecido en la clase 9 o 42, cambia el nombre ahora, que es gratis.

#### Día 2 · Chips y app de grabación
🎯 Tener chips y saber grabarlos. ⏱️ 1,5 h
✅ Tareas:
1. Compra **70 pegatinas NTAG213** (7,99 € en Amazon.es). NTAG213 tiene 144 bytes, sobra para la URL, y lo leen iPhone y Android.
2. Instala **NFC Tools**.
3. Lee el **anexo A**.
4. En `config.js`, rellena `BRAND`, `CONTACT_EMAIL`, `SELLER_NAME`, `SELLER_TAX_ID` y `SELLER_ADDRESS`.

🧨 Paranoia: no compres MIFARE Classic, porque los iPhone no los leen. **Las pegatinas normales no funcionan sobre metal**; para la nevera o la caldera hacen falta antimetal.

#### Día 3 · Cobros: Bizum, transferencia y PayPal
🎯 Poder cobrar por tres vías. ⏱️ 2 h
✅ Tareas:
1. Pregunta a tu banco si tu cuenta de autónomo admite **Bizum para cobros de tu actividad** (algunos bancos lo ofrecen para autónomos o comercios). Pon el móvil en `BIZUM_PHONE`.
2. Pon tu IBAN y titular en `IBAN` e `IBAN_HOLDER` (mejor una cuenta separada para el negocio).
3. Crea **PayPal Business** (gratis) y tu enlace **PayPal.me** → `PAYPAL_ME`. Comprueba en incógnito que aparece "Pagar con tarjeta".
4. Apunta las comisiones: Bizum y transferencia 0 €; PayPal 2,9 % + 0,35 € [1].

🧨 Paranoia:
- **PayPal:** que te paguen como "bienes y servicios", nunca como "amigos". PayPal puede retener fondos al principio; ten colchón.
- **Bizum:** guarda captura de cada pago con su concepto (`TT-XXXXXX`) para cuadrar cuentas.

#### Día 4 · Base de datos (Supabase)
🎯 La base de datos funcionando. ⏱️ 2 h
✅ Tareas:
1. En supabase.com → **New project** → región **Central EU (Frankfurt)** → contraseña fuerte.
2. **SQL Editor** → pega `web/supabase/schema.sql`. Antes de ejecutar, cambia la última línea por **tu email** → **Run**.
3. **Project Settings → API**: copia la URL y la clave **anon public** en `config.js`.

🧨 Paranoia: **nunca** pongas en la web la clave `service_role`. El proyecto gratuito se pausa tras una semana sin uso [5]: entra cada semana.

#### Día 5 · Emails de acceso (Brevo)
🎯 Que los anfitriones reciban su enlace para entrar. ⏱️ 2 h
✅ Tareas:
1. Por qué hace falta: el email que trae Supabase **solo envía a tu equipo, y como mucho 2 por hora** [10].
2. Crea una cuenta en **Brevo** (300 emails al día gratis) [7] → *SMTP & API* → copia los datos.
3. En Supabase: **Authentication → Emails → SMTP Settings → Enable custom SMTP** y pega los datos de Brevo.
4. **Authentication → Rate limits**: 30 emails por hora.
5. Plantilla **Magic Link** en español: "Tu enlace para entrar en {marca}".

🧨 Paranoia: con un Gmail como remitente, muchos enlaces caerán en spam. El día 22 verifica tu dominio en Brevo (SPF y DKIM).

#### Día 6 · Publicar la web
🎯 La web en una dirección pública. ⏱️ 2 h
✅ Tareas:
1. **Cloudflare → Workers & Pages → Create → Pages → Upload assets** → arrastra la carpeta `web` (sale `tumarca.pages.dev`).
2. Revisa las condiciones del plan gratuito [6]. **No uses Vercel Hobby: prohíbe el uso comercial** [12].
3. Supabase → *Authentication → URL Configuration* → **Site URL** = `https://tumarca.pages.dev/panel.html`, y añádela en *Redirect URLs*.
4. Crea un formulario en **Formspree** → `ORDER_NOTIFY_ENDPOINT` (te avisa por email de cada pedido).
5. Vuelve a subir la carpeta `web`.

🧨 Paranoia: cada cambio en `config.js` obliga a volver a subir la carpeta. Prueba en el móvil **con datos**, no con el wifi de casa.

#### Día 7 · Prueba de principio a fin
🎯 Un pedido falso completo. ⏱️ 2 h
✅ Tareas:
1. Haz un pedido con otro email tuyo y elige Bizum.

![Pedido](img/web-pedido.png)

2. Comprueba los errores del formulario: déjate el teléfono vacío y mira que te avise.

![Errores del formulario](img/web-pedido-error.png)

3. Comprueba las instrucciones de pago y el aviso de Formspree.

![Pedido hecho: Bizum](img/web-pedido-hecho.png)

4. En `admin.html`: **Marcar pagado** → **Crear kit**.

![Panel de vendedor](img/web-admin-pedidos.png)

5. Graba la URL 1 en un chip y tócalo: debe decir "Esta etiqueta aún no está activada".

<img class="phone" src="img/web-etiqueta-sin-activar.png" alt="Etiqueta sin activar">

6. Con el otro email, entra en `panel.html` → código del kit → escribe una guía corta → guarda → vuelve a tocar el chip.

<img class="half" src="img/web-panel-activar.png" alt="Activar kit">

7. Prueba con **un iPhone y un Android**.

🧨 Paranoia: abre `admin.html` en incógnito y comprueba que **sin entrar no se ven los pedidos**.

### Semana 2 · Producto físico y material de venta

#### Día 8 · Prototipo del azulejo
🎯 Un azulejo que se pueda fotografiar. ⏱️ 2 h
✅ Tareas:
1. Descarga el diseño desde `admin.html → Kits → Descargar azulejo (SVG)` o usa `plantillas/azulejo-10x10-ejemplo.svg`.

<img class="half" src="img/placa.png" alt="Diseño del azulejo">

2. Opciones de prototipo:
   - **(a)** imprímelo a 10×10 cm en papel fotográfico y mételo en un marco sin metal;
   - **(b)** compra un azulejo blanco de 10×10 cm en una tienda de bricolaje y pega encima el diseño en vinilo impreso.
3. Pega el chip **detrás del símbolo del wifi** y prueba la lectura con 3 móviles, con funda.

🧨 Paranoia:
- **Grosor:** un azulejo cerámico de ~6-8 mm suele dejar leer, pero **pruébalo**. Si no lee, pon el chip delante, bajo el vinilo.
- **Metal:** marcos con trasera metálica y tornillería bloquean la lectura.

#### Día 9 · Taller para los azulejos definitivos
🎯 2-3 presupuestos (sin pagar nada). ⏱️ 2 h
✅ Tareas:
1. Busca talleres de **impresión UV sobre azulejo**, de serigrafía cerámica o de vinilo sobre azulejo en tu zona. Alternativa: metacrilato de 3 mm o madera con impresión UV.
2. Envía el SVG (plantilla C.9) y pide precio por 1, 10 y 50 unidades, plazo y envío.
3. Objetivo: **menos de 5 € por pieza** en tiradas de 10.

🧨 Paranoia: no pagues una tirada sin una muestra física probada con el chip.

#### Día 10 · Una guía de ejemplo de verdad
🎯 Demo convincente. ⏱️ 2 h
✅ Tareas:
1. En tu panel, crea un piso de ejemplo con 6 secciones en **español e inglés**. Añade francés y alemán con DeepL.
2. Elige iconos para cada sección con el selector.

![Selector de iconos](img/web-panel-iconos.png)

3. Revisa cómo se ve en el móvil.

<img class="phone" src="img/web-guia-huesped.png" alt="Guía del huésped">

🧨 Paranoia: en demos públicas no pongas direcciones ni códigos de caja de llaves reales.

#### Día 11 · Fotos y vídeo
🎯 6 fotos y 2 vídeos cortos. ⏱️ 2 h
✅ Tareas:
1. Fotos:
   1. el azulejo junto a la puerta;
   2. mano con el móvil tocándolo;
   3. la pantalla de la guía;
   4. pegatina en la cafetera;
   5. el kit sobre la mesa;
   6. detalle de la cenefa.
2. Vídeo 1 (15 s): *"¿Tus huéspedes te escriben a las 12 de la noche por el wifi?"* → tocar → la guía aparece.
3. Vídeo 2: cambiar la clave desde el panel en 10 segundos.

<img class="phone" src="img/web-guia-cafetera.png" alt="La pegatina de la cafetera abre su sección">

#### Día 12 · Decidir el dominio
🎯 Decidir qué dirección va en los chips. ⏱️ 1 h
✅ Tareas:
1. Las URLs grabadas tienen esta forma: `https://TUDOMINIO/g.html?t=AB12CD` y **no se pueden cambiar sin regrabar**.
2. Recomendado: comprar `tumarca.es` con el primer cobro (día 22).
3. **No grabes chips de clientes antes de poner `SITE_URL`.**

🧨 Paranoia: si dejas caducar el dominio, **todos los azulejos vendidos dejan de funcionar**. Renovación automática y 2-3 años en cuanto puedas.

#### Día 13 · Legal, envíos y precios
🎯 La letra pequeña lista. ⏱️ 2 h
✅ Tareas:
1. Revisa `legal.html` (aviso legal LSSI, privacidad RGPD y condiciones).
2. Mira tarifas en **Correos** (paquetería nacional) y en comparadores como **Packlink**. Ajusta `SHIPPING`.
3. Elige herramienta de facturas. **Verifactu será obligatorio para autónomos desde el 1-7-2027** [13].
4. Pregunta a tu gestor: IVA 21 %, factura a gestoras con CIF, Bizum en la cuenta de autónomo y envíos a Canarias.

🧨 Paranoia: el IVA está incluido en el precio: de 39 € solo 32,23 € son tuyos. Guarda el IVA para el modelo 303.

#### Día 14 · Revisión antes de lanzar
🎯 Pasar la lista del **anexo I**. ⏱️ 2 h

### Semana 3 · Validación: ¿alguien paga?

#### Día 15 · Escuchar a los anfitriones
🎯 30 quejas literales de anfitriones. ⏱️ 2 h
✅ Tareas:
1. Lee grupos de Facebook de anfitriones en España (busca "anfitriones Airbnb", "pisos turísticos" + tu ciudad o comunidad) y foros de la comunidad de Airbnb en español.
2. Copia frases tal cual: "me escriben a las tantas por el wifi", "nunca leen el manual"…
3. Apunta qué usan ahora: carpetas, PDF por WhatsApp, Chekin, Touch Stay…

🧨 Paranoia: no publiques todavía. Muchos grupos prohíben la publicidad.

#### Día 16 · Lista de 50 clientes posibles
🎯 50 anfitriones o gestoras con contacto público. ⏱️ 2 h
✅ Tareas:
1. Instagram y TikTok: #pisoturistico, #anfitrionairbnb, #superhost, #alquilervacacional + ciudad.
2. Google: "gestión de pisos turísticos Málaga", "co-host Valencia", "gestora alquiler vacacional Mallorca".
3. Asociaciones de viviendas turísticas de tu comunidad: muchas tienen directorio o boletín y aceptan colaboradores.
4. Empresas de limpieza de pisos turísticos: entran en todos los pisos y son un canal de reventa.

🧨 Paranoia: escribe uno a uno a contactos de empresa publicados. El envío masivo de emails comerciales a particulares sin consentimiento está restringido (LSSI art. 21). 🔍

#### Día 17 · Mensajes 1-15
🎯 15 mensajes personalizados. ⏱️ 2 h
✅ Plantilla **C.2**. Oferta "anfitrión fundador": **30 % de descuento** (27,30 €) a los 10 primeros, a cambio de opinión y foto.

#### Día 18 · Mensajes 16-30 y una aportación útil
🎯 15 mensajes más y una publicación útil. ⏱️ 2 h
✅ En un grupo (si lo permite): "Lo que pongo en la guía de mis huéspedes para que no me escriban", sin enlace.

#### Día 19 · Publicar vídeos
🎯 2 vídeos en TikTok, Reels y Shorts. ⏱️ 2 h
✅ Texto: *"Que el wifi lo explique la pared, no tu WhatsApp."* Enlace en la biografía.

#### Día 20 · Seguimiento
🎯 Un recordatorio a quien no contestó. ⏱️ 2 h
✅ Apunta objeciones (precio, "ya tengo un QR", "¿y si se cae?") y prepara respuestas.

#### Día 21 · 🚦 Primera decisión
🎯 ¿Hay demanda? ⏱️ 1 h
✅ Cuenta solo los **pedidos pagados**.
- **3 o más** → sigue.
- **1-2** → sigue y repite con gestoras.
- **0** → cambia el mensaje o el segmento y repite una vez. Si vuelve a dar 0, pasa a la idea de regalos de voz reutilizando la web.

### Semana 4 · Primeros pedidos

#### Día 22 · Dominio con el primer cobro
🎯 Dirección definitiva funcionando. ⏱️ 2 h
✅ Tareas:
1. Compra `tumarca.es` con renovación automática.
2. Cloudflare Pages → *Custom domains*.
3. `config.js` → `SITE_URL: "https://tumarca.es/"` → vuelve a subir la web.
4. Supabase: actualiza *Site URL* y *Redirect URLs*.
5. Brevo: verifica el dominio (SPF y DKIM).

🧨 Paranoia: crea los kits **después** de este paso. El panel de vendedor te avisa si `SITE_URL` está vacío.

#### Día 23 · Encargar azulejos
🎯 Azulejos encargados con el dinero de los pedidos. ⏱️ 1,5 h
✅ `admin.html` → **Crear kit** → **Descargar azulejo (SVG)** por pedido. Cada azulejo lleva su propio QR.

![Kit creado](img/web-admin-kit.png)

🧨 Paranoia: nombra los archivos `azulejo-KIT-XXXXXX.svg`. Si mezclas azulejos entre clientes, el QR abrirá la guía de otro.

#### Día 24 · Grabar y bloquear los chips
🎯 Chips grabados, probados y bloqueados. ⏱️ 2 h
✅ Sigue el **anexo A**: chip 1 en el azulejo y chips 2-4 en las pegatinas. Apunta cada uno en la hoja.

🧨 Paranoia: el bloqueo es irreversible. Graba, prueba en 2 móviles y solo después bloquea.

#### Día 25 · Montaje y caja
🎯 Kits listos. ⏱️ 2 h
✅ Tareas:
1. Pega el chip y pon el adhesivo.
2. Imprime la **tarjeta de activación**, en español.
3. Imprime la hoja de pegatinas decorativas (`plantillas/pegatinas-30mm-A4.svg`).

<img class="half" src="img/pegatinas.png" alt="Hoja de pegatinas">

4. Caja con azulejo envuelto, pegatinas, tarjeta y factura. Prueba final con el móvil.

#### Día 26 · Envío
🎯 Paquetes en camino. ⏱️ 2 h
✅ Envía con **seguimiento** (Correos o Packlink) → **Marcar enviado** → email con el número de seguimiento (C.6).

#### Día 27 · Escaparate gratis
🎯 Perfil de Instagram y ficha de Google listos. ⏱️ 2 h
✅ Tareas:
1. Instagram con las fotos del día 11, enlace a la web y una historia destacada con la demo.
2. **Perfil de Empresa de Google** como negocio con zona de servicio (sin dirección pública).
3. Pide a los primeros clientes una reseña ahí.

#### Día 28 · Revisión del mes 1
🎯 Métricas y aprendizajes. ⏱️ 1 h

### Mes 2 · Tracción (días 29-56)

| Día | 🎯 Tarea | Detalle y paranoia |
|---|---|---|
| 29 | **Ayudar a activar** | 3 días después de cada entrega (C.7). Un kit sin activar = cliente que no renueva |
| 30 | Gestoras | 10 mensajes con el **Pack Gestor** y un azulejo de prueba gratis |
| 31 | Empresas de limpieza | 5 propuestas de reventa con un 15 % de comisión |
| 32 | Vídeo 3 | "Antes y después": carpeta plastificada frente al azulejo |
| 33 | Grupos y foros | 5 respuestas útiles, sin enlace salvo que lo pidan |
| 34 | Asociaciones | Escribe a la asociación de viviendas turísticas de tu comunidad: ¿descuento para socios a cambio de aparecer en su boletín? |
| 35 | **Revisión semanal** | ¿Qué canal ha traído pedidos? Duplica ese |
| 36 | Opiniones | Frase y foto de clientes activados → sección nueva en `index.html` |
| 37 | 10 mensajes a anfitriones | — |
| 38 | Vídeo 4 | "3 pegatinas que todo piso turístico necesita" |
| 39 | Artículo SEO 1 | "Plantilla de guía de bienvenida para pisos turísticos (gratis)" |
| 40 | Seguimiento a gestoras | — |
| 41 | Revisar costes | ¿Azulejo por debajo de 5 €? Pide precio para 20 **solo con 5 o más pedidos en cola** |
| 42 | **Revisión semanal** | Margen real por kit |
| 43 | FAQ | Añade las preguntas reales a `index.html` |
| 44 | Otra ciudad | 10 mensajes en una zona turística distinta (Canarias, solo si ya resolviste el envío) |
| 45 | Vídeo 5 | Testimonio (con permiso) |
| 46 | Artículo SEO 2 | "Registro de viajeros: cómo pedir los datos al huésped antes de que llegue" |
| 47 | Atención al cliente | Anota problemas en el anexo H |
| 48 | Prueba de precio | 7 días a 44 € para nuevos clientes y compara la conversión |
| 49 | **Revisión semanal** | — |
| 50 | 10 mensajes | — |
| 51 | Vídeo 6 | Recorrido por el panel en 30 s |
| 52 | Copias de seguridad | Exporta las tablas de Supabase a CSV |
| 53 | Cuentas | Facturas, IVA y gastos del mes → gestor |
| 54 | Colaboración | Fotógrafos de pisos turísticos: el azulejo sale en sus fotos |
| 55 | Recuperación | Termina lo que se quedó atrás |
| 56 | **🚦 Segunda decisión** | **Sigue si:** 10 o más kits y 70 % o más activados. **Replantea si:** 5-9. **Para si:** menos de 5 |

### Mes 3 · Recurrencia y escala (días 57-90)

| Día | 🎯 Tarea | Detalle y paranoia |
|---|---|---|
| 57 | ¿Shopify Starter? | Si vendes más de 8 kits al mes y te piden tarjeta o Apple Pay → `SHOPIFY_CHECKOUT_URL` |
| 58 | Página para gestoras | Sección propia con Pack Gestor, factura con CIF y soporte |
| 59 | 10 mensajes a gestoras | — |
| 60 | Vídeo 7 | — |
| 61 | Pack piso grande | Azulejo + 6 pegatinas |
| 62 | Artículo SEO 3 | "Qué poner en la entrada de un piso turístico" |
| 63 | **Revisión semanal** | — |
| 64 | Programa de recomendación | 5 pegatinas gratis por cada anfitrión que traiga otro |
| 65 | Mejorar el panel | La función más pedida |
| 66–70 | Ritmo | Mensajes, vídeo, foros, soporte y revisión semanal |
| 71 | Renovaciones | Plantilla C.8 y recordatorio en el calendario 30 días antes de cada fecha |

![Renovaciones](img/web-admin-renovaciones.png)

| Día | 🎯 Tarea | Detalle y paranoia |
|---|---|---|
| 72–75 | Caso de estudio | 1 cliente: "X mensajes menos por estancia", con sus palabras |
| 76 | Chips en lote | Con 10 o más pedidos al mes: NTAG213 en lotes de 100-500 (rfid.it ~0,39 €) [15] |
| 77 | **Revisión semanal** | — |
| 78–80 | Ferias y eventos | Jornadas de alquiler vacacional de tu comunidad: lleva 3 azulejos de demo |
| 81 | Revisión legal | Con el gestor: facturación del trimestre y Verifactu [13] |
| 83 | Stock mínimo | Con 20 o más pedidos al mes, 10 azulejos en stock (pagados con beneficios) |
| 84 | **Revisión semanal** | — |
| 85–88 | Encuesta | ¿Lo recomendarías? ¿Qué falta? ¿Renovarías por 24 €? |
| 89 | Preparar la decisión | Métricas de 90 días |
| 90 | **🚦 Decisión final** | **Escala si:** 25 o más kits, 70 % o más activados y 30 % o más de "renovaría". **Piloto automático si:** 10-25. **Para si:** menos de 10 |

---

## Anexo A · Grabar y bloquear chips NFC
1. NFC Tools → **Escribir** → **Añadir un registro** → **URL / URI**.
2. Pega la URL del kit (`admin.html → Copiar URLs`). Debe empezar por **https://** y llevar **tu dominio**.
3. **Escribir** → acerca el chip a la zona NFC del móvil.
4. **Prueba**: con la pantalla desbloqueada y sin abrir apps, acerca el chip → se abre la guía. Repite con otro sistema operativo.
5. **Bloqueo**: NFC Tools → **Otros** → **Bloquear etiqueta**. Es irreversible.
6. Apunta: código ✔ grabado ✔ iPhone ✔ Android ✔ bloqueado.

| Prueba | Resultado esperado |
|---|---|
| iPhone XS o posterior, desbloqueado | Notificación → abre la guía |
| Android con NFC activado | Abre el navegador |
| Con funda normal | Lee a 1-2 cm |
| Detrás de un azulejo cerámico o de 3 mm de acrílico | Lee (pruébalo con tu azulejo) |
| Sobre metal (pegatina normal) | **No lee**: usa antimetal |
| QR del azulejo | Abre la misma guía |

## Anexo B · Puesta en marcha técnica (resumen)
1. `config.js`: marca, contacto, NIF, `SITE_URL`, Supabase, Bizum, IBAN, PayPal y Formspree.
2. Supabase: proyecto en la UE → `schema.sql` (con tu email de admin) → URL y clave anon.
3. Supabase Auth: SMTP de Brevo, límite de 30 por hora, plantilla en español, Site URL y Redirect URLs.
4. Cloudflare Pages: subir `web` → dominio propio.
5. Prueba de principio a fin (día 7).

**Seguridad (ya incluida):**
- Cada anfitrión solo ve lo suyo.
- Los pedidos solo los ve el admin.
- Los toques se guardan sin IP.
- La fecha de renovación solo la cambia el admin.
- Si la guía caduca, el huésped solo ve el wifi.

## Anexo C · Plantillas de textos

**C.1 · Texto para la web, Instagram o un anuncio**
> Azulejo NFC para la entrada de tu piso turístico. Tus huéspedes acercan el móvil y ven el wifi, la llegada, las normas y el enlace al registro de viajeros en su idioma. Lo cambias todo desde el móvil, sin reimprimir. Incluye azulejo de 10 × 10 cm con QR, 3 pegatinas NFC y 12 meses de guía editable en 7 idiomas. 39 € con envío en 2-3 días a península y Baleares.

**C.2 · Primer mensaje a un anfitrión**
> ¡Hola, {nombre}! He visto {tu piso en…/tu publicación sobre…}. Una pregunta rápida: ¿tus huéspedes te siguen escribiendo por el wifi o por cómo funciona el aire? Hago azulejos NFC para la entrada: el huésped acerca el móvil y ve el wifi y la guía de la casa en su idioma, y tú lo cambias desde el móvil cuando quieras. Busco 10 "anfitriones fundadores" en {ciudad} con un 30 % de descuento a cambio de tu opinión. ¿Te mando un vídeo de 15 segundos?

**C.3 · Mensaje a una gestora**
> Hola, {nombre}. He visto que {gestora} gestiona {n} pisos en {zona}. Hacemos azulejos NFC con guía digital editable para cada piso, todos desde un mismo acceso, con botón al check-in online de vuestros huéspedes. ¿Os vendría bien un azulejo de prueba gratis para uno de vuestros pisos? El Pack Gestor de 5 kits sale a 169 € con factura.

**C.4 · Confirmación de pedido**
> ¡Gracias por tu pedido {ref}! Para pagar: Bizum al {móvil} o transferencia al {IBAN}, con el concepto {ref}. En cuanto llegue el pago fabricamos tu kit y sale en 2-3 días laborables.

**C.5 · Pago recibido**
> Hemos recibido el pago del pedido {ref}. ¡Gracias! Ya estamos preparando tu kit; te mandamos el seguimiento cuando salga.

**C.6 · Enviado**
> ¡Tu kit va de camino! Seguimiento: {número}. Cuando llegue, entra en {dominio}/panel.html con este email y escribe el código de la tarjeta que va en la caja. Son 3 minutos.

**C.7 · Ayuda para activar**
> Hola, {nombre}. ¿Te llegó bien el azulejo? Si aún no lo has activado, lo montamos juntos en una llamada de 10 minutos, o mándame la información de tu piso y te la dejo puesta yo.

**C.8 · Renovación (30 días antes)**
> Hola, {nombre}. La guía de {piso} está activa hasta el {fecha}. Para mantener la guía completa, las pegatinas y las estadísticas otro año, la renovación son 24 €: Bizum al {móvil} o transferencia con el concepto "Renovación {piso}". Si no renuevas, el azulejo seguirá mostrando tu wifi.

**C.9 · Petición de presupuesto al taller**
> Hola, necesito azulejos de 10 × 10 cm (cerámica blanca, o metacrilato de 3 mm como alternativa) con impresión UV a color según el SVG adjunto, sin piezas metálicas y con adhesivo de doble cara detrás. ¿Precio por 1, 10 y 50 unidades, plazo y envío? Cada pieza lleva un QR distinto: os mandaría un SVG por unidad.

## Anexo D · Envíos
- **Embalaje:** caja plana con cartón de protección, porque el azulejo cerámico se puede romper. Peso aproximado del kit: 250-400 g si es cerámico [E].
- **Seguimiento siempre**, con Correos o Packlink.
- **Península y Baleares:** 24-72 h según el servicio [E].
- **Canarias, Ceuta y Melilla:** DUA e IGIC o IPSI a cargo del destinatario [18]. Atiende por email y con el coste total cerrado antes.
- **Rotura:** si llega roto, reponlo (foto del cliente). Cuenta un 3-5 % de roturas en el margen [E].

## Anexo E · Facturas e impuestos (🔍 confirma con tu gestor)
- **Factura por cada venta**, con número correlativo, tus datos, NIF, base, IVA 21 % y total. A gestoras, con su CIF.
- **Solo España** (península y Baleares): IVA español al 21 %; no hace falta OSS.
- **Canarias, Ceuta y Melilla:** sin IVA español (operación asimilada a exportación); 🔍 cómo facturarlo y justificar el envío.
- **Verifactu:** obligatorio para autónomos desde el **1-7-2027** [13]. Elige ya un programa compatible.
- **Bizum en la cuenta de autónomo:** 🔍 que tu banco lo permita para tu actividad.
- **Renovaciones:** factura con IVA (servicio digital prestado en España).

## Anexo F · Protección de datos: lista de comprobación
- [ ] `legal.html` revisado (RGPD, LOPDGDD, LSSI).
- [ ] Supabase en una región de la UE.
- [ ] Toques sin IP ni cookies.
- [ ] Contratos de encargo del tratamiento aceptados en Supabase, Cloudflare, Brevo y Formspree.
- [ ] Procedimiento para borrar los datos de un cliente si lo pide.
- [ ] Los anfitriones no publican datos personales de terceros en la guía. La guía **solo enlaza** al check-in: los datos de los viajeros no pasan por tu web.

## Anexo G · Métricas semanales
| Métrica | Objetivo a 90 días |
|---|---|
| Mensajes enviados | 150+ |
| % de respuestas | 15 % o más |
| Pedidos pagados | 25+ |
| % de kits activados | 70 % o más |
| Margen neto por kit | 24 € o más |
| Horas por semana | ≤ 14 |

## Anexo H · Solución de problemas
| Problema | Causa | Solución |
|---|---|---|
| El iPhone no lee | Pantalla bloqueada, iPhone anterior al XS, funda con metal | Desbloquear, usar el QR, quitar la funda |
| No lee en ningún móvil | Chip sobre metal, azulejo grueso o chip dañado | Antimetal, chip delante o chip nuevo |
| No llega el enlace para entrar | SMTP sin configurar o correo en spam | Día 5, verificar el dominio en Brevo |
| "No encontramos ese código" | Código mal escrito | Los códigos no usan O, 0, I ni 1 |
| El huésped ve "no activada" | Etiqueta sin asignar | `panel.html → Etiquetas` |
| La guía solo muestra el wifi | Renovación caducada | `admin.html → Renovaciones` → "Añadir 1 año" |
| Supabase "paused" | Una semana sin uso | Reanudar y entrar cada semana |

## Anexo I · Lista de comprobación antes de lanzar
- [ ] Nombre comprobado en OEPM y TMview.
- [ ] `config.js` sin datos de ejemplo (IBAN, Bizum, NIF, email).
- [ ] Bizum de autónomo confirmado con el banco.
- [ ] `SITE_URL` definitivo **antes** de los kits de clientes y dominio con renovación automática.
- [ ] Email de admin en `admins`; sin sesión no se ven los pedidos.
- [ ] SMTP propio: el enlace llega a Gmail y a Outlook.
- [ ] Prueba completa: pedido → pago → kit → chip → activación → guía.
- [ ] iPhone y Android, con y sin funda, a través del azulejo real.
- [ ] Chips con **https**, bloqueados después de probar.
- [ ] Tarifas reales de Correos o Packlink en `SHIPPING`.
- [ ] Textos legales revisados.
- [ ] Copia de seguridad (CSV) de las tablas.

---

## Lista de fuentes
Todas consultadas el 11-10-2026.

1. Tarifas de vendedor de PayPal España: https://www.paypal.com/es/webapps/mpp/merchant-fees · Shopify sobre comisiones de PayPal: https://www.shopify.com/es/blog/comisiones-paypal
2. Shopify Starter: https://ecommerce-platforms.com/es/articles/shopify-pricing-starter-vs-basic-vs-professional-vs-unlimited-which-plan-is-best-for-you · m8d (precios en España, sep-2026): https://m8d.io/shopify-precios/
5. Plan gratuito de Supabase: https://www.jetadmin.io/blog/supabase-pricing-2026-guide-to-plans-limits-and-real-world-costs/
6. Plan gratuito de Cloudflare Pages: https://costbench.com/software/cloud-infrastructure/cloudflare-pages-workers/free-plan/
7. Plan gratuito de Brevo: https://sendlayer.com/blog/best-free-smtp-servers/
10. SMTP de Supabase (solo equipo, 2 por hora): https://supabase.com/docs/guides/auth/auth-smtp · Brevo + Supabase: https://developers.brevo.com/docs/supabase-smtp-integration
12. Vercel Hobby sin uso comercial: https://schematichq.com/blog/vercel-pricing
13. Verifactu, 1-7-2027 para autónomos (RDL 15/2025): https://www.infoautonomos.com/blog/hacienda-retrasa-entrada-vigor-verifactu/
15. Precios de chips: https://rfid.it/en/iq-labels/5320-ntag213-nfc-sticker-29-mm-for-fast-and-secure-communication.html
16. Registro de viajeros SES.HOSPEDAJES (2-12-2024): Orain: https://orain.eus/es/actualidad/economia/2024/12/01/este-lunes-entra-en-vigor-nuevo-registro-de-viajeros-pese-al-rechazo-del-sector-turistico/ · Net2Rent (guía 2026): https://net2rent.com/guia-completa-ses-hospedajes/
17. Anulación parcial del registro único (TS 620/2026): Andersen: https://es.andersen.com/wp-content/uploads/2026/06/Andersen-Alerta-SENTENCIA-DEL-TRIBUNAL-SUPREMO-SOBRE-EL-REGISTRO-UNICO-DE-ARRENDAMIENTOS-DE-CORTA-DURACION.pdf · Net2Rent: https://net2rent.com/registro-unico-de-alquiler-vacacional/
18. Envíos a Canarias (DUA, IGIC): Sendcloud: https://www.sendcloud.com/es/blog/envios-a-canarias/ · Packlink: https://www.packlink.com/ca-ES/informacion-aduanas-canarias/
