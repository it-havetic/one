import React from 'react';

const HeroSection = () => {
  return (
    <section className="">
      <div className="text-center flex flex-col items-center">
      <p className="font-semibold text-[#00ffb3b8] text-center uppercase tracking-[2px]">
        for developers who want to stand out and become irreplaceable
      </p>
      <h1 className="text-[64px] font-bold leading-[67.2px] text-center">
        Become a top 1% <span className="text-blue-500">Next.js 14 </span> developer in only one course
      </h1>
      <p className="text-custom">
        Escape the shallow content & dive deep into the hottest tech of 2024
      </p>
      <img
        alt="Stackoverflow Clone"
        className="w-[95%] sm:mt-5 sm:w-[55%]"
        src="/stackoverflow-clone-2.webp"
      />
      <div className="flex items-center gap-x-2 gap-y-4 pt-5">
        <div className="flex items-center sm:font-semibold font-semibold gap-2 text-white/80">
          <img alt="checkbox" className="w-5 h-5" src="https://www.jsmastery.pro/assets/courses/icons/checkbox.svg" />
          Up to date:
        </div>
        <div className="flex items-center justify-center xs:paragraph-semibold body-semibold rounded-md bg-[#7affd736] px-2.5 py-1">
          <span className="text-[#7affd7fd] font-semibold">August 09, 2024</span>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
