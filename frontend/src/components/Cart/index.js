import React from 'react'
import { connect } from 'react-redux'

import { createOrderRequest, clearCartRequest } from '../../utils/api'
import { setUser } from '../../store/actions'
import { setCartProducts } from '../../store/components/cart/actions'
import { setOrders } from '../../store/scenes/orders/actions'
import {
  setNotificationError,
  setNotificationSuccess
} from '../../store/components/notifications/actions'

import Cart from './Cart'

const CartContainer = ({
  user,
  setUser,
  orders,
  setOrders,
  isCartShown,
  cartProducts,
  setCartProducts,
  setNotificationError,
  setNotificationSuccess
}) => {
  const clearCart = async () => {
    try {
      await clearCartRequest()
      setCartProducts([])
    } catch (error) {
      setNotificationError(error.message)
    }
  }

  const buy = async () => {
    try {
      const { order, newBudget } = await createOrderRequest()
      setUser({ ...user, budget: newBudget })
      await clearCart()
      setOrders([...orders, order])
      setNotificationSuccess(`Your order #${order.id} successfully accepted`)
    } catch (error) {
      setNotificationError(error.message)
    }
  }

  const onRemove = async id => {
    try {
      await clearCartRequest({ productId: id })
      setCartProducts(cartProducts.filter(cartProduct => cartProduct.id !== id))
    } catch (error) {
      setNotificationError(error.message)
    }
  }

  return isCartShown && cartProducts.length ? (
    <Cart cartProducts={cartProducts} clearCart={clearCart} onRemove={onRemove} buy={buy} />
  ) : null
}

const putStateToProps = state => ({
  user: state.root.user,
  orders: state.orders.orders,
  isCartShown: state.cart.isCartShown,
  cartProducts: state.cart.cartProducts
})

const putActionsToProps = {
  setUser,
  setOrders,
  setCartProducts,
  setNotificationError,
  setNotificationSuccess
}

export default connect(putStateToProps, putActionsToProps)(CartContainer)
