import React, { useReducer } from 'react'
import { connect } from 'react-redux'

import { setFieldValue, register } from './store/actions'
import reducer, { initialState } from './store/reducer'

import Register from './Register'

const RegisterContainer = ({ messages }) => {
  const [{ usernameField, emailField, phoneField, passwordField }, dispatch] = useReducer(
    reducer,
    initialState
  )

  return (
    <Register
      messages={messages}
      usernameField={usernameField}
      emailField={emailField}
      phoneField={phoneField}
      passwordField={passwordField}
      setFieldValue={(field, value) => dispatch(setFieldValue(field, value))}
      register={() => register(usernameField, emailField, phoneField, passwordField)}
    />
  )
}

const putStateToProps = state => ({ messages: state.root.messages })

export default connect(putStateToProps)(RegisterContainer)
