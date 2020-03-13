import React from 'react'

import FormGroup from '../../../../components/FormGroup'
import Button from '../../../../components/Button'

const FillUpBudget = ({ messages, budgetField, setBudgetField, fillUpBudget }) => {
  return (
    <div>
      <FormGroup
        type="text"
        name="amount"
        label="Amount"
        message={messages.budget}
        value={budgetField}
        setValue={(_, value) => setBudgetField(value)}
      />
      <Button action={fillUpBudget}>Submit</Button>
    </div>
  )
}

export default FillUpBudget
