import React from 'react'

import Button from '../../../../components/Button'
import OrderCard from '../../../../components/Card/OrderCard'

const OrderItem = ({ order, isExpanded, setIsExpanded, courier, makeOrderDone }) => {
  const body = (
    <div>
      {courier && (
        <div>
          Courier: {courier.username}
          <br />
          phone: {courier.phone}
        </div>
      )}
      <div style={{ marginTop: '10px' }}>
        <Button action={makeOrderDone} disabled={order.status !== 'delivered'}>
          Done
        </Button>
        <Button action={() => setIsExpanded(!isExpanded)}> {isExpanded ? 'Less' : 'More'} </Button>
      </div>
    </div>
  )

  return (
    <OrderCard
      isExpanded={isExpanded}
      order={order}
      showCancelWhen={['created', 'delivering', 'delivered']}
      body={body}
    />
  )
}

export default OrderItem
