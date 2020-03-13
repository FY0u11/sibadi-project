const HttpStatus = require('http-status-codes')
const updateOrder = require('../../services/orders/update.service')

module.exports = async (ctx, next) => {
  !ctx.parsed.id && (await next())
  const { status } = ctx.request.body
  const { error, message } = await updateOrder(status, ctx.parsed.id, ctx.user.id)
  if (error) {
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = {}
      for (const validationError of error.errors) {
        validationErrors[validationError.path] = validationError.message
      }
      ctx.throw(HttpStatus.BAD_REQUEST, { message: { validationErrors } })
    } else ctx.throw(error)
  }
  message && ctx.throw(HttpStatus.BAD_REQUEST, message)
  ctx.body = { message: 'Order status successfully changed' }
}
