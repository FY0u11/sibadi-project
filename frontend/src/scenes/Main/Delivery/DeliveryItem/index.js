import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { updateOrderRequest, getUserRequest } from '../../../../utils/api'
import { updateOrder } from '../../../../store/scenes/orders/actions'
import { setNotificationError } from '../../../../store/components/notifications/actions'

import DeliveryItem from './DeliveryItem'

const DeliveryItemContainer = ({ order, updateOrder, setNotificationError }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [client, setClient] = useState(null)

  useEffect(() => {
    ;(async () => {
      setClient((await getUserRequest(order.userId)).user)
    })()
  }, [])

  const takeOrder = async () => {
    try {
      await updateOrderRequest({ status: 'delivering' }, order.id)
      updateOrder(order.id, { status: 'delivering' })
    } catch (error) {
      setNotificationError(error.message)
    }
  }

  return (
    <DeliveryItem
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      order={order}
      client={client}
      takeOrder={takeOrder}
    />
  )
}

const putActionsToProps = { updateOrder, setNotificationError }

export default connect(null, putActionsToProps)(DeliveryItemContainer)
