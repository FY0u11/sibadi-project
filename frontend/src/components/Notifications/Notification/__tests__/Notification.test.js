import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Notification from '../Notification'
import NotificationContainer from '../'

afterEach(cleanup)

describe('Testing Notification component', () => {
  it('It should be properly rendered', () => {
    const { asFragment } = render(
      <Notification title={'Test notification'} level="success" message="Test message" />
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('It should trigger callback two times', () => {
    const callback = jest.fn()
    const { getByText } = render(<Notification level={'success'} closeNotification={callback} />)
    const button1 = getByText('×')
    const button2 = getByText('Close')
    fireEvent.click(button1)
    fireEvent.click(button2)
    expect(callback).toBeCalledTimes(2)
  })
  it('The callback should be automatically triggered in 200 ms', async () => {
    const callback = jest.fn()
    const { getByText } = render(
      <NotificationContainer
        id={'Some id'}
        delay={0.2}
        level={'success'}
        closeNotification={callback}
      />
    )
    expect(callback).toBeCalledTimes(0)
    await new Promise(resolve => setTimeout(resolve, 200))
    fireEvent.click(getByText('Close'))
    expect(callback).toBeCalledTimes(2)
    expect(callback).toBeCalledWith('Some id')
  })
})
