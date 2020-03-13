const HttpStatus = require('http-status-codes')
const createOrder = require('../../services/orders/create.service')

module.exports = async ctx => {
  !ctx.user.roles.includes('client') && ctx.throw(HttpStatus.FORBIDDEN)
  const { error, result, message } = await createOrder(ctx.user.id)
  if (error) {
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = {}
      for (const validationError of error.errors) {
        validationErrors[validationError.path] = validationError.message
      }
      ctx.throw(HttpStatus.BAD_REQUEST, { message: { validationErrors } })
    }
    error && ctx.throw(error)
  }
  message && ctx.throw(HttpStatus.BAD_REQUEST, message)
  ctx.status = HttpStatus.CREATED
  ctx.body = { data: { order: result.order, newBudget: result.newBudget } }
}
