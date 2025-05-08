'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "164947ab9b8a8705a9f19458d23c2bb1",
"assets/AssetManifest.bin.json": "a0bb202c114dcd87108abd4818ffe6c9",
"assets/AssetManifest.json": "bbb21a43bc535d8077aab7adfe7d5201",
"assets/assets/lang/ar.json": "78a11862962604170ed0eb6cbad64e08",
"assets/assets/lang/en.json": "9ca07852c12cfe6ab67663d98384bf59",
"assets/assets/photos/bg1.jpeg": "14fa84c0af559bb68dfa869be605a6f4",
"assets/assets/photos/bg1.png": "42c85303c0fd797c84477a0675124c80",
"assets/assets/photos/bg2.jpeg": "a59523186c2c5c0417f341f40fb908cb",
"assets/assets/photos/bg2.png": "f6d855b6ad1f6ac257b863b60ab7f8fb",
"assets/assets/photos/bg3.jpeg": "8e99d59f1714d22ff1819eaf01e085de",
"assets/assets/photos/bg3.png": "86471edc2410cd13e26c97f0eee443a5",
"assets/assets/photos/bg4.jpg": "8a4d0e1538434e1e13760012d3671dbd",
"assets/assets/photos/bg5.jpg": "1777b979ac4a9e568b543f97e8b9399a",
"assets/assets/photos/bg6.jpeg": "d814ccc74c7ffe824f76149b418cae4b",
"assets/assets/photos/bg6.jpg": "4f9d5593d1eb866b0f5d58c305ce4f99",
"assets/assets/photos/c1.png": "6ee3032e39d824a037a9d0797d92e67c",
"assets/assets/photos/c10.png": "9abbee6abbefc3fde56eb767ba1bda76",
"assets/assets/photos/c11.png": "87cec8bf727332419a170d25946fb4fe",
"assets/assets/photos/c12.png": "486ab188cfbd51cdce0eb11c470febbb",
"assets/assets/photos/c13.png": "8f6bf9f04addaf77a18de01c1b975efc",
"assets/assets/photos/c14.png": "3a080738927ef85070a3b24fa7cabf53",
"assets/assets/photos/c15.jpg": "593e5547d995ae3da267ba899450a6aa",
"assets/assets/photos/c16.jpg": "913fb31a8d494e0955bda3f7acc6e174",
"assets/assets/photos/c2.png": "3c8c1c449923acfda8244b3849c979da",
"assets/assets/photos/c3.png": "0be28dc5f9ac54af155b46e819a0dfa3",
"assets/assets/photos/c4.png": "bd65a96b318368dbbca9c15abfb71705",
"assets/assets/photos/c5.jpg": "a1cf35c1e6b38e1f8b775d54258de788",
"assets/assets/photos/c6.png": "53fb593710ca348b2353f1e795af28ad",
"assets/assets/photos/c7.png": "4f70eaff33cb6aee0f25ec587ce522b0",
"assets/assets/photos/c8.png": "2f20c634324a40ad24defbf5fe27c8ad",
"assets/assets/photos/c9.png": "acce65db3023260800b6b4edeacea664",
"assets/assets/photos/features1.jpeg": "3c5fd73b367f789f3be60e2519b26704",
"assets/assets/photos/features1.jpg": "a4385278a6ee393a7a8930093937141f",
"assets/assets/photos/features2.jpeg": "d36bd112da13c62d62bed66fe53ca669",
"assets/assets/photos/features2.jpg": "133ed1a23aec27f16f0137f33dcbfb88",
"assets/assets/photos/features3.jpeg": "31274e3117af0ec9e5e71832fd117165",
"assets/assets/photos/features3.jpg": "790e40e25d875e1f283f49fab3c635b8",
"assets/assets/photos/heresat.png": "8983fff1bf9608c8ba34270b81cf7a0c",
"assets/assets/photos/integrety.png": "313f546f69711d5a2cb9feaf82632f46",
"assets/assets/photos/logo.png": "dc533c560a371d914cec050cac96786c",
"assets/assets/photos/prof.png": "419b18738a6fe8d0dea3e613d5061c13",
"assets/assets/photos/quality.png": "e8497493a567e88ace7e1c40429e9d42",
"assets/assets/photos/stat_bg.jpg": "875cc448491380af1dd89ad2a468499d",
"assets/data.json": "7859578d1ce02f08b34912acb872c6e6",
"assets/FontManifest.json": "c3b77572ef30a9bbc6e14cac2268d76e",
"assets/fonts/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/fonts/MaterialIcons-Regular.otf": "4abf69eb5cf9e47bb4f2616a8d7f1a1a",
"assets/NOTICES": "ad0d53eacf8aab2ca3c37ce8b9d554e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "5f72d664707e4d711a1c0c240912cd50",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "bbc3a2d2265f7ff6bef4ba339a0ba4c9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dbf0a93d2b23d99b7af4b1a6ab94e122",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4bc7849a5c7774cfa18e4bc2ef82404a",
"assets/packages/youtube_player_iframe/assets/player.html": "ea69af402f26127fa4991b611d4f2596",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "152173176d8f93078c00c7cac2fbcdbd",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "67afcef492c3ddab95ed9b4cfbef628d",
"icons/Icon-192.png": "9bb411d2c951094424719de4b98a3bde",
"icons/Icon-512.png": "9bb411d2c951094424719de4b98a3bde",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "694488affd4c5e39d47e7bd89521e700",
"/": "694488affd4c5e39d47e7bd89521e700",
"main.dart.js": "66f9f4e6d306cff480e140b02134d9d5",
"manifest.json": "dab260d4b316f06071e75c71f06e1bcf",
"version.json": "a29e8b22a08aa0274b027931eec216c4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
