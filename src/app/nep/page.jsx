import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';
import Feedback from '../../components/home/Feedback';
import NepHero from '../../components/nep/NepHero';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import MissionCounters from '../../components/nep/MissionCounters';
import GalleryStrip from '../../components/nep/GalleryStrip';
import DualFeatureSection from '../../components/common/DualFeatureSection';
import NepNews from '../../components/nep/NepNews';

export const metadata = {
  title: 'The Educational Project',
  description: 'Discover My School ITALY\'s educational project — a neuroscience-based approach that cultivates emotional intelligence, resilience, and a love for learning in every child.',
  alternates: { canonical: '/nep' },
  openGraph: {
    title: 'The Educational Project | My School ITALY',
    description: 'Discover My School ITALY\'s educational project — a neuroscience-based approach that cultivates emotional intelligence, resilience, and a love for learning in every child.',
    url: '/nep',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Educational Project | My School ITALY',
    description: 'Discover My School ITALY\'s educational project — a neuroscience-based approach that cultivates emotional intelligence, resilience, and a love for learning in every child.',
  },
};

export default function EducationalProjectPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <NepHero />
        <DesignPhilosophy />
        <MissionCounters />
        <GalleryStrip />
        <DualFeatureSection showFaq={true} />

        <Feedback
          eyebrow="Every Family Has An MSI Story"
          title="PARENT STORIES & TESTIMONIALS"
          description={[
            'The most meaningful description of a school often comes from the families who experience it every day.',
            'Hear MSI parents talk about:',
          ]}
        />

        <NepNews />
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}