import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/common/ContactUs';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import StorySection from '../../components/common/StorySection';
import NepHero from '../../components/nep/NepHero';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import OneJourneySection from '../../components/programs/OneJourneySection';
import CampusLocationModule from '../../components/common/CampusLocationModule';
import JsonLd from '../../components/JsonLd';

export const metadata = {
  title: 'My School ITALY — Miyapur | Preschool & Daycare Miyapur',
  description: 'Neuroscience-informed preschool, daycare, and crèche in Sri Aurobindo Colony, Miyapur, Hyderabad.',
  alternates: { canonical: '/miyapur' },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'My School ITALY — Miyapur',
  description: 'Neuroscience-based early years education and daycare in Miyapur, Hyderabad.',
  url: 'https://myschoolitaly.com/miyapur',
  telephone: '+917093904680',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot 26 & 27, Sri Rangapuram Colony / Sri Aurobindo Colony, near JP Nagar Road',
    addressLocality: 'Miyapur, Hyderabad',
    postalCode: '500049',
    addressCountry: 'IN',
  },
};

export default function MiyapurPage() {
  return (
    <>
      <JsonLd schema={schemaData} />
      <TopBar />
      <Header />

      <main>
        <CloudHeader
          image="/images/hitex/HITEX_1.png"
          imageClass="object-cover object-center"
          heightClass="w-full aspect-[2172/724] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] max-h-[650px]"
        />
        <div data-nav-sentinel />

        <SectionHeader
          title="MY SCHOOL ITALY — MIYAPUR"
          subtitle={null}
          description="We Begin By Understanding The Child."
          descriptionClassName="text-xl md:text-2xl font-normal"
        />

        <div id="programs" className="scroll-mt-24">
          <StorySection
            containerClass="max-w-[1240px] mx-auto"
            imageWrapperClass="overflow-hidden rounded-2xl shadow-2xl border border-gray-100"
            imageClass="w-full h-auto object-cover scale-115 transform hover:scale-125 transition-transform duration-500"
            imageSrc="/images/hitex/Hitex_3.png"
            imageAlt="Children at My School ITALY Miyapur"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="Located in Sri Aurobindo Colony near JP Nagar Road, My School ITALY Miyapur offers nurturing care and neuroscience-informed learning for infants, toddlers, and young children."
            p2={
              <div className="space-y-3 mt-4 text-msi-purple">
                <p>
                  <strong className="text-msi-orange font-bold">Early Years:</strong> Baby Crèche • Ciao Baby • Toddler • Pre-Nursery • Nursery • K1 • K2
                </p>
                <p>
                  <strong className="text-msi-orange font-bold">Care:</strong> Daycare • Extended Daycare • Early Drop-Off • Late Pick-Up
                </p>
              </div>
            }
          />
        </div>

        <NepHero
          eyebrow="We Begin By Understanding The Child."
          title="WHY FAMILIES CHOOSE MSI MIYAPUR?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Our Miyapur centre combines European early childhood principles with neuroscience research, providing a safe, joyful environment close to Madinaguda and Hafeezpet."
          bgImage="/images/hitex/Hitex_2.png"
          bgPosition="bg-cover bg-center"
          sectionClass="w-full aspect-[2172/724] max-h-[650px] py-8 md:py-12"
          readMoreHref="/why-msi"
        />

        <DesignPhilosophy
          topId="neuropi-way"
          bottomId="parents-journey"
          image="/images/hitex/Hitex_4.png"
          eyebrow="Start With The Child • The NeuroPi Way™"
          title={<>WE DON'T BEGIN WITH THE LESSON.<br />WE BEGIN WITH THE CHILD.</>}
          titleClass="text-msi-orange font-linotte font-bold text-2xl md:text-3xl leading-tight uppercase mb-3"
          p1="The NeuroPi Way™ begins with understanding who the child is — observing how each child engages and develops, personalising learning for their growth."
          readMoreHref="/neuropi-way"
        />

        <OneJourneySection
          imageSrc="/images/hitex/Hitex_5.png"
          bgImageSrc="/images/hitex/Hitex_5.png"
          eyebrow="You Are Not Dropping Your Child At School. You Are Joining Their Journey."
          title="YOU ARE PART OF THE JOURNEY"
          titleColor="text-msi-orange font-linotte font-bold text-2xl md:text-3xl uppercase mb-4"
          showReadMore={true}
          readMoreHref="/parents"
        >
          <p className="text-msi-purple text-sm sm:text-base leading-relaxed">
            Starting preschool or daycare is a milestone for the whole family. At MSI Miyapur, we create an open, connected relationship between home and school.
          </p>
        </OneJourneySection>

        <CampusLocationModule
          eyebrow="Find us in Miyapur, Hyderabad"
          campusName="My School ITALY — Miyapur"
          description="Situated in Sri Aurobindo Colony near JP Nagar Road, our Miyapur centre serves families from JPN Nagar, Rangapuram, Madinaguda, Hafeezpet, and Alwyn Cross Roads."
          address="Plot 26 & 27, Sri Rangapuram Colony / Sri Aurobindo Colony, near JP Nagar Road, Miyapur, Hyderabad 500049"
          landmark="Near JP Nagar Road, Sri Aurobindo Colony"
          distanceHeading="Drive-Time from Nearby Neighbourhoods"
          distanceBlock={[
            { area: "Sri Aurobindo Colony", distance: "0.5–2 km", time: "3–8 min" },
            { area: "JPN Nagar", distance: "1–3 km", time: "5–10 min" },
            { area: "Rangapuram", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Madinaguda", distance: "2–5 km", time: "8–18 min" },
            { area: "Hafeezpet", distance: "4–7 km", time: "12–25 min" },
            { area: "Alwyn Cross Roads", distance: "2–5 km", time: "8–18 min" },
          ]}
          googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16409.270435700113!2d78.3424555871582!3d17.5052116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c95c62e035%3A0xdbcc3243d9a54206!2sMy%20School%20Italy%20Miyapur!5e1!3m2!1sen!2sin!4v1790701179304!5m2!1sen!2sin"
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+Italy+Miyapur"
        />
      </main>

      <div id="enroll">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI MIYAPUR" buttonText="BOOK A TOUR" />
      </div>
      <Footer />
    </>
  );
}
