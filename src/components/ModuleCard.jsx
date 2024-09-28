import React from 'react';

const ModuleCard = ({ title, logo, lessons }) => {
  return (
    <div className="group mx-auto flex h-fit w-full max-w-[426px] flex-col rounded-2xl bg-gray-900/95 bg-opacity-50 bg-gradient-to-b from-[#161E2C] to-[#111721] px-8 pb-12 shadow backdrop-blur-3xl transition-all hover:shadow-lg">
      <section className="relative">
        <img
          alt="module-logo"
          loading="lazy"
          width="500"
          height="500"
          decoding="async"
          className="absolute top-[-40px] h-auto w-[120px] transition-all group-hover:rotate-3 md:right-[-10px] lg:w-[140px]"
          srcSet={`${logo}?w=640 640w, ${logo}?w=1080 1080w`}
          src={`${logo}?w=1080`}
          style={{ color: 'transparent' }} // This may not be necessary
        />
      </section>

      <section className="mt-28 flex flex-col gap-y-4">
        <span className="text-2xl font-bold">{title}</span>
        {lessons.map((lesson, index) => (
          <section key={index} className="flex flex-row items-center space-x-2">
            <span className="place-self-start">
              <span className="bg-gradient-to-r bg-clip-text font-poppins text-xl font-semibold leading-relaxed text-transparent from-[#4CA5FF] to-[#B573F8]">
                {String(index + 9).padStart(2, '0')}
              </span>
            </span>
            <span className="paragraph-semibold items-center text-[#D0DFFF]">{lesson}</span>
          </section>
        ))}
      </section>
    </div>
  );
};

export default ModuleCard;
