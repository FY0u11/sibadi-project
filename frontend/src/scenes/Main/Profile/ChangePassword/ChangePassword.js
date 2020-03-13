import React from 'react'
import { Link } from 'react-router-dom'

import FormGroup from '../../../../components/FormGroup'
import Button from '../../../../components/Button'

const ChangePassword = ({
  oldPasswordField,
  newPasswordField,
  repeatPasswordField,
  setFieldValue,
  messages,
  isButtonDisabled,
  changePassword
}) => {
  const dynamicData = { oldPasswordField, newPasswordField, repeatPasswordField }

  return (
    <div>
      <h4>Change password</h4>
      {['Old', 'New', 'Repeat'].map((value, i) => {
        return (
          <FormGroup
            type="password"
            name={`${value.toLowerCase()}Password`}
            label={`${value} password`}
            message={messages[`${value.toLowerCase()}PasswordField`]}
            value={dynamicData[`${value.toLowerCase()}PasswordField`]}
            setValue={setFieldValue}
            key={i}
          />
        )
      })}
      <Button action={changePassword} disabled={isButtonDisabled}>
        Change
      </Button>
      <Link to="/main/profile">
        <Button>Back</Button>
      </Link>
    </div>
  )
}

export default ChangePassword
