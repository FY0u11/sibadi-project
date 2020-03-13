const Cart = require('../../models/Cart')

module.exports = async (productId, userId) => {
  try {
    let result = null
    if (productId) {
      result = await Cart.destroy({ where: { userId, productId } })
    } else {
      result = await Cart.destroy({ where: { userId } })
    }
    return !result
      ? { message: 'You do not have any products in the cart' }
      : { }
  } catch (error) {
    return { error }
  }
}
