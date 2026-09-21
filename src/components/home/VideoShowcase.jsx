'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    title: "My School ITALY Little Gymnasts",
    url: "https://player.vimeo.com/video/1227726704?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
  },
  {
    id: 2,
    title: "We Work For A Good World",
    url: "https://vimeo.com/1222446376",
  },
  {
    id: 3,
    title: "Why Is There The Darkness",
    url: "https://www.youtube.com/watch?v=RnjHCxm1Q1E",
  },
];

function getEmbedUrl(url) {
  const youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0&transparent=1`;
  }
  return url;
}

function VideoCard({ video, index, videoTitleColor = "text-msi-orange" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="flex flex-col h-full"
    >
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md bg-white border border-gray-100">
        {isVisible && (
          <iframe
            src={getEmbedUrl(video.url)}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            title={video.title}
          />
        )}
      </div>
      <h3 className={`mt-4 text-center font-bold text-lg tracking-wide not-italic ${videoTitleColor}`}>
        {video.title}
      </h3>
    </motion.div>
  );
}

export default function VideoShowcase({
  eyebrow = null,
  title = "FEATURED VIDEOS",
  videosList = videos,
  showCarousel = true,
  titleColor = "text-msi-orange",
  videoTitleColor = "text-msi-orange",
}) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const scroll = (dir) => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.querySelector('div:first-child')?.offsetWidth || 340;
    const gap = 24;
    const scrollAmount = cardWidth + gap;
    const newScroll = container.scrollLeft + (dir === 'next' ? scrollAmount : -scrollAmount);
    container.scrollTo({ left: newScroll, behavior: 'smooth' });

    const idx = Math.round(newScroll / scrollAmount);
    setCurrent(Math.max(0, Math.min(idx, videosList.length - 1)));
  };

  return (
    <section className="py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-sm md:text-base font-bold text-msi-orange uppercase tracking-wider mb-2"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`text-3xl md:text-4xl text-center font-bold mb-12 uppercase ${titleColor}`}
        >
          {title}
        </motion.h2>

        {showCarousel ? (
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={() => scroll('prev')}
              aria-label="Previous video"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-10 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 1000 1000" fill="currentColor">
                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={() => scroll('next')}
              aria-label="Next video"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-10 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 1000 1000" fill="currentColor">
                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
              </svg>
            </button>

            {/* Carousel Track */}
            <div
              ref={containerRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4 px-2"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {videosList.map((video, index) => (
                <div key={video.id || index} className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] snap-start flex-shrink-0">
                  <VideoCard video={video} index={index} videoTitleColor={videoTitleColor} />
                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 gap-2">
              {videosList.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => {
                    const container = containerRef.current;
                    if (!container) return;
                    const cardWidth = container.querySelector('div:first-child')?.offsetWidth || 340;
                    container.scrollTo({ left: i * (cardWidth + 24), behavior: 'smooth' });
                    setCurrent(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-msi-orange' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videosList.map((video, index) => (
              <div key={video.id || index} className="w-full">
                <VideoCard video={video} index={index} videoTitleColor={videoTitleColor} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
