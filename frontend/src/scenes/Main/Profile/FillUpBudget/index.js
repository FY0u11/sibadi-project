import React, { useReducer, useEffect } from 'react'
import { connect } from 'react-redux'

import { setBudgetField, fillUpBudget } from './store/actions'
import reducer, { initialState } from './store/reducer'
import { setMessages } from '../../../../store/actions'

import FillUpBudget from './FillUpBudget'

const FillUpBudgetContainer = ({ messages, setMessages }) => {
  const [{ budgetField }, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    setMessages({})
    dispatch(setBudgetField(''))
  }, [])

  return (
    <FillUpBudget
      messages={messages}
      budgetField={budgetField}
      setBudgetField={value => dispatch(setBudgetField(value))}
      fillUpBudget={() => fillUpBudget(budgetField)}
    />
  )
}

const putStateToProps = state => ({ messages: state.root.messages })
const putActionsToProps = { setMessages }

export default connect(putStateToProps, putActionsToProps)(FillUpBudgetContainer)
