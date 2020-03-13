const Router = require('koa-router')
const controllers = require('../controllers')

const config = require('../config')[process.env.NODE_ENV]

const router = new Router({ prefix: config.apiPrefix })

router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/orders', require('./orders'))
router.get('/admin', controllers.admin)

module.exports = router
