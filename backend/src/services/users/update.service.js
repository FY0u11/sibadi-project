const User = require('../../models/User')
const Role = require('../../models/Role')
const UserRole = require('../../models/UserRole')

module.exports = async (id, username, email, phone, roles, budget) => {
  try {
    if (username) {
      const isUsernameExists = await User.findOne({ where: { username }, attributes: ['id'] })
      if (isUsernameExists) return { message: 'The username already exists' }
    }
    if (email) {
      const isEmailExists = await User.findOne({ where: { email }, attributes: ['id'] })
      if (isEmailExists) return { message: 'The email already exists' }
    }
    const result = await User.update({
      username, email, phone, budget
    }, {
      where: { id }
    })
    let isRoleUpdated = false
    if (roles) {
      await UserRole.destroy({ where: { userId: id } })
      for (roleName of roles) {
        const role = await Role.findOne({ where: { name: roleName } })
        if (role) {
          await UserRole.create({ userId: id, roleId: role.id })
          isRoleUpdated = true
        }
      }
    }
    return !result[0] && !isRoleUpdated
      ? { message: 'Profile updating failed' }
      : { }
  } catch (error) {
    return { error }
  }
}
