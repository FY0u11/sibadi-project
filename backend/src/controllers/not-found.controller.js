const HttpStatus = require('http-status-codes')

module.exports = ctx => {
  ctx.throw(HttpStatus.NOT_FOUND)
}
