import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechCards = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.tech-feature-card',
      { y: 50, autoAlpha: 0 },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="bg-[#EFEEEE] p-24">
      <div className="max-w-[100vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Card 1 */}
        <div className="tech-feature-card bg-white rounded-2xl p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-[1.5rem] font-semibold text-[#000000] mb-5">
              24/7 Cloud-Based Monitoring
            </h3>
            <p className="text-[1rem] md:text-[1rem] text-[#333333] leading-[1.6] mb-10 pr-8">
              Continuous cloud syncing provides real-time visibility and remote access to
              farm performance data.
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden mt-auto">
            <img 
              src="/technology/card01.jpg" 
              alt="Cloud Monitoring" 
              className="w-full h-[200px] md:h-[250px] lg:h-[280px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="tech-feature-card bg-white rounded-2xl p-8 md:p-12 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-[1.5rem] font-semibold text-[#000000] mb-5">
              Automated Fertigation
            </h3>
            <p className="text-[1rem] md:text-[1rem] text-[#333333] leading-[1.6] mb-10 pr-8">
              Precision-controlled nutrient dosing ensures balanced growth, efficient
              resource use, and consistent crop outcomes.
            </p>
          </div>
          <div className="w-full rounded-2xl overflow-hidden mt-auto">
            <img 
              src="/technology/card02.jpg" 
              alt="Automated Fertigation" 
              className="w-full h-[200px] md:h-[250px] lg:h-[280px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechCards;
