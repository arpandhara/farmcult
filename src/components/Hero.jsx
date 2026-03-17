import React from 'react';

const Hero = () => {
  return (
    <section className="hero-container w-full pt-[160px] flex flex-col items-center">
      <div className="hero-text-content text-center w-full px-6 mb-12">
        <h1 className="hero-title font-inter text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.15] mb-6 text-text-primary tracking-[-0.02em] whitespace-nowrap">
          Turn Your Idle Land Into A Money<br />Generating Asset
        </h1>
        <p className="hero-subtitle text-[clamp(1rem,2vw,1.15rem)] text-text-secondary font-normal mb-10 leading-relaxed">
          Climate-smart, data-led farming models built for long-term growth.
        </p>
        {/* Added "group" class to the button to trigger the inner span hover animations */}
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            window.lenis?.scrollTo('#contact');
          }}
          className="btn-filled group inline-block bg-text-primary text-bg-color border-none rounded-[40px] py-[0.8rem] px-8 font-medium text-base font-inter cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#222222] hover:-translate-y-0.5"
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
      <div className="hero-image-wrapper w-full h-screen overflow-hidden">
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