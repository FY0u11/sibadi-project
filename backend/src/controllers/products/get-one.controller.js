const HttpStatus = require('http-status-codes')
const getProductById = require('../../services/products/get-one.service')

module.exports = async (ctx, next) => {
  !ctx.parsed.id && (await next())
  const { error, product, message } = await getProductById(ctx.parsed.id)
  error && ctx.throw(error)
  message && ctx.throw(HttpStatus.NOT_FOUND, message)
  ctx.body = { data: { product } }
}
