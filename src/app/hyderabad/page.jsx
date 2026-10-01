import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/common/ContactUs';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import JsonLd from '../../components/JsonLd';
import CampusLocationModule from '../../components/common/CampusLocationModule';
import { HYDERABAD_CAMPUSES } from '../../data/hyderabadCampuses';

export const metadata = {
  title: 'My School ITALY — Hyderabad Locations Map',
  description: 'View all My School ITALY preschool, crèche, and daycare campus locations across Hyderabad on Google Maps.',
  alternates: { canonical: '/hyderabad' },
};

const hyderabadSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'My School ITALY — Hyderabad',
  url: 'https://www.myschoolitaly.com/hyderabad',
  description: 'Neuroscience-informed early learning and daycare network in Hyderabad.',
};

export default function HyderabadPage() {
  return (
    <>
      <JsonLd schema={hyderabadSchema} />
      <TopBar />
      <Header />

      <main>
        {/* 1. Hero Banner */}
        <CloudHeader
          image="/images/hitex/HITEX_1.png"
          imageClass="object-cover object-center"
          heightClass="w-full aspect-[2172/724] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] max-h-[650px]"
        />
        <div data-nav-sentinel />

        {/* 2. Section Header */}
        <SectionHeader
          title="MY SCHOOL ITALY — HYDERABAD"
          subtitle="EXPLORE ALL LOCATIONS ON MAP"
          description="Find a neuroscience-informed preschool, baby crèche & daycare nearest to your home or office."
          descriptionClassName="text-xl md:text-2xl font-normal"
        />

        {/* 3. Google Maps Overview Iframe */}
        <section className="py-6 md:py-10 bg-white">
          <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
            <div className="w-full h-[450px] sm:h-[550px] md:h-[620px] rounded-3xl overflow-hidden border border-purple-100 shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d102406.98854089816!2d78.31390677383456!3d17.472992016405588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smy%20school%20italy!5e0!3m2!1sen!2sin!4v1790830396164!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="My School ITALY Hyderabad Campuses Map"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* 4. All Individual Hyderabad Campus Location Maps & Details */}
        <CampusLocationModule campuses={HYDERABAD_CAMPUSES} />
      </main>

      {/* 4. Book Tour / Contact Form */}
      <div id="enroll-hyderabad">
        <ContactUs
          image="/images/whyus/Why_MSI_Enrol.png"
          title="BOOK A TOUR AT ANY HYDERABAD CAMPUS"
          buttonText="BOOK A CENTRE TOUR"
        />
      </div>

      {/* 5. Footer */}
      <Footer />
    </>
  );
}
