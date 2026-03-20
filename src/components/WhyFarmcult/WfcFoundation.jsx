import React from 'react';

const WfcFoundation = () => {
  return (
    <section className="wfc-foundation-section py-10 px-4 md:py-16 md:px-[5%] pb-16 md:pb-[8rem] max-w-[1600px] mx-auto">
      <div className="wfc-foundation-inner grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-12 lg:gap-[100px] items-stretch">
        <div className="wfc-foundation-text-col md:max-w-[600px]">
          <h2 className="wfc-section-heading text-[24px] md:text-[32px] leading-[32px] md:leading-[48px] font-medium mb-6 md:mb-8 text-black">Our Foundation</h2>
          <div className="wfc-founder-tag inline-flex py-[2px] px-[12px] bg-accent/25 text-text-primary rounded-full font-normal text-[15px] md:text-[15px] md:leading-[29px9px] mb-8 md:mb-10">
            <span>Pritpal Singh, Founder &amp; CEO</span>
          </div>
          <p className="wfc-foundation-desc text-[16px] md:text-[15px] text-text-primary leading-[1.8] md:leading-[29px] mb-6 md:mb-8">
            Farmcult was founded in 2020 by Pritpal Singh, an MBA graduate from IMT Nagpur who
            chose to leave the corporate world to pursue agriculture as a full-time vocation.
            Driven by a belief in technology-enabled farming, Pritpal saw hydroponics not as a
            trend but as a necessary evolution in how food is grown. That belief became the
            foundation of Farmcult.
          </p>
          <p className="wfc-foundation-desc text-[16px] md:text-[15px] text-text-primary leading-[1.8] md:leading-[29px] mb-0">
            Today, Farmcult builds structured, scalable farming models designed to be both
            sustainable and profitable, led with a focus on innovation, discipline, and long-term
            agricultural impact.
          </p>
        </div>
        <div className="wfc-foundation-image-col w-full h-[300px] sm:h-[400px] lg:h-[446px] mt-4 lg:mt-0">
          <img 
            src="/whyFarmCult/founderimg1.jpg" 
            alt="Pritpal Singh, Founder & CEO"
            className="w-full h-full object-cover rounded-2xl md:rounded-[32px] shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default WfcFoundation;