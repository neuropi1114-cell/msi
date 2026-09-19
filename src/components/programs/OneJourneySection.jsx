'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function OneJourneySection({
  title = "ONE JOURNEY. MANY POSSIBILITIES.",
  children,
  footerText = "And throughout that journey, the child remains at the centre.",
  imageSrc = "/images/programs/Batch_3_6.png",
  bgImageSrc = "/images/programs/Aperna_6.jpeg",
  imageAlt = "One Journey. Many Possibilities - My School ITALY",
  showBeeIcon = true,
}) {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 relative overflow-hidden bg-white">
      {/* Blurred Background Image Layer */}
      {bgImageSrc && (
        <div className="absolute inset-0 z-0 scale-105 filter blur-xl opacity-20">
          <Image
            src={bgImageSrc}
            alt=""
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Clean White Overlay */}
      <div className="absolute inset-0 z-0 bg-white/70" />

      <div className="container mx-auto px-4 md:px-12 max-w-[1240px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-msi-purple mb-4">
                {title}
              </h2>
            )}

            <div className="mt-5 space-y-4">
              {children || (
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  A child may first enter MSI as a tiny baby.<br />
                  Then become a curious toddler.<br />
                  A storyteller in Nursery.<br />
                  A confident learner in Kindergarten.<br />
                  An explorer in Robotics.<br />
                  A gymnast learning to persist.<br />
                  An artist creating something entirely their own.
                </p>
              )}

              {footerText && (
                <p className="font-semibold text-msi-purple text-base sm:text-lg pt-2 border-t border-gray-100">
                  {footerText}
                </p>
              )}
            </div>

            {showBeeIcon && (
              <div className="mt-4 flex items-center gap-2">
                <img src="/images/gallery/bee.png" alt="" className="w-auto h-5" loading="lazy" />
              </div>
            )}
          </motion.div>

          {/* Right Side: Image Card */}
          {imageSrc && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 h-[350px] sm:h-[420px] lg:h-[480px] w-full relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
