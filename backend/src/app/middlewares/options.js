const HttpStatus = require('http-status-codes')

module.exports = async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', '*')
  if (ctx.request.method === 'OPTIONS') {
    ctx.status = HttpStatus.OK
  } else await next()
}
