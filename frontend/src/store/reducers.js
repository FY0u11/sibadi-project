import { combineReducers } from 'redux'
import produce from 'immer'

import { Action } from './actions'
import headerReducer from './components/header/reducers'
import notificationsReducer from './components/notifications/reducers'
import productsReducer from './scenes/products/reducers'
import cartReducers from './components/cart/reducers'
import modalReducer from './components/modal/reducers'
import pageNavReducer from './components/pageNav/reducers'
import ordersReducer from './scenes/orders/reducers'

const initialState = {
  user: null,
  settings: {
    pageLen: 5
  },
  isLoading: true,
  messages: {}
}

const rootReducer = produce((state = initialState, action) => {
  switch (action.type) {
    case Action.SET_USER:
      state.user = action.payload
      break
    case Action.SET_IS_LOADING:
      state.isLoading = action.payload
      break
    case Action.SET_MESSAGES:
      state.messages = action.payload
      break
    case Action.LOGOUT:
      state = { ...initialState, isLoading: false }
  }
  return state
})

export default combineReducers({
  root: rootReducer,
  header: headerReducer,
  notifications: notificationsReducer,
  products: productsReducer,
  cart: cartReducers,
  modal: modalReducer,
  pageNav: pageNavReducer,
  orders: ordersReducer
})
