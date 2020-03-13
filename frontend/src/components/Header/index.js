import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { setHeaderTitle } from '../../store/components/header/actions'
import { setIsCartShown } from '../../store/components/cart/actions'

import Header from './Header'

const headerTitles = {
  '/main/profile': 'Profile',
  '/main/profile/edit': 'Profile > Edit profile',
  '/main/profile/changePassword': 'Profile > Change password',
  '/main/products': 'Products',
  '/main/delivery': 'Delivery',
  '/main/orders': 'Orders',
  '/main/requests': 'Requests',
  '/authorization/login': 'Login',
  '/authorization/register': 'Register'
}

const HeaderContainer = ({ setHeaderTitle, ...props }) => {
  const currentLocation = useLocation()

  useEffect(() => {
    setHeaderTitle(headerTitles[currentLocation.pathname])
  }, [currentLocation])

  return <Header {...props} />
}

const putStateToProps = state => ({
  user: state.root.user,
  isCartShown: state.cart.isCartShown,
  cartProducts: state.cart.cartProducts,
  headerTitle: state.header.headerTitle
})

const putActionsToProps = { setHeaderTitle, setIsCartShown }

export default connect(putStateToProps, putActionsToProps)(HeaderContainer)
