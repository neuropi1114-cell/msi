'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

function getEmbedUrl(id) {
  return `https://www.youtube.com/embed/${id}?feature=oembed&rel=0&mute=0&loop=0&controls=1&playsinline=0&cc_load_policy=0`;
}

const localThumbnails = {
  vLUZaUrn17o: '/images/videos/video-1.webp',
  u4IyhN68ohc: '/images/videos/video-2.webp',
  pzdVEWwTKHM: '/images/videos/video-3.webp',
  awIBkDlkQxs: '/images/videos/video-4.webp',
  hTEi1WvA28E: '/images/videos/video-5.webp',
  AiNWHm7q3Wk: '/images/videos/video-6.webp',
  '-cDp2zfcRcU': '/images/videos/video-7.webp',
};

function getThumbnail(videoId) {
  return localThumbnails[videoId] || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

function VideoCard({ video, index, onPlay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative group cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white"
      onClick={() => onPlay(video)}
    >
      <div className="relative w-full aspect-video">
        <img src={getThumbnail(video.id)} alt={video.title} className="w-full h-full object-cover" loading="lazy" onError={(e) => { if (e.target.src.includes('hqdefault')) e.target.src = `https://i.ytimg.com/vi/${video.id}/0.jpg`; }} />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
          <svg className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 1000 1000" fill="currentColor">
            <path d="M838 162C746 71 633 25 500 25 371 25 258 71 163 162 71 254 25 367 25 500 25 633 71 746 163 837 254 929 367 979 500 979 633 979 746 933 838 837 929 746 975 633 975 500 975 367 929 254 838 162M808 192C892 279 933 379 933 500 933 621 892 725 808 808 725 892 621 938 500 938 379 938 279 896 196 808 113 725 67 621 67 500 67 379 108 279 196 192 279 108 383 62 500 62 621 62 721 108 808 192M438 392V642L642 517 438 392Z" />
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-center text-msi-orange text-sm uppercase tracking-wide">{video.title}</h3>
      </div>
    </motion.div>
  );
}

function VideoModal({ video, onClose }) {
  if (!video) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute -top-10 right-0 text-white text-lg hover:text-gray-300">Close &times;</button>
        <iframe
          className="w-full h-full rounded-2xl"
          src={getEmbedUrl(video.id)}
          title={video.title || 'Video'}
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

function SectionHeading({ title }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-schoolbell text-center font-bold mb-12 text-msi-orange"
    >
      {title}
    </motion.h2>
  );
}

function VideoSection({ category, onPlay }) {
  return (
    <section className={`py-16 ${category.bg}`}>
      <div className="container mx-auto px-4 md:px-12">
        <SectionHeading title={category.title} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} onPlay={onPlay} />
          ))}
        </div>
      </div>
    </section>
  );
}

const schools = [
  { id: 'lwekHckHeck', title: 'Q-City Branch' },
  { id: 'uAXR0G6-t6I', title: 'Hitex Branch' },
  { id: 'MV6PxQkmluY', title: "OPENING OF NATURE'S LAP" },
];

const events = [
  { id: 'eIDcQ2EEPhs', title: 'METAMORPHOSIS' },
  { id: 'ObS6C8cQd9E', title: 'DANCE FOR THE WORLD OCEAN DAY' },
  { id: 'hkSMePatEPg', title: 'ART FOR THE WORLD OCEAN DAY' },
  { id: 'djLHmDYsAuY', title: 'LITTLE GYMNASTS AT TECH MAHINDRA' },
  { id: '6TsoweeYKoQ', title: 'HALLOWEEN 2019' },
];

const neuroscientific = [
  { id: 'iUDO-BbPIyY', title: 'ROLE PLAY' },
  { id: 'hbxTbWMlYLo', title: 'NEUROSCIENCE STUDY TECHNOLOGY' },
  { id: 'g5hKSEQb96Q', title: 'RITZY LEARNING APP' },
  { id: 'bjFW7Edd-8g', title: 'WHOLE CHILD' },
  { id: 'b_lLBIaOkDc', title: 'MSIK DECANT' },
];

const testimonies = [
  { id: 'AiNWHm7q3Wk', title: 'FATHER OF NEHA' },
  { id: 'hTEi1WvA28E', title: 'FATHER OF YAYAH' },
  { id: 'awIBkDlkQxs', title: 'MOTHER OF ANANYA' },
  { id: '-cDp2zfcRcU', title: 'MOTHER OF DIVYA' },
  { id: 'OJywbhbWYA0', title: 'TECH MAHINDRA OFFICIALS SAY' },
  { id: '9q8r-SotXRo', title: 'TECH MAHINDRA OFFICIALS SAY' },
];

const awards = [
  { id: 'A-NtsxZK_ic', title: 'Asking for Vote EBA' },
  { id: 'BdyDktqjdpY', title: 'Our Awards & Accolades' },
  { id: 'yF_yosN1t0s', title: 'European Business Awards' },
  { id: 'XySHccUU2NY', title: 'India Business Awards' },
];

function OurSchoolsSection({ onPlay }) {
  return (
    <section className="py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        <SectionHeading title="Our Schools" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((v, i) => <VideoCard key={v.id} video={v} index={i} onPlay={onPlay} />)}
        </div>
      </div>
    </section>
  );
}

function EventsSection({ onPlay }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <SectionHeading title="Events & Celebrations" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((v, i) => <VideoCard key={v.id} video={v} index={i} onPlay={onPlay} />)}
        </div>
      </div>
    </section>
  );
}

function NeuroscientificSection({ onPlay }) {
  return (
    <section className="py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        <SectionHeading title="Our Neuroscientific Concept" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {neuroscientific.map((v, i) => <VideoCard key={v.id} video={v} index={i} onPlay={onPlay} />)}
        </div>
      </div>
    </section>
  );
}

function TestimoniesSection({ onPlay }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <SectionHeading title="Parents Testimonies" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonies.map((v, i) => <VideoCard key={v.id} video={v} index={i} onPlay={onPlay} />)}
        </div>
      </div>
    </section>
  );
}

function AwardsSection({ onPlay }) {
  return (
    <section className="py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        <SectionHeading title="Our Awards" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((v, i) => <VideoCard key={v.id} video={v} index={i} onPlay={onPlay} />)}
        </div>
      </div>
    </section>
  );
}

export default function VideoGalleryPage() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <section className="py-20 bg-[#351c5a] relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-schoolbell text-white font-bold mb-6"
          >
            Video Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 text-lg max-w-2xl mx-auto"
          >
            Explore our collection of school videos, events, and media coverage.
          </motion.p>
        </div>
      </section>

      <OurSchoolsSection onPlay={setActiveVideo} />
      <EventsSection onPlay={setActiveVideo} />
      <NeuroscientificSection onPlay={setActiveVideo} />
      <TestimoniesSection onPlay={setActiveVideo} />
      <AwardsSection onPlay={setActiveVideo} />

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  );
}
