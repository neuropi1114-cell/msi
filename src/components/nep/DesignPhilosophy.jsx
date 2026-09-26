'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SettlingInMore from '../layout/SettlingInMore';
import ChildDay from './ChildDay';
import ScrollReveal from '../common/ScrollReveal';
import ReadMoreButton from '../common/ReadMoreButton';
import Drawer from '../layout/Drawer';

export default function DesignPhilosophy({
  topId = null,
  bottomId = null,
  image = "/images/nep/Web_1.png",
  imageAlt = "My School ITALY classroom designed with neuroscience principles",
  topBgClass = "bg-[#271344]",
  imageAspect = "aspect-[4/3]",
  imageClass = "object-cover",
  eyebrow = "Small Steps Into A Big New World.",
  eyebrowClass = "text-[#68BAE3]",
  title = "STARTING SCHOOL & SETTLING IN",
  titleClass = "text-msi-orange sm:whitespace-nowrap",
  p1 = "For a young child, beginning preschool or daycare can mean a new environment, new adults, new children and a completely new routine.",
  p1Class = "text-msi-cream",
  p2Class = null,
  p3Class = null,
  p2 = "We do not expect every child to settle in the same way.",
  p3 = null,
  showSettlingInMore = null,
  drawerTitle = null,
  drawerEyebrow = null,
  drawerBody = null,
  readMoreText = null,
  readMoreBgColor = null,
  readMoreClassName = "",
  readMoreHref = null,
  bottomEyebrow = "Your Child's Day At MSI.",
  bottomTitle = "Care, Learning and Childhood \u2014 All in One Day",
  bottomP1 = "A child's day at MSI is designed around an age-appropriate rhythm rather than continuous instruction.",
  bottomP2 = "Depending on age and program, a day may move through:",
  bottomP3 = null,
  bottomEyebrowClass = "text-msi-blue",
  bottomP1Class = null,
  bottomP2Class = null,
  bottomDrawerTitle = null,
  bottomDrawerEyebrow = null,
  bottomDrawerBody = null,
  bottomReadMoreText = null,
  bottomReadMoreBgColor = null,
  bottomReadMoreClassName = "",
}) {
  const [open, setOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);

  const hasCustomDrawer = Boolean(drawerBody);
  const hasBottomDrawer = Boolean(bottomDrawerBody);

  const shouldShowSettlingIn = showSettlingInMore !== null
    ? showSettlingInMore
    : (!hasCustomDrawer && !hasBottomDrawer);

  return (
    <div className="w-full">
      {/* Top Section */}
      <section id={topId || undefined} className={`${topBgClass} py-8 md:py-12 scroll-mt-24`}>
        <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal direction="right" delay={0.1} className="flex items-center justify-center">
              <div className={`rounded-[10px] overflow-hidden relative w-full ${imageAspect} shadow-xl`}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  className={imageClass}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2} className="flex flex-col justify-center items-start">
              {eyebrow && (
                <h3 className={` ${eyebrowClass}`}>
                  {eyebrow}
                </h3>
              )}
              {title && (
                <h2 className={titleClass || 'text-msi-orange'}>
                  {title}
                </h2>
              )}

              {p1 && <p className={`${p1Class}  leading-relaxed `}>{p1}</p>}
              {p2 && <p className={`${p2Class || p1Class}  leading-relaxed `}>{p2}</p>}
              {p3 && <p className={`${p3Class || p1Class}  leading-relaxed`}>{p3}</p>}

              {readMoreHref ? (
                <div className="w-fit self-start">
                  <ReadMoreButton
                    href={readMoreHref}
                    text={readMoreText || "Read More"}
                    bgColor={readMoreBgColor || "bg-msi-blue hover:bg-msi-blue/90"}
                    className={`mt-3 font-bold ${readMoreClassName}`}
                  />
                </div>
              ) : hasCustomDrawer ? (
                <div className="w-fit self-start">
                  <ReadMoreButton
                    text={readMoreText || "Read More"}
                    bgColor={readMoreBgColor || "bg-msi-blue hover:bg-msi-blue/90"}
                    onClick={() => setOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={open}
                    className={`mt-3 font-bold ${readMoreClassName}`}
                  />
                  <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    title={drawerTitle || title}
                    side="left"
                  >
                    {drawerEyebrow && (
                      <p className="text-msi-purple font-bold text-lg leading-snug">
                        {drawerEyebrow}
                      </p>
                    )}
                    {drawerBody}
                  </Drawer>
                </div>
              ) : shouldShowSettlingIn ? (
                <SettlingInMore />
              ) : null}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bottom Section: White Background */}
      {(bottomEyebrow || bottomTitle || bottomP1 || bottomDrawerBody) && (
        <section id={bottomId || undefined} className="bg-white pt-6 pb-2 md:pt-8 md:pb-4 scroll-mt-24">
          <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
              <div className="hidden md:block"></div>
              <ScrollReveal direction="up" delay={0.2} className="flex flex-col justify-center items-start">
                {bottomEyebrow && (
                  <h3 className={bottomEyebrowClass || "text-msi-blue"}>
                    {bottomEyebrow}
                  </h3>
                )}
                {bottomTitle && (
                  <h2 className="text-msi-orange">
                    {bottomTitle}
                  </h2>
                )}
                {bottomP1 && <p className={bottomP1Class !== null ? bottomP1Class : " leading-relaxed "}>{bottomP1}</p>}
                {bottomP2 && <p className={bottomP2Class !== null ? bottomP2Class : ` leading-relaxed ${bottomP3 ? '' : 'mb-3'}`}>{bottomP2}</p>}
                {bottomP3 && <p className=" leading-relaxed">{bottomP3}</p>}

                {hasBottomDrawer && (
                  <div className="w-fit self-start">
                    <ReadMoreButton
                      text={bottomReadMoreText || "Read More"}
                      bgColor={bottomReadMoreBgColor || "bg-msi-blue hover:bg-msi-blue/90"}
                      onClick={() => setBottomOpen(true)}
                      aria-haspopup="dialog"
                      aria-expanded={bottomOpen}
                      className={`mt-3 font-bold ${bottomReadMoreClassName}`}
                    />
                    <Drawer
                      open={bottomOpen}
                      onClose={() => setBottomOpen(false)}
                      title={bottomDrawerTitle || bottomTitle}
                      side="left"
                    >
                      {bottomDrawerEyebrow && (
                        <p className="text-msi-purple font-bold text-lg leading-snug">
                          {bottomDrawerEyebrow}
                        </p>
                      )}
                      {bottomDrawerBody}
                    </Drawer>
                  </div>
                )}

                <ChildDay showButton={!hasBottomDrawer && !hasCustomDrawer && shouldShowSettlingIn} />
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}