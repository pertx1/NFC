# Negocios online con chips NFC: guía de investigación y plan de acción

*Investigación hecha el 11 de octubre de 2026. Todas las fuentes se consultaron ese día salvo que se indique otra fecha. Las referencias entre corchetes [n] remiten a la lista de fuentes del final.*

---

## Índice

0. [Supuestos, método y cómo leer este documento](#0-supuestos-método-y-cómo-leer-este-documento)
1. [Fase 1: lista amplia (28 ideas)](#fase-1-lista-amplia-28-ideas)
2. [Fase 2: filtro y puntuaciones](#fase-2-filtro-y-puntuaciones)
3. [Fase 3: guía completa de las 8 mejores](#fase-3-guía-completa-de-las-8-mejores)
   - 3.1 [Kit NFC para anfitriones de alquiler vacacional](#31-kit-nfc-para-anfitriones-de-alquiler-vacacional)
   - 3.2 [Autenticidad NFC para pequeñas marcas, artesanos y artistas](#32-autenticidad-nfc-para-pequeñas-marcas-artesanos-y-artistas)
   - 3.3 [Regalos con mensaje de voz o vídeo](#33-regalos-con-mensaje-de-voz-o-vídeo)
   - 3.4 [Búsqueda del tesoro / escape room NFC](#34-búsqueda-del-tesoro--escape-room-nfc)
   - 3.5 [Fotos de invitados en bodas y eventos](#35-fotos-de-invitados-en-bodas-y-eventos)
   - 3.6 [Memoriales NFC (personas y mascotas)](#36-memoriales-nfc-personas-y-mascotas)
   - 3.7 [Álbum NFC para músicos independientes](#37-álbum-nfc-para-músicos-independientes)
   - 3.8 [Control de herramientas para autónomos y pequeñas empresas de oficios](#38-control-de-herramientas-para-autónomos-y-pequeñas-empresas-de-oficios)
4. [Bloque común: legal, fiscal y técnico al vender desde España](#4-bloque-común-legal-fiscal-y-técnico-al-vender-desde-españa)
5. [Fase 4: recomendación y plan de 90 días](#fase-4-recomendación-y-plan-de-90-días)
6. [Lista de fuentes](#lista-de-fuentes)

---

## 0. Supuestos, método y cómo leer este documento

### Supuestos (tu mensaje tenía huecos con [X])
| Dato | Lo que he supuesto | Por qué |
|---|---|---|
| Horas al día | **2 horas al día**, unas 14 a la semana | Es lo típico para un proyecto que se lleva junto a un trabajo |
| Presupuesto inicial | **25 €** (dato confirmado por ti) | — |
| Tope para validar en 2 semanas | **15 €** como máximo | Reservo unos 10 € de margen por si Etsy cobra la cuota de apertura o hay un imprevisto |
| Forma jurídica | Autónomo en España (o a punto de darte de alta) | Ya has vendido tarjetas; lo doy por hecho |
| Infraestructura técnica | Web en Next.js o similar + base de datos (Supabase) + hosting | Es el stack más habitual cuando se programa con ayuda de IA |

### Qué cambia con 25 €: la regla de oro
Con 25 € no se compra stock. Todo el documento sigue esta regla: **primero se cobra y después se fabrica.**

1. **Se vende bajo pedido.** El anuncio se publica con fotos del prototipo y un plazo de 7-14 días. Con el dinero de cada venta compras el material de esa venta.
2. **Solo herramientas gratuitas al principio:**
   - **Web:** Supabase en plan gratuito (el proyecto se pausa tras una semana sin actividad [37]) y hosting gratis. Ojo: Vercel Hobby **no permite uso comercial** [37]. Cloudflare Pages tiene plan gratuito, pero no he encontrado confirmación de que permita uso comercial [42]; revisa sus condiciones.
   - **Dominio:** un subdominio gratuito al principio; el dominio propio (~10 €) se compra con la primera venta.
   - **Cobros:** Stripe Payment Links, sin cuota mensual (solo comisión por venta).
3. **Ojo con Etsy:** a los vendedores nuevos les puede cobrar una **cuota única de apertura de unos 15 $, que en algunos casos llega a 29 $**. Es variable según país y cuenta [43]; mira la cifra exacta que te muestre al registrarte. Si en España te la cobran, se lleva casi todo tu presupuesto. Entonces el orden es: validar primero con tienda propia (Payment Link) y mensajes directos, y abrir Etsy con el dinero de las primeras ventas.
4. **Prototipos mínimos:** un paquete de pegatinas NFC cuesta unos 8 € en Amazon.es (70 NTAG213 a 7,99 € o 60 NTAG215 a 8,99 €, comprobado el 11-10-2026). Con eso puedes probar casi todas las ideas. Los soportes (placa, marco, caja) se hacen al principio con lo que tengas o en un taller, y solo cuando hay un pedido pagado.
5. **Las cifras de inversión de cada idea** son de "fase 2", cuando ya hay ventas, y se pagan con lo que generan esas ventas. Cada idea tiene además su arranque con ≤25 €.

### Cómo distinguir hechos y estimaciones
- **[H]** = hecho comprobado con una fuente enlazada.
- **[E]** = estimación mía. Siempre explico cómo la he calculado.
- **Sin fuente** = no he encontrado el dato y lo digo, sin inventar cifras.

### Cómo he comprobado la competencia en el mercado hispano
1. **Amazon.es** (navegador real, ubicación Bilbao, 11-10-2026): busqué el término en español y miré el número de resultados y **los 6-8 primeros productos**. El número total no sirve de mucho, porque Amazon mezcla resultados parecidos. Por ejemplo, "placa wifi nfc" da "más de 20.000 resultados", pero los primeros son placas de reseñas de Google. Lo útil es ver si los primeros resultados son **exactamente** el producto. Si no lo son, hay hueco.
2. **Etsy** (versión España): busqué el término en inglés y anoté los primeros anuncios y sus precios. Etsy muestra "más de 1.000 artículos" para casi cualquier cosa, así que también miro si los primeros anuncios son el producto concreto.
3. **Shopify App Store**: para las ideas con software (autenticidad, por ejemplo).
4. **Búsqueda web** en español sobre la idea concreta (resultados de empresas españolas o latinoamericanas).
5. **Limitación:** Google Trends me bloqueó con un error 429 ("demasiadas solicitudes"), así que **no tengo datos de tendencia de búsqueda**. En cada idea te digo qué términos comparar tú mismo en trends.google.com (sección "Tendencias"). Tampoco he podido entrar en TikTok ni en Reddit con datos fiables, así que no doy cifras de visualizaciones.

### Advertencia sobre las fuentes
Muchas fuentes del sector NFC son blogs de proveedores que venden chips o etiquetas. Cuando una cifra viene solo de un proveedor interesado, lo indico. Los precios de marketplaces cambian a diario, así que tómalos como foto del 11-10-2026.

---

## Fase 1: lista amplia (28 ideas)

He excluido las reseñas de Google, Instagram y las cartas de restaurante, y también las variaciones de "tarjeta que abre un enlace a un perfil del negocio".

| # | Idea | A quién se vende | Cómo se gana dinero | Ejemplo real | País donde funciona | ¿Existe en España? (cómo lo comprobé) |
|---|---|---|---|---|---|---|
| 1 | **Kit NFC para alquiler vacacional** (placa wifi + guía digital editable) | Anfitriones de Airbnb y Booking, gestores de pisos | Kit físico + suscripción a la guía | [Touch Stay](https://touchstay.com/pricing-entry) (~99 $/año por propiedad según terceros [10]); [Hostfully](https://www.hostfully.com/pricing/digital-guidebooks/) (desde 9,99 $/mes [11]); placas NFC wifi en Etsy de 14 a 65 € [E-Etsy] | Reino Unido, EE. UU. | **Casi no.** En Amazon.es, "placa wifi nfc" devuelve placas de reseñas en los primeros puestos; no hay kits wifi+guía. Un caso aislado en Granada en 2013 [33] |
| 2 | **Autenticidad NFC** (chip criptográfico + panel) para pequeñas marcas, artesanos y artistas | Marcas de bolsos, zapatillas personalizadas, artistas, joyeros | Cuota mensual + chips | [Verisart](https://verisart.com) (29,99-99,99 $/mes, packs NFC [21]); SecureTag en Shopify (9,99 $/mes [S-Shopify]) | EE. UU., Reino Unido | **Muy poco.** En Shopify App Store, "nfc" da 46 apps y casi ninguna de autenticidad NFC. No encontré ningún proveedor español para pequeñas marcas |
| 3 | **Regalos con mensaje de voz o vídeo** (llavero, marco, colgante o peluche que reproduce un mensaje alojado) | Particulares (parejas, abuelos, duelo) | Venta del objeto; extra por alojamiento premium | Etsy: "oso NFC con memoria, vídeo, fotos y voz" a 37,33 €; peluches con grabadora analógica a 25-35 € [E-Etsy]; tarjetas recordables en Newegg [30] | EE. UU., Reino Unido, Alemania | **No en NFC.** "peluche mensaje voz nfc" en Amazon.es solo devuelve grabadoras analógicas (10-35 €) |
| 4 | **Búsqueda del tesoro / escape room NFC** (kit + panel donde escribes las pistas) | Padres (cumpleaños), profesores, team building | Kit + packs de aventuras digitales | No encontré kits comerciales; hay guías caseras (MacMost [27]) y Munzee para empresas [27] | EE. UU. (pascua, cumpleaños) | **No.** "busqueda del tesoro nfc" en Amazon.es: cero productos NFC entre los primeros |
| 5 | **Fotos de invitados en bodas** (tarjetas de mesa o pulseras NFC que suben fotos a una galería) | Novios, organizadores de bodas | Pack por evento | [Wearable Wedding](https://www.printplast.com/printplast-wearable-wedding-rfid-wristband-partnership/) (pulseras NFC [28]); llavero NFC de boda en Etsy a 9,90 €; carteles QR a 4-47 € | Alemania, EE. UU. | **No en NFC.** "nfc boda fotos invitados" en Amazon.es: libros de firmas de audio y pegatinas, ningún producto NFC de galería |
| 6 | **Memorial NFC para personas** (placa en lápida o nicho con página de homenaje) | Familias, funerarias, marmolistas | Placa + alojamiento (pago único o anual) | Quiring Living Headstones (QR, 156 $ [12]); Monumark (79 $); Turning Hearts (99,99 $); Life's QR (250 $) [4]; Lapidaris (Reino Unido, NFC) [4] | EE. UU., Reino Unido | **Sí, aunque poco:** Omneo/Omlim, empresa española, ofrece etiqueta NFC para lápidas [31]. Amazon.es "placa nfc lapida" solo da placas de reseñas |
| 7 | **Memorial NFC para mascotas** (placa de urna o jardín, peluche conmemorativo) | Dueños de mascotas en duelo | Objeto + página | Etsy: "oso de peluche conmemorativo NFC" 37,33 € [E-Etsy] | EE. UU., Reino Unido | No encontré oferta específica en español |
| 8 | **Álbum NFC para músicos independientes** (tarjeta o llavero que reproduce el disco) | Músicos y sellos pequeños | Lote de tarjetas al artista (4 $ → él vende a 20 $) | Community Musician [7]; Tapyoca (NJIT) [7]; KiT de Muzlive (6 M de unidades en un año según la empresa [6]) | Corea, EE. UU. | Etsy en español: solo llaveros de "canción favorita". No encontré servicio para artistas en España |
| 9 | **Merch de creadores con contenido desbloqueable** ("oshikatsu", fan goods) | Ilustradores, streamers, artistas | Fabricación por lote | Japón: llaveros NFC de "推し活"; un fabricante cobra unos +100 yenes por meter el chip [26] | Japón | No encontrado |
| 10 | **Ropa y parches conectados** para marcas pequeñas | Marcas de ropa independientes | Etiqueta NFC cosida + panel | Pasaporte digital de producto de la UE, que empieza por textil [5]; fichas NFC lavables de 1,60 $ [16] | UE (obligación futura) | No encontrado para pymes |
| 11 | **Coleccionables con certificado y registro de propietario** | Creadores de figuras, cartas o ediciones limitadas propias | Chip + registro | Verisart, IYK (proveedor aprobado por Billboard [35]) | EE. UU. | No encontrado |
| 12 | Chapas NFC para mascotas con perfil | Dueños de mascotas | Chapa + perfil (a veces suscripción) | PetHub (EE. UU., premium 39-49 $/año según un blog antiguo [1]) | EE. UU. | **Saturado:** Amazon.es "chapa nfc perro" >20.000 resultados, chapas NFC a 10,90-25,95 €; Etsy desde 7,99 € |
| 13 | Identificación médica y de emergencia (pulsera, casco) | Deportistas, enfermos crónicos | Objeto (perfil gratis o suscripción) | Twiceme 24,99 $; Tap2Tag 55 $; Sharewear 21-30 $ [2]; KOPILOT.ID [2] | EE. UU., Nórdicos | **Sí:** Amazon.es "pulsera nfc emergencia medica" 635 resultados, pulseras médicas NFC a 19,99-41,76 € |
| 14 | Pulseras para personas con demencia | Familias, ayuntamientos | Objeto + perfil | Reino Unido: la policía las reparte **gratis** (Avon y Somerset, más de 2.000) [29]; Lumiio (comercial) | Reino Unido | No encontrado; compite con programas públicos gratuitos |
| 15 | Tarjetas de audio infantil (compatibles con Yoto o Toniebox, o sistema propio) | Padres | Tarjetas personalizadas o suscripción de cuentos | Yoto MYO: unas 6.000 unidades/mes en Amazon EE. UU. **según una herramienta de terceros** [5b]; Etsy: tarjetas Yoto impresas a 11,27 € | Reino Unido, EE. UU., Alemania | Toniebox se vende en España; tarjetas personalizadas en español: no encontré |
| 16 | Packs de automatización del hogar (pegatinas + plantillas de Atajos o Home Assistant) | Aficionados a la tecnología | Pack físico + plantillas | Pegatinas a ~0,30 $ la unidad [17]; guías de Atajos [17] | EE. UU. | Hay pegatinas sueltas en Amazon.es (7,99 € los 70); packs con plantillas no |
| 17 | Placas de propina "toca y paga" (para músicos callejeros, guías o peluqueros) | Trabajadores por propinas | Placa + comisión o suscripción | Tipsme, TIPMO (2026), thankyü (Reino Unido) [18] | EE. UU., Reino Unido, Sudáfrica | No encontrado; la cultura de la propina con tarjeta es débil en España |
| 18 | Carteles inmobiliarios NFC ("toca para ver el piso") con captura de contactos | Agentes inmobiliarios | Cartel + página de anuncio + leads | HomeSmart SmartSigns [19] | EE. UU. | No encontrado; en España mandan los portales |
| 19 | Etiquetas en máquinas de gimnasio con vídeos de técnica | Gimnasios pequeños, entrenadores | Kit + suscripción | **Sin ejemplo comercial verificado** | — | No comprobado |
| 20 | Rutas NFC para turismo y museos | Ayuntamientos, museos | Proyecto B2B | Cáceres "Diggi" (préstamo de móviles NFC) [33] | España (piloto antiguo) | Pilotos antiguos; venta pública lenta |
| 21 | Etiquetas de equipaje y objetos perdidos | Viajeros | Etiqueta (sin cuota) | Dynotag 22-25 $ [3] | EE. UU. | **Saturado:** Amazon.es 401 resultados, muchas etiquetas NFC+QR a 18-25 € |
| 22 | Etiquetas de cuidado para plantas | Viveros, tiendas de plantas | Etiquetas + contenido | Proyecto casero en Hackaday [20] | — | No encontrado |
| 23 | Etiquetas de historia y autenticidad para bodegas y productores gourmet | Bodegas pequeñas que exportan | Etiquetas + panel | Boisset (JCB) [22]; según un proveedor, compensa en vinos de más de 150 $ [22] | EE. UU., Francia | No encontrado para bodegas pequeñas |
| 24 | Joyería con mensaje (colgante que reproduce voz o vídeo) | Parejas, duelo | Joya + alojamiento | Momento jewelry [30] | EE. UU. | No encontrado en español |
| 25 | Uñas con chip NFC | Público joven | Chip para uñas | INSTA NAIL Japón, 3.500-3.850 ¥ [23] | Japón | No; es una moda de nicho |
| 26 | Registro de bicicletas (propiedad, mantenimiento, ficha antirrobo) | Ciclistas, talleres | Etiqueta + app | Twiceme y KOPILOT (emergencia) [2] | Nórdicos, EE. UU. | No encontrado como registro de propiedad |
| 27 | Fidelización por toque (sellos NFC) | Cafeterías, peluquerías | Suscripción | TapStamp (Reino Unido, desde 20 £ [24]); Taply en Shopify [S-Shopify] | Reino Unido | Muchas apps y pases de wallet; competencia alta |
| 28 | Control de herramientas para oficios (prestar y devolver con un toque) | Fontaneros, electricistas, pequeñas constructoras | SaaS + etiquetas resistentes | UnTouch/ZVTOOL (Alemania) [25]; AssetTrack [25] | Alemania | No encontrado en español |

---

## Fase 2: filtro y puntuaciones

**Escala:** 1 = malo, 5 = bueno. En "competencia hispana", 5 = poca competencia. En "inversión", 5 = poca inversión.
**Columnas:** Dem = demanda demostrada · Comp = competencia en el mercado hispano · Marg = margen · Inv = inversión necesaria · Online = facilidad de vender online · Rec = ingreso recurrente · Encaje = encaje con tu situación.

| Puesto | Idea | Dem | Comp | Marg | Inv | Online | Rec | Encaje | **Total /35** |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Kit alquiler vacacional (#1) | 4 | 4 | 4 | 4 | 4 | 4 | 5 | **29** |
| 2 | Autenticidad para marcas y artistas (#2) | 3 | 5 | 4 | 4 | 3 | 5 | 4 | **28** |
| 3 | Búsqueda del tesoro NFC (#4) ⚠️ | 3 | 5 | 4 | 5 | 4 | 3 | 4 | **28** |
| 4 | Regalos de voz o vídeo (#3) | 4 | 4 | 4 | 4 | 5 | 2 | 4 | **27** |
| 5 | Fotos de invitados en bodas (#5) ⚠️ | 4 | 4 | 4 | 3 | 4 | 2 | 4 | **25** |
| 6 | Memorial de mascotas (#7) | 3 | 4 | 4 | 3 | 4 | 2 | 4 | **24** |
| 7 | Memorial de personas (#6) | 3 | 3 | 5 | 3 | 3 | 3 | 3 | **23** |
| 8 | Álbum NFC para músicos (#8) ⚠️ | 3 | 4 | 4 | 3 | 3 | 3 | 3 | **23** |
| 9 | Control de herramientas (#28) | 3 | 4 | 3 | 3 | 2 | 5 | 3 | **23** |
| 10 | Bodegas y gourmet (#23) | 3 | 4 | 3 | 4 | 2 | 3 | 3 | 22 |
| 11 | Fidelización por toque (#27) | 3 | 2 | 3 | 4 | 3 | 5 | 2 | 22 |
| 12 | Audio infantil (#15) ⚠️ | 4 | 3 | 3 | 3 | 4 | 3 | 2 | 22 |
| 13 | Coleccionables (#11) ⚠️ | 3 | 4 | 3 | 4 | 3 | 2 | 3 | 22 |
| 14 | Merch de creadores (#9) ⚠️ | 3 | 4 | 3 | 4 | 3 | 2 | 3 | 22 |
| 15 | Chapas de mascotas (#12) | 5 | 1 | 2 | 5 | 4 | 2 | 3 | 22 |
| 16 | ID médica (#13) ⚠️ | 3 | 3 | 3 | 4 | 4 | 2 | 2 | 21 |
| 17 | Inmobiliarias (#18) | 3 | 4 | 3 | 4 | 2 | 3 | 2 | 21 |
| 18 | Gimnasios (#19) | 2 | 4 | 3 | 4 | 2 | 3 | 3 | 21 |
| 19 | Packs de hogar (#16) | 2 | 3 | 2 | 5 | 4 | 1 | 4 | 21 |
| 20 | Joyería con mensaje (#24) | 3 | 3 | 4 | 3 | 4 | 1 | 3 | 21 |
| 21 | Bicicletas (#26) | 2 | 4 | 3 | 4 | 3 | 2 | 3 | 21 |
| 22 | Equipaje (#21) | 4 | 1 | 2 | 5 | 4 | 1 | 3 | 20 |
| 23 | Plantas (#22) | 2 | 5 | 2 | 4 | 2 | 2 | 3 | 20 |
| 24 | Ropa conectada (#10) | 2 | 4 | 3 | 3 | 2 | 3 | 3 | 20 |
| 25 | Propinas (#17) ⚠️ | 2 | 4 | 2 | 4 | 3 | 2 | 2 | 19 |
| 26 | Uñas NFC (#25) ⚠️ | 1 | 5 | 2 | 5 | 3 | 1 | 2 | 19 |
| 27 | Demencia (#14) ⚠️ | 2 | 4 | 3 | 4 | 2 | 2 | 1 | 18 |
| 28 | Turismo y museos (#20) | 2 | 3 | 3 | 4 | 1 | 3 | 2 | 18 |

> **Con 25 € de presupuesto**, la columna "Inversión" premia las ideas que se pueden validar sin comprar material: con preventa, bajo pedido o con una versión solo digital. Por eso bajan bodas, memoriales, música y herramientas, porque necesitan prototipos resistentes o tiradas impresas. La búsqueda del tesoro sube, porque su versión digital ("trae tus pegatinas") cuesta 0 €.

### Justificación en una línea de cada puntuación (ideas más relevantes)

**#1 Kit alquiler vacacional (29)**
- Dem 4: hay software de pago con miles de clientes (Touch Stay, Hostfully) y muchos anuncios de placas NFC wifi en Etsy [10][11]. No tengo cifras de ventas de esos anuncios.
- Comp 4: en Amazon.es los primeros resultados de "placa wifi nfc" son placas de reseñas, no kits para anfitriones.
- Marg 4: chip de 0,39 € [16] más placa barata, con precios de venta en Etsy de 14 a 65 €.
- Inv 4: se puede vender bajo pedido, pero hace falta un prototipo de placa (unos 5-10 €) para las fotos.
- Online 4: Etsy y grupos de anfitriones; el cliente busca activamente "airbnb wifi sign".
- Rec 4: la guía editable justifica una cuota (Touch Stay cobra ~99 $/año [10]).
- Encaje 5: es justo lo que sabes hacer (web editable + chip) y se diferencia de tus tarjetas de reseñas.

**#2 Autenticidad (28)**
- Dem 3: Verisart presume de más de 50.000 creadores [21], pero no he encontrado datos de uso del NFC.
- Comp 5: casi nada en español; en Shopify, solo SecureTag a 9,99 $/mes [S-Shopify].
- Marg 4: chip NTAG424 DNA a 0,79-0,82 € la unidad en lotes de 100 [16], vendido con software.
- Inv 4: los chips son más caros y hay que programar un verificador.
- Online 3: es venta B2B, hay que convencer.
- Rec 5: suscripción natural.
- Encaje 4: exige más programación (criptografía SUN), pero se puede hacer.

**#3 Regalos de voz o vídeo (27)**
- Dem 4: hay muchos anuncios de peluches y tarjetas con voz en Etsy y Amazon.
- Comp 4: en Amazon.es solo hay grabadoras analógicas, nada NFC.
- Marg 4: venta a 30-40 € con coste estimado de 6-10 €.
- Inv 4: bajo pedido; solo hace falta un prototipo (pegatina + un marco o llavero que ya tengas).
- Online 5: producto típico de Etsy y TikTok.
- Rec 2: compra puntual.
- Encaje 4: la parte digital (grabar y alojar) es sencilla.

**#4 Búsqueda del tesoro (28) ⚠️**
- Dem 3: no hay prueba directa para la versión NFC; la búsqueda del tesoro en general es muy popular, pero no tengo cifras.
- Comp 5: no encontré nada parecido.
- Marg 4: coste estimado de unos 8 € para venta a 25-30 €.
- Inv 5: la versión solo digital ("trae tus pegatinas") cuesta 0 €.
- Online 4: producto que se vende bien en vídeo.
- Rec 3: packs digitales de nuevas aventuras.
- Encaje 4: buena parte digital.
- **Riesgo:** si se dirige a niños, aplica la normativa de seguridad de juguetes (ver 3.4).

**#5 Bodas (25) ⚠️**
- Dem 4: mercado grande (boda media en EE. UU.: 33.000 $ [13]) y mucha oferta con QR, señal de que hay demanda.
- Comp 4: en España no hay versión NFC.
- Marg 4.
- Inv 3: hacen falta tarjetas de prototipo y almacenamiento para vídeo.
- Online 4.
- Rec 2: una boda por cliente.
- Encaje 4.
- **Riesgo:** datos personales de invitados, incluidos menores.

**#6 y #7 Memoriales (23-24)**
- Dem 3: hay varias empresas en EE. UU. con precios de 79 a 250 $ [4][12].
- Comp: 3 en personas (existe Omneo en España [31]) y 4 en mascotas.
- Marg 4-5: precio alto frente a un coste bajo.
- Rec 2-3.
- Inv 3: hace falta un prototipo resistente a la intemperie, con chip antimetal.
- Encaje 3-4: es un tema delicado y obliga a garantizar el alojamiento durante años.

**#8 Músicos (23) ⚠️**
- Dem 3: el formato funciona en Corea [6] y ahora puntúa en Billboard, pero **solo a través de proveedores aprobados** [35]. Es una desventaja para ti.
- Rec 3: los artistas repiten pedidos en cada lanzamiento.
- **Riesgo:** derechos de autor del audio.

**#28 Herramientas (23)**
- Dem 3: existe UnTouch en Alemania [25].
- Online 2: venta B2B lenta.
- Rec 5: SaaS.
- Encaje 3.

**Descartadas por saturación o margen**
- **#12 chapas de mascotas:** Comp 1, con más de 20.000 resultados en Amazon.es y chapas NFC en Etsy desde 7,99 €.
- **#21 equipaje:** Comp 1, con decenas de etiquetas NFC+QR a 18-25 € en Amazon.es.
- **#16 packs de hogar:** Marg 2, porque el chip cuesta 0,10-0,30 € y el cliente lo sabe [17].
- **#25 uñas:** Dem 1; los artículos que encontré son reediciones de noticias de 2014-2023 [23].
- **#17 propinas:** Encaje 2; pagos regulados y poca cultura de propina con tarjeta en España.
- **#20 turismo:** Online 1; es venta a administraciones públicas.

### ⚠️ Ideas con riesgo legal (aparte del orden)
| Idea | Riesgo | Detalle |
|---|---|---|
| #13 ID médica, #14 demencia | **Datos de salud** (art. 9 del RGPD) | Hace falta consentimiento explícito, probablemente una evaluación de impacto (EIPD), cifrado y registros de consentimiento [32]. Si se presenta como herramienta sanitaria, podría entrar en la normativa de producto sanitario (sin confirmar). |
| #15 audio infantil | **Marcas y derechos de terceros, menores** | Usar "Yoto" o "Tonies" en el anuncio, o grabar cuentos o canciones con derechos, es arriesgado. Producto para niños = normativa de juguetes. |
| #4 búsqueda del tesoro | **Menores y juguetes** | Discos NFC pequeños = riesgo de asfixia, lo que exige marcado CE y ensayos EN 71 si se vende como juguete. |
| #3 regalos de voz (si es un peluche) | **Juguetes** | Un peluche se considera juguete aunque digas "no es un juguete", salvo que la autoridad acepte que es decorativo para adultos. **Confirmar.** |
| #5 bodas | **Imágenes de terceros y menores** | Tú eres encargado del tratamiento y los novios, responsables. |
| #8 músicos, #9 merch, #11 coleccionables | **Propiedad intelectual de terceros** | Solo con contenido del propio artista; nunca personajes ni marcas ajenas. |
| #17 propinas | **Servicios de pago** | Enlazar a Stripe o Revolut del cliente está bien; cobrar tú y repartir sería un servicio de pago regulado. |
| #25 uñas | Cosmética | El adhesivo y su aplicación pueden entrar en la normativa de cosméticos (sin verificar). |

---

## Fase 3: guía completa de las 8 mejores

Ideas elegidas: las 9 primeras de la tabla, juntando los dos memoriales en una sola guía. Para no repetir lo mismo ocho veces, lo legal y fiscal común (IVA, OSS, aranceles de EE. UU., GPSR, RAEE, RGPD) está en la **sección 4**. En cada idea solo pongo lo específico.

**Datos comunes a todas las ideas** (los uso en los cálculos):
- Pegatina NTAG213: 0,27-0,30 $ la unidad en lotes de 100 (GoToTags), 0,39 € en rfid.it (pedido mínimo de 10) [16]. **[H]**
- NTAG424 DNA (chip antifalsificación): 0,79-0,82 € la unidad en lotes de 100 (rfid.it) [16]. **[H]**
- Tarjeta PVC impresa NTAG213: 0,96 $ en lotes de 500 (GoToTags, pedido mínimo 500, 3 semanas) y 0,40 $ en Global Sources (500-999 unidades) [36]. **[H]**
- Comisiones de Etsy: 6,5 % de transacción (sobre el total con envío), 0,20 $ por anuncio, Offsite Ads del 15 % (máximo 100 $) solo si la venta viene de su publicidad, y tasa regulatoria en España del 0,72 % según una fuente [14]. **[H]** La tasa de procesamiento de pagos para vendedores en España **no la he encontrado**; en EE. UU. es 3 % + 0,25 $ [14]. **[E]** En los cálculos uso un **~12 % total** sin Offsite Ads, que coincide con el "10-12 %" que da una guía [14].
- Hosting: Vercel Hobby **no permite uso comercial**; el plan Pro cuesta unos 20 $/mes por usuario. Supabase tiene plan gratuito (los proyectos se pausan tras una semana sin actividad) y Pro desde 25 $/mes [37]. **[H]**

---

### 3.1 Kit NFC para anfitriones de alquiler vacacional

#### 1. Qué es y por qué puede funcionar ahora
Es una placa elegante (acrílico o madera) con chip NFC y QR para el wifi, más 2-4 pegatinas NFC repartidas por la casa: cafetera, calefacción, normas, salida. Todas abren una **guía digital multilingüe que el anfitrión edita desde el móvil**: cambia la clave del wifi, los códigos o las recomendaciones sin reimprimir nada.

Por qué ahora:
- Hay más de 9 millones de anuncios activos y más de 5 millones de anfitriones en Airbnb a cierre de 2025, según un análisis que cita sus informes anuales [9]. **[H, fuente secundaria]**
- Ya existe un software con el que se puede comparar el precio (Touch Stay, Hostfully) [10][11].
- En los marketplaces la oferta física está fragmentada: placas sueltas sin la guía editable detrás.

**Diferencia con lo que ya vendes:** esto no es un enlace a un perfil del negocio. Es una herramienta de operación del alojamiento que ahorra mensajes a los huéspedes.

#### 2. Estudio de mercado
**Señales de demanda [H]:**
- Touch Stay cobra unos 99 $/año por la primera propiedad según dos fuentes de terceros, aunque otra da 19 $/mes y su web anuncia ahora un **plan gratuito** [10].
- Hostfully Guidebooks empieza en 9,99 $/mes según GetApp [11].
- Etsy (11-10-2026) tiene muchos anuncios de placas NFC+QR para wifi: posavasos NFC wifi a 20,14 €, placa acrílica a 17,70 €, placa wifi NFC a 16,90 €, soporte de hormigón y roble a 65 € y letrero impreso en 3D a 26 €. Un directorio citado en [8] da una media de ~23 $ en 142 anuncios.
- La app iOS "WiFi Tap Connect" cobra en su versión de pago por poder cambiar la clave sin reescribir la etiqueta y por hacer caducar etiquetas [8]. Es la prueba de que esa función se valora.

**Quién compra:** anfitriones con 1-5 propiedades (los grandes usan sistemas de gestión) y co-hosts o gestores pequeños de 5-30 pisos, que compran en lote.

**Cuánto paga:** 15-65 € por la placa (Etsy) y 0-99 $/año por la guía digital (Touch Stay).

**Competidores**
| Competidor | Precio | Hace bien | Hace mal |
|---|---|---|---|
| [Touch Stay](https://touchstay.com) | Gratis / ~99 $/año [10] | Guía muy completa, chatbot de IA | No vende la parte física NFC; el plan gratuito te presiona el precio |
| [Hostfully Guidebooks](https://www.hostfully.com/pricing/digital-guidebooks/) | Desde 9,99 $/mes [11] | Integración con su sistema de gestión | Las fuentes no mencionan NFC [11] |
| Placas NFC wifi en Etsy (varios vendedores) | 14-65 € | Bonitas y baratas | Solo wifi y estáticas; si cambia la clave hay que reprogramar |
| WiFi Tap Connect (app) [8] | Freemium | Wifi sin escribir nada en iPhone | Solo wifi y solo app |

**Tendencias (sin datos propios por el bloqueo de Google Trends):** compara en trends.google.com, con mercado Reino Unido y EE. UU., "airbnb welcome book", "digital guidebook airbnb" y "wifi sign nfc" a 5 años. En TikTok e Instagram busca "#airbnbhost" y "#superhost": los anfitriones publican mucho "lo que compro para mi Airbnb". Eso es contenido que puedes copiar en formato.

#### 3. Producto
- **Chip:** **NTAG213** (144 bytes, de sobra para una URL corta) para la placa. **NTAG215** si quieres que la placa también lleve el registro wifi nativo, aunque es mejor que la etiqueta lleve **solo una URL tuya**: así todo se cambia desde el panel. Para la placa de madera o acrílico, pegatina de 25-29 mm. Si va sobre metal (nevera, caldera), **pegatina antimetal**.
- **Formato:** placa de 10×10 cm, más 3 pegatinas pequeñas con icono (cafetera, termostato, salida).
- **También hace falta:** impresión UV o grabado láser (encárgalo a un taller o a un proveedor de Alibaba) y una caja o sobre con instrucciones en inglés, alemán y francés.
- **Proveedores y precios orientativos [H]:** pegatinas NTAG213 a 0,39 € (rfid.it, mínimo 10) o 0,27-0,30 $ (GoToTags, mínimo 10) [16]. **Placa impresa: no he encontrado fuente de precio.** **[E]** Calculo 3-6 € por unidad en tiradas de 20-50 en un taller local de láser o UV, a partir de los precios finales de Etsy (16,90 € con margen incluido). Pide tres presupuestos.
- **Parte digital a construir:**
  1. URL corta por etiqueta (`tuapp.com/t/AB12`) que redirige a la sección correcta.
  2. Panel del anfitrión: secciones, wifi (con botón "copiar" y QR de wifi), normas, check-out, recomendaciones y fotos.
  3. Traducción automática a 5 idiomas.
  4. Contador de toques por etiqueta, anónimo.
  5. Plantillas por tipo de piso.
  6. Facturación con Stripe (suscripción).
  7. Opcional: marca blanca para gestores.

#### 4. Números
| Concepto | Importe | Tipo |
|---|---|---|
| 4 pegatinas NTAG213 | 1,56 € | H (4 × 0,39 €) |
| Placa impresa o grabada | 4,50 € | E (punto medio de 3-6 €) |
| Embalaje e instrucciones | 1,00 € | E |
| **Coste por kit** | **~7 €** | E |
| Precio de venta recomendado | **39 €** (kit + 3 meses de guía) | E (por encima de la placa de Etsy, porque incluye guía editable) |
| Comisiones de Etsy (~12 %) | 4,70 € | E |
| **Margen por kit (envío aparte)** | **~27 €** | E |
| Suscripción después | 4,90 €/mes o 39 €/año | E (por debajo de Touch Stay, ~99 $/año) |
| Infraestructura al empezar | 0 €: Supabase gratis + hosting gratuito (revisa que permita uso comercial) [37][42] | H |
| Infraestructura con clientes | ~20 $/mes (Vercel Pro) o equivalente + Supabase Pro 25 $/mes cuando haga falta [37] | H |
| **Arranque con 25 €** | Pegatinas NTAG213 en Amazon.es 7,99 € + 1 placa de prototipo en taller ~8 € = **~16 €**. El resto, bajo pedido | E |
| **Ventas para recuperar el arranque** | **1 kit** | E |
| Fase 2 (con el dinero de las ventas) | ~250 €: 100 pegatinas, 20 placas, dominio, hosting de pago. Se cubre con ~10 kits vendidos | E |

**Envío:** cobra el envío aparte. No he encontrado las tarifas actuales de Correos a la UE y al Reino Unido, así que confírmalas en correos.es. Con el arancel de EE. UU. (sección 4), empieza por la UE y el Reino Unido.

#### 5. Estrategia de marketing
- **Cliente ideal:** anfitrión con 1-5 pisos en Reino Unido, Alemania, Países Bajos o EE. UU., cansado de responder "¿cuál es el wifi?" y de reimprimir el libro de bienvenida.
- **Mensaje principal:** *"Tus huéspedes acercan el móvil y se conectan. Tú cambias la clave y la guía desde el móvil, sin reimprimir nada."*
- **Canales por prioridad:**
  1. Etsy, con anuncios en inglés y alemán.
  2. Grupos de Facebook de anfitriones (búscalos por "Airbnb hosts UK" o "Superhost"; comprueba las normas antes de publicar).
  3. Reddit: busca subforos de anfitriones y aporta respuestas antes de enlazar nada.
  4. Vídeos cortos en TikTok, Reels y Shorts.
  5. SEO en tu web: "airbnb welcome book template" y "digital guidebook free".
  6. Amazon Handmade más adelante.
- **Ideas de contenido:**
  - Vídeo de 15 s de un huésped tocando la placa y entrando en el wifi.
  - "5 mensajes que mi guía responde por mí".
  - Antes y después: libro de bienvenida plastificado frente a la placa.
  - Recorrido por el panel cambiando la clave en 10 segundos.
- **Palabras clave:** airbnb wifi sign, nfc wifi sign, airbnb welcome book, digital guidebook, guest wifi tap, vacation rental essentials, superhost gifts, WLAN Schild NFC, Ferienwohnung Gästemappe digital.
- **Marketplaces:** Etsy (Reino Unido, EE. UU., Alemania), Amazon Handmade y eBay Reino Unido.
- **Colaboraciones:** empresas de limpieza de pisos turísticos (las ves en cada casa), co-hosts, fotógrafos de alojamientos, podcasts de anfitriones y creadores de plantillas de "welcome book" en Etsy (pueden ofrecer tu placa como complemento).
- **Primeros 10 clientes sin anuncios:**
  1. Cuando tengas las primeras ventas, regala 2-3 kits a anfitriones con contenido en redes a cambio de un vídeo. Antes, ofrécelo a coste.
  2. Responde 20 hilos de "¿qué le pongo a mi Airbnb?" con valor, sin enlace al principio.
  3. Ofrece un descuento a co-hosts por lotes de 5.
  4. En Etsy, precio de lanzamiento y fotos con el piso montado.
  5. Si te encaja, contacta también con anfitriones españoles: es un mercado enorme y te sirve de laboratorio.

#### 6. Paso a paso hasta la primera venta
| # | Tarea | Herramienta gratuita | Tiempo |
|---|---|---|---|
| 1 | Comprar un paquete de pegatinas NTAG213 (7,99 € en Amazon.es) | — | 30 min |
| 2 | Prototipo del panel: login, guía, URL por etiqueta | Next.js + Supabase gratis, Cursor o Claude | 12-16 h |
| 3 | Página de muestra pública ("demo") en hosting gratis | — | 2 h |
| 4 | Prototipo físico: 1 placa (taller local ~8 € o un marco de fotos que ya tengas con la pegatina detrás) | Canva para el diseño | 3 h + espera |
| 5 | Fotos en un piso real o de un amigo | Móvil + Canva | 3 h |
| 6 | Landing con Stripe Payment Link. Etsy solo si no cobra la cuota de apertura, o con la primera venta | Stripe, DeepL gratis | 4 h |
| 7 | Stripe para la suscripción | Stripe | 2 h |
| 8 | Política de privacidad, términos y aviso legal | Plantilla + revisión | 2 h |
| 9 | 3 vídeos cortos | CapCut | 3 h |
| 10 | Publicar en grupos y foros (con valor) | — | 2 h/semana |
| **Total** | | | **~35-40 h ≈ 3 semanas a 2 h/día** |

#### 7. Validación en 2 semanas con ≤15 €
1. **Días 1-3:** landing en subdominio gratuito con vídeo de la demo y botón de "reservar con 30 % de descuento" (pago real con Stripe Payment Link, reembolsable). Coste: 0 €.
2. **Días 1-14:** si Etsy no te cobra la cuota de apertura, anuncio "made to order" con plazo de 2 semanas (0,20 $ por anuncio). Si te la cobra, espera a tener 1-2 ventas por la landing.
3. **Días 3-10:** 30 mensajes directos personalizados a anfitriones con perfil público (Instagram o TikTok). Coste: 0 €.
4. Material: 1 paquete de pegatinas (8 €) y 1 placa de prototipo (~8 €), unos 16 €. Para quedarte en 15 € o menos, usa un marco de fotos que ya tengas en lugar de la placa de taller: **total 8 €.**
5. **Criterio de éxito:** al menos 3 pagos o reservas pagadas y al menos 15 % de respuesta positiva a los mensajes. Si consigues menos de 1 pago y menos de 5 % de respuesta, cambia el mensaje una vez; si sigue igual, pasa a la siguiente idea.

#### 8. Legal y práctico (específico; lo común está en la sección 4)
- **Datos:** el anfitrión publica datos de su casa. Los huéspedes que tocan la etiqueta no deben identificarse; cuenta los toques de forma anónima, sin cookies de seguimiento, para no necesitar banner de cookies (**confírmalo con un asesor**).
- **Seguridad:** muestra la clave del wifi en una página que no indexe Google y deja la opción de ocultarla tras un código de reserva.
- **Normativa de viviendas turísticas:** depende de cada país y región. No vendas el producto como "cumplimiento legal".
- **Producto:** una placa pasiva con pegatina NFC. Ver RAEE y RED en la sección 4.

#### 9. Riesgos y cuándo abandonar
- **Competencia gratuita:** el plan gratis de Touch Stay [10] y la guía de la propia plataforma. Que Airbnb tenga guías en su app es conocimiento general, **no verificado en esta investigación**. Tu ventaja tiene que ser lo físico + la sencillez.
- **Abandona si** tras 60 días con 10 anuncios activos en Etsy vendes menos de 5 kits, o si menos del 20 % de compradores activa la suscripción tras los 3 meses gratis. Si esto último ocurre, el negocio es solo de placas, con margen bajo y saturable.

#### 10. Recurrencia y ampliación
- Suscripción por propiedad, más un plan para gestores (10+ propiedades) con marca blanca.
- Venta adicional de guías locales hechas con IA, avisos de check-out e integración con cerraduras.
- Versión para hoteles boutique y campings.

---

### 3.2 Autenticidad NFC para pequeñas marcas, artesanos y artistas

#### 1. Qué es y por qué puede funcionar ahora
Etiquetas NFC **criptográficas (NTAG 424 DNA con SUN)**: cada toque genera una URL única que tu servidor verifica, así que copiar la URL no sirve [34]. Van cosidas, pegadas o integradas en el producto, y la marca tiene un **panel** para:
- certificado de autenticidad,
- registro del comprador (garantía),
- historia del producto y cuidados,
- transferencia de propiedad en reventa.

Por qué ahora:
- El **Pasaporte Digital de Producto (DPP)** de la UE se está desplegando por categorías, empezando por textil, muebles y otras, con calendario por actos delegados [5].
- El NFC Forum está preparando estándares para que las etiquetas NFC sirvan como soporte del DPP [5].
- Las pequeñas marcas no tienen acceso a las soluciones de empresa, que piden presupuesto [34].

**Ojo:** no vendas esto como "cumplimiento del DPP" sin verificar los requisitos de cada categoría. Las fuentes sobre el calendario se contradicen [5].

#### 2. Estudio de mercado
**Señales [H]:**
- Verisart dice tener más de 50.000 creadores y cobra de 29,99 a 99,99 $/mes, con packs de etiquetas NFC aparte (precio no publicado) [21].
- En Shopify App Store, la búsqueda "nfc" devuelve 46 apps (11-10-2026). Las relacionadas con autenticidad son SecureTag (9,99 $/mes), Scanique (QR), Authentica (QR), PassportEU (DPP con QR) y Verisart. **Ninguna app de autenticidad NFC para pequeñas marcas tiene volumen de reseñas.**
- Las soluciones de empresa (BrandGuard de RFID Solution) se dirigen al lujo, bebidas y farmacia [5][34].

**Quién compra:**
- Marcas de 50-5.000 unidades al año con riesgo de copia o reventa: zapatillas personalizadas, bolsos de piel, relojería pequeña, cuchillería, luthiers, streetwear de edición limitada.
- Artistas que venden obra original o grabados numerados.

**Cuánto paga:** de 10 a 100 $/mes según Verisart y SecureTag, más el coste por etiqueta.

**Competidores**
| Competidor | Precio | Hace bien | Hace mal |
|---|---|---|---|
| [Verisart](https://verisart.com) | 29,99-99,99 $/mes [21] | Marca fuerte en arte; integración con Shopify | Mezcla NFT y blockchain, lo que espanta a parte del público; precio de etiquetas opaco |
| SecureTag (Shopify) | 9,99 $/mes [S-Shopify] | Barato | Sin reseñas visibles; no confirmé si usa NFC criptográfico |
| Scanique / Authentica (Shopify) | Gratis o freemium | Fáciles | **Solo QR**, que se copia con una foto |
| BrandGuard (RFID Solution) | Presupuesto | Tecnología seria | Para empresa |

**Tendencias:** compara "certificate of authenticity nfc", "anti counterfeit tag" y "digital product passport" en Google Trends. En LinkedIn hay mucho contenido sobre DPP, sobre todo de consultoras.

#### 3. Producto
- **Chip:** **NTAG 424 DNA** (AES-128 + SUN; cada lectura genera un código distinto) [34]. Versión **TagTamper** para precintos de caja o botella (detecta apertura) [34]. Formatos: pegatina PET de 22-25 mm, ficha lavable para textil [16] y etiqueta tejida con inlay (pedir presupuesto).
- **Proveedores [H]:** Identiv 25 mm a 0,82 € y Avery Dennison 22 mm a 0,79 € en lotes de 100 (rfid.it, mínimo 10, plazo de 2-8 semanas en algunos); ficha lavable de GoToTags a 1,60 $; tarjeta PVC de Elechouse a 2,50 $ (100+) [16].
- **Detalle técnico:** según la hoja de NXP, SUN funciona en Android sin app; en iOS la fuente antigua dice "con app" [34]. En la práctica, los iPhone actuales leen URLs NDEF en segundo plano, **pero compruébalo con tus propios chips** antes de prometerlo.
- **Parte digital a construir:**
  1. Programador de chips con claves por marca (con la app de NXP o una herramienta propia).
  2. Verificador SUN en el servidor.
  3. Página de producto verificado con la marca del cliente.
  4. Registro de propietario y transferencia.
  5. Panel de la marca con lotes, mapa de escaneos y alertas de clones (mismo contador desde sitios distintos).
  6. App o integración de Shopify (fase 2).

#### 4. Números
| Concepto | Importe | Tipo |
|---|---|---|
| Chip NTAG424 DNA | 0,82 € | H |
| Programación y envío a la marca (por etiqueta, en lote de 100) | 0,20 € | E |
| Precio por etiqueta a la marca | 1,50-2,00 € | E (el doble del coste, por debajo de la ficha de GoToTags a 1,60 $ + software) |
| Cuota mensual | 19 € (Starter, 500 verificaciones) / 49 € (Pro) | E (entre SecureTag y Verisart) |
| Infraestructura | 0 € al empezar (planes gratuitos); ~45 $/mes con clientes (Vercel Pro + Supabase Pro) [37] | H |
| **Arranque con 25 €** | 20 chips NTAG424 DNA en rfid.it ≈ 16,40 € + envío (pedido mínimo 10) [16]; tu móvil hace de programador. **~20-25 €** según el envío | E |
| **Recuperación** | El primer cliente de pago (19 €/mes + etiquetas) cubre el arranque. Con **3 clientes Starter** pagas la infraestructura de pago | E |
| Fase 2 | Los lotes de chips para cada cliente se compran **cuando la marca paga** el pedido de etiquetas | E |

#### 5. Estrategia de marketing
- **Cliente ideal:** fundador de una marca de piel, zapatillas o streetwear que vende en Shopify o Etsy, factura 50-500 k€ y ha visto copias o reventas falsas.
- **Mensaje:** *"Una etiqueta que no se puede copiar. Tus clientes comprueban que es original con el móvil y tú sabes quién lo tiene."*
- **Canales:**
  1. Mensajes directos uno a uno en Instagram y LinkedIn a marcas con productos de más de 100 €.
  2. Shopify App Store (fase 2).
  3. Contenido en LinkedIn sobre DPP para pymes.
  4. Ferias de artesanía y diseño (online).
  5. Comunidades de "sneaker customizers" y "leathercraft" en Reddit.
- **Contenido:**
  - Vídeo "QR frente a NFC criptográfico": copiar un QR con una foto contra intentar clonar el NFC.
  - Caso de estudio con el primer cliente.
  - Guía "Qué es el pasaporte digital y si te afecta" (con fuentes y sin alarmismo).
- **Palabras clave:** nfc authentication tag, anti-counterfeit for small brands, certificate of authenticity nfc, digital product passport small business, Echtheitszertifikat NFC.
- **Colaboraciones:** fabricantes de etiquetas tejidas, talleres de producción para marcas pequeñas, agencias de Shopify.
- **Primeros 10 clientes:**
  1. 3-5 pilotos gratis de software durante 3 meses. Las etiquetas del piloto las paga la marca a precio de coste (~1 € cada una), así no adelantas dinero. A cambio, un caso de estudio.
  2. 50 mensajes personalizados a marcas que ya sufren falsificaciones (búscalas por quejas en reseñas o publicaciones).
  3. Artistas: imprime el certificado en el reverso del grabado.

#### 6. Paso a paso
| # | Tarea | Herramienta | Tiempo |
|---|---|---|---|
| 1 | Comprar 20 NTAG424 DNA y leer la nota de aplicación SUN de NXP | NXP TagXplorer o NFC Tools | 4 h |
| 2 | Verificador SUN mínimo (descifrado AES y CMAC) | Bibliotecas open source (búscalas en GitHub) | 15-20 h |
| 3 | Página "verificado" con la marca del cliente | Next.js | 6 h |
| 4 | Panel de lotes y escaneos | Supabase | 10 h |
| 5 | Landing + vídeo comparativo | — | 4 h |
| 6 | 50 mensajes, 5 pilotos | — | 6 h |
| 7 | Convertir un piloto en cliente de pago | Stripe | — |
| **Total** | | | **~50 h ≈ 4-5 semanas** |

#### 7. Validación en 2 semanas con ≤15 €
- Landing con demo en vídeo y formulario de "piloto gratuito" (0 €).
- 10 chips de prueba (pedido mínimo de rfid.it, ~8,20 € + envío) [16]. Los pilotos se hacen con esos 10 chips: 2-3 por marca, suficiente para una demo.
- 50 mensajes directos.
- **Éxito:** al menos 5 marcas piden piloto y al menos 1 acepta pagar al terminar. Si en 50 mensajes no consigues ni 5 respuestas interesadas, el dolor no es lo bastante fuerte en ese segmento: cambia de nicho (por ejemplo, de streetwear a artistas) antes de abandonar.

#### 8. Legal y práctico
- **Responsabilidad:** no prometas "infalsificable". El chip se puede despegar y poner en otro producto (usa TagTamper o integrado). Limita tu responsabilidad en el contrato.
- **RGPD:** si registras al comprador final, la marca es responsable del tratamiento y tú encargado. Necesitas un **contrato de encargo del tratamiento** y alojamiento en la UE.
- **B2B:** facturas con IVA español a empresas españolas e inversión del sujeto pasivo a empresas de la UE con número de IVA válido (ROI/VIES). **Confírmalo con un asesor.**
- **DPP:** si un cliente lo usa para cumplir con el DPP, aplican estándares concretos (identificadores, soporte, acceso sin conexión) [5]. No lo ofrezcas hasta conocerlos.

#### 9. Riesgos y cuándo abandonar
- Ciclo de venta largo y dificultad técnica (criptografía mal hecha = producto inútil).
- **Abandona** si a los 90 días no tienes al menos 3 clientes de pago o si los pilotos no escanean (menos de 10 escaneos por marca y mes), porque eso significa que el cliente final no lo valora.

#### 10. Recurrencia y ampliación
- La cuota es recurrente por naturaleza.
- Después: app de Shopify, transferencia de propiedad para reventa, módulo de garantía y DPP cuando lo pidan las categorías.

---

### 3.3 Regalos con mensaje de voz o vídeo

#### 1. Qué es y por qué puede funcionar ahora
Un objeto con valor emocional (marco de foto, caja de recuerdos, colgante, llavero de madera; peluche solo con precauciones) que, al acercar el móvil, reproduce **un mensaje de voz o vídeo grabado por quien regala**, alojado en tu web. El remitente graba desde el navegador, sin app.

Por qué funciona:
- Ya se vende el formato analógico (grabadoras en peluches de 10 a 35 € en Amazon.es).
- El NFC permite vídeo, cambiar el mensaje y añadir más.
- En Etsy ya hay versiones NFC a 37 € [E-Etsy].

**No es lo mismo que el "llavero Spotify"**, que está saturado (367 resultados en Amazon.es, con productos a 5,99-14,99 €): aquí el valor es **la voz de la persona**, no una canción.

#### 2. Estudio de mercado
**Señales [H]:**
- Etsy, 11-10-2026:
  - "Oso de peluche NFC personalizado con memoria, vídeo, fotos y mensaje de voz", 37,33 €.
  - "Oso de peluche conmemorativo NFC", 37,33 €.
  - Peluches con grabadora (no NFC) de 25 a 119 €.
- Tarjetas recordables con página privada en Newegg [30]; Tap For Message (EE. UU., 2013) [30]; joyería Momento (voz en NFC) [30].
- Amazon.es: "peluche mensaje voz nfc" da 77 resultados, todos analógicos.

**Quién compra:**
- Parejas a distancia.
- Nietos para abuelos y abuelos para nietos.
- Regalos de duelo ("la voz de mamá").
- Padres que regalan a bebés (cuidado con la normativa de juguetes).

**Cuánto paga:** 25-40 € (rango de Etsy).

**Competidores**
| Competidor | Precio | Hace bien | Hace mal |
|---|---|---|---|
| Vendedores de oso NFC en Etsy | 37,33 € | Fotos emotivas, multimedia | No sé dónde y cuánto tiempo alojan el contenido |
| Peluches con grabadora analógica | 10-35 € | Sin móvil, para niños | 30-60 s de audio, sin vídeo ni cambios |
| Tarjetas recordables (Newegg) [30] | n/d | Página privada | Formato tarjeta de usar y tirar |
| Momento (joyería) [30] | n/d | Joya + voz | Precio de joyería |

**Tendencias:** compara "voice recording gift", "recordable teddy bear" y "voice keepsake" en Trends. Picos esperables: San Valentín, Día de la Madre y Navidad. **[E]** Es estacionalidad típica del regalo; no la he verificado con datos.

#### 3. Producto
- **Chip:** NTAG213 o NTAG215, pegatina de 25 mm dentro del objeto. Solo guarda la URL: un audio no cabe en el chip (NTAG216 = 888 bytes).
- **Formatos recomendados:** marco de madera con foto impresa, caja de recuerdos y llavero de madera grabado. **Evita el peluche al principio** por la normativa de juguetes (ver punto 8).
- **Proveedores:** chips como arriba [16]. **Marcos y cajas de madera grabados: sin fuente de precio.** **[E]** 3-6 € por unidad en lotes de 20-50 en Alibaba o un taller láser.
- **Parte digital:**
  1. Grabación desde el navegador (voz o vídeo), sin app.
  2. Página privada con PIN opcional.
  3. Mensaje programable para que se desbloquee en una fecha.
  4. Varios mensajes en el mismo objeto (familia).
  5. Descarga del archivo.
  6. Compresión de vídeo para contener costes.

#### 4. Números
| Concepto | Importe | Tipo |
|---|---|---|
| Objeto + grabado | 4,50 € | E |
| Chip | 0,40 € | H |
| Caja de regalo | 1,20 € | E |
| **Coste** | **~6 €** | E |
| Precio | **34,90 €** | E (por debajo del oso NFC de Etsy a 37,33 €) |
| Comisiones (~12 %) | 4,20 € | E |
| **Margen** | **~24 €** (envío aparte) | E |
| Almacenamiento | Audio: céntimos al año; vídeo: varios MB por mensaje. **[E]** Con 1.000 mensajes de vídeo de 50 MB = 50 GB; revisa las tarifas de almacenamiento de Supabase u otro proveedor | E |
| **Arranque con 25 €** | Pegatinas (7,99 €) + 2 prototipos con objetos baratos (llavero o marco de madera de bazar o taller, ~8 €) = **~16 €** | E |
| **Recuperación** | **1 venta** cubre el arranque; cada pedido se fabrica con el dinero del cliente | E |

#### 5. Marketing
- **Cliente ideal:** mujer de 25-45 años que compra regalos emotivos en Etsy y TikTok, sobre todo para la madre, la abuela o la pareja.
- **Mensaje:** *"Un regalo que habla con su voz. Toca con el móvil y escúchala, hoy o dentro de 20 años."*
- **Canales:**
  1. Etsy (EE. UU., Reino Unido, Alemania).
  2. TikTok e Instagram Reels: vídeos de reacción de abuelos escuchando el mensaje, que es el formato que más se comparte (**[E]**, no tengo métricas).
  3. Pinterest (regalos).
  4. Tienda propia más adelante.
- **Contenido:** reacciones reales con permiso; "cómo grabé el mensaje en 1 minuto"; cápsula del tiempo para el bebé; regalo de duelo tratado con respeto.
- **Palabras clave:** voice message gift, recordable keepsake, nfc voice gift, gift for grandma voice, memory box nfc, Geschenk mit Sprachnachricht.
- **Colaboraciones:** fotógrafos de recién nacidos, organizadores de baby showers y asociaciones de duelo (con mucho tacto).
- **10 primeros clientes:**
  1. Cuando tengas las primeras ventas, 2-3 regalos a microcreadores de "gift ideas" a cambio de un vídeo.
  2. Promoción de lanzamiento en Etsy.
  3. Amigos y familia para las primeras reseñas reales (sin incentivos que incumplan las normas de Etsy).

#### 6. Paso a paso
| # | Tarea | Herramienta | Tiempo |
|---|---|---|---|
| 1 | Grabador web + página privada | MediaRecorder API, Supabase Storage | 10-12 h |
| 2 | 2 prototipos (marco y llavero) con objetos baratos + pegatina | Bazar o taller láser | 3 h + espera |
| 3 | Fotos y vídeo de reacción | Móvil, CapCut | 4 h |
| 4 | 3 anuncios en Etsy (si no cobra la cuota de apertura) o tienda con Payment Link + TikTok | Etsy o Stripe | 4 h |
| 5 | Textos legales y política de conservación del contenido | — | 2 h |
| 6 | 10 vídeos cortos programados | CapCut | 6 h |
| **Total** | | | **~30 h ≈ 2-3 semanas** |

#### 7. Validación con ≤15 €
- Anuncio "made to order" (Etsy o landing con Payment Link) con fotos de 2 prototipos (~16 €, o ~8 € si usas objetos que ya tienes).
- 10 vídeos en TikTok.
- **Éxito:** al menos 3 ventas o al menos 1 vídeo con más de 10.000 visualizaciones y comentarios de "¿dónde se compra?". **Fracaso:** 0 ventas y menos de 500 visualizaciones por vídeo de media en 14 días.

#### 8. Legal y práctico
- **Juguetes:** un peluche entra casi seguro en la normativa de seguridad de juguetes (marcado CE, ensayos EN 71). Si lo vendes, compra peluches que ya tengan CE y documentación, y el chip no debe ser accesible. **Confirma con un asesor** si la integración te convierte en fabricante.
- **RGPD:** alojas voces y caras = datos personales. Pide consentimiento del remitente, establece el plazo de conservación y facilita el borrado.
- **"Para siempre":** no lo prometas. Pon "alojamiento garantizado X años" y permite la descarga.

#### 9. Riesgos y cuándo abandonar
- Fácil de copiar, estacional y con compra única.
- **Abandona** si tras 2 temporadas de regalo (por ejemplo, San Valentín y Día de la Madre) no superas las 30 ventas por temporada.

#### 10. Recurrencia y ampliación
- Plan "cápsula familiar" (varios mensajes al año, 2-3 €/mes).
- Línea de duelo con funerarias (conecta con 3.6).
- Línea de bebés (conecta con la cápsula del tiempo).
- Venta a otras tiendas de Etsy como servicio de alojamiento ("powered by").

---

### 3.4 Búsqueda del tesoro / escape room NFC

#### 1. Qué es y por qué puede funcionar ahora
Una caja con 8-12 discos NFC y tarjetas temáticas. Los padres (o quien organiza un team building) eligen una aventura en tu web (piratas, espías, misterio), escriben o generan las pistas con IA y esconden los discos. Los jugadores tocan cada disco con el móvil y desbloquean la siguiente pista, con cuenta atrás y vídeo final.

Por qué funciona:
- No encontré ningún producto comercial: solo tutoriales caseros (MacMost, que usa Google Sites y NFC Tools) y plataformas para empresas (Munzee) [27].
- Las pistas se reutilizan: el mismo kit sirve para infinitas aventuras, lo que permite vender packs digitales.

#### 2. Estudio de mercado
- **Señales [H]:** el tutorial de MacMost tiene comentarios de gente que lo monta para sus hijos [27]; GoToTags describe juegos de búsqueda con NFC en conferencias [27]. **No tengo cifras de demanda del formato NFC.** Sí hay un mercado enorme de búsquedas del tesoro imprimibles en Etsy (no he contado los anuncios).
- **Quién compra:** padres de niños de 6-12 años en EE. UU., Reino Unido y Alemania (Ostereiersuche, la búsqueda de huevos de Pascua), profesores y responsables de RR. HH. para team building.
- **Cuánto paga:** sin fuente directa. **[E]** 25-35 €, comparable al juego de pistas en papel que aparece en Amazon.es a 19,95 €.
- **Competidores:**
  | Competidor | Precio | Bien | Mal |
  |---|---|---|---|
  | Imprimibles de Etsy | 5-15 € **[E]** | Baratos e inmediatos | Hay que imprimir; sin interacción |
  | "La búsqueda del tesoro. Juego de pistas" (Amazon.es) | 19,95 € | Juego físico | Pistas fijas |
  | Munzee [27] | Para empresas | Plataforma | No es para fiestas en casa |
  | Hacerlo uno mismo (MacMost) [27] | ~5 € | Gratis | Hay que saber programar etiquetas |
- **Tendencias:** compara "scavenger hunt kit", "treasure hunt for kids" y "escape room at home kit" en Trends (Pascua y Halloween).

#### 3. Producto
- **Chip:** NTAG213 en **discos o fichas grandes de 30-40 mm o tarjetas tamaño carta**. Que no sean piezas pequeñas (ver punto 8).
- **Más:** tarjetas ilustradas, caja e instrucciones.
- **Proveedores:** discos y fichas NTAG213 impresos en GoToTags (fichas impresas, pedido mínimo según formato) [36]; pegatinas de 0,27-0,39 € [16].
- **Parte digital:**
  1. Editor de aventuras con plantillas y generador de pistas con IA en varios idiomas.
  2. Orden secuencial (no se puede saltar una pista).
  3. Cronómetro, puntuación y modo equipos.
  4. Tienda de packs.
  5. Modo "sin internet" no es posible, porque la página se carga online.

#### 4. Números
| Concepto | Importe | Tipo |
|---|---|---|
| 12 fichas NFC | 4,00 € | E (12 × ~0,33 €) |
| Tarjetas impresas + caja | 4,00 € | E |
| **Coste** | **~8 €** | E |
| Precio | **29,90 €** | E |
| Comisiones | 3,60 € | E |
| **Margen** | **~18 €** | E |
| Packs digitales | 4,99 € cada uno, margen ~95 % | E |
| **Arranque con 25 €** | **0-8 €**: la versión digital se vende sin material (pegatinas para probar: 7,99 €). Ilustraciones con IA gratis | E |
| **Recuperación** | La primera descarga de 9,99 € cubre el arranque. El kit físico se plantea solo con ventas digitales demostradas | E |

#### 5. Marketing
- **Cliente ideal:** madre o padre que organiza un cumpleaños en casa y busca algo distinto a la fiesta de bolas; profesor; responsable de RR. HH.
- **Mensaje:** *"Una búsqueda del tesoro que se juega con el móvil. Tú escondes, ellos tocan y la aventura avanza sola."*
- **Canales:** TikTok y Reels (vídeo de niños corriendo de pista en pista), Etsy, Pinterest y Amazon (más adelante, si tienes la documentación).
- **Contenido:** "monté una búsqueda del tesoro en 10 minutos"; especial Pascua y Halloween; versión team building.
- **Palabras clave:** scavenger hunt kit, treasure hunt for kids, escape room kit at home, birthday party game, Schnitzeljagd Kindergeburtstag, chasse au trésor anniversaire.
- **Colaboraciones:** animadores de fiestas, blogs de "party planning" y empresas de team building.
- **10 primeros clientes:** 3-5 familias prueban la versión digital gratis a cambio de contenido en redes; ventas en grupos de padres de tu entorno para probar; un pack gratuito como reclamo.

#### 6. Paso a paso (resumen)
1. Editor de aventuras + 2 plantillas (15 h).
2. Prototipo con 12 fichas e ilustraciones de IA (5 h).
3. Probarlo con 2 grupos reales (4 h).
4. Fotos y vídeo (4 h).
5. Landing con Payment Link (y Etsy si no cobra la cuota de apertura) (4 h).

**Total:** ~32 h, unas 3 semanas.

#### 7. Validación con ≤15 €
- Primero, **solo la versión digital + "trae tus propias pegatinas NFC"** (las de Amazon a 7,99 €) en Etsy, como descarga a 9,99 €. Pruebas la demanda sin producto físico ni normativa de juguetes.
- **Éxito:** al menos 10 descargas en 14 días.

#### 8. Legal y práctico
- **Si lo vendes como juguete (para menores de 14 años)** aplica la normativa de seguridad de juguetes: marcado CE, ensayos y advertencias. Las fichas pequeñas son un riesgo de asfixia. **Esto puede costar más que todo tu presupuesto.** Alternativas: posicionarlo como juego para adultos o team building, vender solo la parte digital, o usar formatos grandes y documentarlo. **Confirma con un laboratorio o asesor.**
- **RGPD:** no pidas datos de los niños; los jugadores no tienen que registrarse.

#### 9. Riesgos y cuándo abandonar
- Normativa de juguetes, estacionalidad y facilidad para hacerlo uno mismo.
- **Abandona** si la versión digital no llega a 30 descargas en 60 días.

#### 10. Recurrencia y ampliación
- Suscripción de aventuras mensuales.
- Versión para escuelas.
- Versión corporativa (precio por evento).
- Versión para turismo (rutas en pueblos, B2B).

---

### 3.5 Fotos de invitados en bodas y eventos

#### 1. Qué es y por qué puede funcionar ahora
Tarjetas de mesa, posavasos o llaveros NFC con QR de respaldo. Los invitados acercan el móvil y suben fotos y vídeos a una galería privada de los novios, sin app. Después: descarga en ZIP, presentación en directo en pantalla y álbum.

Por qué funciona:
- El mercado ya usa QR para esto (WedKeep, Wedding Photo Swap y carteles en Etsy de 4-47 €) [28].
- El NFC añade el gesto de "tocar" y queda más elegante.
- En Alemania ya hay pulseras NFC de madera para bodas (Wearable Wedding) [28].

#### 2. Estudio de mercado
**Señales [H]:**
- Boda media en EE. UU. en 2024: 33.000 $ (The Knot, según Fox Business, mayo de 2025) [13].
- About Last Night (app de fotos de boda) cobra de 35 a 90 $ por evento según un directorio [28].
- En Etsy (11-10-2026) hay galerías QR desde 7,10 € (solo web), álbumes QR a 47,14 €, llavero NFC de boda a 9,90 € y llavero NFC con cámara a 3,34 €.

**Quién compra:** novios de 26-35 años y organizadores de bodas.

**Competidores**
| Competidor | Precio | Bien | Mal |
|---|---|---|---|
| Wearable Wedding [28] | Precio no publicado | Pulsera de recuerdo | Caro **[E]**; Alemania |
| About Last Night [28] | 35-90 $ | App pulida | QR |
| Galerías QR en Etsy | 7-47 € | Baratas | Hay que imprimir; sin NFC |
| Llaveros NFC en Etsy | 3-10 € por unidad | Recuerdo físico | Galería de calidad desconocida |

**Tendencias:** compara "wedding photo sharing QR", "guest photo app wedding" y "wedding qr code sign" en Trends.

#### 3. Producto
- **Chip:** NTAG213 en posavasos o tarjetas de mesa (PVC impreso a 0,40-0,96 $ en lotes de 500 [36], o pegatina en cartulina premium).
- **Parte digital:**
  1. Subida sin login, con límite de tamaño.
  2. Moderación por los novios.
  3. Pase de fotos en directo.
  4. Descarga en ZIP.
  5. Caducidad configurable.
  6. Almacenamiento en la UE.

#### 4. Números
| Concepto | Importe | Tipo |
|---|---|---|
| 15 tarjetas o posavasos NFC | 10 € | E |
| Impresión y caja | 5 € | E |
| Almacenamiento por boda (5-20 GB de vídeo, 12 meses) | 1-3 € | E (según proveedor; verifícalo) |
| **Coste** | **~17 €** | E |
| Precio | **89 €** (15 tarjetas + galería 12 meses) | E (entre 35-90 $ de las apps y 47 € de los álbumes QR de Etsy) |
| **Margen después de comisiones** | **~61 €** | E |
| **Arranque con 25 €** | Galería en plan gratuito + 3 tarjetas de prototipo con pegatinas (~8 €). El pack de cada boda se fabrica con el pago de los novios | E |
| **Recuperación** | **1 boda** | E |

#### 5. Marketing
- **Cliente:** novia o novio que planifica la boda en Pinterest y Etsy entre 3 y 9 meses antes.
- **Mensaje:** *"Todas las fotos de tus invitados en un solo álbum. Tocan la tarjeta y suben, sin app."*
- **Canales:** Etsy, Pinterest, foros de bodas (WeddingWire tiene hilos sobre cómo recoger las fotos de los invitados [28]) y organizadores de bodas como canal B2B.
- **Palabras clave:** wedding photo sharing, guest photo upload, nfc wedding favors, Hochzeit Fotos sammeln Gäste.
- **10 primeros clientes:** organizadores de bodas (comisión del 20 %) y 2-3 bodas con descuento (pagando al menos el coste del material) a cambio de testimonio y fotos.

#### 6-7. Paso a paso y validación
- **Construcción** (~35 h): galería con subida, moderación, ZIP y pase en directo; prototipo de 3 tarjetas; landing con Payment Link (Etsy cuando haya ventas o si no cobra la cuota de apertura).
- **Validación con ≤15 €:** ofrece primero **solo la galería + plantilla imprimible con QR** a 19 € en Etsy. Si vende (al menos 5 en 14 días), añade la versión NFC premium.

#### 8. Legal
- Eres **encargado del tratamiento** de fotos de invitados, incluidos menores. Necesitas contrato con los novios, plazo de borrado, alojamiento en la UE y un aviso visible en la tarjeta ("al subir aceptas…"). **Confirma con un asesor.**

#### 9-10. Riesgos y ampliación
- **Riesgos:** estacionalidad, una sola compra por cliente, costes de vídeo y apps gratuitas de Google Fotos o iCloud (álbum compartido).
- **Abandona** si en 90 días no llegas a 10 bodas.
- **Ampliación:** eventos de empresa, cumpleaños de 40 y 50, graduaciones y plan para organizadores de bodas (suscripción con su marca).

---

### 3.6 Memoriales NFC (personas y mascotas)

#### 1. Qué es
Una placa duradera (acero, cerámica o resina) con NFC y QR que abre una página de homenaje: biografía, fotos, vídeos y libro de visitas moderado. Se coloca en la lápida, el nicho, la urna o el jardín.

**Recomendación: empieza por mascotas.** Es menos regulado, se vende en Etsy y no necesitas permiso del cementerio.

#### 2. Estudio de mercado
**Señales [H]:**
- Quiring Monuments vende un código QR "Living Headstones" a 156 $ [12].
- Monumark: 79 $ con página "indefinidamente". Turning Hearts: 99,99 $. Life's QR: 250 $ con libro de visitas (Scripps News, sin fecha) [4].
- En Etsy, una moneda conmemorativa con QR a 189 $ y otras de 25 a 155 $ [4]; oso NFC conmemorativo a 37,33 € (11-10-2026).
- En el Reino Unido, Lapidaris (porcelana con NFC) [4]. En España, Omneo/Omlim ofrece una etiqueta NFC para lápida o nicho [31].
- Una guía de funeral.com advierte de dependencias de suscripción y de la privacidad [31].

**Quién compra:** familias de 35-65 años; dueños de mascotas en duelo.

**Competidores**
| Competidor | Precio | Bien | Mal |
|---|---|---|---|
| Quiring [12] | 156 $ | Marmolista de confianza | Solo QR; local |
| Monumark [4] | 79 $ | Barato e "indefinido" | QR |
| Life's QR [4] | 250 $ | Libro de visitas | Caro |
| Omneo (España) [31] | No encontrado | NFC sin app | Poca visibilidad online (no encontré tienda ni precios) |
| Lapidaris (Reino Unido) [4] | No encontrado | Porcelana + NFC | — |

**Tendencias:** compara "qr code headstone", "memorial qr code" y "pet memorial gift" en Trends.

#### 3. Producto
- **Chip:** **NTAG213 antimetal** (con ferrita) si va sobre piedra o metal, encapsulado en resina y resistente a la intemperie. Pon siempre **QR grabado** como respaldo.
- **Formatos:** medallón de acero inoxidable con QR grabado y NFC en resina detrás; placa de pizarra para jardín de mascotas; etiqueta para urna.
- **Proveedores:** pegatinas antimetal en eBay (precio no capturado [16]) y medallones de acero grabados (sin fuente; **[E]** 4-10 €).
- **Parte digital:** página de homenaje, línea de tiempo, galería, libro de visitas moderado, privacidad (pública, con contraseña u oculta en buscadores), exportación y **plan de continuidad** (qué pasa si cierras).

#### 4. Números
| Concepto | Importe | Tipo |
|---|---|---|
| Medallón + chip antimetal + resina | ~10 € | E |
| Precio para mascotas | **59 €** | E |
| Precio para personas | **99 €**, incluye 10 años de alojamiento | E (por debajo de Quiring y Turning Hearts) |
| **Margen después de comisiones** | ~42 € (mascotas) / ~77 € (personas) | E |
| **Arranque con 25 €** | 2 medallones de prueba (~20 €). Va justo: haz primero 1 y la prueba de intemperie | E |
| **Recuperación** | **1 venta** | E |

#### 5. Marketing
- **Mensaje:** *"Su historia, a un toque. Una placa que guarda fotos, vídeos y recuerdos para quien venga a visitarle."*
- **Canales:** Etsy (mascotas); B2B online con funerarias pequeñas y marmolistas en el Reino Unido y EE. UU. (correo y LinkedIn); crematorios de mascotas y veterinarios.
- **Contenido:** sobrio. Testimonios con permiso; nada de "virales" sobre muertes.
- **Palabras clave:** pet memorial gift, memorial qr code, headstone qr code, nfc memorial plaque, Gedenktafel QR Code.
- **10 primeros clientes:** 2-3 crematorios de mascotas como revendedores con margen del 30 %; Etsy.

#### 6-7. Paso a paso y validación
- **Construcción** (~30 h): página de homenaje + panel; 1-2 medallones de prueba al aire libre (prueba de lluvia y sol 2 semanas); landing o Etsy.
- **Validación con ≤25 €:** anuncio de mascotas en Etsy "made to order" + 20 correos a crematorios de mascotas. **Éxito:** al menos 3 ventas o al menos 2 crematorios interesados.

#### 8. Legal
- Datos de personas fallecidas: el RGPD no los protege en general, pero la ley española tiene disposiciones sobre datos de fallecidos (LOPDGDD art. 3). **Confírmalo.**
- Los datos de los familiares sí son datos personales.
- Muchos cementerios exigen permiso para colocar elementos en la lápida: que lo gestione el cliente.
- Promesa de alojamiento: escríbela con plazos concretos.

#### 9-10. Riesgos y ampliación
- **Riesgos:** sensibilidad (una mala experiencia es devastadora), durabilidad del chip a la intemperie (sin datos [20]) y obligación de mantener el alojamiento durante años.
- **Abandona** si en 90 días hay menos de 10 ventas o si las placas de prueba fallan a la intemperie.
- **Ampliación:** canal de funerarias y marmolistas (lotes), urnas con NFC y conexión con los regalos de voz (3.3).

---

### 3.7 Álbum NFC para músicos independientes

#### 1. Qué es
Una tarjeta, llavero o púa NFC con el arte del disco que, al tocarla, abre un reproductor privado con el álbum, letras, vídeos, demos y descarga, más una "biblioteca" del fan. El artista la vende en conciertos y en su tienda como sustituto del CD.

#### 2. Estudio de mercado
**Señales [H]:**
- Corea: Muzlive dice haber vendido 6 millones de KiT en un año [6].
- Las ventas de "platform albums" en Yes24 crecieron un 64,2 % en 2022 y un 60,4 % en 2023 [6].
- EE. UU.: Community Musician vende las tarjetas a 4 $ al músico, que las vende a 20 $ [7].
- **Desde el 2 de octubre de 2026, Billboard y Luminate cuentan los "Smart Media Albums"**, pero **solo de 7 proveedores aprobados** (IYK, KiTbetter, Totem, Weverse, Yoto, ZATAP, Serenade) [35].

**Quién compra:** bandas y solistas con 1.000-50.000 oyentes mensuales que tocan en directo.

**Competidores**
| Competidor | Precio | Bien | Mal |
|---|---|---|---|
| Community Musician [7] | 4 $ por unidad | Margen claro para el artista | App propia |
| Tapyoca [7] | n/d | Contenido exclusivo | Startup pequeña |
| KiT / KiTbetter [6][35] | n/d | Escala y cuenta para Billboard | Para sellos medianos y grandes |
| ZATAP, Serenade [35] | n/d | Cuentan para listas | Igual |

#### 3. Producto
- **Chip:** NTAG213 en tarjeta PVC impresa (0,40-0,96 $ en lotes de 500 [36]) o en púa o llavero.
- **Parte digital:** reproductor web con streaming protegido (URL firmada), descarga en MP3 o FLAC, panel del artista con escaneos por ciudad, captación de correos de fans (con consentimiento) y códigos únicos para que una tarjeta no se comparta infinitamente.

#### 4. Números
- Coste por tarjeta en lote de 100 (impresión personalizada en tirada corta): **[E]** 1,20-1,80 €.
- Precio al artista: **3,50 €**, que es por debajo de los 4 $ de Community Musician [7]. Lote mínimo de 50.
- Margen: ~2 € por tarjeta, unos 100 € por pedido de 50.
- **Arranque con 25 €:** 10 tarjetas de prueba con pegatina sobre cartulina impresa (~8 €). Las tiradas impresas de cada artista se encargan **después** de que pague (50 % por adelantado).
- Recuperación: **1 pedido**.

#### 5. Marketing
- **Mensaje:** *"Vende tu disco en el merch aunque tus fans no tengan reproductor de CD. Te quedas el 80 % y conoces a quien te escucha."*
- **Canales:** mensajes directos a bandas en Instagram y Bandcamp, foros de músicos (r/WeAreTheMusicMakers, no he comprobado sus normas), salas de conciertos y distribuidores pequeños.
- **Palabras clave:** nfc album card, merch idea musicians, cd alternative, smart album.
- **10 primeros clientes:** 5 bandas locales (España sirve de laboratorio) con lote gratis de 20 tarjetas a cambio de un caso de estudio; después, Reino Unido y Alemania.

#### 6-7. Paso a paso y validación
- **Construcción** (~35 h): reproductor + panel + códigos únicos; 20 tarjetas de prueba.
- **Validación con ≤15 €:** 40 mensajes a bandas con concierto en los próximos 2 meses. **Éxito:** al menos 3 pedidos pagados.

#### 8. Legal
- El artista garantiza que tiene los derechos de la grabación y la composición; deja la cláusula en el contrato.
- Tú alojas: necesitas procedimiento de retirada de contenido y textos de RGPD para los correos de fans.
- Gestión colectiva (SGAE y otras): **confirmar con un asesor** si afecta a la venta de "acceso digital" por el propio artista.

#### 9-10. Riesgos y ampliación
- **Riesgos:** no puedes ofrecer que cuente para Billboard (proveedores aprobados) [35]; los artistas tienen poco dinero; mucha atención al cliente.
- **Abandona** si hay menos de 5 pedidos en 90 días.
- **Ampliación:** merch de creadores (#9: ilustradores, streamers), sellos pequeños y plan de suscripción del panel.

---

### 3.8 Control de herramientas para autónomos y pequeñas empresas de oficios

#### 1. Qué es
Etiquetas NFC resistentes en herramientas y equipos más una web app: el operario toca con el móvil para "me lo llevo" o "lo devuelvo"; el jefe ve dónde está cada cosa, quién la tiene, revisiones y garantías.

#### 2. Estudio de mercado
**Señales [H]:**
- UnTouch (Alemania): nube + app + etiquetas NFC resistentes a calor, frío, polvo y humedad, con llavero NFC por empleado [25].
- AssetTrack y Bintech (beta) [25]; Jotform tiene una plantilla de inventario NFC [25].
- **No encontré precios publicados** [25].

**Quién compra:** empresas de 3-30 operarios (electricistas, fontaneros, climatización, alquiler de equipos).

**Competidores:** UnTouch (bien: sector oficios; mal: solo Alemania, sin precios a la vista), AssetTrack (genérico), Jotform (hay que configurarlo tú) [25].

#### 3. Producto
- **Chip:** **NTAG213 antimetal** encapsulado o en epoxi (las herramientas son metálicas), más llavero NFC por operario.
- **Parte digital:** web app (PWA) con registro de salida y entrada, alertas de herramienta no devuelta, revisiones e importación por CSV.

#### 4. Números
- Kit de 50 etiquetas antimetal: **[E]** ~40-60 € de coste, porque las antimetal cuestan más que las normales (0,39 €) y no he capturado su precio.
- Precio: **29 €/mes** (hasta 10 usuarios) + kit inicial de 79 €.
- **Arranque con 25 €:** 5-10 pegatinas antimetal para la demo (~10 €, precio no comprobado). El kit de cada cliente se compra con su primer pago.
- Recuperación: **1 cliente**.

#### 5. Marketing
- **Mensaje:** *"Deja de perder herramientas. Cada operario toca y queda registrado quién la tiene."*
- **Canales:** LinkedIn y Facebook de oficios en el Reino Unido (tradespeople), foros de oficios, mayoristas de herramientas y SEO ("tool tracking app for small business").
- **10 primeros clientes:** pilotos de 30 días con empresas pequeñas; aquí España te sirve de laboratorio (cliente cercano).

#### 6-7. Paso a paso y validación
- **Construcción** (~40 h): PWA con salida y entrada, panel y alertas.
- **Validación con ≤15 €:** landing + 30 llamadas o mensajes. **Éxito:** al menos 2 pilotos activos que usen la app al menos 3 veces por semana.

#### 8-10. Legal, riesgos y ampliación
- **Legal:** el registro de quién tiene cada herramienta son datos de empleados; la empresa debe informarles. No geolocalices sin base legal. **Confirma con un asesor.**
- **Riesgos:** venta B2B lenta y poco encaje con "solo online".
- **Abandona** sin 3 clientes de pago en 90 días.
- **Ampliación:** mantenimiento de equipos, EPIs, vehículos y alquiler.

---

## 4. Bloque común: legal, fiscal y técnico al vender desde España

> No soy asesor fiscal ni abogado. Lo marcado con 🔍 **debes confirmarlo con una gestoría**.

### Fiscal
| Tema | Qué dice la fuente | Qué significa para ti |
|---|---|---|
| **Ventas a consumidores de la UE (OSS)** | Umbral único de **10.000 €/año** en ventas a distancia dentro de la UE para empresas establecidas en la UE. Por debajo, IVA de tu país; por encima, IVA del país del cliente mediante la ventanilla única (OSS) [38] | Al empezar cobras IVA español (21 %) a toda la UE. Al superar 10.000 € (sumando bienes y servicios digitales) te das de alta en OSS 🔍 |
| **Suscripciones (servicio digital)** | El umbral de 10.000 € también incluye servicios de telecomunicaciones, radiodifusión y electrónicos [38] | Tus cuotas de guía, galería o autenticidad a particulares de la UE cuentan para el mismo umbral 🔍 |
| **B2B en la UE** | — | Factura sin IVA con inversión del sujeto pasivo si el cliente tiene número de IVA válido (VIES); tú, alta en el ROI 🔍 |
| **Reino Unido** | Envíos de **135 £ o menos**: el IVA británico se cobra en el punto de venta, no en aduana [38] | En Etsy y Amazon, el marketplace suele recaudar ese IVA. En tienda propia tendrías que registrarte en el IVA británico 🔍 |
| **EE. UU.** | Desde el **29-08-2025** se acabó la exención de minimis de 800 $ para todos los países; los envíos de la UE pagan un arancel del 15 %. Correos suspendió temporalmente los envíos y hubo dudas sobre quién cobra los aranceles [15] | Cada envío físico a EE. UU. paga arancel. **Empieza por la UE y el Reino Unido**; para EE. UU., productos con más peso digital, o comprueba el estado actual de Correos y las opciones con aranceles pagados 🔍 |
| **Autónomo** | No investigado en esta búsqueda | Alta en el RETA, cuota (tarifa plana si aplica), modelos 303/130 o 349. Pide presupuesto a una gestoría online 🔍 |

### Producto
- **GPSR (Reglamento de seguridad general de productos, UE 2023/988):** obligatorio desde diciembre de 2024 para productos de consumo. Al estar en la UE, tú eres el fabricante o importador responsable. Necesitas información de seguridad en el idioma del país, tus datos de contacto en el producto o embalaje, identificación del lote y un análisis de riesgos documentado. Etsy pide los datos del responsable para los anuncios dirigidos a la UE [39].
- **Juguetes:** si el producto es para menores de 14 años, aplica la normativa de seguridad de juguetes (CE, EN 71). Afecta a 3.3 (peluche) y 3.4 (búsqueda del tesoro) 🔍.
- **RED (equipos de radio):** la industria (Eurosmart) sostiene que las etiquetas pasivas sin batería no son equipos de radio y no necesitan marcado CE por RED. Es una posición sectorial, no oficial, y las autoridades nacionales podrían interpretarlo de otra forma [40] 🔍.
- **RAEE (residuos electrónicos):** Alemania incluye desde 2019 los "aparatos pasivos" (cables, enchufes) en la ElektroG. **No está claro si una etiqueta NFC pasiva vendida sola cuenta** [41]. Amazon verifica el registro RAEE en Alemania desde julio de 2023 [41]. Si vendes en Alemania, especialmente en Amazon.de, consulta a un gestor de RAEE alemán 🔍. En España existe el registro de productores de aparatos eléctricos y electrónicos (RII-AEE) 🔍.
- **Garantías:** venta a consumidores en la UE = 3 años de garantía legal en España (bienes nuevos) y 14 días de desistimiento. **Excepción:** productos personalizados (grabado con nombre) no tienen desistimiento 🔍.

### Datos (RGPD)
- Cualquier página donde el cliente sube contenido (guía, voz, fotos, homenaje) te convierte en **responsable** (si es un particular) o **encargado** (si es un negocio). Necesitas política de privacidad, contrato de encargo con proveedores (Supabase, Vercel), elegir la región UE del alojamiento, plazos de conservación y borrado.
- **Datos de salud** (por eso descarto la ID médica): consentimiento explícito, probable EIPD, seguridad reforzada [32].
- **Cookies:** si solo cuentas toques de forma anónima en el servidor, quizá no necesites banner 🔍.

### Técnico (para todas las ideas)
- Que el chip lleve **solo una URL corta tuya** (`tudominio.com/t/CODIGO`). Así todo se cambia desde el panel y no dependes de reprogramar.
- **Bloquea la escritura** de las etiquetas (lock), para que nadie te cambie el contenido. Los chips NFC pueden leerse y escribirse por terceros si no se bloquean [26].
- QR siempre como respaldo: los iPhone anteriores al XS (2018) no leen NFC en segundo plano [20].
- Plan de continuidad: dominio a 10 años, exportación de datos y aviso de cierre con antelación.

---

## Fase 4: recomendación y plan de 90 días

### Las 3 ideas que yo elegiría para ti

> Con 25 € mantengo las mismas tres, porque las tres se pueden validar cobrando antes de fabricar. Lo que cambia es **cómo** se arranca: preventa, bajo pedido, planes gratuitos y Etsy solo cuando haya caja.

1. **Kit NFC para anfitriones (3.1).** Es la única que reúne a la vez:
   - demanda demostrada (software de pago y placas en Etsy),
   - un hueco claro (nadie junta placa física y guía editable barata),
   - ingreso recurrente,
   - un arranque de unos 16 € con preventa (cobras antes de fabricar),
   - y encaje directo con lo que ya sabes hacer: es "tarjeta NFC + web editable" pero dirigido a otro cliente y otro problema.

   Además puedes probar con anfitriones españoles, que son un mercado enorme y cercano, mientras vendes en el Reino Unido, Alemania y EE. UU.
2. **Regalos de voz o vídeo (3.3).** La más rápida de validar en Etsy y TikTok, con buen margen y sin necesidad de convencer a empresas. Te da caja y aprendizaje de marketplace mientras la idea 1 madura. Empieza **sin peluche** (marco, caja, llavero) para evitar la normativa de juguetes.
3. **Autenticidad NFC para pequeñas marcas (3.2).** La de mayor valor por cliente y la más defendible: la criptografía es una barrera para copiarte y en Shopify casi no hay competencia. Es más lenta y técnica, por eso va tercera. Úsala para subir de ticket cuando tengas la infraestructura de 3.1 (panel, Stripe, URLs) hecha.

**Por qué no las demás:**
- **Búsqueda del tesoro (3.4):** con 25 € sube en la tabla porque la versión digital cuesta 0 €, pero el kit físico choca con la normativa de juguetes. **Es mi alternativa número 4:** si quieres un experimento paralelo gratis, lanza la versión digital.
- **Bodas (3.5):** una venta por cliente, venta con meses de antelación y costes de vídeo.
- **Memoriales (3.6):** delicado, obliga a garantizar el alojamiento durante años y exige pruebas de durabilidad a la intemperie.
- **Músicos (3.7):** el gran argumento (contar para Billboard) está reservado a proveedores aprobados [35].
- **Herramientas (3.8):** venta B2B lenta, poco compatible con 2 h al día y solo online.

### Plan de 90 días para el kit de anfitriones (2 h/día ≈ 14 h/semana; presupuesto de 25 €)

**Regla del plan:** de tu bolsillo salen como máximo 25 €. Todo lo demás se paga con lo que cobres. Si en una semana no hay ingresos, no se gasta.

| Semana | Objetivo | Tareas concretas | De tu bolsillo (acumulado) | Pagado con ventas |
|---|---|---|---|---|
| 1 | Investigación y material mínimo | Leer 30 hilos de anfitriones (Reddit, Facebook) y apuntar quejas literales; comprar 1 paquete de pegatinas NTAG213 (7,99 €); pedir presupuesto de placa en 2-3 talleres | 8 € | — |
| 2 | Validación sin producto | Demo del panel en hosting gratis; landing en subdominio gratuito con vídeo y Payment Link de reserva (30 % de descuento); 30 mensajes directos; comprobar si Etsy te cobra la cuota de apertura | 8 € | — |
| 3 | **Decisión** | Si hay al menos 3 reservas pagadas, sigues. Si no, cambias el mensaje o el segmento (gestores en vez de particulares) y repites la semana 2 una vez | 8 € | — |
| 4 | Panel mínimo | Login, guía por secciones, URL por etiqueta, wifi con QR, traducción automática (todo en planes gratuitos) | 8 € | — |
| 5 | Primer prototipo | 1 placa en taller (~8 €) o marco propio; fotos en un piso real | 16 € | — |
| 6 | Entregar las reservas | Con el dinero de las reservas: placas para esos pedidos + dominio propio (~10 €) | 16 € | ~40-60 € |
| 7 | Tienda | Abrir Etsy (pagando la cuota de apertura con ventas, si la hay) con 5 anuncios en inglés y alemán; textos legales | 16 € | +15-30 € |
| 8 | Contenido | 6 vídeos cortos con reacciones de clientes reales; responder en foros; 2 kits a microcreadores (pagados con ventas) | 16 € | +15 € |
| 9 | Cobro recurrente | Stripe Billing: 3 meses gratis y luego 4,90 €/mes; correos de activación | 16 € | — |
| 10 | Gestores | Plan para 5+ propiedades; 20 mensajes a co-hosts y empresas de limpieza | 16 € | — |
| 11 | Optimizar | Revisar conversión (visitas → ventas); probar 2 fotos principales y 2 precios (35 € y 45 €) | 16 € | — |
| 12 | Segundo canal y hosting de pago | Si el panel ya tiene clientes de pago, pasar a un hosting que permita uso comercial (~20 $/mes) [37]; 2 artículos SEO ("airbnb welcome book") | 16 € | ~20 €/mes |
| 13 | **Revisión** | Métricas: kits vendidos, % que activa la guía, toques por kit. **Sigue si:** al menos 15 kits y al menos 30 % activan. **Replantea si:** 5-15 kits. **Abandona si:** menos de 5 kits, y pasa a 3.3 reutilizando el panel | 16 € | — |

Te quedan ~9 € de colchón para un imprevisto (reponer pegatinas o un envío). **No gastes en anuncios** hasta tener ventas orgánicas.

### Ideas que descartaría aunque suenen bien
| Idea | Por qué no |
|---|---|
| **Chapas NFC para mascotas** | Saturadas: más de 20.000 resultados en Amazon.es, competidores a 7,99-10,90 € en Etsy y Amazon. Guerra de precios |
| **Etiquetas de equipaje** | Igual: decenas de etiquetas NFC+QR a 18-25 € en Amazon.es; Dynotag a 22-25 $ sin cuota [3] |
| **Llaveros de "tu canción" / Spotify** | 367 resultados en Amazon.es a 5,99-14,99 €; es lo primero que copia todo el mundo |
| **ID médica y pulseras para demencia** | Datos de salud (RGPD art. 9) y, en el Reino Unido, la policía las regala [29] |
| **Uñas NFC** | Moda de nicho; las noticias son de 2014-2023 [23] |
| **Packs de automatización del hogar** | El chip cuesta céntimos y el cliente técnico lo sabe [17]; sin recurrencia |
| **Propinas NFC** | Pagos regulados, competencia con fintechs (TIPMO, thankyü) [18] y poca cultura de propina con tarjeta en España |
| **Tarjetas "compatibles con Yoto o Toniebox"** | Dependes de marcas ajenas (marcas registradas, términos de uso) y del contenido con derechos; si es para niños, normativa de juguetes |
| **Turismo y museos** | Ventas a administraciones públicas, nada compatible con "online en ratos libres" |

---

## Lista de fuentes

Todas consultadas el 11-10-2026. Indico la fecha de publicación cuando la conozco ("s. f." = sin fecha visible).

1. PetHub: NFC en chapas — RFID Journal (2021): https://www.rfidjournal.com/?p=191050 · Ayuda PetHub: https://pethub.ladesk.com/474565-How-does-PetHub-work · Blog con precios antiguos: https://www.wanderingeducators.com/best/traveling/pethub-helps-track-lost-pets-home-or-away.html
2. ID médica NFC: Twiceme (JP Cycles, s. f.): https://www.jpcycles.com/product/twiceme-nfc-emergency-tag · Tap2Tag (Triathlon Magazine, s. f.): https://triathlonmagazine.ca/?p=19067 · Sharewear (RFID Journal): https://www.rfidjournal.com/?p=222080 · KOPILOT.ID (Bicycle Retailer, 17-12-2025): https://www.bicycleretailer.com/new-products/2025/12/17/kopilotid-launches-nfc-enabled-emergency-id
3. Dynotag: ShopSavvy (precio jul-2025): https://shopsavvy.com/products/dynotag-smart-luggage-id-tag · HotAirTag (14-03-2026): https://hotairtag.com/airtag-vs-dynotag/
4. Memoriales QR y NFC: Scripps News (s. f.): https://www.wcpo.com/qr-codes-gravestones-provide-digital-memories-those-left-behind · Cemetery Tech (Lapidaris): https://cemeterytech.omeka.net/items/show/42 · Etsy (moneda QR): https://www.etsy.com/listing/1588549576 · Objecs/RosettaStone (NFCW): https://www.nfcw.com/?p=2917
5. Pasaporte Digital de Producto: Renoon (calendario ESPR): https://www.renoon.com/blog/the-timeline-of-digital-product-passport-regulation-in-eu-espr-from-product-groups-to-rollout-schedule · NFC Forum: https://nfc-forum.org//coverage/nfc-forum-to-support-the-introduction-of-digital-product-passports-with-new-nfc-tag-standards · AMEC (2026): https://amec.es/en/2026-marks-the-start-of-the-digital-product-passport-in-the-eu/ · OneStopESG (registro): https://onestopesg.com/esg-resources/eu-dpp-registry-live · Transition Pathways UE (Decisión 2026/1736): https://transition-pathways.europa.eu/retail/policy/commission-implementing-decision-eu-20261736-harmonised-standards-digital-product
   - 5b. Yoto y Tonies: ASInsight (estimaciones de Amazon, abr-jul 2026): https://www.asinsight.com/report/US/yoto-card · Tonies, nota de prensa (2026): https://www.mynewsdesk.com/us/tonies/pressreleases/tonies-continues-profitable-growth-with-record-results-in-2025-expects-strong-momentum-for-full-year-2026-expansion-of-ecosystem-around-toniebox-2-proves-a-global-success-3442746
6. Álbumes NFC K-pop: Korea Times (PressReader): https://thekoreatimes.pressreader.com/article/281745569000699 · Asiae (21-12-2022): https://view.asiae.co.kr/en/article/2022122112363208259 · Datos de Yes24 (seenthis.kr): https://seenthis.kr/newspageeng/1368?page=16
7. Tarjetas NFC para músicos: Community Musician: https://www.bighassle.com/community-musician · Tapyoca (NJIT): https://news.njit.edu/njit-training-helps-undergrad-and-parents-open-new-music-business · NFCW: https://www.nfcw.com/?p=79677
8. Wifi NFC para anfitriones: WiFi Tap Connect (App Store): https://apps.apple.com/app/id1614168584 · MakerWorld (placa wifi): https://www.makerworld.com/en/models/1682306 · Makerwords (media de precios): https://www.makerwords.com/keyword/nfc-wifi · Ping (Hackster): https://www.hackster.io/news/every-airbnb-host-needs-ping-8587c2a990c0
9. Estadísticas de Airbnb: DemandSage (2026): https://demandsage.com/airbnb-statistics · SearchLogistics: https://searchlogistics.com/learn/statistics/airbnb-statistics
10. Touch Stay: FitGap: https://us.fitgap.com/products/touch-stay · STR Specialist (2026): https://strspecialist.com/reviews/touchstay-guest-guidebook-review · Rakidzich (2026): https://www.rakidzich.com/articles/touchstay-vs-hostfully-guidebook-airbnb-2026 · Touch Stay demo: https://touchstay.com/demo-redesign · Precios: https://touchstay.com/pricing-entry
11. Hostfully: https://www.hostfully.com/pricing/digital-guidebooks/ · GetApp (2026): https://www.getapp.com/hospitality-travel-software/a/hostfully-guidebook-platform/pricing/
12. Quiring Living Headstones: https://monuments.com/store/living-headstones-qr-code · https://monuments.com/living-headstones
13. The Knot 2025 (Fox Business, mayo de 2025): https://www.foxbusiness.com/lifestyle/wedding-season-here-how-much-one-cost-2025
14. Comisiones de Etsy: Gelato: https://www.gelato.com/blog/etsy-fees · Printful Reino Unido (tasa regulatoria España 0,72 %): https://www.printful.com/uk/blog/how-much-does-etsy-take-per-sale · Checkoutpage (2026): https://checkoutpage.com/blog/etsy-fees · Growing Your Craft (2026): https://www.growingyourcraft.com/blog/how-much-does-it-really-cost-to-sell-on-etsy
15. Fin de la exención de minimis en EE. UU. (agosto de 2025): ConsumerAffairs: https://www.consumeraffairs.com/news/european-postal-services-halt-us-shipments-as-tariff-exemption-ends-082525.html · EU Perspectives: https://euperspectives.eu/2025/08/european-postal-services-suspend-parcel-shipments-to-us/
16. Precios de chips: GoToTags NTAG213 38 mm: https://store.gototags.com/nfc-sticker-ntag213-38-mm-circle-matrix-on · GoToTags 25 mm: https://store.gototags.com/nfc-sticker-ntag213-25-mm-circle-matrix-on · rfid.it NTAG213 29 mm: https://rfid.it/en/iq-labels/5320-ntag213-nfc-sticker-29-mm-for-fast-and-secure-communication.html · rfid.it NTAG424 Identiv: https://rfid.it/en/nfc-tag-identiv/5308-flexible-pet-25mm-nfc-tag-with-ntag424-dna-chip.html · rfid.it NTAG424 Avery: https://rfid.it/en/avery-dennison/1354-circus-pro-nxp-ntag424-dna-o-22-wet-3-layer-hf-nfc.html · GoToTags ficha lavable 424: https://store.gototags.com/nfc-laundry-token-ntag-424-dna-20-mm-circle-black/ · Elechouse 424: https://www.elechouse.com/product/ntag424-dna-13-56mhz-white-pvc-nfc-card-42x26mm/ · eBay antimetal: https://www.ebay.de/itm/286046742800
17. NFC y Atajos de iPhone: MacMost: https://macmost.com/?p=34736 · WILX (2023): https://www.wilx.com/2023/09/01/what-tech-what-are-nfc-tags-how-do-they-work
18. Propinas NFC: TIPMO (Hotel Management, 2026): https://www.hotelmanagement.net/tech/gratifid-launches-tipmo-cashless-tipping-platform-hospitality · thankyü (FinTech Global, 04-04-2025): https://fintech.global/2025/04/04/british-fintech-thankyu-unveils-cashless-tipping-platform-to-support-service-staff/ · Tipsme: https://webcatalog.io/apps/tipsme
19. Carteles inmobiliarios NFC: HomeSmart (RISMedia): https://ace.rismedia.com/?p=451849
20. Plantas y NFC: Hackaday: https://hackaday.com/blog/page/1385/?a=123 · Compatibilidad de iPhone (EasyApps): https://easyappsecom.com/guides/shopify-nfc-tap-marketing
21. Verisart: https://verisart.com/old-home-3 · https://woocommerce.com/products/verisart
22. Vino y NFC: Resource Label: https://www.resourcelabel.com/nfc-applications-for-wine-and-spirits-brands/ · ST (bodega Type-5): https://blog.st.com/wine-journey-type-5-nfc-tag
23. Uñas NFC Japón: Gizmodo JP: https://www.gizmodo.jp/article/smartnail-nfc-instanail/ · TheBridge (2014): https://thebridge.jp/2014/04/lumideco
24. TapStamp: https://www.softwareadvice.com/product/548852-TapStamp/ · https://www.getapp.co.uk/software/2090144/tapstamp
25. Herramientas NFC: UnTouch: https://www.untouch.de/en/ · AssetTrack (Capterra): https://www.capterra.in/software/1092151/AssetTrack · Jotform: https://www.jotform.com/app-templates/nfc-inventory-manager-app · Bintech: https://apps.apple.com/jo/app/bintech/id6748889502
26. Oshikatsu NFC Japón: SoftBank News (26-08-2026): https://www.softbank.jp/sbnews/entry/20260826_01 · paymentnavi (加陽印刷): https://paymentnavi.com/?p=110993 · Manual de Sanwa (seguridad de escritura): https://cdn.sanwa.co.jp/support/setsumeisyo/pdf/M/MM-NFCT100_ver1-0.pdf
27. Búsqueda del tesoro NFC: MacMost: https://macmost.com/how-to-create-a-treasure-hunt-game-with-your-iphone-and-nfc-tags.html · GoToTags (conferencias): https://gototags.com/articles/scavenger-hunt-game-with-nfc-tags-at-conference-event · Munzee (NFCW): https://www.nfcw.com/?p=17625
28. Bodas: Wearable Wedding (PrintPlast): https://www.printplast.com/printplast-wearable-wedding-rfid-wristband-partnership/ · WedKeep: https://www.hunted.space/product/wedkeep · Wedding Photo Swap: https://apps.apple.com/app/id779463311 · WeddingWire (foro): https://www.weddingwire.com/wedding-forums/how-are-you-asking-guests-to-share-their-photos/7bdeb486b2a39ed2.html · About Last Night: https://alternativeto.net/software/about-last-night/about · Etsy (QR): https://maxandbella.patternbyetsy.com/listing/4322353067/printed-share-the-love-qr-code-cards
29. Demencia, Reino Unido: NFCW: https://www.nfcw.com/?p=74722 · College of Policing: https://www.college.police.uk/support-forces/practices/dementia-safeguarding-scheme-reduce-missing-person-cases · Policía de Durham: https://www.durham.police.uk/news/durham/news2/2025/12.-december/dementia-safeguarding-scheme/
30. Regalos de voz y vídeo: Newegg: https://www.newegg.com/p/023-06XK-00033 · Tap For Message (NFCW): https://www.nfcw.com/?p=24963 · Tapogram (RFID Journal): https://www.rfidjournal.com/?p=75359 · Etsy Tapkeeps: https://www.etsy.com/shop/tapkeeps
31. Memoriales en España: Omneo (RFID Journal): https://www.rfidjournal.com/?p=72073 · Fox News: https://www.foxnews.com/lifestyle/omneo-a-digital-way-to-keep-the-memory-of-loved-ones-alive · funeral.com (privacidad): https://funeral.com/es/blogs/the-journal/smart-urns-explained-screens-qr-codes-nfc-apps-and-the-privacy-questions-to-ask
32. RGPD art. 9: Sota.io (2026): https://sota.io/blog/gdpr-art-9-special-categories-personal-data-prohibition-exceptions-explicit-consent-health-biometric-developer-guide-2026 · Momentum: https://www.themomentum.ai/blog/gdpr-consent-requirements-health-data
33. NFC y turismo en España: Xataka Móvil (Alhambra): https://www.xatakamovil.com/servicios/la-tecnologia-nfc-y-el-turismo-se-cruzan-a-los-pies-de-la-alhambra · NFCW (Cáceres): https://www.nfcw.com/?p=7061
34. NTAG 424 DNA: NXP: https://www.nxp.com/products/NTAG424DNA · Hoja de datos (espejo): https://docs.ampnuts.ru/nxp.com.datasheet/NT4H2421Gx.pdf · Lectronz: https://lectronz.com/products/ntag424-dna-nfc-tags-secure-authentication · RFID Solution: https://rfidsolution.com/?p=55641
35. Billboard y Luminate, Smart Media Albums (oct-2026): Hypebot: https://www.hypebot.com/billboard-luminate-add-nfc-and-smart-media-to-charts/ · Luminate: https://luminatedata.com/?p=7264 · Mediaweek (Serenade): https://mediaweek.com.au/serenade-approved-for-billboard-chart-eligibility-in-the-us
36. Tarjetas impresas: GoToTags PVC: https://store.gototags.com/printed-nfc-pvc-card-ntag213 · Global Sources: https://m.german.globalsources.com/NFC-Tag/NFC-Tags-1200908761p.htm
37. Hosting: Supabase (JetAdmin 2026): https://www.jetadmin.io/blog/supabase-pricing-2026-guide-to-plans-limits-and-real-world-costs/ · Vercel (Schematic): https://schematichq.com/blog/vercel-pricing · Vercel (livemy.app): https://livemy.app/blog/vercel-pricing
38. IVA OSS, IOSS y Reino Unido: A2X: https://support.a2xaccounting.com/en/articles/5420081-what-is-vat-oss-ioss-and-how-does-it-affect-uk-sellers · Zmartly: https://zmartly.co.uk/news-insights/amazon-fba-vat-oss-ioss-135-rule
39. GPSR: Ecommerce Germany (2026): https://ecommercegermany.com/blog/gpsr-general-product-safety-regulation/ · Craftybase: https://craftybase.com/blog/what-is-gpsr · Listadum (Etsy): https://listadum.com/blog/understanding-the-general-product-safety-regulation-gspr-what-etsy-sellers-need-to-know
40. RED y etiquetas pasivas: Eurosmart (06-11-2017): https://www.eurosmart.com/radio-equipment-directive-and-passive-rfid-products/ · Guía RED de la Comisión: https://ec.europa.eu/docsroom/documents/33162/attachments/1/translations/en/renditions/pdf
41. RAEE Alemania, aparatos pasivos: Bitkom (2019): https://www.bitkom.org/Presse/Presseinformation/Stiftung-Elektro-Altgeraete-Register-Passive-elektronische-Geraete-ab-1-Mai-2019-im · IT-Recht Kanzlei: https://www.it-recht-kanzlei.de/passive-elektrogeraete-registrierung-kennzeichnung.html · EC4P: https://ec4p.com/news/passive-devices-now-in-scope-of-german-weee-regulations
42. Cloudflare Pages, plan gratuito (límites; uso comercial no confirmado): Costbench (2026): https://costbench.com/software/cloud-infrastructure/cloudflare-pages-workers/free-plan/ · Comparativa (30-09-2026): https://guptadeepak.com/tools/top-5-static-site-hosting-jamstack-platforms-2026/
43. Cuota de apertura de Etsy (variable, ~15-29 $): Value Added Resource (2024): https://www.valueaddedresource.net/etsy-variable-shop-setup-fee/ · Crosslist (2026): https://crosslist.com/blog/etsy-review · Growing Your Craft (2026): https://www.growingyourcraft.com/blog/how-much-does-it-really-cost-to-sell-on-etsy

**Comprobaciones directas en marketplaces (navegador, 11-10-2026)**
- [A-ES] Amazon.es: "chapa nfc perro", "pulsera nfc emergencia medica", "placa nfc lapida", "tarjeta felicitacion nfc video", "etiqueta nfc equipaje", "nfc boda fotos invitados", "llavero nfc cancion spotify", "placa wifi nfc", "peluche mensaje voz nfc", "busqueda del tesoro nfc" (URLs del tipo `https://www.amazon.es/s?k=<término>`).
- [E-Etsy] Etsy (versión España): "nfc memorial", "nfc memorial plaque headstone", "nfc pet tag", "nfc wedding photo sharing", "nfc airbnb wifi sign", "nfc video message card", "custom yoto card", "nfc certificate of authenticity art", "nfc album card musician", "nfc voice recording teddy bear memorial" (URLs del tipo `https://www.etsy.com/search?q=<término>`).
- [S-Shopify] Shopify App Store, búsqueda "nfc" (46 apps): https://apps.shopify.com/search?q=nfc
- **No disponible:** Google Trends (error 429 al consultar).
