import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container w-full pt-[120px] sm:pt-[225px] md:pt-[120px] flex flex-col items-center overflow-hidden">
      {/* Outer 1280 wrapper for Desktop */}
      <div className="hero-text-wrapper w-full md:max-w-[1280px] md:p-[64px] flex justify-center mx-auto">
        {/* Inner 1152 wrapper */}
        <div className="hero-text-content flex flex-col items-center gap-[20px] md:gap-[16px] w-full max-w-[369px] md:max-w-[1152px] px-4 md:px-0 mb-[40px] md:mb-12 mx-auto">

          <h1 className="hero-title font-inter text-[32px] md:text-[48px] font-medium leading-[40px] md:leading-[66px] text-text-primary tracking-normal w-full sm:w-[369px] md:w-[834px] text-center m-0">
            Turn Your Idle Land Into A Money Generating Asset
          </h1>

          <p className="hero-subtitle font-inter text-[16px] md:text-[18px] leading-[24px] md:leading-[36px] text-center w-[296px] md:w-[668px] mx-auto text-text-secondary font-normal m-0 tracking-normal">
            Climate-smart, data-led farming models built for long-term growth.
          </p>

          {/* Added "group" class to the button to trigger the inner span hover animations */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.lenis?.scrollTo('#contact');
            }}
            className="btn-filled group flex items-center justify-center w-[137px] h-[43px] bg-text-primary text-bg-color border-none rounded-[40px] font-inter font-normal text-[16px] leading-[1] cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#222222] hover:-translate-y-0.5 m-0 p-0"
          >
            <span className="btn-text-wrapper relative inline-block overflow-hidden align-top">
              <span className="btn-text-inner block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                Get Started
              </span>
              <span className="btn-text-inner clone absolute top-full left-0 w-full text-center block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                Get Started
              </span>
            </span>
          </a>
        </div>
      </div>
      <div className="hero-image-wrapper relative w-[489px] max-w-none md:max-w-full md:w-full h-[191px] md:h-[80vh] lg:h-screen -left-[20px] md:left-0 shrink-0 mt-0">
        <img
          src="/Heroimg.jpg"
          alt="Farmcult Modern Farming"
          className="hero-bg-img w-full h-full object-cover object-center will-change-transform"
          decoding="async"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;