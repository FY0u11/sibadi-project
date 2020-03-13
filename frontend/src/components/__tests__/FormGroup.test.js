import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import FormGroup from '../FormGroup'

afterEach(cleanup)

const props = {
  type: 'text',
  name: 'test',
  label: 'test label',
  message: 'test message',
  value: 'test value'
}

describe('Testing FormGroup component', () => {
  it('It should be properly rendered', async () => {
    const { asFragment } = render(<FormGroup {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('It should trigger callback with new input value on change event', () => {
    const callback = jest.fn()
    const { getByDisplayValue } = render(<FormGroup {...props} setValue={callback} />)
    fireEvent.change(getByDisplayValue('test value'), { target: { value: 'value 42' } })
    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith('testField', 'value 42')
  })
})
