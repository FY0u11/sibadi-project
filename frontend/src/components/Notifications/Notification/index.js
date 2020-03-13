import React, { useEffect } from 'react'

import timer from '../../../utils/timer'

import Notification from './Notification'

// delay before notifications are automatically closed (in milliseconds)
const NotificationContainer = ({ id, delay = 10000, closeNotification, ...rest }) => {
  useEffect(() => {
    timer(delay)(closeNotification, id)
  }, [])

  return <Notification {...rest} closeNotification={() => closeNotification(id)} />
}

export default NotificationContainer
