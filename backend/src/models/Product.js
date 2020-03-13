const { sequelize, Sequelize: DataTypes } = require('../config/db')

class Product extends DataTypes.Model {}

Product.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4, 100]
    }
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [50, 1000]
    }
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 100,
      max: 1000000
    }
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [4, 100]
  }
}, {
  sequelize,
  modelName: 'product'
})

module.exports = Product
