const pkg = require('./package')
const myConfig = require('./config')

module.exports = {
  mode: 'universal',
  srcDir: 'client/',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0'},
      {hid: 'description', name: 'description', content: pkg.description}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: myConfig.clientBase + '/favicon.ico'}
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
  plugins: [
    {src: '@plugins/iview', ssr: true}
  ],

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
    host: myConfig.host,
    port: myConfig.port
  },

  router: {
    base: myConfig.clientBase
  },

  /*
  ** Axios module configuration
   */
  axios: {
    host: myConfig.host,
    port: myConfig.port,
    prefix: myConfig.serverBase,
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
