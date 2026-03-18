import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const WfcHeader = ({ 
  tag = "WHY FARMCULT?", 
  title = "Cultivating for Tomorrow", 
  subtitle = "Not just growing crops. Building the future of modern farming." 
}) => {
  const headerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.wfc-label, .wfc-main-title, .wfc-main-subtitle',
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.2, stagger: 0.2, ease: 'power3.out', delay: 0.3 }
    );
  }, { scope: headerRef });

  return (
    <section ref={headerRef} className="wfc-header-section pt-[120px] md:pt-[150px] pb-[40px] md:pb-[60px] px-4 md:px-[5%] text-center max-w-[1200px] mx-auto overflow-hidden">
      <div className="wfc-header-inner w-full">
        <span className="wfc-label block text-[0.8rem] md:text-[0.85rem] font-extrabold text-accent tracking-[0.1em] mb-4 md:mb-6 uppercase">
          {tag}
        </span>
        <h1 className="wfc-main-title text-[clamp(2rem,5vw,4.2rem)] font-medium leading-[1.15] mb-5 md:mb-6 tracking-[-0.02em] text-text-primary max-w-[90vw] md:max-w-[800px] mx-auto">
          {title}
        </h1>
        <p className="wfc-main-subtitle text-[1rem] md:text-[clamp(1.1rem,2vw,1.25rem)] text-text-primary font-extralight max-w-[90vw] md:max-w-[600px] mx-auto leading-[1.6]">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default WfcHeader;