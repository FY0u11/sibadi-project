const { sequelize, Sequelize: DataTypes } = require('../config/db')

class OrderProduct extends DataTypes.Model {}

OrderProduct.init({
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  }
}, {
  sequelize,
  modelName: 'orderProduct'
})

module.exports = OrderProduct
