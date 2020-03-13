import { changePasswordRequest } from '../../../../../utils/api'
import { setMessages } from '../../../../../store/actions'
import {
  setNotificationChangePasswordError,
  setNotificationSuccess
} from '../../../../../store/components/notifications/actions'
import { reduxStore } from '../../../../../'

export const Action = {
  SET_FIELD_VALUE: 'SET_FIELD_VALUE',
  SET_IS_BUTTON_DISABLED: 'SET_IS_BUTTON_DISABLED',
  PASSWORD_CHANGED: 'PASSWORD_CHANGED'
}

export const setFieldValue = (field, payload) => ({
  type: 'SET_FIELD_VALUE',
  field,
  payload
})

export const setIsButtonDisabled = payload => ({
  type: 'SET_IS_BUTTON_DISABLED',
  payload
})

export const changePassword = (oldPasswordField, newPasswordField) => {
  return async dispatch => {
    try {
      const user = reduxStore.getState().root.user
      reduxStore.dispatch(setMessages({}))
      const data = {
        password: oldPasswordField,
        newPassword: newPasswordField,
        username: user.username
      }
      await changePasswordRequest(data, user.id)
      reduxStore.dispatch(setNotificationSuccess('Your password was successfully changed'))
      dispatch({ type: 'PASSWORD_CHANGED' })
    } catch (error) {
      error.message.validationErrors
        ? reduxStore.dispatch(
            setMessages({ newPasswordField: error.message.validationErrors.password })
          )
        : reduxStore.dispatch(setNotificationChangePasswordError(error.message))
    }
  }
}
