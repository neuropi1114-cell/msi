import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import NepHero from '../../components/nep/NepHero';
import ContactUs from '../../components/home/ContactUs';
import CorporatePartners from '../../components/home/CorporatePartners';
import { metadata, corporateChildcareDrawerBody, corporateChildcareSolutionsDrawerBody } from './corporatechildcaredata';

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

        {/* Contact Us Form / CTA */}
        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
