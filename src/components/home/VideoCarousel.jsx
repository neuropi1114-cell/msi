'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const defaultVideos = [
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
  videoList = null,
}) {
  const videos = videoList || defaultVideos;
  const [activeVideo, setActiveVideo] = useState(null);
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const scroll = (dir) => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.querySelector('.carousel-card-item')?.offsetWidth || 260;
    const gap = 20;
    const scrollAmount = cardWidth + gap;
    const newScroll = container.scrollLeft + (dir === 'next' ? scrollAmount : -scrollAmount);
    container.scrollTo({ left: newScroll, behavior: 'smooth' });

    const idx = Math.round(newScroll / scrollAmount);
    setCurrent(Math.max(0, Math.min(idx, videos.length - 1)));
  };

  return (
    <section className={`py-12 md:py-16 bg-[#f7f9fc] ${className}`}>
      <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
        {(eyebrow || title) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            {eyebrow && <h3 className="">{eyebrow}</h3>}
            {title && <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>}
          </motion.div>
        )}

        <div className="relative">
          <button
            onClick={() => scroll('prev')}
            aria-label="Previous video"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-20 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 border border-gray-100 transition-all"
          >
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 1000 1000" fill="currentColor">
              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
            </svg>
          </button>
          <button
            onClick={() => scroll('next')}
            aria-label="Next video"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-20 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 border border-gray-100 transition-all"
          >
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 1000 1000" fill="currentColor">
              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
            </svg>
          </button>

          <div
            ref={containerRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {videos.map((video, idx) => {
              const isPortrait = video.aspect === 'portrait' || video.isReel;
              return (
                <div
                  key={video.id || idx}
                  className={`carousel-card-item snap-start flex-shrink-0 ${isPortrait
                    ? "w-[220px] sm:w-[250px] md:w-[260px]"
                    : "w-[280px] sm:w-[320px] md:w-[340px]"
                    }`}
                >
                  <div
                    onClick={() => setActiveVideo(video)}
                    className={`bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 flex flex-col ${isPortrait ? "h-[390px] md:h-[430px]" : "h-[250px] md:h-[280px]"
                      }`}
                  >
                    <div className="relative flex-1 w-full overflow-hidden bg-gray-900">
                      {video.src ? (
                        <video
                          src={video.src}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <img
                          src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                          alt={video.title || 'School video'}
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white shadow-md group-hover:bg-[#d16827] transition-colors">
                        <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    <div className="p-3 text-center bg-white border-t border-gray-100 flex items-center justify-center min-h-[54px] max-h-[54px]">
                      <h3 className="text-msi-purple text-xs md:text-sm font-bold leading-tight uppercase line-clamp-2">
                        {video.title}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => {
                  const container = containerRef.current;
                  if (!container) return;
                  const cardWidth = container.querySelector('.carousel-card-item')?.offsetWidth || 260;
                  container.scrollTo({ left: i * (cardWidth + 20), behavior: 'smooth' });
                  setCurrent(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#d16827]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {activeVideo && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
            onClick={() => setActiveVideo(null)}
          >
            <div
              className={`relative w-full ${activeVideo.aspect === 'portrait' || activeVideo.isReel
                ? 'max-w-[340px] sm:max-w-[380px] aspect-[9/16] max-h-[85vh]'
                : 'max-w-4xl aspect-video'
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-10 right-0 text-white text-base hover:text-gray-300 font-bold bg-black/40 px-3 py-1 rounded-full border border-white/20"
              >
                Close &times;
              </button>
              {activeVideo.src ? (
                <video
                  src={activeVideo.src}
                  controls
                  autoPlay
                  className="w-full h-full rounded-2xl object-cover bg-black shadow-2xl"
                />
              ) : (
                <iframe
                  className="w-full h-full rounded-2xl shadow-2xl"
                  src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&controls=1`}
                  title={activeVideo.title || 'School video'}
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
