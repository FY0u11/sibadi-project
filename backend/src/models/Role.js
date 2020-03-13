const { sequelize, Sequelize: DataTypes } = require('../config/db')

class Role extends DataTypes.Model {}

Role.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'role'
})

module.exports = Role
