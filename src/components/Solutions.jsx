import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Left text animations
    gsap.fromTo('.solutions-title', 
      {
        y: 30,
        autoAlpha: 0,
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3.out'
      }
    );

    gsap.fromTo('.solutions-desc', 
      {
        y: 20,
        autoAlpha: 0,
      },
      {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out'
      }
    );

    // Cards staggered animation
    gsap.fromTo('.solution-card', 
      {
        y: 50,
        autoAlpha: 0,
      },
      {
        scrollTrigger: {
          trigger: '.solutions-cards-wrapper',
          start: 'top 85%',
        },
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out'
      }
    );
  }, { scope: sectionRef });

  return (
    <section className="solutions-section flex flex-col lg:flex-row bg-[#ECECEC] px-[5%] py-[80px] lg:py-[100px] min-h-[80vh] gap-12 lg:gap-[5%] items-start" ref={sectionRef}>
      
      <div className="solutions-left flex-1 lg:flex-none lg:w-[25%] lg:max-w-[350px] mb-0 text-center lg:text-left w-full">
        <h2 className="solutions-title text-[clamp(2rem,3.5vw,2.5rem)] font-semibold mb-6 text-text-primary leading-[1.2]">
          Our Solutions
        </h2>
        <p className="solutions-desc text-base text-[#333] leading-[2] max-w-[600px] mx-auto lg:mx-0">
          From hands-free investing to <br className="hidden lg:block" />hands-on farming, we offer <br className="hidden lg:block" />flexible ways to work with <br className="hidden lg:block" />Farmcult based on your goals.
        </p>
      </div>
      
      <div className="solutions-right flex-1 w-full">
        <div className="solutions-cards-wrapper flex flex-col md:flex-row gap-8 justify-between">
          
          {/* Card 1 */}
          <div className="solution-card flex-1 relative bg-[#ECECEC] bg-cover bg-center rounded-[20px] min-h-[400px] md:min-h-[540px] flex flex-col justify-between py-10 px-8 text-white overflow-hidden transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%), url('/ourSolutionCard1.jpg')" }}>
            <div className="solution-card-overlay hidden"></div>
            <div className="solution-card-top relative z-10">
              <h3 className="solution-card-title text-[1.7rem] font-bold leading-[1.2]">Passive Income Model</h3>
            </div>
            <div className="solution-card-bottom relative z-10">
              <p className="solution-card-desc text-[0.95rem] leading-[29px] mb-6 text-[#F7F7F7]">
                Invest in a hydroponic farm while Farmcult manages operations end-to-end.
              </p>
              <button className="solution-btn w-full flex justify-between items-center bg-white text-text-primary border-none py-[0.85rem] px-6 rounded-[30px] text-[0.9rem] font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent hover:text-white group">
                <span>Learn More</span> <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="solution-card flex-1 relative bg-[#ECECEC] bg-cover bg-center rounded-[20px] min-h-[400px] md:min-h-[540px] flex flex-col justify-between py-10 px-8 text-white overflow-hidden transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%), url('/ourSolutionCard2.jpg')" }}>
            <div className="solution-card-overlay hidden"></div>
            <div className="solution-card-top relative z-10">
              <h3 className="solution-card-title text-[1.7rem] font-bold leading-[1.2]">Turnkey Solution</h3>
            </div>
            <div className="solution-card-bottom relative z-10">
              <p className="solution-card-desc text-[0.95rem] leading-[29px] mb-6 text-[#F7F7F7]">
                Farmcult will build and handover a fully operational hydroponic farm on your land.
              </p>
              <button className="solution-btn w-full flex justify-between items-center bg-white text-text-primary border-none py-[0.85rem] px-6 rounded-[30px] text-[0.9rem] font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent hover:text-white group">
                <span>Learn More</span> <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="solution-card flex-1 relative bg-[#ECECEC] bg-cover bg-center rounded-[20px] min-h-[400px] md:min-h-[540px] flex flex-col justify-between py-10 px-8 text-white overflow-hidden transition-transform duration-400 ease-[cubic-bezier(0.25,1,0.5,1)] hover:-translate-y-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.1)]" style={{ backgroundImage: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.85) 100%), url('/ourSolutionCard3.jpg')" }}>
            <div className="solution-card-overlay hidden"></div>
            <div className="solution-card-top relative z-10">
              <h3 className="solution-card-title text-[1.7rem] font-bold leading-[1.2]">Education & Training</h3>
            </div>
            <div className="solution-card-bottom relative z-10">
              <p className="solution-card-desc text-[0.95rem] leading-[29px] mb-6 text-[#F7F7F7]">
                Learn hydroponic farming through practical training, workshops, and guidance.
              </p>
              <button className="solution-btn w-full flex justify-between items-center bg-white text-text-primary border-none py-[0.85rem] px-6 rounded-[30px] text-[0.9rem] font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent hover:text-white group">
                <span>Learn More</span> <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;