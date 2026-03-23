import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TsCaseStudy2 = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Initial reveal of the card container
    gsap.fromTo('.ts-casestudy2-inner-container',
      { scale: 0.95, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        scale: 1, autoAlpha: 1, duration: 1.2, ease: 'power2.out'
      }
    );

    // Slide in the white content card
    gsap.fromTo('.ts-casestudy2-inner-card',
      { x: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.ts-casestudy2-inner-container', start: 'top 60%' },
        x: 0, autoAlpha: 1, duration: 1, delay: 0.3, ease: 'power3.out'
      }
    );

    // Stagger elements inside the card
    gsap.fromTo('.ts-casestudy2-tag, .ts-casestudy2-title, .ts-casestudy2-desc, .ts-casestudy2-footer',
      { y: 20, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.ts-casestudy2-inner-card', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, delay: 0.5, ease: 'power3.out'
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      className="ts-casestudy2-section w-full py-10 md:py-16 lg:py-20 bg-[#FAFAFA] md:px-[5%] flex justify-center"
      ref={sectionRef}
    >
      {/* Edge-to-edge on mobile, rounded max-width on tablet/desktop */}
      <div className="ts-casestudy2-inner-container relative w-full max-w-9xl h-[550px] md:h-[500px] lg:h-[600px] rounded-none md:rounded-[16px] overflow-hidden shadow-none md:shadow-xl group">

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/farmCultinMediaImg1.jpg"
            alt="Former ISL Player Hydroponic Farm"
            className="ts-casestudy2-bg w-full h-full object-cover"
          />
          {/* Subtle dark overlay for better depth */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Safe GSAP Flex Wrapper - Centers on mobile, right-aligns on desktop */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center md:justify-start p-5 lg:pl-16 z-10 pointer-events-none">
          
          {/* The Card - Fluid width on mobile, bounded max-width */}
          <div className="ts-casestudy2-inner-card pointer-events-auto bg-[#F7F7F7] md:bg-white/95 backdrop-blur-sm rounded-2xl p-7 md:p-24 lg:p-12 w-[92%] max-w-[380px] md:max-w-[420px] lg:max-w-[480px] min-h-[440px] md:min-h-[480px] lg:min-h-[520px] shadow-2xl flex flex-col justify-start items-start">

            {/* Capsule */}
            <div className="ts-casestudy2-tag px-[16px] py-[6px] bg-[#E3F0D3] text-[#343434] rounded-full mb-6 md:mb-8">
              <span className="font-inter font-medium text-[14px] leading-none m-0 uppercase tracking-wide">Case Study</span>
            </div>

            {/* Heading - Fixed line heights to prevent vertical overlap */}
            <h2 className="ts-casestudy2-title font-inter text-[32px] md:text-[32px] font-medium md:font-medium text-black leading-[1.2] md:leading-[48px] mb-8 tracking-tight m-0 w-full">
              From Professional<br />Football to<br />Professional Farming
            </h2>

            {/* Paragraph */}
            <p className="ts-casestudy2-desc font-inter text-[16px] md:text-[16px] font-normal text-black leading-[1.6] md:leading-[29px] mb-8 md:mb-2 opacity-90 m-0 w-full md:max-w-[90%]">
              Not every entrepreneur starts their journey in a boardroom. Some start on a football field. A Former ISL Player's Journey into Hydroponics.
            </p>

            {/* Footer */}
            <div className="ts-casestudy2-footer w-full flex justify-between items-center mt-auto">
              <span className="ts-casestudy2-date font-inter text-[#81B622] font-bold text-[16px] m-0">
                Jan 2025
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default TsCaseStudy2;
