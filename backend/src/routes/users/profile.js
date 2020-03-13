const Router = require('koa-router')
const controllers = require('../../controllers')

const profile = new Router()

profile.get('/', controllers.profile)
profile.get('/cart', controllers.getCart)
profile.post('/cart', controllers.addProductToCart)
// Request body in Delete method is being ignored,
// so I use Put method instead to delete special product from user's cart
profile.put('/cart', controllers.clearCart)
profile.put('/changePassword', controllers.changePassword)
profile.use(controllers.notFound)

module.exports = profile.routes()
