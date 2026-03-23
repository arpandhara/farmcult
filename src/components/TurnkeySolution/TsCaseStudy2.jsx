import React from 'react';

const TsCaseStudy2 = () => {
  return (
    <section className="ts-casestudy2-container py-20 lg:py-28 bg-[#FAFAFA] px-[5%]">
      <div className="max-w-6xl mx-auto relative rounded-3xl overflow-hidden min-h-[500px] lg:min-h-[600px] flex items-center justify-start p-8 lg:p-16">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: "url('/TsCS2.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/10 z-0"></div>

        {/* Floating Card */}
        <div className="ts-casestudy2-card relative z-10 bg-white rounded-3xl p-8 lg:p-12 w-full max-w-[450px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col justify-start">
          <span className="inline-block bg-green-100 text-green-700 text-[0.8rem] font-bold px-4 py-1.5 rounded-full mb-8 uppercase tracking-wide self-start">
            Case Study
          </span>
          <h3 className="text-[2rem] lg:text-[2.5rem] font-bold text-text-primary leading-[1.2] mb-6 font-outfit">
            From Professional<br />Football to<br />Professional Farming
          </h3>
          <p className="text-[1.05rem] text-[#555] leading-[1.8] mb-10">
            Not every entrepreneur starts their journey in a boardroom. Some start on a football field. A Former ISL Player's Journey into Hydroponics.
          </p>
          <p className="text-green-600 font-bold text-[1.1rem]">
            Jan 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default TsCaseStudy2;
