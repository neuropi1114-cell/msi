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
  title: 'My School ITALY — Kukatpally | Preschool & Daycare KPHB',
  description: 'Neuroscience-informed preschool, daycare, and crèche in Gokul Plots, KPHB Phase 9, Kukatpally, Hyderabad.',
  alternates: { canonical: '/kukatpally' },
};

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'My School ITALY — Kukatpally',
  description: 'Neuroscience-based early years education and daycare in Kukatpally, KPHB.',
  url: 'https://myschoolitaly.com/kukatpally',
  telephone: '+917093904680',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Gokul Plots, Venkata Ramana Colony, KPHB Phase 9 / Hafeezpet',
    addressLocality: 'Kukatpally, Hyderabad',
    postalCode: '500085',
    addressCountry: 'IN',
  },
};

export default function KukatpallyPage() {
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
          title="MY SCHOOL ITALY — KUKATPALLY"
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
                  <strong className="text-msi-orange font-bold">Care:</strong> Daycare • Extended Daycare • Early Drop-Off • Late Pick-Up
                </p>
              </div>
            }
          />
        </div>

        <NepHero
          eyebrow="We Begin By Understanding The Child."
          title="WHY FAMILIES CHOOSE MSI KUKATPALLY?"
          titleColor="text-msi-yellow"
          subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
          description="Positioned in the vibrant KPHB corridor, MSI Kukatpally brings European early-learning principles and neuroscience understanding to young families."
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
            Starting preschool or daycare is a milestone for the whole family. At MSI Kukatpally, we create an open, connected relationship between home and school.
          </p>
        </OneJourneySection>

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
      <Footer />
    </>
  );
}
