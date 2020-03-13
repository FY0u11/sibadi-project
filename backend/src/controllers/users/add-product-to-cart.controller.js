const HttpStatus = require('http-status-codes')
const addProductToCart = require('../../services/users/add-product-to-cart.service')

module.exports = async ctx => {
  const { productId } = ctx.request.body
  !productId && ctx.throw(HttpStatus.BAD_REQUEST, 'Missing productId field')
  if (typeof productId !== 'number' || productId < 1) {
    ctx.throw(HttpStatus.BAD_REQUEST, 'Wrong productId field')
  }
  const { error, message } = await addProductToCart(productId, ctx.user.id)
  error && ctx.throw(error)
  message && ctx.throw(HttpStatus.BAD_REQUEST, message)
  ctx.body = { message: 'The product successfully added to your cart' }
}
