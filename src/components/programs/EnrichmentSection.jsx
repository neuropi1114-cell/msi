import React from 'react';
import DesignPhilosophy from '../nep/DesignPhilosophy';

const roboticsDrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      Our age-appropriate robotics experiences introduce children to early STEAM thinking, sequencing, patterns, cause and effect, construction and problem-solving.
    </p>
    <p>
      The purpose is not to turn preschoolers into engineers.
    </p>
    <p>
      It is to preserve the question every future engineer begins with: &ldquo;What happens if I try this?&rdquo;
    </p>
  </div>
);

const gymnasticsDrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      Gymnastics gives children opportunities to develop balance, coordination, flexibility, strength, spatial awareness and body confidence.
    </p>
    <p>
      Through age-appropriate movement experiences, children learn to control their bodies, follow sequences, attempt challenges and experience the satisfaction of mastering a new movement.
    </p>
    <p className="font-semibold text-msi-purple">
      Move. Balance. Persist. Achieve.
    </p>
  </div>
);

export default function EnrichmentSection() {
  return (
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
  );
}
