const getAllProducts = require('../../services/products/get-all.service')

module.exports = async ctx => {
  const { error, products } = await getAllProducts()
  error && ctx.throw(error)
  ctx.body = { data: { products } }
}
