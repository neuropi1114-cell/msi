import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';
import CloudHeader from '../../components/layout/CloudHeader';

import SectionHeader from '../../components/common/SectionHeader';
import StorySection from '../../components/common/StorySection';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import DualFeatureSection from '../../components/common/DualFeatureSection';
import FaqSection from '../../components/common/FaqSection';
import VideoCarousel from '../../components/home/VideoCarousel';
import Feedback from '../../components/home/Feedback';
import CreativeLearning from '../../components/parents/CreativeLearning';
import MissionCounters from '../../components/nep/MissionCounters';
import GalleryStrip from '../../components/common/GalleryStrip';

export const metadata = {
  title: 'Parents',
  description: 'My School ITALY parent resources, experience and daycare programs for children 45 days to 7 years.',
  alternates: { canonical: '/parents' },
  openGraph: {
    title: 'Parents | My School ITALY',
    description: 'My School ITALY parent resources, experience and daycare programs for children 45 days to 7 years.',
    url: '/parents',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parents | My School ITALY',
    description: 'My School ITALY parent resources, experience and daycare programs for children 45 days to 7 years.',
  },
};

export default function ParentsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <CloudHeader image="/images/parents/hero_mangalyam.jpeg" imageClass="object-cover object-[center_10%]" />
        <div data-nav-sentinel />

        <SectionHeader />
        <StorySection />
        <DesignPhilosophy />
        <DualFeatureSection />
        <FaqSection />
        <VideoCarousel
          eyebrow="Every Family Has An MSI Story"
          title="PARENT STORIES & TESTIMONIALS"
        />
        <Feedback eyebrow="" title="" />

        <CreativeLearning />
        <MissionCounters />
        <GalleryStrip />
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
