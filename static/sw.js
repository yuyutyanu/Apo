importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "apo",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.26a50d4fa5e9fd626ce1.js",
    "revision": "17f70cd5f8f5a7d3c7dbe76d1f1f0dff"
  },
  {
    "url": "/_nuxt/common.018e387cb9e6a04740e4.js",
    "revision": "087213d0b678c16f2d4cad02ee6ff281"
  },
  {
    "url": "/_nuxt/layouts/default.91dcf4527c84af434d7e.js",
    "revision": "915348b4b37fd1fffe09e954590f1aef"
  },
  {
    "url": "/_nuxt/manifest.4a259f7195b7841f1443.js",
    "revision": "8f697e82be3741a6e5a1b7c1055d233d"
  },
  {
    "url": "/_nuxt/pages/FriendRequest/index.8e20b2e14845eaaddd36.js",
    "revision": "e213370ba1fb89306515f70ad9888dc7"
  },
  {
    "url": "/_nuxt/pages/index.9cd9a8f29fa9a440562d.js",
    "revision": "78353262226418d239ec09a265e3fdad"
  },
  {
    "url": "/_nuxt/pages/Login/index.4791713f84209ea5e6bf.js",
    "revision": "ce66dd86bd893b9d836f7c15d5b0b265"
  },
  {
    "url": "/_nuxt/pages/Timeline/index.85935adea717681dd226.js",
    "revision": "fb30a59636783112c55b77f9803f257b"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

