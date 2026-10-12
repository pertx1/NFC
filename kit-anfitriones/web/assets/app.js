/* TocToc — capa de datos compartida.
   Modo DEMO (sin Supabase): todo vive en localStorage.
   Modo REAL: Supabase (Auth + Postgres + RLS). Misma interfaz en ambos. */
(function () {
  const C = window.APP_CONFIG;
  const DEMO = !C.SUPABASE_URL || !C.SUPABASE_ANON_KEY;
  const sb = DEMO ? null : window.supabase.createClient(C.SUPABASE_URL, C.SUPABASE_ANON_KEY);

  // ---------- utilidades ----------
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const money = (n) => new Intl.NumberFormat("es-ES", { style: "currency", currency: C.CURRENCY, minimumFractionDigits: Number(n) % 1 ? 2 : 0 }).format(n);
  const rand = (n, set = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789") => Array.from(crypto.getRandomValues(new Uint32Array(n)), (x) => set[x % set.length]).join("");
  const slugify = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 40) || "casa";
  const baseUrl = () => C.SITE_URL || location.href.split(/[?#]/)[0].replace(/[^/]*$/, "");
  // Texto con enlaces: escapa todo y convierte solo URLs https en enlaces
  const linkify = (s) => esc(s).replace(/https:\/\/[^\s<]+[^\s<.,;:!?)]/g, (u) => `<a href="${u}" target="_blank" rel="noopener">${u.replace(/^https:\/\//, "").slice(0, 48)}</a>`);

  // ---------- almacenamiento demo ----------
  const KEY = "toctoc-demo-v2";
  function demoDb() {
    let db = null;
    try { db = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
    if (!db) { db = seed(); save(db); }
    return db;
  }
  function save(db) { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) {} }
  function seed() {
    const pid = "demo-prop-1";
    const d = (days) => new Date(Date.now() - days * 864e5).toISOString();
    return {
      user: null,
      admins: ["admin@demo.test"],
      properties: [{
        id: pid, owner: "host@demo.test", name: "Ático Malvarrosa · Valencia", slug: "atico-malvarrosa",
        languages: ["es", "en", "fr", "de"], contact: "+34 600 111 222 (WhatsApp)",
        license_number: "VT-00000-V (ejemplo)", checkin_url: "https://example.com/check-in",
        welcome: { es: "¡Bienvenidos! Esperamos que disfrutéis del ático. Todo lo que necesitáis está aquí abajo.", en: "Welcome! We hope you love the flat. Everything you need is below.", fr: "Bienvenue ! Nous espérons que vous aimerez l'appartement. Tout ce qu'il faut est ci-dessous.", de: "Willkommen! Wir hoffen, euch gefällt die Wohnung. Alles Wichtige findet ihr unten." },
        wifi_ssid: "Malvarrosa_5G", wifi_password: "playa-y-sol-26", wifi_security: "WPA", wifi_hidden: false,
        paid_until: new Date(Date.now() + 365 * 864e5).toISOString().slice(0, 10),
        sections: [
          { key: "checkin", icon: "key", title: { es: "Llegada y llaves", en: "Check-in & keys", fr: "Arrivée et clés", de: "Ankunft & Schlüssel" }, body: { es: "Entrada desde las 15:00. La caja de llaves está a la derecha del portal, código 4821. Ático, puerta B.", en: "Check-in from 15:00. The key box is to the right of the street door, code 4821. Top floor, door B.", fr: "Arrivée dès 15h. La boîte à clés est à droite de la porte d'entrée, code 4821. Dernier étage, porte B.", de: "Check-in ab 15 Uhr. Schlüsselbox rechts neben der Haustür, Code 4821. Dachgeschoss, Tür B." } },
          { key: "coffee", icon: "coffee", title: { es: "Cafetera", en: "Coffee machine", fr: "Machine à café", de: "Kaffeemaschine" }, body: { es: "Nespresso: llena el depósito de atrás, sube la palanca, mete una cápsula y pulsa la taza pequeña. Las cápsulas están en el primer cajón.", en: "Nespresso: fill the tank at the back, lift the lever, insert a capsule and press the small cup. Capsules are in the top drawer.", fr: "Nespresso : remplissez le réservoir, levez le levier, insérez une capsule et appuyez sur la petite tasse. Capsules dans le premier tiroir.", de: "Nespresso: Wassertank füllen, Hebel hoch, Kapsel einlegen, kleine Tasse drücken. Kapseln in der oberen Schublade." } },
          { key: "aire", icon: "thermo", title: { es: "Aire acondicionado", en: "Air conditioning", fr: "Climatisation", de: "Klimaanlage" }, body: { es: "El mando está en la mesilla. Modo ❄ y 24 °C. Apágalo al salir, por favor.", en: "The remote is on the bedside table. Snowflake mode, 24 °C. Please switch it off when you leave.", fr: "La télécommande est sur la table de nuit. Mode froid, 24 °C. Merci de l'éteindre en partant.", de: "Fernbedienung auf dem Nachttisch. Kühlen, 24 °C. Bitte beim Verlassen ausschalten." } },
          { key: "rules", icon: "rules", title: { es: "Normas de la casa", en: "House rules", fr: "Règles de la maison", de: "Hausregeln" }, body: { es: "No se fuma. Silencio de 23:00 a 08:00 (hay vecinos). Máximo 4 personas. El reciclaje va bajo el fregadero.", en: "No smoking. Quiet hours 23:00–08:00 (neighbours!). Max. 4 guests. Recycling bins are under the sink.", fr: "Non-fumeur. Silence de 23h à 8h (voisins). 4 personnes max. Tri sélectif sous l'évier.", de: "Rauchen verboten. Ruhezeit 23–8 Uhr (Nachbarn!). Max. 4 Gäste. Mülltrennung unter der Spüle." } },
          { key: "local", icon: "pin", title: { es: "Recomendaciones", en: "Local tips", fr: "Bonnes adresses", de: "Tipps in der Nähe" }, body: { es: "Paella: La Pepica (10 min andando). Supermercado: Mercadona en la calle de Pavía, abre hasta las 21:30. Playa a 2 minutos.", en: "Paella: La Pepica (10 min walk). Supermarket: Mercadona on Calle de Pavía, open until 21:30. Beach 2 minutes away.", fr: "Paella : La Pepica (10 min à pied). Supermarché : Mercadona, calle de Pavía, jusqu'à 21h30. Plage à 2 minutes.", de: "Paella: La Pepica (10 Min. zu Fuß). Supermarkt: Mercadona, Calle de Pavía, bis 21:30. Strand 2 Minuten entfernt." } },
          { key: "checkout", icon: "door", title: { es: "Salida", en: "Check-out", fr: "Départ", de: "Abreise" }, body: { es: "Salida antes de las 11:00. Deja las llaves en la caja, pon el lavavajillas y cierra las ventanas. ¡Buen viaje!", en: "Check-out by 11:00. Leave the keys in the key box, start the dishwasher and close the windows. Safe travels!", fr: "Départ avant 11h. Laissez les clés dans la boîte, lancez le lave-vaisselle et fermez les fenêtres. Bon voyage !", de: "Abreise bis 11 Uhr. Schlüssel in die Box, Spülmaschine starten, Fenster schließen. Gute Reise!" } }
        ]
      }],
      kits: [{ code: "KIT-DEMO", order_ref: "TT-DEMO01", claimed_by: "host@demo.test", tag_count: 4 }],
      tags: [
        { code: "WIFI7Q", kit_code: "KIT-DEMO", property_id: pid, section_key: "wifi", label: "Azulejo (wifi)" },
        { code: "COF3K9", kit_code: "KIT-DEMO", property_id: pid, section_key: "coffee", label: "Cafetera" },
        { code: "AIR8M2", kit_code: "KIT-DEMO", property_id: pid, section_key: "aire", label: "Mando del aire" },
        { code: "OUT5P4", kit_code: "KIT-DEMO", property_id: pid, section_key: "checkout", label: "Puerta" }
      ],
      taps: (() => { const t = []; const codes = ["WIFI7Q", "WIFI7Q", "WIFI7Q", "COF3K9", "AIR8M2", "OUT5P4", "WIFI7Q", "COF3K9"]; for (let x = 0; x < 30; x++) codes.forEach((c, i) => { if ((x + i) % 3 !== 0) t.push({ tag_code: c, at: d(x) }); }); return t; })(),
      orders: [
        { ref: "TT-7K2Q9M", created_at: d(2), name: "Lucía Fernández", email: "lucia@ejemplo.es", phone: "600 123 456", zone: "PEN", address: "C/ del Mar 12, 3ºB, 29016 Málaga", items: [{ id: "starter", qty: 1 }], finish: "Cobalto clásico", total: 43.9, payment_method: "bizum", status: "paid" },
        { ref: "TT-P3XW8D", created_at: d(1), name: "Apartamentos Sóller SL", email: "reservas@ejemplo.es", phone: "971 000 000", zone: "BAL", address: "Carrer de la Mar 4, 07100 Sóller (Mallorca)", vat: "B00000000", items: [{ id: "pro5", qty: 1 }], finish: "Cobalto clásico", total: 176.9, payment_method: "transfer", status: "pending" }
      ]
    };
  }

  // ---------- sesión ----------
  async function currentUser() {
    if (DEMO) { const db = demoDb(); return db.user ? { email: db.user } : null; }
    const { data } = await sb.auth.getUser();
    return data.user ? { id: data.user.id, email: data.user.email } : null;
  }
  async function login(email) {
    if (DEMO) { const db = demoDb(); db.user = email.trim().toLowerCase(); save(db); return { demo: true }; }
    const { error } = await sb.auth.signInWithOtp({ email, options: { emailRedirectTo: location.href.split("#")[0] } });
    if (error) throw error; return { demo: false };
  }
  async function logout() {
    if (DEMO) { const db = demoDb(); db.user = null; save(db); return; }
    await sb.auth.signOut();
  }

  // ---------- huésped ----------
  async function getGuide(code) {
    if (DEMO) {
      const db = demoDb();
      const tag = db.tags.find((t) => t.code === code) || (code === "demo" ? db.tags[0] : null);
      if (!tag || !tag.property_id) return null;
      const p = db.properties.find((x) => x.id === tag.property_id);
      return p ? { property: p, section_key: code === "demo" ? null : tag.section_key } : null;
    }
    if (code === "demo") return { property: seed().properties[0], section_key: null }; // demo pública de la portada
    const { data, error } = await sb.rpc("get_guide", { p_code: code });
    if (error) throw error; return data;
  }
  async function logTap(code, lang) {
    if (DEMO) { const db = demoDb(); db.taps.push({ tag_code: code, at: new Date().toISOString(), lang }); save(db); return; }
    await sb.rpc("log_tap", { p_code: code, p_lang: lang });
  }

  // ---------- anfitrión ----------
  async function myProperties() {
    if (DEMO) { const db = demoDb(); return db.properties.filter((p) => p.owner === db.user); }
    const { data, error } = await sb.from("properties").select("*").order("created_at");
    if (error) throw error; return data;
  }
  async function saveProperty(p) {
    if (DEMO) {
      const db = demoDb(); const i = db.properties.findIndex((x) => x.id === p.id);
      if (i >= 0) { db.properties[i] = p; save(db); return p; }
      const np = { ...p, id: "p-" + rand(6), owner: db.user, paid_until: new Date(Date.now() + 365 * 864e5).toISOString().slice(0, 10) };
      db.properties.push(np); save(db); return np;
    }
    const row = { ...p }; delete row.owner; delete row.created_at;
    if (!row.id) delete row.id;
    const { data, error } = await sb.from("properties").upsert(row).select().single();
    if (error) throw error; return data;
  }
  async function myTags() {
    if (DEMO) { const db = demoDb(); const kits = db.kits.filter((k) => k.claimed_by === db.user).map((k) => k.code); return db.tags.filter((t) => kits.includes(t.kit_code)); }
    const { data, error } = await sb.from("tags").select("*").order("code");
    if (error) throw error; return data;
  }
  async function updateTag(code, patch) {
    if (DEMO) { const db = demoDb(); Object.assign(db.tags.find((t) => t.code === code), patch); save(db); return; }
    const { error } = await sb.from("tags").update(patch).eq("code", code);
    if (error) throw error;
  }
  async function claimKit(kitCode) {
    kitCode = kitCode.trim().toUpperCase();
    if (DEMO) {
      const db = demoDb(); const k = db.kits.find((x) => x.code === kitCode);
      if (!k) throw new Error("No encontramos ese código. Revisa que esté bien escrito (no lleva O ni 0).");
      if (k.claimed_by && k.claimed_by !== db.user) throw new Error("Este kit ya está activado en otra cuenta.");
      k.claimed_by = db.user; save(db); return k;
    }
    const { data, error } = await sb.rpc("claim_kit", { p_kit: kitCode });
    if (error) throw new Error(/not found|already/i.test(error.message) ? "No encontramos ese código o ya está activado." : error.message);
    return data;
  }
  async function tapStats(days = 30) {
    const since = Date.now() - days * 864e5;
    if (DEMO) {
      const db = demoDb(); const mine = (await myTags()).map((t) => t.code);
      const out = {}; db.taps.filter((t) => mine.includes(t.tag_code) && Date.parse(t.at) > since).forEach((t) => (out[t.tag_code] = (out[t.tag_code] || 0) + 1));
      return out;
    }
    const { data, error } = await sb.rpc("tap_stats", { p_days: days });
    if (error) throw error; const out = {}; (data || []).forEach((r) => (out[r.tag_code] = Number(r.taps))); return out;
  }

  // ---------- pedidos ----------
  async function createOrder(o) {
    o.ref = "TT-" + rand(6); o.status = "pending"; o.created_at = new Date().toISOString();
    if (DEMO) { const db = demoDb(); db.orders.push(o); save(db); return o; }
    const { error } = await sb.from("orders").insert(o);
    if (error) throw error; return o;
  }
  // Lista de espera (SALES_OPEN: false): se apuntan sin pagar
  async function joinWaitlist(w) {
    w.created_at = new Date().toISOString();
    if (DEMO) { const db = demoDb(); (db.waitlist = db.waitlist || []).push({ ...w, id: Date.now() }); save(db); return w; }
    const { error } = await sb.from("waitlist").insert(w);
    if (error) throw error; return w;
  }
  async function listWaitlist() {
    if (DEMO) return (demoDb().waitlist || []).slice().reverse();
    const { data, error } = await sb.from("waitlist").select("*").order("created_at", { ascending: false });
    if (error) throw error; return data;
  }
  async function updateWaitlist(id, patch) {
    if (DEMO) { const db = demoDb(); Object.assign((db.waitlist || []).find((w) => w.id === id), patch); save(db); return; }
    const { error } = await sb.from("waitlist").update(patch).eq("id", id);
    if (error) throw error;
  }

  // ---------- admin (tú) ----------
  async function isAdmin() {
    const u = await currentUser(); if (!u) return false;
    if (DEMO) return demoDb().admins.includes(u.email);
    const { data } = await sb.rpc("am_i_admin"); return !!data;
  }
  async function listOrders() {
    if (DEMO) return demoDb().orders.slice().reverse();
    const { data, error } = await sb.from("orders").select("*").order("created_at", { ascending: false });
    if (error) throw error; return data;
  }
  // Cambios parciales de un pedido (estado, nº de seguimiento, notas)
  async function updateOrder(ref, patch) {
    if (DEMO) { const db = demoDb(); Object.assign(db.orders.find((o) => o.ref === ref), patch); save(db); return; }
    const { error } = await sb.from("orders").update(patch).eq("ref", ref);
    if (error) throw error;
  }
  // Escucha pedidos nuevos o cambiados. Real: Supabase Realtime. Demo: cambios de localStorage desde otra pestaña.
  function subscribeOrders(onChange) {
    if (DEMO) {
      const h = (e) => { if (e.key === KEY) onChange({ type: "refresh" }); };
      addEventListener("storage", h);
      return () => removeEventListener("storage", h);
    }
    const ch = sb.channel("orders-feed")
      .on("postgres_changes", { event: "*", schema: "public", table: "orders" }, (p) => onChange({ type: p.eventType === "INSERT" ? "insert" : "update", order: p.new }))
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "waitlist" }, (p) => onChange({ type: "waitlist", entry: p.new }))
      .subscribe();
    return () => sb.removeChannel(ch);
  }
  async function setOrderStatus(ref, status) {
    if (DEMO) { const db = demoDb(); db.orders.find((o) => o.ref === ref).status = status; save(db); return; }
    const { error } = await sb.from("orders").update({ status }).eq("ref", ref);
    if (error) throw error;
  }
  async function createKit(orderRef, n) {
    const kit = { code: "KIT-" + rand(6), order_ref: orderRef || null, tag_count: n };
    const tags = Array.from({ length: n }, (_, i) => ({ code: rand(6), kit_code: kit.code, label: i === 0 ? "Azulejo (wifi)" : "Pegatina " + i, section_key: i === 0 ? "wifi" : null }));
    if (DEMO) { const db = demoDb(); db.kits.push(kit); db.tags.push(...tags); save(db); return { kit, tags }; }
    let r = await sb.from("kits").insert(kit); if (r.error) throw r.error;
    r = await sb.from("tags").insert(tags); if (r.error) throw r.error;
    return { kit, tags };
  }
  async function listKits() {
    if (DEMO) { const db = demoDb(); return db.kits.map((k) => ({ ...k, tags: db.tags.filter((t) => t.kit_code === k.code) })).reverse(); }
    const { data, error } = await sb.from("kits").select("*, tags(*)").order("created_at", { ascending: false });
    if (error) throw error; return data;
  }
  async function adminProperties() {
    if (DEMO) return demoDb().properties.map((p) => ({ id: p.id, name: p.name, owner_email: p.owner, paid_until: p.paid_until }));
    const { data, error } = await sb.rpc("admin_properties");
    if (error) throw error; return data;
  }
  async function setPaidUntil(id, date) {
    if (DEMO) { const db = demoDb(); db.properties.find((p) => p.id === id).paid_until = date; save(db); return; }
    const { error } = await sb.rpc("admin_set_paid_until", { p_id: id, p_date: date });
    if (error) throw error;
  }

  function resetDemo() { try { localStorage.removeItem(KEY); } catch (e) {} }

  // ---------- QR ----------
  function qrSvg(text, size = 180) {
    const q = qrcode(0, "M"); q.addData(text); q.make();
    return q.createSvgTag({ cellSize: Math.max(2, Math.floor(size / (q.getModuleCount() + 8))), margin: 4, scalable: true });
  }
  function wifiString(p) {
    const e = (s) => String(s || "").replace(/([\\;,:"])/g, "\\$1");
    return `WIFI:T:${p.wifi_security || "WPA"};S:${e(p.wifi_ssid)};P:${e(p.wifi_password)};;`;
  }
  const tagUrl = (code) => baseUrl() + "g.html?t=" + encodeURIComponent(code);

  function demoBanner() {
    if (!DEMO) return;
    const b = document.createElement("div");
    b.className = "demo-banner";
    b.innerHTML = 'MODO DEMO: los datos solo se guardan en este navegador. <a href="#" id="demo-reset">Reiniciar demo</a>';
    document.body.prepend(b);
    b.querySelector("#demo-reset").onclick = (e) => { e.preventDefault(); resetDemo(); location.reload(); };
  }
  function brand() {
    document.querySelectorAll(".brand-name").forEach((e) => (e.textContent = C.BRAND));
    document.querySelectorAll(".logo-mark").forEach((e) => (e.innerHTML = window.TSI ? TSI.logo : ""));
  }

  window.TS = { C, DEMO, $, $$, esc, linkify, money, slugify, rand, baseUrl, tagUrl, qrSvg, wifiString, demoBanner, brand,
    currentUser, login, logout, getGuide, logTap, myProperties, saveProperty, myTags, updateTag, claimKit, tapStats,
    createOrder, joinWaitlist, listWaitlist, updateWaitlist, isAdmin, listOrders, setOrderStatus, updateOrder, subscribeOrders, createKit, listKits, adminProperties, setPaidUntil, resetDemo };
})();
