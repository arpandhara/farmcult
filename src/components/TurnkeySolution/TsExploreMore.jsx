import React from 'react';

const TsExploreMore = () => {
  return (
    <section className="ts-explore-container py-20 lg:py-28 bg-white px-[5%]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
          {/* Left Content */}
          <div className="w-full lg:w-1/3 flex flex-col justify-center">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-6 leading-[1.2]">
              Explore More<br />Solutions
            </h2>
            <p className="text-[1.05rem] text-[#555] leading-[1.8] mb-8 lg:pr-4">
              From hands-free investing to hands-on farming, we offer flexible ways to work with Farmcult based on your goals.
            </p>
          </div>

          {/* Right Cards */}
          <div className="w-full lg:w-2/3 flex flex-col sm:flex-row gap-6">
            {/* Card 1: Passive Income Model */}
            <div 
              className="flex-1 relative rounded-3xl overflow-hidden group aspect-[4/5] sm:aspect-auto sm:min-h-[400px] cursor-pointer" 
              onClick={() => window.location.href='/passive-income'}
            >
              <img
                src="/ourSolutionCard1.jpg"
                alt="Passive Income Model"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>

              <div className="relative h-full flex flex-col justify-between p-8 z-10 text-white">
                <h3 className="text-[1.6rem] font-bold max-w-[200px] leading-tight">Passive Income<br />Model</h3>
                <div className="mt-auto">
                  <p className="text-[1rem] text-white/95 leading-relaxed mb-8">
                    Invest in a hydroponic farm while Farmcult manages operations end-to-end.
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
                src="/ourSolutionCard3.jpg"
                alt="Education & Training"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                onError={(e) => { e.target.src = '/contactFromimg.jpg'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>

              <div className="relative h-full flex flex-col justify-between p-8 z-10 text-white">
                <h3 className="text-[1.6rem] font-bold max-w-[200px] leading-tight">Education &<br />Training</h3>
                <div className="mt-auto">
                  <p className="text-[1rem] text-white/95 leading-relaxed mb-8 pr-2">
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

export default TsExploreMore;
