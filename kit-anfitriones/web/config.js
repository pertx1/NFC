// =====================================================================
//  CONFIGURACIÓN — es el único archivo que tienes que editar
// =====================================================================
// Mientras SUPABASE_URL esté vacío, la web funciona en MODO DEMO:
// los datos se guardan solo en tu navegador (localStorage). Sirve para
// probarla y hacer capturas. Para lanzarla, rellena los datos de Supabase.
window.APP_CONFIG = {
  BRAND: "TocToc",                        // nombre provisional: compruébalo en OEPM/EUIPO antes de usarlo
  CONTACT_EMAIL: "hola@ejemplo.es",       // tu email de contacto
  CONTACT_WHATSAPP: "",                   // opcional, p. ej. "34600111222" (sin + ni espacios)
  SELLER_NAME: "Tu Nombre Apellido",      // titular (aviso legal / facturas)
  SELLER_TAX_ID: "00000000X",             // tu NIF (el DNI con letra), una vez dado de alta en Hacienda
  SELLER_ADDRESS: "Calle Ejemplo 1, 48000 Bilbao (Bizkaia)",

  // Dirección DEFINITIVA de la web, acabada en "/". Es la que se graba en los chips:
  // decídela ANTES de grabar la primera etiqueta de un cliente (guía, día 12).
  // Vacío = usa la dirección desde la que abras la web (solo para pruebas).
  SITE_URL: "",                           // p. ej. "https://toctoc.es/"

  // --- Supabase (gratis) -> guía, día 4 ---
  SUPABASE_URL: "",                       // p. ej. "https://abcd1234.supabase.co"
  SUPABASE_ANON_KEY: "",                  // la clave "anon public"

  // --- Cobros (sin Stripe) ---
  BIZUM_PHONE: "",                        // tu móvil con Bizum, p. ej. "600 111 222"
  IBAN: "ES00 0000 0000 0000 0000 0000",  // para transferencias
  IBAN_HOLDER: "Tu Nombre Apellido",
  PAYPAL_ME: "",                          // p. ej. "toctoc" -> paypal.me/toctoc (permite pagar con tarjeta)
  SHOPIFY_CHECKOUT_URL: "",               // opcional (fase 2): enlace de pago de Shopify Starter
  // Aviso por email de cada pedido (opcional, gratis hasta 50/mes): endpoint de formspree.io
  ORDER_NOTIFY_ENDPOINT: "",

  CURRENCY: "EUR",
  PRODUCTS: [
    { id: "starter", name: "Kit Anfitrión", price: 39,
      desc: "Placa azulejo NFC en soporte de metacrilato + 3 pegatinas + 12 meses de guía" },
    { id: "stickers", name: "Pegatinas extra (5)", price: 9,
      desc: "Para cafetera, vitro, lavadora, aire o la puerta" },
    { id: "pro5", name: "Pack Gestor (5 kits)", price: 169,
      desc: "Cinco kits completos con un único acceso" }
  ],
  RENEWAL_PRICE: 24,                      // €/año a partir del mes 13 (IVA incluido)
  // Zonas de envío. Canarias, Ceuta y Melilla pasan aduana (DUA + IGIC): se atienden por email.
  SHIPPING: { PEN: 4.9, BAL: 7.9 },
  SHIPPING_LABELS: { PEN: "Península", BAL: "Islas Baleares" }
};
