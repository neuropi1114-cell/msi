import React from 'react';
import DualFeatureSection from '../common/DualFeatureSection';

const k1DrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      As children&apos;s language, attention and independence develop, K1 introduces increasingly structured learning while preserving the joy of discovery.
    </p>
    <p>
      Children build foundations in language and literacy, mathematics, science, understanding the world, communication, creativity, physical development and social-emotional learning.
    </p>
    <p>
      Stories and real experiences help children connect what they learn with the world around them.
    </p>
    <p className="font-semibold text-msi-purple">
      Learning becomes meaningful when children can connect it.
    </p>
  </div>
);

const k2DrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      K2 builds confidence and independence as children prepare for the next stage of formal schooling.
    </p>
    <p>
      Children strengthen reading readiness, writing, mathematical thinking, scientific curiosity, communication, problem-solving, creativity and independent learning habits.
    </p>
    <p>
      Our objective is not simply to prepare children for the next classroom. It is to help them become curious thinkers, confident communicators and enthusiastic learners.
    </p>
    <p className="font-semibold text-msi-purple">
      Ready for School. Ready for Learning. Ready for What Comes Next.
    </p>
  </div>
);

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
