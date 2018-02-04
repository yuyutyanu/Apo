importScripts('/_nuxt/workbox.476439e0.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "apo",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.685c1987fda59f2e375c.js",
    "revision": "7716656dae077dc947373d1b70b1dbe7"
  },
  {
    "url": "/_nuxt/common.b0c7ee913b8d9de7e701.js",
    "revision": "f0c308851f08fa1cd0c7e081a17b9d0c"
  },
  {
    "url": "/_nuxt/layouts/default.5f044b48e87e8fea2614.js",
    "revision": "c06ab64c93eb86ba7a492c7095e71232"
  },
  {
    "url": "/_nuxt/manifest.874ef7c985e75255326e.js",
    "revision": "04743508d320818cfc1b3713ec4e8d3b"
  },
  {
    "url": "/_nuxt/pages/index.69132d9f6169531cfa2d.js",
    "revision": "c441ad8f54730a9c715e338e08421791"
  },
  {
    "url": "/_nuxt/pages/login/index.e78b0bbb9e7a677f468c.js",
    "revision": "66fe61b8916ab34e59b3aeca1c685318"
  },
  {
    "url": "/_nuxt/pages/request/index.2671445d15e0f9214c3e.js",
    "revision": "22773b6c2805bccb5c30603001b038af"
  },
  {
    "url": "/_nuxt/pages/timeline/index.4623038120cdbbbad220.js",
    "revision": "f4324034e98f6f071ffca30ba513015c"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

