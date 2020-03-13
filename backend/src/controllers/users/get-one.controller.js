const HttpStatus = require('http-status-codes')

const getUserById = require('../../services/users/get-one.service')

module.exports = async (ctx, next) => {
  !ctx.parsed.id && (await next())
  const { error, user, message } = await getUserById(ctx.parsed.id)
  error && ctx.throw(error)
  message && ctx.throw(HttpStatus.NOT_FOUND, message)
  ctx.body = { data: { user } }
}
