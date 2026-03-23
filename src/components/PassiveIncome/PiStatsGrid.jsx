import React from 'react';

const PiStatsGrid = () => {
  return (
    <div className="pi-stats-grid grid grid-cols-1 md:grid-cols-3 md:divide-x md:border-x border-gray-200 ">
      {/* Feature 1 */}
      {/* Notice we added md:px-8 lg:px-12 for spacing instead of using grid gaps */}
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
  );
};

export default PiStatsGrid;
