import React from 'react'
import { connect } from 'react-redux'

import { setModal } from '../../../store/components/modal/actions'

import FillUpBudget from './FillUpBudget'
import Profile from './Profile'

const ProfileContainer = ({ user, setModal }) => {
  const fillUpBudget = async () => setModal({ title: 'Fill up budget', body: <FillUpBudget /> })

  return <Profile user={user} fillUpBudget={fillUpBudget} />
}

const putStateToProps = state => ({ user: state.root.user })
const putActionsToProps = { setModal }

export default connect(putStateToProps, putActionsToProps)(ProfileContainer)
