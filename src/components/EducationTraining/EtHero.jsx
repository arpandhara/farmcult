import React from 'react';

const EtHero = () => {
  return (
    <section className="et-hero-container relative h-[45vh] flex items-center justify-center overflow-hidden pt-20">
      <div
        className="et-hero-bg absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 origin-bottom"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/passiveIncome/piHeader.jpg')" }}
      ></div>

      <div className="relative z-10 text-left px-4 md:px-[5%] mt-10 w-[100%]">
        <h1 className="et-hero-title font-inter text-[32px] md:text-[48px] font-medium leading-[40px] md:leading-[66px] text-white mb-6 md:mb-2">
          Education & Training
        </h1>
        <p className="et-hero-desc font-inter text-[16px] md:text-[18px] leading-[24px] md:leading-[36px] text-white/90 font-normal">
          From school students to aspiring growers, Farmcult offers hands-on exposure to modern hydroponic farming.
        </p>
      </div>
    </section>
  );
};

export default EtHero;
