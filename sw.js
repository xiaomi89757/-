
// PWA Service Worker
// Updated to v10 to force cache refresh for animation and typography changes
const CACHE_NAME = 'steel-plant-platform-v10';

// 核心静态资源（图标、清单等）
const PROD_URLS = [
  '/manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdn-icons-png.flaticon.com/512/2892/2892550.png',
  '/images/home_bg.jpg'
];

// 安装阶段：缓存核心文件
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      return cache.addAll(PROD_URLS).catch(err => {
        console.warn('部分资源缓存失败:', err);
      });
    })
  );
});

// 激活阶段：清理旧缓存
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 拦截网络请求
self.addEventListener('fetch', (event) => {
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          try {
            cache.put(event.request, responseToCache);
          } catch (err) {}
        });
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
