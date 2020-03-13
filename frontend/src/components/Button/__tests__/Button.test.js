import React from 'react'
import { render, cleanup, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from '../Button'
import ButtonContainer from '../'

afterEach(cleanup)

describe('Testing Button component', () => {
  it('It should be properly rendered', async () => {
    const { getByText, asFragment } = render(<Button>Click</Button>)
    expect(asFragment()).toMatchSnapshot()
    expect(getByText('Click')).toBeInTheDocument()
    expect(getByText('Click')).toBeEnabled()
  })
  it('It should be initially disabled', async () => {
    const { getByText } = render(<Button disabled>Click</Button>)
    expect(getByText('Click')).toBeDisabled()
  })
  it('It should become disabled while doing async task and enabled when it is done', async () => {
    const action = () => new Promise(resolve => setTimeout(resolve, 300))
    const button = render(<ButtonContainer action={action}>Click</ButtonContainer>).getByText(
      'Click'
    )
    await act(async () => {
      expect(button).toBeEnabled()
      fireEvent.click(button)
      await new Promise(resolve => setTimeout(resolve, 200))
      expect(button).toBeDisabled()
      await new Promise(resolve => setTimeout(resolve, 100))
      expect(button).toBeEnabled()
    })
  })
})
