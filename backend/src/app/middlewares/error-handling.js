const HttpStatus = require('http-status-codes')
const logger = require('pino')()

module.exports = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.status || HttpStatus.INTERNAL_SERVER_ERROR
    ctx.body = { message: error.message }
    if (ctx.status === HttpStatus.INTERNAL_SERVER_ERROR) {
      logger.error(error)
      ctx.throw(HttpStatus.INTERNAL_SERVER_ERROR)
    }
  }
}
