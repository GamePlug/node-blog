const Koa = require('koa')
let config = require('./config')

const app = new Koa()
const dev = !(app.env === 'production')

config = Object.assign(
  config,
  dev ? config.development : config.production
)
// 去掉base末尾的斜杠,使用正则/\/+$/或/\/\/*$/均可
config.serverBase = config.serverBase.replace(/\/+$/, '')
config.clientBase = config.clientBase.replace(/\/+$/, '')

module.exports = config
