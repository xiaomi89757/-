// PWA Service Worker v14 - Ultra Fast Offline & Global Cache
const CACHE_NAME = 'steel-plant-platform-v14';

// 涵盖所有可能用到的静态资源和外部库
const PRE_CACHE_URLS = [
  '/',
  '/index.html',
  '/index.tsx',
  '/manifest.json',
  '/images/home_bg.jpg',
  '/safety_procedures.json',
  '/safety_responsibilities.json',
  '/types.ts',
  '/constants.ts',
  'https://cdn.tailwindcss.com',
  'https://aistudiocdn.com/react@^19.2.0',
  'https://aistudiocdn.com/react-dom@^19.2.0/',
  'https://aistudiocdn.com/lucide-react@^0.555.0',
  'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Noto+Sans+SC:wght@400;700;900&display=swap',
  'https://cdn-icons-png.flaticon.com/512/2892/2892550.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[PWA] Precaching full assets...');
      return cache.addAll(PRE_CACHE_URLS);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((k) => k !== CACHE_NAME && caches.delete(k))
    ))
  );
  self.clients.claim();
});

// 策略：Stale-While-Revalidate (优先显示缓存，后台更新)
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith('http')) return;
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse.status === 200) {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cacheCopy));
        }
        return networkResponse;
      }).catch(() => null);

      return cachedResponse || fetchPromise;
    })
  );
});

// 推送逻辑
self.addEventListener('push', (event) => {
  const data = event.data ? event.data.json() : { title: '通知', body: '二炼钢平台有新更新' };
  const options = {
    body: data.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/2892/2892550.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2892/2892550.png',
    vibrate: [200, 100, 200],
    data: { url: data.url || '/' }
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});