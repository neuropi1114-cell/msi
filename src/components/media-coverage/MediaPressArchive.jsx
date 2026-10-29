'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Maximize2 } from 'lucide-react';

export default function MediaPressArchive({ images, onSelectImage }) {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-msi-orange/10 text-msi-orange text-xs font-bold uppercase tracking-wider mb-3">
            <Newspaper className="w-3.5 h-3.5" />
            Print Media Archive
          </div>
          <h2 className="text-3xl md:text-4xl text-msi-purple font-bold font-fredoka">
            Historical Newspaper &amp; Press Clippings
          </h2>
          <div className="w-16 h-1 bg-msi-orange mx-auto rounded-full mt-4 mb-4" />
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            A preserved collection of 21+ original newspaper features, regional coverage, launch milestones, and educational leadership publications documenting our journey.
          </p>
        </div>

        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-50"
              onClick={() => onSelectImage(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white">
                <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                  <Maximize2 className="w-3.5 h-3.5" />
                  View Clipping
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
