import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FarmcultMedia = () => {
  const sectionRef = useRef(null);

  const mediaItems = [
    {
      image: '/farmCultinMediaImg1.jpg',
      title: 'India: Cutting down 60-70% of energy costs to make vertical farming affordable',
      link: '#',
    },
    {
      image: '/farmCultinMediaImg2.jpg',
      title: 'Farmer Earns 5 Times More With Hydroponics & Saves 80% on Electricity Bills; Helps Others Switch',
      link: '#',
    },
  ];

  useGSAP(() => {
    // Heading animation
    gsap.fromTo('.media-heading',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 1, ease: 'power3.out'
      }
    );

    // Cards staggered reveal
    gsap.fromTo('.media-card',
      { y: 50, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.media-grid', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power2.out'
      }
    );
  }, { scope: sectionRef });

  return (
    <section 
      className="media-section w-full px-[5%] py-16 lg:py-24 bg-white min-h-[70vh] flex flex-col" 
      ref={sectionRef}
    >
      <h2 className="media-heading text-[32px] font-[500] text-text-primary leading-[48px] mb-12 lg:mb-16">
        Farmcult in the Media
      </h2>

      <div className="media-grid grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 flex-1">
        {mediaItems.map((item, index) => (
          <div key={index} className="media-card flex flex-col group">
            {/* Image Container */}
            <div className="media-img-wrapper aspect-[16/10] rounded-2xl overflow-hidden mb-6 lg:mb-8 shadow-sm transition-shadow duration-500 group-hover:shadow-xl">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <h3 className="media-card-title text-[18px] font-[500] text-text-primary leading-[2] mb-6 opacity-90">
              {item.title}
            </h3>

            {/* Animated Link */}
            <div className="media-link-wrapper mt-auto">
              <a 
                href={item.link} 
                className="btn-text-link group font-normal text-[16px] text-text-primary relative inline-block pb-[4px] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-text-primary after:origin-bottom-right after:transition-transform after:duration-[350ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Read more &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FarmcultMedia;
