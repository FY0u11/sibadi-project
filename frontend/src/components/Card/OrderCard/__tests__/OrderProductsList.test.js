import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import OrderProductsList from '../OrderProductsList'

afterEach(cleanup)

describe('Testing OrderProductsList component', () => {
  it('It should be properly rendered', () => {
    const orderProducts = [
      { id: 2, name: 'product 1', price: 100 },
      { id: 3, name: 'product 2', price: 250 }
    ]
    const { asFragment } = render(<OrderProductsList orderProducts={orderProducts} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
