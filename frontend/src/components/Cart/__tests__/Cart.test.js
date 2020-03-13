import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Cart from '../Cart'

afterEach(cleanup)

describe('Testing Cart component', () => {
  it('It should be properly rendered', () => {
    const cartProducts = [
      { id: 2, price: 600, name: 'prodcut name 1', imagePath: 'path/1' },
      { id: 42, price: 66, name: 'prodcut name 2', imagePath: 'path/1' }
    ]
    const { asFragment } = render(<Cart cartProducts={cartProducts} />)
    expect(asFragment()).toMatchSnapshot()
  })
  it('The callback function should be called with argument 42', () => {
    const cartProducts = [{ id: 42 }]
    const callback = jest.fn()
    const { getByText } = render(<Cart cartProducts={cartProducts} onRemove={callback} />)
    const removeButton = getByText('Remove')
    fireEvent.click(removeButton)
    expect(callback).toBeCalledTimes(1)
    expect(callback).toBeCalledWith(42)
  })
})
