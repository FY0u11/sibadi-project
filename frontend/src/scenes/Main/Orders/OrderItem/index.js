import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { updateOrderRequest, getUserRequest } from '../../../../utils/api'
import { updateOrder } from '../../../../store/scenes/orders/actions'
import { setNotificationError } from '../../../../store/components/notifications/actions'

import OrderItem from './OrderItem'

const OrderItemContainer = ({ order, updateOrder, setNotificationError }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [courier, setCourier] = useState(null)

  useEffect(() => {
    ;(async () => {
      if (order.courierId) {
        const user = (await getUserRequest(order.courierId)).user
        order.courierId && setCourier(user)
      }
    })()
  }, [])

  const makeOrderDone = async () => {
    try {
      await updateOrderRequest({ status: 'done' }, order.id)
      updateOrder(order.id, { status: 'done' })
    } catch (error) {
      setNotificationError(error.message)
    }
  }

  return (
    <OrderItem
      isExpanded={isExpanded}
      setIsExpanded={setIsExpanded}
      order={order}
      courier={courier}
      makeOrderDone={makeOrderDone}
    />
  )
}

const putActionsToProps = { updateOrder, setNotificationError }

export default connect(null, putActionsToProps)(OrderItemContainer)
