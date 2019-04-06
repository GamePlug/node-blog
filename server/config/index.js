const Koa = require('koa')
let config = require('./config')

const app = new Koa()
const dev = !(app.env === 'production')

config = Object.assign(
  config,
  dev ? config.development : config.production
)

module.exports = config
