import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Card from '../'

afterEach(cleanup)

describe('Testing Card component', () => {
  it('It should be properly rendered', () => {
    const props = {
      image: 'test image',
      title: 'test title',
      body: 'test body'
    }
    const { asFragment } = render(<Card {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
