import produce from 'immer'

import { Action } from './actions'

const initialState = {
  notifications: []
}

export default produce((state = initialState, action) => {
  switch (action.type) {
    case Action.SET_NOTIFICATION:
      state.notifications.push(action.payload)
      break
    case Action.CLOSE_NOTIFICATION:
      state.notifications = state.notifications.filter(
        notification => notification.id !== action.payload
      )
  }
  return state
})
