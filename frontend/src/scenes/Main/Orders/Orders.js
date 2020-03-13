import React from 'react'

import OrderItem from './OrderItem'

const Orders = ({ user, orders }) => {
  return (
    <div className="col-8 my-content-wrapper">
      {orders.length
        ? orders.map(order => {
            if (order.userId === user.id) {
              return <OrderItem key={order.id} style={{ display: 'block' }} order={order} />
            }
          })
        : null}
    </div>
  )
}

export default Orders
