const path = require('path')

const router = require('../../routes')
const passport = require('../../services/users/login.service')
const send = require('koa-send')

const staticDir = path.resolve(__dirname, '../../../../public')

module.exports = app => {
  app.use(require('koa-helmet')())
  app.use(require('./ctx-config'))
  app.use(require('koa-bodyparser')())
  app.use(require('koa-static')(staticDir))
  app.use(require('./logging'))
  app.use(require('./error-handling'))
  app.use(require('./options'))
  app.use(require('./jwt-checker'))
  app.use(passport.initialize())
  app.use(router.routes())
  app.use(router.allowedMethods())
  app.use(async ctx => send(ctx, 'index.html', { root: staticDir }))
}
