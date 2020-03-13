import { loginRequest } from '../../../../utils/api'
import { initStore } from '../../../../store/actions'
import { reduxStore } from '../../../../'
import { setNotificationLoginError } from '../../../../store/components/notifications/actions'

export const Action = {
  SET_FIELD_VALUE: 'SET_FIELD_VALUE'
}

export const setFieldValue = (field, payload) => ({
  type: 'SET_FIELD_VALUE',
  field,
  payload
})

export const login = async (username, password) => {
  try {
    await loginRequest({ username, password })
    await initStore()
  } catch (error) {
    reduxStore.dispatch(setNotificationLoginError(error.message))
  }
}
