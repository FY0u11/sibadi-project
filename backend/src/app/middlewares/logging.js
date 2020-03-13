const logger = require('pino')()

module.exports = async (ctx, next) => {
  if (!/favicon\.ico/.test(ctx.request.url)) {
    const requestBody = Object.keys(ctx.request.body).length
      ? JSON.stringify(ctx.request.body, null, 2)
      : ''
    logger.info(`<-- ${ctx.req.method} ${ctx.req.url} ${requestBody}`)
    await next()
    let responseBody = ''
    if (ctx.response.body) {
      if (ctx.response.body.message || ctx.response.body.data) {
        responseBody = JSON.stringify(ctx.response.body, null, 2)
      }
    }
    logger.info(`
      --> ${ctx.req.method} (${ctx.res.statusCode} ${ctx.res.statusMessage}) ${responseBody}
    `)
  }
}
