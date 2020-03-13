import { Action } from './actions'
import produce from 'immer'

export const initialState = {
  usernameField: '',
  emailField: '',
  phoneField: '',
  passwordField: ''
}

export default produce((state, action) => {
  switch (action.type) {
    case Action.SET_FIELD_VALUE:
      state[action.field] = action.payload
  }
  return state
})
