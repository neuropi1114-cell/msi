import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import AgeGroupsIntro from '../components/home/AgeGroupsIntro';
import ageGroups from '../data/age-groups.json';

import { workingParentsPartners, corporateChildcarePartners } from '../data/corporate-partners-data';

import { buildPageMetadata } from '../utils/seo';

export const metadata = buildPageMetadata('/');

import BelieveBrilliance from '../components/home/BelieveBrilliance';
import GrowingInConfidence from '../components/home/GrowingInConfidence';
import Solutions from '../components/home/Solutions';
import CorporatePartners from '../components/home/CorporatePartners';
import VideoShowcase from '../components/home/VideoShowcase';
import Awards from '../components/home/Awards';
import VenturePhilanthropyCta from '../components/home/VenturePhilanthropyCta';
import FeaturedIn from '../components/home/FeaturedIn';
import Blogs from '../components/home/Blogs';
import StepIntoADay from '../components/home/StepIntoADay';
import Footer from '../components/layout/Footer';
import ContactUs from '../components/common/ContactUs';

export default function HomePage() {
  return (
    <>
      {/* Third-party analytics script removed for local deployment */}
      <TopBar />
      <Header />
      <main>
        <Hero />
        <div data-nav-sentinel />
        <BelieveBrilliance />
        <AgeGroupsIntro data={ageGroups.sections[0]} />

        <StepIntoADay title="A DAY THAT DEVELOPS MORE THAN ACADEMICS" subtitle="Built On Neuroscience & Joy" />
        <AgeGroupsIntro data={ageGroups.sections[1]} />
        <AgeGroupsIntro data={ageGroups.sections[2]} />
        <Solutions key="solutions-1" />
        <CorporatePartners title="Working Parents" description="While you build their future, we will care for their childhood." partners={workingParentsPartners} reverse />
        <CorporatePartners id="corporate-childcare" partners={corporateChildcarePartners} />
        <StepIntoADay title="BETTER UNDERSTANDING AROUND EVERY CHILD" subtitle="Powered By NeuroPI" image="/images/stepintoaday/better-understanding-2.png" />
        <GrowingInConfidence />

        <VideoShowcase showVideoTitle={true} aspect="landscape" />
        <Awards />
        <FeaturedIn />
        {/* <Team /> */}
        <VenturePhilanthropyCta />


        <ContactUs />
      </main>
      <Blogs />
      <Footer />
    </>
  );
}
