import React from "react";
import WfcHeader from "../components/WhyFarmcult/WfcHeader";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { Link, Navigate } from "react-router-dom";
// import casestudies from "../assets/docs/blogs.js";
import caseStudies from "../assets/docs/case_studies.js";


const firstCaseStudy = caseStudies.find((caseStudy) => caseStudy.id === 1);
const otherCaseStudies = caseStudies.filter((caseStudy) => caseStudy.id !== 1);

const CaseStudies = () => {
  return (
    <div className="case-studies-page">
      <WfcHeader
        tag="CASE STUDIES"
        title="Real Farms. Real Results."
        subtitle="Every project is built with planning, technology, and long-term viability in mind. Explore how Farmcult transforms land into structured operations across India."
      />

      {firstCaseStudy && (
        <section className="flex flex-col gap-[60px] px-16 pb-16 bg-[#F7F7F7]">
          <div className="flex justify-center">
            <Link to={`/case-study/${firstCaseStudy.id}`}>
              <div
                className="w-[1152px] h-[567px] flex items-center justify-end px-16 py-9 rounded-[16px] bg-cover bg-center cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out"
                style={{ backgroundImage: `url(${firstCaseStudy.image})` }}
              >
                <div className="w-[413px] h-[495px] bg-[#F7F7F7] rounded-[16px] px-[37px] py-[52px] flex flex-col gap-[37px]">
                  {/* Case-Study Tag */}
                  <div className="flex justify-center items-center px-3 py-[2px] bg-[rgba(141,200,58,0.25)] rounded-[16px] w-fit">
                    <span className="text-[15px] text-[#343434] font-normal">
                      Case Study
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-[32px] leading-[48px] font-medium text-black">
                    {firstCaseStudy.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[16px] leading-[29px] text-black">
                    {firstCaseStudy.description}
                  </p>

                  {/* Date */}
                  <span className="text-[16px] leading-[29px] font-bold text-[#8DC83A]">
                    {firstCaseStudy.date}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="bg-[#ECECEC] py-16 px-16">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
          {otherCaseStudies.map((caseStudy, index) => (
            <Link to={`/case-study/${caseStudy.id}`}>
              <div
                key={index}
                className="bg-white rounded-[16px] h-full p-8 flex flex-col gap-6 cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out"
              >
                {/* Case-Study Tag */}
                <div className="w-fit px-3 py-[2px] rounded-[16px] bg-[rgba(141,200,58,0.25)] text-[15px] text-[#343434]">
                  Case Study
                </div>

                {/* Image */}
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-[250px] object-cover rounded-[16px]"
                />

                {/* Title */}
                <h3 className="text-[18px] font-bold leading-[36px] text-[#343434]">
                  {caseStudy.title}
                </h3>

                {/* Description */}
                <p className="text-[15px] leading-[29px] text-[#343434] line-clamp-3">
                  {caseStudy.description}
                </p>

                {/* Date */}
                <span className="text-[16px] font-bold text-[#8DC83A]">
                  {caseStudy.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default CaseStudies;
