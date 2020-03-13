const HttpStatus = require('http-status-codes')

const changePassword = require('../../services/users/change-password.service')
const passport = require('../../services/users/login.service')

module.exports = async ctx => {
  await passport.authenticate('local', async (authError, authUser, authMessage) => {
    authError && ctx.throw(authError)
    if (!authUser) {
      if (authMessage.message === 'Incorrect username or password') {
        authMessage.message = 'Incorrect password'
      }
      ctx.throw(HttpStatus.UNAUTHORIZED, authMessage.message)
    }
    if (ctx.user.id !== authUser.id) {
      ctx.throw(HttpStatus.BAD_REQUEST, 'You are trying to change password of another user')
    }
    const { newPassword } = ctx.request.body
    const { error, message } = await changePassword(newPassword, authUser.id)
    if (error) {
      if (error.name === 'SequelizeValidationError') {
        const validationErrors = {}
        for (const validationError of error.errors) {
          validationErrors[validationError.path] = validationError.message
        }
        ctx.throw(HttpStatus.BAD_REQUEST, { message: { validationErrors } })
      }
      error && ctx.throw(error)
    }
    message && ctx.throw(HttpStatus.BAD_REQUEST, message)
    ctx.body = { message: 'Your password successfully changed' }
  })(ctx)
}
