const HttpStatus = require('http-status-codes')

const clearCart = require('../../services/users/clear-cart.service')

module.exports = async ctx => {
  const { productId } = ctx.request.body
  if (productId) {
    if (typeof productId !== 'number' || productId < 1) {
      ctx.throw(HttpStatus.BAD_REQUEST, 'Wrong productId field')
    }
  }
  const { error, message } = await clearCart(productId, ctx.user.id)
  error && ctx.throw(error)
  message && ctx.throw(HttpStatus.BAD_REQUEST, message)
  ctx.status = HttpStatus.NO_CONTENT
}
