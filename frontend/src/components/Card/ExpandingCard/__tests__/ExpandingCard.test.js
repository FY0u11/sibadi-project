import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ExpandingCard from '../'

afterEach(cleanup)

describe('Testing ExpandingCard component', () => {
  it('It should be properly rendered in expanded form', () => {
    const props = {
      image: 'test image',
      title: 'test title',
      body: 'test body',
      exBody: 'expanded body',
      isExpanded: true
    }
    const { asFragment } = render(<ExpandingCard {...props} />)
    expect(asFragment()).toMatchSnapshot('1')
  })
})
