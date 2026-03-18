import React from 'react';

const WfcTeam = () => {
  return (
    <>
      <section className="wfc-team-section py-10 px-4 md:py-16 md:px-[5%] pb-16 md:pb-[8rem] max-w-[1600px] mx-auto">
        {/* Notice the reversed grid cols for the team header layout: lg:grid-cols-[1fr_1.2fr] */}
        <div className="wfc-team-inner grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-12 lg:gap-[100px] items-stretch">
          <div className="wfc-team-image-col w-full h-[300px] sm:h-[400px] lg:h-full">
            <img 
              src="/whyFarmCult/farmCultTeamGroupimg.jpg" 
              alt="Farmcult Team"
              className="w-full h-full object-cover rounded-2xl md:rounded-[32px] shadow-sm"
            />
          </div>
          <div className="wfc-team-text-col mt-4 lg:mt-0">
            <h2 className="wfc-section-heading text-[clamp(2rem,3.5vw,3rem)] font-medium mb-6 md:mb-8 tracking-[-0.02em] text-black">The People Behind the Farms</h2>
            <div className="wfc-founder-tag inline-flex py-2 px-[1.2rem] bg-accent/25 text-black rounded-full font-primary text-[0.85rem] md:text-[0.9rem] mb-8 md:mb-10">
              <span>Our Team</span>
            </div>
            <p className="wfc-foundation-desc text-[1rem] md:text-[1.1rem] text-text-primary leading-[1.8] md:leading-[2] mb-6 md:mb-8">
              Behind every greenhouse is a team of planners, engineers, agronomists, and operators
              working together.
            </p>
            <p className="wfc-foundation-desc text-[1rem] md:text-[1.1rem] text-text-primary leading-[1.8] md:leading-[2] mb-6 md:mb-8">
              From feasibility assessments to system installation and farm monitoring, our team
              ensures that every project runs with clarity and discipline.
            </p>
            <p className="wfc-foundation-desc text-[1rem] md:text-[1.1rem] text-text-primary leading-[1.8] md:leading-[2] mb-0">
              We combine on-ground agricultural knowledge with modern technology systems to deliver
              consistent performance.
            </p>
          </div>
        </div>
      </section>

      <section className="wfc-team-cards-section px-4 md:px-[5%] pb-16 md:pb-[4rem] max-w-[1600px] mx-auto">
        <div className="wfc-team-cards-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-6 md:gap-x-8">
          {[
            { name: 'Pritpal Singh', role: 'Founder & CEO', image: null },
            { name: 'Sanampreet', role: 'Manager: Projects & Business Development', image: '/whyFarmCult/teamSanampreet.jpg' },
            { name: 'Aman', role: 'Sr Agronomist', image: null },
            { name: 'Subhajit', role: 'Procurement Manager', image: '/whyFarmCult/Subhajit.jpg' },
            { name: 'Harleen', role: 'Business Development Manager', image: '/whyFarmCult/Harleen.jpg' },
            { name: 'Dr Akshiptika', role: 'Head- Research and Training', image: '/whyFarmCult/DrAkshiptika.jpg' },
          ].map((member, i) => (
            <div className="wfc-team-card flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2" key={i}>
              {/* Circular Professional Photo */}
              <div className="wfc-team-avatar-container w-[70%] sm:w-full aspect-square rounded-full overflow-hidden mb-6 md:mb-8 max-w-[250px] md:max-w-[300px] border-0 mx-auto">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-fill" />
                ) : (
                  <div className="w-full h-full bg-[#C4C4C4]" />
                )}
              </div>
              
              {/* Info Box */}
              <div className="wfc-team-info-box bg-white rounded-[24px] p-5 md:p-6 w-full max-w-[280px] md:max-w-[320px] flex flex-col items-center shadow-sm border-0 mx-auto">
                <div className="flex items-center gap-2 md:gap-3 mb-4 w-full justify-between">
                  <span className="wfc-team-name text-[1rem] md:text-[1.1rem] font-bold text-black">{member.name}</span>
                  <a href="#" className="wfc-linkedin-link shrink-0">
                    <img src="/icons/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                  </a>
                </div>
                
                {/* Role Capsule - 8DC83A with 25% transparency */}
                <div className="wfc-team-role-tag w-full py-[0.5rem] md:py-[0.6rem] px-3 md:px-4 bg-[#8DC83A]/25 rounded-[12px] text-[0.8rem] md:text-[0.85rem] font-normal text-black flex items-center justify-center text-center">
                  <span>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WfcTeam;