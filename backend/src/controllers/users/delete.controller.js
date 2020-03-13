const HttpStatus = require('http-status-codes')

const deleteUser = require('../../services/users/delete.service')

module.exports = async (ctx, next) => {
  !ctx.parsed.id && (await next())
  if (!ctx.user.roles.includes('admin') && ctx.parsed.id !== ctx.user.id) {
    ctx.throw(HttpStatus.FORBIDDEN)
  }
  const { error, message } = await deleteUser(ctx.parsed.id)
  error && ctx.throw(error)
  message && ctx.throw(HttpStatus.BAD_REQUEST, message)
  ctx.status = HttpStatus.NO_CONTENT
}
