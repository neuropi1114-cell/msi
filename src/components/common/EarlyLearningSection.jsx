'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EarlyLearningSection({
  title = "Early Learning for Babies",
  subtitle = "WHY THE FIRST 2,000 DAYS MATTER",
  p1 = "The period from pregnancy through roughly the first five years is a foundational stage for brain development, relationships, language, movement, emotional regulation and learning.",
  p2 = null,
  imageSrc = null,
  imageAlt = "Early learning for babies",
  className = "py-16 md:py-20 bg-white",
}) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className={`grid grid-cols-1 ${imageSrc ? 'md:grid-cols-2' : 'md:grid-cols-2'} gap-10 items-center`}>
          {imageSrc ? (
            <div className="overflow-hidden relative h-72 md:h-96 rounded-2xl shadow-lg">
              <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
            </div>
          ) : (
            <div className="hidden md:block" />
          )}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {title && <h2 className="text-3xl md:text-4xl text-msi-purple font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-msi-orange font-semibold text-lg mb-4">{subtitle}</p>}
            {p1 && <p className="text-gray-600 leading-relaxed mb-2">{p1}</p>}
            {p2 && <p className="text-gray-600 leading-relaxed">{p2}</p>}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
