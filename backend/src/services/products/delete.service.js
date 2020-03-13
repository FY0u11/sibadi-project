const Product = require('../../models/Product')

module.exports = async id => {
  try {
    const product = await Product.findByPk(id, { attributes: ['imagePath'] })
    if (!product) {
      return { message: 'There is no product with such id!' }
    }
    await Product.destroy({ where: { id } })
    return { result: { oldImagePath: product.imagePath } }
  } catch (error) {
    return { error }
  }
}
