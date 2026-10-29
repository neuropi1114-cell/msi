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
import JsonLd from '../../components/JsonLd';
import { centreSchema, faqSchema } from '../../../lib/schema.js';
import { CENTRE_GENERIC_FAQS } from '../../data/faqs.js';

const SITE_URL = 'https://www.myschoolitaly.com';
const PAGE_URL = `${SITE_URL}/kavuri-hills/`;
const SEO_TITLE = 'Preschool & Daycare in Kavuri Hills, Madhapur | My School ITALY';
const SEO_DESCRIPTION =
  'Neuroscience-informed preschool, daycare, and crèche in Kavuri Hills Phase 2, Doctor\'s Colony, Madhapur, Hyderabad. Book a campus tour today.';

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
        url: `${SITE_URL}/images/kavuri-hills/header.jpg`,
        width: 1200,
        height: 630,
        alt: 'My School ITALY Kavuri Hills Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [`${SITE_URL}/images/kavuri-hills/header.jpg`],
  },
};

const kavuriHillsStructuredData = centreSchema({
  name: 'My School ITALY | Kavuri Hills',
  alternateName: 'MSI Kavuri Hills Campus (Doctor\'s Colony)',
  description: SEO_DESCRIPTION,
  url: PAGE_URL,
  telephone: '+917093904680',
  image: '/images/kavuri-hills/header.jpg',
  address: {
    streetAddress: 'Kavuri Hills Phase 2 Road, Doctor\'s Colony',
    addressLocality: 'Madhapur, Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500033',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 17.4360037,
    longitude: 78.3740335,
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=My+School+ITALY+Kavuri+Hills',
  areaServed: [
    'Kavuri Hills',
    'Doctor\'s Colony',
    'Madhapur',
    'Jubilee Hills',
    'Megha Hills',
    'HITEC City',
    'Durgam Cheruvu',
  ],
});

export default function KavuriHillsPage() {
  return (
    <>
      <JsonLd schema={kavuriHillsStructuredData} />
      <JsonLd schema={faqSchema(CENTRE_GENERIC_FAQS('Kavuri Hills Campus', 'Madhapur / Kavuri Hills, Hyderabad'))} />
      <TopBar />
      <Header />

      <main>
        {/* 1. Cloud Header with Dedicated Kavuri Hills Photo */}
        <CloudHeader
          image="/images/kavuri-hills/header.jpg"
          imageClass="object-cover object-center"
          heightClass="w-full aspect-[2172/724] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] max-h-[650px]"
        />
        <div data-nav-sentinel />

        {/* 2. Section Header with H1 */}
        <SectionHeader
          titleTag="h1"
          title="PRESCHOOL & DAYCARE IN KAVURI HILLS, MADHAPUR"
          subtitle="MY SCHOOL ITALY — KAVURI HILLS (DOCTOR'S COLONY)"
          description="We Begin By Understanding The Child. Neuroscience-informed early years, daycare, and baby crèche in Kavuri Hills Phase 2, Madhapur & Jubilee Hills."
          descriptionClassName="text-xl md:text-2xl font-normal"
        />

        {/* 2b. Centre Quick Info: Address, Timings, Phone, Short Intro */}
        <CentreQuickInfo
          campusName="Kavuri Hills Campus"
          address="Kavuri Hills Phase 2 Road, Doctor's Colony, Madhapur, Hyderabad 500033"
          landmark="Doctor's Colony, Near Durgam Cheruvu Metro"
          timings="Monday – Friday: 8:00 AM – 7:30 PM | Saturday: 8:30 AM – 2:00 PM"
          phone="+91 70939 04680"
          phoneTel="+917093904680"
          intro="Nestled in Kavuri Hills Phase 2 near Doctor's Colony and Durgam Cheruvu, My School ITALY Kavuri Hills offers an intimate, neuroscience-backed early childhood education and premium daycare for families across Madhapur, Jubilee Hills, and HITEC City."
          catchmentAreas={['Kavuri Hills', 'Doctor\'s Colony', 'Madhapur', 'Jubilee Hills', 'Megha Hills', 'HITEC City']}
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Kavuri+Hills"
          tourHref="#enroll"
        />

        {/* 3. Story Section with Unique Kavuri Hills Photo */}
        <div id="programs" className="scroll-mt-24">
          <StorySection
            containerClass="max-w-[1240px] mx-auto"
            imageWrapperClass="overflow-hidden rounded-2xl shadow-2xl border border-gray-100"
            imageClass="w-full h-auto object-cover scale-115 transform hover:scale-125 transition-transform duration-500"
            imageSrc="/images/kavuri-hills/story.png"
            imageAlt="Children at My School ITALY Kavuri Hills"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="Located in Kavuri Hills Phase 2 near Doctor's Colony, our campus serves families across Madhapur, Jubilee Hills, Venkatagiri, and HITEC City."
            p2={
              <div className="space-y-3 mt-4 text-msi-purple">
                <p>
                  <strong className="text-msi-orange font-bold">Early Years:</strong> Baby Crèche (From 45 Days) • Ciao Baby • Toddler • Pre-Nursery • Nursery • K1 • K2
                </p>
                <p>
                  <strong className="text-msi-orange font-bold">Care:</strong> Daycare • Extended Daycare • Early Drop-Off • Late Pick-Up • Saturday Care
                </p>
              </div>
            }
          />
        </div>

        {/* 4. NepHero with Unique Kavuri Hills Photo */}
        <NepHero
          eyebrow="We Begin By Understanding The Child."
          title="WHY FAMILIES CHOOSE MSI KAVURI HILLS?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Nestled near Doctor's Colony and Durgam Cheruvu, MSI Kavuri Hills provides world-class neuroscience-backed early education and daycare."
          bgImage="/images/kavuri-hills/why-us.png"
          bgPosition="bg-cover bg-center"
          sectionClass="w-full aspect-[2172/724] max-h-[650px] py-8 md:py-12"
          readMoreHref="/why-msi"
        />

        {/* 5. Design Philosophy with Unique Kavuri Hills Photo */}
        <DesignPhilosophy
          topId="neuropi-way"
          bottomId="parents-journey"
          image="/images/kavuri-hills/neuropi.png"
          eyebrow="Start With The Child • The NeuroPi Way™"
          title={<>WE DON'T BEGIN WITH THE LESSON.<br />WE BEGIN WITH THE CHILD.</>}
          titleClass="text-msi-orange font-linotte font-bold text-2xl md:text-3xl leading-tight uppercase mb-3"
          p1="The NeuroPi Way™ begins with understanding who the child is — observing how each child engages and develops, personalising learning for their growth."
          readMoreHref="/neuropi-way"
        />

        {/* 6. OneJourneySection with Unique Kavuri Hills Photo */}
        <OneJourneySection
          imageSrc="/images/kavuri-hills/parent-journey.png"
          bgImageSrc="/images/kavuri-hills/parent-journey.png"
          eyebrow="You Are Not Dropping Your Child At School. You Are Joining Their Journey."
          title="YOU ARE PART OF THE JOURNEY"
          titleColor="text-msi-orange font-linotte font-bold text-2xl md:text-3xl uppercase mb-4"
          showReadMore={true}
          readMoreHref="/parents"
        >
          <p className="text-msi-purple text-sm sm:text-base leading-relaxed">
            Starting preschool or daycare is a milestone for the whole family. At MSI Kavuri Hills, we create an open, connected relationship between home and school.
          </p>
        </OneJourneySection>

        {/* 7. Campus Location Module */}
        <CampusLocationModule
          eyebrow="Find us in Madhapur, Hyderabad"
          campusName="My School ITALY — Kavuri Hills"
          description="Located in Kavuri Hills Phase 2 Road near Doctor's Colony, this centre is easily accessible for families in Kavuri Hills, Madhapur, Jubilee Hills, and HITEC City."
          address="Kavuri Hills Phase 2 Road, Doctor's Colony, Madhapur, Hyderabad 500033"
          landmark="Doctor's Colony, Near Durgam Cheruvu Metro"
          distanceHeading="Drive-Time from Nearby Neighbourhoods"
          distanceBlock={[
            { area: "Kavuri Hills", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Doctor's Colony", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Madhapur", distance: "2–4 km", time: "8–15 min" },
            { area: "Jubilee Hills", distance: "3–6 km", time: "10–22 min" },
            { area: "Megha Hills", distance: "2–4 km", time: "8–15 min" },
            { area: "HITEC City", distance: "3–6 km", time: "10–22 min" },
          ]}
          googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16415.509936034363!2d78.3740335871582!3d17.43600370000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91154133e013%3A0x64197f0e69be15a1!2sMy%20School%20ITALY%20%7C%20Kavuri%20Hills!5e1!3m2!1sen!2sin!4v1790701203506!5m2!1sen!2sin"
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Kavuri+Hills"
        />
      </main>

      <div id="enroll">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI KAVURI HILLS" buttonText="BOOK A TOUR" />
      </div>
      <Footer
        address="Kavuri Hills Phase 2 Road, Doctor's Colony, Madhapur, Hyderabad 500033"
        addressLabel="KAVURI HILLS CAMPUS:"
        phone="(+91) 70939 04680"
        phoneHref="tel:+917093904680"
        email="kavurihills@myschoolitaly.com"
        italyAddress={null}
      />
    </>
  );
}
