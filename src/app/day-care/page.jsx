import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';
import CloudHeader from '../../components/layout/CloudHeader';

import ParentExperience from '../../components/day-care/ParentExperience';
import ParentJourney from '../../components/day-care/ParentJourney';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import NeuroPiApproach from '../../components/nep/NeuroPiApproach';
import VideoCarousel from '../../components/home/VideoCarousel';
import Feedback from '../../components/home/Feedback';
import CreativeLearning from '../../components/day-care/CreativeLearning';
import MissionCounters from '../../components/nep/MissionCounters';
import GalleryStrip from '../../components/nep/GalleryStrip';
// import EnrolCta from '../../components/day-care/EnrolCta';


export const metadata = {
  title: 'Day Care',
  description: 'My School ITALY daycare programs for children 45 days to 7 years. Safe, nurturing, neuroscience-based childcare in a play-based learning environment.',
  alternates: { canonical: '/day-care' },
  openGraph: {
    title: 'Day Care | My School ITALY',
    description: 'My School ITALY daycare programs for children 45 days to 7 years. Safe, nurturing, neuroscience-based childcare in a play-based learning environment.',
    url: '/day-care',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day Care | My School ITALY',
    description: 'My School ITALY daycare programs for children 45 days to 7 years. Safe, nurturing, neuroscience-based childcare in a play-based learning environment.',
  },
};

export default function DayCarePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <CloudHeader image="/images/day-care/hero.jpg" />
        <div data-nav-sentinel />

        <ParentExperience />
        <ParentJourney />
        <DesignPhilosophy />
        <NeuroPiApproach />
        <VideoCarousel
          eyebrow="Every Family Has An MSI Story"
          title="PARENT STORIES & TESTIMONIALS"
        />
        <Feedback eyebrow="" title="" />

        <CreativeLearning />
        <MissionCounters />
        <GalleryStrip />
        {/* <EnrolCta /> */}


      </main>
      <ContactUs />
      <Footer />
    </>
  );
}