import produce from 'immer'

import { Action } from './actions'

const initialState = {
  products: []
}

export default produce((state = initialState, action) => {
  switch (action.type) {
    case Action.SET_PRODUCTS:
      state.products = action.payload
  }
  return state
})
