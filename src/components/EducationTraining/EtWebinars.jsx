import React from 'react';

const EtWebinars = () => {
  return (
    <section className="et-webinars-container py-20 lg:py-28 bg-[#FAFAFA] px-[5%]">
      <div className="max-w-6xl mx-auto et-webinars-content">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left Column (Image) */}
          <div className="w-full lg:w-1/2">
            <div className="pb-[70%] lg:pb-[75%] relative w-full overflow-hidden rounded-[2rem] group">
              <img
                src="/Webinarsimage.jpg"
                alt="Webinars"
                className="absolute inset-0 w-full h-full object-cover brightness-105 contrast-105 saturate-110 transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                onError={(e) => { e.target.src = '/contactFromimg.jpg'; }}
              />
              <div className="absolute inset-0 bg-black/5 rounded-[2rem]"></div>
            </div>
          </div>

          {/* Right Column (Text) */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-2 leading-[1.2]">
              Webinars
            </h2>

            <h4 className="text-[1.1rem] font-semibold text-[#333] mb-6">
              Clearing the Air on Hydroponics.
            </h4>

            <p className="text-[1.05rem] text-[#555] leading-[1.8] mb-10 lg:pr-4">
              Farmcult hosts live and virtual webinar sessions designed to simplify hydroponics and modern farming concepts. These sessions help participants understand the fundamentals before moving into hands on training.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6">
              {/* List Items */}
              {[
                "Hydroponics fundamentals",
                "Myths vs facts about modern farming",
                "Understanding costs and returns",
                "Technology in controlled farming",
                "Live Q and A with experts"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-[#444] text-[1.05rem] leading-snug">{item}</span>
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
