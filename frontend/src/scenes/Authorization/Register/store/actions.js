import { registerRequest } from '../../../../utils/api'
import { setNotificationRegisterError } from '../../../../store/components/notifications/actions'
import { initStore, setMessages } from '../../../../store/actions'
import { reduxStore } from '../../../../'

export const Action = {
  SET_FIELD_VALUE: 'SET_FIELD_VALUE'
}

export const setFieldValue = (field, payload) => ({
  type: 'SET_FIELD_VALUE',
  field,
  payload
})

export const register = async (username, email, phone, password) => {
  reduxStore.dispatch(setMessages({}))
  try {
    await registerRequest({ username, email, phone, password })
    await initStore()
  } catch (error) {
    error.message.validationErrors
      ? reduxStore.dispatch(setMessages(error.message.validationErrors))
      : reduxStore.dispatch(setNotificationRegisterError(error.message))
  }
}
