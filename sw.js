
// PWA Service Worker v19 - Optimized for Install Success
const CACHE_NAME = 'steel-plant-platform-v19';

// 仅缓存浏览器可直接解析的静态资源。严禁包含 .tsx, .ts 等源码文件。
const PRE_CACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/home_bg.jpg',
  'https://cdn.tailwindcss.com',
  'https://aistudiocdn.com/react@^19.2.0',
  'https://aistudiocdn.com/react-dom@^19.2.0/',
  'https://aistudiocdn.com/lucide-react@^0.555.0',
  'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Noto+Sans+SC:wght@400;700;900&display=swap',
  'https://cdn-icons-png.flaticon.com/512/11689/11689178.png'
];

self.addEventListener('install', (event) => {
  // 强制立即接管，不等待旧版 SW 退出
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[PWA] Starting precise precaching...');
      // 逐个添加以防某一个文件失败导致全部失败
      return Promise.allSettled(
        PRE_CACHE_URLS.map(url => cache.add(url))
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.map((k) => {
        if (k !== CACHE_NAME) {
          console.log('[PWA] Deleting old cache:', k);
          return caches.delete(k);
        }
      })
    ))
  );
  self.clients.claim();
});

// 策略：Stale-While-Revalidate (先从缓存取，同时后台更新)
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith('http')) return;
  
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cacheCopy));
        }
        return networkResponse;
      }).catch(() => null);

      return cachedResponse || fetchPromise;
    })
  );
});

// 处理推送通知
self.addEventListener('push', (event) => {
  let data = { title: '通知', body: '二炼钢平台有新内容' };
  try {
    data = event.data ? event.data.json() : data;
  } catch(e) {}
  
  const options = {
    body: data.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/11689/11689178.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/11689/11689178.png',
    vibrate: [100, 50, 100],
    data: { url: data.url || '/' }
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});
