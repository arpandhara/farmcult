import React from 'react';

const WfcFeatures = () => {
  return (
    <section className="wfc-features-section px-4 md:px-[5%] pb-16 md:pb-[6rem] max-w-[1600px] mx-auto">
      <div className="wfc-features-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-0">
        
        <div className="wfc-feature-card py-10 px-6 sm:px-8 md:py-12 xl:py-16 xl:px-12 flex flex-col transition-colors duration-300 ease-in-out">
          <div className="wfc-feature-icon w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 md:mb-6">
            <img src="/icons/icon 1.svg" alt="Technology-led icon" className="w-full h-full" />
          </div>
          <h3 className="wfc-feature-title text-[1.5rem] md:text-[2rem] font-normal mb-6 md:mb-[60px] text-black">Technology-led</h3>
          <p className="wfc-feature-desc text-[1rem] md:text-[1.1rem] text-text-primary leading-[1.8] md:leading-[2]">
            Automation, IoT monitoring, and data-based decision-making systems.
          </p>
        </div>

        <div className="wfc-feature-card py-10 px-6 sm:px-8 md:py-12 xl:py-16 xl:px-12 flex flex-col transition-colors duration-300 ease-in-out border-[#DEDEDE] border-t sm:border-t-0 sm:border-l sm:border-r xl:border-r-0 xl:border-l">
          <div className="wfc-feature-icon w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 md:mb-6">
            <img src="/icons/icon 2.svg" alt="Sustainable icon" className="w-full h-full" />
          </div>
          <h3 className="wfc-feature-title text-[1.5rem] md:text-[2rem] font-normal mb-6 md:mb-[60px] text-black">Sustainable</h3>
          <p className="wfc-feature-desc text-[1rem] md:text-[1.1rem] text-text-primary leading-[1.8] md:leading-[2]">
            Less water usage and no soil dependency, build for long-term environmental balance.
          </p>
        </div>

        <div className="wfc-feature-card py-10 px-6 sm:px-8 md:py-12 xl:py-16 xl:px-12 flex flex-col transition-colors duration-300 ease-in-out border-[#DEDEDE] border-t xl:border-t-0 xl:border-l sm:col-span-2 xl:col-span-1">
          <div className="wfc-feature-icon w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-4 md:mb-6">
            <img src="/icons/icon 3.svg" alt="Scaleable icon" className="w-full h-full" />
          </div>
          <h3 className="wfc-feature-title text-[1.5rem] md:text-[2rem] font-normal mb-6 md:mb-[60px] text-black">Scaleable</h3>
          <p className="wfc-feature-desc text-[1rem] md:text-[1.1rem] text-text-primary leading-[1.8] md:leading-[2]">
            Structured systems designed to expand smoothly from small to large farms.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WfcFeatures;