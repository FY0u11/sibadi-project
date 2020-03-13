import React from 'react'
import { Route, Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'

import EditUserProfile from './EditUserProfile'
import ChangePassword from './ChangePassword'
import Button from '../../../components/Button'

const Profile = ({ user, fillUpBudget }) => {
  return (
    <div className="col-9 my-content-wrapper">
      <Route exact path="/main/profile">
        <h4 style={{ textAlign: 'center' }}>My profile</h4>
        <div className="my-profile-info">
          <h5>
            <strong>Username: &ensp;</strong>
            {user.username}
          </h5>
          <h5>
            <strong>Password: &ensp;</strong>*********&ensp;
            <Link to="/main/profile/changePassword">
              <FaEdit className="my-edit" style={{ marginBottom: '5px' }} />
            </Link>
          </h5>
          <h5>
            <strong>Email: &ensp;</strong>
            {user.email}
          </h5>
          <h5>
            <strong>Phone: &ensp;</strong>
            {user.phone}
          </h5>
          <h5>
            <strong>Roles: &ensp;</strong>
            {user.roles.join(', ')}
          </h5>
          <h5>
            <strong>Budget: &ensp;</strong>
            {user.budget} $&ensp;
            <small
              className="my-edit"
              style={{ textDecoration: 'underline' }}
              onClick={() => fillUpBudget()}
            >
              Fill up
            </small>
          </h5>
          <div style={{ marginTop: '20px' }}>
            <Link to="/main/profile/edit">
              <Button>Edit profile</Button>
            </Link>
          </div>
        </div>
      </Route>
      <Route path="/main/profile/edit">
        <EditUserProfile />
      </Route>
      <Route path="/main/profile/changePassword">
        <ChangePassword />
      </Route>
    </div>
  )
}

export default Profile
