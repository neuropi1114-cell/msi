import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import ContactUs from '../../components/home/ContactUs';
import Awards from '../../components/home/Awards';
import Footer from '../../components/layout/Footer';

export const metadata = {
  title: 'Admissions',
  description: 'Enroll your child at My School ITALY. Simple admission process for Infant, Toddler, Preschool, and Kindergarten programs. Book a tour or apply online today.',
  alternates: { canonical: 'https://myschoolitaly.com/admissions' },
  openGraph: {
    title: 'Admissions | My School ITALY',
    description: 'Enroll your child at My School ITALY. Simple admission process for Infant, Toddler, Preschool, and Kindergarten programs.',
    url: 'https://myschoolitaly.com/admissions',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Admissions | My School ITALY',
    description: 'Enroll your child at My School ITALY. Simple admission process for Infant, Toddler, Preschool, and Kindergarten programs.',
  },
};

export default function AdmissionsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="bg-msi-purple py-20 text-white">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl  font-bold mb-4">Admissions</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join the My School ITALY family. A simple, transparent enrollment process for families worldwide.
            </p>
          </div>
        </section>
      </main>
      <ContactUs />
      <Awards />
      <Footer />
    </>
  );
}
