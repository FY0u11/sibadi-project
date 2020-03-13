const HttpStatus = require('http-status-codes')

const getSelf = require('../../services/users/get-one.service')

module.exports = async ctx => {
  const { error, user, message } = await getSelf(ctx.user.id)
  error && ctx.throw(error)
  message && ctx.throw(HttpStatus.NOT_FOUND, message)
  ctx.body = { data: { user } }
}
