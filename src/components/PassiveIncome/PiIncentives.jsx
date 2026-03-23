import React from 'react';

const PiIncentives = () => {
  return (
    <section className="py-[20px] md:py-[120px] lg:py-[120px] bg-[#F7F7F7] px-4 md:px-[68px]">
      <div className="mx-auto">
        {/* 1. Removed 'items-center' so the columns stretch to equal heights naturally */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* 2. Added flex, flex-col, and justify-between to spread the text apart */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            {/* Grouped the top text together */}
            <div>
              <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-6">
                Government Incentives<br />Reduce Your Initial Investment
              </h2>
              <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary md:max-w-[70%]">
                Eligible hydroponic projects can receive capital subsidies of up to 50%, helping reduce initial investment and improve long-term viability.
              </p>
            </div>
            
            {/* This will now sit at the very bottom, aligned with the bottom of the image */}
            <p className="font-inter text-[13px] md:text-[14px] text-[#888] mt-8 lg:mt-0">
              *Availability depends on project eligibility and applicable state or central government schemes.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            {/* 3. Removed 'group' from parent and hover/transform classes from the image */}
            <div className="pb-[60%] lg:pb-[65%] relative w-full overflow-hidden rounded-3xl">
              <img
                src="/GovernmentIncentives.jpg"
                alt="Government Incentives"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PiIncentives;