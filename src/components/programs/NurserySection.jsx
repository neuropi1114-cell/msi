import React from 'react';
import NepHero from '../nep/NepHero';

const nurseryDrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      Nursery transforms children&apos;s natural curiosity into purposeful experiences.
    </p>
    <p>
      Through stories, conversation, play, movement, art, music and hands-on discovery, children begin developing foundational language, early literacy, numeracy, communication, physical and social-emotional skills.
    </p>
    <p>
      Rather than separating learning into isolated subjects, experiences are connected so children begin to understand relationships between ideas.
    </p>
    <p className="font-semibold text-msi-purple">
      Ask. Explore. Connect. Create.
    </p>
  </div>
);

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
