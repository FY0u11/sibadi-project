const User = require('../../models/User')
const Role = require('../../models/Role')
const UserRole = require('../../models/UserRole')

module.exports = async id => {
  try {
    User.belongsToMany(Role, { through: UserRole });
    Role.belongsToMany(User, { through: UserRole });
    const user = await User.findByPk(id, {
      attributes: ['id', 'username', 'email', 'phone', 'budget'],
      include: Role
    })
    if (!user) return { message: 'There is no user with such id' }
    const roles = []
    for (role of user.roles) {
      roles.push(role.name)
    }
    return { user: { ...user.toJSON(), roles } }
  } catch (error) {
    return { error }
  }
}
