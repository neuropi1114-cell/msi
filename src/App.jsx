import React from 'react';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';
import BelieveBrilliance from './components/home/BelieveBrilliance';
import Solutions from './components/home/Solutions';
import AgeGroups from './components/home/AgeGroups';
import CorporatePartners from './components/home/CorporatePartners';
// import Counters from './components/home/Counters';
import AgeGroupsIntro from './components/home/AgeGroupsIntro';
import VideoShowcase from './components/home/VideoShowcase';
import Awards from './components/home/Awards';
import Team from './components/home/Team';
import FeaturedIn from './components/home/FeaturedIn';
import Blogs from './components/home/Blogs';
import WorkingParents from './components/home/WorkingParents';
import StepIntoADay from './components/home/StepIntoADay';
import Footer from './components/layout/Footer';
import ContactUs from './components/home/ContactUs';

function App() {
  return (
    <div className="font-averia text-gray-800 bg-[#f7f9fc] min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <BelieveBrilliance />
        <StepIntoADay />
        <Solutions />
        <WorkingParents />
        <CorporatePartners />
        {/* <AgeGroups /> */}
        {/* <Counters /> */}
        <AgeGroupsIntro />
        
        <VideoShowcase />
        <Awards />
        <FeaturedIn />
        <Team />
        <Blogs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
