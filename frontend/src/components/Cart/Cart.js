import React from 'react'

import './styles.css'
import CartProduct from './CartProduct'
import Button from '../Button'

const Cart = ({ cartProducts, onRemove, clearCart, buy }) => {
  const totalPrice = cartProducts.reduce((sum, product) => sum + product.price, 0)

  return (
    <div className="my-cart bg-light">
      <h3>Total: {totalPrice}</h3>
      {cartProducts.map(product => (
        <CartProduct key={product.id} product={product} onRemove={() => onRemove(product.id)} />
      ))}
      <div style={{ marginBottom: '20px' }}>
        <Button action={buy}>Buy</Button>
        <Button action={clearCart}>Clear cart</Button>
      </div>
    </div>
  )
}

export default Cart
