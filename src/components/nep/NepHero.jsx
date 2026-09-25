'use client';

import React, { useState } from 'react';
import ReadMoreButton from '../common/ReadMoreButton';
import Drawer from '../layout/Drawer';

export default function NepHero({
  eyebrow = null,
  title = "ABOUT NEUROPI CHILDREN",
  titleColor = null,
  description = "Once upon a time, in the world of NeuroPi, every child was seen as a tiny universe - full of dreams, neurons, and sparkles of curiosity. Their laughter wasn't just joy - it was learning in motion, connecting the brain and heart in beautiful harmony. Each child here grows at their own rhythm, blooming in colours of confidence, calm, and creativity. We don't rush them toward the future - we walk beside them as they discover it. In every classroom, magic and science hold hands. Mindful play becomes their compass; empathy becomes their light. They learn to breathe before they speak, to listen before they lead, and to care before they conquer. Every giggle builds a pathway, every question unlocks a possibility, and every hug strengthens the science of love. At NeuroPi, children don't just learn - they awaken. Because here, childhood isn't a race... it's a beautiful unfolding of brilliance.",
  bgImage = "/images/nep/hero-classroom.webp",
  bgPosition = "bg-cover bg-center",
  boxBgClass = "bg-msi-blue",
  flipBg = false,
  showReadMore = true,
  readMoreText = "Read More",
  readMoreBgColor = "bg-msi-orange hover:bg-msi-orange/90",
  readMoreDrawerTitle = null,
  readMoreDrawerBody = null,
  readMoreClassName = "",
  cardClass = "",
}) {
  const [open, setOpen] = useState(false);

  const defaultDrawerBody = (
    <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
      <p className="font-bold text-msi-purple text-lg">
        The NeuroPi World of Childhood
      </p>
      <p>
        Once upon a time, in the world of NeuroPi, every child was seen as a tiny universe - full of dreams, neurons, and sparkles of curiosity. Their laughter wasn&apos;t just joy - it was learning in motion, connecting the brain and heart in beautiful harmony.
      </p>
      <p>
        Each child here grows at their own rhythm, blooming in colours of confidence, calm, and creativity. We don&apos;t rush them toward the future - we walk beside them as they discover it.
      </p>
      <p>
        In every classroom, magic and science hold hands. Mindful play becomes their compass; empathy becomes their light. They learn to breathe before they speak, to listen before they lead, and to care before they conquer.
      </p>
      <p>
        Every giggle builds a pathway, every question unlocks a possibility, and every hug strengthens the science of love. At NeuroPi, children don&apos;t just learn - they awaken. Because here, childhood isn&apos;t a race... it&apos;s a beautiful unfolding of brilliance.
      </p>
      <p className="font-semibold text-msi-blue pt-3 border-t border-gray-100">
        We do not believe every child should develop in exactly the same way or at exactly the same pace. We meet the child where they are &mdash; and help them grow from there.
      </p>
    </div>
  );

  return (
    <>
      <section className="relative flex items-center min-h-[450px] md:min-h-[550px] lg:min-h-[600px] py-12 md:py-16 overflow-hidden">
        <div
          className={`absolute inset-0 ${bgPosition} ${flipBg ? '[transform:scaleX(-1)]' : ''}`}
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="container mx-auto px-4 md:px-12 w-full relative z-10">
          <div
            className={`w-full md:w-[50%] lg:w-[45%] max-w-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl ${boxBgClass} ${cardClass}`}
          >
            {eyebrow && <h3 style={{ color: '#FCF9F4' }}>{eyebrow}</h3>}
            <h2 className={titleColor ? titleColor : ''}>{title}</h2>
            {typeof description === 'string' ? (
              <p>{description}</p>
            ) : (
              <div>{description}</div>
            )}

            {showReadMore && (
              <div className="pt-2">
                <ReadMoreButton
                  onClick={() => setOpen(true)}
                  text={readMoreText}
                  bgColor={readMoreBgColor}
                  className={`font-bold shadow-md ${readMoreClassName}`}
                  aria-haspopup="dialog"
                  aria-expanded={open}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {showReadMore && (
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title={readMoreDrawerTitle || title}
          side="left"
        >
          {readMoreDrawerBody || defaultDrawerBody}
        </Drawer>
      )}
    </>
  );
}