'use client';
import { motion } from 'framer-motion';

const pressImages = [
  { src: '/images/media-coverage/press-01.jpeg', alt: 'Media Coverage 1' },
  { src: '/images/media-coverage/press-02.jpeg', alt: 'Media Coverage 2' },
  { src: '/images/media-coverage/press-03.jpeg', alt: 'Media Coverage 3' },
  { src: '/images/media-coverage/press-04.jpeg', alt: 'Media Coverage 4' },
  { src: '/images/media-coverage/press-05.jpeg', alt: 'Media Coverage 5' },
  { src: '/images/media-coverage/press-06.jpeg', alt: 'Media Coverage 6' },
  { src: '/images/media-coverage/press-07.jpeg', alt: 'Media Coverage 7' },
  { src: '/images/media-coverage/press-08.jpeg', alt: 'Media Coverage 8' },
  { src: '/images/media-coverage/press-09.jpeg', alt: 'Media Coverage 9' },
  { src: '/images/media-coverage/press-10.jpeg', alt: 'Media Coverage 10' },
  { src: '/images/media-coverage/press-11.jpeg', alt: 'Media Coverage 11' },
  { src: '/images/media-coverage/press-12.jpeg', alt: 'Media Coverage 12' },
  { src: '/images/media-coverage/press-13.jpeg', alt: 'Media Coverage 13' },
  { src: '/images/media-coverage/press-14.jpeg', alt: 'Media Coverage 14' },
  { src: '/images/media-coverage/press-15.jpeg', alt: 'Media Coverage 15' },
  { src: '/images/media-coverage/press-16.jpeg', alt: 'Media Coverage 16' },
  { src: '/images/media-coverage/press-17.jpeg', alt: 'Media Coverage 17' },
  { src: '/images/media-coverage/press-18.jpeg', alt: 'Media Coverage 18' },
  { src: '/images/media-coverage/press-19.jpeg', alt: 'Media Coverage 19' },
  { src: '/images/media-coverage/press-20.jpeg', alt: 'Media Coverage 20' },
  { src: '/images/media-coverage/press-21.jpeg', alt: 'Media Coverage 21' },
];

const pressVideos = [
  { title: 'COWE 2019 - TV5', platform: 'vimeo', videoId: '377059236' },
  { title: 'Indoria Samachar', platform: 'vimeo', videoId: '397414440' },
  { title: 'Independence Day Celebrations 2023', platform: 'youtube', videoId: '9AMASl4HNtw' },
  { title: "Women's Day Celebrations - Mom & Kids Fashion Show", platform: 'youtube', videoId: 'WiavfXZ60LE' },
];

function getVideoUrl(video) {
  if (video.platform === 'youtube') {
    return `https://www.youtube.com/embed/${video.videoId}?autoplay=1`;
  }
  return `https://player.vimeo.com/video/${video.videoId}?autoplay=1`;
}

export default function MediaCoveragePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-msi-purple py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-msi-orange rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-msi-blue rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-4 md:px-12 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl text-white font-bold mb-4"
          >
            Media Coverage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg max-w-2xl mx-auto"
          >
            Our journey in the spotlight — press mentions, features, and media recognition.
          </motion.p>
        </div>
      </section>

      {/* Press Images Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-msi-purple font-bold mb-4">
              In The Press
            </h2>
            <div className="w-20 h-1 bg-msi-orange mx-auto rounded-full" />
          </motion.div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {pressImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Press Releases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl text-msi-purple font-bold mb-4">
              Other Press Releases
            </h2>
            <div className="w-20 h-1 bg-msi-orange mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pressVideos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video">
                  <iframe
                    src={getVideoUrl(video)}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-msi-purple">
                    {video.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 capitalize">
                    {video.platform}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
