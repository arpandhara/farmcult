import React from 'react';

const WfcRealStories = () => {
  return (
    <section className="ts-content-container py-[80px] md:py-[100px] bg-white lg:py-[100px] px-4 md:px-[68px]">
      <div className="mx-auto ts-section-content">
        <div className="flex flex-col lg:flex-row-reverse gap-12 lg:gap-28 items-center">

          {/* CONTENT */}
          <div className="w-full lg:w-[58%]">
            <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-8">
              Real Stories With Real Outcomes
            </h2>

            <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-primary mb-6">
              From concept to execution, we ensure consistency and depth across every engagement. Here’s how our clients describe their experience with Farmcult.
            </p>

            {/* BULLETS */}
            <div className="flex flex-col gap-y-5 mt-8 md:mt-10">
              {[
                "Precision-led execution at every stage",
                "Built for scale and long-term viability",
                "Sustainability at the core of every solution",
                "Seamless journey from concept to execution",
                "Trusted partnerships built on transparency",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-[#89C74A] mt-[2px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-[#475467] font-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* IMAGE */}
          <div className="w-full lg:w-[455px] lg:h-[450px] mt-10 lg:mt-0">
            <div className="relative w-full h-full overflow-hidden rounded-[16px]">
              <img 
                src="/RealStories.jpg" 
                alt="Client Story" 
                className="w-full h-full object-cover rounded-[16px]"
              />
              <div className="absolute inset-0 bg-black/5 rounded-[16px]"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WfcRealStories;