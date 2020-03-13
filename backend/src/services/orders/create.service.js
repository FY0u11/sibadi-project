const { sequelize } = require('../../config/db')

const Cart = require('../../models/Cart')
const Order = require('../../models/Order')
const Product = require('../../models/Product')
const OrderProduct = require('../../models/OrderProduct')
const User = require('../../models/User')

module.exports = async userId => {
  try {
    const cart = await Cart.findAll({ where: { userId } })
    if (!cart) return { message: 'You do not have products in the cart' }
    const cartProductsIds = cart.map(v => v.productId)
    const products = await Product.findAll({ where: { id: cartProductsIds } })
    if (!products) return { message: 'There is no products with such ids' }
    const orderTotalPrice = products.reduce((acc, product) => {
      acc += product.price
      return acc
    }, 0)
    const imagePath = products[0].imagePath
    const user = await User.findByPk(userId)
    if (!user) return { message: 'There is no user with such id' }
    if (user.budget < orderTotalPrice) return { message: 'You do not have enough money' }
    const result = await sequelize.transaction(async transaction => {
      await user.update({ budget: user.budget - orderTotalPrice }, { transaction })
      const order = await Order.create(
        { userId, price: orderTotalPrice, imagePath },
        { transaction }
      )
      const promises = []
      for (const product of products) {
        const newPromise = OrderProduct.create(
          {
            orderId: order.id,
            productId: product.id
          },
          {
            transaction
          }
        )
        promises.push(newPromise)
      }
      await Promise.all(promises)
      const orderWithProducts = order.toJSON()
      orderWithProducts.orderProducts = cartProductsIds
      return { order: orderWithProducts, newBudget: user.budget }
    })
    return { result }
  } catch (error) {
    return { error }
  }
}
