module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'apo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: ['@nuxtjs/pwa'],
  manifest: {
    name: 'Apo',
    short_name: 'Apo',
    title: 'Apo',
    lang:'jp',
    icons: [
      {
        "src": "/images/box-sample.png",
        "type": "image/png",
        "sizes": "48x48"
      },
      {
        "src": "/images/box-sample.png",
        "type": "image/png",
        "sizes": "96x96"
      },
      {
        "src": "/images/box-sample.png",
        "type": "image/png",
        "sizes": "144x144"
      },
      {
        "src": "/images/box-sample.png",
        "type": "image/png",
        "sizes": "192x192"
      }
    ],
    start_url: "/",
    display: "standalone"
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
