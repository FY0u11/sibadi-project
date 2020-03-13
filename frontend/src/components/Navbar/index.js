import React from 'react'
import { connect } from 'react-redux'

import Navbar from './Navbar'

const NavbarContainer = ({ ...props }) => <Navbar {...props} />

const putStateToProps = state => ({ headerTitle: state.header.headerTitle })

export default connect(putStateToProps)(NavbarContainer)
