import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/common/ContactUs';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import CentreQuickInfo from '../../components/common/CentreQuickInfo';
import StorySection from '../../components/common/StorySection';
import NepHero from '../../components/nep/NepHero';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import OneJourneySection from '../../components/programs/OneJourneySection';
import CampusLocationModule from '../../components/common/CampusLocationModule';
import { avanceCampusLocation } from './avancedata';
import JsonLd from '../../components/JsonLd';
import { centreSchema } from '../../../lib/schema.js';

const SITE_URL = 'https://www.myschoolitaly.com';
const PAGE_URL = `${SITE_URL}/avance/`;
const SEO_TITLE = 'Preschool & Daycare in Avance Hub, Gachibowli | My School ITALY';
const SEO_DESCRIPTION =
  'Neuroscience-informed corporate daycare, crèche, and preschool at aVance H04, Phoenix Infocity, Gachibowli, Hyderabad. Book a campus tour today.';

export const metadata = {
  title: {
    absolute: SEO_TITLE,
  },
  description: SEO_DESCRIPTION,
  alternates: {
    canonical: PAGE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: PAGE_URL,
    siteName: 'My School ITALY',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/images/avance/header.jpg`,
        width: 1200,
        height: 630,
        alt: 'My School ITALY aVance Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [`${SITE_URL}/images/avance/header.jpg`],
  },
};

const avanceStructuredData = centreSchema({
  name: 'My School ITALY | aVance 1',
  alternateName: 'MSI aVance Campus (Building H04, Gachibowli)',
  description: SEO_DESCRIPTION,
  url: PAGE_URL,
  telephone: '+917093904680',
  image: '/images/avance/header.jpg',
  address: {
    streetAddress: 'aVance Business Hub, Phoenix Infocity SEZ, Building H04, HUDA Techno Enclave',
    addressLocality: 'Gachibowli, Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500081',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 17.4474,
    longitude: 78.3772,
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=My+School+ITALY+aVance',
  areaServed: [
    'Gachibowli',
    'HUDA Techno Enclave',
    'HITEC City',
    'Kondapur',
    'Financial District',
    'Whitefields',
  ],
});

export default function AvancePage() {
  return (
    <>
      <JsonLd schema={avanceStructuredData} />
      <TopBar />
      <Header />

      <main>
        {/* 1. Cloud Header with Dedicated Avance Photo */}
        <CloudHeader
          image="/images/avance/header.jpg"
          imageClass="object-cover object-center"
          heightClass="w-full aspect-[2172/724] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] max-h-[650px]"
        />
        <div data-nav-sentinel />

        {/* 2. Section Header with H1 */}
        <SectionHeader
          titleTag="h1"
          title="PRESCHOOL & DAYCARE IN AVANCE HUB, GACHIBOWLI"
          subtitle="MY SCHOOL ITALY — AVANCE 1 (BUILDING H04)"
          description="We Begin By Understanding The Child. Neuroscience-informed corporate daycare, infant crèche, and preschool at Phoenix Infocity SEZ, Gachibowli."
          descriptionClassName="text-xl md:text-2xl font-normal"
        />

        {/* 2b. Centre Quick Info: Address, Timings, Phone, Short Intro */}
        <CentreQuickInfo
          campusName="aVance 1 Campus"
          address="aVance Business Hub, Phoenix Infocity SEZ, Building H04, HUDA Techno Enclave, Gachibowli, Hyderabad 500081"
          landmark="Phoenix Infocity SEZ, Building H04"
          timings="Monday – Friday: 8:00 AM – 7:30 PM | Saturday: 8:30 AM – 2:00 PM"
          phone="+91 70939 04680"
          phoneTel="+917093904680"
          intro="Situated inside aVance Business Hub (Phoenix Infocity SEZ), our campus serves corporate employees and neighbourhood families across Gachibowli, HUDA Techno Enclave, HITEC City, and Financial District with on-campus crèche and daycare."
          catchmentAreas={['Gachibowli', 'HUDA Techno Enclave', 'Kondapur', 'Whitefields', 'HITEC City', 'Financial District']}
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+aVance"
          tourHref="#enroll"
        />

        {/* 3. Story Section with Unique Avance Photo */}
        <div id="programs" className="scroll-mt-24">
          <StorySection
            containerClass="max-w-[1240px] mx-auto"
            imageWrapperClass="overflow-hidden rounded-2xl shadow-2xl border border-gray-100"
            imageClass="w-full h-auto object-cover scale-115 transform hover:scale-125 transition-transform duration-500"
            imageSrc="/images/avance/story.png"
            imageAlt="Children at My School ITALY aVance"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="Situated inside aVance Business Hub (Phoenix Infocity SEZ), our campus serves corporate employees and neighbourhood families across Gachibowli, HUDA Techno Enclave, and HITEC City."
            p2={
              <div className="space-y-3 mt-4 text-msi-purple">
                <p>
                  <strong className="text-msi-orange font-bold">Early Years:</strong> Baby Crèche (From 45 Days) • Ciao Baby • Toddler • Pre-Nursery • Nursery • K1 • K2
                </p>
                <p>
                  <strong className="text-msi-orange font-bold">Corporate Care:</strong> Daycare • Extended Daycare • Executive Shift Care • Saturday Care
                </p>
              </div>
            }
          />
        </div>

        {/* 4. NepHero with Unique Avance Photo */}
        <NepHero
          eyebrow="We Begin By Understanding The Child."
          title="WHY FAMILIES CHOOSE MSI AVANCE?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Located right inside the IT hub of Gachibowli, MSI aVance brings working parents peace of mind with close-proximity professional childcare and neuroscience-based education."
          bgImage="/images/avance/why-us.png"
          bgPosition="bg-cover bg-center"
          sectionClass="w-full aspect-[2172/724] max-h-[650px] py-8 md:py-12"
          readMoreHref="/why-msi"
        />

        {/* 5. Design Philosophy with Unique Avance Photo */}
        <DesignPhilosophy
          topId="neuropi-way"
          bottomId="parents-journey"
          image="/images/avance/neuropi.png"
          eyebrow="Start With The Child • The NeuroPi Way™"
          title={<>WE DON'T BEGIN WITH THE LESSON.<br />WE BEGIN WITH THE CHILD.</>}
          titleClass="text-msi-orange font-linotte font-bold text-2xl md:text-3xl leading-tight uppercase mb-3"
          p1="The NeuroPi Way™ begins with understanding who the child is — observing how each child engages and develops, personalising learning for their growth."
          readMoreHref="/neuropi-way"
        />

        {/* 6. OneJourneySection with Unique Avance Photo */}
        <OneJourneySection
          imageSrc="/images/avance/parent-journey.png"
          bgImageSrc="/images/avance/parent-journey.png"
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

        {/* 7. Campus Location Module */}
        <CampusLocationModule {...avanceCampusLocation} />
      </main>

      <div id="enroll">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI AVANCE" buttonText="BOOK A TOUR" />
      </div>
      <Footer />
    </>
  );
}
