'use client';
import { motion } from 'framer-motion';

export default function AboutVideo() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            className="w-full h-full"
            src="https://player.vimeo.com/video/710018115?color&autopause=0&loop=0&muted=1&title=1&portrait=1&byline=1"
            title="My School ITALY Video"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
