import React from 'react'
import { connect } from 'react-redux'

import { closeNotification } from '../../store/components/notifications/actions'

import Notifications from './Notifications'

const NotificationsContainer = ({ ...props }) => <Notifications {...props} />

const putStateToProps = state => ({ notifications: state.notifications.notifications })
const putActionsToProps = { closeNotification }

export default connect(putStateToProps, putActionsToProps)(NotificationsContainer)
