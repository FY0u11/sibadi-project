const HttpStatus = require('http-status-codes')

module.exports = ctx => {
  if (ctx.user.roles.includes('admin')) ctx.body = { message: 'Sup, FY0u11!' }
  else ctx.throw(HttpStatus.FORBIDDEN)
}
