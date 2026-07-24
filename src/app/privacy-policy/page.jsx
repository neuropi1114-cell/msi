import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CloudHeader from '../../components/layout/CloudHeader';
import PrivacyPolicy from '../../components/privacy-policy/PrivacyPolicy';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Learn how My School ITALY collects, uses, and protects your personal information. Read our complete privacy policy for MSI Services.',
  alternates: { canonical: '/privacy-policy' },
  openGraph: {
    title: 'Privacy Policy | My School ITALY',
    description: 'Learn how My School ITALY collects, uses, and protects your personal information. Read our complete privacy policy for MSI Services.',
    url: '/privacy-policy',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | My School ITALY',
    description: 'Learn how My School ITALY collects, uses, and protects your personal information. Read our complete privacy policy for MSI Services.',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopBar />
      <Header />
      <CloudHeader title="Privacy Policy" textClass="text-[#351C5A]" />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
