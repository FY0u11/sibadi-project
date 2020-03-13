import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { updateOrderRequest, getUserRequest } from '../../../../utils/api'
import { updateOrder } from '../../../../store/scenes/orders/actions'
import { setNotificationError } from '../../../../store/components/notifications/actions'

import RequestItem from './RequestItem'

const RequestItemContainer = ({ updateOrder, order, setNotificationError }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [client, setClient] = useState(null)

  useEffect(() => {
    ;(async () => {
      setClient((await getUserRequest(order.userId)).user)
    })()
  }, [])

  const makeOrderDelivered = async () => {
    try {
      await updateOrderRequest({ status: 'delivered' }, order.id)
      updateOrder(order.id, { status: 'delivered' })
    } catch (error) {
      setNotificationError(error.message)
    }
  }

  return (
    <RequestItem
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      order={order}
      client={client}
      makeOrderDelivered={makeOrderDelivered}
    />
  )
}

const putActionsToProps = { updateOrder, setNotificationError }

export default connect(null, putActionsToProps)(RequestItemContainer)
