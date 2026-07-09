import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';
import BookTourForm from './BookTourForm';

export const metadata = {
  title: 'Book Your Tour',
  description:
    'Book a tour at My School ITALY, the neuroscientific European preschool. Visit our campus, explore our programs, and experience our neuroscience-based early childhood education.',
  alternates: { canonical: '/book-your-tour' },
  openGraph: {
    title: 'Book Your Tour | My School ITALY',
    description:
      'Book a tour at My School ITALY, the neuroscientific European preschool. Visit our campus and explore our neuroscience-based early childhood programs.',
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
      <main>
        <section className="bg-msi-purple py-20 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-12 text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Book Your Tour Today!
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Visit our campus, explore our programs, and experience our
              neuroscience-based approach to early childhood education.
            </p>
          </div>
          <div className="absolute bottom-0 left-0 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 283.5 27.8"
              preserveAspectRatio="xMidYMax slice"
              className="w-full"
            >
              <path
                fill="white"
                d="M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z"
              />
            </svg>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-12 max-w-2xl">
            <h2 className="text-3xl text-msi-purple font-bold mb-4 text-center">
              Book Your Tour Today!
            </h2>
            <div className="flex justify-center mb-8">
              <img
                src="/images/navbar/7xm.xyz669204.jpg.bv.webp"
                alt="My School ITALY campus"
                className="h-8 w-auto"
              />
            </div>
            <BookTourForm />
          </div>
        </section>
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
