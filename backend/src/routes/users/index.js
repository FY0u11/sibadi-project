const Router = require('koa-router')
const controllers = require('../../controllers')
const parseId = require('../../utils/parse-id')

const users = new Router()

users.get('/', controllers.getAllUsers)
users.use('/profile', require('./profile'))
users.post('/register', controllers.register)
users.post('/login', controllers.login)
users.get('/:id', parseId(controllers.getUserById))
users.put('/:id', parseId(controllers.updateUser))
users.delete('/:id', parseId(controllers.deleteUser))
users.get('/:id/orders', parseId(controllers.getMyOrders))
users.use(controllers.notFound)

module.exports = users.routes()
