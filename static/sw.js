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
    "url": "/_nuxt/manifest.8c3fe2c7a984483b1dbe.js",
    "revision": "ff4ab2f658d3b7c989bfb60b02290f76"
  },
  {
    "url": "/_nuxt/pages/FriendRequest/index.8e20b2e14845eaaddd36.js",
    "revision": "e213370ba1fb89306515f70ad9888dc7"
  },
  {
    "url": "/_nuxt/pages/index.3152a8702299e702ee9e.js",
    "revision": "787caaa75d48959d539a4fa794a1fa61"
  },
  {
    "url": "/_nuxt/pages/Login/index.4791713f84209ea5e6bf.js",
    "revision": "ce66dd86bd893b9d836f7c15d5b0b265"
  },
  {
    "url": "/_nuxt/pages/Timeline/index.1a71cade2f7d1cbb4a3e.js",
    "revision": "fdded39405b11a38dbaab7ffd7081533"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

