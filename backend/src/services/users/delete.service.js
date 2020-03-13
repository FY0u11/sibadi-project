const User = require('../../models/User')

module.exports = async id => {
  try {
    const result = await User.destroy({ where: { id } })
    return !result
      ? { message: 'There is no user with such id!' }
      : { }
  } catch (error) {
    return { error }
  }
}
