import React from 'react'

import './styles.css'

const colors = {
  dark: {
    bg: 'bg-dark',
    color: 'text-light'
  },
  warning: {
    bg: 'bg-warning',
    color: 'text-dark'
  },
  danger: {
    bg: 'bg-danger',
    color: 'text-light'
  },
  success: {
    bg: 'bg-success',
    color: 'text-light'
  }
}

const Notification = ({ level, title, message, closeNotification }) => {
  return (
    <div className="card my-notification">
      <h5 className={`card-header ${colors[level].bg} ${colors[level].color}`}>
        {title}
        <button type="button" className="ml-2 mb-1 close" onClick={closeNotification}>
          &times;
        </button>
      </h5>
      <div className="card-body">
        <p className="card-text">{message}</p>
        <button className={`btn btn-${level} ${colors[level].color}`} onClick={closeNotification}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Notification
