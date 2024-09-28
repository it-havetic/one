import React from 'react';

const DetailSection = () => {
  return (
    <section id="details" className="flex-start mt-9 w-full !max-w-[734px] flex-col gap-2 sm:gap-5">
      <h3 className="base-semibold sm:heading3 text-center w-[345px] max-sm:!leading-[26.4px] sm:w-full my-2 sm:mb-3 sm:mt-6">
        A whole new approach to learning
      </h3>
      <div className="body-regular sm:paragraph-regular w-full text-white-800 flex-start mt-9 w-full flex-col gap-[22px] sm:mt-7 sm:gap-[27px]">
        <p className="!font-bold">Next.js 13 & 14 are new. There is no good way to learn them out there.</p>
        <p>Every piece of content you see is basic.</p>
        <p>It doesn’t teach you the best practices.</p>
        <p>You don’t want to read the never-ending docs or 7153 articles you need to learn it all.</p>
      </div>
    </section>
  );
};

export default DetailSection;
