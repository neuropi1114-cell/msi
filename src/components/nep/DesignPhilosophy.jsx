'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import SettlingInMore from '../layout/SettlingInMore';
import ChildDay from './ChildDay';
import ScrollReveal from '../common/ScrollReveal';
import ReadMoreButton from '../common/ReadMoreButton';
import Drawer from '../layout/Drawer';

export default function DesignPhilosophy({
  eyebrow = "Small Steps Into A Big New World",
  title = "STARTING SCHOOL & SETTLING IN",
  p1 = "For a young child, beginning preschool or daycare can mean a new environment, new adults, new children and a completely new routine.",
  p2 = "We do not expect every child to settle in the same way.",
  p3 = null,
  showSettlingInMore = null, // auto-detects
  drawerTitle = null,
  drawerEyebrow = null,
  drawerBody = null,
  bottomEyebrow = "Your Child's Day At MSI",
  bottomTitle = "Care, Learning and Childhood \u2014 All in One Day",
  bottomP1 = "A child's day at MSI is designed around an age-appropriate rhythm rather than continuous instruction.",
  bottomP2 = "Depending on age and program, a day may move through:",
  bottomDrawerTitle = null,
  bottomDrawerEyebrow = null,
  bottomDrawerBody = null,
}) {
  const [open, setOpen] = useState(false);
  const [bottomOpen, setBottomOpen] = useState(false);

  const hasCustomDrawer = Boolean(drawerBody);
  const hasBottomDrawer = Boolean(bottomDrawerBody);

  // If custom drawers are provided, turn off default SettlingInMore button unless explicitly set to true
  const shouldShowSettlingIn = showSettlingInMore !== null 
    ? showSettlingInMore 
    : (!hasCustomDrawer && !hasBottomDrawer);

  return (
    <>
      <section className="hidden md:block bg-[linear-gradient(180deg,#271344_50%,#FFFFFF_3%)] py-[50px]">
        <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
            <ScrollReveal direction="right" delay={0.1} className="flex items-center justify-center">
              <div className="rounded-[10px] overflow-hidden relative w-full aspect-[4/3] ml-6">
                <Image
                  src="/images/nep/Web_1.png"
                  alt="My School ITALY classroom designed with neuroscience principles"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.2} className="pt-[30px] pr-2.5 pb-2.5 pl-6">
              <h3>{eyebrow}</h3>
              <h2>{title}</h2>

              {p1 && <p className="text-msi-cream mb-2">{p1}</p>}
              {p2 && <p className="text-msi-cream mb-2">{p2}</p>}
              {p3 && <p className="text-msi-cream mb-2">{p3}</p>}

              {hasCustomDrawer ? (
                <>
                  <ReadMoreButton
                    onClick={() => setOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={open}
                    className="mt-2 mb-6 font-bold"
                  />
                  <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    title={drawerTitle || title}
                    side="left"
                  >
                    {drawerEyebrow && (
                      <p className="text-msi-purple font-bold text-lg leading-snug mb-3">
                        {drawerEyebrow}
                      </p>
                    )}
                    {drawerBody}
                  </Drawer>
                </>
              ) : shouldShowSettlingIn ? (
                <SettlingInMore />
              ) : null}

              <div className="h-[104px]"></div>
              <h3>{bottomEyebrow}</h3>
              <h2>{bottomTitle}</h2>
              {bottomP1 && <p>{bottomP1}</p>}
              {bottomP2 && <p>{bottomP2}</p>}

              {hasBottomDrawer && (
                <>
                  <ReadMoreButton
                    onClick={() => setBottomOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={bottomOpen}
                    className="mt-3 mb-6 font-bold"
                  />
                  <Drawer
                    open={bottomOpen}
                    onClose={() => setBottomOpen(false)}
                    title={bottomDrawerTitle || bottomTitle}
                    side="left"
                  >
                    {bottomDrawerEyebrow && (
                      <p className="text-msi-purple font-bold text-lg leading-snug mb-3">
                        {bottomDrawerEyebrow}
                      </p>
                    )}
                    {bottomDrawerBody}
                  </Drawer>
                </>
              )}

              <ChildDay showButton={!hasBottomDrawer && !hasCustomDrawer} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="md:hidden bg-[#271344] py-[50px]">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid grid-cols-1 gap-0">
            <ScrollReveal direction="up" delay={0.1} className="flex items-center justify-center">
              <div className="rounded-[10px] overflow-hidden relative w-full aspect-[4/3]">
                <Image
                  src="/images/nep/Web_1.png"
                  alt="My School ITALY classroom designed with neuroscience principles"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2} className="pt-[30px] px-2.5 pb-2.5">
              {p1 && (
                <p className="font-lato text-[15px] leading-[27px] text-white text-justify mb-6 w-full">
                  {p1}
                </p>
              )}
              {p2 && (
                <p className="font-lato text-[15px] leading-[27px] text-white text-justify w-full mb-6">
                  {p2}
                </p>
              )}
              {p3 && (
                <p className="font-lato text-[15px] leading-[27px] text-white text-justify w-full mb-6">
                  {p3}
                </p>
              )}
              {hasCustomDrawer ? (
                <>
                  <ReadMoreButton
                    onClick={() => setOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={open}
                    className="mt-2 mb-6 font-bold"
                  />
                  <Drawer
                    open={open}
                    onClose={() => setOpen(false)}
                    title={drawerTitle || title}
                    side="left"
                  >
                    {drawerEyebrow && (
                      <p className="text-msi-purple font-bold text-lg leading-snug mb-3">
                        {drawerEyebrow}
                      </p>
                    )}
                    {drawerBody}
                  </Drawer>
                </>
              ) : shouldShowSettlingIn ? (
                <SettlingInMore />
              ) : null}

              {hasBottomDrawer && (
                <>
                  <ReadMoreButton
                    onClick={() => setBottomOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={bottomOpen}
                    className="mt-3 mb-6 font-bold"
                  />
                  <Drawer
                    open={bottomOpen}
                    onClose={() => setBottomOpen(false)}
                    title={bottomDrawerTitle || bottomTitle}
                    side="left"
                  >
                    {bottomDrawerEyebrow && (
                      <p className="text-msi-purple font-bold text-lg leading-snug mb-3">
                        {bottomDrawerEyebrow}
                      </p>
                    )}
                    {bottomDrawerBody}
                  </Drawer>
                </>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}