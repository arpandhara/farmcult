import React from 'react';

const TsWhatsIncluded = () => {
  return (
    <section className="ts-content-container py-[80px] md:py-[100px] bg-[#F7F7F7] lg:py-[140px] px-4 md:px-[68px]">
      <div className="mx-auto ts-section-content">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center">
          <div className="w-full lg:w-[58%]">
            <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-6">
              What's Included in our<br className="hidden md:block" /> Turnkey Solution?
            </h2>

            <p className="font-inter text-[16px] md:text-[15px] md:max-w-[80%] font-normal leading-[26px] md:leading-[29px] text-text-primary mb-6">
              Farmcult's turnkey model covers every stage of setting up a high-tech hydroponic farm. From design and infrastructure to crop planning and operational readiness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6 mt-8 md:mt-10">
              {/* List Items */}
              {[
                "Farm design & layout",
                "Automation & climate control",
                "Polyhouse construction",
                "Crop planning & agronomy",
                "Hydroponic system installation",
                "Market linkages post-harvest",
                "Minimum project size of 2.5 acres",
              ].map((item, i) => (
                // Added overflow-hidden to prevent grid bleed
                <div key={i} className="flex items-start gap-3 overflow-hidden">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {/* Added whitespace-nowrap and clamp() fluid sizing */}
                  <span className="font-inter text-[15px] lg:text-[clamp(12px,1.1vw,15px)] xl:text-[15px] leading-[26px] text-text-primary font-normal whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[455px] lg:h-[426px] mt-10 lg:mt-0">
            <div className="pb-[60%] lg:pb-[70%] relative w-full h-full overflow-hidden rounded-[16px] group">
              <img 
                src="/blogs/WhyHydroponicsFarmsFail.jpg" 
                alt="Turnkey Hydroponic Farm" 
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                onError={(e) => { e.target.src = '/ourSolutionCard3.jpg'; }}
              />
              <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TsWhatsIncluded;