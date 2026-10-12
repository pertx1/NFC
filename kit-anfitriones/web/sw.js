/* Service worker de la app de pedidos: abre sin conexión y gestiona los avisos.
   Los datos (Supabase) nunca se guardan en caché: siempre se piden en directo. */
const CACHE = 'pedidos-v1';
const SHELL = ['pedidos.html', 'config.js', 'assets/style.css', 'assets/icons.js', 'assets/app.js', 'assets/app-icon-192.png', 'pedidos.webmanifest'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.hostname.endsWith('supabase.co')) return; // datos: siempre a la red
  // Red primero (para ver siempre la última versión); si no hay red, lo guardado
  e.respondWith(fetch(e.request).then((r) => { if (r.ok && (url.origin === location.origin || /cdn|fonts/.test(url.hostname))) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); } return r; }).catch(() => caches.match(e.request)));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const target = (e.notification.data && e.notification.data.url) || 'pedidos.html';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((cs) => {
    const c = cs.find((x) => x.url.includes('pedidos.html'));
    if (c) { c.navigate(target); return c.focus(); }
    return self.clients.openWindow(target);
  }));
});
