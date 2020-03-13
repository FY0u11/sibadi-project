import React from 'react'

import './styles.css'
import Notification from './Notification'

const Notifications = ({ notifications, closeNotification }) => {
  return (
    <div className="my-notifications">
      {notifications.map(notification => {
        const { id, delay, level, title, message } = notification
        return (
          <Notification
            delay={delay}
            level={level}
            title={title}
            message={message}
            key={id}
            id={id}
            closeNotification={closeNotification}
          />
        )
      })}
    </div>
  )
}

export default Notifications
