import React from 'react';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';
import DetailSection from './components/DetailSection';
import CompanyLogos from './components/CompanyLogos';
import Footer from './components/Footer';

function App() {
  return (
    <div className=' bg-black font-poppins text-white'>
      <div className="max-w-[754px] mx-auto ">
      <HeroSection />
      <PricingSection />
      {/* <DetailSection />
      <CompanyLogos />
      <Footer /> */}
    </div>
    </div>
  );
}

export default App;
