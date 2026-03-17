import React from 'react';

const About = () => {
  return (
    <section className="about-container w-full max-w-[1600px] mx-auto pt-32 pb-16 px-[5%] flex flex-col" id="why">
      
      {/* Header Section */}
      <div className="about-header flex justify-between items-end mb-12 flex-wrap gap-8">
        <div className="about-header-text max-w-[700px]">
          <h2 className="section-title text-[clamp(2rem,3.5vw,3rem)] font-medium mb-4 text-text-primary tracking-[-0.02em]">
            Cultivating For Tomorrow
          </h2>
          <p className="section-subtitle text-[clamp(1rem,1.5vw,1.15rem)] text-text-secondary leading-[2]">
            Farmcult uses technology to build farming systems that are easy to manage, sustainable, and designed to grow over time.
          </p>
        </div>
        
        {/* Animated Underline Link */}
        <div className="about-header-link">
          <a href="#about-us" className="btn-text-link group font-medium text-base text-text-primary relative inline-block pb-[2px] after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-text-primary after:origin-bottom-right after:transition-transform after:duration-[250ms] after:ease-out hover:after:scale-x-100 hover:after:origin-bottom-left">
            Learn more about Farmcult &rarr;
          </a>
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content-wrapper relative w-full rounded-2xl overflow-hidden h-[85vh] min-h-[600px]">
        <div className="about-image-card absolute top-0 left-0 w-full h-full">
          <img 
            src="/contactFromimg.jpg" 
            alt="Farmcult Greenhouse Facility" 
            className="about-img w-full h-full object-cover rounded-2xl" 
          />
          
          {/* Features Panel Overlay */}
          <div className="about-features-panel absolute right-8 top-[36px] bottom-[36px] bg-bg-color rounded-2xl py-12 px-10 flex flex-col justify-evenly w-full max-w-[400px] shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
            
            <div className="feature-item flex flex-col items-start gap-4">
              <div className="feature-icon flex items-center justify-center p-1">
                <img src="/icons/icon 1.svg" alt="Technology-led" />
              </div>
              <div className="feature-text">
                <h3 className="feature-title text-xl font-semibold font-inter mb-2 text-text-primary tracking-[-0.01em]">
                  Technology-led
                </h3>
                <p className="feature-desc text-[0.95rem] text-text-secondary leading-[29px]">
                  Automation, monitoring, and data-based decisions
                </p>
              </div>
            </div>

            <div className="feature-item flex flex-col items-start gap-4">
              <div className="feature-icon flex items-center justify-center p-1">
                <img src="/icons/icon 2.svg" alt="Sustainable" />
              </div>
              <div className="feature-text">
                <h3 className="feature-title text-xl font-semibold font-inter mb-2 text-text-primary tracking-[-0.01em]">
                  Sustainable
                </h3>
                <p className="feature-desc text-[0.95rem] text-text-secondary leading-[29px]">
                  Less water. No pesticides. Cleaner farming.
                </p>
              </div>
            </div>

            <div className="feature-item flex flex-col items-start gap-4">
              <div className="feature-icon flex items-center justify-center p-1">
                <img src="/icons/icon 3.svg" alt="Scaleable" />
              </div>
              <div className="feature-text">
                <h3 className="feature-title text-xl font-semibold font-inter mb-2 text-text-primary tracking-[-0.01em]">
                  Scaleable
                </h3>
                <p className="feature-desc text-[0.95rem] text-text-secondary leading-[29px]">
                  Systems that can grow from small to large farms
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;