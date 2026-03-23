import React from 'react';

const EtWebinars = () => {
  return (
    /* Added px-[68px] here to ensure the 68px padding is consistent */
    <section className="et-webinars-container py-[80px] md:py-[100px] lg:py-[80px] px-[68px] bg-[#F7F7F7]">
      {/* Changed max-w-full to max-w-7xl and added mx-auto to keep it centered on large screens */}
      <div className="mx-auto et-webinars-content">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center">

          {/* Left Column (Image) */}
          <div className="w-full lg:w-[455px] lg:h-[455px]">
            <div className="relative w-full h-full overflow-hidden rounded-[16px] group shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
              <img
                src="/Heroimg.jpg"
                alt="Webinars"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                onError={(e) => { e.target.src = '/turnkeyIncentivesImg.jpg'; }}
              />
              <div className="absolute inset-0 bg-black/5 rounded-[16px]"></div>
            </div>
          </div>

          {/* Right Column (Text) */}
          <div className="w-full lg:w-[58%] mt-10 lg:mt-0">
            <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-6 md:mb-8">
              Webinars
            </h2>

            <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary mb-8 md:mb-10">
              Clearing the Air on Hydroponics.
            </p>

            <p className="font-inter text-[16px] md:text-[15px] md:max-w-full font-normal leading-[26px] md:leading-[29px] text-text-secondary mb-10 md:mb-12">
              Farmcult hosts live and virtual webinar sessions designed to simplify hydroponics and modern farming concepts. These sessions help participants understand the fundamentals before moving into hands on training.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
              {/* List Items */}
              {[
                "Hydroponics fundamentals",
                "Myths vs facts about modern farming",
                "Understanding costs and returns",
                "Technology in controlled farming",
                "Live Q and A with experts"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-secondary font-normal">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EtWebinars;