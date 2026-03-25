import React from 'react';

const EtWorkshops = () => {
  return (
    <section className="et-content-container py-[80px] md:py-[100px] bg-[#F7F7F7] lg:py-[100px] px-4 md:px-[68px]">
      <div className="mx-auto et-section-content">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-28 items-center">
          <div className="w-full lg:w-[58%]">
            <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-black mb-4 md:mb-6">
              Hydroponics Workshops
            </h2>

            <div className="flex flex-wrap gap-4 mb-6">
              <span className="bg-[#8DC83A]/25 text-[#343434] px-4 py-1.5 rounded-full text-[0.85rem] font-normal">
                Chandigarh, India
              </span>
              <span className="bg-[#8DC83A]/25 text-[#343434] px-4 py-1.5 rounded-full text-[0.85rem] font-normal">
                Online
              </span>
            </div>

            <p className="font-inter text-[16px] md:text-[15px] md:max-w-[80%] font-normal leading-[26px] md:leading-[29px] text-text-primary mb-6">
              Farmcult's onsite training is designed to build real, practical hydroponics skills. Learn directly at our Chandigarh facility through hands on sessions and guided practice.
            </p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6 mt-8 md:mt-10 md:mb-10">
              {[
                "Fundamentals of hydroponics",
                "System selection & setup",
                "Nutrient management",
                "pH balancing",
                "Crop planning",
                "Practical troubleshooting"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-[4px] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-inter text-[15px] leading-[26px] text-text-primary font-normal">{item}</span>
                </div>
              ))}
            </div>
            <p className="font-inter text-[16px] md:text-[15px] md:max-w-[80%] font-normal leading-[26px] md:leading-[29px] text-text-primary md:mt-[25px]">
              Workshops are available both online and offline, with a strong focus on clarity and real-world application.
            </p>
          </div>

          <div className="w-full lg:w-[455px] lg:h-[426px] mt-10 lg:mt-0">
            <div className="pb-[60%] lg:pb-[70%] relative w-full h-full overflow-hidden rounded-[16px] group">
              <img
                src="/HyWorkshop.jpg"
                alt="Hydroponics Workshop"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                onError={(e) => { e.target.src = '/contactFromimg.jpg'; }}
              />
              <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EtWorkshops;
