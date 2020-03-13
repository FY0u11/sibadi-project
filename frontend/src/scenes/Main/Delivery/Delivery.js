import React from 'react'

import DeliveryItem from './DeliveryItem'

const Delivery = ({ user, orders }) => {
  return (
    <div className="col-8 my-content-wrapper">
      {orders.length
        ? orders.map(order => {
            const isOrderForDelivery =
              !order.courierId && order.userId !== user.id && order.status === 'created'
            if (isOrderForDelivery) {
              return <DeliveryItem key={order.id} tyle={{ display: 'block' }} order={order} />
            }
          })
        : null}
    </div>
  )
}

export default Delivery
