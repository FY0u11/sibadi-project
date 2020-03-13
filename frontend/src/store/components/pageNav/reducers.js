import produce from 'immer'

import { Action } from './actions'

const initialState = {
  page: 1
}

export default produce((state = initialState, action) => {
  switch (action.type) {
    case Action.SET_PAGE:
      state.page = action.payload
  }
  return state
})
