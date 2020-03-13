const path = require('path')
const multer = require('@koa/multer')

var storage = multer.diskStorage({
  destination: function (req, file, done) {
    done(null, path.resolve(__dirname, '../../../public/uploads/'))
  },
  filename: function (req, file, done) {
    done(null, file.fieldname + '-' + Date.now() + file.mimetype.replace(/^image\//, '.'))
  }
})

const upload = multer({
  storage,
  fileFilter (req, file, done) {
    if ((file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/png')) {
      done(new Error('Unknown image type'))
    } else {
      done(null, true)
    }
  }
})

module.exports = async ctx => {
  try {
    if (/^multipart\/form-data; .+$/.test(ctx.request.header['content-type'])) {
      await upload.single('image')(ctx)
    }
  } catch (error) {
    return error
  }
}
