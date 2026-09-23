import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/common/ContactUs';
import CloudHeader from '../../components/layout/CloudHeader';

import SectionHeader from '../../components/common/SectionHeader';
import StorySection from '../../components/common/StorySection';
import EarlyLearningSection from '../../components/common/EarlyLearningSection';
import SensoryCardsSection from '../../components/common/SensoryCardsSection';
import NepHero from '../../components/nep/NepHero';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import DualFeatureSection from '../../components/common/DualFeatureSection';
import HomeNeuroPiApproach from '../../components/home/NeuroPiApproach';
import CreativeLearning from '../../components/parents/CreativeLearning';
import VideoShowcase from '../../components/home/VideoShowcase';
import GalleryStrip from '../../components/common/GalleryStrip';

import {
  metadata,
  centreVideos,
  storyDrawerBody,
  philosophyDrawerBody,
  europeanApproachDrawerBody,
  learningEnvironmentDrawerBody,
  booksStoriesDrawerBody,
  teachersDrawerBody,
  whyChooseUsParagraphs,
  whyChooseUsFooter,
} from './whyusdata';

export { metadata };

export default function WhyUsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <CloudHeader
          image="/images/whyus/hero_playroom.png"
          imageClass="object-cover object-top"
          heightClass="w-full aspect-[2048/768] min-h-[250px] max-h-[600px]"
        />
        <div data-nav-sentinel />

        <SectionHeader
          title="WHY MY SCHOOL ITALY?"
          subtitle="Why Should I Trust And Choose My School ITALY"
          description="Because Childhood Deserves to be understood, not hurried."
        />
        <StorySection
          eyebrow="From European Early Education To A New Understanding Of Childhood."
          title="OUR STORY"
          p1="My School ITALY began with a simple belief: early childhood education should respect the individuality of every child."
          p2="Over the years, that belief has grown into an integrated preschool, crèche and daycare ecosystem where learning, care, development and family partnership come together."
          drawerTitle="OUR STORY"
          drawerBody={storyDrawerBody}
        />
        <NepHero
          eyebrow="Childhood Is Not Preparation for Life. Childhood Is Life."
          title="OUR PHILOSOPHY"
          titleColor="text-msi-yellow"
          description="We do not believe every child should develop in exactly the same way or at exactly the same pace. We meet the child where they are — and help them grow from there."
          bgImage="/images/whyus/Why_MSI_3.png"
          readMoreDrawerTitle="OUR PHILOSOPHY"
          readMoreDrawerBody={philosophyDrawerBody}
          cardClass="mt-24 md:mt-20 lg:mt-64"
        />
        <DesignPhilosophy
          image="/images/whyus/Why_MSI_4.png"
          eyebrow="Less Pressure. More Purposeful Learning."
          title="THE EUROPEAN EARLY YEARS APPROACH"
          p1="For a young child, beginning preschool or daycare can mean a new environment, new adults, new children and a completely new routine."
          p2="We do not expect every child to settle in the same way."
          p3="Curiosity is encouraged. Learning connects naturally across language, mathematics, science, creativity and the world around us."
          drawerTitle="THE EUROPEAN EARLY YEARS APPROACH"
          drawerEyebrow="Less Pressure. More Purposeful Learning."
          drawerBody={europeanApproachDrawerBody}
          bottomEyebrow="Designed for Growing Minds"
          bottomTitle="OUR LEARNING ENVIRONMENT"
          bottomP1="It's designed to be welcoming, organised, stimulating and child-friendly, with spaces for active learning as well as quieter moments."
          bottomP2=""
          bottomDrawerTitle="OUR LEARNING ENVIRONMENT"
          bottomDrawerEyebrow="Designed for Growing Minds"
          bottomDrawerBody={learningEnvironmentDrawerBody}
        />
        <DualFeatureSection
          sectionTitle="EXPLORE CORPORATE CHILDCARE"
          leftTitle={<span className="italic">Where A Story Becomes A World Of Learning</span>}
          leftSubtitle="OUR BOOKS & STORIES"
          leftSubtitleColor="text-msi-yellow"
          leftParagraphs={[
            "Stories are at the heart of My School ITALY. Our original books and learning materials take children into worlds of animals, nature, people, places and discovery — while naturally connecting learning across subjects.",
          ]}
          leftDrawerTitle="OUR BOOKS & STORIES"
          leftDrawerEyebrow={<span className="italic">Where A Story Becomes A World Of Learning</span>}
          leftDrawerBody={booksStoriesDrawerBody}
          rightEyebrow={<span className="italic">The Most Important Technology In A Classroom Is Still A Caring Adult.</span>}
          rightTitle="OUR TEACHERS"
          rightTitleColor="text-msi-orange"
          rightParagraphs={[
            "MSI educators receive continuous development in our classroom approach, child observation, communication, engagement and emotional wellbeing.",
          ]}
          rightDrawerTitle="OUR TEACHERS"
          rightDrawerEyebrow={<span className="italic">The Most Important Technology In A Classroom Is Still A Caring Adult.</span>}
          rightDrawerBody={teachersDrawerBody}
          rightButtonBgColor="bg-msi-blue hover:bg-msi-blue/90"
          rightImage="/images/whyus/Why_MSI_6.png"
          leftImage="/images/whyus/Why_MSI_5.png"
        />
        <HomeNeuroPiApproach />

        <EarlyLearningSection
          title="A Remarkable Window Of Development"
          subtitle="WHY THE FIRST 2,000 DAYS MATTER"
          p1="The period from pregnancy through roughly the first five years is a foundational stage for brain development, relationships, language, movement, emotional regulation and learning."
          p2={null}
          bgImage="/images/nep/early_learning_bg.png"
        />
        <SensoryCardsSection />

        <CreativeLearning
          title="WHY FAMILIES CHOOSE MSI"
          paragraphs={whyChooseUsParagraphs}
          footerContent={whyChooseUsFooter}
        />
        <VideoShowcase title="OUR CENTRES" videosList={centreVideos} showVideoTitle={true} aspect="landscape" />
        <GalleryStrip />
      </main>
      <ContactUs image="/images/whyus/Why_MSI_Enrol.png" />
      <Footer />
    </>
  );
}
