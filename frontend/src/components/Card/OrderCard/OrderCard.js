import React from 'react'

import OrderProductsList from './OrderProductsList'
import ExpandingCard from '../ExpandingCard'

const OrderCard = ({
  isCancelButtonShown,
  body,
  orderProducts,
  order,
  isExpanded,
  askForCancellingOrder
}) => {
  const image = <img src={`/uploads/${order.imagePath}`} className="card-img" alt="..." />
  const innerTitle = (
    <div>
      Order #{order.id}
      {isCancelButtonShown && (
        <button className="close text-danger" onClick={askForCancellingOrder}>
          &times;
        </button>
      )}
    </div>
  )
  const innerBody = (
    <div>
      <div>Total price: $ {order.price}</div>
      <div>
        Status:&ensp;
        <strong className={order.status === 'cancelled' ? 'text-danger' : 'text-success'}>
          {order.status}
        </strong>
      </div>
      {body}
    </div>
  )
  const exBody = <OrderProductsList orderProducts={orderProducts} />

  return (
    <ExpandingCard
      image={image}
      title={innerTitle}
      body={innerBody}
      exBody={exBody}
      isExpanded={isExpanded}
    />
  )
}

export default OrderCard
