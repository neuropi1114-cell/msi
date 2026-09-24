import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/common/ContactUs';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import NepHero from '../../components/nep/NepHero';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import MissionCounters from '../../components/common/MissionCounters';
import GalleryStrip from '../../components/common/GalleryStrip';
import DualFeatureSection from '../../components/common/DualFeatureSection';
import AboutActivities from '../../components/about/AboutActivities';
import VideoShowcase from '../../components/home/VideoShowcase';
import EarlyLearningSection from '../../components/common/EarlyLearningSection';
import SensoryCardsSection from '../../components/common/SensoryCardsSection';
import OneJourneySection from '../../components/programs/OneJourneySection';

import SectionScrollController from '../../components/common/SectionScrollController';

import {
  metadata,
  neuroscientificVideos,
  nepHeroDrawerBody,
  nepHeroLearningDrawerBody,
  neuropiDrawerBody,
  fivePillarsDrawerBody,
  earlyLearningDrawerBody,
  neuroPiSensoryCards,
  neuropiLearningCycleDrawerBody,
  teacherDevelopmentDrawerBody,
  neuroPiWayGalleryImages,
} from './theneuropiwaydata';

export { metadata };

export default function EducationalProjectPage({ activeSlug = null }) {
  return (
    <>
      <TopBar />
      <Header />
      <SectionScrollController activeSlug={activeSlug} />
      <main>
        <CloudHeader
          image="/images/nep/The_NeuroPi_Way_1.png"
          imageClass="object-cover object-center"
          heightClass="w-full aspect-[1672/941] min-h-[350px] md:min-h-[550px] max-h-[850px]"
        />
        <div data-nav-sentinel />

        <SectionHeader
          title="CHILDHOOD ISN’T THE COUNTDOWN."
          subtitle="It’s The Foundation."
          description="Rooted in neuroscience, our philosophy understands how every experience — from play to emotion — shapes a child’s developing brain."
        />
        <DesignPhilosophy
          bottomId="five-pillars"
          image="/images/nep/The_NeuroPi_Way_2.png"
          imageClass="object-contain"
          imageAspect="aspect-[4/5]"
          eyebrow="Better Understanding Around The Child."
          title="THE NEUROPI WAY"
          p1="The NeuroPi Approach is where the science of the brain meets the art of nurturing."
          drawerTitle="Better Understanding Around The Child."
          drawerEyebrow="NOT MORE TECHNOLOGY AROUND THE CHILD."
          drawerBody={neuropiDrawerBody}
          bottomEyebrow="Focus On Whole Child Growth."
          bottomTitle="FIVE PILLARS"
          bottomP1="Every child’s brain is a world of wonder. Here, we blend neuroscience, play, and empathy to nurture calm, confident, and connected learners."
          bottomDrawerTitle="Focus On Whole Child Growth."
          bottomDrawerEyebrow="FIVE PILLARS"
          bottomDrawerBody={fivePillarsDrawerBody}
        />

        <div id="learning-neuropi-way" className="scroll-mt-24">
          <NepHero
            bgImage="/images/nep/The_NeuroPi_Way_3_v2.png"
            eyebrow="Where Little Minds Grow With Science & Soul."
            title="LEARNING THE NEUROPI WAY"
            titleColor="text-msi-yellow font-bold text-2xl md:text-3xl mb-3"
            description="Every NeuroPi classroom is a living lab of growth — where teachers guide with compassion, and children learn through wonder."
            readMoreDrawerTitle="LEARNING THE NEUROPI WAY"
            readMoreDrawerBody={nepHeroLearningDrawerBody}
          />
        </div>
        <div id="reimagining-learning" className="scroll-mt-24">
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
            showLeftReadMore={false}
            rightEyebrow={
              <span className="italic">
                Move &amp; Grow
                <br />
                Kinesthetic And Motor Based Learning For Enhanced Coordination &amp; Attention
              </span>
            }
            rightTitleColor="text-msi-orange"
            showRightReadMore={false}
          />
        </div>
        <DesignPhilosophy
          topBgClass="bg-msi-green"
          image="/images/nep/The_NeuroPi_Way_6.png"
          imageAspect="aspect-[4/3]"
          imageClass="object-cover"
          title={null}
          p1={null}
          p2={null}
          bottomEyebrow={null}
          bottomTitle={null}
          bottomP1={null}
          bottomP2={null}
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
          showSettlingInMore={false}
        />

        <div id="what-is-neuropi" className="scroll-mt-24">
          <AboutActivities
            title="WHAT IS NEUROPI?"
            subtitle="Understanding The Child Behind The Learning"
            description="NeuroPi is a human-development platform and neuroscience-informed educational approach designed to help educators and families better understand how a child learns, engages and develops over time. Instead of looking only at academic outcomes, NeuroPi encourages us to notice"
          />
        </div>
        <VideoShowcase
          title="NEUROSCIENCE INFORMED PEDAGOGY"
          titleColor="text-msi-orange"
          videoTitleColor="text-msi-blue"
          videosList={neuroscientificVideos}
          showCarousel={false}
          aspect="landscape"
        />
        <div id="neuropi-connect" className="scroll-mt-24">
          <NepHero
            bgImage="/images/nep/The_NeuroPi_Way_8_v2.png"
            flipBg={false}
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
        </div>
        <div id="learning-cycle" className="scroll-mt-24">
          <DesignPhilosophy
            topBgClass="bg-msi-yellow"
            image="/images/nep/The_NeuroPi_Way_13.png"
            imageClass="object-contain"
            imageAspect="aspect-[16/9]"
            eyebrow="The NeuroPi Learning Cycle"
            eyebrowClass="text-msi-purple font-bold"
            title="OBSERVE → UNDERSTAND → PERSONALISE → ENGAGE → TRACK"
            titleClass="text-msi-cream font-extrabold"
            p1="The NeuroPi Way follows a continuous cycle. Because children keep changing. Our understanding of them should keep changing too."
            p1Class="text-msi-purple-deep font-semibold"
            drawerTitle="The NeuroPi Learning Cycle"
            drawerEyebrow="OBSERVE → UNDERSTAND → PERSONALISE → ENGAGE → TRACK"
            drawerBody={neuropiLearningCycleDrawerBody}
          />
        </div>

        <div id="classroom-method" className="scroll-mt-24">
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
            bgImage="/images/nep/The_NeuroPi_Way_13_v2.png"
            showReadMore={true}
            readMoreDrawerTitle="THE NEUROPI CLASSROOM METHOD"
            readMoreDrawerBody={earlyLearningDrawerBody}
          />
        </div>

        <div id="rise" className="scroll-mt-24">
          <SensoryCardsSection cards={neuroPiSensoryCards} />
        </div>
        <div id="teacher-development" className="scroll-mt-24">
          <OneJourneySection
            eyebrow="To Understand Children Better, We Must Keep Developing the Adults Around Them."
            title="NEUROPI TEACHER DEVELOPMENT"
            titleColor="text-msi-orange"
            footerText={null}
            videoUrl="https://vimeo.com/1228813425"
            readMoreDrawerTitle="NEUROPI TEACHER DEVELOPMENT"
            readMoreDrawerBody={teacherDevelopmentDrawerBody}
          >
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              The NeuroPi Way depends on the teacher.
              <br />
              That is why teacher development is not treated as a one-time induction program.
              <br />
              MSI educators continue developing their understanding.
            </p>
          </OneJourneySection>
        </div>
        <MissionCounters />
        <GalleryStrip images={neuroPiWayGalleryImages} />
      </main>
      <ContactUs image="/images/nep/The_NeuroPi_Way_Enrol.png" title="BOOK YOUR TOUR" buttonText="BOOK YOUR TOUR" />
      <Footer />
    </>
  );
}
