import React, { useReducer } from 'react'

import { setFieldValue, login } from './store/actions'
import reducer, { initialState } from './store/reducer'

import Login from './Login'

const LoginContainer = () => {
  const [{ usernameField, passwordField }, dispatch] = useReducer(reducer, initialState)

  return (
    <Login
      usernameField={usernameField}
      passwordField={passwordField}
      setFieldValue={(field, value) => dispatch(setFieldValue(field, value))}
      login={() => login(usernameField, passwordField)}
    />
  )
}

export default LoginContainer
