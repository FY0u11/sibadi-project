import produce from 'immer'

import { Action } from './actions'

const initialState = {
  cartProducts: [],
  isCartShown: false
}

export default produce((state = initialState, action) => {
  switch (action.type) {
    case Action.SET_CART_PRODUCTS:
      state.cartProducts = action.payload
      break
    case Action.SET_IS_CART_SHOWN:
      state.isCartShown = action.payload
  }
  return state
})
