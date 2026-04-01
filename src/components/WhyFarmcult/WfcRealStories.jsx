import React from "react";

const WfcRealStories = () => {
  return (
    <section className="w-full bg-white py-[64px] px-[64px]">
      
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[64px] items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-start">
          <img
            src="/RealStories.jpg"
            alt="Client Story"
            className="w-[413px] h-[488px] object-cover rounded-2xl"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-[639px] h-[488px] flex flex-col justify-center">
          
          {/* HEADING */}
          <h2 className="text-[36px] leading-[44px] font-semibold text-[#1A1A1A] mb-[16px]">
            Real Stories With Real Outcomes
          </h2>

          {/* PARAGRAPH */}
          <p className="text-[#667085] text-[16px] leading-[26px] mb-[28px]">
           From concept to execution, we ensure consistency and depth across every engagement.
            Here’s how our clients describe their experience with Farmcult.
          </p>

          {/* BULLETS */}
          <ul className="space-y-[10px]">
            {[
              "Precision-led execution at every stage",
              "Built for scale and long-term viability",
              "Sustainability at the core of every solution",
              "Seamless journey from concept to execution",
              "Trusted partnerships built on transparency",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-[10px] text-[#344054] text-[16px] leading-[24px]"
              >
                <span className="text-[#12B76A] mt-[4px] text-[14px]">
                  ✓
                </span>

                <span>{item}</span>
              </li>
            ))}
          </ul>

        </div>
      </div>

    </section>
  );
};

export default WfcRealStories;