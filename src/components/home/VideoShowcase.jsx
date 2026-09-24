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

function getEmbedUrl(video, autoplay = false) {
  if (!video) return '';
  const url = video.url || '';
  const videoId = video.id && typeof video.id === 'string' && video.id.length > 5 ? video.id : '';

  if (url) {
    const youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=${autoplay ? 1 : 0}&rel=0`;
    }
    const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0&transparent=1&autoplay=${autoplay ? 1 : 0}`;
    }
    return url;
  }

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=${autoplay ? 1 : 0}&rel=0`;
  }

  return '';
}

function getThumbnail(video) {
  if (!video) return null;
  if (video.thumbnail) return video.thumbnail;

  const url = video.url || '';
  if (url) {
    const youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
    if (youtubeMatch) {
      return `https://img.youtube.com/vi/${youtubeMatch[1]}/hqdefault.jpg`;
    }
    const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vimeoMatch) {
      return `https://vumbnail.com/${vimeoMatch[1]}.jpg`;
    }
  }

  if (video.id && typeof video.id === 'string' && video.id.length > 5) {
    return `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
  }

  return null;
}

export function VideoModal({ video, aspect = "portrait", onClose }) {
  if (!video) return null;

  const isPortrait = aspect === 'portrait' || aspect === 'aspect-[9/16]' || video.aspect === 'portrait' || video.isReel;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={`relative w-full ${
          isPortrait
            ? 'max-w-[340px] sm:max-w-[380px] aspect-[9/16] max-h-[85vh]'
            : 'max-w-4xl aspect-video'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-11 right-0 text-white hover:text-msi-orange font-bold text-sm sm:text-base bg-black/60 hover:bg-black px-3.5 py-1 rounded-full border border-white/20 transition-colors flex items-center gap-1 shadow-lg"
        >
          <span>Close</span>
          <span className="text-lg leading-none">&times;</span>
        </button>

        {video.src ? (
          <video
            src={video.src}
            controls
            autoPlay
            className="w-full h-full rounded-2xl shadow-2xl object-cover bg-black border border-white/10"
          />
        ) : (
          <iframe
            className="w-full h-full rounded-2xl shadow-2xl border border-white/10"
            src={getEmbedUrl(video, true)}
            title={video.title || 'Video player'}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}

export function VideoCard({ video, index, videoTitleColor = "text-msi-orange", aspect = "portrait", showVideoTitle = false, onPlay = null }) {
  const ref = useRef(null);
  const [localPlaying, setLocalPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  const aspectClass =
    aspect === 'portrait' || aspect === 'aspect-[9/16]'
      ? 'aspect-[9/16] w-full max-w-[280px] mx-auto'
      : aspect === 'landscape' || aspect === 'aspect-[16/9]'
      ? 'aspect-[16/9] w-full mx-auto'
      : aspect;

  const thumbnail = getThumbnail(video);

  const handleCardClick = () => {
    if (onPlay) {
      onPlay(video);
    } else {
      setLocalPlaying(true);
    }
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex flex-col h-full items-center"
      >
        <div
          className={`relative w-full ${aspectClass} rounded-2xl overflow-hidden shadow-lg bg-black border border-gray-100 cursor-pointer group`}
          onClick={handleCardClick}
        >
          {thumbnail && !imgError ? (
            <img
              src={thumbnail}
              alt={video.title || 'Video preview'}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : video.src ? (
            <video
              src={video.src}
              preload="metadata"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-4">
              <span className="text-white/70 text-xs text-center font-medium">{video.title}</span>
            </div>
          )}

          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-msi-orange/90 text-white flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:bg-msi-orange transition-all duration-300">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current ml-1" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {showVideoTitle && video.title && (
          <h3 className={`mt-3 text-center font-bold text-base md:text-lg tracking-wide not-italic ${videoTitleColor}`}>
            {video.title}
          </h3>
        )}
      </motion.div>

      {!onPlay && localPlaying && (
        <VideoModal video={video} aspect={aspect} onClose={() => setLocalPlaying(false)} />
      )}
    </>
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
  const [activeVideo, setActiveVideo] = useState(null);
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
          className="text-center mb-12"
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
                    onPlay={(v) => setActiveVideo(v)}
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
                  onPlay={(v) => setActiveVideo(v)}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {activeVideo && (
        <VideoModal
          video={activeVideo}
          aspect={aspect}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}

