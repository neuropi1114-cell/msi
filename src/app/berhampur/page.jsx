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
  title: 'My School ITALY — Berhampur / Brahmapur | Preschool & Daycare Odisha',
  description: 'Neuroscience-informed preschool, daycare, and crèche at Tata Benz Square, Berhampur / Brahmapur, Odisha.',
  alternates: { canonical: '/berhampur' },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'My School ITALY — Berhampur Campus',
  description: 'Neuroscience-informed preschool and daycare at Tata Benz Square, Berhampur / Brahmapur, Odisha.',
  url: 'https://myschoolitaly.com/berhampur',
  telephone: '+917093904680',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tata Benz Square',
    addressLocality: 'Berhampur / Brahmapur',
    addressRegion: 'Odisha',
    postalCode: '760001',
    addressCountry: 'IN',
  },
};

export default function BerhampurPage() {
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
          title="MY SCHOOL ITALY — BERHAMPUR (BRAHMAPUR)"
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
            imageAlt="Children at My School ITALY Berhampur"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="Located at Tata Benz Square in Berhampur, our campus brings neuroscience-informed early childhood education and care to families across central Brahmapur and surrounding neighbourhoods."
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
          title="WHY FAMILIES CHOOSE MSI BERHAMPUR?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Positioned conveniently at Tata Benz Square, MSI Berhampur delivers European early childhood principles infused with neuroscience research for young learners in Odisha."
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
            Starting preschool or daycare is a milestone for the whole family. At MSI Berhampur, we create an open, connected relationship between home and school.
          </p>
        </OneJourneySection>

        <CampusLocationModule
          eyebrow="Find us in Berhampur / Brahmapur, Odisha"
          campusName="My School ITALY — Berhampur (Brahmapur)"
          description="Our Tata Benz Square centre is convenient for families from Godavarish Nagar, Kamapalli, Courtpeta, Gandhi Nagar, Lanjipalli, and central Berhampur/Brahmapur."
          address="Tata Benz Square, Berhampur, Odisha 760001"
          landmark="Tata Benz Square, Berhampur"
          distanceHeading="Drive-Time from Nearby Neighbourhoods"
          distanceBlock={[
            { area: "Tata Benz Square", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Godavarish Nagar", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Kamapalli", distance: "1–3 km", time: "5–10 min" },
            { area: "Courtpeta", distance: "1–4 km", time: "5–12 min" },
            { area: "Gandhi Nagar", distance: "2–4 km", time: "8–15 min" },
            { area: "Lanjipalli", distance: "2–5 km", time: "8–18 min" },
          ]}
          googleMapsUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d30127.848082200635!2d84.789401!3d19.283192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d50769da1aafd%3A0xf80d8c1376931eb7!2sMy%20School%20Italy%20Brahmapur!5e0!3m2!1sen!2sus!4v1790742609364!5m2!1sen!2sus"
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+Italy+Brahmapur"
        />
      </main>

      <div id="enroll">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI BERHAMPUR" buttonText="BOOK A TOUR" />
      </div>
      <Footer />
    </>
  );
}
