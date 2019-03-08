let currentCacheName = 'myGitHub';

let filesToCache = [
    '/index.html',
    '/js/main/js',
    '/img/AjaxLoader.gif',
    '/css/style.css',
    '/css/reset.css'
];

self.addEventListener('install', function(event) {
    event.waitUntill(
        caches.open(currentCacheName)
            .then(function (cache) {
                return cache.addAll(filesToCache)
            })
    );
});