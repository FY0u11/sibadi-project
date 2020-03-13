import produce from 'immer'

import { Action } from './actions'

export const initialState = {
  isButtonDisabled: true,
  fields: {
    oldPasswordField: '',
    newPasswordField: '',
    repeatPasswordField: ''
  }
}

export default produce((state, action) => {
  switch (action.type) {
    case Action.SET_FIELD_VALUE:
      state.fields[action.field] = action.payload
      break
    case Action.SET_IS_BUTTON_DISABLED:
      state.isButtonDisabled = action.payload
      break
    case Action.PASSWORD_CHANGED:
      state.fields = initialState.fields
      state.isButtonDisabled = true
  }
  return state
})
