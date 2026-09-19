import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';
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
import MissionCounters from '../../components/nep/MissionCounters';
import GalleryStrip from '../../components/nep/GalleryStrip';

export const metadata = {
  title: 'Why Choose Us | My School ITALY',
  description: 'Discover why My School ITALY is the premier choice for early childhood education. Neuroscience-backed learning, Italian pedagogy, European safety standards, and complete childcare solutions.',
  alternates: { canonical: '/whyus' },
  openGraph: {
    title: 'Why Choose Us | My School ITALY',
    description: 'Discover why My School ITALY is the premier choice for early childhood education. Neuroscience-backed learning, Italian pedagogy, European safety standards, and complete childcare solutions.',
    url: '/whyus',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose Us | My School ITALY',
    description: 'Discover why My School ITALY is the premier choice for early childhood education. Neuroscience-backed learning, Italian pedagogy, European safety standards, and complete childcare solutions.',
  },
};

const centreVideos = [
  {
    id: 1,
    title: "Hitex - HQ",
    url: "https://www.youtube.com/watch?v=IP8qcrDVeD0",
  },
  {
    id: 2,
    title: "Avance Business Hub",
    url: "https://www.youtube.com/watch?v=uN22Xcwa1Ps",
  },
  {
    id: 3,
    title: "Q-City Tech Park",
    url: "https://vimeo.com/1228236323",
  },
  {
    id: 4,
    title: "Mindspace",
    url: "https://www.youtube.com/watch?v=vCvldPecTG0",
  },
];

