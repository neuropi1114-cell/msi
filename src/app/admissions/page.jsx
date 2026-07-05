import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export const metadata = {
  title: 'Admissions',
  description: 'Enroll your child at My School ITALY. Simple admission process for Infant, Toddler, Preschool, and Kindergarten programs. Book a tour or apply online today.',
  alternates: { canonical: 'https://myschoolitaly.com/admissions' },
};

const steps = [
  { step: '01', title: 'Book a Tour', text: 'Visit your nearest My School ITALY center to experience our neuroscience-based approach firsthand.' },
  { step: '02', title: 'Meet Our Team', text: 'Speak with our educators and center director to discuss your child\'s unique needs and developmental goals.' },
  { step: '03', title: 'Complete Enrollment', text: 'Fill out the enrollment form, submit required documents, and secure your child\'s place in our program.' },
  { step: '04', title: 'Welcome Onboard', text: 'Receive a warm welcome kit, meet your child\'s primary educator, and start your My School ITALY journey.' },
];

export default function AdmissionsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="bg-msi-purple py-20 text-white">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-schoolbell font-bold mb-4">Admissions</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join the My School ITALY family. A simple, transparent enrollment process for families worldwide.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-12 max-w-4xl">
            <h2 className="text-3xl font-schoolbell text-msi-purple font-bold mb-4 text-center">How to Enroll</h2>
            <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-14">
              We have made the admission process straightforward and supportive. Here is what to expect:
            </p>

            <div className="space-y-8">
              {steps.map((s) => (
                <div key={s.step} className="flex items-start gap-6 bg-[#f7f9fc] p-6 rounded-2xl">
                  <div className="w-14 h-14 rounded-full bg-msi-orange text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-msi-purple mb-1">{s.title}</h3>
                    <p className="text-gray-600">{s.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-msi-purple rounded-3xl p-10 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Contact us today to schedule a tour or speak with our admissions team. We accept enrollments year-round, subject to availability.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/contact" className="inline-block bg-msi-orange text-white font-bold py-3 px-8 rounded-full hover:bg-msi-orange/90 transition-colors">
                  Contact Us
                </a>
                <a href="tel:+917093904680" className="inline-block bg-white/20 text-white font-bold py-3 px-8 rounded-full hover:bg-white/30 transition-colors">
                  Call (+91) 70939 04680
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
