import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CloudHeader from '../../components/layout/CloudHeader';
import Terms from '../../components/terms/Terms';

export const metadata = {
  title: 'Terms and Conditions | My School ITALY',
  description: 'Read the terms and conditions governing access to and usage of My School ITALY website, products, and services.',
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms and Conditions | My School ITALY',
    description: 'Read the terms and conditions governing access to and usage of My School ITALY website, products, and services.',
    url: '/terms',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | My School ITALY',
    description: 'Read the terms and conditions governing access to and usage of My School ITALY website, products, and services.',
  },
};

export default function TermsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <CloudHeader image="/images/terms.png" />
      <main>
        <Terms />
      </main>
      <Footer />
    </>
  );
}
