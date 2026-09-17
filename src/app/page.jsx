import dynamic from 'next/dynamic';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import AgeGroupsIntro from '../components/home/AgeGroupsIntro';
import ageGroups from '../data/age-groups.json';

const BelieveBrilliance = dynamic(() => import('../components/home/BelieveBrilliance'), { ssr: true });
const GrowingInConfidence = dynamic(() => import('../components/home/GrowingInConfidence'), { ssr: true });
const Solutions = dynamic(() => import('../components/home/Solutions'), { ssr: true });
const CorporatePartners = dynamic(() => import('../components/home/CorporatePartners'), { ssr: true });
const VideoShowcase = dynamic(() => import('../components/home/VideoShowcase'), { ssr: true });
const Awards = dynamic(() => import('../components/home/Awards'), { ssr: true });
// const Team = dynamic(() => import('../components/home/Team'), { ssr: true });
const VenturePhilanthropyCta = dynamic(() => import('../components/home/VenturePhilanthropyCta'), { ssr: true });
const FeaturedIn = dynamic(() => import('../components/home/FeaturedIn'), { ssr: true });
const Blogs = dynamic(() => import('../components/home/Blogs'), { ssr: true });
const StepIntoADay = dynamic(() => import('../components/home/StepIntoADay'), { ssr: true });
const Footer = dynamic(() => import('../components/layout/Footer'), { ssr: true });
const ContactUs = dynamic(() => import('../components/home/ContactUs'), { ssr: true });

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
        <CorporatePartners title="Working Parents" description="While you build their future, we will care for their childhood." reverse />
        <CorporatePartners id="corporate-childcare" />
        <StepIntoADay title="BETTER UNDERSTANDING AROUND EVERY CHILD" subtitle="Powered By NeuroPI" image="/images/stepintoaday/better-understanding-2.png" />
        <GrowingInConfidence />

        <VideoShowcase />
        <Awards />
        <FeaturedIn />
        {/* <Team /> */}
        <VenturePhilanthropyCta />

        <Blogs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
