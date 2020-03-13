import React from 'react'

import Button from '../../../components/Button'
import FormGroup from '../../../components/FormGroup'

const Login = ({ usernameField, passwordField, setFieldValue, login }) => {
  return (
    <div className="col-9 my-content-wrapper">
      <FormGroup
        type="text"
        name="username"
        label="Username"
        value={usernameField}
        setValue={setFieldValue}
      />
      <FormGroup
        type="password"
        name="password"
        label="Password"
        value={passwordField}
        setValue={setFieldValue}
      />
      <Button action={login}>Sign in</Button>
    </div>
  )
}

export default Login
