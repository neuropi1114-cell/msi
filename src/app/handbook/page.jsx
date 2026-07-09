import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import HandbookFlipbook from '../../components/handbook/HandbookFlipbook';
import ContactUs from '../../components/home/ContactUs';

export const metadata = {
  title: 'Handbook',
  description: 'Welcome to My School ITALY\'s Handbook — your comprehensive guide to our neuroscience-based preschool programs, policies, philosophy, and family resources.',
  alternates: { canonical: '/handbook' },
  openGraph: {
    title: 'Handbook | My School ITALY',
    description: 'Welcome to My School ITALY\'s Handbook — your comprehensive guide to our neuroscience-based preschool programs, policies, philosophy, and family resources.',
    url: '/handbook',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Handbook | My School ITALY',
    description: 'Welcome to My School ITALY\'s Handbook — your comprehensive guide to our neuroscience-based preschool programs, policies, philosophy, and family resources.',
  },
};

export default function HandbookPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="relative bg-msi-purple py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24">
              <path className="fill-white" d="M0,6V0h1000v100L0,6z" opacity="0.08"></path>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24">
              <path className="fill-white" d="M0,6V0h1000v100L0,6z" opacity="0.08"></path>
            </svg>
          </div>
          <div className="container mx-auto px-4 md:px-12 relative z-20 text-center">
            <h1 className="text-4xl md:text-6xl  font-bold text-white">
              Handbook
            </h1>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h2 className="text-3xl md:text-5xl  font-bold text-msi-purple mb-2">
              Flip Through Our Handbook
            </h2>
            <p className="text-gray-500 text-lg">
              Use the arrows, page numbers, or keyboard to navigate
            </p>
          </div>
        </section>

        <HandbookFlipbook />

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-12 max-w-4xl">
            <div className="bg-msi-purple rounded-3xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl  font-bold mb-4">
                Download the Handbook PDF
              </h2>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Save a copy for offline reading or printing. The complete handbook in PDF format.
              </p>
              <a
                href="/Handbook.pdf"
                download
                className="inline-flex items-center gap-3 bg-msi-orange hover:bg-msi-orange/90 text-white font-bold py-4 px-10 rounded-full transition-colors text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                Download PDF
              </a>
            </div>
          </div>
        </section>
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
