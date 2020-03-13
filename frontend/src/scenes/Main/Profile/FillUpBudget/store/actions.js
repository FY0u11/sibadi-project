import { updateProfileRequest } from '../../../../../utils/api'
import { setMessages, setUser } from '../../../../../store/actions'
import {
  setNotificationFillingUpBudgetError,
  setNotificationSuccess
} from '../../../../../store/components/notifications/actions'
import { closeModal } from '../../../../../store/components/modal/actions'
import { reduxStore } from '../../../../../'

export const Action = {
  SET_BUDGET_FIELD: 'SET_BUDGET_FIELD'
}

export const setBudgetField = payload => ({
  type: 'SET_BUDGET_FIELD',
  payload
})

export const fillUpBudget = async amount => {
  try {
    if (!Number.isNaN(+amount)) {
      const user = reduxStore.getState().root.user
      await updateProfileRequest({ budget: +amount + user.budget }, user.id)
      reduxStore.dispatch(setUser({ ...user, budget: +amount + user.budget }))
      reduxStore.dispatch(closeModal())
      reduxStore.dispatch(setNotificationSuccess('You successfully filled up your budget'))
    } else reduxStore.dispatch(setMessages({ budget: 'Amount should be number' }))
  } catch (error) {
    error.message.validationErrors
      ? reduxStore.dispatch(setMessages(error.message.validationErrors))
      : reduxStore.dispatch(setNotificationFillingUpBudgetError(error.message))
  }
}
