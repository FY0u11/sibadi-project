const HttpStatus = require('http-status-codes')

const updateUser = require('../../services/users/update.service')

module.exports = async (ctx, next) => {
  !ctx.parsed.id && (await next())
  if (!ctx.user.roles.includes('admin') && ctx.parsed.id !== ctx.user.id) {
    ctx.throw(HttpStatus.FORBIDDEN)
  }
  const { username, email, phone, roles, budget } = ctx.request.body
  if (roles && roles.includes('admin') && !ctx.user.roles.includes('admin')) {
    ctx.throw(HttpStatus.FORBIDDEN)
  }
  if (username && typeof username !== 'string') {
    ctx.throw(HttpStatus.BAD_GATEWAY, 'Wrong username field')
  }
  if (email && typeof email !== 'string') ctx.throw(HttpStatus.BAD_GATEWAY, 'Wrong email field')
  const { error, message } = await updateUser(
    ctx.parsed.id,
    username,
    email,
    phone,
    roles,
    budget
  )
  if (error) {
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = {}
      for (const validationError of error.errors) {
        validationErrors[validationError.path] = validationError.message
      }
      ctx.throw(HttpStatus.BAD_GATEWAY, { message: { validationErrors } })
    }
    error && ctx.throw(error)
  }
  message && ctx.throw(HttpStatus.BAD_GATEWAY, message)
  ctx.body = { message: 'Your profile successfully updated' }
}
