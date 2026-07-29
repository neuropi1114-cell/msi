import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Gallery from '../../components/home/Gallery';
import ContactUs from '../../components/home/ContactUs';
import AboutActivities from '../../components/about/AboutActivities';
import BrighterFuture from '../../components/growing-in-confidence/BrighterFuture';

export const metadata = {
  title: 'Growing In Confidence – My School ITALY',
  description: 'Preschool program for children 3-7 years. Building confidence through gymnastics, robotics, and academics.',
  alternates: { canonical: '/growing-in-confidence' },
  openGraph: {
    title: 'Growing In Confidence – My School ITALY',
    description: 'Preschool program for children 3-7 years.',
    url: '/growing-in-confidence',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
  },
};

export default function GrowingInConfidencePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <BrighterFuture />
        <AboutActivities />
        {/* Testimonials */}
        <section className="py-16 bg-[#f7f9fc]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#369bd0' }}>
                What Parents Say
              </h2>
              <p className="text-gray-600 text-lg">
                Hear from parents whose children have grown in confidence at My School ITALY.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "My son has blossomed since joining the Growing In Confidence program. His communication skills and self-esteem have improved dramatically.",
                  name: "Maria Rossi",
                  role: "Mother of 4-year-old",
                },
                {
                  quote: "The combination of gymnastics and academics is brilliant. My daughter loves going to school every day and her confidence has soared.",
                  name: "Elena Ferrari",
                  role: "Mother of 5-year-old",
                },
                {
                  quote: "I've seen such a transformation in my child's independence and social skills. The teachers are incredibly nurturing and skilled.",
                  name: "Luca Bianchi",
                  role: "Father of 3-year-old",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 inline" style={{ color: '#e4984d' }} viewBox="0 0 576 512" fill="currentColor">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold" style={{ color: '#e4984d' }}>{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Gallery />
        <ContactUs intro="Interested in our Growing In Confidence program? Fill out the form below and we'll get back to you." />
      </main>
      <Footer />
    </>
  );
}
