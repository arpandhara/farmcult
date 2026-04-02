import React from 'react';

const TopBanner = () => {
  return (
    <div className="w-full h-[52px] bg-[#8DC83A] flex items-center justify-center px-4 relative z-[60]">
      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          window.lenis?.scrollTo('#contact');
        }}
        className="text-white font-inter text-[15px] font-normal underline decoration-white/80 underline-offset-[3px] hover:text-white/90 transition-colors"
      >
        Get your free consultation today
      </a>
    </div>
  );
};

export default TopBanner;
