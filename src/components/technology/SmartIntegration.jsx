import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const benefitsData = [
  {
    title: 'Water\nEfficient',
    description: 'Uses significantly less water through controlled growing systems.',
  },
  {
    title: 'Reduced\nPesticide Use',
    description: 'Cleaner cultivation methods with lower chemical dependency.',
  },
  {
    title: 'Consistent\nProduction',
    description: 'Structured systems designed for stable, repeatable crop cycles.',
  },
  {
    title: 'Automated\nEfficiency',
    description: 'Reduce manual dependency, and improve operational efficiency and reliability.',
  },
];

const SmartIntegration = () => {
  useGSAP(() => {
    // Background Image Animation (Fade in + subtle zoom out)
    gsap.from('.si-bg-image', {
      scrollTrigger: {
        trigger: '.smart-integration-section',
        start: 'top 80%',
      },
      scale: 1.1,
      opacity: 0,
      duration: 1.5,
      ease: 'power2.out',
    });

    gsap.from('.si-heading, .si-desc', {
      scrollTrigger: {
        trigger: '.smart-integration-section',
        start: 'top 75%',
      },
      y: 30,
      delay: 0.2, // Reduced from 1 so it doesn't take too long to appear after the image
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out',
    });

    gsap.from('.benefit-card', {
      scrollTrigger: {
        trigger: '.si-cards-grid',
        start: 'top 65%',
      },
      y: 40,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'expo.out',
    });
  });

  return (
    <section className="smart-integration-section relative flex flex-col justify-center pt-16 pb-16 md:pt-24 md:pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-black"> {/* Added bg-black so it's not white before loading */}
        <img
          src="/technology/TechnologyBGimage.jpg"
          alt="Smart Integration Background"
          className="si-bg-image w-full h-full object-cover" // Added 'si-bg-image' class here
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto px-[5%] w-full">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20 px-4 md:px-0">
          <h2 className="si-heading text-[28px] leading-[38px] md:text-[32px] md:leading-[48px] font-normal text-white mb-4 md:mb-5">
            Deliver Impact With Smart Integration
          </h2>
          <p className="si-desc text-white text-[14px] leading-[24px] md:text-[15px] md:leading-[29px] mx-auto max-w-[90%] md:max-w-2xl">
            Integrated systems translate into measurable gains in water efficiency, crop stability, and operational performance.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="si-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-16 lg:gap-y-0 lg:grid-cols-4 text-left max-w-[1600px] mx-auto w-full">
          {benefitsData.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card flex flex-col lg:flex-row gap-4 lg:gap-6 px-6 lg:px-8 py-2"
            >
              {/* Vertical divider — only spans the text height */}
              <div className={`hidden lg:block w-[1px] bg-white/50 self-stretch shrink-0 ${index === 0 ? 'lg:opacity-0' : ''}`} />
              
              <div className="w-full">
                <h3 className="text-[20px] leading-[30px] md:text-[24px] md:leading-[34px] font-normal text-white pb-4 lg:pb-[56px] whitespace-pre-line">
                  {benefit.title}
                </h3>
                <p className="text-white text-[14px] leading-[24px] md:text-[15px] md:leading-[29px] font-light">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartIntegration;