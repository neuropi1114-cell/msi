import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/common/ContactUs';
import CloudHeader from '../../components/layout/CloudHeader';
import WatchCentreButton from '../../components/common/WatchCentreButton';
import SectionHeader from '../../components/common/SectionHeader';
import StorySection from '../../components/common/StorySection';
import NepHero from '../../components/nep/NepHero';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import OneJourneySection from '../../components/programs/OneJourneySection';
import DualFeatureSection from '../../components/common/DualFeatureSection';
import VideoShowcase from '../../components/home/VideoShowcase';
import GalleryStrip from '../../components/common/GalleryStrip';
import GridGallery from '../../components/common/GridGallery';
import SectionScrollController from '../../components/common/SectionScrollController';
import CampusLocationModule from '../../components/common/CampusLocationModule';
import JsonLd from '../../components/JsonLd';

import { buildPageMetadata } from '../../utils/seo';
import { centreVideos, whyUsGalleryImages } from '../whyus/whyusdata';

export const metadata = buildPageMetadata('/hitex/');

const hitexSchema = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'My School ITALY — HITEX Campus',
  description: 'Neuroscience-informed preschool, baby crèche, daycare, and corporate childcare in HITEX, HiTech City, Hyderabad.',
  url: 'https://www.myschoolitaly.com/hitex/',
  telephone: '+917093904680',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hitex, HiTech City',
    addressLocality: 'Hyderabad',
    postalCode: '500084',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '17.4716',
    longitude: '78.3727',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:30',
    },
  ],
};

import {
  hitexProgramsDrawer,
  hitexWhyUsDrawer,
  hitexNeuroPiDrawer,
  hitexParentsDrawer,
  hitexGalleryImages,
} from './hitexdata';

