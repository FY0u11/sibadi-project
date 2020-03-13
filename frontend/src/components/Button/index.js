import React, { useState } from 'react'

import Button from './Button'

const ButtonContainer = ({ action, ...rest }) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const doAction = async () => {
    const timer = setTimeout(() => setIsButtonDisabled(true), 200)
    await action()
    clearTimeout(timer)
    setIsButtonDisabled(false)
  }

  return <Button doAction={action && doAction} isButtonDisabled={isButtonDisabled} {...rest} />
}

export default ButtonContainer
