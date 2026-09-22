import React from 'react';
import DesignPhilosophy from '../nep/DesignPhilosophy';

const ciaoBabyDrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      A warm, nurturing environment for babies beginning from 45 days, where care routines and early developmental experiences come together.
    </p>
    <p>
      Our caregivers pay close attention to each baby&apos;s individual rhythms &mdash; feeding, sleep, comfort, movement, sensory experiences and interaction.
    </p>
    <p>
      Gentle conversation, music, touch, tummy time, movement and sensory exploration make everyday care meaningful.
    </p>
    <p className="font-semibold text-msi-purple">
      Care. Comfort. Connection. Development.
    </p>
  </div>
);

const preNurseryDrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      Toddlers learn by doing.
    </p>
    <p>
      They touch, move, imitate, experiment, repeat, question and discover.
    </p>
    <p>
      Our Toddler and Playgroup experiences provide opportunities for sensory exploration, language, music, movement, imaginative play, early social interaction and growing independence.
    </p>
    <p>
      The environment gives children freedom to explore while providing the security of familiar routines and caring adults.
    </p>
    <p className="font-semibold text-msi-purple">
      Explore. Move. Communicate. Discover.
    </p>
  </div>
);

export default function EarlyYearsSection() {
  return (
    <DesignPhilosophy
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
