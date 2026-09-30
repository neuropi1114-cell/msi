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
  title: 'My School ITALY — aVance 2 (H06) | Corporate Daycare & Preschool HITEC City',
  description: 'Neuroscience-informed corporate daycare, crèche, and preschool at aVance H06, HITEC City Phase 2, Phoenix Infocity, Hyderabad.',
  alternates: { canonical: '/avance-2' },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'My School ITALY — aVance 2 Campus',
  description: 'Corporate childcare, baby crèche, and preschool at aVance H06, HITEC City Phase 2.',
  url: 'https://myschoolitaly.com/avance-2',
  telephone: '+917093904680',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'aVance Business Hub, Building H06, HITEC City Phase 2',
    addressLocality: 'Gachibowli, Hyderabad',
    postalCode: '500081',
    addressCountry: 'IN',
  },
};

export default function Avance2Page() {
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
          title="MY SCHOOL ITALY — AVANCE 2 (H06)"
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
            imageAlt="Children at My School ITALY aVance 2"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="Situated inside Building H06 at aVance Business Hub (HITEC City Phase 2), our campus serves corporate employees and neighbourhood families across HITEC City, Madhapur, Whitefields, Kondapur, and Raidurg."
            p2={
              <div className="space-y-3 mt-4 text-msi-purple">
                <p>
                  <strong className="text-msi-orange font-bold">Early Years:</strong> Baby Crèche • Ciao Baby • Toddler • Pre-Nursery • Nursery • K1 • K2
                </p>
                <p>
                  <strong className="text-msi-orange font-bold">Corporate Care:</strong> Daycare • Extended Daycare • Executive Shift Care
                </p>
              </div>
            }
          />
        </div>

        <NepHero
          eyebrow="We Begin By Understanding The Child."
          title="WHY FAMILIES CHOOSE MSI AVANCE 2?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Situated in HITEC City Phase 2, MSI aVance 2 brings working parents peace of mind with close-proximity professional childcare and neuroscience-based education."
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
            Starting preschool or daycare is a milestone for the whole family. At MSI aVance 2, we create an open, connected relationship between home and school.
          </p>
        </OneJourneySection>

        <CampusLocationModule
          eyebrow="Find us in HITEC City Phase 2, Hyderabad"
          campusName="My School ITALY — aVance 2 (Building H06)"
          description="Located inside aVance Business Hub Building H06 at HITEC City Phase 2, our centre serves working parents in HITEC City, Madhapur, Whitefields, Kondapur, Kothaguda, Gachibowli, and Raidurg."
          address="aVance Business Hub, Building H06, HITEC City Phase 2, Gachibowli, Hyderabad 500081"
          landmark="aVance Business Hub, Building H06"
          distanceHeading="Drive-Time from Nearby Neighbourhoods"
          distanceBlock={[
            { area: "HITEC City Phase 2", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Madhapur", distance: "1–3 km", time: "5–12 min" },
            { area: "Whitefields", distance: "2–4 km", time: "6–14 min" },
            { area: "Kondapur", distance: "2–5 km", time: "8–18 min" },
            { area: "Kothaguda", distance: "3–5 km", time: "10–18 min" },
            { area: "Raidurg", distance: "3–6 km", time: "10–20 min" },
          ]}
          googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16414.619481663394!2d78.35156888715818!3d17.4458968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9320879c0511%3A0x2d0d280422d07cba!2sMy%20School%20ITALY%20%7C%20aVance!5e1!3m2!1sen!2sin!4v1790701244786!5m2!1sen!2sin"
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+aVance"
        />
      </main>

      <div id="enroll">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI AVANCE 2" buttonText="BOOK A TOUR" />
      </div>
      <Footer />
    </>
  );
}
