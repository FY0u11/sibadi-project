const Product = require('../../models/Product')

module.exports = async id => {
  try {
    const product = await Product.findByPk(id)
    return !product
      ? { message: 'There is no product with such id' }
      : { product }
  } catch (error) {
    return { error }
  }
}
