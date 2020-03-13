import React from 'react'

import Button from '../Button'
import Card from '../Card'

const CartProduct = ({ product, onRemove }) => {
  const image = <img src={`/uploads/${product.imagePath}`} className="card-img" alt="..." />
  const body = (
    <div>
      <Button action={onRemove}>Remove</Button>
      <span>{product.price} $</span>
    </div>
  )

  return <Card image={image} title={product.name} body={body} width="400px" />
}

export default CartProduct
