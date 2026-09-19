import React from 'react';
import dynamic from 'next/dynamic';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import FaqSection from '../../components/common/FaqSection';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import NepHero from '../../components/nep/NepHero';
import DualFeatureSection from '../../components/common/DualFeatureSection';


import VideoCarousel from '../../components/home/VideoCarousel';

import OneJourneySection from '../../components/programs/OneJourneySection';
import RecentNews from '../../components/day-care/RecentNews';
import {
  metadata,
  ciaoBabyDrawerBody,
  preNurseryDrawerBody,
  nurseryDrawerBody,
  k1DrawerBody,
  k2DrawerBody,
  daycareDrawerBody,
  gymnasticsDrawerBody,
  roboticsDrawerBody,
  danceCreativeMovementDrawerBody,
  storytellingCreativeArtsDrawerBody,
  extendedDaycareDrawerBody,
  emergencyExtendedCareDrawerBody,
  twentyFourHourCareDrawerBody,
} from './programsdata';

const ContactUs = dynamic(() => import('../../components/home/ContactUs'), { ssr: true });

export { metadata };

export default function ProgramsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <CloudHeader image="/images/programs/ChatGPT Image Sep 19, 2026 at 12_59_57 PM.png" />
        <div data-nav-sentinel />

        <SectionHeader
          title="From 45 Days to the Growing Years"
          subtitle="One continuous journey."
          description={
            <>
              Through Baby Crèche, Toddler, Nursery, Kindergarten, Daycare,<br />
              Extended Care, After-School and Enrichment.
            </>
          }
          className="pt-6 pb-2 bg-white"
        />

        <DesignPhilosophy
          image="/images/programs/Aperna_6.png"
          imageAspect="aspect-[16/9]"
          imageClass="object-cover scale-[1.05]"
          eyebrow="The Smallest Children Deserve Our Greatest Care."
          title={
            <>
              EARLY YEARS<br />
              CIAO BABY: BABY CRÈCHE &mdash; 45 DAYS+
            </>
          }
          p1="A warm, nurturing environment for babies beginning from 45 days, where care routines and early developmental experiences come together."
          p2={null}
          drawerEyebrow="The Smallest Children Deserve Our Greatest Care."
          drawerTitle="EARLY YEARS - CIAO BABY: BABY CRÈCHE : 45 DAYS+"
          drawerBody={ciaoBabyDrawerBody}
          bottomEyebrow="Little Feet. Big Curiosity."
          bottomTitle="PRE NURSERY"
          bottomP1="Toddlers learn by doing."
          bottomP2="They touch, move, imitate, experiment, repeat, question and discover."
          bottomDrawerEyebrow="Little Feet. Big Curiosity."
          bottomDrawerTitle="PRE NURSERY"
          bottomDrawerBody={preNurseryDrawerBody}
        />

        <NepHero
          bgImage="/images/programs/Aperna_5.png"
          eyebrow="Where Curiosity Begins To Become Learning."
          title="NURSERY"
          titleColor="text-msi-yellow"
          description="Through stories, conversation, play, movement, art, music and hands-on discovery, children begin developing foundational language, early literacy, numeracy, communication, physical and social-emotional skills."
          readMoreDrawerTitle="NURSERY"
          readMoreDrawerBody={nurseryDrawerBody}
        />

        <DualFeatureSection
          sectionTitle="KINDERGARTEN"
          leftImage="/images/programs/Aperna_8.png"
          leftAspect="aspect-[4/5]"
          rightImage="/images/programs/Batch_3_6.png"
          leftTitle={<span className="italic">From Exploring The World To Making Connections.</span>}
          leftSubtitle="KINDERGARTEN K1"
          leftSubtitleColor="text-msi-yellow"
          leftParagraphs={[
            "Children build foundations in language and literacy, mathematics, science, understanding the world, communication, creativity, physical development and social-emotional learning.",
          ]}
          leftDrawerTitle="KINDERGARTEN K1"
          leftDrawerEyebrow={<span className="italic">From Exploring The World To Making Connections.</span>}
          leftDrawerBody={k1DrawerBody}
          rightEyebrow={<span className="italic">Ready For School. Ready To Think.</span>}
          rightTitle="KINDERGARTEN K2"
          rightTitleColor="text-msi-orange"
          rightParagraphs={[
            "Children strengthen reading readiness, writing, mathematical thinking, scientific curiosity, communication, problem-solving, creativity and independent learning habits.",
          ]}
          rightDrawerTitle="KINDERGARTEN K2"
          rightDrawerEyebrow={<span className="italic">Ready For School. Ready To Think.</span>}
          rightDrawerBody={k2DrawerBody}
          rightButtonBgColor="bg-msi-blue hover:bg-msi-blue/90"
        />


        <DesignPhilosophy
          topBgClass="bg-msi-green"
          image="/images/programs/Aperna_16.png"
          imageAspect="aspect-[4/5]"
          imageClass="object-cover"
          eyebrow="Your Child's Day Continues With Purpose."
          eyebrowClass="text-msi-purple"
          title="DAYCARE"
          p1="Children remain within a familiar environment where care, relationships, play, meals, rest, movement, learning and friendships continue naturally throughout the day."
          p1Class="text-msi-purple"
          p2={null}
          drawerEyebrow="Your Child's Day Continues With Purpose."
          drawerTitle="DAYCARE"
          drawerBody={daycareDrawerBody}
          bottomEyebrow="Childcare Beyond Conventional Working Hours."
          bottomTitle="24-HOUR CARE — WHERE AVAILABLE"
          bottomP1="Childcare solutions designed for parents working night shifts, rotating schedules, healthcare, technology, emergency services and other non-traditional working hours."
          bottomP2={null}
          bottomP3={null}
          bottomDrawerEyebrow="Childcare Beyond Conventional Working Hours."
          bottomDrawerTitle="24-HOUR CARE — WHERE AVAILABLE"
          bottomDrawerBody={twentyFourHourCareDrawerBody}
        />


        <NepHero
          bgImage="/images/programs/early_drop_off.png"
          eyebrow="More Flexibility Around Your Working Day."
          title="EARLY DROP-OFF & LATE PICK-UP"
          titleColor="text-msi-yellow"
          description={
            <div className="space-y-3">
              <p>
                An early meeting, a long commute or an unexpected late evening should not turn childcare into a daily struggle.
              </p>
              <p>
                Selected MSI centres provide Early Drop-Off and Late Pick-Up options designed around the realities of working families.
              </p>
            </div>
          }
          showReadMore={false}
        />

        <FaqSection
          subheading="Because Your Working Calendar and the School Calendar Don't Always Match."
          heading="SATURDAY & HOLIDAY CARE"
          showFaq={false}
          imageSrc="/images/programs/Aperna_17.png"
          imageAlt="Saturday & Holiday Care"
          description={
            <div className="text-[#464646] font-lato text-[17px] leading-relaxed mt-4">
              <p>
                Selected centres provide childcare on Saturdays and designated holidays. Children spend their day in a familiar environment with opportunities for play, creativity, movement, stories, rest and social interaction.
              </p>
            </div>
          }
        />

        <DesignPhilosophy
          topBgClass="bg-msi-yellow"
          image="/images/programs/Aperna_23.png"
          imageAspect="aspect-[16/9]"
          imageClass="object-cover scale-[1.05]"
          eyebrow="From “How Does It Work?” to “Can I Make It Work?”"
          title="ROBOTICS"
          p1="The purpose is not to turn preschoolers into engineers."
          p2="It is to preserve the question every future engineer begins with: “What happens if I try this?”"
          drawerEyebrow="From “How Does It Work?” to “Can I Make It Work?”"
          drawerTitle="ROBOTICS"
          drawerBody={roboticsDrawerBody}
          bottomEyebrow="Strong Bodies Support Growing Minds."
          bottomTitle="GYMNASTICS"
          bottomP1="Through age-appropriate movement experiences, children learn to control their bodies, follow sequences, attempt challenges and experience the satisfaction of mastering a new movement."
          bottomP2={null}
          bottomDrawerEyebrow="Strong Bodies Support Growing Minds."
          bottomDrawerTitle="GYMNASTICS"
          bottomDrawerBody={gymnasticsDrawerBody}
        />

        <DualFeatureSection
          sectionTitle="EXPRESSIVE ART & DESIGN"
          leftImage="/images/programs/Aperna_24.png"
          leftAspect="aspect-[4/5]"
          rightImage="/images/programs/Aperna_25.png"
          leftTitle={<span className="italic">Let the Body Become Another Language.</span>}
          leftSubtitle="DANCE & CREATIVE MOVEMENT"
          leftSubtitleColor="text-msi-yellow"
          leftParagraphs={[
            "Through music, rhythm, dance and creative movement, children develop coordination, body awareness, rhythm, expression, confidence and social participation.",
          ]}
          leftDrawerTitle="DANCE & CREATIVE MOVEMENT"
          leftDrawerEyebrow={<span className="italic">Let the Body Become Another Language.</span>}
          leftDrawerBody={danceCreativeMovementDrawerBody}
          rightEyebrow={<span className="italic">Imagine It. Tell It. Create It.</span>}
          rightTitle="STORYTELLING & CREATIVE ARTS"
          rightTitleColor="text-msi-orange"
          rightParagraphs={[
            "Children listen, invent characters, retell experiences, perform, create and express ideas in their own ways.",
            "Because creativity isn't an extra subject. It is another way of thinking.",
          ]}
          rightDrawerTitle="STORYTELLING & CREATIVE ARTS"
          rightDrawerEyebrow={<span className="italic">Imagine It. Tell It. Create It.</span>}
          rightDrawerBody={storytellingCreativeArtsDrawerBody}
          rightButtonBgColor="bg-msi-blue hover:bg-msi-blue/90"
        />


        <FaqSection
          subheading="Holidays Become Adventures."
          heading="HOLIDAY & SUMMER PROGRAMS"
          showFaq={false}
          description={
            <div className="text-[#464646] font-lato text-[17px] leading-relaxed space-y-3 mt-4">
              <p>
                Our holiday and summer programs transform school breaks into opportunities for exploration.
              </p>
              <p>
                Programs can combine:
              </p>
              <p className="font-semibold text-msi-purple">
                Stories &bull; Science &bull; Nature &bull; Art &bull; Cooking &bull; Movement &bull; Gymnastics &bull; Robotics &bull; Music &bull; Drama &bull; Games &bull; Creative Projects
              </p>
              <p>
                Themes and activities change so children can experience something different while remaining within MSI&apos;s familiar environment.
              </p>
              <p className="font-semibold text-msi-purple">
                Different Days. New Experiences. Endless Discovery.
              </p>
            </div>
          }
        />


        <OneJourneySection />
        <VideoCarousel />
        <RecentNews />


      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
