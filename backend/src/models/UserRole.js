const { sequelize, Sequelize: DataTypes } = require('../config/db')

class UserRole extends DataTypes.Model {}

UserRole.init({
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1
    }
  }
}, {
  sequelize,
  modelName: 'userRole'
})

module.exports = UserRole
