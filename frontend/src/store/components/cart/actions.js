export const Action = {
  SET_CART_PRODUCTS: 'SET_CART_PRODUCTS',
  SET_IS_CART_SHOWN: 'SET_IS_CART_SHOWN'
}

export const setCartProducts = payload => ({
  type: 'SET_CART_PRODUCTS',
  payload
})

export const setIsCartShown = payload => ({
  type: 'SET_IS_CART_SHOWN',
  payload
})
