'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function EarlyLearningSection({
  title = "Early Learning for Babies",
  subtitle = "WHY THE FIRST 2,000 DAYS MATTER",
  subtitleColor = "text-msi-yellow",
  p1 = "The period from pregnancy through roughly the first five years is a foundational stage for brain development, relationships, language, movement, emotional regulation and learning.",
  p2 = null,
  imageSrc = null,
  bgImage = null,
  cardPosition = "center",
  cardBgClass = "bg-white/30 backdrop-blur-md border border-white/50 shadow-xl",
  imageAlt = "Early learning for babies",
  className = "py-16 md:py-20 bg-white",
}) {
  const positionClass =
    cardPosition === "center"
      ? "justify-center"
      : cardPosition === "start"
      ? "justify-start"
      : "justify-end";

  if (bgImage) {
    return (
      <section
        className="relative pt-36 md:pt-60 lg:pt-72 pb-10 md:pb-16 min-h-[550px] md:min-h-[700px] lg:min-h-[800px] flex items-end bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="container mx-auto px-4 md:px-12 max-w-6xl relative z-10">
          <div className={`flex ${positionClass}`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`p-6 md:p-8 rounded-2xl max-w-xl text-center md:text-left ${cardBgClass}`}
            >
              {title && <h2 className="text-3xl md:text-4xl text-msi-purple font-bold mb-4 drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">{title}</h2>}
              {subtitle && <p className={`${subtitleColor} font-extrabold text-xl md:text-2xl mb-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)]`}>{subtitle}</p>}
              {p1 && <p className="text-gray-900 font-medium leading-relaxed mb-2 drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">{p1}</p>}
              {p2 && <p className="text-gray-900 font-medium leading-relaxed drop-shadow-[0_1px_2px_rgba(255,255,255,0.9)]">{p2}</p>}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 md:px-12 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
            {subtitle && <p className={`${subtitleColor} font-extrabold text-xl md:text-2xl mb-4`}>{subtitle}</p>}
            {p1 && <p className="text-gray-600 leading-relaxed mb-2">{p1}</p>}
            {p2 && <p className="text-gray-600 leading-relaxed">{p2}</p>}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
