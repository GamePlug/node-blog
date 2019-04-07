const pkg = require('./package')
const serverConfig = require('./server/config')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: serverConfig.clientBase + '/favicon.ico'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios', '@nuxtjs/markdownit'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  },

  server: {
    host: serverConfig.host,
    port: serverConfig.port
  },

  router: {
    base: serverConfig.clientBase
  },

  /*
  ** Axios module configuration
   */
  axios: {
    host: serverConfig.host,
    port: serverConfig.port,
    prefix: serverConfig.serverBase,
    proxy: true
  },

  /*
  ** Proxy module configurationxun
   */
  proxy: {
    '/leichao/**': 'http://ileichao.com',
    '/test/**': {
      target: 'http://localhost:80',
      changeOrigin: true,
      pathRewrite: {'^/test': ''}
    }
  },

  /*
  ** Markdownit module configuration
   */
  markdownit: {
    injected: true,
    highlight: function (str, lang) {
      const hljs = require('highlight.js')
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value
        } catch (__) {
        }
      }
      return ''
    }
  }

}
