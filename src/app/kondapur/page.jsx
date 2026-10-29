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
const PAGE_URL = `${SITE_URL}/kondapur/`;
const SEO_TITLE = 'Preschool & Daycare in Kondapur | My School ITALY';
const SEO_DESCRIPTION =
  'Neuroscience-informed preschool, daycare, and baby crèche at Sumadhura Horizon, Botanical Garden Road, Kondapur, Hyderabad. Book a campus tour today.';

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
        url: `${SITE_URL}/images/kondapur/header.jpg`,
        width: 1200,
        height: 630,
        alt: 'My School ITALY Kondapur Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [`${SITE_URL}/images/kondapur/header.jpg`],
  },
};

const kondapurStructuredData = centreSchema({
  name: 'My School ITALY | Kondapur',
  alternateName: 'MSI Kondapur Campus (Sumadhura Horizon)',
  description: SEO_DESCRIPTION,
  url: PAGE_URL,
  telephone: '+917093904680',
  image: '/images/kondapur/header.jpg',
  address: {
    streetAddress: 'Sumadhura Horizon, Botanical Garden Road, Block I, NCB Enclave',
    addressLocality: 'Kondapur, Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500084',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 17.4663324,
    longitude: 78.2993779,
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=My+School+ITALY+Kondapur',
  areaServed: [
    'Kondapur',
    'NCB Enclave',
    'Botanical Garden Road',
    'Kothaguda',
    'Whitefields',
    'Gachibowli',
    'Hafeezpet',
  ],
});

export default function KondapurPage() {
  return (
    <>
      <JsonLd schema={kondapurStructuredData} />
      <JsonLd schema={faqSchema(CENTRE_GENERIC_FAQS('Kondapur Campus', 'Kondapur, Hyderabad'))} />
      <TopBar />
      <Header />

      <main>
        {/* 1. Cloud Header with Dedicated Kondapur Photo */}
        <CloudHeader
          image="/images/kondapur/header.jpg"
          imageClass="object-cover object-center"
          heightClass="w-full aspect-[2172/724] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] max-h-[650px]"
        />
        <div data-nav-sentinel />

        {/* 2. Section Header with H1 */}
        <SectionHeader
          titleTag="h1"
          title="PRESCHOOL & DAYCARE IN KONDAPUR"
          subtitle="MY SCHOOL ITALY — KONDAPUR (SUMADHURA HORIZON)"
          description="We Begin By Understanding The Child. Neuroscience-informed early years, daycare, and baby crèche at Botanical Garden Road, NCB Enclave & Kondapur."
          descriptionClassName="text-xl md:text-2xl font-normal"
        />

        {/* 2b. Centre Quick Info: Address, Timings, Phone, Short Intro */}
        <CentreQuickInfo
          campusName="Kondapur Campus"
          address="Sumadhura Horizon, Botanical Garden Road, Block I, NCB Enclave, Kondapur, Hyderabad 500084"
          landmark="Sumadhura Horizon, Botanical Garden Road"
          timings="Monday – Friday: 8:00 AM – 7:30 PM | Saturday: 8:30 AM – 2:00 PM"
          phone="+91 70939 04680"
          phoneTel="+917093904680"
          intro="Situated inside Sumadhura Horizon on Botanical Garden Road, My School ITALY Kondapur provides early childhood education and care tailored to modern families across NCB Enclave, Kothaguda, Whitefields, and Gachibowli."
          catchmentAreas={['NCB Enclave', 'Botanical Garden Road', 'Kondapur', 'Kothaguda', 'Whitefields', 'Gachibowli']}
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Kondapur"
          tourHref="#enroll"
        />

        {/* 3. Story Section with Unique Kondapur Photo */}
        <div id="programs" className="scroll-mt-24">
          <StorySection
            containerClass="max-w-[1240px] mx-auto"
            imageWrapperClass="overflow-hidden rounded-2xl shadow-2xl border border-gray-100"
            imageClass="w-full h-auto object-cover scale-115 transform hover:scale-125 transition-transform duration-500"
            imageSrc="/images/kondapur/story.png"
            imageAlt="Children engaged in hands-on learning at My School ITALY Kondapur"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="At Sumadhura Horizon on Botanical Garden Road, our Kondapur centre provides quality early childhood education and care for families in NCB Enclave, Kothaguda, and Gachibowli."
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

        {/* 4. NepHero with Unique Kondapur Photo */}
        <NepHero
          eyebrow="We Begin By Understanding The Child."
          title="WHY FAMILIES CHOOSE MSI KONDAPUR?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Conveniently situated near Botanical Garden Road and Kothaguda X Road, MSI Kondapur delivers European early years principles infused with neuroscience."
          bgImage="/images/kondapur/why-us.png"
          bgPosition="bg-cover bg-center"
          sectionClass="w-full aspect-[2172/724] max-h-[650px] py-8 md:py-12"
          readMoreHref="/why-msi"
        />

        {/* 5. Design Philosophy with Unique Kondapur Photo */}
        <DesignPhilosophy
          topId="neuropi-way"
          bottomId="parents-journey"
          image="/images/kondapur/neuropi.png"
          eyebrow="Start With The Child • The NeuroPi Way™"
          title={<>WE DON'T BEGIN WITH THE LESSON.<br />WE BEGIN WITH THE CHILD.</>}
          titleClass="text-msi-orange font-linotte font-bold text-2xl md:text-3xl leading-tight uppercase mb-3"
          p1="The NeuroPi Way™ begins with understanding who the child is — observing how each child engages and develops, personalising learning for their growth."
          readMoreHref="/neuropi-way"
        />

        {/* 6. OneJourneySection with Unique Kondapur Photo */}
        <OneJourneySection
          imageSrc="/images/kondapur/parent-journey.png"
          bgImageSrc="/images/kondapur/parent-journey.png"
          eyebrow="You Are Not Dropping Your Child At School. You Are Joining Their Journey."
          title="YOU ARE PART OF THE JOURNEY"
          titleColor="text-msi-orange font-linotte font-bold text-2xl md:text-3xl uppercase mb-4"
          showReadMore={true}
          readMoreHref="/parents"
        >
          <p className="text-msi-purple text-sm sm:text-base leading-relaxed">
            Starting preschool or daycare is a milestone for the whole family. At MSI Kondapur, we create an open, connected relationship between home and school.
          </p>
        </OneJourneySection>

        {/* 7. Campus Location Module */}
        <CampusLocationModule
          eyebrow="Find us in Kondapur, Hyderabad"
          campusName="My School ITALY — Kondapur"
          description="Situated at Sumadhura Horizon on Botanical Garden Road, our centre serves families from NCB Enclave, Kondapur, Kothaguda, Whitefields, and Gachibowli."
          address="Sumadhura Horizon, Botanical Garden Road, Block I, NCB Enclave, Kondapur, Hyderabad 500084"
          landmark="Sumadhura Horizon, Botanical Garden Road"
          distanceHeading="Drive-Time from Nearby Neighbourhoods"
          distanceBlock={[
            { area: "NCB Enclave", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Botanical Garden Road", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Kondapur", distance: "1–4 km", time: "5–15 min" },
            { area: "Kothaguda", distance: "2–4 km", time: "8–15 min" },
            { area: "Whitefields", distance: "2–5 km", time: "8–18 min" },
            { area: "Gachibowli", distance: "3–6 km", time: "10–20 min" },
          ]}
          googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30446.89358374125!2d78.29937797431639!3d17.4663324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93b1f9a15557%3A0x7a97437ae9c62a1d!2sMy%20School%20ITALY%20%7C%20Kondapur!5e0!3m2!1sen!2sin!4v1790742033628!5m2!1sen!2sin"
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Kondapur"
        />
      </main>

      <div id="enroll">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI KONDAPUR" buttonText="BOOK A TOUR" />
      </div>
      <Footer
        address="Sumadhura Horizon, Botanical Garden Road, Block I, NCB Enclave, Kondapur, Hyderabad 500084"
        addressLabel="KONDAPUR CAMPUS:"
        phone="(+91) 70939 04680"
        phoneHref="tel:+917093904680"
        email="kondapur@myschoolitaly.com"
        italyAddress={null}
      />
    </>
  );
}
