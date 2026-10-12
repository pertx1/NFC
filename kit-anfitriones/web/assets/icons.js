/* Iconos propios: trazo único 1.75, rejilla 24. Uso: TSI.svg('wifi') */
(function () {
  const P = {
    wifi: '<path d="M2.5 9a14 14 0 0 1 19 0"/><path d="M5.5 12.3a9.5 9.5 0 0 1 13 0"/><path d="M8.6 15.6a5 5 0 0 1 6.8 0"/><circle cx="12" cy="19" r="1.1" fill="currentColor" stroke="none"/>',
    key: '<circle cx="8" cy="15" r="4.5"/><path d="M11.2 11.8 20 3"/><path d="m17 6 2.5 2.5"/><path d="m14.5 8.5 2 2"/>',
    coffee: '<path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 10.5h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3.5c0 1.2 1 1.3 1 2.5M12 3.5c0 1.2 1 1.3 1 2.5"/>',
    thermo: '<path d="M10 4.5a2 2 0 0 1 4 0v9.3a4 4 0 1 1-4 0z"/><path d="M12 9v7"/>',
    rules: '<rect x="5" y="3.5" width="14" height="17" rx="2.5"/><path d="M9 8.5h6M9 12h6M9 15.5h3.5"/>',
    pin: '<path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/>',
    door: '<path d="M6 21V4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21"/><path d="M3.5 21h17"/><circle cx="14.5" cy="12.5" r=".9" fill="currentColor" stroke="none"/>',
    wash: '<rect x="4.5" y="3" width="15" height="18" rx="2.5"/><circle cx="12" cy="13" r="4.2"/><path d="M8 6.5h2"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5.5"/><circle cx="12" cy="7.8" r="1" fill="currentColor" stroke="none"/>',
    car: '<path d="M5 16.5V12l1.8-4.6A2 2 0 0 1 8.7 6h6.6a2 2 0 0 1 1.9 1.4L19 12v4.5"/><path d="M4 16.5h16"/><path d="M6 16.5V19M18 16.5V19"/><circle cx="8" cy="13.5" r=".9" fill="currentColor" stroke="none"/><circle cx="16" cy="13.5" r=".9" fill="currentColor" stroke="none"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/>',
    trash: '<path d="M4.5 7h15"/><path d="M9.5 7V4.5h5V7"/><path d="M6.5 7l1 13h9l1-13"/><path d="M10.5 11v5.5M13.5 11v5.5"/>',
    kitchen: '<rect x="4" y="3.5" width="16" height="17" rx="2"/><path d="M4 9.5h16"/><circle cx="8" cy="6.5" r=".9" fill="currentColor" stroke="none"/><circle cx="12" cy="6.5" r=".9" fill="currentColor" stroke="none"/><rect x="7.5" y="12.5" width="9" height="5" rx="1"/>',
    tv: '<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8.5 20.5h7M12 17v3.5"/>',
    bed: '<path d="M3 18.5V7"/><path d="M3 14h18v4.5"/><path d="M21 14v-2.5A2.5 2.5 0 0 0 18.5 9H11v5"/><circle cx="7" cy="11" r="2"/>',
    phone: '<rect x="6.5" y="2.5" width="11" height="19" rx="2.5"/><path d="M10.5 18.5h3"/>',
    idcard: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><circle cx="8.5" cy="11" r="2.2"/><path d="M5.5 16c.6-1.5 1.7-2.2 3-2.2s2.4.7 3 2.2"/><path d="M14 10h4.5M14 13.5h3"/>',
    star: '<path d="m12 3.5 2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.8z"/>',
    pool: '<path d="M2.5 17c1.6 0 1.6 1.2 3.2 1.2S7.3 17 8.9 17s1.6 1.2 3.1 1.2 1.6-1.2 3.2-1.2 1.6 1.2 3.2 1.2 1.6-1.2 3.1-1.2"/><path d="M8 14V5.5a2 2 0 0 1 4 0M16 14V5.5a2 2 0 0 0-4 0"/><path d="M8 8.5h8M8 12h8"/>',
    plug: '<path d="M9 3v4.5M15 3v4.5"/><path d="M6.5 7.5h11V11a5.5 5.5 0 0 1-11 0z"/><path d="M12 16.5V21"/>',
    check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
    copy: '<rect x="8.5" y="8.5" width="12" height="12" rx="2.5"/><path d="M15.5 8.5V6a2.5 2.5 0 0 0-2.5-2.5H6A2.5 2.5 0 0 0 3.5 6v7A2.5 2.5 0 0 0 6 15.5h2.5"/>',
    qr: '<rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1"/><rect x="14" y="3.5" width="6.5" height="6.5" rx="1"/><rect x="3.5" y="14" width="6.5" height="6.5" rx="1"/><path d="M14 14h2.5v2.5H14zM18 18h2.5v2.5H18zM18 14h2.5M14 18v2.5"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
    globe: '<circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17"/><path d="M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5z"/>',
    chat: '<path d="M20.5 11.5a8 8 0 0 1-11.8 7L3.5 20l1.5-4.7a8 8 0 1 1 15.5-3.8z"/>',
    edit: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="m13.5 6.5 4 4"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    lock: '<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    truck: '<path d="M2.5 6.5h11v10h-11z"/><path d="M13.5 10h4.2l2.8 3.2v3.3h-7"/><circle cx="6.5" cy="17.5" r="1.8"/><circle cx="17" cy="17.5" r="1.8"/>',
    euro: '<path d="M17.5 6.3A7 7 0 1 0 17.5 17.7"/><path d="M4 10.5h9M4 13.5h9"/>',
    tag: '<path d="M3.5 12.3V4.5a1 1 0 0 1 1-1h7.8L21 12.2 12.2 21z"/><circle cx="8.3" cy="8.3" r="1.5"/>',
    home: '<path d="M3.5 11 12 4l8.5 7"/><path d="M6 9.5V20h12V9.5"/><path d="M10 20v-5.5h4V20"/>',
    plus: '<path d="M12 5v14M5 12h14"/>', minus: '<path d="M5 12h14"/>',
    up: '<path d="m6 14 6-6 6 6"/>', down: '<path d="m6 10 6 6 6-6"/>', x: '<path d="M6 6l12 12M18 6 6 18"/>',
    out: '<path d="M14.5 4.5h3A2.5 2.5 0 0 1 20 7v10a2.5 2.5 0 0 1-2.5 2.5h-3"/><path d="M10 16.5 5.5 12 10 7.5M5.5 12H15"/>',
    bizum: '<path d="M7 4.5h6.5a3.5 3.5 0 0 1 0 7H7z"/><path d="M7 11.5h7.5a4 4 0 0 1 0 8H7z"/>',
    bank: '<path d="M3 9.5 12 4l9 5.5"/><path d="M5 10v7M9.5 10v7M14.5 10v7M19 10v7"/><path d="M3 20h18"/>',
    card: '<rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M2.5 10h19M6 15h4"/>',
    mail: '<rect x="3" y="5.5" width="18" height="13" rx="2.5"/><path d="m4 7.5 8 6 8-6"/>',
    bell: '<path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2.2 2.2 0 0 0 4 0"/>',
    refresh: '<path d="M20 11.5A8 8 0 0 0 6.3 6.3L4 8.5"/><path d="M4 4v4.5h4.5"/><path d="M4 12.5a8 8 0 0 0 13.7 5.2L20 15.5"/><path d="M20 20v-4.5h-4.5"/>',
    box: '<path d="M3.5 7.5 12 3l8.5 4.5v9L12 21l-8.5-4.5z"/><path d="M3.5 7.5 12 12l8.5-4.5M12 12v9"/>'
  };
  // Iconos que el anfitrión puede elegir para sus secciones
  const SECTION_ICONS = ['key', 'idcard', 'wifi', 'coffee', 'kitchen', 'thermo', 'wash', 'tv', 'bed', 'pool', 'car', 'trash', 'rules', 'pin', 'sun', 'plug', 'door', 'phone', 'star', 'info'];
  function svg(name, cls = 'icon') {
    const d = P[name];
    if (!d) return '';
    return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  }
  // Icono de sección: clave de la librería, o texto antiguo (emoji) tal cual
  function sectionIcon(v, cls) { return P[v] ? svg(v, cls) : `<span class="${cls || 'icon'} legacy" aria-hidden="true">${String(v || '').replace(/[<>&"]/g, '')}</span>`; }
  // Logotipo: azulejo con la "onda" NFC
  const logo = `<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="1" y="1" width="38" height="38" rx="7" fill="#fff" stroke="#1f3f9e" stroke-width="2"/><rect x="5.5" y="5.5" width="29" height="29" rx="4" fill="none" stroke="#1f3f9e" stroke-width="1.2" stroke-dasharray="2 2.2"/><path d="M13.5 22a9 9 0 0 1 13 0M16.5 25.2a4.6 4.6 0 0 1 7 0" fill="none" stroke="#1f3f9e" stroke-width="2.4" stroke-linecap="round"/><circle cx="20" cy="28.6" r="1.7" fill="#e9b23a"/><path d="M20 9.5l1.2 2.6 2.8.4-2 2 .5 2.8L20 16l-2.5 1.3.5-2.8-2-2 2.8-.4z" fill="#1f3f9e"/></svg>`;
  window.TSI = { svg, sectionIcon, SECTION_ICONS, logo, names: Object.keys(P) };
})();
