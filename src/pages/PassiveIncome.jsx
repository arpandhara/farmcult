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

const PassiveIncome = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Hero Animations
    gsap.fromTo('.pi-hero-title, .pi-hero-desc',
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
    );

    // Parallax on hero Background
    gsap.to('.pi-hero-bg', {
      scrollTrigger: {
        trigger: '.pi-hero-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 150,
      scale: 1.05,
      ease: 'none',
    });

    // Content Section Animations
    gsap.fromTo('.pi-section-title, .pi-section-desc',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.pi-content-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
      }
    );

    // Stats Grid Animations
    gsap.fromTo('.pi-stat-item',
      { y: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.pi-stats-grid', start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out'
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
      <section className="pi-hero-container relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden pt-20">
        <div
          className="pi-hero-bg absolute top-0 left-0 w-full h-full bg-cover bg-center z-0 origin-bottom"
          style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url('/ourSolutionCard1.jpg')" }}
        ></div>

        <div className="relative z-10 text-center px-[5%] max-w-4xl mx-auto mt-10">
          <h1 className="pi-hero-title text-white text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] mb-6 tracking-tight">
            Passive Income Model
          </h1>
          <p className="pi-hero-desc text-white/90 text-[clamp(1.1rem,1.5vw,1.25rem)] font-medium leading-[1.6] max-w-2xl mx-auto">
            Invest in a hydroponic farm while Farmcult manages operations end-to-end.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="pi-content-container py-[100px] lg:py-[140px] px-[5%]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
            <h2 className="pi-section-title text-[clamp(2rem,3.5vw,2.8rem)] font-bold text-text-primary mb-6 leading-[1.2]">
              Earn Tax-Free Without Moving a Finger
            </h2>
            <p className="pi-section-desc text-[#555] text-[1.1rem] leading-[1.8]">
              We manage setup, cultivation, monitoring, and operations enabling stable returns without day to day involvement.
            </p>
          </div>

          {/* Stats / Features Layout */}
          <div className="pi-stats-grid grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-12 relative">
            {/* Divider lines conceptually visible on desktop */}
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[33%] w-[1px] bg-gray-200"></div>
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-[66%] w-[1px] bg-gray-200"></div>

            {/* Feature 1 */}
            <div className="pi-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 group flex-1">
              <h3 className="text-[clamp(2rem,2.8vw,2.5rem)] font-semibold text-text-primary mb-3">
                Up to 50%
              </h3>
              <p className="text-[1.2rem] font-medium text-[#444] mb-3">Capital Subsidy</p>
              <p className="text-[1rem] text-[#666] leading-[1.6]">
                Available under National Horticulture Board schemes for eligible projects.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="pi-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 group flex-1">
              <h3 className="text-[clamp(2rem,2.8vw,2.5rem)] font-semibold text-text-primary mb-3">
                3% <span className="text-[1.3rem] font-medium text-[#444] tracking-normal inline-block ml-1">Interest Subsidy</span>
              </h3>
              <p className="text-[1.2rem] font-medium text-[#444] mb-3">Available</p>
              <p className="text-[1rem] text-[#666] leading-[1.6]">
                Loan interest support available under the Agriculture Infrastructure Fund scheme.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="pi-stat-item flex flex-col items-center md:items-start text-center md:text-left px-4 group flex-1">
              <h3 className="text-[clamp(2rem,2.8vw,2.5rem)] font-semibold text-text-primary mb-3">
                Tax-Free
              </h3>
              <p className="text-[1.2rem] font-medium text-[#444] mb-3">Returns</p>
              <p className="text-[1rem] text-[#666] leading-[1.6]">
                Agricultural income qualifies for tax exemptions under Indian law.
              </p>
            </div>
          </div>

          {/* What's Included Section */}
          <div className="pi-whats-included mt-24 md:mt-32 pt-16 md:pt-24 border-t border-gray-200">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
              <div className="w-full lg:w-1/2">
                <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold text-text-primary mb-8 leading-[1.2]">
                  What's Included in our<br className="hidden md:block" /> Passive Income Solution?
                </h2>

                <p className="text-[1.1rem] text-[#555] leading-[1.8] mb-6">
                  Farmcult's passive income model is designed for investors and landowners who want exposure to modern agriculture without managing daily farm operations.
                </p>

                <p className="text-[1.1rem] text-[#555] leading-[1.8] mb-10">
                  We handle the setup, cultivation, monitoring, and farm management while you benefit from a structured agricultural asset.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6">
                  {/* List Item 1 */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#444] text-[1.05rem]">End-to-end farm setup</span>
                  </div>

                  {/* List Item 4 */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#444] text-[1.05rem]">Farm operations management</span>
                  </div>

                  {/* List Item 2 */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#444] text-[1.05rem]">IoT monitoring &amp; reporting</span>
                  </div>

                  {/* List Item 5 */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#444] text-[1.05rem]">Crop planning &amp; yield optimisation</span>
                  </div>

                  {/* List Item 3 */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#444] text-[1.05rem]">Market linkage &amp; sales coordination</span>
                  </div>

                  {/* List Item 6 */}
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#444] text-[1.05rem]">Ongoing performance oversight</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                <div className="pb-[60%] lg:pb-[70%] relative w-full h-full overflow-hidden rounded-3xl group">
                  <img
                    src="/ourSolutionCard2.jpg"
                    alt="Passive Income Farming"
                    className="absolute inset-0 w-full h-full object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA] px-[5%]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-6">
              How It Works
            </h2>
            <p className="text-[1.1rem] text-[#555] leading-[1.8]">
              We follow a clear, step-by-step process to set up your hydroponic farm. Farmcult manages each stage with clear timelines and support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-12 relative w-full items-start">
            {/* Horizontal Line for Desktop */}
            <div className="hidden lg:block absolute top-[2.5rem] left-[8%] right-[8%] h-[1px] border-t border-dashed border-gray-300 z-0"></div>

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center relative z-10 w-full">
              <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
                <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                  1
                </div>
                <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Site<br className="hidden lg:block" /> Feasibility</h3>
              <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">Land and resource assessment</p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center relative z-10 w-full">
              <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
                <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                  2
                </div>
                <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Capital<br className="hidden lg:block" /> Investment</h3>
              <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">Client funds infrastructure setup</p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center relative z-10 w-full">
              <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
                <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                  3
                </div>
                <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Farm<br className="hidden lg:block" /> Setup</h3>
              <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">Farm built and commissioned</p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center relative z-10 w-full">
              <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
                <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                  4
                </div>
                <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Operational<br className="hidden lg:block" /> Funding</h3>
              <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">Working capital deployed by Farmcult</p>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col items-center text-center relative z-10 w-full">
              <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
                <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                  5
                </div>
                <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Full Farm<br className="hidden lg:block" /> Management</h3>
              <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">Seed to sale operations handled</p>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col items-center text-center relative z-10 w-full">
              <div className="w-20 h-20 rounded-full border border-dashed border-gray-400 bg-white flex items-center justify-center mb-5 relative group transition-colors duration-300 hover:border-green-500">
                <div className="absolute top-0 -left-1 w-6 h-6 rounded-full bg-gray-100 border border-gray-300 flex items-center justify-center text-[0.7rem] font-bold text-gray-500 z-20">
                  6
                </div>
                <svg className="w-8 h-8 text-[#555] group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-text-primary text-[1.05rem] mb-2 leading-[1.3] px-1">Profit Sharing<br className="hidden lg:block" /> & Returns</h3>
              <p className="text-[0.85rem] text-[#666] leading-relaxed px-2">60:40 split with tax benefits</p>
            </div>
          </div>
        </div>
      </section>

      {/* Government Incentives Section */}
      <section className="py-20 lg:py-28 bg-white px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-6 leading-[1.2]">
                Government Incentives<br />Reduce Your Initial Investment
              </h2>
              <p className="text-[1.1rem] text-[#555] leading-[1.8] mb-8">
                Eligible hydroponic projects can receive capital subsidies of up to 50%, helping reduce initial investment and improve long-term viability.
              </p>
              <p className="text-[0.85rem] text-[#888] italic">
                *Availability depends on project eligibility and applicable state or central government schemes.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="pb-[60%] lg:pb-[65%] relative w-full overflow-hidden rounded-3xl group">
                <img
                  src="/ourSolutionCard3.jpg"
                  alt="Government Incentives"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-black/5 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More Solutions Section */}
      <section className="py-20 lg:py-28 bg-[#FAFAFA] px-[5%]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch">
            {/* Left Content */}
            <div className="w-full lg:w-1/3 flex flex-col justify-center">
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-text-primary mb-6 leading-[1.2]">
                Explore More<br />Solutions
              </h2>
              <p className="text-[1.05rem] text-[#555] leading-[1.8] mb-8 lg:pr-4">
                From hands-free investing to hands-on farming, we offer flexible ways to work with Farmcult based on your goals.
              </p>
            </div>

            {/* Right Cards */}
            <div className="w-full lg:w-2/3 flex flex-col sm:flex-row gap-6">
              {/* Card 1: Turnkey Solution */}
              <div className="flex-1 relative rounded-3xl overflow-hidden group aspect-[4/5] sm:aspect-auto sm:min-h-[400px] cursor-pointer">
                <img
                  src="/ourSolutionCard1.jpg"
                  alt="Turnkey Solution"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 z-10 text-white">
                  <h3 className="text-[1.6rem] font-bold max-w-[150px] leading-tight">Turnkey<br />Solution</h3>
                  <div className="mt-auto">
                    <p className="text-[1rem] text-white/95 leading-relaxed mb-8">
                      Farmcult will build a fully operational hydroponic farm on your land.
                    </p>
                    <button className="bg-white text-text-primary px-6 py-3 rounded-full text-[0.95rem] font-semibold flex items-center justify-between w-[200px] hover:bg-gray-100 transition-colors">
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2: Education & Training */}
              <div className="flex-1 relative rounded-3xl overflow-hidden group aspect-[4/5] sm:aspect-auto sm:min-h-[400px] cursor-pointer">
                <img
                  src="/farmCultinMediaImg1.jpg"
                  alt="Education & Training"
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  onError={(e) => { e.target.src = '/contactFromimg.jpg'; }}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 z-10 text-white">
                  <h3 className="text-[1.6rem] font-bold max-w-[200px] leading-tight">Education &<br />Training</h3>
                  <div className="mt-auto">
                    <p className="text-[1rem] text-white/95 leading-relaxed mb-8 pr-2">
                      Learn hydroponic farming through practical training, workshops, and guidance.
                    </p>
                    <button className="bg-white text-text-primary px-6 py-3 rounded-full text-[0.95rem] font-semibold flex items-center justify-between w-[200px] hover:bg-gray-100 transition-colors">
                      Learn More
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
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

export default PassiveIncome;
