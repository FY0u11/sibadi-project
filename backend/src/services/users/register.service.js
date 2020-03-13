const User = require('../../models/User')
const UserRole = require('../../models/UserRole')

module.exports = async (username, password, email, phone) => {
  try {
    const isUsernameExists = await User.findOne({ where: { username }, attributes: ['id'] })
    const isEmailExists = await User.findOne({ where: { email }, attributes: ['id'] })
    if (isUsernameExists) return { message: 'The username already exists' }
    if (isEmailExists) return { message: 'The email already exists' }
    const user = (await User.create({ username, password, email, phone })).toJSON()
    await UserRole.create({ userId: user.id, roleId: 1 })
    delete user.password
    delete user.salt
    delete user.passwordHash
    user.roles = ['client']
    return { user }
  } catch (error) {
    return { error }
  }
}
