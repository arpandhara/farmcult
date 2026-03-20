import React from 'react';

const PiExploreMore = () => {
  return (
    <section className="py-[80px] md:py-[100px] lg:py-[140px] bg-[#FAFAFA] px-5 md:px-[68px]">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          {/* Left Content */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <h2 className="font-inter text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[48px] text-text-primary mb-4 md:mb-6">
              Explore More<br />Solutions
            </h2>
            <p className="font-inter text-[16px] md:text-[15px] font-normal leading-[26px] md:leading-[29px] text-text-secondary mb-8 lg:pr-4">
              From hands-free investing to hands-on farming, we offer flexible ways to work with Farmcult based on your goals.
            </p>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-2/3 flex flex-col sm:flex-row gap-6">
            {/* Card 1: Turnkey Solution */}
            <div className="flex-1 relative rounded-3xl overflow-hidden group aspect-[4/5] sm:aspect-auto sm:min-h-[400px] cursor-pointer">
              <img
                src="/ourSolutionCard1.jpg"
                alt="Turnkey Solution"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 z-10 text-white">
                <h3 className="text-[1.6rem] font-bold max-w-[150px] leading-tight">Turnkey<br />Solution</h3>
                <div className="mt-auto">
                  <p className="font-inter text-[15px] text-white/95 leading-[26px] mb-8">
                    Farmcult will build a fully operational hydroponic farm on your land.
                  </p>
                  <button className="bg-white text-text-primary px-6 py-3 rounded-full text-[0.95rem] font-semibold flex items-center justify-between w-[200px] hover:bg-gray-100 transition-colors">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: Education & Training */}
            <div className="flex-1 relative rounded-3xl overflow-hidden group aspect-[4/5] sm:aspect-auto sm:min-h-[400px] cursor-pointer">
              <img
                src="/farmCultinMediaImg1.jpg"
                alt="Education & Training"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                onError={(e) => { e.target.src = '/contactFromimg.jpg'; }}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 z-10 text-white">
                <h3 className="text-[1.6rem] font-bold max-w-[200px] leading-tight">Education &<br />Training</h3>
                <div className="mt-auto">
                  <p className="font-inter text-[15px] text-white/95 leading-[26px] mb-8 pr-2">
                    Learn hydroponic farming through practical training, workshops, and guidance.
                  </p>
                  <button className="bg-white text-text-primary px-6 py-3 rounded-full text-[0.95rem] font-semibold flex items-center justify-between w-[200px] hover:bg-gray-100 transition-colors">
                    Learn More
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PiExploreMore;
