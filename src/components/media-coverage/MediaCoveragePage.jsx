'use client';

import React, { useState, useMemo } from 'react';
import MediaCoverageHero from './MediaCoverageHero';
import MediaFilterTabs from './MediaFilterTabs';
import MediaTimelineItem from './MediaTimelineItem';
import MediaPressArchive from './MediaPressArchive';
import MediaImageLightbox from './MediaImageLightbox';
import {
  timelineEvents,
  pressImages,
  filterTabs,
} from './mediaCoverageData';

export default function MediaCoveragePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredTimeline = useMemo(() => {
    if (activeFilter === 'all') return timelineEvents;
    if (activeFilter === 'neuropi') return timelineEvents.filter((item) => item.isNeuroPi);
    if (activeFilter === '2026') return timelineEvents.filter((item) => item.year === '2026');
    if (activeFilter === '2025') return timelineEvents.filter((item) => item.year === '2025');
    if (activeFilter === '2023') return timelineEvents.filter((item) => item.year === '2023');
    if (activeFilter === '2019') return timelineEvents.filter((item) => item.year === '2019');
    return [];
  }, [activeFilter]);

  return (
    <>
      {/* Hero Section */}
      <MediaCoverageHero />

      <div data-nav-sentinel />

      {/* Filter / Timeline Tabs */}
      <MediaFilterTabs
        tabs={filterTabs}
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />

      {/* Chronological Timeline Section */}
      {activeFilter !== 'clippings' && (
        <section className="py-16 md:py-24 bg-[#fbfbfd]">
          <div className="container mx-auto px-4 md:px-12 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm uppercase tracking-wider text-msi-orange font-bold font-fredoka">
                Milestones &amp; Media Releases
              </span>
              <h2 className="text-3xl md:text-4xl text-msi-purple font-bold mt-2 font-fredoka">
                Chronological Media Timeline
              </h2>
              <div className="w-16 h-1 bg-msi-orange mx-auto rounded-full mt-4" />
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative">
              {/* Central Line for desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

              <div className="space-y-12 lg:space-y-16">
                {filteredTimeline.map((item, index) => (
                  <MediaTimelineItem
                    key={item.id}
                    item={item}
                    index={index}
                    onSelectImage={setSelectedImage}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Press Clippings Masonry Section */}
      <MediaPressArchive
        images={pressImages}
        onSelectImage={setSelectedImage}
      />

      {/* Lightbox Modal for Full Image Inspection */}
      <MediaImageLightbox
        selectedImage={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
