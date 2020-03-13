import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import PageNav from '../PageNav'

afterEach(cleanup)

describe('Testing Card component', () => {
  it('It should be properly rendered with prev button in disabled state', () => {
    const { asFragment, getByText } = render(<PageNav page={1} />)
    expect(asFragment()).toMatchSnapshot('1')
    expect(getByText('<')).toBeDisabled()
    expect(getByText('>')).toBeEnabled()
  })
  it('It should be properly rendered with next button in disabled state', () => {
    const { asFragment, getByText } = render(<PageNav page={2} isNextDisabled={true} />)
    expect(asFragment()).toMatchSnapshot('2')
    expect(getByText('>')).toBeDisabled()
    expect(getByText('<')).toBeEnabled()
  })
  it('It should be properly rendered with next and prev buttons both in disabled state', () => {
    const { asFragment, getByText } = render(<PageNav page={1} isNextDisabled={true} />)
    expect(asFragment()).toMatchSnapshot('3')
    expect(getByText('>')).toBeDisabled()
    expect(getByText('<')).toBeDisabled()
  })
  it('It should be properly rendered with next and prev buttons both in enabled state', () => {
    const { asFragment, getByText } = render(<PageNav page={2} />)
    expect(asFragment()).toMatchSnapshot('4')
    expect(getByText('>')).toBeEnabled()
    expect(getByText('<')).toBeEnabled()
  })
  it('Prev and next buttons should decrement and increment the current page respectively', () => {
    let page = 1
    const callback = jest.fn(v => {
      page = v
    })
    const { getByText, rerender } = render(<PageNav page={page} setPage={callback} />)
    expect(page).toBe(1)
    const nextButton = getByText('>')
    fireEvent.click(nextButton)
    expect(page).toBe(2)
    rerender(<PageNav page={page} setPage={callback} />)
    expect(page).toBe(2)
    const prevButton = getByText('<')
    fireEvent.click(prevButton)
    expect(page).toBe(1)
  })
})
