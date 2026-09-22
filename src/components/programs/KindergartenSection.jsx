import React from 'react';
import DualFeatureSection from '../common/DualFeatureSection';
import { k1DrawerBody, k2DrawerBody } from '../../app/programs/programsdata';

export default function KindergartenSection() {
  return (
    <DualFeatureSection
      sectionTitle="KINDERGARTEN"
      leftImage="/images/programs/Programs_4.png"
      leftAspect="aspect-[4/5]"
      rightImage="/images/programs/Batch_3_6.png"
      leftTitle={<span className="italic">From Exploring The World To Making Connections.</span>}
      leftSubtitle="KINDERGARTEN K1"
      leftSubtitleColor="text-msi-yellow"
      leftParagraphs={[
        "Children build foundations in language and literacy, mathematics, science, understanding the world, communication, creativity, physical development and social-emotional learning.",
      ]}
      leftDrawerTitle="KINDERGARTEN K1"
      leftDrawerEyebrow={<span className="italic">From Exploring The World To Making Connections.</span>}
      leftDrawerBody={k1DrawerBody}
      rightEyebrow={<span className="italic">Ready For School. Ready To Think.</span>}
      rightTitle="KINDERGARTEN K2"
      rightTitleColor="text-msi-orange"
      rightParagraphs={[
        "Children strengthen reading readiness, writing, mathematical thinking, scientific curiosity, communication, problem-solving, creativity and independent learning habits.",
      ]}
      rightDrawerTitle="KINDERGARTEN K2"
      rightDrawerEyebrow={<span className="italic">Ready For School. Ready To Think.</span>}
      rightDrawerBody={k2DrawerBody}
      rightButtonBgColor="bg-msi-blue hover:bg-msi-blue/90"
    />
  );
}
