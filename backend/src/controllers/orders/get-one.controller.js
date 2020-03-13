const HttpStatus = require('http-status-codes')
const getOrderById = require('../../services/orders/get-one.service')

module.exports = async (ctx, next) => {
  !ctx.parsed.id && (await next())
  const { error, order, message } = await getOrderById(ctx.parsed.id)
  error && ctx.throw(error)
  message && ctx.throw(HttpStatus.BAD_REQUEST, message)
  ctx.body = { data: { order } }
}
