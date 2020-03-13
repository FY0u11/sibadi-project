const { sequelize } = require('../../config/db')
const Order = require('../../models/Order')
const User = require('../../models/User')

module.exports = async (status, orderId, userId) => {
  try {
    const order = await Order.findByPk(orderId)
    if (!order) return { message: 'There is no order with such id' }
    switch (status) {
      case 'delivering':
        return order.status !== 'created'
          ? { message: 'The only status that can be changed to "delivering" is "created"' }
          : userId === order.userId
          ? { message: 'You can not take own order' }
          : await Order.update({ status, courierId: userId }, { where: { id: orderId } })
      case 'delivered':
        return order.status !== 'delivering'
          ? { message: 'The only status that can be changed to "delivered" is "delivering"' }
          : userId !== order.courierId
          ? { message: "Only order's courier can change this status" }
          : await Order.update({ status }, { where: { id: orderId } })
      case 'done': {
        if (order.status !== 'delivered') return { message: 'Only delivered orders can be done' }
        if (userId !== order.userId) return { message: "Only order's owner can change this status" }
        const courier = await User.findByPk(order.courierId)
        await sequelize.transaction(async transaction => {
          await Order.update({ status }, { where: { id: orderId }, transaction })
          if (courier) {
            await courier.update({ budget: courier.budget + order.price * 0.1 }, { transaction })
          }
        })
        return {}
      }
      case 'cancelled': {
        if (order.status === 'done') return { message: 'A done order can not be cancelled' }
        if (userId !== order.userId && userId !== order.courierId) {
          return { message: 'You are neither owner nor courier of the order to cancel it' }
        }
        const client = await User.findByPk(order.userId)
        await sequelize.transaction(async transaction => {
          await Order.update({ status }, { where: { id: orderId }, transaction })
          if (client) {
            await client.update({ budget: client.budget + order.price }, { transaction })
          }
        })
        return {}
      }
      default:
        return { message: 'Wrong order status' }
    }
  } catch (error) {
    return { error }
  }
}
