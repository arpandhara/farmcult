import React from 'react';

const PiIncentives = () => {
  return (
    <section className="py-[80px] md:py-[100px] lg:py-[140px] bg-white px-4 md:px-[68px]">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-text-primary mb-4 md:mb-6">
              Government Incentives<br />Reduce Your Initial Investment
            </h2>
            <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary mb-6 md:mb-8">
              Eligible hydroponic projects can receive capital subsidies of up to 50%, helping reduce initial investment and improve long-term viability.
            </p>
            <p className="font-inter text-[13px] md:text-[14px] text-[#888] italic">
              *Availability depends on project eligibility and applicable state or central government schemes.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="pb-[60%] lg:pb-[65%] relative w-full overflow-hidden rounded-3xl group">
              <img
                src="/ourSolutionCard3.jpg"
                alt="Government Incentives"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
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
