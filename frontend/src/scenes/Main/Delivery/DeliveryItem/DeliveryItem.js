import React from 'react'

import Button from '../../../../components/Button'
import OrderCard from '../../../../components/Card/OrderCard'

const DeliveryItem = ({ order, isExpanded, setIsExpanded, client, takeOrder }) => {
  const body = (
    <div>
      {client && (
        <div>
          Client: {client.username}
          <br />
          phone: {client.phone}
        </div>
      )}
      <div style={{ marginTop: '10px' }}>
        <Button action={takeOrder}>Deliver</Button>
        <Button action={() => setIsExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</Button>
      </div>
    </div>
  )

  return <OrderCard isExpanded={isExpanded} order={order} showCancelWhen={[]} body={body} />
}

export default DeliveryItem
