import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/common/ContactUs';
import CloudHeader from '../../components/layout/CloudHeader';

import SectionHeader from '../../components/common/SectionHeader';
import StorySection from '../../components/common/StorySection';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import DualFeatureSection from '../../components/common/DualFeatureSection';
import FaqSection from '../../components/common/FaqSection';
import VideoCarousel from '../../components/home/VideoCarousel';
import Feedback from '../../components/home/Feedback';
import CreativeLearning from '../../components/parents/CreativeLearning';
import MissionCounters from '../../components/nep/MissionCounters';
import GalleryStrip from '../../components/common/GalleryStrip';

import SectionScrollController from '../../components/common/SectionScrollController';

import { buildPageMetadata } from '../../utils/seo';

export const metadata = buildPageMetadata('/parents/');

export default function ParentsPage({ activeSlug = null }) {
  return (
    <>
      <TopBar />
      <Header />
      <SectionScrollController activeSlug={activeSlug} />
      <main>
        <CloudHeader
          image="/images/parents/hero_mangalyam.jpeg"
          imageClass="object-cover object-[center_10%]"
          heightClass="w-full aspect-[3420/2110] min-h-[300px] max-h-[700px]"
        />
        <div data-nav-sentinel />

        <SectionHeader />
        <div id="your-journey" className="scroll-mt-24">
          <StorySection />
        </div>
        <div id="starting-school" className="scroll-mt-24">
          <DesignPhilosophy bottomId="childs-day" />
        </div>
        <DualFeatureSection leftId="childs-progress" rightId="home-learning" />
        <div id="faq" className="scroll-mt-24">
          <FaqSection />
        </div>
        <div id="testimonials" className="scroll-mt-24">
          <VideoCarousel
            eyebrow="Every Family Has An MSI Story"
            title="PARENT STORIES & TESTIMONIALS"
          />
        </div>
        <Feedback eyebrow="" title="" />

        <CreativeLearning />
        <MissionCounters />
        <GalleryStrip />
      </main>
      <ContactUs image="/images/parents/Parents_Enrol.png" />
      <Footer />
    </>
  );
}
