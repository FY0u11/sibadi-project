import React from 'react'

const FormGroup = ({ type, name, label, message, value, setValue }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label}
        <strong> {message}</strong>
      </label>
      <input
        id={name}
        type={type}
        className="form-control"
        placeholder={`Enter ${label.toLowerCase()}`}
        value={value}
        onChange={event => setValue(`${name}Field`, event.target.value)}
      />
    </div>
  )
}

export default FormGroup
