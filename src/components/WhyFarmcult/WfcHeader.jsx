import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const WfcHeader = ({
  tag = "WHY FARMCULT?",
  title = "Cultivating for Tomorrow",
  subtitle = "Not just growing crops. Building the future of modern farming.",
  image = "",
  variant = "light",
}) => {
  const headerRef = useRef(null);
  const isDark = variant === "dark";

  useGSAP(
    () => {
      gsap.fromTo(
        ".wfc-label, .wfc-main-title, .wfc-main-subtitle",
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    },
    { scope: headerRef }
  );

  return (
    <section
      ref={headerRef}
      className="relative w-full overflow-hidden"
    >
      {/* ✅ FULL WIDTH IMAGE */}
      {isDark && image && (
        <div className="relative w-full h-[368px]">
          <img
            src={image}
            alt="banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* ✅ CENTERED CONTENT (ONLY THIS IS LIMITED) */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-[1152px] h-[272px] flex flex-col items-center justify-center text-center gap-[16px] px-[16px]">

          <span
            className={`wfc-label text-[30px] font-bold uppercase ${
              isDark ? "text-[#8DC83A]" : "text-accent"
            }`}
          >
            {tag}
          </span>

          <h1
            className={`wfc-main-title text-[50px] leading-[80px] font-thin ${
              isDark ? "text-white" : "text-text-primary"
            }`}
          >
            {title}
          </h1>

          <p
            className={`wfc-main-subtitle text-[16px] leading-[26px] max-w-[700px] ${
              isDark ? "text-white/90" : "text-text-primary"
            }`}
          >
            {subtitle}
          </p>

        </div>
      </div>
    </section>
  );
};

export default WfcHeader;