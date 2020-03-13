const Product = require('../../models/Product')

module.exports = async ({ id, name, description, price, imagePath }) => {
  try {
    let oldImagePath = null
    const product = await Product.findByPk(id, { attributes: ['imagePath'] })
    if (!product) {
      return { message: 'There is no product with such id' }
    }
    if (imagePath) oldImagePath = product.imagePath
    const isNameExists = await Product.findOne({ where: { name } })
    if (isNameExists) {
      return { message: 'The product name already exists' }
    }
    const result = await Product.update({ name, description, price, imagePath }, { where: { id } })
    if (result[0]) result.oldImagePath = oldImagePath
    return { result }
  } catch (error) {
    return { error }
  }
}
