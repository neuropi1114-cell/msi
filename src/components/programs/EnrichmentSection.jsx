import React from 'react';
import DesignPhilosophy from '../nep/DesignPhilosophy';
import { roboticsDrawerBody, gymnasticsDrawerBody } from '../../app/programs/programsdata';

export default function EnrichmentSection() {
  return (
    <DesignPhilosophy
      topBgClass="bg-msi-yellow"
      image="/images/programs/Aperna_23.png"
      imageAspect="aspect-[16/9]"
      imageClass="object-cover scale-[1.05]"
      eyebrow="From “How Does It Work?” to “Can I Make It Work?”"
      eyebrowClass="text-msi-purple"
      title="ROBOTICS"
      titleClass="text-msi-purple"
      p1="The purpose is not to turn preschoolers into engineers."
      p1Class="text-msi-purple"
      p2="It is to preserve the question every future engineer begins with: “What happens if I try this?”"
      p2Class="text-msi-purple"
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
