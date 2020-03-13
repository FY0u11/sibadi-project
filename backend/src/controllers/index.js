// general controllers
// const parseIdParam = require('./parse-id.controller')
const notFound = require('./not-found.controller.js')

// users' controllers
const getAllUsers = require('./users/get-all.controller')
const getUserById = require('./users/get-one.controller')
const updateUser = require('./users/update.controller')
const changePassword = require('./users/change-password.controller')
const deleteUser = require('./users/delete.controller')
const profile = require('./users/profile.controller')
const getCart = require('./users/get-cart.controller')
const addProductToCart = require('./users/add-product-to-cart.controller')
const clearCart = require('./users/clear-cart.controller')
const register = require('./users/register.controller')
const login = require('./users/login.controller')
const getMyOrders = require('./users/get-my-orders.controller')

// products' controllers
const getAllProducts = require('./products/get-all.controller')
const getProductById = require('./products/get-one.controller')
const updateProduct = require('./products/update.controller')
const deleteProduct = require('./products/delete.controller')
const createProduct = require('./products/create.controller')

// orders' controllers
const createOrder = require('./orders/create.controller')
const updateOrder = require('./orders/update.controller')
const getOrderById = require('./orders/get-one.controller')

// admin's controllers
const admin = require('./admin.controller')

module.exports = {
  // parseIdParam,
  notFound,
  getAllUsers,
  getUserById,
  updateUser,
  changePassword,
  deleteUser,
  profile,
  getCart,
  addProductToCart,
  clearCart,
  register,
  login,
  getMyOrders,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  createProduct,
  createOrder,
  updateOrder,
  getOrderById,
  admin
}
