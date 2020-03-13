import React from 'react'
import { Link } from 'react-router-dom'

import FormGroup from '../../../../components/FormGroup'
import Button from '../../../../components/Button'
import CheckboxInput from '../../../../components/CheckboxInput'

const EditUserProfile = ({
  usernameField,
  emailField,
  phoneField,
  roles,
  setFieldValue,
  messages,
  updateProfile
}) => {
  const dynamicData = { usernameField, emailField, phoneField }

  return (
    <div>
      <h4>Edit your profile</h4>
      <p>
        Enter a new info in the fields you want to update. Leave the field as it is if you
        aren&apos;t going to change it.
      </p>
      {['username', 'email', 'phone'].map((value, i) => {
        return (
          <FormGroup
            type="text"
            name={value}
            label={`New ${value}`}
            message={messages[value]}
            value={dynamicData[`${value}Field`]}
            setValue={setFieldValue}
            key={i}
          />
        )
      })}
      <div style={{ marginBottom: '20px' }}>
        <span style={{ display: 'block' }}>
          Edit your role. You should check at least one role.
        </span>
        {['client', 'courier', 'admin'].map((role, i) => {
          return (
            <CheckboxInput
              name={role}
              checked={roles.includes(role)}
              setChecked={isChecked => {
                if (isChecked) {
                  setFieldValue('roles', [...roles, role])
                } else {
                  if (roles.includes('client') && roles.includes('courier')) {
                    setFieldValue(
                      'roles',
                      roles.filter(r => r !== role)
                    )
                  }
                }
              }}
              disabled={role === 'admin'}
              key={i}
            />
          )
        })}
      </div>
      <Button action={updateProfile}>Update</Button>
      <Link to="/main/profile">
        <Button>Back</Button>
      </Link>
    </div>
  )
}

export default EditUserProfile
