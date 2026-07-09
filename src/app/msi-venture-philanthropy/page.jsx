import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import VenturePhilanthropy from '../../components/venture-philanthropy/VenturePhilanthropy';

export const metadata = {
  title: 'MSI Venture Philanthropy',
  description: 'My School ITALY venture philanthropy — every child\'s potential becomes our purpose.',
  alternates: { canonical: '/msi-venture-philanthropy' },
  openGraph: {
    title: 'MSI Venture Philanthropy | My School ITALY',
    description: 'My School ITALY venture philanthropy — every child\'s potential becomes our purpose.',
    url: '/msi-venture-philanthropy',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSI Venture Philanthropy | My School ITALY',
    description: 'My School ITALY venture philanthropy — every child\'s potential becomes our purpose.',
  },
};

export default function VenturePhilanthropyPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <VenturePhilanthropy />
      </main>
      <Footer />
    </>
  );
}
