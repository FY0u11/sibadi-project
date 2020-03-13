import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Navbar from '../Navbar'

afterEach(cleanup)

describe('Testing Navbar component', () => {
  it('It should be properly rendered', () => {
    const list = [
      {
        icon: 'FaUserPlus',
        name: 'Navbar item 1'
      },
      {
        icon: 'FaUserPlus',
        name: 'Navbar item 2'
      }
    ]
    const { asFragment } = render(
      <Router>
        <Navbar list={list} headerTitle="Navbar item 1" />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
