// =====================================================================
//  CONFIGURACIÓN — es el único archivo que tienes que editar
// =====================================================================
// Mientras SUPABASE_URL esté vacío, la web funciona en MODO DEMO:
// los datos se guardan solo en tu navegador (localStorage). Sirve para
// probarla y hacer capturas. Para lanzarla, rellena los datos de Supabase.
window.APP_CONFIG = {
  BRAND: "TapStay",                       // nombre de tu marca (cámbialo)
  CONTACT_EMAIL: "hello@example.com",     // tu email de contacto
  SELLER_NAME: "Tu Nombre Apellido",      // titular (aviso legal / facturas)
  SELLER_TAX_ID: "00000000X",             // tu NIF de autónomo
  SELLER_ADDRESS: "Calle Ejemplo 1, 48000 Bilbao, España",

  // Dirección DEFINITIVA de la web, acabada en "/". Es la que se graba en los chips:
  // decídela ANTES de grabar la primera etiqueta de un cliente (ver guía, día 12).
  // Vacío = usa la dirección desde la que abras la web (solo para pruebas).
  SITE_URL: "",                           // p. ej. "https://tapstay.es/"

  // --- Supabase (gratis) -> ver guía, día 8 ---
  SUPABASE_URL: "",                       // p. ej. "https://abcd1234.supabase.co"
  SUPABASE_ANON_KEY: "",                  // la clave "anon public"

  // --- Cobros (sin Stripe) ---
  PAYPAL_ME: "",                          // p. ej. "tapstay" -> paypal.me/tapstay
  IBAN: "ES00 0000 0000 0000 0000 0000",  // para transferencias SEPA
  IBAN_HOLDER: "Tu Nombre Apellido",
  BIZUM_PHONE: "",                        // opcional, solo clientes en España
  SHOPIFY_CHECKOUT_URL: "",               // opcional (fase 2): enlace de pago de Shopify Starter
  // Aviso por email de cada pedido nuevo (opcional, gratis hasta 50/mes): crea un formulario
  // en formspree.io y pega aquí su endpoint, p. ej. "https://formspree.io/f/abcdwxyz"
  ORDER_NOTIFY_ENDPOINT: "",

  CURRENCY: "EUR",
  PRODUCTS: [
    { id: "starter", name: "Starter Kit", price: 45,
      desc: "Wi-Fi plaque + 3 room stickers + 12 months of your editable guide" },
    { id: "stickers", name: "Extra sticker pack (5)", price: 9,
      desc: "5 extra NFC stickers for appliances, rooms or check-out" },
    { id: "pro5", name: "Host 5-Pack", price: 199,
      desc: "5 Starter Kits for co-hosts and property managers" }
  ],
  RENEWAL_PRICE: 29,                      // €/año a partir del mes 13
  SHIPPING: { EU: 6, ES: 5, UK: 9, US: 14, OTHER: 14 }
};
