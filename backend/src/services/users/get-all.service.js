const User = require('../../models/User')

module.exports = async () => {
  try {
    const users = await User.findAll({
      attributes: ['id', 'username', 'email', 'phone', 'budget']
    })
    return { users }
  } catch (error) {
    return { error }
  }
}
