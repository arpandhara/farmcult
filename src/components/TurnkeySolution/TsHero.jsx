import React from 'react';

const TsHero = () => {
  return (
    <section className="ts-hero-container relative h-[45vh] flex items-center justify-center overflow-hidden pt-20">
      <div
        className="ts-hero-bg absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 origin-bottom"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/passiveIncome/piHeader.jpg')" }}
      ></div>

      <div className="relative z-10 text-left px-4 md:px-[5%] mt-10 w-[100%]">
        <h1 className="ts-hero-title font-inter text-[32px] md:text-[48px] font-medium leading-[40px] md:leading-[66px] text-white mb-6 md:mb-2">
          Turnkey Solution
        </h1>
        <p className="ts-hero-desc font-inter text-[16px] md:text-[18px] leading-[24px] md:leading-[36px] text-white/90 font-normal">
          Design, construction, crop planning, and operational setup. Handled end-to-end by Farmcult.
        </p>
      </div>
    </section>
  );
};

export default TsHero;
