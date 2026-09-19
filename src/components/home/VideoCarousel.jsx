'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const videos = [
  { id: 'AiNWHm7q3Wk', title: 'FATHER OF NEHA', thumbnail: '/images/videos/video-6.webp' },
  { id: 'hTEi1WvA28E', title: 'FATHER OF YAYAH', thumbnail: '/images/videos/video-5.webp' },
  { id: 'awIBkDlkQxs', title: 'MOTHER OF ANANYA', thumbnail: '/images/videos/video-4.webp' },
  { id: '-cDp2zfcRcU', title: 'MOTHER OF DIVYA', thumbnail: '/images/videos/video-7.webp' },
  { id: 'OJywbhbWYA0', title: 'TECH MAHINDRA OFFICIALS SAY', thumbnail: '/images/videos/OJywbhbWYA0.jpg' },
  { id: '9q8r-SotXRo', title: 'TECH MAHINDRA OFFICIALS SAY', thumbnail: '/images/videos/9q8r-SotXRo.jpg' },
];

export default function VideoCarousel({
  eyebrow = '',
  title = 'School Videos',
  className = '',
}) {
  const [activeVideo, setActiveVideo] = useState(null);
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const scroll = (dir) => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.querySelector('div:first-child')?.offsetWidth || 320;
    const gap = 16;
    const scrollAmount = cardWidth + gap;
    const newScroll = container.scrollLeft + (dir === 'next' ? scrollAmount : -scrollAmount);
    container.scrollTo({ left: newScroll, behavior: 'smooth' });

    const idx = Math.round(newScroll / scrollAmount);
    setCurrent(Math.max(0, Math.min(idx, videos.length - 1)));
  };

  return (
    <section className={`pt-20 pb-6 bg-[#f7f9fc] ${className}`}>
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          {eyebrow && <h3>{eyebrow}</h3>}
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
        </motion.div>

        <div className="relative">
          <button
            onClick={() => scroll('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 1000 1000" fill="currentColor">
              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
            </svg>
          </button>
          <button
            onClick={() => scroll('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 1000 1000" fill="currentColor">
              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
            </svg>
          </button>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video) => (
              <div key={video.id} className="min-w-[280px] md:min-w-[340px] snap-start">
                <div
                  onClick={() => setActiveVideo(video.id)}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title || 'School video'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-sm flex items-center justify-center text-white shadow-sm group-hover:bg-[#d16827] transition-colors">
                      <svg className="w-3.5 h-3.5 fill-current ml-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-msi-purple text-sm md:text-base font-bold not-italic">{video.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const container = containerRef.current;
                  if (!container) return;
                  const cardWidth = container.querySelector('div:first-child')?.offsetWidth || 320;
                  container.scrollTo({ left: i * (cardWidth + 24), behavior: 'smooth' });
                  setCurrent(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#d16827]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className="relative w-full max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white text-lg hover:text-gray-300"
              >
                Close &times;
              </button>
              <iframe
                className="w-full h-full rounded-2xl"
                src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&controls=1`}
                title="School video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
