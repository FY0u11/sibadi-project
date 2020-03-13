import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from '../../components/Navbar'
import Login from './Login'
import Register from './Register'

const paths = {
  '/authorization/register': true
}

const Authorization = ({ user }) => {
  return !user ? (
    <div className="row">
      <Navbar
        basename="/authorization"
        list={[
          { name: 'Login', icon: 'FaSignInAlt' },
          { name: 'Register', icon: 'FaUserPlus' }
        ]}
      />
      <Route exact path="/authorization/login">
        <Login />
      </Route>
      <Route exact path="/authorization/register">
        <Register />
      </Route>
      {!paths[useLocation().pathname] && <Redirect to="/authorization/login" />}
    </div>
  ) : (
    <Redirect to="/main" />
  )
}

const putStateToProps = state => ({ user: state.root.user })

export default connect(putStateToProps)(Authorization)
