import React from 'react'

const Img = ({src, className}) => {
  return (
    <section className={`my-10 overflow-hidden ${className}`}>
        <img
          alt="image missing"
          loading="lazy"
          width="100%"
          height="0"
          decoding="async"
          src={`https://www.jsmastery.pro/${src}`}
          style={{ color: 'transparent' }}
        />
      </section>
  )
}

export default Img
