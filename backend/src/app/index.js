const Koa = require('koa')
require('dotenv').config()

const logger = require('pino')()

const app = new Koa()
const PORT = process.env.PORT || 3000

require('./middlewares')(app)
;(async () => {
  try {
    module.exports = await app.listen(PORT)
    logger.info(`Server is running on port ${PORT}`)
  } catch (error) {
    logger.error('Something went wrong')
    logger.error(error)
  }
})()
