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

        {/* Stats / Features Layout */}
        <div className="pi-stats-grid grid grid-cols-1 md:grid-cols-3 md:divide-x md:border-x border-[#DEDEDE]">

          {/* Feature 1 */}
          <div className="pi-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 lg:px-12 py-6 md:py-4 group flex-1">
            <h3 className="font-inter text-[28px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-2 md:mb-3">
              Up to 50%
            </h3>
            <p className="font-inter text-[16px] md:text-[32px] font-light leading-[24px] md:leading-[48px] text-black mb-2 md:mb-14 w-full">
              Capital Subsidy
            </p>
            <p className="font-inter text-[16px] font-light leading-[24px] md:leading-[29px] text-black md:max-w-[85%]">
              Available under National Horticulture Board schemes for eligible projects.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="pi-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 lg:px-12 py-6 md:py-4 group flex-1">
            <h3 className="font-inter text-[28px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-2 md:mb-3">
              3% <span className="text-[20px] md:text-[32px] font-light text-black tracking-normal inline-block ml-1">Interest Subsidy</span>
            </h3>
            <p className="font-inter text-[16px] md:text-[32px] font-light leading-[24px] md:leading-[48px] text-black mb-2 md:mb-14 w-full">
              Available
            </p>
            <p className="font-inter text-[16px] font-normal leading-[24px] md:leading-[29px] text-black md:max-w-[85%]">
              Loan interest support available under the Agriculture Infrastructure Fund scheme.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="pi-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 lg:px-12 py-6 md:py-4 group flex-1">
            <h3 className="font-inter text-[28px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-2 md:mb-3">
              Tax-Free
            </h3>
            <p className="font-inter text-[16px] md:text-[32px] font-light leading-[24px] md:leading-[48px] text-black mb-2 md:mb-14 w-full">
              Returns
            </p>
            <p className="font-inter text-[16px] font-normal leading-[24px] md:leading-[29px] text-black md:max-w-[85%]">
              Agricultural income qualifies for tax exemptions under Indian law.
            </p>
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
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">End-to-end farm setup</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">Farm operations management</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">IoT monitoring &amp; reporting</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">Crop planning &amp; yeild optimisation</span>
                </div>

                {/* RIGHT COLUMN ORDER */}
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">Market linkage &amp; sales coordination</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">Ongoing performance oversight</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">Minimum 5 acres &amp; above</span>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">Investment in operational expenses</span>
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