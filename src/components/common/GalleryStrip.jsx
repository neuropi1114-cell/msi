'use client';

import React from 'react';

const defaultGalleryImages = [
  '/images/nep/gallery-1.webp',
  '/images/nep/gallery-2.webp',
  '/images/nep/gallery-3.webp',
  '/images/nep/gallery-4.webp',
  '/images/nep/gallery-5.webp',
  '/images/nep/gallery-6.webp',
  '/images/nep/gallery-7.webp',
  '/images/nep/gallery-8.webp',
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
