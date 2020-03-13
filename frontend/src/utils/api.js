import axios from 'axios'

const apiPrefix = 'http://localhost/api/v1'

const promiseWrapper = promise =>
  new Promise((resolve, reject) => {
    promise.then(data => resolve(data.data.data)).catch(error => reject(error.response.data))
  })

const registerRequest = user => {
  return promiseWrapper(axios.post(`${apiPrefix}/users/register`, user))
}

const loginRequest = user => {
  return promiseWrapper(axios.post(`${apiPrefix}/users/login`, user))
}

const getProductsRequest = () => {
  return promiseWrapper(axios.get(`${apiPrefix}/products`))
}

const getProfileRequest = () => {
  return promiseWrapper(axios.get(`${apiPrefix}/users/profile`))
}

const updateProfileRequest = (data, id) => {
  return promiseWrapper(axios.put(`${apiPrefix}/users/${id}`, data))
}

const changePasswordRequest = data => {
  return promiseWrapper(axios.put(`${apiPrefix}/users/profile/changePassword`, data))
}

const getCartRequest = () => {
  return promiseWrapper(axios.get(`${apiPrefix}/users/profile/cart`))
}

const addProductToCartRequest = data => {
  return promiseWrapper(axios.post(`${apiPrefix}/users/profile/cart`, data))
}

const clearCartRequest = data => {
  return promiseWrapper(axios.put(`${apiPrefix}/users/profile/cart`, data))
}

const createOrderRequest = () => {
  return promiseWrapper(axios.post(`${apiPrefix}/orders`))
}

const getOrdersRequest = userId => {
  return promiseWrapper(axios.get(`${apiPrefix}/users/${userId}/orders`))
}

const updateOrderRequest = (data, orderId) => {
  return promiseWrapper(axios.put(`${apiPrefix}/orders/${orderId}`, data))
}

const getUserRequest = userId => {
  return promiseWrapper(axios.get(`${apiPrefix}/users/${userId}`))
}

export {
  registerRequest,
  loginRequest,
  getProductsRequest,
  getProfileRequest,
  updateProfileRequest,
  changePasswordRequest,
  getCartRequest,
  addProductToCartRequest,
  clearCartRequest,
  createOrderRequest,
  getOrdersRequest,
  updateOrderRequest,
  getUserRequest
}
