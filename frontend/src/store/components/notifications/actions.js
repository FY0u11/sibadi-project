import uuid from 'uuid/v4'

export const Action = {
  SET_NOTIFICATION: 'SET_NOTIFICATION',
  CLOSE_NOTIFICATION: 'CLOSE_NOTIFICATION'
}

export const setNotification = notification => ({
  type: 'SET_NOTIFICATION',
  payload: { ...notification, id: uuid() }
})

export const closeNotification = payload => ({
  type: 'CLOSE_NOTIFICATION',
  payload
})

export const setNotificationError = message => {
  return setNotification({
    title: 'Error',
    level: 'warning',
    message
  })
}

export const setNotificationSuccess = message => {
  return setNotification({
    title: 'Success',
    level: 'success',
    message
  })
}

export const setNotificationLoginError = message => {
  return setNotification({
    title: 'Login failed',
    level: 'dark',
    message
  })
}

export const setNotificationRegisterError = message => {
  return setNotification({
    title: 'Registration failed',
    level: 'dark',
    message
  })
}

export const setNotificationFillingUpBudgetError = message => {
  return setNotification({
    title: 'Filling up budget failed',
    level: 'dark',
    message
  })
}

export const setNotificationUpdateError = message => {
  return setNotification({
    title: 'Updating user profile failed',
    level: 'dark',
    message
  })
}

export const setNotificationChangePasswordError = message => {
  return setNotification({
    title: 'Changing password failed',
    level: 'dark',
    message
  })
}

export const setNotificationNotImplementedError = () => {
  return setNotification({
    title: 'Not done yet',
    level: 'warning',
    message: 'This action is not implemented yet :)'
  })
}
