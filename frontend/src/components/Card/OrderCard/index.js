import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { updateOrderRequest } from '../../../utils/api'
import { setUser } from '../../../store/actions'
import { updateOrder } from '../../../store/scenes/orders/actions'
import { setModal, closeModal } from '../../../store/components/modal/actions'
import { setNotificationError } from '../../../store/components/notifications/actions'

import Button from '../../Button'
import OrderCard from './OrderCard'

const OrderCardContainer = ({
  user,
  setUser,
  showCancelWhen,
  body,
  isExpanded,
  order,
  updateOrder,
  setModal,
  closeModal,
  products,
  setNotificationError
}) => {
  const [orderProducts, setOrderProducts] = useState([])
  useEffect(() => {
    const orderProductsTmp = []
    order.orderProducts.forEach(orderProductId => {
      const product = products.find(product => product.id === orderProductId)
      orderProductsTmp.push(product)
    })
    setOrderProducts(orderProductsTmp)
  }, [])

  const cancelOrder = async () => {
    try {
      await updateOrderRequest({ status: 'cancelled' }, order.id)
      updateOrder(order.id, { status: 'cancelled' })
      setUser({ ...user, budget: user.budget + +order.price })
      closeModal()
    } catch (error) {
      setNotificationError(error.message)
    }
  }

  const askForCancellingOrder = () => {
    setModal({
      title: 'This cancels the order',
      body: (
        <div style={{ padding: '10px' }}>
          <div style={{ marginBottom: '20px' }}>Are you sure?</div>
          <Button action={cancelOrder}>Yes</Button>
          <Button action={closeModal}>No</Button>
        </div>
      )
    })
  }

  return (
    <OrderCard
      isCancelButtonShown={showCancelWhen.includes(order.status)}
      body={body}
      isExpanded={isExpanded}
      orderProducts={orderProducts}
      order={order}
      askForCancellingOrder={askForCancellingOrder}
    />
  )
}

const putStateToProps = state => ({
  user: state.root.user,
  products: state.products.products
})

const putActionsToProps = { setUser, updateOrder, setModal, closeModal, setNotificationError }

export default connect(putStateToProps, putActionsToProps)(OrderCardContainer)
