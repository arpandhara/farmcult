import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CaseStudy = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Initial reveal of the card container
    gsap.fromTo('.case-study-container',
      { scale: 0.95, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        scale: 1, autoAlpha: 1, duration: 1.2, ease: 'power2.out'
      }
    );

    // Slide in the white content card
    gsap.fromTo('.case-study-card',
      { x: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.case-study-container', start: 'top 60%' },
        x: 0, autoAlpha: 1, duration: 1, delay: 0.3, ease: 'power3.out'
      }
    );

    // Stagger elements inside the card
    gsap.fromTo('.case-study-tag, .case-study-title, .case-study-desc, .case-study-footer',
      { y: 20, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.case-study-card', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, delay: 0.5, ease: 'power3.out'
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      className="case-study-section w-full px-[5%] py-12 lg:py-20 bg-[#F7F7F7]"
      ref={sectionRef}
    >
      <div className="case-study-container relative w-full h-[65vh] min-h-[500px] lg:h-[80vh] rounded-2xl overflow-hidden shadow-xl group">

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            src="/caseStudyHomeimg.jpg"
            alt="Hydroponic Farm Facility"
            className="case-study-bg w-full h-full object-cover"
          />
          {/* Subtle dark overlay for better depth */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* FIXED CARD: 
          Adjusted padding to ensure the top and bottom visual spacing feels uniform.
          Using 'pt' and 'pb' separately gives finer control.
        */}
        <div className="case-study-card absolute top-1/2 -translate-y-1/2 right-6 left-6 lg:right-12 lg:left-auto bg-white/95 backdrop-blur-sm rounded-2xl p-6 lg:p-12 w-auto lg:w-[480px] max-h-[calc(100%-3rem)] lg:max-h-[calc(100%-6rem)] shadow-2xl z-10 flex flex-col items-start border border-white/20 overflow-y-auto">

          <span className="case-study-tag shrink-0 px-4 py-1.5 bg-[#8DC83A]/25 text-[#343434] text-sm font-normal rounded-full mb-6 lg:mb-8 tracking-wide">
            Case Study
          </span>

          <h2 className="case-study-title shrink-0 text-[clamp(2.2rem,4.5vw,3.2rem)] text-text-primary leading-[1.1] mb-6 lg:mb-8 tracking-tight">
            <span className="font-normal block mb-2 lg:mb-4">2 Acres.</span> 
            <span className="font-normal block">24,000 Plants.</span>
          </h2>

          <p className="case-study-desc shrink-0 text-[clamp(0.95rem,1.1vw,1.1rem)] text-text-primary leading-[2] mb-5 opacity-90 font-normal">
            What was once idle land is now a working hydroponic farm. Results from Farmcult's first operational hydroponic farm in Garhmukteshwar.
          </p>

          <div className="case-study-footer shrink-0 w-full flex justify-between items-center">
            <span className="case-study-date text-[#8DC83A] font-bold text-lg">
              Jan 2025
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudy;