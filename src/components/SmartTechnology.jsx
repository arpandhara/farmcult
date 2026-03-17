import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SmartTechnology = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Title, Desc, and Link Animations
    gsap.fromTo('.smart-tech-title, .smart-tech-desc, .smart-tech-link',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.15, ease: 'power3.out'
      }
    );

    // Main Card Animation
    gsap.fromTo('.smart-tech-card',
      { x: 50, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        x: 0, autoAlpha: 1, duration: 1.2, ease: 'power2.out'
      }
    );

    // Feature Overlay Animations
    gsap.fromTo('.smart-tech-feature',
      { y: 20, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.smart-tech-card', start: 'top 60%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.5
      }
    );
  }, { scope: sectionRef });

  const features = [
    {
      icon: '/icons/icon4.png',
      text: 'IoT-enabled farm monitoring',
    },
    {
      icon: '/icons/icon 5.png',
      text: 'Custom farm solutions',
    },
    {
      icon: '/icons/icon 6.png',
      text: 'Data-driven decision making',
    },
  ];

  return (
    <section className="smart-tech-section flex flex-col lg:flex-row bg-[#F7F7F7] px-[5%] py-[60px] lg:py-[100px] min-h-[70vh] gap-12 lg:gap-[5%] items-center" ref={sectionRef}>
      
      {/* Left Content */}
      <div className="smart-tech-left flex-1 lg:max-w-[450px]">
        <h2 className="smart-tech-title text-[clamp(2.2rem,4vw,3rem)] mb-8 text-text-primary leading-[1.1] tracking-tight">
          Built on Smart <br /> Technology
        </h2>
        <p className="smart-tech-desc text-[1.05rem] text-[#343434] opacity-90 leading-[2] mb-10 max-w-[400px]">
          Smart systems run quietly in the background to keep farms operating smoothly. Technology helps reduce effort, improve consistency, and support better outcomes.
        </p>

        <div className="smart-tech-link-container">
          <a href="#technology" className="smart-tech-link group font-medium text-[clamp(0.95rem,1.2vw,1.1rem)] text-text-primary relative inline-block pb-[4px] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-text-primary after:origin-bottom-right after:transition-transform after:duration-[350ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
            Learn more about how we use technology &rarr;
          </a>
        </div>
      </div>

      {/* Right Image Card */}
      <div className="smart-tech-right flex-[1.5] w-full relative">
        <div className="smart-tech-card relative w-full aspect-[16/7.5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group">
          {/* Background Image */}
          <img 
            src="/builtonSmartimg1.jpg" 
            alt="Farm Technology" 
            className="w-full h-full object-cover"
          />
          
          {/* Intense Black Overlay for better icon/text contrast as requested */}
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>

          {/* Features Overlay */}
          <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 px-8 py-10">
            {features.map((feature, index) => (
              <div key={index} className="smart-tech-feature flex flex-col items-center text-center gap-4 max-w-[180px]">
                <div className="feature-icon-wrapper w-16 h-16 flex items-center justify-center transition-all duration-300">
                  <img src={feature.icon} alt={feature.text} className="w-10 h-10 object-contain drop-shadow-lg" />
                </div>
                <p className="feature-text text-white text-[0.95rem] font-semibold leading-tight drop-shadow-md">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default SmartTechnology;
