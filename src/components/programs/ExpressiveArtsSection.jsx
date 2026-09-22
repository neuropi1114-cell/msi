import React from 'react';
import DualFeatureSection from '../common/DualFeatureSection';
import { danceCreativeMovementDrawerBody, storytellingCreativeArtsDrawerBody } from '../../app/programs/programsdata';

export default function ExpressiveArtsSection() {
  return (
    <DualFeatureSection
      sectionTitle="EXPRESSIVE ART & DESIGN"
      leftImage="/images/programs/Aperna_24.png"
      leftAspect="aspect-[4/5]"
      rightImage="/images/programs/Aperna_25.png"
      leftTitle={<span className="italic">Let the Body Become Another Language.</span>}
      leftSubtitle="DANCE & CREATIVE MOVEMENT"
      leftSubtitleColor="text-msi-yellow"
      leftParagraphs={[
        "Through music, rhythm, dance and creative movement, children develop coordination, body awareness, rhythm, expression, confidence and social participation.",
      ]}
      leftDrawerTitle="DANCE & CREATIVE MOVEMENT"
      leftDrawerEyebrow={<span className="italic">Let the Body Become Another Language.</span>}
      leftDrawerBody={danceCreativeMovementDrawerBody}
      rightEyebrow={<span className="italic">Imagine It. Tell It. Create It.</span>}
      rightTitle="STORYTELLING & CREATIVE ARTS"
      rightTitleColor="text-msi-orange"
      rightParagraphs={[
        "Children listen, invent characters, retell experiences, perform, create and express ideas in their own ways.",
        "Because creativity isn't an extra subject. It is another way of thinking.",
      ]}
      rightDrawerTitle="STORYTELLING & CREATIVE ARTS"
      rightDrawerEyebrow={<span className="italic">Imagine It. Tell It. Create It.</span>}
      rightDrawerBody={storytellingCreativeArtsDrawerBody}
      rightButtonBgColor="bg-msi-blue hover:bg-msi-blue/90"
    />
  );
}
