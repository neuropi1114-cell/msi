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
import { avanceCampusLocation } from './avancedata';
import JsonLd from '../../components/JsonLd';

export const metadata = {
  title: 'My School ITALY — aVance 1 (H04) | Corporate Daycare & Preschool Gachibowli',
  description: 'Neuroscience-informed corporate daycare, crèche, and preschool at aVance H04, Phoenix Infocity, Gachibowli, Hyderabad.',
  alternates: { canonical: '/avance' },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'My School ITALY — aVance 1 Campus',
  description: 'Corporate childcare, baby crèche, and preschool at aVance Business Hub H04, Gachibowli.',
  url: 'https://myschoolitaly.com/avance',
  telephone: '+917093904680',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'aVance Business Hub, Phoenix Infocity SEZ, Building H04, HUDA Techno Enclave',
    addressLocality: 'Gachibowli, Hyderabad',
    postalCode: '500081',
    addressCountry: 'IN',
  },
};

export default function AvancePage() {
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
          title="MY SCHOOL ITALY — AVANCE"
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
            imageAlt="Children at My School ITALY aVance"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="Situated inside aVance Business Hub (Phoenix Infocity SEZ), our campus serves corporate employees and neighbourhood families across Gachibowli, HUDA Techno Enclave, and HITEC City."
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
          title="WHY FAMILIES CHOOSE MSI AVANCE?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Located right inside the IT hub of Gachibowli, MSI aVance brings working parents peace of mind with close-proximity professional childcare and neuroscience-based education."
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
            Starting preschool or daycare is a milestone for the whole family. At MSI aVance, we create an open, connected relationship between home and school.
          </p>
        </OneJourneySection>

        <CampusLocationModule {...avanceCampusLocation} />
      </main>

      <div id="enroll">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI AVANCE" buttonText="BOOK A TOUR" />
      </div>
      <Footer />
    </>
  );
}
