const { Sequelize } = require('../../config/db')
const Order = require('../../models/Order')
const OrderProduct = require('../../models/OrderProduct')

module.exports = async (userId, userRoles) => {
  try {
    Order.hasMany(OrderProduct, { foreignKey: 'orderId' })
    OrderProduct.belongsTo(Order, { foreignKey: 'id' })
    let rawOrders = []
    if (userRoles.includes('courier')) {
      rawOrders = await Order.findAll({
        where: Sequelize.or({ status: 'created' }, { courierId: userId }),
        include: [{ model: OrderProduct, attributes: ['productId'] }]
      })
    }
    if (userRoles.includes('client')) {
      rawOrders = await Order.findAll({
        where: { userId },
        include: [{ model: OrderProduct, attributes: ['productId'] }]
      })
    }
    if (userRoles.includes('client') && userRoles.includes('courier')) {
      rawOrders = await Order.findAll({
        where: Sequelize.or({ userId }, { status: 'created' }, { courierId: userId }),
        include: [{ model: OrderProduct, attributes: ['productId'] }]
      })
    }
    const orders = rawOrders.reduce((acc, rawOrder) => {
      const order = rawOrder.toJSON()
      order.orderProducts = order.orderProducts.map(orderProduct => orderProduct.productId)
      acc.push(order)
      return acc
    }, [])
    return !orders.length ? { message: 'You do not have any orders' } : { orders }
  } catch (error) {
    return { error }
  }
}
