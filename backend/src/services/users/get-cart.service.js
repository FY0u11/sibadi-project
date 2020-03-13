const Cart = require('../../models/Cart')

module.exports = async id => {
  try {
    const cart = await Cart.findAll({ where: { userId: id } })
    const productsIds = cart.map(field => field.productId)
    return { cart: productsIds }
  } catch (error) {
    return { error }
  }
}
