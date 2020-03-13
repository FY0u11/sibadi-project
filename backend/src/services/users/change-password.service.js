const User = require('../../models/User')

module.exports = async (password, id) => {
  try {
    const result = await User.update({ password }, { where: { id } })
    return !result[0]
      ? { message: 'Password changing failed' }
      : { }
  } catch (error) {
    return { error }
  }
}
