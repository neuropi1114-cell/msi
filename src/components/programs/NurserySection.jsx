import React from 'react';
import NepHero from '../nep/NepHero';
import { nurseryDrawerBody } from '../../app/programs/programsdata';

export default function NurserySection() {
  return (
    <NepHero
      bgImage="/images/programs/Aperna_5.png"
      eyebrow="Where Curiosity Begins To Become Learning."
      title="NURSERY"
      titleColor="text-msi-yellow"
      description="Through stories, conversation, play, movement, art, music and hands-on discovery, children begin developing foundational language, early literacy, numeracy, communication, physical and social-emotional skills."
      readMoreDrawerTitle="NURSERY"
      readMoreDrawerBody={nurseryDrawerBody}
    />
  );
}
