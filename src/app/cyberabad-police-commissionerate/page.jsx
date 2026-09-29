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
  title: 'My School ITALY — Cyberabad Police Commissionerate | Preschool & Daycare Gachibowli',
  description: 'Neuroscience-informed preschool, daycare, and crèche at Cyberabad Police Commissionerate, Gachibowli, Hyderabad.',
  alternates: { canonical: '/cyberabad-police-commissionerate' },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'My School ITALY — Cyberabad Police Commissionerate',
  description: 'Neuroscience-informed preschool, crèche, and daycare at Cyberabad Police Commissionerate, Gachibowli.',
  url: 'https://myschoolitaly.com/cyberabad-police-commissionerate',
  telephone: '+917093904680',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Old Mumbai Highway, next to CARE Hospital, Sri Shyam Nagar / Telecom Nagar Extension',
    addressLocality: 'Gachibowli, Hyderabad',
    postalCode: '500032',
    addressCountry: 'IN',
  },
};

export default function CyberabadPoliceCommissioneratePage() {
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
          title="MY SCHOOL ITALY — CYBERABAD POLICE COMMISSIONERATE"
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
            imageAlt="Children at My School ITALY Cyberabad Police Commissionerate"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="Located at the Cyberabad Police Commissionerate on Old Mumbai Highway, our centre brings neuroscience-informed early learning and daycare to families across Gachibowli and Telecom Nagar."
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
          title="WHY FAMILIES CHOOSE MSI CYBERABAD POLICE COMMISSIONERATE?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Our Cyberabad Police Commissionerate centre offers safe, joyful, and neuroscience-backed learning in Gachibowli. Designed for working parents and community families seeking quality early childhood education."
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
            Starting preschool or daycare is a milestone for the whole family. At MSI Cyberabad Police Commissionerate, we create an open, connected relationship between home and school.
          </p>
        </OneJourneySection>

        <CampusLocationModule
          eyebrow="Find us in Gachibowli, Hyderabad"
          campusName="My School ITALY — Cyberabad Police Commissionerate"
          description="Positioned on Old Mumbai Highway next to CARE Hospital, this centre serves families in Gachibowli, Telecom Nagar, Sri Shyam Nagar, Khajaguda, and Nanakramguda."
          address="Old Mumbai Highway, next to CARE Hospital, Sri Shyam Nagar / Telecom Nagar Extension, Gachibowli, Hyderabad 500032"
          landmark="Next to CARE Hospital, Old Mumbai Highway"
          distanceHeading="Drive-Time from Nearby Neighbourhoods"
          distanceBlock={[
            { area: "Telecom Nagar", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Sri Shyam Nagar", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Gachibowli", distance: "1–3 km", time: "5–12 min" },
            { area: "Khajaguda", distance: "2–5 km", time: "8–18 min" },
            { area: "Nanakramguda", distance: "3–6 km", time: "10–20 min" },
            { area: "Financial District", distance: "4–7 km", time: "12–25 min" },
          ]}
          googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16415.571357186036!2d78.34850008715823!3d17.435321100000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9314cc8b60a9%3A0x4f15f50d45a860dc!2sMY%20SCHOOL%20ITALY%20%7C%20Cyberabad%20Police%20Commissionerate!5e1!3m2!1sen!2sin!4v1790701145419!5m2!1sen!2sin"
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=MY+SCHOOL+ITALY+%7C+Cyberabad+Police+Commissionerate"
        />
      </main>

      <div id="enroll">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI CYBERABAD POLICE COMMISSIONERATE" buttonText="BOOK A TOUR" />
      </div>
      <Footer />
    </>
  );
}
