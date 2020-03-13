import clearCookie from '../../../../../utils/clearCookie'
import { updateProfileRequest } from '../../../../../utils/api'
import { setUser, setMessages } from '../../../../../store/actions'
import {
  setNotificationUpdateError,
  setNotification,
  setNotificationSuccess
} from '../../../../../store/components/notifications/actions'
import { reduxStore } from '../../../../../'

export const Action = {
  SET_FIELD_VALUE: 'SET_FIELD_VALUE'
}

export const setFieldValue = (field, payload) => ({
  type: 'SET_FIELD_VALUE',
  field,
  payload
})

export const updateProfile = async (username, email, phone, roles) => {
  try {
    setMessages({})
    const data = {}
    const user = reduxStore.getState().root.user
    if (username !== user.username) data.username = username
    if (email !== user.email) data.email = email
    if (phone !== user.phone) data.phone = phone
    if (roles.length !== user.roles.length) data.roles = roles
    user.roles.forEach(role => {
      if (!roles.includes(role)) data.roles = roles
    })
    if (Object.keys(data).length) {
      await updateProfileRequest(data, user.id)
      Object.keys(data).forEach(value => {
        reduxStore.dispatch(setUser({ ...user, [value]: data[value] }))
      })
      reduxStore.dispatch(
        setNotificationSuccess('Your profile information was successfully updated')
      )
    } else {
      reduxStore.dispatch(
        setNotificationUpdateError('Please enter new data in the fields and click Update again')
      )
    }
  } catch (error) {
    error.message.validationErrors
      ? reduxStore.dispatch(setMessages(error.message.validationErrors))
      : reduxStore.dispatch(setNotificationUpdateError(error.message))
  }
}
