import React from 'react';

const PiHowItWorks = () => {
  return (
    <section className="py-[80px] md:py-[100px] lg:py-[140px] bg-[#FAFAFA] px-4 md:px-[68px]">
      <div className="mx-auto flex flex-col items-center">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-text-primary mb-4 md:mb-6">
            How It Works
          </h2>
          <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary">
            We follow a clear, step-by-step process to set up your hydroponic farm. Farmcult manages each stage with clear timelines and support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12 relative w-full items-start">
          {/* Horizontal Line for Desktop */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[8%] right-[8%] h-[1px] border-t border-dashed border-gray-300 z-0"></div>

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                1
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-inter font-medium text-[16px] md:text-[18px] leading-[24px] text-text-primary mb-1 md:mb-2 px-1">Site<br className="hidden lg:block" /> Feasibility</h3>
            <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-text-secondary px-2">Land and resource assessment</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                2
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="font-inter font-medium text-[16px] md:text-[18px] leading-[24px] text-text-primary mb-1 md:mb-2 px-1">Capital<br className="hidden lg:block" /> Investment</h3>
            <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-text-secondary px-2">Client funds infrastructure setup</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                3
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-inter font-medium text-[16px] md:text-[18px] leading-[24px] text-text-primary mb-1 md:mb-2 px-1">Farm<br className="hidden lg:block" /> Setup</h3>
            <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-text-secondary px-2">Farm built and commissioned</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                4
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="font-inter font-medium text-[16px] md:text-[18px] leading-[24px] text-text-primary mb-1 md:mb-2 px-1">Operational<br className="hidden lg:block" /> Funding</h3>
            <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-text-secondary px-2">Working capital deployed by Farmcult</p>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                5
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="font-inter font-medium text-[16px] md:text-[18px] leading-[24px] text-text-primary mb-1 md:mb-2 px-1">Full Farm<br className="hidden lg:block" /> Management</h3>
            <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-text-secondary px-2">Seed to sale operations handled</p>
          </div>

          {/* Step 6 */}
          <div className="flex flex-col items-center text-center relative z-10 w-full">
            <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
              <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                6
              </div>
              <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="font-inter font-medium text-[16px] md:text-[18px] leading-[24px] text-text-primary mb-1 md:mb-2 px-1">Profit Sharing<br className="hidden lg:block" /> & Returns</h3>
            <p className="font-inter font-normal text-[14px] md:text-[15px] leading-[24px] text-text-secondary px-2">60:40 split with tax benefits</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PiHowItWorks;
