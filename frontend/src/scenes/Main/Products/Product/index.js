import React from 'react'
import { connect } from 'react-redux'

import { addProductToCartRequest } from '../../../../utils/api'
import { setCartProducts } from '../../../../store/components/cart/actions'
import { setNotificationError } from '../../../../store/components/notifications/actions'

import Product from './Product'

const ProductContainer = ({ product, setCartProducts, cartProducts, setNotificationError }) => {
  const addProductToCart = async () => {
    try {
      await addProductToCartRequest({ productId: product.id })
      setCartProducts([...cartProducts, product])
    } catch (error) {
      setNotificationError(error.message)
    }
  }

  return (
    <Product
      product={product}
      isProductInCart={cartProducts.find(cartProduct => cartProduct.id === product.id)}
      addProductToCart={addProductToCart}
    />
  )
}

const putStateToProps = state => ({ cartProducts: state.cart.cartProducts })
const putActionsToProps = { setCartProducts, setNotificationError }

export default connect(putStateToProps, putActionsToProps)(ProductContainer)
