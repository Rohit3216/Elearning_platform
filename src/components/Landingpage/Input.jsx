import React from 'react'

const Input = ({type,label,className,...props}) => {
  return (
    
      <div>
            <label htmlFor={label} className={`block text-sm font-medium text-gray-600 ${className}`}>{label}</label>
            <input
              id="email"
              type={type}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
             {...props}
            />
          </div>
  )
}

export default Input;