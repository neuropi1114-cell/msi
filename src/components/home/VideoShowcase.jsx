'use client';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 1,
    title: "ASKING FOR VOTE",
    url: "https://vimeo.com/369741702",
  },
  {
    id: 2,
    title: "EUROPEAN BUSINESS AWARDS",
    url: "https://vimeo.com/787866116",
  },
  {
    id: 3,
    title: "INDIA STARTUP - MSME AWARD",
    url: "https://vimeo.com/408861820",
  },
];

function getVimeoId(url) {
  const match = url.match(/vimeo\.com\/(\d+)/);
  return match ? match[1] : '';
}

function VideoCard({ video, index }) {
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
      transition={{ delay: index * 0.2 }}
      className="flex flex-col"
    >
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        {isVisible && (
          <iframe
            src={`https://player.vimeo.com/video/${getVimeoId(video.url)}?badge=0&autopause=0&player_id=0&autoplay=1&muted=1&loop=1`}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; muted"
            allowFullScreen
            title={video.title}
          />
        )}
      </div>
      <h3 className="mt-4 text-center font-bold text-lg tracking-wide text-msi-orange">
        {video.title}
      </h3>
    </motion.div>
  );
}

export default function VideoShowcase() {
  return (
    <section className="py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-schoolbell text-center font-bold mb-12 text-msi-orange"
        >
          FEATURED VIDEOS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
