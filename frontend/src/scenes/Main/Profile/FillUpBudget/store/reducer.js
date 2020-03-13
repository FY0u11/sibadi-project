import { Action } from './actions'
import produce from 'immer'

export const initialState = {
  budgetField: ''
}

export default produce((state, action) => {
  switch (action.type) {
    case Action.SET_BUDGET_FIELD:
      state.budgetField = action.payload
  }
  return state
})
