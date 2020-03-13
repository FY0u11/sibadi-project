const HttpStatus = require('http-status-codes')

const passport = require('../../services/users/login.service')

module.exports = async ctx => {
  if (ctx.user) ctx.throw(HttpStatus.NOT_ACCEPTABLE, 'You already logged in')
  await passport.authenticate('local', (error, user, info) => {
    error && ctx.throw(error)
    info && ctx.throw(HttpStatus.UNAUTHORIZED, info.message)
    const token = require('../../utils/create-jwt')(user)
    ctx.cookies.set('jwt', token, { maxAge: ctx.config.JWTAndCookiesMaxAge, httpOnly: false })
    ctx.body = { data: { user } }
  })(ctx)
}
