import React from 'react'

const Button = ({ doAction, isButtonDisabled, disabled, children }) => {
  return (
    <button
      className="btn btn-dark"
      style={{ marginRight: '20px' }}
      onClick={doAction}
      disabled={disabled || isButtonDisabled}
    >
      {children}
    </button>
  )
}

export default Button
