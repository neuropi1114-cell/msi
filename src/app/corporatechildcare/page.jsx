import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import NepHero from '../../components/nep/NepHero';
import DualFeatureSection from '../../components/common/DualFeatureSection';
import FaqSection from '../../components/common/FaqSection';
import NeuroPiApproach from '../../components/home/NeuroPiApproach';
import CorporateContactUs from '../../components/home/CorporateContactUs';
import CorporatePartners from '../../components/home/CorporatePartners';
import EnrolCta from '../../components/day-care/EnrolCta';
import VideoShowcase from '../../components/home/VideoShowcase';
import { programVideos } from '../programs/programsdata';
import {
  metadata,
  corporateChildcareDrawerBody,
  corporateChildcareSolutionsDrawerBody,
  onCampusCrecheDrawerBody,
  nearCampusPreferredDrawerBody,
  corporateSubsidyDrawerBody,
  extendedHoursChildcareDrawerBody,
  reservedSeatsDrawerBody,
  multiLocationSolutionsContent,
  employeeChildcareJourneyDrawerBody,
  partnerWithMsiDrawerBody,
  ourCorporateExperienceDrawerBody,
  moreThanACrecheContent,
  childcareWorksContent,
} from './corporatechildcaredata';

export { metadata };

export default function CorporateChildcarePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <CloudHeader image="/images/corporatechildcare/Corporate_Childcare_1.png" />
        <div data-nav-sentinel />

        <SectionHeader
          title="CORPORATE CHILDCARE"
          subtitle="How can MSI support our organisation and employees?"
          description="Because Childhood Deserves to be understood, not hurried."
        />

        <DesignPhilosophy
          image="/images/corporatechildcare/Corporate_Childcare_2.jpeg"
          imageAspect="aspect-[16/9]"
          imageClass="object-contain"
          eyebrow="You Take Care Of Your People."
          title="We Help Take Care of Their Little People."
          p1="When employees know their children are cared for, they can focus on their work."
          p2={null}
          drawerEyebrow="You Take Care of Your People. We Help Take Care of Their Little People."
          drawerTitle="When Employees Know Their Children Are Cared For, They Can Focus on Their Work."
          drawerBody={corporateChildcareDrawerBody}
          bottomEyebrow={null}
          bottomTitle={null}
          bottomP1={null}
          bottomP2={null}
        />

        <NepHero
          eyebrow="One Organisation. Different Employees. Different Childcare Needs."
          title="CORPORATE CHILDCARE SOLUTIONS"
          titleColor="text-msi-yellow"
          description="A single childcare model may not work for every workplace. The requirement depends on employee numbers, location, shifts, available space, commuting patterns and the ages of employees' children."
          bgImage="/images/corporatechildcare/Corporate_Childcare_3b.png"
          readMoreDrawerTitle="CORPORATE CHILDCARE SOLUTIONS"
          readMoreDrawerBody={corporateChildcareSolutionsDrawerBody}
        />

        <DualFeatureSection
          sectionTitle="Facilities for Corporates"
          leftImage="/images/corporatechildcare/Corporate_Childcare_4.png"
          leftTitle="Corporate Childcare Without Building a Crèche"
          leftSubtitle="NEAR-CAMPUS PREFERRED CENTRES"
          leftSubtitleColor="text-msi-yellow font-linotte font-bold text-xl uppercase mb-3"
          leftParagraphs={[
            "Not every organisation needs — or has the space for — an on-campus childcare centre.",
          ]}
          leftDrawerTitle="NEAR-CAMPUS PREFERRED CENTRES"
          leftDrawerEyebrow="Corporate Childcare Without Building a Crèche"
          leftDrawerBody={nearCampusPreferredDrawerBody}
          rightImage="/images/corporatechildcare/Corporate_Childcare_5.png"
          rightEyebrow="Childcare Where Your Employees Work"
          rightTitle="ON-CAMPUS CRÈCHE"
          rightTitleColor="text-msi-orange font-linotte font-bold text-2xl md:text-[32px] leading-tight uppercase mb-4"
          rightParagraphs={[
            "MSI can work with organisations to establish and operate childcare facilities within corporate campuses or designated workplace premises.",
          ]}
          rightDrawerTitle="ON-CAMPUS CRÈCHE"
          rightDrawerEyebrow="Childcare Where Your Employees Work"
          rightDrawerBody={onCampusCrecheDrawerBody}
        />

        <DesignPhilosophy
          image="/images/corporatechildcare/Corporate_Childcare_6.png"
          imageAspect="aspect-[16/9]"
          imageClass="object-contain"
          eyebrow="Turn Childcare Into a Meaningful Employee Benefit"
          title="CORPORATE SUBSIDY PROGRAMS"
          p1="Organisations can support eligible employees by contributing towards childcare costs through a structured corporate subsidy arrangement."
          p2={null}
          drawerEyebrow="Turn Childcare Into a Meaningful Employee Benefit"
          drawerTitle="CORPORATE SUBSIDY PROGRAMS"
          drawerBody={corporateSubsidyDrawerBody}
          bottomEyebrow="Because Modern Work Doesn't Always End at 5 PM"
          bottomTitle="EXTENDED-HOURS CHILDCARE"
          bottomP1="Technology, healthcare, global services, customer support, operations and many other industries work beyond conventional school hours."
          bottomP2={null}
          bottomDrawerEyebrow="Because Modern Work Doesn't Always End at 5 PM"
          bottomDrawerTitle="EXTENDED-HOURS CHILDCARE"
          bottomDrawerBody={extendedHoursChildcareDrawerBody}
        />

        <NepHero
          eyebrow="Childcare Capacity When Your Employees Need It"
          title="RESERVED SEATS"
          titleColor="text-msi-yellow"
          description="Childcare availability can become a challenge when employees need to return to work quickly. Under a Reserved Seats arrangement, an organisation can secure an agreed number of places for eligible employees at selected MSI centres."
          bgImage="/images/corporatechildcare/The_NeuroPi_Way_x.png"
          readMoreDrawerTitle="RESERVED SEATS"
          readMoreDrawerBody={reservedSeatsDrawerBody}
        />

        <FaqSection
          subheading="One Workforce. Many Locations. One Childcare Partner."
          heading="MULTI-LOCATION SOLUTIONS"
          showFaq={false}
          imageSrc="/images/corporatechildcare/Corporate_Childcare_8.png"
          description={multiLocationSolutionsContent}
        />

        <DesignPhilosophy
          image="/images/corporatechildcare/Corporate_Childcare_9.png"
          imageAspect="aspect-[16/9]"
          imageClass="object-contain"
          topBgClass="bg-msi-yellow"
          eyebrowClass="text-msi-purple"
          titleClass="text-msi-purple"
          p1Class="text-gray-800 font-medium"
          eyebrow="Make Access Simple for Parents"
          title="THE EMPLOYEE CHILDCARE JOURNEY"
          p1="Corporate childcare should not create another complicated process for employees."
          p2="We can create a clear journey."
          drawerEyebrow="Make Access Simple for Parents"
          drawerTitle="THE EMPLOYEE CHILDCARE JOURNEY"
          drawerBody={employeeChildcareJourneyDrawerBody}
          bottomEyebrow="More Flexibility Around Your Working Day."
          bottomTitle="EARLY DROP-OFF & LATE PICK-UP"
          bottomP1="An early meeting, a long commute or an unexpected late evening should not turn childcare into a daily struggle."
          bottomP2="Selected MSI centres provide Early Drop-Off and Late Pick-Up options designed around the realities of working families."
          bottomP1Class="text-gray-700 font-normal leading-relaxed mb-2"
          bottomP2Class="text-gray-700 font-normal leading-relaxed"
        />

        <DualFeatureSection
          sectionTitle="FOR MODERN FAMILIES"
          leftImage="/images/corporatechildcare/Corporate_Childcare_10.png"
          leftTitle="Childcare Is Not New To Us. Operating It At Workplace Scale Isn't Either."
          leftSubtitle="OUR CORPORATE EXPERIENCE"
          leftSubtitleColor="text-msi-yellow font-linotte font-bold text-xl uppercase mb-3"
          leftParagraphs={[
            "Childcare solutions designed for parents working night shifts, rotating schedules, healthcare, technology, emergency services and other non-traditional working hours.",
          ]}
          leftDrawerTitle="OUR CORPORATE EXPERIENCE"
          leftDrawerEyebrow="Childcare Is Not New To Us. Operating It At Workplace Scale Isn't Either."
          leftDrawerBody={ourCorporateExperienceDrawerBody}
          rightImage="/images/corporatechildcare/Corporate_Childcare_11.png"
          rightEyebrow="Tell Us About Your Workforce. We will Help Design The Childcare Model."
          rightTitle="PARTNER WITH MY SCHOOL ITALY"
          rightTitleColor="text-msi-orange font-linotte font-bold text-2xl md:text-[32px] leading-tight uppercase mb-4"
          rightParagraphs={[
            "Every organisation has a different childcare requirement. Our corporate team can work with you to understand the requirements.",
          ]}
          rightDrawerTitle="PARTNER WITH MY SCHOOL ITALY"
          rightDrawerEyebrow="Tell Us About Your Workforce. We will Help Design The Childcare Model."
          rightDrawerBody={partnerWithMsiDrawerBody}
        />

        <FaqSection
          subheading="A Complete Early Childhood Ecosystem For Your Employees"
          heading="MORE THAN A CRÈCHE"
          showFaq={false}
          imageSrc="/images/corporatechildcare/Corporate_Childcare_12.png"
          description={moreThanACrecheContent}
        />






        {/* Corporate Partners Marquee Sections */}
        <CorporatePartners
          title="Our Corporate Partners"
          description="We work with leading corporations to provide tailor-made family solutions for employees."
        />

        <CorporatePartners
          title="Supporting Working Parents"
          description="Trusted by enterprise leaders worldwide for child development and parent support."
          reverse
        />
        <NeuroPiApproach
          eyebrow="Supporting Children. Supporting Parents. Supporting Workplaces."
          title="CHILDCARE THAT WORKS FOR WORKING PEOPLE"
          titleClass="text-msi-orange font-linotte font-bold text-2xl md:text-[32px] leading-tight uppercase my-3"
          content={childcareWorksContent}
        />
        <EnrolCta />
        <VideoShowcase
          eyebrow="Watch Our Programs Come Alive"
          title="PROGRAMS IN ACTION"
          videosList={programVideos}
          showCarousel={true}
        />

        {/* Corporate Proposal Form / CTA */}
        <CorporateContactUs />
      </main>
      <Footer />
    </>
  );
}
