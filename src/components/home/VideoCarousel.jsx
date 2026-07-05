'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const videos = [
  { id: 'vLUZaUrn17o', thumbnail: '/images/videos/video-1.webp' },
  { id: 'u4IyhN68ohc', thumbnail: '/images/videos/video-2.webp' },
  { id: 'pzdVEWwTKHM', thumbnail: '/images/videos/video-3.webp' },
  { id: 'awIBkDlkQxs', thumbnail: '/images/videos/video-4.webp' },
  { id: 'hTEi1WvA28E', thumbnail: '/images/videos/video-5.webp' },
  { id: 'AiNWHm7q3Wk', thumbnail: '/images/videos/video-6.webp' },
  { id: '-cDp2zfcRcU', thumbnail: '/images/videos/video-7.webp' },
];

export default function VideoCarousel() {
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
    <section className="py-20 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14"
          style={{ color: '#E1872B' }}
        >
          School Videos
        </motion.h2>

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
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, i) => (
              <div
                key={video.id}
                className="min-w-[280px] sm:min-w-[320px] snap-start"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg"
                  onClick={() => setActiveVideo(video.id)}
                >
                  <img
                    src={video.thumbnail}
                    alt={`Video ${i + 1}`}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <svg className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 1000 1000" fill="currentColor">
                      <path d="M838 162C746 71 633 25 500 25 371 25 258 71 163 162 71 254 25 367 25 500 25 633 71 746 163 837 254 929 367 979 500 979 633 979 746 933 838 837 929 746 975 633 975 500 975 367 929 254 838 162M808 192C892 279 933 379 933 500 933 621 892 725 808 808 725 892 621 938 500 938 379 938 279 896 196 808 113 725 67 621 67 500 67 379 108 279 196 192 279 108 383 62 500 62 621 62 721 108 808 192M438 392V642L642 517 438 392Z" />
                    </svg>
                  </div>
                </motion.div>
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
                  container.scrollTo({ left: i * (cardWidth + 16), behavior: 'smooth' });
                  setCurrent(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#E1872B]' : 'bg-gray-300'}`}
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
