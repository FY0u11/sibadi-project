import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from '../../components/Navbar'
import Profile from './Profile'
import Products from './Products'
import Delivery from './Delivery'
import Orders from './Orders'
import Requests from './Requests'
import Logout from './Logout'

const Main = ({ user }) => {
  if (user) {
    const availablePaths = {
      '/main/profile': true,
      '/main/profile/edit': true,
      '/main/profile/changePassword': true,
      '/main/products': user.roles.includes('client'),
      '/main/orders': user.roles.includes('client'),
      '/main/delivery': user.roles.includes('courier'),
      '/main/requests': user.roles.includes('courier'),
      '/main/logout': true
    }

    const navbarList = []
    if (user.roles.includes('client')) {
      navbarList.push({ name: 'Products', icon: 'FaBox' })
      navbarList.push({ name: 'Orders', icon: 'FaHourglassEnd' })
    }
    if (user.roles.includes('courier')) {
      navbarList.push({ name: 'Delivery', icon: 'FaBars' })
      navbarList.push({ name: 'Requests', icon: 'FaHandHoldingUsd' })
    }

    return (
      <div className="row">
        <Navbar basename="/main" list={navbarList} />
        <Route path="/main/profile">
          <Profile />
        </Route>
        {user.roles.includes('client') && (
          <>
            <Route exact path="/main/products">
              <Products />
            </Route>
            <Route exact path="/main/orders">
              <Orders />
            </Route>
          </>
        )}
        {user.roles.includes('courier') && (
          <>
            <Route exact path="/main/delivery">
              <Delivery />
            </Route>
            <Route exact path="/main/requests">
              <Requests />
            </Route>
          </>
        )}
        <Route exact path="/main/logout">
          <Logout />
        </Route>
        {!availablePaths[useLocation().pathname] &&
          (user.roles.includes('client') ? (
            <Redirect to="/main/products" />
          ) : (
            <Redirect to="/main/delivery" />
          ))}
      </div>
    )
  } else return <Redirect to="/authorization" />
}

const putStateToProps = state => ({ user: state.root.user })

export default connect(putStateToProps)(Main)
