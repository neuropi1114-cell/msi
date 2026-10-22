import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/common/ContactUs';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import CentreQuickInfo from '../../components/common/CentreQuickInfo';
import JsonLd from '../../components/JsonLd';
import CampusLocationModule from '../../components/common/CampusLocationModule';
import { HYDERABAD_CAMPUSES } from '../../data/hyderabadCampuses';
import { centreSchema } from '../../../lib/schema.js';

const SITE_URL = 'https://www.myschoolitaly.com';
const PAGE_URL = `${SITE_URL}/hyderabad/`;
const SEO_TITLE = 'Best Preschool & Daycare in Hyderabad | My School Italy';
const SEO_DESCRIPTION =
  'Best preschool & daycare in Hyderabad across Hitex, Kondapur, Kukatpally, Madhapur & Gachibowli. Neuroscience-based early care. Book a campus tour today!';

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
        url: `${SITE_URL}/images/cheerful-rainy-day.png`,
        width: 1200,
        height: 630,
        alt: 'Best Preschool & Daycare in Hyderabad - My School ITALY Campuses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [`${SITE_URL}/images/cheerful-rainy-day.png`],
  },
};

const hyderabadStructuredData = centreSchema({
  name: 'My School ITALY | Hyderabad Network',
  alternateName: 'MSI Hyderabad Centres',
  description: SEO_DESCRIPTION,
  url: PAGE_URL,
  telephone: '+917093904680',
  image: '/images/cheerful-rainy-day.png',
  address: {
    streetAddress: 'Hitex Road, next to HITEX Exhibition Centre Gate, Shilpa Layout, Izzathnagar',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500084',
    addressCountry: 'IN',
  },
  geo: {
    latitude: 17.472992,
    longitude: 78.313907,
  },
  hasMap: 'https://maps.google.com/?cid=13517112003780313980',
  areaServed: [
    'HITEX',
    'Kondapur',
    'Kukatpally',
    'Mindspace',
    'Gachibowli',
    'Madhapur',
    'Kavuri Hills',
    'Miyapur',
    'Financial District',
    'Manikonda',
  ],
});

const hyderabadCentresItemList = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'My School ITALY Preschool & Daycare Centres in Hyderabad',
  description:
    'Directory of My School ITALY preschool, crèche and daycare centres located across Hyderabad including Hitex, Kondapur, Kukatpally, Madhapur, and Gachibowli.',
  numberOfItems: 11,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'My School ITALY — Hitex Campus',
      url: 'https://www.myschoolitaly.com/hitex/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'My School ITALY — Kondapur Campus',
      url: 'https://www.myschoolitaly.com/kondapur/',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'My School ITALY — Kukatpally Campus',
      url: 'https://www.myschoolitaly.com/kukatpally/',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'My School ITALY — Mindspace (Madhapur)',
      url: 'https://www.myschoolitaly.com/mindspace/',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'My School ITALY — Avance H04 Campus (HiTech City)',
      url: 'https://www.myschoolitaly.com/avance/',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'My School ITALY — Avance H06 Campus (HiTech City)',
      url: 'https://www.myschoolitaly.com/avance-2/',
    },
    {
      '@type': 'ListItem',
      position: 7,
      name: 'My School ITALY — Kavuri Hills (Madhapur)',
      url: 'https://www.myschoolitaly.com/kavuri-hills/',
    },
    {
      '@type': 'ListItem',
      position: 8,
      name: 'My School ITALY — The Square / Q-City (Gachibowli)',
      url: 'https://www.myschoolitaly.com/qcity/',
    },
    {
      '@type': 'ListItem',
      position: 9,
      name: 'My School ITALY — Miyapur Campus',
      url: 'https://www.myschoolitaly.com/miyapur/',
    },
    {
      '@type': 'ListItem',
      position: 10,
      name: 'My School ITALY — Manikonda Campus',
      url: 'https://www.myschoolitaly.com/manikonda/',
    },
    {
      '@type': 'ListItem',
      position: 11,
      name: 'My School ITALY — Cyberabad Police Commissionerate (Gachibowli)',
      url: 'https://www.myschoolitaly.com/cyberabad-police-commissionerate/',
    },
  ],
};

export default function HyderabadPage() {
  return (
    <>
      <JsonLd schema={[hyderabadStructuredData, hyderabadCentresItemList]} />
      <TopBar />
      <Header />

      <main>
        {/* 1. Hero Banner */}
        <CloudHeader
          image="/images/cheerful-rainy-day.png"
          imageClass="object-cover object-center"
          heightClass="w-full aspect-[16/7] min-h-[240px] sm:min-h-[340px] md:min-h-[460px] max-h-[680px]"
        />
        <div data-nav-sentinel />

        {/* 2. Section Header with H1 */}
        <SectionHeader
          titleTag="h1"
          title="Best Preschool & Daycare in Hyderabad"
          subtitle="MY SCHOOL ITALY — 11 LOCATIONS ACROSS HYDERABAD"
          description="Find a neuroscience-informed preschool, baby crèche & daycare nearest to your home or office. Explore interactive maps, drive-times, and campus details below."
          descriptionClassName="text-xl md:text-2xl font-normal"
        />

        {/* 2b. Centre Quick Info: Hub Address, Timings, Phone, Intro */}
        <CentreQuickInfo
          campusName="Hyderabad Network"
          address="Hitex Road, next to HITEX Exhibition Centre Gate, Shilpa Layout, Izzathnagar, Hyderabad 500084 (Central Admissions)"
          landmark="Adjacent to HITEX Exhibition Centre"
          timings="Monday – Friday: 8:00 AM – 7:30 PM | Saturday: 8:30 AM – 2:00 PM"
          phone="+91 70939 04680"
          phoneTel="+917093904680"
          intro="My School ITALY operates 11 neuroscience-informed preschool, baby crèche, and daycare centres across Hyderabad, including HITEX, Kondapur, Mindspace, Avance H04, Avance H06, Kavuri Hills, Kukatpally, Miyapur, Q-City (The Square), Manikonda, and Cyberabad Police Commissionerate."
          catchmentAreas={['HITEX', 'Kondapur', 'Kukatpally', 'Mindspace', 'Gachibowli', 'Kavuri Hills', 'Miyapur', 'Financial District', 'Manikonda']}
          directionsUrl="https://www.google.com/maps/search/?api=1&query=My+School+ITALY+Hyderabad"
          tourHref="#enroll-hyderabad"
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

      {/* 5. Book Tour / Contact Form */}
      <div id="enroll-hyderabad">
        <ContactUs
          image="/images/whyus/Why_MSI_Enrol.png"
          title="BOOK A TOUR AT ANY HYDERABAD CAMPUS"
          buttonText="BOOK A CENTRE TOUR"
        />
      </div>

      {/* 6. Footer */}
      <Footer />
    </>
  );
}
