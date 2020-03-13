const HttpStatus = require('http-status-codes')
const fs = require('fs')
const path = require('path')

const createProduct = require('../../services/products/create.service')
const uploadImage = require('../../utils/upload-file')

module.exports = async ctx => {
  !ctx.user.roles.includes('admin') && ctx.throw(HttpStatus.FORBIDDEN)
  const uploadError = await uploadImage(ctx)
  uploadError && ctx.throw(HttpStatus.BAD_REQUEST, uploadError.message)
  !ctx.file && ctx.throw(HttpStatus.BAD_REQUEST, 'Missing required fields')
  let { error, product, message } = await createProduct({
    ...ctx.request.body,
    imagePath: ctx.file.filename
  })
  if (error) {
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = []
      for (const validationError of error.errors) {
        validationErrors[validationError.path] = validationError.message
      }
      message = { validationErrors }
    }
    if (error || message) {
      fs.unlink(path.resolve(__dirname, '../../public/uploads', ctx.file.filename), error => {
        error && ctx.throw(error)
      })
    }
    error && ctx.throw(error)
  }
  message && ctx.throw(HttpStatus.BAD_REQUEST, { message })
  ctx.status = HttpStatus.CREATED
  ctx.body = { data: { product } }
}
