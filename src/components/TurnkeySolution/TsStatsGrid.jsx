import React from 'react';

const TsStatsGrid = () => {
  return (
    <div className="ts-stats-grid grid grid-cols-1 md:grid-cols-3 md:divide-x md:border-x border-[#DEDEDE] bg-[] ">
      {/* Feature 1 */}
      <div className="ts-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 lg:px-12 py-6 md:py-4 group flex-1">
        <h3 className="font-inter text-[28px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-0 md:mb-0">
          Up to 50%
        </h3>
        <p className="font-inter text-[28px] md:text-[32px] font-light leading-[32px] md:leading-[48px] text-black mb-8 md:mb-14 w-full">
          Capital Subsidy
        </p>
        <p className="font-inter text-[15px] font-normal leading-[24px] md:leading-[29px] text-black md:max-w-[90%] mt-auto">
          Government capital subsidies on eligible projects
        </p>
      </div>

      {/* Feature 2 */}
      <div className="ts-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 lg:px-12 py-6 md:py-4 group flex-1">
        <h3 className="font-inter text-[28px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-0 md:mb-0">
          3% <span className="font-light">Interest Subsidy</span>
        </h3>
        <p className="font-inter text-[28px] md:text-[32px] font-light leading-[32px] md:leading-[48px] text-black mb-8 md:mb-14 w-full">
          Available
        </p>
        <p className="font-inter text-[15px] font-normal leading-[24px] md:leading-[29px] text-black md:max-w-[90%] mt-auto">
          Loan Interest subsidised by 3%
        </p>
      </div>

      {/* Feature 3 */}
      <div className="ts-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8 lg:px-12 py-6 md:py-4 group flex-1">
        <h3 className="font-inter text-[28px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-8 md:mb-[104px]">
          Tax-Free <span className="font-light">Returns</span>
        </h3>
        <p className="font-inter text-[15px] font-normal leading-[24px] md:leading-[29px] text-black md:max-w-[90%] mt-auto">
          Agricultural income may qualify for tax exemptions under Indian law
        </p>
      </div>
    </div>
  );
};

export default TsStatsGrid;
