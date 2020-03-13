import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import {
  FaUserPlus,
  FaBars,
  FaSignOutAlt,
  FaBox,
  FaSignInAlt,
  FaHandHoldingUsd,
  FaHourglassEnd
} from 'react-icons/fa'

import './styles.css'

const icons = {
  FaUserPlus,
  FaBars,
  FaSignInAlt,
  FaSignOutAlt,
  FaBox,
  FaHandHoldingUsd,
  FaHourglassEnd
}

const Navbar = ({ basename, list, headerTitle }) => {
  return (
    <div className="col-3 bg-light my-nav-container">
      <nav className="nav flex-column nav-fill nav-pills">
        {list.map((element, index) => {
          const Icon = icons[element.icon]
          return (
            <Link
              to={`${basename}/${element.name.toLowerCase()}`}
              className={classnames(
                'nav-link',
                { dark: headerTitle && headerTitle.startsWith(element.name) },
                { 'text-dark': headerTitle && !headerTitle.startsWith(element.name) }
              )}
              key={index}
            >
              <Icon className="my-navbar-icon" />
              {element.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export default Navbar
