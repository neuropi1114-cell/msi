import React from 'react';
import DesignPhilosophy from '../nep/DesignPhilosophy';
import { ciaoBabyDrawerBody, preNurseryDrawerBody } from '../../app/programs/programsdata';

export default function EarlyYearsSection({ topId = "baby-creche", bottomId = "toddler-playgroup" }) {
  return (
    <DesignPhilosophy
      topId={topId}
      bottomId={bottomId}
      image="/images/programs/Programs_2_1.png"
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
  );
}
