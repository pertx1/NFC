# DESIGN.md · TocToc: "azulejo de portal"

## Idea
El producto es un azulejo junto a la puerta, como el número de la casa en los portales de España. Toda la web vive en ese mundo:
- cobalto esmaltado sobre blanco de azulejo;
- una cenefa geométrica (cuartos de círculo y rombo) como orla;
- un único punto de amarillo albero, que es el "toque".

**Lo que rechaza:** la landing SaaS de crema y terracota, y las rejillas de tarjetas iguales.

## Modos por pantalla
| Pantalla | Modo | Qué manda |
|---|---|---|
| `index.html` | Persuadir | Cobalto a sangre en la portada y el cierre; demo en vivo (editor → móvil) como interacción firma |
| `order.html` | Operar | Formulario claro; el mundo solo aporta tipografía, color y la muestra del acabado |
| `g.html` | Leer | Cabecera cobalto con cenefa; wifi primero; el check-in en albero porque es una obligación legal |
| `panel.html`, `admin.html` | Operar | Navegación y controles estándar; el mundo aporta tipografía, paleta y la cenefa del azulejo en el SVG de la placa |

## Tokens (`assets/style.css`)
| Token | Valor | Uso |
|---|---|---|
| `--cobalt` | `#1f3f9e` | Campos de color, botones principales, iconos |
| `--cobalt-deep` | `#142a6e` | Hover, texto activo |
| `--cobalt-ink` | `#0d1b47` | Titulares y texto fuerte |
| `--cobalt-soft` / `--cobalt-line` | `#e8edfb` / `#c9d3f2` | Fondos de icono, selección suave, bordes fríos |
| `--glaze` | `#f6f8fd` | Fondo de página (blanco frío de azulejo, nunca crema) |
| `--albero` / `--albero-ink` | `#e9b23a` / `#4a3200` | CTA de venta, punto NFC, check-in, foco y selección de texto |
| `--ink` / `--muted` / `--line` | `#111a33` / `#4f5b78` / `#dde3f1` | Texto, secundario, divisores |
| Estados | ok `#14713f`, aviso `#8a5300`, error `#b3261e`, con sus fondos `-soft` | Pastillas y validación |
| `--display` | Young Serif | Titulares, precios, nombres de piso (rótulo pintado) |
| `--ui` | Figtree 400–700 | Interfaz y lectura; cifras tabulares |
| Radios | 14 px tarjetas, 10 px campos, píldora en botones | |
| Movimiento | `--ease-out: cubic-bezier(.23,1,.32,1)`; pulsación `scale(.97)` a 160 ms | Respeta `prefers-reduced-motion` |

## Componentes
- **Cenefa:** `<pattern>` SVG de 30 px (`cen-w` blanco sobre cobalto, `cen-b` cobalto sobre blanco) en bandas a todo el ancho. No se usa como textura de fondo general.
- **Botones:** `.btn` (cobalto), `.btn.albero` (venta), `.btn.ghost` (secundario), `.btn.small`.
- **Iconos:** `assets/icons.js`, trazo único de 1,75 en una rejilla de 24. Las secciones de la guía guardan la **clave** del icono (`key`, `coffee`…); los emojis antiguos se muestran tal cual por compatibilidad.
- **Superficies:** tarjeta blanca con borde de 1 px *o* sombra, nunca las dos cosas.
- **Azulejo imprimible:** `plaqueSvg()` en `admin.html`, de 100×100 mm, con cenefa, onda NFC y QR por kit.

## Reglas
- Sin etiquetas encima de los titulares, sin texto con degradado y sin emojis en los iconos de la interfaz.
- El albero aparece una vez por vista como acción principal; no es decoración.
- Foco visible en albero de 3 px; la selección de texto también es albero.
- Los ejemplos de demo (Ático Malvarrosa, el número de registro) van marcados como ejemplo; no se inventan cifras de clientes ni testimonios.
