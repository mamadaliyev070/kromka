const CACHE_NAME = 'kromka-rack-v2';

// Barcha fayllar loyihaning o'zida — tashqi CDN yo'q.
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './lucide-mini.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png',
  './apple-touch-icon.png'
];

// O'rnatish: har bir faylni alohida keshlaymiz.
// Bitta fayl yuklanmasa ham, service worker baribir o'rnatiladi.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        CORE_ASSETS.map((url) =>
          cache.add(new Request(url, { cache: 'reload' })).catch((err) => {
            console.warn('[SW] Keshlab bo\'lmadi:', url, err);
          })
        )
      )
    ).then(() => self.skipWaiting())
  );
});

// Faollashtirish: eski kesh versiyalarini tozalash
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Faqat GET va http(s) so'rovlar
  if (request.method !== 'GET' || !request.url.startsWith('http')) return;

  // Navigatsiya (sahifa ochilishi): avval tarmoq, ishlamasa keshdagi index.html
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Qolgan fayllar: avval kesh, orqa fonda yangilash
  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request).then((response) => {
        if (response && response.status === 200 && response.type === 'basic') {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        }
        return response;
      }).catch(() => cached);

      return cached || networkFetch;
    })
  );
});
