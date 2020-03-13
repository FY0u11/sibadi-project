import React from 'react'

import Button from '../../../../components/Button'
import OrderCard from '../../../../components/Card/OrderCard'

const RequestItem = ({ order, isExpanded, setIsExpanded, client, makeOrderDelivered }) => {
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
        <Button action={makeOrderDelivered} disabled={order.status !== 'delivering'}>
          Delivered
        </Button>
        <Button action={() => setIsExpanded(!isExpanded)}> {isExpanded ? 'Less' : 'More'} </Button>
      </div>
    </div>
  )

  return (
    <OrderCard isExpanded={isExpanded} order={order} showCancelWhen={['delivering']} body={body} />
  )
}

export default RequestItem
