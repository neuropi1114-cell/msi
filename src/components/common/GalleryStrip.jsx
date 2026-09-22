'use client';

import React from 'react';

const defaultGalleryImages = [
  '/images/growing-in-confidence/img-01.png',
  '/images/programs/Programs_2_1.png',
  '/images/growing-in-confidence/img-03.png',
  '/images/programs/Aperna_5.png',
  '/images/growing-in-confidence/img-05.png',
  '/images/programs/Programs_4.png',
  '/images/growing-in-confidence/img-07.png',
  '/images/programs/Batch_3_6.png',
  '/images/growing-in-confidence/img-09.png',
  '/images/nep/The_NeuroPi_Way_2.png',
  '/images/growing-in-confidence/img-11.png',
  '/images/programs/Aperna_24.png',
];

export default function GalleryStrip({ images = defaultGalleryImages }) {
  const displayImages = images && images.length > 0 ? images : defaultGalleryImages;

  return (
    <section className="py-6 overflow-hidden" style={{ backgroundColor: '#159ED9' }}>
      <div className="w-full flex overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap items-center shrink-0">
          {displayImages.map((img, i) => (
            <div
              key={`img-1-${i}`}
              className="inline-block mx-2 shrink-0 w-48 sm:w-56 md:w-64 aspect-[4/3] rounded-[10px] overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt={`My School ITALY campus gallery ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="animate-marquee flex whitespace-nowrap items-center shrink-0" aria-hidden="true">
          {displayImages.map((img, i) => (
            <div
              key={`img-2-${i}`}
              className="inline-block mx-2 shrink-0 w-48 sm:w-56 md:w-64 aspect-[4/3] rounded-[10px] overflow-hidden shadow-md"
            >
              <img
                src={img}
                alt={`My School ITALY campus gallery ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
