const getAllUsers = require('../../services/users/get-all.service')

module.exports = async ctx => {
  const { error, users } = await getAllUsers()
  error && ctx.throw(error)
  ctx.body = { data: { users } }
}
