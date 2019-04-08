const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const serverConfig = require('./config')

const app = new Koa()

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Error catch
  app.use(async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500
      ctx.body = err.stack
      console.log(err.stack)
    }
  })

  // Dispatch koa and nuxt
  app.use(async (ctx, next) => {
    if (ctx.request.url.startsWith(serverConfig.serverBase)) {
      await next()
    } else {
      ctx.status = 200
      ctx.respond = false // Bypass Koa's built-in response handling
      ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      nuxt.render(ctx.req, ctx.res)
    }
  })

  // Add bodyparser
  app.use(bodyparser({enableTypes: ['json', 'form', 'text']}))

  // Add routes
  const routes = require('./routes')
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]
    route.prefix(serverConfig.serverBase)
    app.use(route.routes())
  }

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}${serverConfig.clientBase}`,
    badge: true
  })
}

start()
