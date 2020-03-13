import React from 'react'

import './styles.css'
import Button from '../../../../components/Button'
import Card from '../../../../components/Card'

const Product = ({ product, isProductInCart, addProductToCart }) => {
  const image = <img src={`/uploads/${product.imagePath}`} className="card-img" alt="..." />
  const body = (
    <div>
      <p>{product.description}</p>
      <Button action={addProductToCart} disabled={isProductInCart}>
        Add to cart
      </Button>
      <span className="my-price">{product.price} $</span>
    </div>
  )

  return <Card image={image} title={product.name} body={body} />
}

export default Product
