const Router = require('koa-router')
const controllers = require('../controllers')
const parseId = require('../utils/parse-id')

const orders = new Router()

orders.post('/', controllers.createOrder)
orders.get('/:id', parseId(controllers.getOrderById))
orders.put('/:id', parseId(controllers.updateOrder))
orders.use(controllers.notFound)

module.exports = orders.routes()
