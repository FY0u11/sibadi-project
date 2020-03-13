import produce from 'immer'

import { Action } from './actions'

export const initialState = fields => ({
  fields
})

export default produce((state, action) => {
  switch (action.type) {
    case Action.SET_FIELD_VALUE:
      state.fields[action.field] = action.payload
  }
  return state
})
