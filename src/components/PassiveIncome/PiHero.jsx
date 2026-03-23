import React from 'react';

const PiHero = () => {
  return (
    <section className="pi-hero-container relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
      <div
        className="pi-hero-bg absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 origin-bottom"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/passiveIncome/piHeader.jpg')" }}
      ></div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[5%] mt-10 text-left]">
        <div className="max-w-4xl">
        <h1 className="pi-hero-title  text-white text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] mb-6 tracking-tight">
          Passive Income Model
        </h1>
        <p className="pi-hero-desc text-white/90 text-[clamp(1.1rem,1.5vw,1.25rem)] font-medium leading-[1.6] max-w-2xl">
          Invest in a hydroponic farm while Farmcult manages operations end-to-end.
        </p>
      </div>
      </div>
    </section>
  );
};

export default PiHero;
