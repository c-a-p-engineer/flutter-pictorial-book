'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "85929b5d65143ef31e1f494652e4842a",
"assets/assets/animal/images/cat.png": "b151bedc0ce28058dbdf2b09cc120a55",
"assets/assets/animal/images/chick.png": "c11ed9264b6a90dccdc11b696700e832",
"assets/assets/animal/images/chicken.png": "c989067b9540717fff9ca4106e9e96e8",
"assets/assets/animal/images/cow.png": "f02813582165b6894a6c27debac31bc5",
"assets/assets/animal/images/crow.png": "cd899ae2614a00cbf3b6e78077442ed3",
"assets/assets/animal/images/dog.png": "6c547c6a97afb9c9fbd85849080fe67d",
"assets/assets/animal/images/fox.png": "35058dee116bcdc6c845a9dce07399a3",
"assets/assets/animal/images/frog.png": "5e78d7b6f8b1beda38671b4759e9bfc4",
"assets/assets/animal/images/monkey.png": "e4b7b2114607ac69e48a1f6eb222c8e3",
"assets/assets/animal/images/penguin.png": "04e18e6d4f00ba572b178123cf6a7234",
"assets/assets/animal/images/pig.png": "a75e11cd898cdd72b9ad2bde59e87aa4",
"assets/assets/animal/images/pigeon.png": "12931164c9227dc8e16fffa7ac18ce83",
"assets/assets/animal/images/snake.png": "46e7811e37ee5c7ec1f049d4d0b5f904",
"assets/assets/animal/images/sparrow.png": "39fb1dd98f6d1f874899b3c7f1a45ac4",
"assets/assets/animal/voices/cat.mp3": "ca5970a57554542138593fb4bdeed23b",
"assets/assets/animal/voices/chick.mp3": "33b2298f4a9105d5ec4354be3769fa71",
"assets/assets/animal/voices/chicken.mp3": "bb5c01a2f43943c3ac0aabbc1eda1bee",
"assets/assets/animal/voices/cow.mp3": "73d8408975341f5cedd557c1432a5327",
"assets/assets/animal/voices/crow.mp3": "2d3becebbcdb3b8414e61bed0664c669",
"assets/assets/animal/voices/dog.mp3": "8a016f4931e36925bf975f10f3187c92",
"assets/assets/animal/voices/fox.mp3": "c59297437fde8beec544dc6dac0bbd08",
"assets/assets/animal/voices/frog.mp3": "0277bee99f4ea7851a4745fede8abdd1",
"assets/assets/animal/voices/monkey.mp3": "359088cbe63943b0d909a4f4076eea6a",
"assets/assets/animal/voices/penguin.mp3": "7c18340187c91aafc6c1c7e3c381e5a5",
"assets/assets/animal/voices/pig.mp3": "5db0b2c4c9cb790dda13989dd0383f15",
"assets/assets/animal/voices/pigeon.mp3": "7ad4d9c93c129de4ab6600f03e59c8f7",
"assets/assets/animal/voices/snake.mp3": "21ad637e1c73eeb9dcaaf777896d2af1",
"assets/assets/animal/voices/sparrow.mp3": "828fd852885fa912b193c1f91bcb1122",
"assets/assets/foods/images/burger.png": "e0578c4fb87161d5950f3d5991be12b8",
"assets/assets/foods/images/chocolate.png": "aa0b58ac8fc4beb53662c3bc5643d01f",
"assets/assets/foods/images/cookie.png": "89bb017e8a623f7d44dd891743b80e66",
"assets/assets/foods/images/cotton_candy.png": "50157b7d99c7e92bda96fb4ca31ea423",
"assets/assets/foods/images/dumpling.png": "bf074cfc104e69b7c6293ae71defe4f6",
"assets/assets/foods/images/hotdog.png": "8b634dde24b5e7ba7241fb3194586cf6",
"assets/assets/foods/images/ice_cream.png": "e75df776f0a890012f5e60cf8eb43824",
"assets/assets/foods/images/lingering_candy.png": "8280798014adb2201b1dd5d1876d5824",
"assets/assets/foods/images/macaron.png": "3a3df9c9ed1aff12587d1fa891c50cb9",
"assets/assets/foods/images/pancake.png": "c8d82070a0c41a4e125900e30a292cd8",
"assets/assets/foods/images/popcorn.png": "9cb6d82fbf84c72596279c24fa651935",
"assets/assets/foods/images/ramen.png": "addd47f7e30d423064be3b3eb0c6ecd4",
"assets/assets/foods/images/rice_ball.png": "a7e7f0554c092717c6ac25e0734dd6e7",
"assets/assets/foods/images/rice_cracker.png": "1aaa055e5afce3edefeb98a3ab0a3834",
"assets/assets/foods/images/sandwich.png": "d3799ccb8f8f35a628ec1c7719a1ce29",
"assets/assets/foods/images/shortcake.png": "fff86cfd5c32c088d73d3c499aae381c",
"assets/assets/foods/images/sushi.png": "8915d8e193b9c392a5ebfd715b2fbed9",
"assets/assets/foods/images/taiyaki.png": "31597e3bdb65d146ca3d8167df1ab6bf",
"assets/assets/foods/voices/burger.mp3": "ea646dda35f6100838c30aa1b99aa741",
"assets/assets/foods/voices/chocolate.mp3": "43b512f104c6d89ce211e3e796f17d6b",
"assets/assets/foods/voices/cookie.mp3": "044135cb20557039a6ec0e7424c3ce87",
"assets/assets/foods/voices/cotton_candy.mp3": "491893f632cb9cc457f455d74d994682",
"assets/assets/foods/voices/donuts.mp3": "b01449ba052ae654b76d254c40e5171e",
"assets/assets/foods/voices/hotdog.mp3": "31b8120a759eba068ad0d40a1ac5a441",
"assets/assets/foods/voices/ice_cream.mp3": "07ca06f6d33b8ceaf3ca77d9b0ea23ba",
"assets/assets/foods/voices/lingering_candy.mp3": "d9b228de5221c4a9cfaad28d27c4274d",
"assets/assets/foods/voices/macaron.mp3": "8edc6b773dc10a458ea61db3ca9139f0",
"assets/assets/foods/voices/pancake.mp3": "9d60c440277a6de2dd8837bdb732f97b",
"assets/assets/foods/voices/popcorn.mp3": "5d3552f08c652f0845c048b92555811a",
"assets/assets/foods/voices/ramen.mp3": "f1480de83bd0d7c9742dece7ec7a59f8",
"assets/assets/foods/voices/rice_ball.mp3": "9421cf5e983426b17710c446902f72dc",
"assets/assets/foods/voices/rice_cracker.mp3": "e9ab534d9148d7cdaf2eb92fc8c06f0f",
"assets/assets/foods/voices/sandwich.mp3": "a7da004b4fa37f3b69693ca8a1d19245",
"assets/assets/foods/voices/shortcake.mp3": "0f5df300088a906d50329e958983074d",
"assets/assets/foods/voices/sushi.mp3": "9a987fdcef79e42827ff01a9d86f56a0",
"assets/assets/foods/voices/taiyaki.mp3": "eff316b01756cae04935c167a952f42d",
"assets/assets/vehicle/images/ambulance.png": "e7bae56328a3ed73312446c8e1467916",
"assets/assets/vehicle/images/bullet_train.png": "8154d2c1e70c4ad738dea1dbca325ea6",
"assets/assets/vehicle/images/bus.png": "7a5552288011e973ac8ba02eb0a497be",
"assets/assets/vehicle/images/fire_engine.png": "d0d1c095d85d7dd32ee5ec0885de14a3",
"assets/assets/vehicle/images/helicopter.png": "8a06f0602e1ade22acede494049ef9e4",
"assets/assets/vehicle/images/plane.png": "6d008057731f6b8024662e92ba762855",
"assets/assets/vehicle/images/police_car.png": "7af04255917c47fd4c1165fc41dcfae4",
"assets/assets/vehicle/images/train.png": "df3a3def7cb31f353f5eb22b0ab45dbf",
"assets/assets/vehicle/voices/ambulance.mp3": "07b7d84caf22545bf968768270d034c8",
"assets/assets/vehicle/voices/bullet_train.mp3": "a327dae11d55588c6e3711c1f9e75fc3",
"assets/assets/vehicle/voices/bus.mp3": "6693bb935c4dfd728c00442bf251cd61",
"assets/assets/vehicle/voices/fire_engine.mp3": "eb17137012d190701c07693adde729ef",
"assets/assets/vehicle/voices/helicopter.mp3": "1a2ba1a9f9fd578a661a50388cd83d6a",
"assets/assets/vehicle/voices/plane.mp3": "3ebc0228bec16dceaf7296ffae008c87",
"assets/assets/vehicle/voices/police_car.mp3": "83e2e7468dbef52f17f235e98982e41d",
"assets/assets/vehicle/voices/train.mp3": "e102d30482797699989f3edac6b51529",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "ba5d56d4e2fb6d88cef82618f93e85ba",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "a31d6bbe7226cebbe63104134562aab1",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "274cff1a9342e523f581741d739e9f81",
"/": "274cff1a9342e523f581741d739e9f81",
"main.dart.js": "af80358a7b83d4d6a58d626f96c4b2fb",
"manifest.json": "cc42777e8e7075a79d6f4d774290d49b",
"version.json": "64e9da82f2caa68862eb002596e4462d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
