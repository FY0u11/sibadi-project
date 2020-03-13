import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import OrderCard from '../OrderCard'

afterEach(cleanup)

const props = {
  isCancelButtonShown: true,
  body: 'test body',
  orderProducts: [
    { id: 2, name: 'product 1', price: 10 },
    { id: 3, name: 'product 2', price: 20 },
    { id: 5, name: 'product 3', price: 30 }
  ],
  order: {
    id: 42,
    price: 60,
    status: 'created',
    imagePath: 'path/1'
  },
  isExpanded: true
}

describe('Testing OrderCard component', () => {
  it('It should be properly rendered', () => {
    const { asFragment } = render(<OrderCard {...props} />)
    expect(asFragment()).toMatchSnapshot('1')
  })
  it('It should be properly rendered if order cancelled', () => {
    props.order.status = 'cancelled'
    props.isCancelButtonShown = false
    const { asFragment } = render(<OrderCard {...props} />)
    expect(asFragment()).toMatchSnapshot('2')
  })
})
