import React from 'react';

const WfcHero = () => {
  return (
    <section className="wfc-hero-image-section w-full p-0 mb-[8rem]">
      <img
        src="/whyFarmCult/image1.svg"
        alt="Farmcult hydroponic farming facility"
        className="wfc-hero-image w-[100vw] h-auto rounded-none block object-cover will-change-[transform,clip-path,opacity]"
        decoding="async"
        loading="lazy"
      />
    </section>
  );
};

export default WfcHero;