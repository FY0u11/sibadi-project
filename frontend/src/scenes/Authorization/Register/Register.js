import React from 'react'

import Button from '../../../components/Button'
import FormGroup from '../../../components/FormGroup'

const Register = ({
  messages,
  usernameField,
  emailField,
  phoneField,
  passwordField,
  setFieldValue,
  register
}) => {
  return (
    <div className="col-9 my-content-wrapper">
      <FormGroup
        type="text"
        name="username"
        label="Username"
        message={messages.username}
        value={usernameField}
        setValue={setFieldValue}
      />
      <FormGroup
        type="email"
        name="email"
        label="Email"
        message={messages.email}
        value={emailField}
        setValue={setFieldValue}
      />
      <FormGroup
        type="text"
        name="phone"
        label="Phone number"
        message={messages.phone}
        value={phoneField}
        setValue={setFieldValue}
      />
      <FormGroup
        type="password"
        name="password"
        label="Password"
        message={messages.password}
        value={passwordField}
        setValue={setFieldValue}
      />
      <Button action={register}>Sign up</Button>
    </div>
  )
}

export default Register
