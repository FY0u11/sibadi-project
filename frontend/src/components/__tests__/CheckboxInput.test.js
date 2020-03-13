import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import CheckboxInput from '../CheckboxInput'

afterEach(cleanup)

const props = {
  name: 'test',
  checked: true
}

describe('Testing CheckboxInput component', () => {
  it('It should be properly rendered', async () => {
    const { asFragment } = render(<CheckboxInput {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('It should trigger callback with new checked value on change event', () => {
    const callback = jest.fn(isChecked => {
      props.checked = isChecked
    })
    const { getByRole, rerender } = render(<CheckboxInput {...props} setChecked={callback} />)
    expect(props.checked).toBe(true)
    fireEvent.click(getByRole('checkbox'))
    expect(props.checked).toBe(false)
    rerender(<CheckboxInput {...props} setChecked={callback} />)
    fireEvent.click(getByRole('checkbox'))
    expect(props.checked).toBe(true)
    expect(callback).toBeCalledTimes(2)
  })
})
