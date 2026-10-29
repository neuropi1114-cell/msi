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
const PAGE_URL = `${SITE_URL}/kukatpally/`;
const SEO_TITLE = 'Preschool & Daycare in Kukatpally | My School ITALY';
const SEO_DESCRIPTION =
  'Neuroscience-informed preschool, daycare, and crèche in Gokul Plots, KPHB Phase 9, Kukatpally, Hyderabad. Book a campus tour today.';

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
        url: `${SITE_URL}/images/kukatpally/header.jpg`,
        width: 1200,
        height: 630,
        alt: 'My School ITALY Kukatpally Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [`${SITE_URL}/images/kukatpally/header.jpg`],
  },
};

const kukatpallyStructuredData = centreSchema({
  name: 'My School ITALY | Kukatpally',
  alternateName: 'MSI Kukatpally Campus (KPHB Phase 9)',
  description: SEO_DESCRIPTION,
  url: PAGE_URL,
  telephone: '+917093904680',
  image: '/images/kukatpally/header.jpg',
  address: {
    streetAddress: 'Gokul Plots, Venkata Ramana Colony, KPHB Phase 9 / Hafeezpet',
    addressLocality: 'Kukatpally, Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500085',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 17.4889374,
    longitude: 78.3613766,
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=My+School+ITALY+Kukatpally',
  areaServed: [
    'Kukatpally',
    'KPHB',
    'Gokul Plots',
    'Venkata Ramana Colony',
    'Hafeezpet',
    'Miyapur',
    'Allwyn Colony',
  ],
});

export default function KukatpallyPage() {
  return (
    <>
      <JsonLd schema={kukatpallyStructuredData} />
      <JsonLd schema={faqSchema(CENTRE_GENERIC_FAQS('Kukatpally Campus', 'Kukatpally, Hyderabad'))} />
      <TopBar />
      <Header />

      <main>
        {/* 1. Cloud Header with Dedicated Kukatpally Photo */}
        <CloudHeader
          image="/images/kukatpally/header.jpg"
          imageClass="object-cover object-center"
          heightClass="w-full aspect-[2172/724] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] max-h-[650px]"
        />
        <div data-nav-sentinel />

        {/* 2. Section Header with H1 */}
        <SectionHeader
          titleTag="h1"
          title="PRESCHOOL & DAYCARE IN KUKATPALLY"
          subtitle="MY SCHOOL ITALY — KUKATPALLY (KPHB PHASE 9)"
          description="We Begin By Understanding The Child. Neuroscience-informed early years, crèche, and daycare serving KPHB Phase 9, Gokul Plots, Hafeezpet, and Miyapur."
          descriptionClassName="text-xl md:text-2xl font-normal"
        />

        {/* 2b. Centre Quick Info: Address, Timings, Phone, Short Intro */}
        <CentreQuickInfo
          campusName="Kukatpally Campus"
          address="Gokul Plots, Venkata Ramana Colony, KPHB Phase 9 / Hafeezpet, Kukatpally, Hyderabad 500085"
          landmark="Gokul Plots, Near KPHB Phase 9"
          timings="Monday – Friday: 8:00 AM – 7:30 PM | Saturday: 8:30 AM – 2:00 PM"
          phone="+91 70939 04680"
          phoneTel="+917093904680"
          intro="Located in Gokul Plots near KPHB Phase 9, My School ITALY Kukatpally brings European early-learning principles and neuroscience-based daycare to young families across Venkata Ramana Colony, Hafeezpet, Miyapur, and KPHB."
          catchmentAreas={['Gokul Plots', 'KPHB Phase 9', 'Venkata Ramana Colony', 'Hafeezpet', 'Miyapur', 'Kondapur']}
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Kukatpally"
          tourHref="#enroll"
        />

        {/* 3. Story Section with Unique Kukatpally Photo */}
        <div id="programs" className="scroll-mt-24">
          <StorySection
            containerClass="max-w-[1240px] mx-auto"
            imageWrapperClass="overflow-hidden rounded-2xl shadow-2xl border border-gray-100"
            imageClass="w-full h-auto object-cover scale-115 transform hover:scale-125 transition-transform duration-500"
            imageSrc="/images/kukatpally/story.png"
            imageAlt="Children at My School ITALY Kukatpally"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="Located in Gokul Plots near KPHB Phase 9, our Kukatpally centre serves families across Venkata Ramana Colony, Hafeezpet, Kondapur, Miyapur, and Allwyn Colony."
            p2={
              <div className="space-y-3 mt-4 text-msi-purple">
                <p>
                  <strong className="text-msi-orange font-bold">Early Years:</strong> Baby Crèche • Ciao Baby • Toddler • Pre-Nursery • Nursery • K1 • K2
                </p>
                <p>
                  <strong className="text-msi-orange font-bold">Care:</strong> Daycare • Extended Daycare • Early Drop-Off • Late Pick-Up • Saturday Care
                </p>
              </div>
            }
          />
        </div>

        {/* 4. NepHero with Unique Kukatpally Photo */}
        <NepHero
          eyebrow="We Begin By Understanding The Child."
          title="WHY FAMILIES CHOOSE MSI KUKATPALLY?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Positioned in the vibrant KPHB corridor, MSI Kukatpally brings European early-learning principles and neuroscience understanding to young families."
          bgImage="/images/kukatpally/why-us.png"
          bgPosition="bg-cover bg-center"
          sectionClass="w-full aspect-[2172/724] max-h-[650px] py-8 md:py-12"
          readMoreHref="/why-msi"
        />

        {/* 5. Design Philosophy with Unique Kukatpally Photo */}
        <DesignPhilosophy
          topId="neuropi-way"
          bottomId="parents-journey"
          image="/images/kukatpally/neuropi.png"
          eyebrow="Start With The Child • The NeuroPi Way™"
          title={<>WE DON'T BEGIN WITH THE LESSON.<br />WE BEGIN WITH THE CHILD.</>}
          titleClass="text-msi-orange font-linotte font-bold text-2xl md:text-3xl leading-tight uppercase mb-3"
          p1="The NeuroPi Way™ begins with understanding who the child is — observing how each child engages and develops, personalising learning for their growth."
          readMoreHref="/neuropi-way"
        />

        {/* 6. OneJourneySection with Unique Kukatpally Photo */}
        <OneJourneySection
          imageSrc="/images/kukatpally/parent-journey.png"
          bgImageSrc="/images/kukatpally/parent-journey.png"
          eyebrow="You Are Not Dropping Your Child At School. You Are Joining Their Journey."
          title="YOU ARE PART OF THE JOURNEY"
          titleColor="text-msi-orange font-linotte font-bold text-2xl md:text-3xl uppercase mb-4"
          showReadMore={true}
          readMoreHref="/parents"
        >
          <p className="text-msi-purple text-sm sm:text-base leading-relaxed">
            Starting preschool or daycare is a milestone for the whole family. At MSI Kukatpally, we create an open, connected relationship between home and school.
          </p>
        </OneJourneySection>

        {/* 7. Campus Location Module */}
        <CampusLocationModule
          eyebrow="Find us in Kukatpally / KPHB, Hyderabad"
          campusName="My School ITALY — Kukatpally"
          description="Located in Gokul Plots near KPHB Phase 9, our Kukatpally centre is accessible to families from Venkata Ramana Colony, Hafeezpet, Kondapur, Miyapur, and KPHB."
          address="Gokul Plots, Venkata Ramana Colony, KPHB Phase 9 / Hafeezpet, Hyderabad 500085"
          landmark="Gokul Plots, Near KPHB Phase 9"
          distanceHeading="Drive-Time from Nearby Neighbourhoods"
          distanceBlock={[
            { area: "Gokul Plots", distance: "0.5–2 km", time: "3–8 min" },
            { area: "KPHB Phase 9", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Venkata Ramana Colony", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Hafeezpet", distance: "2–5 km", time: "8–18 min" },
            { area: "Kondapur", distance: "4–7 km", time: "12–25 min" },
            { area: "Miyapur", distance: "4–7 km", time: "12–25 min" },
          ]}
          googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16410.739804152883!2d78.3613766871582!3d17.488937400000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93cf4f823625%3A0x4638fdc567e40351!2sMy%20School%20ITALY%20%7C%20Kukatpally!5e1!3m2!1sen!2sin!4v1790701224290!5m2!1sen!2sin"
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Kukatpally"
        />
      </main>

      <div id="enroll">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI KUKATPALLY" buttonText="BOOK A TOUR" />
      </div>
      <Footer
        address="Gokul Plots, Venkata Ramana Colony, KPHB Phase 9 / Hafeezpet, Kukatpally, Hyderabad 500085"
        addressLabel="KUKATPALLY CAMPUS:"
        phone="(+91) 70939 04680"
        phoneHref="tel:+917093904680"
        email="kukatpally@myschoolitaly.com"
        italyAddress={null}
      />
    </>
  );
}
