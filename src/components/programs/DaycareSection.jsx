import React from 'react';
import DesignPhilosophy from '../nep/DesignPhilosophy';

const daycareDrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      Daycare at MSI is more than supervision after school.
    </p>
    <p>
      Children remain within a familiar environment where care, relationships, play, meals, rest, movement, learning and friendships continue naturally throughout the day.
    </p>
    <p>
      Parents remain connected to their child&apos;s experiences, helping create continuity between home, school and daycare.
    </p>
    <p className="font-semibold text-msi-purple">
      You focus on your work. We remain focused on your child.
    </p>
  </div>
);

const twentyFourHourCareDrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      Some professions don&apos;t operate from nine to five.
    </p>
    <p>
      At selected locations, MSI can provide extended childcare solutions designed for parents working night shifts, rotating schedules, healthcare, technology, emergency services and other non-traditional working hours.
    </p>
    <p>
      Availability and operating hours vary by centre.
    </p>
    <p className="font-semibold text-msi-purple">
      Because modern families need modern childcare.
    </p>
  </div>
);

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
