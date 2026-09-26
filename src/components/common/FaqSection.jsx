'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Faq from '../nep/Faq';
import ReadMoreButton from './ReadMoreButton';
import Drawer from '../layout/Drawer';

export default function FaqSection({
  subheading = "You Have Questions. We Want You to Ask Them.",
  subheadingClass = null,
  heading = "FREQUENTLY ASKED QUESTIONS",
  description = null,
  showFaq = true,
  imageSrc = "/images/nep/faq-portrait.png",
  imageAlt = "Children learning at My School ITALY",
  imageAspect = "aspect-[3/4]",
  imageClass = "object-cover",
  className = "py-8 md:py-[70px] bg-white relative",
  showReadMore = false,
  readMoreText = "Read More",
  readMoreBgColor = "bg-msi-orange hover:bg-msi-orange/90",
  readMoreClassName = "",
  readMoreDrawerTitle = null,
  readMoreDrawerBody = null,
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className={className}>
        <div className="container mx-auto px-4 md:px-12 relative z-10 max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="w-full">
              <div className="mb-6 md:mb-10 lg:pr-8">
                {subheading && <h3 className={subheadingClass || undefined}>{subheading}</h3>}
                {heading && <h2>{heading}</h2>}
                {description && (
                  typeof description === 'string' ? (
                    <p className="text-[#464646] font-lato text-[15px] md:text-[17px] leading-relaxed mt-4">{description}</p>
                  ) : (
                    description
                  )
                )}
                {showReadMore && (
                  <div className="mt-6">
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
              {showFaq && <Faq />}
            </div>
            <div className="flex items-center justify-center w-full">
              <div className={`rounded-[12px] overflow-hidden relative ${imageAspect} max-w-[500px] w-full shadow-xl`}>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className={imageClass}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {showReadMore && (
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title={readMoreDrawerTitle || heading}
          side="left"
        >
          {readMoreDrawerBody}
        </Drawer>
      )}
    </>
  );
}
