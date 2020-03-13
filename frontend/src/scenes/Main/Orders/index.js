import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { getOrdersRequest } from '../../../utils/api'
import { setNotificationError } from '../../../store/components/notifications/actions'
import { setOrders } from '../../../store/scenes/orders/actions'

import Orders from './Orders'

const OrdersContainer = ({ user, orders, setOrders, setNotificationError }) => {
  useEffect(() => {
    ;(async () => {
      try {
        const data = await getOrdersRequest(user.id)
        setOrders(data.orders)
      } catch (error) {
        setNotificationError(error.message)
      }
    })()
  }, [])

  return <Orders user={user} orders={orders} />
}

const putStateToProps = state => ({
  user: state.root.user,
  orders: state.orders.orders
})

const putActionsToProps = { setNotificationError, setOrders }

export default connect(putStateToProps, putActionsToProps)(OrdersContainer)
