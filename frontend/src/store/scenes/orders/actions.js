export const Action = {
  SET_ORDERS: 'SET_ORDERS',
  UPDATE_ORDER: 'UPDATE_ORDER'
}

export const setOrders = payload => ({
  type: 'SET_ORDERS',
  payload
})

export const updateOrder = (id, payload) => ({
  type: 'UPDATE_ORDER',
  id,
  payload
})
