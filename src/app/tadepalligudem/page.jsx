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
  title: 'My School ITALY — Tadepalligudem | Preschool & Daycare Andhra Pradesh',
  description: 'Neuroscience-informed preschool, daycare, and crèche at Subbaraopeta, near Karri Satyavathi Nagar, Tadepalligudem, Andhra Pradesh.',
  alternates: { canonical: '/tadepalligudem' },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'My School ITALY — Tadepalligudem Campus',
  description: 'Neuroscience-informed preschool and daycare in Subbaraopeta, Tadepalligudem.',
  url: 'https://myschoolitaly.com/tadepalligudem',
  telephone: '+917093904680',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'D.No. 4-33, 4/A, Subbaraopeta, near Municipal Commissioner Quarters, Karri Satyavathi Nagar',
    addressLocality: 'Tadepalligudem',
    addressRegion: 'Andhra Pradesh',
    postalCode: '534101',
    addressCountry: 'IN',
  },
};

export default function TadepalligudemPage() {
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
          titleTag="h1"
          title="MY SCHOOL ITALY — TADEPALLIGUDEM"
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
            imageAlt="Children at My School ITALY Tadepalligudem"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="Located in Subbaraopeta near Karri Satyavathi Nagar, My School ITALY Tadepalligudem provides a nurturing, neuroscience-informed foundation for young learners."
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
          title="WHY FAMILIES CHOOSE MSI TADEPALLIGUDEM?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Serving families across Tadepalligudem town centre, Pentapadu, and Kadiyaddha, our campus brings European pedagogy and neuroscience research together."
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
            Starting preschool or daycare is a milestone for the whole family. At MSI Tadepalligudem, we create an open, connected relationship between home and school.
          </p>
        </OneJourneySection>

        <CampusLocationModule
          eyebrow="Find us in Tadepalligudem, Andhra Pradesh"
          campusName="My School ITALY — Tadepalligudem"
          description="Situated in Subbaraopeta near Karri Satyavathi Nagar, our centre serves families across central Tadepalligudem, Pentapadu, and Kadiyaddha."
          address="D.No. 4-33, 4/A, Subbaraopeta, near Municipal Commissioner Quarters, Karri Satyavathi Nagar, Tadepalligudem, Andhra Pradesh 534101"
          landmark="Near Municipal Commissioner Quarters, Subbaraopeta"
          distanceHeading="Drive-Time from Nearby Neighbourhoods"
          distanceBlock={[
            { area: "Subbaraopeta", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Karri Satyavathi Nagar", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Tadepalligudem Town Centre", distance: "1–4 km", time: "5–15 min" },
            { area: "Pentapadu", distance: "3–6 km", time: "10–20 min" },
            { area: "Kadiyaddha", distance: "4–8 km", time: "12–25 min" },
          ]}
          googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.225900787082!2d81.5322049!3d16.815145700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b5bcee9f2cc9%3A0x82d55cf653784682!2sMy%20School%20ITALY%20%7C%20Tadepalligudem!5e0!3m2!1sen!2sus!4v1790742659780!5m2!1sen!2sus"
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Tadepalligudem"
        />
      </main>

      <div id="enroll">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI TADEPALLIGUDEM" buttonText="BOOK A TOUR" />
      </div>
      <Footer />
    </>
  );
}
