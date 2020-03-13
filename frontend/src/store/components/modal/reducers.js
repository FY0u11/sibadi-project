import produce from 'immer'

import { Action } from './actions'

const initialState = {
  modal: null
}

export default produce((state = initialState, action) => {
  switch (action.type) {
    case Action.SET_MODAL:
      state.modal = action.payload
      break
    case Action.CLOSE_MODAL:
      state.modal = null
  }
  return state
})
