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

function VideoCard({ video, index, videoTitleColor = "text-msi-orange", aspect = "portrait", showVideoTitle = false }) {
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

  const aspectClass =
    aspect === 'portrait' || aspect === 'aspect-[9/16]'
      ? 'aspect-[9/16] w-full max-w-[280px] mx-auto'
      : aspect === 'landscape' || aspect === 'aspect-[16/9]'
      ? 'aspect-[16/9] w-full mx-auto'
      : aspect;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="flex flex-col h-full items-center"
    >
      <div className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden shadow-lg bg-black border border-gray-100`}>
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
      {showVideoTitle && video.title && (
        <h3 className={`mt-3 text-center font-bold text-base md:text-lg tracking-wide not-italic ${videoTitleColor}`}>
          {video.title}
        </h3>
      )}
    </motion.div>
  );
}

export default function VideoShowcase({
  eyebrow = null,
  eyebrowClass = null,
  title = "FEATURED VIDEOS",
  videosList = videos,
  showCarousel = true,
  showVideoTitle = false,
  titleColor = "text-msi-orange",
  videoTitleColor = "text-msi-orange",
  aspect = "portrait",
}) {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const isPortrait = aspect === 'portrait' || aspect === 'aspect-[9/16]';

  const scroll = (dir) => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.querySelector('div:first-child')?.offsetWidth || (isPortrait ? 260 : 340);
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
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-center ${eyebrowClass || " uppercase tracking-wider mb-2"}`}
          >
            {eyebrow}
          </motion.h3>
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
          <div className="relative px-6 md:px-12">
            {/* Previous Button */}
            <button
              onClick={() => scroll('prev')}
              aria-label="Previous video"
              className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 1000 1000" fill="currentColor">
                <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={() => scroll('next')}
              aria-label="Next video"
              className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors border border-gray-100"
            >
              <svg className="w-5 h-5 text-gray-700" viewBox="0 0 1000 1000" fill="currentColor">
                <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
              </svg>
            </button>

            {/* Carousel Track */}
            <div
              ref={containerRef}
              className="flex gap-5 md:gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4 px-2 sm:px-4 justify-start"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {videosList.map((video, index) => (
                <div
                  key={video.id || index}
                  className={`${isPortrait
                    ? 'w-[200px] sm:w-[230px] md:w-[245px] lg:w-[255px]'
                    : 'w-[280px] sm:w-[320px] md:w-[350px] lg:w-[360px]'
                    } snap-start flex-shrink-0`}
                >
                  <VideoCard
                    video={video}
                    index={index}
                    videoTitleColor={videoTitleColor}
                    aspect={aspect}
                    showVideoTitle={showVideoTitle}
                  />
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
                    const cardWidth = container.querySelector('div:first-child')?.offsetWidth || (isPortrait ? 260 : 340);
                    container.scrollTo({ left: i * (cardWidth + 24), behavior: 'smooth' });
                    setCurrent(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-msi-orange' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {videosList.map((video, index) => (
              <div
                key={video.id || index}
                className={
                  aspect === 'landscape' || aspect === 'aspect-[16/9]'
                    ? 'w-full max-w-[350px] sm:max-w-[360px]'
                    : 'w-full max-w-[280px]'
                }
              >
                <VideoCard
                  video={video}
                  index={index}
                  videoTitleColor={videoTitleColor}
                  aspect={aspect}
                  showVideoTitle={showVideoTitle}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
