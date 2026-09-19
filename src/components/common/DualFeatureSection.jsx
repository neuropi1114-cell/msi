'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import FaqSection from './FaqSection';
import ProgressMore from '../nep/ProgressMore';
import HomeLearningMore from '../nep/HomeLearningMore';
import ReadMoreButton from './ReadMoreButton';
import Drawer from '../layout/Drawer';

export default function DualFeatureSection({
  faqOnly = false,
  showFaq = false,
  variant = 'default',
  sectionTitle = "UNDERSTANDING YOUR CHILD'S PROGRESS",
  eyebrow = null,
  title = null,
  leftTitle = 'More Than "How Many Letters Does My Child Know?"',
  leftSubtitle = null,
  leftSubtitleColor = null,
  leftParagraphs = null,
  leftButtonBgColor = "bg-msi-orange hover:bg-msi-orange/90",
  leftImage = "/images/nep/corporate_childcare_left.png",
  leftImageAlt = "Children at play in NeuroPi classroom",
  leftImageClass = "object-cover",
  leftAspect = "aspect-[4/3]",
  leftDrawerTitle = null,
  leftDrawerEyebrow = null,
  leftDrawerBody = null,
  rightEyebrow = "Home Learning & Family Connection",
  rightTitle = "Learning Doesn't Stop at the School Gate",
  rightTitleColor = null,
  rightParagraphs = null,
  rightButtonBgColor = "bg-msi-orange hover:bg-msi-orange/90",
  rightImage = "/images/nep/corporate_childcare_right.png",
  rightImageAlt = "Classroom activity at My School ITALY",
  rightImageClass = "object-cover",
  rightAspect = "aspect-[4/3]",
  rightDrawerTitle = null,
  rightDrawerEyebrow = null,
  rightDrawerBody = null,
}) {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  if (variant === 'programs') {
    return (
      <section className="pt-4 pb-[70px] bg-white relative">
        <div className="container mx-auto px-4 md:px-12 relative z-10" style={{ maxWidth: '1240px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div style={{ marginRight: '30px' }}>
              <div className="mb-6">
                <h3 className="italic font-lato text-[#68BAE3] text-base md:text-lg mb-1">
                  {eyebrow || sectionTitle || "From Their First Days With Us To Their Growing Years"}
                </h3>
                <h2 className="text-msi-orange font-linotte font-bold text-2xl md:text-[32px] leading-tight uppercase">
                  {title || "PROGRAMS"}
                </h2>
              </div>
              <div className="text-[#464646] font-lato text-[17px] leading-relaxed space-y-4 mb-8">
                <p>
                  Every age brings a new way of seeing, moving, communicating and learning.
                </p>
                <p>
                  At My School ITALY, our programs grow with the child &mdash; from nurturing care for babies from 45 days, through preschool and kindergarten, to daycare, after-school experiences and enrichment.
                </p>
                <p>
                  Each stage is designed around what children need at that point in their development: care, security, relationships, movement, language, exploration, creativity and increasing independence.
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200">
                <p className="font-lato text-xl font-bold text-msi-purple">
                  One Child. Many Stages. One Continuous Journey.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-[10px] overflow-hidden relative aspect-[4/3] w-full shadow-lg">
                <Image
                  src="/images/nep/ChatGPT Image Sep 19, 2026, 12_03_42 PM.png"
                  alt="Children learning the NeuroPi way"
                  fill
                  className={leftImageClass}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (faqOnly) {
    return <FaqSection />;
  }

  return (
    <section className="pt-2 md:pt-4 pb-2 md:pb-4 bg-white relative">
      <div className="container mx-auto px-4 md:px-12 relative z-10" style={{ maxWidth: '1240px' }}>
        {sectionTitle && (
          <div className="mb-6 md:mb-8 text-right">
            <h2 className="text-msi-orange font-linotte font-bold text-2xl md:text-[32px] leading-tight uppercase">
              {sectionTitle}
            </h2>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col items-end">
            <div className={`rounded-[10px] overflow-hidden mb-6 relative ${leftAspect} w-full`}>
              <Image
                src={leftImage}
                alt={leftImageAlt}
                fill
                className={leftImageClass}
              />
            </div>
            <div className="w-full md:max-w-[83%] bg-[#2CB3E9] p-[30px] rounded-[12px]">
              <p>
                <strong className="text-2xl md:text-3xl">{leftTitle}</strong>
              </p>
              {leftSubtitle && <h2 className={leftSubtitleColor ? leftSubtitleColor : ''}>{leftSubtitle}</h2>}
              {leftParagraphs ? (
                leftParagraphs.map((text, idx) => (
                  <p key={idx} className="text-msi-cream mb-2">
                    {text}
                  </p>
                ))
              ) : (
                <>
                  <p className="text-msi-cream">
                    Parents naturally want to know how their child is progressing.
                  </p>
                  <p className="text-msi-cream">
                    At MSI, conversations about progress can go beyond academic achievement.
                  </p>
                  <p className="text-msi-cream">
                    We may talk about how your child is developing in areas such as:
                  </p>
                </>
              )}
              {leftDrawerBody ? (
                <>
                  <ReadMoreButton
                    onClick={() => setLeftOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={leftOpen}
                    bgColor={leftButtonBgColor}
                    className="mt-6 font-bold"
                  />
                  <Drawer
                    open={leftOpen}
                    onClose={() => setLeftOpen(false)}
                    title={leftDrawerTitle || leftSubtitle || leftTitle}
                    side="left"
                  >
                    {leftDrawerEyebrow && (
                      <p className="text-msi-purple font-bold text-lg leading-snug mb-3">
                        {leftDrawerEyebrow}
                      </p>
                    )}
                    {leftDrawerBody}
                  </Drawer>
                </>
              ) : (
                <ProgressMore />
              )}
            </div>
          </div>
          <div>
            <div className={`rounded-[10px] overflow-hidden mb-6 relative ${rightAspect} w-full`}>
              <Image
                src={rightImage}
                alt={rightImageAlt}
                fill
                className={rightImageClass}
              />
            </div>
            <div className="w-full md:max-w-[88%]">
              {rightEyebrow && (
                <h3 className="text-msi-blue">
                  {rightEyebrow}
                </h3>
              )}
              <div>
                <h2 className={rightTitleColor ? rightTitleColor : ''}>
                  {rightTitle}
                </h2>
                {rightParagraphs ? (
                  rightParagraphs.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))
                ) : (
                  <>
                    <p>Home should not become another classroom. Instead, families can extend learning through simple everyday experiences.</p>
                    <p>A story at bedtime.</p>
                    <p>Counting fruit while shopping.</p>
                    <p>Talking about colours during a walk.</p>
                    <p>Helping prepare a meal.</p>
                  </>
                )}
              </div>
              {rightDrawerBody ? (
                <>
                  <ReadMoreButton
                    onClick={() => setRightOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={rightOpen}
                    bgColor={rightButtonBgColor}
                    className="mt-6 font-bold"
                  />
                  <Drawer
                    open={rightOpen}
                    onClose={() => setRightOpen(false)}
                    title={rightDrawerTitle || rightTitle || rightEyebrow}
                    side="left"
                  >
                    {rightDrawerEyebrow && (
                      <p className="text-msi-purple font-bold text-lg leading-snug mb-3">
                        {rightDrawerEyebrow}
                      </p>
                    )}
                    {rightDrawerBody}
                  </Drawer>
                </>
              ) : (
                <HomeLearningMore />
              )}
            </div>
          </div>
        </div>
        {showFaq && (
          <>
            <div style={{ height: '50px' }}></div>
            <div className="border-t border-[#D8D8D8] my-4"></div>
            <FaqSection className="pt-12" />
          </>
        )}
      </div>
    </section>
  );
}
