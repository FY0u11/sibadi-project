import produce from 'immer'

import { Action } from './actions'

const initialState = {
  headerTitle: null
}

export default produce((state = initialState, action) => {
  switch (action.type) {
    case Action.SET_HEADER_TITLE:
      state.headerTitle = action.payload
  }
  return state
})
