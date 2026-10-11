/* TapStay — capa de datos compartida.
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
  const money = (n) => new Intl.NumberFormat("en-IE", { style: "currency", currency: C.CURRENCY }).format(n);
  const rand = (n, set = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789") => Array.from(crypto.getRandomValues(new Uint32Array(n)), (x) => set[x % set.length]).join("");
  const slugify = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "").slice(0, 40) || "home";
  const baseUrl = () => C.SITE_URL || location.href.split(/[?#]/)[0].replace(/[^/]*$/, "");

  // ---------- almacenamiento demo ----------
  const KEY = "tapstay-demo-v1";
  function demoDb() {
    let db = null;
    try { db = JSON.parse(localStorage.getItem(KEY)); } catch (e) {}
    if (!db) { db = seed(); save(db); }
    return db;
  }
  function save(db) { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) {} }
  function seed() {
    const pid = "demo-prop-1";
    return {
      user: null,
      admins: ["admin@demo.test"],
      properties: [{
        id: pid, owner: "host@demo.test", name: "Seaside Loft · Brighton", slug: "seaside-loft",
        languages: ["en", "es", "de"], contact: "+44 7700 900123 (WhatsApp)",
        welcome: { en: "Welcome! We hope you love the loft. Everything you need is below — tap a section.", es: "¡Bienvenidos! Esperamos que disfrutéis del loft. Todo lo que necesitáis está abajo.", de: "Willkommen! Wir hoffen, das Loft gefällt euch. Alles Wichtige findet ihr unten." },
        wifi_ssid: "SeasideLoft_5G", wifi_password: "sunny-beach-2026", wifi_security: "WPA", wifi_hidden: false,
        paid_until: "2027-10-11",
        sections: [
          { key: "checkin", icon: "🔑", title: { en: "Check-in & keys", es: "Entrada y llaves", de: "Check-in & Schlüssel" }, body: { en: "Check-in from 15:00. The key box is to the right of the door, code 4821.", es: "Entrada desde las 15:00. La caja de llaves está a la derecha de la puerta, código 4821.", de: "Check-in ab 15:00 Uhr. Schlüsselbox rechts neben der Tür, Code 4821." } },
          { key: "coffee", icon: "☕", title: { en: "Coffee machine", es: "Cafetera", de: "Kaffeemaschine" }, body: { en: "Nespresso: fill the tank at the back, lift the lever, insert a capsule and press the small cup button. Capsules are in the top drawer.", es: "Nespresso: llena el depósito trasero, sube la palanca, mete una cápsula y pulsa la taza pequeña. Las cápsulas están en el primer cajón.", de: "Nespresso: Wassertank hinten füllen, Hebel hoch, Kapsel einlegen, kleine Tasse drücken. Kapseln in der oberen Schublade." } },
          { key: "heating", icon: "🌡️", title: { en: "Heating", es: "Calefacción", de: "Heizung" }, body: { en: "The thermostat is in the hallway. Press + / − to set the temperature; please turn it down to 17 °C when you leave.", es: "El termostato está en el pasillo. Pulsa + / − para ajustar; bájalo a 17 °C al salir, por favor.", de: "Thermostat im Flur. Mit + / − einstellen; beim Verlassen bitte auf 17 °C stellen." } },
          { key: "rules", icon: "📋", title: { en: "House rules", es: "Normas de la casa", de: "Hausregeln" }, body: { en: "No smoking. Quiet hours 22:00–08:00. Max. 4 guests. Recycling bins are under the sink.", es: "No fumar. Silencio de 22:00 a 08:00. Máx. 4 huéspedes. El reciclaje está bajo el fregadero.", de: "Rauchen verboten. Ruhezeiten 22–8 Uhr. Max. 4 Gäste. Mülltrennung unter der Spüle." } },
          { key: "local", icon: "📍", title: { en: "Local tips", es: "Recomendaciones", de: "Tipps in der Nähe" }, body: { en: "Best breakfast: The Flour Pot (5 min walk). Supermarket: Co-op on Western Road, open until 22:00.", es: "Mejor desayuno: The Flour Pot (5 min a pie). Supermercado: Co-op en Western Road, abre hasta las 22:00.", de: "Bestes Frühstück: The Flour Pot (5 Min.). Supermarkt: Co-op, Western Road, bis 22 Uhr." } },
          { key: "checkout", icon: "👋", title: { en: "Check-out", es: "Salida", de: "Check-out" }, body: { en: "Check-out by 11:00. Leave the keys in the key box, start the dishwasher and close the windows. Safe travels!", es: "Salida antes de las 11:00. Deja las llaves en la caja, pon el lavavajillas y cierra las ventanas. ¡Buen viaje!", de: "Check-out bis 11 Uhr. Schlüssel in die Box, Spülmaschine starten, Fenster schließen. Gute Reise!" } }
        ]
      }],
      kits: [{ code: "KIT-DEMO", order_ref: "NFC-DEMO01", claimed_by: "host@demo.test", tag_count: 4 }],
      tags: [
        { code: "WIFI7Q", kit_code: "KIT-DEMO", property_id: pid, section_key: "wifi", label: "Plaque (Wi-Fi)" },
        { code: "COF3K9", kit_code: "KIT-DEMO", property_id: pid, section_key: "coffee", label: "Coffee machine" },
        { code: "HEA8M2", kit_code: "KIT-DEMO", property_id: pid, section_key: "heating", label: "Thermostat" },
        { code: "OUT5P4", kit_code: "KIT-DEMO", property_id: pid, section_key: "checkout", label: "Front door" }
      ],
      taps: (() => { const t = []; const codes = ["WIFI7Q", "WIFI7Q", "WIFI7Q", "COF3K9", "HEA8M2", "OUT5P4", "WIFI7Q", "COF3K9"]; for (let d = 0; d < 30; d++) codes.forEach((c, i) => { if ((d + i) % 3 !== 0) t.push({ tag_code: c, at: new Date(Date.now() - d * 864e5).toISOString() }); }); return t; })(),
      orders: [
        { ref: "NFC-7K2Q9M", created_at: new Date(Date.now() - 2 * 864e5).toISOString(), name: "Emma Clarke", email: "emma@example.co.uk", country: "UK", address: "12 Marine Parade, Brighton BN2 1TL", items: [{ id: "starter", qty: 1 }], finish: "Oak", total: 54, payment_method: "paypal", status: "paid" },
        { ref: "NFC-P3XW8D", created_at: new Date(Date.now() - 864e5).toISOString(), name: "Jonas Weber", email: "jonas@example.de", country: "EU", address: "Lindenstr. 4, 10969 Berlin", items: [{ id: "starter", qty: 2 }], finish: "Black acrylic", total: 96, payment_method: "transfer", status: "pending" }
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
      return p ? { property: p, section_key: tag.section_key } : null;
    }
    if (code === "demo") return { property: seed().properties[0], section_key: null }; // demo pública de la landing
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
      if (i >= 0) db.properties[i] = p; else db.properties.push({ ...p, id: "p-" + rand(6), owner: db.user, paid_until: new Date(Date.now() + 365 * 864e5).toISOString().slice(0, 10) });
      save(db); return p;
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
      if (!k) throw new Error("Kit code not found"); if (k.claimed_by && k.claimed_by !== db.user) throw new Error("This kit is already activated");
      k.claimed_by = db.user; save(db); return k;
    }
    const { data, error } = await sb.rpc("claim_kit", { p_kit: kitCode });
    if (error) throw error; return data;
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
    o.ref = "NFC-" + rand(6); o.status = "pending"; o.created_at = new Date().toISOString();
    if (DEMO) { const db = demoDb(); db.orders.push(o); save(db); return o; }
    const { error } = await sb.from("orders").insert(o);
    if (error) throw error; return o;
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
  async function setOrderStatus(ref, status) {
    if (DEMO) { const db = demoDb(); db.orders.find((o) => o.ref === ref).status = status; save(db); return; }
    const { error } = await sb.from("orders").update({ status }).eq("ref", ref);
    if (error) throw error;
  }
  async function createKit(orderRef, n) {
    const kit = { code: "KIT-" + rand(6), order_ref: orderRef || null, tag_count: n };
    const tags = Array.from({ length: n }, (_, i) => ({ code: rand(6), kit_code: kit.code, label: i === 0 ? "Plaque (Wi-Fi)" : "Sticker " + i, section_key: i === 0 ? "wifi" : null }));
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
    b.innerHTML = 'DEMO MODE — data is stored only in this browser. <a href="#" id="demo-reset">Reset demo</a>';
    document.body.prepend(b);
    b.querySelector("#demo-reset").onclick = (e) => { e.preventDefault(); resetDemo(); location.reload(); };
  }

  window.TS = { C, DEMO, $, $$, esc, money, slugify, rand, baseUrl, tagUrl, qrSvg, wifiString, demoBanner,
    currentUser, login, logout, getGuide, logTap, myProperties, saveProperty, myTags, updateTag, claimKit, tapStats,
    createOrder, isAdmin, listOrders, setOrderStatus, createKit, listKits, adminProperties, setPaidUntil, resetDemo };
})();
