import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const navRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThreshold = 10; // Buffer to prevent jitter

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Background and blur effect after 50px
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide on scroll down, show on scroll up with a threshold buffer
      if (Math.abs(currentScrollY - lastScrollY.current) > scrollThreshold) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useGSAP(() => {
    // Initial entrance animation
    gsap.fromTo('.nav-logo, .nav-link, .btn-outline',
      { y: -12, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08, ease: 'expo.out', delay: 0.1 }
    );
  }, { scope: navRef, dependencies: [] });

  useGSAP(() => {
    // Visibility toggle animation - Refined for "fluidity"
    gsap.to(navRef.current, {
      y: isVisible ? 0 : -110, // Hide a bit further to ensure shadow is gone
      duration: 0.6,
      ease: 'expo.out', // Premium, decelerating feel
      overwrite: true
    });
  }, { dependencies: [isVisible] });

  return (
    <nav 
      className={`nav-container fixed top-0 w-full flex justify-between items-center z-[100] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] left-0 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4 px-[5%]' : 'bg-transparent py-8 px-[5%]'
      }`} 
      ref={navRef}
    >
      {/* Wrapper to maintain max-width behavior on fixed element */}
      <div className="flex justify-between items-center w-full max-w-[1600px] mx-auto">
        {/* Logo Column */}
        <div className="nav-col nav-logo-col flex-1 flex justify-start">
          <Link to="/">
            <img src="/logo.svg" alt="Farmcult Logo" className="nav-logo h-12" />
          </Link>
        </div>
        
        {/* Links Column */}
        <div className="nav-col nav-links-col flex-1 flex justify-center">
          <div className="nav-links flex gap-10">
            <Link to="/solutions" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
              Solutions
            </Link>
            <Link to="/why-farmcult" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
              Why Farmcult
            </Link>
            <Link to="/technology" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
              Technology
            </Link>
            <Link to="/resources" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
              Resources
            </Link>
          </div>
        </div>
        
        {/* Button Column */}
        <div className="nav-col nav-btn-col flex-1 flex justify-end">
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            window.lenis?.scrollTo('#contact');
          }}
          className="btn-outline group border border-border-color rounded-[40px] py-[0.6rem] px-6 font-medium text-[0.95rem] text-text-primary bg-transparent whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-text-primary hover:text-bg-color hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(52,52,52,0.15)]"
        >
            <span className="btn-text-wrapper relative inline-block overflow-hidden align-top">
              <span className="btn-text-inner block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                Get Started
              </span>
              <span className="btn-text-inner clone absolute top-full left-0 w-full text-center block transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-full">
                Get Started
              </span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;