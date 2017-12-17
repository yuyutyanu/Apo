importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "apo",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.ac54067dfce390c2345b.js",
    "revision": "156307040705f9be6fdec7e9fb60da6b"
  },
  {
    "url": "/_nuxt/common.b0c7ee913b8d9de7e701.js",
    "revision": "f0c308851f08fa1cd0c7e081a17b9d0c"
  },
  {
    "url": "/_nuxt/layouts/default.91dcf4527c84af434d7e.js",
    "revision": "915348b4b37fd1fffe09e954590f1aef"
  },
  {
    "url": "/_nuxt/manifest.46ec423c40fd340bb7b2.js",
    "revision": "618ea28c41f528a094f0de590ed525ba"
  },
  {
    "url": "/_nuxt/pages/FriendRequest/index.8e20b2e14845eaaddd36.js",
    "revision": "e213370ba1fb89306515f70ad9888dc7"
  },
  {
    "url": "/_nuxt/pages/index.b3e7f77bc0ef0e14f793.js",
    "revision": "e5d46bc8b4c6a8a04e2139f593b47684"
  },
  {
    "url": "/_nuxt/pages/Login/index.c88609f78d2c9138acc4.js",
    "revision": "dc421f160db116514b3bbe3d596f8ba8"
  },
  {
    "url": "/_nuxt/pages/Timeline/index.1a71cade2f7d1cbb4a3e.js",
    "revision": "fdded39405b11a38dbaab7ffd7081533"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

