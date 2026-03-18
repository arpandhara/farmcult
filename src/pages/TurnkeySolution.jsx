import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

gsap.registerPlugin(ScrollTrigger);

const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
  }
};

const TurnkeySolution = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Hero Animations
    gsap.fromTo('.ts-hero-title, .ts-hero-desc',
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
    );

    // Parallax on hero Background
    gsap.to('.ts-hero-bg', {
      scrollTrigger: {
        trigger: '.ts-hero-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 150,
      scale: 1.05,
      ease: 'none',
    });

    // Content Section Animations
    gsap.fromTo('.ts-section-content',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.ts-content-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
      }
    );
  }, { scope: containerRef });

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={containerRef}
      onAnimationComplete={() => ScrollTrigger.refresh()}
      className="bg-[#FAFAFA]"
    >
      {/* Hero Section */}
      <section className="ts-hero-container relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="ts-hero-bg absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 origin-bottom"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url('/ourSolutionCard3.jpg')" }}
        ></div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-[5%] mt-10 text-left">
          <div className="max-w-4xl">
            <h1 className="ts-hero-title text-white text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] mb-6 tracking-tight">
              Turnkey Solution
            </h1>
            <p className="ts-hero-desc text-white/90 text-[clamp(1.1rem,1.5vw,1.25rem)] font-medium leading-[1.6] max-w-2xl">
              Design, construction, crop planning, and operational setup. Handled end-to-end by Farmcult.
            </p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="ts-content-container py-20 lg:py-32 px-[5%]">
        <div className="max-w-6xl mx-auto ts-section-content">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-8 leading-[1.2]">
                What's Included in our<br className="hidden md:block" /> Turnkey Solution?
              </h2>
              
              <p className="text-[1.1rem] text-[#555] leading-[1.8] mb-10 lg:pr-4">
                Farmcult's turnkey model covers every stage of setting up a high-tech hydroponic farm. From design and infrastructure to crop planning and operational readiness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
                {/* List Items */}
                {[
                  "Farm design & layout",
                  "Automation & climate control",
                  "Polyhouse construction",
                  "Crop planning & agronomy",
                  "Hydroponic system installation",
                  "Market linkages post-harvest"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#444] text-[1.05rem] leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
              <div className="pb-[65%] lg:pb-[75%] relative w-full overflow-hidden rounded-[2rem] group">
                <img 
                  src="/caseStudyHomeimg.jpg" 
                  alt="Turnkey Hydroponic Farm" 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  onError={(e) => { e.target.src = '/ourSolutionCard3.jpg'; }}
                />
                <div className="absolute inset-0 bg-black/5 rounded-[2rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default TurnkeySolution;
