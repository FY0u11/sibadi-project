import produce from 'immer'

import { Action } from './actions'

const initialState = {
  orders: []
}

export default produce((state = initialState, action) => {
  switch (action.type) {
    case Action.SET_ORDERS:
      state.orders = action.payload
      break
    case Action.UPDATE_ORDER:
      Object.keys(action.payload).forEach(key => {
        state.orders.find(order => order.id === action.id)[key] = action.payload[key]
      })
  }
  return state
})
