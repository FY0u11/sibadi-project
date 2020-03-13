import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Header from '../Header'

afterEach(cleanup)

describe('Testing Header component', () => {
  it('It should be properly rendered without user property', () => {
    const { asFragment } = render(
      <Router>
        <Header headerTitle="Header" />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot('1')
  })
  it('It should be properly rendered with user property', () => {
    const user = { username: 'John' }
    const { asFragment, getByText } = render(
      <Router>
        <Header headerTitle="Header" user={user} cartProducts={[{}, {}, {}, {}, {}]} />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot('2')
    expect(getByText('John')).toBeInTheDocument()
  })
  it('It should toggle a variable with onClick', () => {
    const user = { username: 'John' }
    let isCartShown = false
    const props = {
      user,
      cartProducts: [{}, {}, {}, {}, {}],
      isCartShown,
      setIsCartShown: bool => {
        isCartShown = bool
      }
    }
    const { getByTestId } = render(
      <Router>
        <Header {...props} />
      </Router>
    )
    expect(isCartShown).toBeFalsy()
    fireEvent.click(getByTestId('toggleCart'))
    expect(isCartShown).toBeTruthy()
  })
})
