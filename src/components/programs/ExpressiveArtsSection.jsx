import React from 'react';
import DualFeatureSection from '../common/DualFeatureSection';
import { danceCreativeMovementDrawerBody, storytellingCreativeArtsDrawerBody } from '../../app/programs/programsdata';

export default function ExpressiveArtsSection({ leftId = "dance-creative-movement", rightId = "storytelling-creative-arts" }) {
  return (
    <DualFeatureSection
      leftId={leftId}
      rightId={rightId}
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
      leftDrawerBody={danceCreativeMovementDrawerBody}
      rightEyebrow={<span className="italic">Imagine It. Tell It. Create It.</span>}
      rightTitle="STORYTELLING & CREATIVE ARTS"
      rightTitleColor="text-msi-orange"
      rightParagraphs={[
        "Children listen, invent characters, retell experiences, perform, create and express ideas in their own ways.",
        "Because creativity isn't an extra subject. It is another way of thinking.",
      ]}
      rightDrawerTitle="STORYTELLING & CREATIVE ARTS"
      rightDrawerBody={storytellingCreativeArtsDrawerBody}
      rightButtonBgColor="bg-msi-green hover:bg-msi-green/90"
    />
  );
}
