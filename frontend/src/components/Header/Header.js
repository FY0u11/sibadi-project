import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdCart } from 'react-icons/io'
import { FaSignOutAlt, FaUser } from 'react-icons/fa'

import './styles.css'
import CartIconNumber from './CartIconNumber'

const Header = ({ user, isCartShown, setIsCartShown, cartProducts, headerTitle }) => {
  return (
    <header className="navbar fixed-top navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            Welcome to <strong>Azamon</strong>
          </Link>
          <div className="my-page-title">{headerTitle}</div>
        </div>
        <div className="navbar-brand">
          {user && (
            <div>
              <Link to="/main/profile">
                <strong>{user.username}</strong>
                <FaUser className="my-icon" />
              </Link>
              <Link
                to="#"
                className="my-icon my-cart-icon-container"
                onClick={() => setIsCartShown(!isCartShown)}
                data-testid="toggleCart"
              >
                <IoMdCart className="my-cart-icon" />
                <CartIconNumber
                  className="my-cart-icon-number"
                  number={cartProducts.length}
                  radius="6"
                />
              </Link>
              <div className="my-logout-icon">
                <Link to="/main/logout">
                  <FaSignOutAlt />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