export default function HitexPage({ activeSlug = null }) {
  return (
    <>
      <JsonLd schema={hitexSchema} />
      <TopBar />
      <Header />
      <SectionScrollController activeSlug={activeSlug} />

      <main>
        {/* 1. Cloud Header matching WhyUs & Corporate Childcare style */}
        <CloudHeader
          image="/images/hitex/HITEX_1.png"
          imageClass="object-cover object-center"
          heightClass="w-full aspect-[2172/724] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] max-h-[650px]"
        >
          <WatchCentreButton video={centreVideos[0]} />
        </CloudHeader>
        <div data-nav-sentinel />

        {/* 2. Section Header */}
        <SectionHeader
          title="MY SCHOOL ITALY — HITEX"
          subtitle={null}
          description="We Begin By Understanding The Child."
          descriptionClassName="text-xl md:text-2xl font-normal"
        />

        {/* 3. Story Section — Programs & Continuity */}
        <div id="programs" className="scroll-mt-24">
          <StorySection
            containerClass="max-w-[1240px] mx-auto"
            imageWrapperClass="overflow-hidden rounded-2xl shadow-2xl border border-gray-100"
            imageClass="w-full h-auto object-cover scale-115 transform hover:scale-125 transition-transform duration-500"
            imageSrc="/images/hitex/Hitex_3.png"
            imageAlt="Children playing and learning at My School ITALY HITEX"
            eyebrow="A Complete Day For A Growing Child."
            title="PROGRAMS DESIGNED AROUND YOUR CHILD'S DAY"
            readMoreHref="/programs"
            p1="At My School ITALY HITEX, learning and care come together under one roof. From a baby’s first experience away from home to the growing independence of Kindergarten, families can choose programs that evolve with their child."
            p2={
              <div className="space-y-3 mt-4 text-msi-purple">
                <p>
                  <strong className="text-msi-orange font-bold">Early Years:</strong>{' '}
                  Baby Crèche (From 45 Days) • Ciao Baby • Toddler • Pre-Nursery • Nursery • K1 • K2
                </p>
                <p>
                  <strong className="text-msi-orange font-bold">Care:</strong>{' '}
                  Daycare • Extended Daycare • Early Drop-Off • Late Pick-Up • Saturday & Holiday Care
                </p>
                <p>
                  <strong className="text-msi-orange font-bold">Beyond the Classroom:</strong>{' '}
                  Gymnastics • Neurobics • Robotics • Dance • Storytelling • Creative Arts • Holiday & Summer Programs
                </p>
                <p className="mt-4">
                  The result is continuity — <strong className="font-bold tracking-wide">one familiar environment for learning, care, development and enrichment.</strong>
                </p>
              </div>
            }
            drawerTitle="HITEX PROGRAMS & CONTINUITY"
            drawerBody={hitexProgramsDrawer}
          />
        </div>

        {/* 4. NepHero — Why Us ("Why Families Choose MSI HITEX?") */}
        <div id="why-us" className="scroll-mt-24">
          <NepHero
            eyebrow="We Begin By Understanding The Child."
            title="WHY FAMILIES CHOOSE MSI HITEX?"
            titleColor="text-msi-yellow"
            subtitle="BECAUSE EVERY CHILD DESERVES TO BE KNOWN BEFORE THEY ARE TAUGHT."
            description="No two children arrive with the same temperament, confidence, curiosity, interests or way of learning. At MSI HITEX, we begin by observing and understanding the child — not by expecting every child to fit the same mould. Our European early-years foundations come together with neuroscience-informed practice, original story-based learning, caring teachers, nutritious meals and attention to both physical and emotional safety."
            bgImage="/images/hitex/Hitex_2.png"
            bgPosition="bg-cover bg-center"
            sectionClass="w-full aspect-[2172/724] max-h-[650px] py-8 md:py-12"
            readMoreHref="/why-msi"
            cardClass="my-auto"
          />
        </div>

        {/* 5. Design Philosophy — The NeuroPi Way™ & Parent Journey */}
        <DesignPhilosophy
          topId="neuropi-way"
          bottomId="parents-journey"
          image="/images/hitex/Hitex_4.png"
          eyebrow="Start With The Child • The NeuroPi Way™"
          title={
            <>
              WE DON'T BEGIN WITH THE LESSON.<br />
              WE BEGIN WITH THE CHILD.
            </>
          }
          titleClass="text-msi-orange font-linotte font-bold text-2xl md:text-3xl leading-tight uppercase mb-3"
          p1="Traditional teaching often begins by asking: 'What should we teach today?' The NeuroPi Way™ begins one step earlier: 'Who is the child we are teaching?'"
          p2="OBSERVE → UNDERSTAND → PERSONALISE → ENGAGE → TRACK"
          p3={
            <span className="block text-msi-yellow font-bold mt-3 leading-relaxed tracking-wide">
              The NeuroPi Way™ is My School ITALY's neuroscience-informed early childhood pedagogy that helps educators understand the child behind the learning — observing how each child engages and develops, and using that understanding to personalise what happens next.
            </span>
          }
          readMoreText="Know More"
          readMoreClassName="tracking-wider"
          readMoreHref="/neuropi-way"
          bottomEyebrow={null}
          bottomTitle={null}
          bottomP1={null}
          bottomP2={null}
          bottomP3={null}
        />

        {/* One Journey Many Possibilities & Parent Journey */}
        <OneJourneySection
          imageSrc="/images/hitex/Hitex_5.png"
          bgImageSrc="/images/hitex/Hitex_5.png"
          imageAspect="aspect-[941/1672] max-h-[550px] mx-auto"
          imageAlt="Parents joining their child's journey at My School ITALY HITEX"
          eyebrow={"You Are Not Dropping Your Child At School.\nYou Are Joining Their Journey."}
          eyebrowClass="text-[#369bd0] italic text-base md:text-lg font-linotte mb-1"
          title="YOU ARE PART OF THE JOURNEY"
          titleColor="text-msi-orange font-linotte font-bold text-2xl md:text-3xl uppercase mb-4"
          footerText={null}
          showReadMore={true}
          readMoreText="Explore As A Parent"
          readMoreBgColor="bg-msi-green hover:bg-msi-green/90"
          readMoreHref="/parents"
        >
          <div className="space-y-4 text-msi-purple text-sm sm:text-base leading-relaxed">
            <p>
              Starting preschool or daycare is a milestone for the whole family. At MSI HITEX, we want you to know more than what your child &apos;did&apos; today. We want you to understand how they are settling in, participating, eating, resting, making friends, exploring, communicating and growing.
            </p>
            <p>
              From your first school visit to everyday communication, we work to create a relationship that feels open, connected and reassuring. Because the people who understand a young child best should never feel like two separate teams.
            </p>
            <p className="font-bold text-msi-purple">
              HOME + SCHOOL = ONE CHILD, ONE CONNECTED JOURNEY.<br />
              <span className="font-normal text-msi-blue uppercase italic">YOU KNOW YOUR CHILD. WE GET TO KNOW YOUR CHILD TOO. TOGETHER, WE SUPPORT THE JOURNEY.</span>
            </p>
          </div>
        </OneJourneySection>

        {/* Dual Feature Section — Corporate Childcare */}
        <DualFeatureSection
          sectionTitle="CORPORATE CHILDCARE"
          leftImage="/images/hitex/Hitex_6.png"
          leftImageAlt="Where Work and Family Come Closer - MSI HITEX"
          leftAspect="aspect-[1672/941]"
          leftTitle="Where Work and Family Come Closer."
          leftParagraphs={[
            "For a working parent, distance is not measured only in kilometres.",
            "It is measured in the time between an office and a child.",
            "MSI HITEX gives companies in and around the HITEX–HiTech City corridor an opportunity to connect employees with professional childcare closer to where they work."
          ]}
          leftReadMoreText="ASK FOR CORPORATE CHILDCARE PROPOSAL"
          leftReadMoreHref="/corporatechildcare#corporate-proposal"
          leftButtonClassName="text-center"
          rightEyebrow="Mummy Or Daddy Isn't Quite So Far Away."
          rightTitle="WHEN CHILDCARE IS CLOSER, THE WORKING DAY CAN FEEL DIFFERENT."
          rightParagraphs={[
            "Through Corporate Preferred Access, Subsidy Programs, Reserved Seats and Extended-Hours Childcare, employers can support parents without necessarily building and operating their own crèche.",
            "For employees, it can mean less uncertainty around childcare.",
            "For employers, it can mean a more family-supportive workplace."
          ]}
          rightImage="/images/hitex/Hitex_7.png"
          rightImageAlt="Corporate Childcare Solutions - MSI HITEX"
          rightAspect="aspect-[1672/941]"
          rightReadMoreHref="/corporatechildcare"
          rightButtonBgColor="bg-msi-green hover:bg-msi-green/90"
          leftId="childs-progress"
          rightId="home-learning"
        />

        {/* 6. Video Showcase & Gallery */}
        <div id="our-centres" className="scroll-mt-24">
          <VideoShowcase title="OUR CENTRES" videosList={centreVideos} showVideoTitle={true} aspect="landscape" />
        </div>
        {/* Grid Gallery */}
        <GridGallery />
        <GalleryStrip images={hitexGalleryImages} />

        {/* 7. Campus Location Module */}
        <CampusLocationModule />
      </main>

      {/* 8. Contact Form & Footer */}
      <div id="enroll-hitex">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI HITEX" buttonText="BOOK A TOUR AT MSI HITEX" />
      </div>
      <Footer />
    </>
  );
}
