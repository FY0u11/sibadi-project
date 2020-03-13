const passport = require('../../services/users/login.service')
const HttpStatus = require('http-status-codes')
/*
  Backend always checks for a valid JWT token to proceed in further actions.
  If user doesn't provide a token, any request will be rejected with status code 401 (Unauthorized)

  It's not happen only when user tries to authorize and sends POST request either to the
  /api/v1/users/login or /api/v1/users/register end points
*/
module.exports = async (ctx, next) => {
  if (/^\/api\/v1\//.test(ctx.request.url)) {
    await passport.authenticate('jwt', async (error, user, info) => {
      error && ctx.throw(error)
      if (!user) {
        if (
          (ctx.url !== '/api/v1/users/login' && ctx.url !== '/api/v1/users/register') ||
          ctx.method !== 'POST'
        ) {
          ctx.throw(HttpStatus.UNAUTHORIZED, info.message)
        }
      }
      ctx.user = user
      await next()
    })(ctx, next)
  } else await next()
}
