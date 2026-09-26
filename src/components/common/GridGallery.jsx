'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react';

const defaultImages = [
  // Page 1 (3x2 = 6 images)
  { src: '/images/hitex/HITEX_1.png', alt: 'My School ITALY HITEX Campus Banner' },
  { src: '/images/hitex/Hitex_2.png', alt: 'Children learning and playing at MSI HITEX' },
  { src: '/images/hitex/Hitex_3.png', alt: 'Activity room at My School ITALY HITEX' },
  { src: '/images/hitex/Hitex_4.png', alt: 'NeuroPi classroom environment' },
  { src: '/images/hitex/Hitex_5.png', alt: 'Parent-child journey at MSI HITEX' },
  { src: '/images/hitex/Hitex_6.png', alt: 'Corporate childcare facilities at HITEX' },

  // Page 2 (3x2 = 6 images)
  { src: '/images/hitex/Hitex_7.png', alt: 'Near-campus learning and play space' },
  { src: '/images/whyus/Why_MSI_1.png', alt: 'European early years learning approach' },
  { src: '/images/whyus/Why_MSI_2.png', alt: 'Story-based learning and discovery' },
  { src: '/images/whyus/Why_MSI_3.png', alt: 'Creative arts and expressive learning' },
  { src: '/images/whyus/Why_MSI_4.png', alt: 'Gymnastics and motor skills development' },
  { src: '/images/whyus/Why_MSI_5.png', alt: 'Toddler crèche and daycare activities' },

  // Page 3 (3x2 = 6 images)
  { src: '/images/whyus/Why_MSI_6.png', alt: 'Caring educators and child guidance' },
  { src: '/images/whyus/Why_MSI_Enrol.png', alt: 'School tour and onboarding at MSI' },
  { src: '/images/gallery/gallery-1.png', alt: 'Morning circle time and storytelling' },
  { src: '/images/gallery/gallery-2.png', alt: 'Hands-on sensory and science play' },
  { src: '/images/gallery/gallery-3.png', alt: 'Outdoor play area and nature walk' },
  { src: '/images/gallery/gallery-4.png', alt: 'Building blocks and spatial learning' },

  // Page 4 (3x2 = 6 images)
  { src: '/images/gallery/gallery-5.png', alt: 'Quiet reading and reflection corner' },
  { src: '/images/gallery/gallery-6.png', alt: 'Group collaboration and social play' },
  { src: '/images/gallery/gallery-7.png', alt: 'Creative painting and craft sessions' },
  { src: '/images/gallery/gallery-8.png', alt: 'Music, dance and rhythm movement' },
  { src: '/images/corporatechildcare/Corporate_Childcare_1.png', alt: 'Workplace childcare partnership' },
  { src: '/images/corporatechildcare/Corporate_Childcare_2.jpeg', alt: 'Nurturing daycare environment' },
];

export default function GridGallery({
  images = defaultImages,
  title = "LIFE AT MSI HITEX",
  eyebrow = "Glimpses of Everyday Learning & Growth",
  className = "py-16 md:py-24 bg-[#f8fafc]",
}) {
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Group images into pages of 6 (3x2 grid)
  const pageSize = 6;
  const pagesCount = Math.ceil(images.length / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, i) =>
    images.slice(i * pageSize, (i + 1) * pageSize)
  );

  const scrollToPage = (pageIndex) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const pageWidth = container.clientWidth;
    container.scrollTo({
      left: pageIndex * pageWidth,
      behavior: 'smooth',
    });
    setCurrentPage(pageIndex);
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const pageIndex = Math.round(container.scrollLeft / container.clientWidth);
    if (pageIndex !== currentPage && pageIndex >= 0 && pageIndex < pagesCount) {
      setCurrentPage(pageIndex);
    }
  };

  return (
    <section className={className}>
      <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-12 gap-4">
          <div>
            {eyebrow && (
              <h3 className="italic font-lato text-msi-blue text-base md:text-lg mb-1">
                {eyebrow}
              </h3>
            )}
            {title && (
              <h2 className="text-msi-orange font-linotte font-bold text-2xl md:text-3xl uppercase leading-tight">
                {title}
              </h2>
            )}
          </div>

          {/* Navigation Controls */}
          {pagesCount > 1 && (
            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="text-xs sm:text-sm font-bold text-gray-500 mr-2">
                Grid {currentPage + 1} of {pagesCount}
              </span>
              <button
                type="button"
                onClick={() => scrollToPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
                aria-label="Previous Grid Page"
                className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-msi-purple disabled:opacity-30 disabled:cursor-not-allowed hover:bg-msi-orange hover:text-white hover:border-msi-orange transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollToPage(Math.min(pagesCount - 1, currentPage + 1))}
                disabled={currentPage === pagesCount - 1}
                aria-label="Next Grid Page"
                className="w-10 h-10 rounded-full bg-white shadow-md border border-gray-200 flex items-center justify-center text-msi-purple disabled:opacity-30 disabled:cursor-not-allowed hover:bg-msi-orange hover:text-white hover:border-msi-orange transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>

        {/* Scrollable Container holding 3x2 Grids */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none rounded-2xl -mx-2 p-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pages.map((pageImages, pageIdx) => (
            <div
              key={pageIdx}
              className="w-full shrink-0 snap-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
            >
              {pageImages.map((img, imgIdx) => (
                <div
                  key={imgIdx}
                  onClick={() => setLightboxImage(img)}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-200/80"
                >
                  <Image
                    src={img.src}
                    alt={img.alt || `MSI Gallery Image ${pageIdx * pageSize + imgIdx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Gradient overlay & zoom icon on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-msi-purple/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-white font-linotte font-semibold text-xs sm:text-sm line-clamp-1 drop-shadow-sm">
                      {img.alt}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white/90 text-msi-orange flex items-center justify-center shrink-0 shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        {pagesCount > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {pages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => scrollToPage(idx)}
                aria-label={`Go to Grid Page ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === idx
                    ? 'w-8 bg-msi-orange shadow-sm'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-5xl w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-msi-orange flex items-center justify-center shadow-lg transition-colors border border-white/20"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt || "MSI Gallery Preview"}
              fill
              className="object-contain"
            />
            {lightboxImage.alt && (
              <div className="absolute bottom-0 inset-x-0 bg-black/70 p-4 text-center text-white font-linotte font-semibold text-sm sm:text-base">
                {lightboxImage.alt}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
