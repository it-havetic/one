import React from 'react'
import Heading from './Heading'

const QuoteComponent = ({children}) => {
  return (
    <section className='my-20'>
        <div className="relative z-[1] flex w-full items-center justify-center !w-[87%] self-center">
          {/* Left SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 57 56"
            fill="none"
            className="scale-75 sm:inline-block sm:scale-100 translate-y-[-15px] absolute left-[-20px] z-[-1]"
          >
            <g clipPath="url(#clip0_1135_1770)">
              <path
                d="M51.25 28H42.5V21C42.5 17.1391 45.6391 14 49.5 14H50.375C51.8297 14 53 12.8297 53 11.375V6.125C53 4.67031 51.8297 3.5 50.375 3.5H49.5C39.8312 3.5 32 11.3312 32 21V47.25C32 50.1484 34.3516 52.5 37.25 52.5H51.25C54.1484 52.5 56.5 50.1484 56.5 47.25V33.25C56.5 30.3516 54.1484 28 51.25 28ZM19.75 28H11V21C11 17.1391 14.1391 14 18 14H18.875C20.3297 14 21.5 12.8297 21.5 11.375V6.125C21.5 4.67031 20.3297 3.5 18.875 3.5H18C8.33125 3.5 0.5 11.3312 0.5 21V47.25C0.5 50.1484 2.85156 52.5 5.75 52.5H19.75C22.6484 52.5 25 50.1484 25 47.25V33.25C25 30.3516 22.6484 28 19.75 28Z"
                fill="#242C38"
              />
            </g>
            <defs>
              <clipPath id="clip0_1135_1770">
                <rect width="56" height="56" fill="white" transform="translate(0.5)" />
              </clipPath>
            </defs>
          </svg>

          {/* Quote Text */}
          <Heading>
            {children}
          </Heading>

          {/* Right SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            viewBox="0 0 57 56"
            fill="none"
            className="scale-75 sm:inline-block sm:scale-100 translate-y-[15px] absolute right-[-20px] z-[-1]"
          >
            <g clipPath="url(#clip0_1135_1772)">
              <path
                d="M5.75 28H14.5V35C14.5 38.8609 11.3609 42 7.5 42H6.625C5.17031 42 4 43.1703 4 44.625V49.875C4 51.3297 5.17031 52.5 6.625 52.5H7.5C17.1688 52.5 25 44.6688 25 35V8.75C25 5.85156 22.6484 3.5 19.75 3.5H5.75C2.85156 3.5 0.5 5.85156 0.5 8.75V22.75C0.5 25.6484 2.85156 28 5.75 28ZM37.25 28H46V35C46 38.8609 42.8609 42 39 42H38.125C36.6703 42 35.5 43.1703 35.5 44.625V49.875C35.5 51.3297 36.6703 52.5 38.125 52.5H39C48.6688 52.5 56.5 44.6688 56.5 35V8.75C56.5 5.85156 54.1484 3.5 51.25 3.5H37.25C34.3516 3.5 32 5.85156 32 8.75V22.75C32 25.6484 34.3516 28 37.25 28Z"
                fill="#242C38"
              />
            </g>
            <defs>
              <clipPath id="clip0_1135_1772">
                <rect width="56" height="56" fill="white" transform="matrix(-1 0 0 -1 56.5 56)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </section>
  )
}

export default QuoteComponent
