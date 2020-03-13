import React from 'react'

const CheckboxInput = ({ name, checked, setChecked, disabled }) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="checkBox"
        id={name}
        disabled={disabled}
        checked={checked}
        onChange={() => {
          if (!checked) setChecked(true)
          else setChecked(false)
        }}
      />
      <label className="form-check-label" htmlFor={name}>
        {name}
      </label>
    </div>
  )
}

export default CheckboxInput
