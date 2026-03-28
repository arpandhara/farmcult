import React from 'react';

const PiMainContent = () => {
  return (
    <section className="pi-content-container py-[80px] md:py-[100px] lg:py-[140px] px-4 md:px-[68px]">
      <div className="mx-auto">
        {/* Header */}
        <div className="text-center mx-auto mb-16 md:mb-32 lg:mb-32">
          <h2 className="pi-section-title font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-text-primary mb-3 md:mb-4">
            Earn Tax-Free Without Moving a Finger
          </h2>
          <p className="pi-section-desc font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary">
            We manage setup, cultivation, monitoring, and operations enabling stable returns without day to day involvement.
          </p>
        </div>

        {/* Stats / Features Layout - Updated to match RiseOfFarming responsive style */}
        <div className="pi-stats-wrapper relative flex flex-col w-full max-w-[372px] md:max-w-none h-auto md:h-auto mx-auto">
          
          {/* Mobile vertical timeline line */}
          <div className="absolute left-[3px] top-[16px] w-[2px] h-[calc(100%-32px)] bg-[#8DC83A] block md:hidden z-0"></div>

          <div className="pi-stats-grid flex flex-col md:grid md:grid-cols-3 gap-[20px] md:gap-y-0 pt-0 md:pt-12 md: border-[#DEDEDE]">

            {/* Feature 1 */}
            <div className="stat-card relative flex flex-col gap-[12px] md:gap-[16px] pl-[20px] sm:px-6 lg:px-8 border-l-2 md:border-l-0 sm:border-r border-[#DEDEDE] w-full md:h-auto bg-transparent z-10 md:border-r-2 overflow-hidden">
              <div className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-[#8DC83A] rounded-full block md:hidden"></div>
              
              <h3 className="font-inter text-[22px] min-[400px]:text-[24px] sm:text-[28px] md:text-[clamp(18px,2vw,28px)] xl:text-[32px] font-medium leading-[1.2] md:leading-normal text-black w-full md:w-auto md:h-auto m-0 whitespace-nowrap">
                Up to 50%
              </h3>
              <p className="font-inter text-[16px] md:text-[clamp(16px,1.5vw,24px)] xl:text-[32px] font-light leading-[24px] md:leading-[32px] text-black w-full whitespace-nowrap mb-0 md:mb-4">
                Capital Subsidy
              </p>
              <p className="font-inter text-[12px] min-[400px]:text-[13px] sm:text-[14px] md:text-[clamp(11px,1.2vw,15px)] xl:text-[16px] whitespace-nowrap font-normal leading-[1.4] md:leading-[1.6] text-black w-full md:w-auto md:h-auto m-0">
                Available under National Horticulture<br />Board schemes for eligible projects.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="stat-card relative flex flex-col gap-[12px] md:gap-[16px] pl-[20px] sm:px-6 lg:px-8 border-l-0 sm:border-r border-[#DEDEDE] w-full md:h-auto bg-transparent z-10 md:border-r-2 overflow-hidden">
              <div className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-[#8DC83A] rounded-full block md:hidden"></div>
              
              <h3 className="font-inter text-[22px] min-[400px]:text-[24px] sm:text-[28px] md:text-[clamp(18px,2vw,28px)] xl:text-[32px] font-medium leading-[1.2] md:leading-normal text-black w-full md:w-auto md:h-auto m-0 whitespace-nowrap">
                3% <span className="text-[16px] md:text-[clamp(14px,1.5vw,20px)] xl:text-[20px] font-light text-black tracking-normal inline-block ml-1">Interest Subsidy</span>
              </h3>
              <p className="font-inter text-[16px] md:text-[clamp(16px,1.5vw,24px)] xl:text-[32px] font-light leading-[24px] md:leading-[32px] text-black w-full whitespace-nowrap mb-0 md:mb-4">
                Available
              </p>
              <p className="font-inter text-[12px] min-[400px]:text-[13px] sm:text-[14px] md:text-[clamp(11px,1.2vw,15px)] xl:text-[16px] whitespace-nowrap font-normal leading-[1.4] md:leading-[1.6] text-black w-full md:w-auto md:h-auto m-0">
                Loan interest support available under the<br />Agriculture Infrastructure Fund scheme.
              </p>
            </div>

            {/* Feature 3 - No right border */}
            <div className="stat-card relative flex flex-col gap-[12px] md:gap-[16px] pl-[20px] sm:px-6 lg:px-8 w-full md:h-auto bg-transparent z-10 border-[#DEDEDE] overflow-hidden">
              <div className="absolute left-0 top-[12px] w-[8px] h-[8px] bg-[#8DC83A] rounded-full block md:hidden"></div>
              
              <h3 className="font-inter text-[22px] min-[400px]:text-[24px] sm:text-[28px] md:text-[clamp(18px,2vw,28px)] xl:text-[32px] font-medium leading-[1.2] md:leading-normal text-black w-full md:w-auto md:h-auto m-0 whitespace-nowrap">
                Tax-Free
              </h3>
              <p className="font-inter text-[16px] md:text-[clamp(16px,1.5vw,24px)] xl:text-[32px] font-light leading-[24px] md:leading-[32px] text-black w-full whitespace-nowrap mb-0 md:mb-4">
                Returns
              </p>
              <p className="font-inter text-[12px] min-[400px]:text-[13px] sm:text-[14px] md:text-[clamp(11px,1.2vw,15px)] xl:text-[16px] whitespace-nowrap font-normal leading-[1.4] md:leading-[1.6] text-black w-full md:w-auto md:h-auto m-0">
                Agricultural income qualifies for tax<br />exemptions under Indian law.
              </p>
            </div>

          </div>
        </div>

        {/* What's Included Section */}
        <div className="pi-whats-included mt-24 md:mt-16 pt-16 md:pt-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center">
            <div className="w-full lg:w-[58%]">
              <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-6">
                What's Included in our<br className="hidden md:block" /> Passive Income Solution?
              </h2>

              <p className="font-inter text-[16px] md:text-[15px] md:max-w-[80%] font-normal leading-[26px] md:leading-[29px] text-text-primary mb-6">
                Farmcult's passive income model is designed for investors and landowners who want exposure to modern agriculture without managing daily farm operations.
              </p>

              <p className="font-inter text-[16px] md:text-[15px] md:max-w-[79%] font-normal leading-[26px] md:leading-[29px] text-text-primary mb-8 md:mb-10">
                We handle the setup, cultivation, monitoring, and farm management while you benefit from a structured agricultural asset.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6">

                {/* LEFT COLUMN ORDER */}
                {/* Added overflow-hidden to all bullet point wrappers */}
                <div className="flex items-start gap-3 overflow-hidden">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {/* Added whitespace-nowrap and clamp() */}
                  <span className="font-inter text-[15px] lg:text-[clamp(12px,1.1vw,15px)] xl:text-[15px] leading-[26px] text-text-primary font-normal whitespace-nowrap">End-to-end farm setup</span>
                </div>

                <div className="flex items-start gap-3 overflow-hidden">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] lg:text-[clamp(12px,1.1vw,15px)] xl:text-[15px] leading-[26px] text-text-primary font-normal whitespace-nowrap">Farm operations management</span>
                </div>

                <div className="flex items-start gap-3 overflow-hidden">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] lg:text-[clamp(12px,1.1vw,15px)] xl:text-[15px] leading-[26px] text-text-primary font-normal whitespace-nowrap">IoT monitoring &amp; reporting</span>
                </div>

                <div className="flex items-start gap-3 overflow-hidden">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] lg:text-[clamp(12px,1.1vw,15px)] xl:text-[15px] leading-[26px] text-text-primary font-normal whitespace-nowrap">Crop planning &amp; yeild optimisation</span>
                </div>

                {/* RIGHT COLUMN ORDER */}
                <div className="flex items-start gap-3 overflow-hidden">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] lg:text-[clamp(12px,1.1vw,15px)] xl:text-[15px] leading-[26px] text-text-primary font-normal whitespace-nowrap">Market linkage &amp; sales coordination</span>
                </div>

                <div className="flex items-start gap-3 overflow-hidden">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] lg:text-[clamp(12px,1.1vw,15px)] xl:text-[15px] leading-[26px] text-text-primary font-normal whitespace-nowrap">Ongoing performance oversight</span>
                </div>

                <div className="flex items-start gap-3 overflow-hidden">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] lg:text-[clamp(12px,1.1vw,15px)] xl:text-[15px] leading-[26px] text-text-primary font-normal whitespace-nowrap">Minimum 5 acres &amp; above</span>
                </div>

                <div className="flex items-start gap-3 overflow-hidden">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] lg:text-[clamp(12px,1.1vw,15px)] xl:text-[15px] leading-[26px] text-text-primary font-normal whitespace-nowrap">Investment in operational expenses</span>
                </div>

              </div>
            </div>

            <div className="w-full lg:w-[555px] lg:h-[468px] mt-10 lg:mt-0">
              <div className="pb-[60%] lg:pb-[70%] relative w-full h-full overflow-hidden rounded-[16px] group">
                <img
                  src="/passiveIncome/piSolutions.jpg"
                  alt="Passive Income Farming"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiMainContent;