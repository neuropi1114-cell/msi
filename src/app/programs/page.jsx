import React from 'react';
import dynamic from 'next/dynamic';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import VideoShowcase from '../../components/home/VideoShowcase';
import OneJourneySection from '../../components/programs/OneJourneySection';
import RecentNews from '../../components/day-care/RecentNews';
import EarlyYearsSection from '../../components/programs/EarlyYearsSection';
import NurserySection from '../../components/programs/NurserySection';
import KindergartenSection from '../../components/programs/KindergartenSection';
import DaycareSection from '../../components/programs/DaycareSection';
import ExtendedTimingSection from '../../components/programs/ExtendedTimingSection';
import EnrichmentSection from '../../components/programs/EnrichmentSection';
import ExpressiveArtsSection from '../../components/programs/ExpressiveArtsSection';
import HolidayProgramsSection from '../../components/programs/HolidayProgramsSection';
import { metadata, programVideos } from './programsdata';

const ContactUs = dynamic(() => import('../../components/home/ContactUs'), { ssr: true });

export { metadata };

export default function ProgramsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <CloudHeader
          image="/images/programs/Header_3.png"
          imageClass="object-cover object-top"
          heightClass="w-full aspect-[1670/942] min-h-[320px] max-h-[750px]"
        />
        <div data-nav-sentinel />

        <SectionHeader
          title="From 45 Days to the Growing Years"
          subtitle="One continuous journey."
          description={
            <>
              Through Baby Crèche, Toddler, Nursery, Kindergarten, Daycare,<br />
              Extended Care, After-School and Enrichment.
            </>
          }
          className="pt-6 pb-2 bg-white"
        />

        <EarlyYearsSection />
        <NurserySection />
        <KindergartenSection />
        <DaycareSection />
        <ExtendedTimingSection />
        <EnrichmentSection />
        <ExpressiveArtsSection />
        <HolidayProgramsSection />

        <OneJourneySection />

        <VideoShowcase
          eyebrow="Watch Our Programs Come Alive"
          title="PROGRAMS IN ACTION"
          videosList={programVideos}
          showCarousel={true}
        />

        <RecentNews />
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
