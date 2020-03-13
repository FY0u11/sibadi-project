const Router = require('koa-router')
const controllers = require('../controllers')
const parseId = require('../utils/parse-id')

const products = new Router()

products.get('/', controllers.getAllProducts)
products.post('/', controllers.createProduct)
products.get('/:id', parseId(controllers.getProductById))
products.put('/:id', parseId(controllers.updateProduct))
products.delete('/:id', parseId(controllers.deleteProduct))
products.use(controllers.notFound)

module.exports = products.routes()
