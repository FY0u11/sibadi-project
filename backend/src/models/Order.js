const { sequelize, Sequelize: DataTypes } = require('../config/db')

class Order extends DataTypes.Model {}

Order.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1
      }
    },
    courierId: {
      type: DataTypes.INTEGER,
      defaultValue: null,
      validate: {
        min: 1
      }
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      validate: {
        min: 100,
        max: 1000000
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'created',
      validate: {
        is: /^(created|delivering|delivered|done|cancelled)$/
      }
    },
    imagePath: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [4, 100]
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    }
  },
  {
    sequelize,
    modelName: 'order'
  }
)

module.exports = Order
