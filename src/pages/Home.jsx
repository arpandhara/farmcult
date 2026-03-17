import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import About from '../components/About';
import RiseOfFarming from '../components/RiseOfFarming';
import Solutions from '../components/Solutions';
import SmartTechnology from '../components/SmartTechnology';
import CaseStudy from '../components/CaseStudy';
import FarmcultMedia from '../components/FarmcultMedia';
import ParticipantsReviews from '../components/ParticipantsReviews';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

// FIX 1: Removed 'y' offset from pageTransition. 
// Framer Motion translating the wrapper while GSAP translates the children 
// creates nested transform conflicts (stuttering) on load.
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

const Home = () => {
  const homeRef = useRef();

  useGSAP(() => {
    // Hero text — begins as navbar finishes its stagger for a seamless 2nd beat
    gsap.fromTo('.hero-title, .hero-subtitle, .btn-filled', 
      { y: 30, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.12, ease: 'power3.out', delay: 0.4 }
    );

    // Hero image — 3rd beat, rises as the text settles
    gsap.fromTo('.hero-image-wrapper',
      { y: 60, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 1.4, ease: 'power3.out', delay: 0.65 }
    );

    // Parallax Effect on Hero Image
    gsap.to('.hero-bg-img', {
      scrollTrigger: {
        trigger: '.hero-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: 150,
      scale: 1.05,
      ease: 'none', // FIX 2: Added ease: 'none' so the parallax doesn't lag behind the scrollbar
    });

    // About Section Animations
    gsap.fromTo('.about-header-text, .about-header-link',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.about-container', start: 'top 80%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
      }
    );

    gsap.fromTo('.feature-item',
      { y: 20, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.about-features-panel', start: 'top 85%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out'
      }
    );

    // Rise of Farming Animations
    gsap.fromTo('.rise-title, .rise-desc',
      { y: 30, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.rise-container', start: 'top 75%' },
        y: 0, autoAlpha: 1, duration: 1, stagger: 0.2, ease: 'power3.out'
      }
    );

    gsap.fromTo('.state-capsule',
      { scale: 0.8, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.states-capsule-grid', start: 'top 85%' },
        scale: 1, autoAlpha: 1, duration: 0.6, stagger: 0.05, ease: 'back.out(1.5)'
      }
    );

    gsap.fromTo('.stat-card',
      { y: 40, autoAlpha: 0 },
      {
        scrollTrigger: { trigger: '.rise-stats-grid', start: 'top 90%' },
        y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out'
      }
    );

  }, { scope: homeRef });

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      ref={homeRef}
      // FIX 3: Accurately recalculates trigger positions once the entrance fade is totally finished
      onAnimationComplete={() => ScrollTrigger.refresh()}
    >
      <Hero />
      <About />
      <RiseOfFarming />
      <Solutions />
      <SmartTechnology />
      <CaseStudy />
      <FarmcultMedia />
      <ParticipantsReviews />
      <ContactSection />
      <Footer />
    </motion.div>
  );
};

export default Home;