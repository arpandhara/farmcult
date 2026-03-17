import React from 'react';

const WfcBanner = ({ 
  title = "Grow smarter. Use less. Build for tomorrow.", 
  subtitle = "Technology-backed. Resource-efficient. Long-term focused.", 
  image = "/whyFarmCult/growSmarterBannerimg.jpg",
  tag = "",
  variant = "dark"
}) => {
  const isDark = variant === 'dark';

  return (
    <section 
      className={`wfc-about-banner relative flex items-center overflow-hidden ${
        isDark ? 'h-[350px]' : 'pt-24 pb-14'
      }`}
    >
      {/* Background — image+overlay for dark, plain white for light */}
      {isDark ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-white z-0" />
      )}

      {/* Content */}
      <div 
        className={`wfc-about-banner-inner relative z-10 w-full max-w-[100vw] mx-auto px-[5%] ${
          isDark ? 'text-left' : 'text-center'
        }`}
      >
        {tag && (
          <span className="inline-block text-[#8DC83A] text-[0.85rem] font-bold tracking-[0.2em] uppercase mb-4">
            {tag}
          </span>
        )}
        <h2 
          className={`wfc-about-banner-title text-[3rem] md:text-[3.5rem] font-normal mb-5 leading-[1.15] tracking-[-0.02em] ${
            isDark 
              ? 'text-white max-w-[800px]' 
              : 'text-[#2A2A2A] max-w-[700px] mx-auto'
          }`}
        >
          {title}
        </h2>
        <p 
          className={`wfc-about-banner-sub text-[1.05rem] leading-[1.7] max-w-[600px] ${
            isDark 
              ? 'text-white/90' 
              : 'text-[#666] mx-auto'
          }`}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default WfcBanner;