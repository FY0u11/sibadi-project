import { useEffect } from 'react'
import { connect } from 'react-redux'

import clearCookie from '../../utils/clearCookie'
import { logout } from '../../store/actions'

const Logout = ({ logout }) => {
  useEffect(() => {
    clearCookie()
    logout()
  }, [])

  return null
}

const putActionsToProps = { logout }

export default connect(null, putActionsToProps)(Logout)
