import "./FormInput.css";

import React from 'react'

export default function FormInput({ handleChange, fieldName, value}) {
    const capitalizeFirstLetter = () =>
        fieldName[0].toUpperCase() + fieldName.slice(1);
  
    return (
        <div className='formInput'>
            <input  
                onChange={handleChange}
                value={value}
                required
                />
            <label>{capitalizeFirstLetter(fieldName)}</label>
        </div>
  )
}
