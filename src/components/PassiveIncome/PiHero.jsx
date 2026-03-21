import React from 'react';

const PiHero = () => {
  return (
    <section className="pi-hero-container relative h-[45vh] flex items-center justify-center overflow-hidden pt-20">
      <div
        className="pi-hero-bg absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 origin-bottom"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/passiveIncome/piHeader.jpg')" }}
      ></div>

      <div className="relative z-10 text-leftleft px-4 md:px-[5%] mt-10 w-[100%]">
        <h1 className="pi-hero-title font-inter text-[32px] md:text-[48px] font-medium leading-[40px] md:leading-[66px] text-white mb-6 md:mb-2">
          Passive Income Model
        </h1>
        <p className="pi-hero-desc font-inter text-[16px] md:text-[18px] leading-[24px] md:leading-[36px] text-white/90 font-normal">
          Invest in a hydroponic farm while Farmcult manages operations end-to-end.
        </p>
      </div>
    </section>
  );
};

export default PiHero;
