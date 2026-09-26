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
import { centreVideos } from '../whyus/whyusdata';

export const metadata = buildPageMetadata('/qcity/');

const qcitySchema = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'My School ITALY — The Square Campus',
  description: 'Neuroscience-informed preschool, baby crèche, daycare, and corporate childcare in The Square Tech Park, Gachibowli, Hyderabad.',
  url: 'https://www.myschoolitaly.com/qcity/',
  telephone: '+917093904680',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'The Square Tech Park, Financial District, Nanakramguda',
    addressLocality: 'Hyderabad',
    postalCode: '500032',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '17.427205',
    longitude: '78.328553',
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
  qcityProgramsDrawer,
  qcityWhyUsDrawer,
  qcityNeuroPiDrawer,
  qcityParentsDrawer,
  qcityCorporateDrawer,
  qcityGalleryImages,
} from './qcitydata';

export default function QCityPage({ activeSlug = null }) {
  // Q-City video: id 3 in centreVideos
  const qcityVideo = centreVideos[2] || centreVideos[0];

  return (
    <>
      <JsonLd schema={qcitySchema} />
      <TopBar />
      <Header />
      <SectionScrollController activeSlug={activeSlug} />

      <main>
        {/* 1. Cloud Header matching Hitex, WhyUs & Corporate Childcare style */}
        <CloudHeader
          image="/images/qcity/The_Square_1.png"
          imageClass="object-cover object-center"
          heightClass="w-full aspect-[2172/724] min-h-[220px] sm:min-h-[320px] md:min-h-[420px] max-h-[650px]"
        >
          <WatchCentreButton video={qcityVideo} />
        </CloudHeader>
        <div data-nav-sentinel />

        {/* 2. Section Header */}
        <SectionHeader
          title="MY SCHOOL ITALY — THE SQUARE"
          subtitle={null}
          description="Beginning With Trust."
          descriptionClassName="text-xl md:text-2xl font-normal"
        />

        {/* 3. Story Section — Programs & Continuity ("One Place As Your Child Grows") */}
        <div id="programs" className="scroll-mt-24">
          <StorySection
            containerClass="max-w-[1240px] mx-auto"
            imageWrapperClass="overflow-hidden rounded-2xl shadow-2xl border border-gray-100"
            imageClass="w-full h-auto object-cover scale-115 transform hover:scale-125 transition-transform duration-500"
            imageSrc="/images/qcity/The_Square_2.png"
            imageAlt="Children playing and learning at My School ITALY The Square"
            eyebrow="One Place As Your Child Grows"
            title="FROM FIRST SEPARATIONS TO FIRST INDEPENDENCE"
            readMoreHref="/programs"
            p1="A child’s needs at six months are very different from their needs at five years. Our programs are designed to grow with them."
            p2={
              <div className="space-y-3 mt-4 text-msi-purple">
                <p className="font-bold text-msi-orange tracking-wide">
                  Baby Crèche &rarr; Toddler/Playgroup &rarr; Nursery &rarr; K1 &rarr; K2
                </p>
                <p>
                  And when the school day ends, care does not necessarily have to. Daycare, Extended Care, Early Drop-Off, Late Pick-Up, Saturday and Holiday Care give families flexibility, while Gymnastics, Neurobics, Robotics, Dance, Storytelling and Creative Arts add new dimensions to the child’s day.
                </p>
                <p className="mt-4 text-msi-purple">
                  At MSI The Square, <strong className="font-bold">children don’t have to keep changing environments as they grow.</strong>
                </p>
              </div>
            }
            drawerTitle="THE SQUARE PROGRAMS & CONTINUITY"
            drawerBody={qcityProgramsDrawer}
          />
        </div>

        {/* 4. NepHero — Why Us ("Development, Not Just Academics") */}
        <div id="why-us" className="scroll-mt-24">
          <NepHero
            eyebrow="Development, Not Just Academics."
            title={
              <>
                WHY FAMILIES CHOOSE<br />
                MSI THE SQUARE?
              </>
            }
            titleColor="text-msi-yellow"
            subtitle="BECAUSE THE MOST IMPORTANT THINGS A YOUNG CHILD IS LEARNING MAY NOT FIT ON A WORKSHEET."
            description={
              <div className="space-y-2.5 text-white/95 text-xs sm:text-sm leading-relaxed">
                <p className="font-bold text-white text-xs sm:text-sm">
                  Confidence. Curiosity. Communication. Independence. Resilience. Friendship. Emotional security. <span className="italic text-amber-200 font-medium">These matter too.</span>
                </p>
                <p>
                  At MSI The Square, academics form part of a much bigger developmental picture. Our children encounter language, mathematics, science and the world around them through stories, conversations, play, movement, exploration and carefully designed experiences.
                </p>
                <p className="font-bold text-msi-yellow pt-0.5">
                  Early education should develop the learner — not simply complete the lesson.
                </p>
              </div>
            }
            bgImage="/images/qcity/The_Square_3.png"
            bgPosition="bg-cover bg-center"
            sectionClass="w-full min-h-[580px] lg:min-h-[660px] py-10 md:py-16"
            readMoreHref="/why-msi"
            readMoreDrawerTitle="WHY FAMILIES CHOOSE MSI THE SQUARE?"
            readMoreDrawerBody={qcityWhyUsDrawer}
            cardClass="my-auto"
          />
        </div>

        {/* 5. Design Philosophy — The NeuroPi Way™ */}
        <DesignPhilosophy
          topId="neuropi-way"
          bottomId="parents-journey"
          image="/images/qcity/The_Square_4.png"
          eyebrow="Observe Before You Assume • The NeuroPi Way™"
          title="THE NEUROPI WAY"
          titleClass="text-msi-orange font-linotte font-bold text-2xl md:text-3xl leading-tight uppercase mb-3"
          p1="BEFORE WE LABEL A BEHAVIOUR, WE TRY TO UNDERSTAND IT."
          p2={
            <div className="space-y-1.5 mt-2 text-msi-cream text-xs sm:text-sm leading-relaxed">
              <p className="text-msi-cream">&bull; A child who doesn't immediately join an activity may need more time to observe.</p>
              <p className="text-msi-cream">&bull; A child who repeatedly asks questions may be exploring deeply.</p>
              <p className="text-msi-cream">&bull; A child who moves constantly may engage more readily through movement.</p>
              <p className="text-msi-cream">&bull; A child who struggles with one experience may flourish when it is presented differently.</p>
            </div>
          }
          p3={
            <div className="space-y-4 mt-5">
              <p className="font-bold text-msi-yellow italic text-xs sm:text-sm leading-relaxed space-y-1">
                <span className="block">We observe to understand.</span>
                <span className="block">We understand to respond.</span>
                <span className="block">We respond to help the child grow.</span>
                <span className="block mt-1.5 font-extrabold text-msi-yellow not-italic">That is NeuroPi in practice.</span>
              </p>
              <span className="block text-msi-yellow font-bold mt-4 pt-3 border-t border-amber-300/30 leading-relaxed tracking-wide text-xs sm:text-sm">
                The NeuroPi Way™ is My School ITALY's neuroscience-informed early childhood pedagogy that helps educators understand the child behind the learning — observing how each child engages and develops, and using that understanding to personalise what happens next.
              </span>
            </div>
          }
          readMoreText="Know More"
          readMoreClassName="tracking-wider"
          readMoreHref="/neuropi-way"
          drawerTitle="THE NEUROPI WAY™ — OBSERVE BEFORE YOU ASSUME"
          drawerBody={qcityNeuroPiDrawer}
          bottomEyebrow={null}
          bottomTitle={null}
          bottomP1={null}
          bottomP2={null}
          bottomP3={null}
        />

        {/* 6. One Journey Many Possibilities & Parent Journey ("Beyond ‘What Did You Learn Today?’") */}
        <OneJourneySection
          imageSrc="/images/qcity/The_Square_7.png"
          bgImageSrc="/images/qcity/The_Square_7.png"
          imageAspect="aspect-[1024/1536] max-h-[550px] mx-auto"
          imageAlt="Parents joining their child's journey at My School ITALY The Square"
          eyebrow="Beyond ‘What Did You Learn Today?’"
          eyebrowClass="text-[#369bd0] italic text-base md:text-lg font-linotte mb-1"
          title="PARENTS"
          titleColor="text-msi-orange font-linotte font-bold text-2xl md:text-3xl uppercase mb-4"
          footerText={null}
          showReadMore={true}
          readMoreText="Explore As A Parent"
          readMoreBgColor="bg-msi-green hover:bg-msi-green/90"
          readMoreHref="/parents"
        >
          <div className="space-y-4 text-msi-purple text-sm sm:text-base leading-relaxed">
            <p className="font-bold text-msi-orange text-base sm:text-lg">
              THERE ARE BETTER QUESTIONS THAN “WHAT DID YOU LEARN TODAY?”
            </p>
            <div className="p-3 bg-blue-50/80 border-l-4 border-msi-blue rounded-r-xl">
              <p className="font-semibold text-msi-blue mb-1 text-xs uppercase tracking-wider">Try asking:</p>
              <p className="italic text-gray-700 text-xs sm:text-sm">
                What made you laugh? What made you curious? Who did you play with? What was difficult? What did you try by yourself? What would you like to do again tomorrow?
              </p>
            </div>
            <p>
              At MSI The Square, conversations about progress can extend beyond letters, numbers and worksheets. We may talk with you about your child&apos;s communication, curiosity, engagement, confidence, independence, relationships and approach to challenge.
            </p>
            <p>
              Because childhood development is much richer than a checklist of academic achievements. We want parents to understand not only what their child knows — but who their child is becoming.
            </p>
            <p className="font-bold text-msi-purple border-t pt-3 border-purple-100 uppercase font-linotte">
              YOU KNOW YOUR CHILD. WE GET TO KNOW YOUR CHILD TOO. TOGETHER, WE SUPPORT THE JOURNEY.
            </p>
          </div>
        </OneJourneySection>

        {/* 7. Dual Feature Section — Corporate Childcare ("A Benefit Employees Can Actually Use") */}
        <DualFeatureSection
          sectionTitle="CORPORATE CHILDCARE"
          leftImage="/images/qcity/The_Square_5.png"
          leftImageAlt="Where Work and Family Come Closer - MSI The Square"
          leftAspect="aspect-[1774/887]"
          leftTitle="THE BEST EMPLOYEE BENEFITS SOLVE REAL-LIFE PROBLEMS."
          leftParagraphs={[
            "Childcare is one of them.",
            "A working parent does not simply need a crèche listed in an employee-benefits document. They need somewhere they can genuinely trust with their child.",
            "MSI The Square enables organisations to offer childcare support through practical models such as:"
          ]}
          leftReadMoreText="ASK FOR CORPORATE CHILDCARE PROPOSAL"
          leftReadMoreHref="/corporatechildcare#corporate-proposal"
          leftButtonClassName="text-center"
          rightEyebrow="A Benefit Employees Can Actually Use."
          rightTitle="BECAUSE A BENEFIT BECOMES MEANINGFUL WHEN IT WORKS IN REAL LIFE."
          rightParagraphs={[
            "Corporate Subsidy • Reserved Seats • Preferred Access • Extended Hours • Near-Workplace Childcare",
            "Employees gain access to an established early-years environment. HR teams gain a structured childcare partner.",
            "And the organisation turns a policy into something a parent can actually use."
          ]}
          rightImage="/images/qcity/The_Square_6.png"
          rightImageAlt="Corporate Childcare Solutions - MSI The Square"
          rightAspect="aspect-[1774/887]"
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
        <GridGallery title="LIFE AT MSI THE SQUARE" />
        <GalleryStrip images={qcityGalleryImages} />

        {/* 7. Campus Location Module */}
        <CampusLocationModule
          eyebrow="Find us in Financial District & Nanakramguda"
          campusName="My School Italy — The Square"
          subtitle={null}
          description="My School ITALY The Square brings MSI’s neuroscience-informed early-years approach closer to families in Nanakramguda, Financial District, Gachibowli, Khajaguda, Puppalaguda, Narsingi, Kokapet and Gopanpally. The centre offers families a convenient early-learning and care option that fits naturally into everyday home-and-work routines."
          address="The Square Tech Park, Wipro Circle Road, Nanakramguda, Financial District, Hyderabad 500032"
          nearby="Nanakramguda • Financial District • Gachibowli • Khajaguda • Puppalaguda • Narsingi • Kokapet"
          landmark="Near Wipro Circle & Financial District Corridor"
          distanceHeading="How Close Is MSI The Square to Your Neighbourhood?"
          distanceBlock={[
            { area: "Nanakramguda", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Financial District", distance: "0.5–2 km", time: "3–8 min" },
            { area: "Gachibowli", distance: "2–4 km", time: "8–15 min" },
            { area: "Khajaguda", distance: "3–5 km", time: "10–18 min" },
            { area: "Puppalaguda", distance: "3–6 km", time: "10–20 min" },
            { area: "Kokapet", distance: "4–7 km", time: "12–22 min" },
          ]}
          googleMapsUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6785965778686!2d78.32855267577976!3d17.427205301655526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930c4010ef93%3A0x13e1808c1f420e4!2sMy%20School%20ITALY%20%7C%20Q-City!5e0!3m2!1sen!2sin!4v1790410256498!5m2!1sen!2sin"
          directionsUrl="https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Q-City"
          contactHref="#enroll-qcity"
          contactText="BOOK A CENTRE TOUR"
        />
      </main>

      {/* 8. Contact Form & Footer */}
      <div id="enroll-qcity">
        <ContactUs image="/images/whyus/Why_MSI_Enrol.png" title="BOOK A TOUR AT MSI THE SQUARE" buttonText="BOOK A TOUR AT MSI THE SQUARE" />
      </div>
      <Footer />
    </>
  );
}
