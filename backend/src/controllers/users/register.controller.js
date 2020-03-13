const HttpStatus = require('http-status-codes')

const register = require('../../services/users/register.service')

module.exports = async ctx => {
  if (ctx.user) ctx.throw(HttpStatus.NOT_ACCEPTABLE, 'You already logged in')
  const { username, password, email, phone } = ctx.request.body
  if (!username || !email) ctx.throw(HttpStatus, 'Missing credentials')
  if (typeof username !== 'string' || typeof email !== 'string') {
    ctx.throw(HttpStatus.BAD_REQUEST, 'Wrong required field')
  }
  const { error, user, message } = await register(username, password, email, phone)
  if (error) {
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = {}
      for (const validationError of error.errors) {
        validationErrors[validationError.path] = validationError.message
      }
      ctx.throw(HttpStatus.UNAUTHORIZED, { message: { validationErrors } })
    }
    error && ctx.throw(error)
  }
  message && ctx.throw(HttpStatus.UNAUTHORIZED, message)
  const token = require('../../utils/create-jwt')(user)
  ctx.cookies.set('jwt', token, { maxAge: ctx.config.JWTAndCookiesMaxAge, httpOnly: false })
  ctx.status = HttpStatus.CREATED
  ctx.body = { data: { user } }
}
