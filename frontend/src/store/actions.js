import clearCookie from '../utils/clearCookie'
import { getProfileRequest, getCartRequest, getProductsRequest } from '../utils/api'
import { setProducts } from './scenes/products/actions'
import { setCartProducts } from './components/cart/actions'
import { reduxStore } from '../'

export const Action = {
  SET_USER: 'SET_USER',
  SET_IS_LOADING: 'SET_IS_LOADING',
  SET_MESSAGES: 'SET_MESSAGES',
  LOGOUT: 'LOGOUT'
}

export const setUser = payload => ({
  type: 'SET_USER',
  payload
})

export const setIsLoading = payload => ({
  type: 'SET_IS_LOADING',
  payload
})

export const setMessages = payload => ({
  type: 'SET_MESSAGES',
  payload
})

export const initStore = async () => {
  try {
    reduxStore.dispatch(setIsLoading(true))
    const user = (await getProfileRequest()).user
    const products = (await getProductsRequest()).products
    const cartProductsIds = (await getCartRequest()).cart
    const cartProducts = cartProductsIds.map(id => products.find(product => product.id === id))
    reduxStore.dispatch(setUser(user))
    reduxStore.dispatch(setProducts(products))
    reduxStore.dispatch(setCartProducts(cartProducts))
  } catch (error) {
    clearCookie()
    throw error
  } finally {
    reduxStore.dispatch(setIsLoading(false))
  }
}

export const logout = () => ({ type: 'LOGOUT' })
