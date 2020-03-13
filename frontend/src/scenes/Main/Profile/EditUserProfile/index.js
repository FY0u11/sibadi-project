import React, { useReducer } from 'react'
import { connect } from 'react-redux'

import { setFieldValue, updateProfile } from './store/actions'
import reducer, { initialState } from './store/reducer'

import EditUserProfile from './EditUserProfile'

const EditUserProfileContainer = ({ user, messages }) => {
  const fields = {
    usernameField: user.username,
    emailField: user.email,
    phoneField: user.phone,
    roles: user.roles
  }
  const [state, dispatch] = useReducer(reducer, initialState(fields))
  const { usernameField, emailField, phoneField, roles } = state.fields

  return (
    <EditUserProfile
      usernameField={usernameField}
      emailField={emailField}
      phoneField={phoneField}
      roles={roles}
      setFieldValue={(field, value) => dispatch(setFieldValue(field, value))}
      messages={messages}
      updateProfile={() => updateProfile(usernameField, emailField, phoneField, roles)}
    />
  )
}

const putStateToProps = state => ({
  user: state.root.user,
  messages: state.root.messages
})

export default connect(putStateToProps)(EditUserProfileContainer)
