import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CloudHeader from '../../components/layout/CloudHeader';
import ContactUs from '../../components/common/ContactUs';

export const metadata = {
  title: 'Book Your Tour | My School ITALY',
  description:
    'Book a tour at My School ITALY, the neuroscientific European preschool. Visit our campus, explore our programs, and experience our neuroscience-based early childhood education.',
  alternates: { canonical: '/book-your-tour' },
  openGraph: {
    title: 'Book Your Tour | My School ITALY',
    description:
      'Book a tour at My School ITALY, the neuroscientific European preschool. Visit our campus, explore our programs, and experience our neuroscience-based early childhood education.',
    url: '/book-your-tour',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [
      { url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Tour | My School ITALY',
    description:
      'Book a tour at My School ITALY, the neuroscientific European preschool. Visit our campus and explore our neuroscience-based early childhood programs.',
  },
};

export default function BookYourTourPage() {
  return (
    <>
      <TopBar />
      <Header />
      <CloudHeader title="Book Your Tour" />
      <main>
        <ContactUs title="BOOK YOUR TOUR" buttonText="BOOK YOUR TOUR" />
      </main>
      <Footer />
    </>
  );
}
