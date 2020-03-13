import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Modal from '../Modal'

afterEach(cleanup)

const modal = { title: 'Modal title', body: 'Modal body' }

describe('Testing Modal component', () => {
  it('It should be properly rendered', () => {
    const { asFragment } = render(<Modal modal={modal} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('It should trigger on mouse down event', () => {
    const callback = jest.fn()
    const { container, getByText } = render(<Modal modal={modal} closeModal={callback} />)
    const modalContainer = container.children.item(0)
    const closeButton = getByText('×')
    expect(modalContainer).toHaveClass('my-container')
    expect(closeButton).toHaveClass('close')
    fireEvent.mouseDown(modalContainer)
    fireEvent.click(closeButton)
    expect(callback).toBeCalledTimes(2)
  })
})
