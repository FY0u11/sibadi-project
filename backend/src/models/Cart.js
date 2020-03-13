const { sequelize, Sequelize: DataTypes } = require('../config/db')

class Cart extends DataTypes.Model {}

Cart.init({
  userId: {
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
  modelName: 'cart'
})

module.exports = Cart
