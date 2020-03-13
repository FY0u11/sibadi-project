const Product = require('../../models/Product')

module.exports = async () => {
  try {
    const products = await Product.findAll()
    return { products }
  } catch (error) {
    return { error }
  }
}
