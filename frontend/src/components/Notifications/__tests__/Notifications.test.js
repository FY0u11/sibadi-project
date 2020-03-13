import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Notifications from '../Notifications'

afterEach(cleanup)

describe('Testing Notifications component', () => {
  it('It should be properly rendered', async () => {
    const notifications = [
      {
        id: 1,
        level: 'success',
        title: 'Test notification 1',
        message: 'Test message 1'
      },
      {
        id: 2,
        level: 'success',
        title: 'Test notification 2',
        message: 'Test message 2'
      }
    ]
    const { asFragment } = render(<Notifications notifications={notifications} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
