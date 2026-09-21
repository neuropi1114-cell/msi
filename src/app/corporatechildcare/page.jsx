import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import CloudHeader from '../../components/layout/CloudHeader';
import SectionHeader from '../../components/common/SectionHeader';
import DesignPhilosophy from '../../components/nep/DesignPhilosophy';
import ContactUs from '../../components/home/ContactUs';
import CorporatePartners from '../../components/home/CorporatePartners';
import { preNurseryDrawerBody } from '../programs/programsdata';
import { metadata, corporateChildcareDrawerBody } from './corporatechildcaredata';

export { metadata };

export default function CorporateChildcarePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <CloudHeader image="/images/whyus/hero_playroom.png" />
        <div data-nav-sentinel />

        <SectionHeader
          title="CORPORATE CHILDCARE"
          subtitle="How can MSI support our organisation and employees?"
          description="Because Childhood Deserves to be understood, not hurried."
        />

        <DesignPhilosophy
          image="/images/programs/Programs_2_1.png"
          imageAspect="aspect-[16/9]"
          imageClass="object-cover scale-[1.05]"
          eyebrow="You Take Care Of Your People."
          title="We Help Take Care of Their Little People."
          p1="When employees know their children are cared for, they can focus on their work."
          p2={null}
          drawerEyebrow="You Take Care of Your People. We Help Take Care of Their Little People."
          drawerTitle="When Employees Know Their Children Are Cared For, They Can Focus on Their Work."
          drawerBody={corporateChildcareDrawerBody}
          bottomEyebrow="Little Feet. Big Curiosity."
          bottomTitle="PRE NURSERY"
          bottomP1="Toddlers learn by doing."
          bottomP2="They touch, move, imitate, experiment, repeat, question and discover."
          bottomDrawerEyebrow="Little Feet. Big Curiosity."
          bottomDrawerTitle="PRE NURSERY"
          bottomDrawerBody={preNurseryDrawerBody}
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
