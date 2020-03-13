const Cart = require('../../models/Cart')
const Product = require('../../models/Product')

module.exports = async (productId, userId) => {
  try {
    const record = await Cart.findOne({ where: { userId, productId } })
    if (record) return { message: 'There is already such product in your cart' }
    const product = await Product.findByPk(productId)
    return !product
      ? { message: 'There is no product with such id' }
      : { result: await Cart.create({ userId, productId }) }
  } catch (error) {
    return { error }
  }
}
