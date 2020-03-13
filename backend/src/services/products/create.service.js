const Product = require('../../models/Product')

module.exports = async ({ name, description, price, imagePath }) => {
  try {
    if (!name || !description || !price) {
      return { message: 'Missing required fields' }
    }
    const isNameExists = await Product.findOne({ where: { name } })
    return isNameExists
      ? { message: 'The product name already exists' }
      : { product: await Product.create({ name, description, price, imagePath }) }
  } catch (error) {
    return { error }
  }
}
