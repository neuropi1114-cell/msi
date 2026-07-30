import React from 'react';
import dynamic from 'next/dynamic';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Feedback from '../../components/home/Feedback';
import Gallery from '../../components/home/Gallery';
import VideoCarousel from '../../components/home/VideoCarousel';
import Activities from '../../components/home/Activities';
import NeuroPiApproach from '../../components/home/NeuroPiApproach';
import BrighterFuture from '../../components/home/BrighterFuture';

const ContactUs = dynamic(() => import('../../components/home/ContactUs'), { ssr: true });

export const metadata = {
  title: 'Programs',
  description: 'Explore My School ITALY neuroscience-based programs: Infant (45 days–18 months), Toddler (18 months–3 years), Preschool (3–5 years), and Kindergarten (5–7 years).',
  alternates: { canonical: '/programs' },
  openGraph: {
    title: 'Programs | My School ITALY',
    description: 'Explore My School ITALY neuroscience-based programs: Infant (45 days–18 months), Toddler (18 months–3 years), Preschool (3–5 years), and Kindergarten (5–7 years).',
    url: '/programs',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programs | My School ITALY',
    description: 'Explore My School ITALY neuroscience-based programs: Infant (45 days–18 months), Toddler (18 months–3 years), Preschool (3–5 years), and Kindergarten (5–7 years).',
  },
};

export default function ProgramsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <section className="bg-msi-purple py-24 text-center">
        <div className="container mx-auto px-4 md:px-12">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Programs
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Neuroscience-based programs for every stage of early development — from infancy to kindergarten.
          </p>
        </div>
      </section>
      <BrighterFuture />
      <NeuroPiApproach />
      <Activities />
      <VideoCarousel />
      <Feedback />
      <Gallery />
      <ContactUs />
      <Footer />
    </>
  );
}
