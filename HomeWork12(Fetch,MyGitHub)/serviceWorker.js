let currentCacheName = 'myGitHub';

let filesToCache = [
    '/index.html',
    '/js/main/js',
    '/img/AjaxLoader.gif',
    '/css/style.css',
    '/css/reset.css'
];


self.addEventListener('install', function(e) {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(currentCacheName).then(function(cache) {
            console.log('[Service Worker] Caching all: app shell and content');
            return cache.addAll(filesToCache);
        })
            .catch(function(err){
                console.log(err)
            })
    );
});













self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // ресурс есть в кеше
                if (response) {
                    return response;
                }

                /* Важно: клонируем запрос. Запрос - это поток, может быть обработан только раз. Если мы хотим использовать объект request несколько раз, его нужно клонировать */
                var fetchRequest = event.request.clone();

                return fetch(fetchRequest).then(
                    function(response) {
                        // проверяем, что получен корректный ответ
                        if(!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        /* ВАЖНО: Клонируем ответ. Объект response также является потоком. */
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    }
                );
            })
    );
});