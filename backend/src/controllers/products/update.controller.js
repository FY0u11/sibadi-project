const HttpStatus = require('http-status-codes')
const fs = require('fs')
const path = require('path')

const updateProduct = require('../../services/products/update.service')
const uploadImage = require('../../utils/upload-file')

module.exports = async (ctx, next) => {
  !ctx.parsed.id && (await next())
  !ctx.user.roles.includes('admin') && ctx.throw(HttpStatus.FORBIDDEN)
  const uploadError = await uploadImage(ctx)
  uploadError && ctx.throw(HttpStatus.BAD_REQUEST, uploadError.message)
  if (!ctx.file) ctx.file = { filename: undefined }
  let { error, result, message } = await updateProduct({
    ...ctx.request.body,
    imagePath: ctx.file.filename,
    id: ctx.parsed.id
  })
  if (error) {
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = {}
      for (const validationError of error.errors) {
        validationErrors[validationError.path] = validationError.message
      }
      message = { validationErrors }
    }
    if (error || message) {
      if (ctx.file.filename) {
        fs.unlink(
          path.resolve(__dirname, '../../public/uploads', ctx.request.file.filename),
          error => {
            error && ctx.throw(error)
          }
        )
      }
    }
    error && ctx.throw(error)
  }
  message && ctx.throw(HttpStatus.BAD_REQUEST, { message })
  if (result.oldImagePath) {
    fs.unlink(path.resolve(__dirname, '../../public/uploads', result.oldImagePath), error => {
      error && ctx.throw(error)
    })
  }
  ctx.status = HttpStatus.CREATED
  ctx.body = { message: 'Product successfully updated' }
}
