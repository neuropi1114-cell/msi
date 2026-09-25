import dynamic from 'next/dynamic';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Hero from '../components/home/Hero';
import AgeGroupsIntro from '../components/home/AgeGroupsIntro';
import ageGroups from '../data/age-groups.json';

import { workingParentsPartners, corporateChildcarePartners } from '../data/corporate-partners-data';

export const metadata = {
  title: 'Preschool & Daycare in Hyderabad | My School ITALY',
  description: 'My School ITALY offers preschool, crèche, daycare and extended childcare in Hyderabad from 45 days+, with neuroscience-informed learning and caring support for working families.',
  alternates: { canonical: 'https://www.myschoolitaly.com/' },
  openGraph: {
    title: 'Preschool & Daycare in Hyderabad | My School ITALY',
    description: 'My School ITALY offers preschool, crèche, daycare and extended childcare in Hyderabad from 45 days+, with neuroscience-informed learning and caring support for working families.',
    url: 'https://www.myschoolitaly.com/',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/hero-slide-1.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preschool & Daycare in Hyderabad | My School ITALY',
    description: 'My School ITALY offers preschool, crèche, daycare and extended childcare in Hyderabad from 45 days+, with neuroscience-informed learning and caring support for working families.',
  },
};

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
const ContactUs = dynamic(() => import('../components/common/ContactUs'), { ssr: true });

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

        <Blogs />
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
