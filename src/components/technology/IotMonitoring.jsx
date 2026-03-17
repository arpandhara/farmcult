import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    side: 'left',
    icon: '/icons/icon 7.png',
    title: 'Real-Time Tracking',
    description: 'Monitor temperature, humidity, and CO2 levels on the farm to maintain stable growing conditions.',
  },
  {
    side: 'left',
    icon: '/icons/icon 9.png',
    title: 'Data-Driven Crop Management',
    description: 'Access live performance insights that support tighter control over production cycles and yield consistency.',
  },
  {
    side: 'right',
    icon: '/icons/icon 8.png',
    title: 'Precision Nutrient Control',
    description: 'Track and regulate pH and EC levels to ensure balanced nutrient delivery and consistent plant health.',
  },
  {
    side: 'right',
    icon: '/icons/icon 10.png',
    title: 'Remote Cloud Access',
    description: 'View farm performance anytime through cloud-based monitoring systems designed for transparency and oversight.',
  },
];

const IotMonitoring = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.iot-heading, .iot-subtitle',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
      }
    );

    gsap.fromTo(
      '.iot-feature-card',
      { y: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.iot-grid', start: 'top 75%' },
        y: 0, autoAlpha: 1, duration: 0.9, stagger: 0.15, ease: 'power3.out',
      }
    );

    gsap.fromTo(
      '.iot-center-image',
      { scale: 1.06, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.iot-grid', start: 'top 75%' },
        scale: 1, autoAlpha: 1, duration: 1.2, ease: 'power4.out',
      }
    );
  }, { scope: sectionRef });

  const leftCards = features.filter(f => f.side === 'left');
  const rightCards = features.filter(f => f.side === 'right');

  return (
    <section ref={sectionRef} className="iot-monitoring-section bg-[#F4F4F2] min-h-[140vh] p-28 flex flex-col justify-center">
      {/* Heading */}
      <div className="text-center mb-16 max-w-[70vw] mx-auto">
        <h2 className="iot-heading text-[2.4rem] md:text-[2.75rem] font-normal text-[#000000] leading-[1.2] tracking-tight mb-7">
          All Farms Equipped With IOT Monitoring
        </h2>
        <p className="iot-subtitle text-[1rem] text-[#000000] leading-[2]">
          Each farm operates with IoT-based systems that track environmental and nutrient parameters inside the greenhouse.
          This enables data-backed decisions, tighter control over crop cycles, and improved consistency across production.
        </p>
      </div>

      {/* 3-column grid — Added lg:min-h-[80vh] to set the layout height on desktop */}
      <div className="iot-grid grid grid-cols-1 lg:grid-cols-[2fr_auto_2fr] gap-6 max-w-[1300px] mx-auto items-stretch w-full lg:min-h-[100vh]">

        {/* Left cards — Added h-full so the flex column fills the stretched grid */}
        <div className="flex flex-col gap-6 h-full">
          {leftCards.map((f, i) => (
            <div key={i} className="iot-feature-card flex-1 bg-[#EFEEEE] rounded-2xl p-8 flex flex-col justify-center">
              <div className="mb-16">
                <img src={f.icon} alt={f.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-[1.15rem] font-semibold text-[#000000] mb-9">{f.title}</h3>
              <p className="text-[0.95rem] text-[#000000] leading-[1.65] max-w-[75%]">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Center image - Now relative with a black overlay */}
        <div className="iot-center-image relative w-full lg:w-[340px] xl:w-[380px] rounded-2xl overflow-hidden self-stretch">
          <img
            src="/whyFarmCult/growSmarterBannerimg.jpg"
            alt="IoT Farm Monitoring"
            className="w-full h-full object-cover"
          />
          {/* Black mask overlay */}
          <div className="absolute inset-0 bg-black/40" /> 
        </div>

        {/* Right cards — Added h-full */}
        <div className="flex flex-col gap-6 h-full">
          {rightCards.map((f, i) => (
            <div key={i} className="iot-feature-card flex-1 bg-[#EFEEEE] rounded-2xl p-8 flex flex-col justify-center">
              <div className="mb-16">
                <img src={f.icon} alt={f.title} className="w-10 h-10 object-contain" />
              </div>
              <h3 className="text-[1.15rem] font-semibold text-[#000000] mb-9">{f.title}</h3>
              <p className="text-[0.95rem] text-[#000000] leading-[1.65] max-w-[75%]">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IotMonitoring;