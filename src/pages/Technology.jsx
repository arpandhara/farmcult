import React from 'react';
import WfcHeader from '../components/WhyFarmcult/WfcHeader';
import SmartIntegration from '../components/Technology/SmartIntegration';
import IotMonitoring from '../components/Technology/IotMonitoring';
import ContactSection from '../components/ContactSection';
import TechCards from '../components/Technology/TechCards';
import Footer from '../components/Footer';


const Technology = () => {
  return (
    <div className="technology-page">
      <WfcHeader 
        tag="TECHNOLOGY"
        title="Technology That Powers Every Farm"
        subtitle="Smart systems working quietly behind the scenes. Monitoring, optimising, and improving performance every day."
      />
      <SmartIntegration />
      <IotMonitoring />
      <TechCards />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Technology;
