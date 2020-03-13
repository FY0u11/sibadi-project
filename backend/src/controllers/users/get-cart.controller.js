const getCart = require('../../services/users/get-cart.service')

module.exports = async ctx => {
  const { error, cart } = await getCart(ctx.user.id)
  error && ctx.throw(error)
  ctx.body = { data: { cart } }
}