export default function WhyUsPage() {
  const storyDrawerBody = (
    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
      <p className="font-bold text-msi-purple text-base">
        From European Early Education To A New Understanding Of Childhood
      </p>
      <p className="font-bold text-msi-orange text-lg">OUR STORY</p>
      <p>
        My School ITALY began with a simple belief: early childhood education should respect the individuality of every child.
      </p>
      <p>
        Over the years, that belief has grown into an integrated preschool, crèche and daycare ecosystem where learning, care, development and family partnership come together.
      </p>
      <p>
        Today, My School ITALY is Powered by NeuroPi, bringing neuroscience-informed thinking into everyday early-years practice.
      </p>
      <div className="pt-4 border-t border-gray-100">
        <h4 className="text-base font-bold text-msi-blue mb-2">
          More Than a Preschool. A Place to Understand Every Child.
        </h4>
        <p className="mb-2">
          The early years shape how a child learns, connects, communicates and experiences the world.
        </p>
        <p>
          At My School ITALY, education and care come together in an environment designed around the developing child — combining European early-years principles, neuroscience-informed practice, meaningful relationships, movement, stories, nutrition and emotional wellbeing.
        </p>
      </div>
      <p className="font-bold text-msi-orange pt-3 text-base text-center border-t border-gray-100">
        Every Child. Every Brain. Every Future
      </p>
    </div>
  );

  const philosophyDrawerBody = (
    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
      <p className="font-bold text-msi-purple text-base">
        Childhood Is Not Preparation for Life. Childhood Is Life.
      </p>
      <p className="font-bold text-msi-orange text-lg">OUR PHILOSOPHY</p>
      <p>
        Children learn when they feel safe enough to explore, curious enough to question and confident enough to try.
      </p>
      <p>
        We therefore create experiences that encourage children to wonder, communicate, move, imagine, experiment, create and discover.
      </p>
      <p>
        We do not believe every child should develop in exactly the same way or at exactly the same pace. We meet the child where they are — and help them grow from there.
      </p>
    </div>
  );

  const europeanApproachDrawerBody = (
    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
      <p className="font-bold text-msi-purple text-base">
        Less Pressure. More Purposeful Learning.
      </p>
      <p className="font-bold text-msi-orange text-lg">
        THE EUROPEAN EARLY YEARS APPROACH
      </p>
      <p>
        Our European-inspired approach respects childhood as a period of exploration and discovery.
      </p>
      <p className="font-bold text-msi-purple">
        Children learn through:
      </p>
      <p className="font-semibold text-msi-orange">
        Play &bull; Stories &bull; Conversation &bull; Nature &bull; Movement &bull; Music &bull; Art &bull; Exploration &bull; Hands-on Experiences
      </p>
      <div className="pt-3 border-t border-gray-100 space-y-2">
        <p>
          Teachers guide rather than dominate. Questions are welcomed. Curiosity is encouraged.
        </p>
        <p>
          Learning connects naturally across language, mathematics, science, creativity and the world around us.
        </p>
      </div>
    </div>
  );

  const learningEnvironmentDrawerBody = (
    <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
      <p className="font-bold text-msi-purple text-base">
        Designed for Growing Minds
      </p>
      <p className="font-bold text-msi-orange text-lg">
        OUR LEARNING ENVIRONMENT
      </p>
      <p>
        A child&apos;s environment influences how they feel, move, interact and learn.
      </p>
      <p>
        MSI environments are designed to be welcoming, organised, stimulating and child-friendly, with spaces for active learning as well as quieter moments.
      </p>
      <p className="font-bold text-msi-purple">
        Children can move between:
      </p>
      <p className="font-semibold text-msi-orange">
        Learning &bull; Reading &bull; Creating &bull; Building &bull; Pretend Play &bull; Movement &bull; Rest &bull; Social Interaction
      </p>
      <div className="pt-3 border-t border-gray-100">
        <p className="font-bold text-msi-blue mb-1">
          The objective is simple:
        </p>
        <p className="font-medium text-gray-800">
          Create an environment in which children feel secure enough to explore and inspired enough to learn.
        </p>
      </div>
    </div>
  );

  const booksStoriesDrawerBody = (
    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
      <p className="font-bold text-msi-purple text-base">
        Where a Story Becomes a World of Learning
      </p>
      <p className="font-bold text-msi-orange text-lg">
        OUR BOOKS &amp; STORIES
      </p>
      <p>
        Stories are at the heart of My School ITALY. Our original books and learning materials take children into worlds of animals, nature, people, places and discovery &mdash; while naturally connecting learning across subjects.
      </p>
      <div className="pt-2">
        <p className="font-bold text-msi-purple mb-1">A story can lead into:</p>
        <p className="font-semibold text-msi-orange">
          Language &rarr; Mathematics &rarr; Science &rarr; Social Understanding &rarr; Creativity &rarr; Movement &rarr; Values
        </p>
      </div>
      <div className="pt-2">
        <p className="font-bold text-msi-purple mb-1">Our learning journey follows a simple rhythm:</p>
        <p className="font-bold text-msi-blue tracking-wide text-xs md:text-sm">
          LISTEN &rarr; WATCH &rarr; CONNECT &rarr; PRACTISE &rarr; MOVE &amp; CREATE &rarr; PERFORM
        </p>
      </div>
      <p className="pt-2 border-t border-gray-100">
        Through stories, we want children not only to remember what they learned, but also to remain curious about the world they are growing into.
      </p>
    </div>
  );

  const teachersDrawerBody = (
    <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
      <p className="font-bold text-msi-purple text-base">
        The Most Important Technology in a Classroom Is Still a Caring Adult.
      </p>
      <p className="font-bold text-msi-orange text-lg">
        OUR TEACHERS
      </p>
      <div className="space-y-2 font-medium text-gray-800">
        <p>Children need teachers who notice.</p>
        <p>Teachers who listen.</p>
        <p>Teachers who observe.</p>
        <p>Teachers who understand when to guide &mdash; and when to allow discovery.</p>
      </div>
      <p className="pt-2 border-t border-gray-100">
        MSI educators receive continuous development in our classroom approach, child observation, communication, engagement and emotional wellbeing.
      </p>
      <div className="pt-2 border-t border-gray-100 space-y-1">
        <p className="font-medium text-gray-700">Because a curriculum can provide direction.</p>
        <p className="font-bold text-msi-purple text-base">A great teacher brings it to life.</p>
      </div>
    </div>
  );

  return (
    <>
      <TopBar />
      <Header />
      <main>
        <CloudHeader image="/images/day-care/hero.jpg" />
        <div data-nav-sentinel />

        <SectionHeader
          title="WHY MY SCHOOL ITALY?"
          subtitle="Why Should I Trust And Choose My School ITALY"
          description="Because Childhood Deserves to be understood, not hurried."
        />
        <StorySection
          eyebrow="From European Early Education To A New Understanding Of Childhood"
          title="OUR STORY"
          p1="My School ITALY began with a simple belief: early childhood education should respect the individuality of every child."
          p2="Over the years, that belief has grown into an integrated preschool, crèche and daycare ecosystem where learning, care, development and family partnership come together."
          drawerTitle="OUR STORY"
          drawerBody={storyDrawerBody}
        />
        <NepHero
          eyebrow="Childhood Is Not Preparation for Life. Childhood Is Life."
          title="OUR PHILOSOPHY"
          description="We do not believe every child should develop in exactly the same way or at exactly the same pace. We meet the child where they are — and help them grow from there."
          bgImage="/images/nep/daycare_4.jpeg"
          readMoreDrawerTitle="OUR PHILOSOPHY"
          readMoreDrawerBody={philosophyDrawerBody}
        />
        <DesignPhilosophy
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
          leftTitle="Where a Story Becomes a World of Learning"
          leftSubtitle="OUR BOOKS & STORIES"
          leftParagraphs={[
            "Stories are at the heart of My School ITALY. Our original books and learning materials take children into worlds of animals, nature, people, places and discovery — while naturally connecting learning across subjects.",
          ]}
          leftDrawerTitle="OUR BOOKS & STORIES"
          leftDrawerEyebrow="Where a Story Becomes a World of Learning"
          leftDrawerBody={booksStoriesDrawerBody}
          rightEyebrow="The Most Important Technology in a Classroom Is Still a Caring Adult."
          rightTitle="OUR TEACHERS"
          rightTitleColor="text-msi-orange"
          rightParagraphs={[
            "MSI educators receive continuous development in our classroom approach, child observation, communication, engagement and emotional wellbeing.",
          ]}
          rightDrawerTitle="OUR TEACHERS"
          rightDrawerEyebrow="The Most Important Technology in a Classroom Is Still a Caring Adult."
          rightDrawerBody={teachersDrawerBody}
        />
        <HomeNeuroPiApproach />

        <EarlyLearningSection
          title="A Remarkable Window Of Development"
          subtitle="WHY THE FIRST 2,000 DAYS MATTER"
          p1="The period from pregnancy through roughly the first five years is a foundational stage for brain development, relationships, language, movement, emotional regulation and learning."
          p2={null}
        />
        <SensoryCardsSection />

        <CreativeLearning
          title="WHY FAMILIES CHOOSE MSI"
          paragraphs={[
            "European Early Years Approach",
            "Neuroscience-Informed Practice",
            "Original Books & Story-Based Learning",
            "Preschool + Crèche + Daycare",
            "Physical & Emotional Safety",
            "Nutrition & Wellbeing",
            "Continuously Developed Teachers",
          ]}
          footerContent={
            <p className="font-bold text-msi-purple pt-2">
              We don&apos;t simply ask, &ldquo;What did the child learn today?&rdquo;<br />
              We ask, &ldquo;How is this child growing?&rdquo;
            </p>
          }
        />
        <VideoShowcase title="OUR CENTRES" videosList={centreVideos} />
        <MissionCounters />
        <GalleryStrip />
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
