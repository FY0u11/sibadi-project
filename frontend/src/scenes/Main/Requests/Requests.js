import React from 'react'

import RequestItem from './RequestItem'

const Requests = ({ user, orders }) => {
  return (
    <div className="col-8 my-content-wrapper">
      {orders.length
        ? orders.map(order => {
            if (order.courierId === user.id) {
              return <RequestItem key={order.id} style={{ display: 'block' }} order={order} />
            }
          })
        : null}
    </div>
  )
}

export default Requests
