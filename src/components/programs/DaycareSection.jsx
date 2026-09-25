import React from 'react';
import DesignPhilosophy from '../nep/DesignPhilosophy';
import { daycareDrawerBody, twentyFourHourCareDrawerBody } from '../../app/programs/programsdata';

export default function DaycareSection({ topId = "daycare", bottomId = "24-hour-care" }) {
  return (
    <DesignPhilosophy
      topId={topId}
      bottomId={bottomId}
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
      drawerTitle="DAYCARE"
      drawerBody={daycareDrawerBody}
      readMoreText="Know More"
      bottomEyebrow="Childcare Beyond Conventional Working Hours."
      bottomTitle="24-HOUR CARE — WHERE AVAILABLE"
      bottomP1="Childcare solutions designed for parents working night shifts, rotating schedules, healthcare, technology, emergency services and other non-traditional working hours."
      bottomP2={null}
      bottomP3={null}
      bottomDrawerTitle="24-HOUR CARE — WHERE AVAILABLE"
      bottomDrawerBody={twentyFourHourCareDrawerBody}
      bottomReadMoreBgColor="bg-msi-green hover:bg-msi-green/90"
    />
  );
}
