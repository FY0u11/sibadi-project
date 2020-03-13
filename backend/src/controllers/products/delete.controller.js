const HttpStatus = require('http-status-codes')
const fs = require('fs')
const path = require('path')

const deleteProduct = require('../../services/products/delete.service')

module.exports = async (ctx, next) => {
  !ctx.parsed.id && (await next())
  !ctx.user.roles.includes('admin') && ctx.throw(HttpStatus.FORBIDDEN)
  const { error, result, message } = await deleteProduct(ctx.parsed.id)
  error && ctx.throw(error)
  message && ctx.throw(HttpStatus.BAD_REQUEST, message)
  fs.unlink(path.resolve(__dirname, '../../public/uploads', result.oldImagePath), error => {
    error && ctx.throw(error)
  })
  ctx.status = HttpStatus.NO_CONTENT
}
