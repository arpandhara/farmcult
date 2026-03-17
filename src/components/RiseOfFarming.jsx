import React from 'react';

const RiseOfFarming = () => {
  return (
    <section className="rise-container w-full min-h-screen flex items-center justify-center bg-bg-color py-16 px-[5%]" id="technology">
      <div className="rise-content-wrapper w-full max-w-[1400px] flex flex-col gap-16">
        
        {/* Top Split Area */}
        <div className="rise-top-split grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Text & Capsules */}
          <div className="rise-info-side max-w-[550px] flex flex-col justify-between gap-16">
            <h2 className="rise-title text-[clamp(2rem,3.5vw,3rem)] font-medium leading-[1.2] text-text-primary">
              The Rise of Modern<br />Farming in India
            </h2>
            <p className="rise-desc text-[clamp(1rem,1.2vw,1.15rem)] text-text-secondary leading-[2]">
              Rapid urban demand, water stress, and government support are accelerating hydroponic adoption across key Indian states.
            </p>
            
            <div className="states-capsule-grid flex flex-wrap gap-4">
              {['Maharashtra', 'Karnataka', 'Telangana', 'Punjab', 'Gujarat', 'Tamil Nadu', 'Haryana', 'Rajasthan'].map((state) => (
                <span key={state} className="state-capsule inline-flex items-center justify-center py-2 px-4 bg-accent/25 text-text-primary text-[0.95rem] rounded-full font-medium">
                  {state}
                </span>
              ))}
            </div>
          </div>
          
          {/* Right Map Visual Area */}
          <div className="rise-map-side w-full">
            <div className="impact-map-card w-full aspect-[4/3] bg-[#8D8D8D] rounded-2xl relative overflow-hidden flex items-center justify-center">
               <img src="/riseOfModernFarming.jpg" alt="India Hydroponics Impact Map" className="impact-map-img w-full h-full object-fill" />
            </div>
          </div>

        </div>

        {/* Bottom Stats Grid */}
        <div className="rise-stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#DEDEDE] pt-12 gap-y-12 lg:gap-y-0">
          
          <div className="stat-card flex flex-col gap-[53px] px-0 sm:px-8 border-r-0 sm:border-r border-[#DEDEDE]">
            <h3 className="stat-value text-[clamp(1.75rem,2.5vw,2.25rem)] font-medium text-text-primary">Over 30%</h3>
            <p className="stat-label text-[0.95rem] text-text-secondary leading-[29px]">ROI on projects with hydroponics / modern farming</p>
          </div>
          
          {/* Note: This card specifically drops its border at the Tablet breakpoint just like your media query */}
          <div className="stat-card flex flex-col gap-[53px] px-0 sm:px-8 border-r-0 lg:border-r border-[#DEDEDE]">
            <h3 className="stat-value text-[clamp(1.75rem,2.5vw,2.25rem)] font-medium text-text-primary">80–90%</h3>
            <p className="stat-label text-[0.95rem] text-text-secondary leading-[29px]">Less water usage compared to soil farming</p>
          </div>
          
          <div className="stat-card flex flex-col gap-[53px] px-0 sm:px-8 border-r-0 sm:border-r border-[#DEDEDE]">
            <h3 className="stat-value text-[clamp(1.75rem,2.5vw,2.25rem)] font-medium text-text-primary">Up to 5x</h3>
            <p className="stat-label text-[0.95rem] text-text-secondary leading-[29px]">Higher yield per acre in controlled systems</p>
          </div>
          
          {/* Completely borderless on the right */}
          <div className="stat-card borderless-right flex flex-col gap-[53px] px-0 sm:px-8 border-r-0">
            <h3 className="stat-value text-[clamp(1.75rem,2.5vw,2.25rem)] font-medium text-text-primary">Up to 50%</h3>
            <p className="stat-label text-[0.95rem] text-text-secondary leading-[29px]">Capital subsidy for eligible projects</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RiseOfFarming;