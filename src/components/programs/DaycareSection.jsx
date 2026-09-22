import React from 'react';
import DesignPhilosophy from '../nep/DesignPhilosophy';
import { daycareDrawerBody, twentyFourHourCareDrawerBody } from '../../app/programs/programsdata';

export default function DaycareSection() {
  return (
    <DesignPhilosophy
      topBgClass="bg-msi-green"
      image="/images/programs/Daycare.png"
      imageAspect="aspect-[16/9]"
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
  );
}
