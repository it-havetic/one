import React from 'react'

const Paragraph = ({children, className}) => {
  return (
    <p className={`text-custom mb-3 ${className}`}>{children}</p>
  )
}

export default Paragraph
