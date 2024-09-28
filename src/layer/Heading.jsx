import React from 'react'

const Heading = ({children, className}) => {
  return (
    <div>
      <h2 className={`text-3xl font-semibold leading-[50.4px] ${className}`}>{children}</h2>
    </div>
  )
}

export default Heading
