import React, { useRef, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  const navRef = useRef();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const scrollThreshold = 10; // Buffer to prevent jitter

  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return; // Don't hide navbar when menu is open

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
  }, [mobileMenuOpen]);

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
      y: isVisible || mobileMenuOpen ? 0 : -110, // Hide a bit further to ensure shadow is gone, don't hide if menu open
      duration: 0.6,
      ease: 'expo.out', // Premium, decelerating feel
      overwrite: true
    });
  }, { dependencies: [isVisible, mobileMenuOpen] });

  return (
    <>
      <nav
        className={`nav-container fixed top-0 w-full z-[110] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] left-0 ${
          isScrolled || mobileMenuOpen || location.pathname === '/passive-income' || location.pathname === '/turnkey-solution' || location.pathname === '/education-and-training' ? 'bg-white/95 backdrop-blur-md shadow-sm py-4 px-4 md:px-[5%]' : 'bg-transparent py-6 md:py-8 px-4 md:px-[5%]'
        }`}
        ref={navRef}
      >
        {/* Wrapper to maintain max-width behavior on fixed element */}
        <div className="flex justify-between items-center w-full max-w-[1600px] mx-auto relative z-[110]">
          {/* Logo Column */}
          <div className="nav-col nav-logo-col flex-1 flex justify-start">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              <img src="/logo.svg" alt="Farmcult Logo" className="nav-logo h-8 md:h-12" />
            </Link>
          </div>

          {/* Links Column - Desktop Only */}
          <div className="nav-col nav-links-col hidden lg:flex flex-1 justify-center">
            <div className="nav-links flex gap-10 items-center">
              <div className="nav-item group relative py-4">
                <Link to="/solutions" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent block">
                  Solutions
                </Link>
                <div className="absolute top-full left-0 w-[220px] bg-white border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] z-50 transform origin-top translate-y-2 group-hover:translate-y-0">
                  <Link to="/passive-income" className="block px-5 py-2.5 text-[0.95rem] text-text-primary hover:bg-gray-50 hover:text-accent transition-colors">Passive Income</Link>
                  <Link to="/turnkey-solution" className="block px-5 py-2.5 text-[0.95rem] text-text-primary hover:bg-gray-50 hover:text-accent transition-colors">Turnkey Solution</Link>
                  <Link to="/education-and-training" className="block px-5 py-2.5 text-[0.95rem] text-text-primary hover:bg-gray-50 hover:text-accent transition-colors">Education & Training</Link>
                </div>
              </div>
              <Link to="/why-farmcult" className="nav-link font-medium text-base text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
                Why Farmcult
              </Link>
              <Link to="/technology" className="nav-link font-normal text-[16px] text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
                Technology
              </Link>
              <Link to="/resources" className="nav-link font-normal text-[16px] text-text-primary opacity-90 transition-all duration-200 ease-in-out whitespace-nowrap hover:opacity-100 hover:text-accent">
                Resources
              </Link>
            </div>
          </div>

          {/* Button Column - Desktop Only */}
          <div className="nav-col nav-btn-col hidden lg:flex flex-1 justify-end">
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

          {/* Hamburger Menu - Mobile Only */}
          <div className="lg:hidden flex justify-end flex-1 items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-text-primary z-[120] relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-[2px] bg-text-primary rounded transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></div>
              <div className={`w-6 h-[2px] bg-text-primary rounded transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-[2px] bg-text-primary rounded transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></div>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Full Screen Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] lg:hidden ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-[100vh]'}`}
      >
        <div className="flex flex-col items-center gap-8 text-2xl font-medium w-full px-6 text-center">
            <Link to="/solutions" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile transition-colors hover:text-accent w-full py-2">Solutions</Link>
            <Link to="/why-farmcult" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile transition-colors hover:text-accent w-full py-2">Why Farmcult</Link>
            <Link to="/technology" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile transition-colors hover:text-accent w-full py-2">Technology</Link>
            <Link to="/resources" onClick={() => setMobileMenuOpen(false)} className="nav-link-mobile transition-colors hover:text-accent w-full py-2">Resources</Link>
            
            <a 
              href="#contact" 
              onClick={(e) => { 
                e.preventDefault(); 
                setMobileMenuOpen(false); 
                setTimeout(() => window.lenis?.scrollTo('#contact'), 300); // Wait for menu to close
              }} 
              className="mt-6 inline-block bg-text-primary text-bg-color rounded-[40px] py-[1rem] px-8 text-lg w-[137px] h-[43px] transition-transform active:scale-95"
            >
              Get Started
            </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;