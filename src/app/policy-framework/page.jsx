import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CloudHeader from '../../components/layout/CloudHeader';
import PolicyFramework from '../../components/policy-framework/PolicyFramework';

export const metadata = {
  title: 'MSI Early Childhood Policy Framework | My School ITALY',
  description: 'Development Before Performance. Understanding Before Expectation. The Child Before the System. Explore our comprehensive policy framework covering Developmental, Care & Protection, and Partnership policies.',
  alternates: { canonical: '/policy-framework' },
  openGraph: {
    title: 'MSI Early Childhood Policy Framework | My School ITALY',
    description: 'Development Before Performance. Understanding Before Expectation. The Child Before the System. Explore our comprehensive policy framework.',
    url: '/policy-framework',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MSI Early Childhood Policy Framework | My School ITALY',
    description: 'Development Before Performance. Understanding Before Expectation. The Child Before the System.',
  },
};

export default function PolicyFrameworkPage() {
  return (
    <>
      <TopBar />
      <Header />
      <CloudHeader image="/images/policy-framework.png" />
      <main>
        <PolicyFramework />
      </main>
      <Footer />
    </>
  );
}
