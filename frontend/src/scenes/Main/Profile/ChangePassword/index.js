import React, { useEffect } from 'react'
import useThunkReducer from 'react-hook-thunk-reducer'
import { connect } from 'react-redux'

import { setFieldValue, setIsButtonDisabled, changePassword } from './store/actions'
import reducer, { initialState } from './store/reducer'
import { setMessages } from '../../../../store/actions'

import ChangePassword from './ChangePassword'

const ChangePasswordContainer = ({ messages, setMessages }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState)
  const { isButtonDisabled } = state
  const { oldPasswordField, newPasswordField, repeatPasswordField } = state.fields
  useEffect(() => {
    if (newPasswordField.length > 0 || repeatPasswordField > 0) {
      if (newPasswordField !== repeatPasswordField) {
        setMessages({ repeatPasswordField: 'Passwords do not match' })
        dispatch(setIsButtonDisabled(true))
      } else {
        setMessages({ repeatPasswordField: '' })
        dispatch(setIsButtonDisabled(false))
      }
    } else setMessages({})
  }, [newPasswordField, repeatPasswordField])

  return (
    <ChangePassword
      oldPasswordField={oldPasswordField}
      newPasswordField={newPasswordField}
      repeatPasswordField={repeatPasswordField}
      messages={messages}
      setFieldValue={(field, value) => dispatch(setFieldValue(field, value))}
      isButtonDisabled={isButtonDisabled}
      changePassword={() => dispatch(changePassword(oldPasswordField, newPasswordField))}
    />
  )
}

const putStateToProps = state => ({ messages: state.root.messages })
const putActionsToProps = { setMessages }

export default connect(putStateToProps, putActionsToProps)(ChangePasswordContainer)
