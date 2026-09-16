import dynamic from 'next/dynamic';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import AgeGroupsIntro from '../components/home/AgeGroupsIntro';
import ageGroups from '../data/age-groups.json';

const BelieveBrilliance = dynamic(() => import('../components/home/BelieveBrilliance'), { ssr: true });
const Solutions = dynamic(() => import('../components/home/Solutions'), { ssr: true });
const CorporatePartners = dynamic(() => import('../components/home/CorporatePartners'), { ssr: true });
const VideoShowcase = dynamic(() => import('../components/home/VideoShowcase'), { ssr: true });
const Awards = dynamic(() => import('../components/home/Awards'), { ssr: true });
const Team = dynamic(() => import('../components/home/Team'), { ssr: true });
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

        <StepIntoADay />
        <AgeGroupsIntro data={ageGroups.sections[1]} />
        <AgeGroupsIntro data={ageGroups.sections[2]} />
        <Solutions key="solutions-1" />
        <CorporatePartners title="Working Parents" description="While you build their future, we will care for their childhood." reverse />
        <CorporatePartners id="corporate-childcare" />
        <StepIntoADay />

        <VideoShowcase />
        <Awards />
        <FeaturedIn />
        <Team />

        <Blogs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
