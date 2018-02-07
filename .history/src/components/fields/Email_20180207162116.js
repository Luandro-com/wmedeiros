import React from 'react'

export default ({ label, value, onChange, errorMessage }) => (
  <div>
    <p>
      {label}
    </p>
    <div>
      <img src={value} />
    </div>
    <TextField
    value={value}
    hintText='Image Url'
    onChange={(event) => onChange(event.target.value)} />
    <p>
      {errorMessage}
    </p>
  </div>  
)