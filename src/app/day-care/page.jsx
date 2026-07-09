import React from 'react';
import Image from 'next/image';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';
import Blogs from '../../components/home/Blogs';

export const metadata = {
  title: 'Day Care',
  description: 'My School ITALY daycare programs for children 45 days to 7 years. Safe, nurturing, neuroscience-based childcare in a play-based learning environment.',
  alternates: { canonical: '/day-care' },
  openGraph: {
    title: 'Day Care | My School ITALY',
    description: 'My School ITALY daycare programs for children 45 days to 7 years. Safe, nurturing, neuroscience-based childcare in a play-based learning environment.',
    url: '/day-care',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Day Care | My School ITALY',
    description: 'My School ITALY daycare programs for children 45 days to 7 years. Safe, nurturing, neuroscience-based childcare in a play-based learning environment.',
  },
};

export default function DayCarePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-msi-purple py-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative container mx-auto px-4 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl  font-bold mb-4">Day Care</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A safe, nurturing environment where your child learns, grows, and thrives through our neuroscience-based approach.
            </p>
          </div>
        </section>

        {/* Play, learn and grow with My School ITALY */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h2 className="text-4xl md:text-5xl  text-msi-purple font-bold mb-6">
              Play, learn and grow with My School ITALY
            </h2>
            <div className="w-24 h-1 bg-msi-orange mx-auto mb-8" />
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              At My School ITALY we value learning, fun and enjoyment and effective relationships between staff, parents, and children.
            </p>
          </div>
        </section>

        {/* Our Great Vision */}
        <section className="py-20 bg-[#f7f9fc]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <Image
                  src="/images/hero/DSC00795-1024x684-1.jpeg.bv.webp"
                  alt="Our Great Vision"
                  width={800}
                  height={534}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl  text-msi-purple font-bold mb-6">Our Great Vision</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We at My School ITALY believe that every child is the fruit and bearer of a story and therefore his/her inclusion in the Daycare is taught in continuity with the family context to favour the child&rsquo;s holistic development.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Parents are made the participants in the child&rsquo;s day through the story, the daycare sheets, the photographs, and the exhibition of the child&rsquo;s work
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* We make learning magical through creativity */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div>
                <h2 className="text-3xl  text-msi-purple font-bold mb-6">We make learning magical through creativity</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  In order to respond more and more concretely to the need of the parents, we provide Live CCTV Feed, Biometric Security Systems, Learning and Management Systems, and Child safe, hygienic, and friendly Ambience.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our Nap Rooms and diaper Change Stations give extra mileage to our Daycare Facility.
                </p>
              </div>
              <div>
                <Image
                  src="/images/hero/DSC00928-scaled-2-1024x684.jpg.bv.webp"
                  alt="We make learning magical through creativity"
                  width={800}
                  height={534}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ENROL YOUR CHILD CTA */}
        <section className="py-16 bg-msi-purple text-white">
          <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl  font-bold mb-2">ENROL YOUR CHILD</h2>
              <p className="text-white/80 max-w-xl">
                Interested in a community of global learners, child psychologists, paediatricians and educators, who, like yourself, believe in the power of a progressive, quality education to make the world a better place?
              </p>
            </div>
            <a
              href="/admissions"
              className="inline-block bg-msi-orange text-white font-bold py-3 px-10 rounded-full hover:bg-msi-orange/90 transition-colors text-lg mt-6 md:mt-0 flex-shrink-0"
            >
              Enrol Now
            </a>
          </div>
        </section>

        {/* Recent News */}
        <section className="py-20 bg-[#f7f9fc]">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h2 className="text-3xl  text-msi-purple font-bold mb-2">Recent News</h2>
            <p className="text-gray-500 mb-10">What&rsquo;s Going on in our Blog?</p>
            <Blogs />
          </div>
        </section>

      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
