import React from 'react';

const WfcFoundation = () => {
  return (
    <section className="wfc-foundation-section py-[64px] px-[5%] pb-[8rem] max-w-[1600px] mx-auto">
      <div className="wfc-foundation-inner grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-[100px] items-stretch">
        <div className="wfc-foundation-text-col">
          <h2 className="wfc-section-heading text-[clamp(2rem,3.5vw,3rem)] font-medium mb-8 tracking-[-0.02em] text-black">Our Foundation</h2>
          <div className="wfc-founder-tag inline-flex py-2 px-[1.2rem] bg-accent/25 text-text-primary rounded-full font-normal text-[0.9rem] mb-10">
            <span>Pritpal Singh, Founder &amp; CEO</span>
          </div>
          <p className="wfc-foundation-desc text-[1.1rem] text-text-primary leading-[2] mb-8">
            Farmcult was founded in 2020 by Pritpal Singh, an MBA graduate from IMT Nagpur who
            chose to leave the corporate world to pursue agriculture as a full-time vocation.
            Driven by a belief in technology-enabled farming, Pritpal saw hydroponics not as a
            trend but as a necessary evolution in how food is grown. That belief became the
            foundation of Farmcult.
          </p>
          <p className="wfc-foundation-desc text-[1.1rem] text-text-primary leading-[2] mb-0">
            Today, Farmcult builds structured, scalable farming models designed to be both
            sustainable and profitable, led with a focus on innovation, discipline, and long-term
            agricultural impact.
          </p>
        </div>
        <div className="wfc-foundation-image-col h-full">
          <img 
            src="/whyFarmCult/founderimg1.jpg" 
            alt="Pritpal Singh, Founder & CEO"
            className="w-full h-full object-cover rounded-2xl shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default WfcFoundation;