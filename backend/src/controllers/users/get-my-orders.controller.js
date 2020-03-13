const HttpStatus = require('http-status-codes')

const getMyOrders = require('../../services/users/get-my-orders.service')

module.exports = async (ctx, next) => {
  !ctx.parsed.id && (await next())
  if (!ctx.user.roles.includes('admin') && ctx.parsed.id !== ctx.user.id) {
    ctx.throw(HttpStatus.FORBIDDEN)
  }
  const { error, orders, message } = await getMyOrders(ctx.parsed.id, ctx.user.roles)
  error && ctx.throw(error)
  message && ctx.throw(HttpStatus.BAD_REQUEST, message)
  ctx.body = { data: { orders } }
}
