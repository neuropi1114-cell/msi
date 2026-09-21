import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';
import Feedback from '../../components/home/Feedback';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import NepHero from '../../components/nep/NepHero';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import MissionCounters from '../../components/nep/MissionCounters';
import GalleryStrip from '../../components/nep/GalleryStrip';
import DualFeatureSection from '../../components/common/DualFeatureSection';
import NepNews from '../../components/nep/NepNews';
import AboutActivities from '../../components/about/AboutActivities';
import VideoShowcase from '../../components/home/VideoShowcase';
import EarlyLearningSection from '../../components/common/EarlyLearningSection';
import SensoryCardsSection from '../../components/common/SensoryCardsSection';

import {
  metadata,
  neuroscientificVideos,
  nepHeroDrawerBody,
  nepHeroLearningDrawerBody,
  neuropiDrawerBody,
  fivePillarsDrawerBody,
  k1DrawerBody,
  k2DrawerBody,
  daycareDrawerBody,
  twentyFourHourCareDrawerBody,
  earlyLearningDrawerBody,
  neuroPiSensoryCards,
} from './theneuropiwaydata';

export { metadata };

export default function EducationalProjectPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <CloudHeader image="/images/nep/The_NeuroPi_Way_1.png" />
        <div data-nav-sentinel />

        <SectionHeader
          title="CHILDHOOD ISN’T THE COUNTDOWN."
          subtitle="It’s The Foundation."
          description="Rooted in neuroscience, our philosophy understands how every experience — from play to emotion — shapes a child’s developing brain."
        />
        <DesignPhilosophy
          image="/images/nep/The_NeuroPi_Way_2.png"
          imageClass="object-contain"
          imageAspect="aspect-[4/5]"
          eyebrow="Better Understanding Around The Child."
          title="THE NEUROPI WAY"
          p1="The NeuroPi Approach is where the science of the brain meets the art of nurturing."
          p2=""
          drawerTitle="Better Understanding Around The Child."
          drawerEyebrow="NOT MORE TECHNOLOGY AROUND THE CHILD."
          drawerBody={neuropiDrawerBody}
          bottomEyebrow="Focus On Whole Child Growth."
          bottomTitle="FIVE PILLARS"
          bottomP1="Every child’s brain is a world of wonder. Here, we blend neuroscience, play, and empathy to nurture calm, confident, and connected learners."
          bottomP2=""
          bottomDrawerTitle="Focus On Whole Child Growth."
          bottomDrawerEyebrow="FIVE PILLARS"
          bottomDrawerBody={fivePillarsDrawerBody}
        />
        <NepHero
          bgImage="/images/nep/The_NeuroPi_Way_3.png"
          eyebrow="Where Little Minds Grow With Science & Soul."
          title="LEARNING THE NEUROPI WAY"
          titleColor="text-msi-yellow font-bold text-2xl md:text-3xl mb-3"
          description="Every NeuroPi classroom is a living lab of growth — where teachers guide with compassion, and children learn through wonder."
          readMoreDrawerTitle="LEARNING THE NEUROPI WAY"
          readMoreDrawerBody={nepHeroLearningDrawerBody}
        />
        <DualFeatureSection
          sectionTitle="REIMAGINING THE LEARNING THROUGH NEUROPI"
          leftImage="/images/nep/The_NeuroPi_Way_4.png"
          leftAspect="aspect-[16/9]"
          rightImage="/images/nep/The_NeuroPi_Way_5.jpeg"
          rightAspect="aspect-[16/9]"
          leftTitle={
            <span className="italic text-msi-yellow">
              Heartful Classrooms
              <br />
              Mindfulness &amp; Emotional Bonding for Calm, Connected, Confident Children.
            </span>
          }
          leftSubtitle={null}
          leftParagraphs={[]}
          showLeftReadMore={false}
          leftDrawerBody={null}
          rightEyebrow={
            <span className="italic">
              Move &amp; Grow
              <br />
              Kinesthetic And Motor Based Learning For Enhanced Coordination &amp; Attention
            </span>
          }
          rightTitle={null}
          rightTitleColor="text-msi-orange"
          rightParagraphs={[]}
          showRightReadMore={false}
          rightDrawerBody={null}
        />
        <DesignPhilosophy
          topBgClass="bg-msi-green"
          image="/images/nep/The_NeuroPi_Way_6.png"
          imageAspect="aspect-[4/3]"
          imageClass="object-cover"
          eyebrow={
            <div className="space-y-4">
              <div>

                NeuroSmart Learning
                <span>
                  Evidence-Based, Brain-Friendly Curriculum for Strengthening Cognitive Networks.
                </span>
              </div>
              <div>

                Creative Expression Labs
                <span>
                  Music, Art, Storytelling, and Sensory Play for Boosting Imagination &amp; Language.
                </span>
              </div>
            </div>
          }
          eyebrowClass="text-msi-purple font-medium"
          title={null}
          p1={null}
          p2={null}
          showSettlingInMore={false}
          drawerBody={null}
          bottomEyebrow={null}
          bottomTitle={null}
          bottomP1={null}
          bottomP2={null}
          bottomP3={null}
          bottomDrawerBody={null}
        />

        <AboutActivities
          title="WHAT IS NEUROPI?"
          subtitle="Understanding The Child Behind The Learning"
          description="NeuroPi is a human-development platform and neuroscience-informed educational approach designed to help educators and families better understand how a child learns, engages and develops over time. Instead of looking only at academic outcomes, NeuroPi encourages us to notice"
        />
        <VideoShowcase
          title="NEUROSCIENCE INFORMED PEDAGOGY"
          titleColor="text-msi-orange"
          videoTitleColor="text-msi-blue"
          videosList={neuroscientificVideos}
          showCarousel={false}
        />
        <NepHero
          bgImage="/images/nep/The_NeuroPi_Way_9.png"
          flipBg={true}
          eyebrow="One Child Lives In Two Important Worlds"
          title="NEUROPI CONNECT — SCHOOL + HOME"
          titleColor="text-msi-yellow font-bold text-2xl md:text-3xl mb-3"
          description={
            <span>
              Teachers know the child they see at school.
              <br />
              Parents know the child they see at home.
              <br />
              Both perspectives matter.
            </span>
          }
          readMoreDrawerTitle="NEUROPI CONNECT — SCHOOL + HOME"
          readMoreDrawerBody={nepHeroDrawerBody}
        />

        <EarlyLearningSection
          title="Where Neuroscience-Informed Philosophy Becomes Daily Classroom Practice"
          subtitle="THE NEUROPI CLASSROOM METHOD"
          p1={
            <span>
              A philosophy becomes meaningful only when a teacher can use it.
              <br />
              The NeuroPi Classroom Method provides MSI educators with a consistent approach for turning observation into better classroom experiences.
            </span>
          }
          p2={null}
          bgImage="/images/nep/The_NeuroPi_Way_x.png"
          showReadMore={true}
          readMoreDrawerTitle="THE NEUROPI CLASSROOM METHOD"
          readMoreDrawerBody={earlyLearningDrawerBody}
        />

        <SensoryCardsSection cards={neuroPiSensoryCards} />

        <MissionCounters />
        <GalleryStrip />

        <Feedback
          eyebrow="Every Family Has An MSI Story"
          title="PARENT STORIES & TESTIMONIALS"
          description={[
            'The most meaningful description of a school often comes from the families who experience it every day.',
            'Hear MSI parents talk about:',
          ]}
        />

        <NepNews />
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
