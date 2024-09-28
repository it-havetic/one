import React from 'react';
import Heading from './Heading';
import Img from './Img';

const DownMassage = ({children}) => {
  return (
    <div className="flex items-center justify-center mb-12 gap-3">
      <img
        alt="arrow-down"
        loading="lazy"
        width="42"
        height="42"
        decoding="async"
        className="object-contain"
        src="https://www.jsmastery.pro/assets/careers/icons/arrow_down.svg"
        style={{ color: 'transparent' }} // This may not be necessary
      />
      <Heading>{children}</Heading>
      <img
        alt="arrow-down"
        loading="lazy"
        width="42"
        height="42"
        decoding="async"
        className="object-contain"
        src="https://www.jsmastery.pro/assets/careers/icons/arrow_down.svg"
        style={{ color: 'transparent' }} // This may not be necessary
      />
    </div>
  );
};

export default DownMassage;
