
// PWA Service Worker
// Updated to v9 to force cache refresh for animation speed changes
const CACHE_NAME = 'steel-plant-platform-v9';

// 核心静态资源（图标、清单等）
const PROD_URLS = [
  '/manifest.json',
  'https://cdn.tailwindcss.com', // 缓存外部库
  'https://cdn-icons-png.flaticon.com/512/2892/2892550.png',
  '/images/home_bg.jpg' // Added critical background image
];

// 安装阶段：缓存核心文件
self.addEventListener('install', (event) => {
  self.skipWaiting(); // 强制立即接管
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('Opened cache');
      // 尝试缓存核心文件，如果失败也不阻止安装（防止外部CDN挂掉导致安装失败）
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
  self.clients.claim(); // 立即控制所有页面
});

// 拦截网络请求：网络优先 -> 成功后存缓存 -> 失败则读缓存
self.addEventListener('fetch', (event) => {
  // 过滤掉非 HTTP/HTTPS 请求 (如 chrome-extension://)
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // 对于 API 请求或外部链接，使用网络优先策略
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // 1. 如果网络请求成功，克隆一份响应放入缓存
        if (!response || response.status !== 200 || response.type !== 'basic') {
          // 跨域资源(type!=basic)也可以缓存，但需要谨慎，这里简单处理允许缓存
          // 如果只是单纯展示，直接返回即可
        }

        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then((cache) => {
          // 异步缓存，不阻塞响应返回
          try {
            cache.put(event.request, responseToCache);
          } catch (err) {
            // 某些请求（如POST）无法缓存，忽略错误
          }
        });

        return response;
      })
      .catch(() => {
        // 2. 如果网络请求失败（离线），尝试从缓存读取
        return caches.match(event.request);
      })
  );
});
