const config = require('../../config')[process.env.NODE_ENV]

module.exports = async (ctx, next) => {
  ctx.config = config
  await next()
}
