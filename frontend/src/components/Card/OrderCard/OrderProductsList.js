import React from 'react'

const OrderProductsList = ({ orderProducts }) => {
  return (
    <div>
      <h5>Product list</h5>
      <ol>
        {orderProducts.map(product => (
          <li key={product.id}>
            {product.name} <span className="small text-muted">{product.price} $</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default OrderProductsList
