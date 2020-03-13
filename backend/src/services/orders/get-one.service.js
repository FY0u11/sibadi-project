const Order = require('../../models/Order')

module.exports = async id => {
  try {
    const order = await Order.findByPk(id)
    return !order
      ? { message: 'There is no order with such id' }
      : { order }
  } catch (error) {
    return { error }
  }
}
