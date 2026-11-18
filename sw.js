/* Liga Lupinos · service worker mínimo.
   Solo existe para que la web se pueda instalar como app. No guarda nada en caché:
   todo se pide siempre a internet, así nunca se ve una versión vieja. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
    + '<title>Liga Lupinos</title><body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;'
    + 'background:#0b1f14;color:#fff;font-family:system-ui,sans-serif;text-align:center;padding:24px">'
    + '<div><div style="font-size:48px">📡</div><h1 style="font-size:22px">Sin conexión</h1>'
    + '<p style="color:#9db5a5">La Liga Lupinos necesita internet. Vuelve a intentarlo en un momento.</p>'
    + '<button onclick="location.reload()" style="background:#f2c230;border:0;border-radius:12px;padding:12px 20px;font-weight:700;font-size:16px">Reintentar</button></div>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
