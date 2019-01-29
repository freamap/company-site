const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#'
    },
    titleTemplate: '%s - freamap',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'freamapの企業サイトです。わたしたちは、”個人の時代”に生きる人々のワーク & ライフに貢献するデジタルテクノロジーが得意な会社です。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'freamap' },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://freamap.co.jp' },
      { hid: 'og:title', property: 'og:title', content: 'freamap' },
      { hid: 'og:description', property: 'og:description', content: 'freamapの企業サイトです。わたしたちは、”個人の時代”に生きる人々のワーク & ライフに貢献するデジタルテクノロジーが得意な会社です。' },
      { hid: 'og:image', property: 'og:image', content: 'https://freamap.co.jp/images/freamap-color.png' },
      { property: 'fb:app_id', content: '1233456789' },
      { property: 'article:publisher', content: 'https://www.facebook.com/freamap' },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@freamap' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src:'@/plugins/utils.js'},
    {src:'@/plugins/page.js'}
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['nuxt-sass-resources-loader', '@/assets/sass/variable.scss'],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  env: {
    apiBaseURLLocal: 'http://localhost:3000',
    apiBaseURL: process.env.BASE_URL || 'http://localhost:3000'
  },

  serverMiddleware: ['~/server/api'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
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
