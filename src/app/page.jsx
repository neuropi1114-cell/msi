import dynamic from 'next/dynamic';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';

const BelieveBrilliance = dynamic(() => import('../components/home/BelieveBrilliance'), { ssr: true });
const Solutions = dynamic(() => import('../components/home/Solutions'), { ssr: true });
const CorporatePartners = dynamic(() => import('../components/home/CorporatePartners'), { ssr: true });
const AgeGroupsIntro = dynamic(() => import('../components/home/AgeGroupsIntro'), { ssr: true });
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
        <BelieveBrilliance />
        <StepIntoADay />
        <Solutions />
        <CorporatePartners />
        <AgeGroupsIntro />
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
