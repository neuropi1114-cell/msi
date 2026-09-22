'use client';

import React from 'react';
import Image from 'next/image';
import Faq from '../nep/Faq';

export default function FaqSection({
  subheading = "You Have Questions. We Want You to Ask Them.",
  heading = "FREQUENTLY ASKED QUESTIONS",
  description = null,
  showFaq = true,
  imageSrc = "/images/nep/faq-portrait.png",
  imageAlt = "Children learning at My School ITALY",
  imageAspect = "aspect-[3/4]",
  imageClass = "object-cover",
  className = "py-8 md:py-[70px] bg-white relative"
}) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 md:px-12 relative z-10 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="w-full">
            <div className="mb-6 md:mb-10 lg:pr-8">
              {subheading && <h3>{subheading}</h3>}
              {heading && <h2>{heading}</h2>}
              {description && (
                typeof description === 'string' ? (
                  <p className="text-[#464646] font-lato text-[15px] md:text-[17px] leading-relaxed mt-4">{description}</p>
                ) : (
                  description
                )
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
  );
}
