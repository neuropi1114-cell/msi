'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function MediaCoverageHero() {
  const stats = [
    { value: 'August 2026', label: 'Latest Cover Story', color: 'text-msi-yellow' },
    { value: '300+', label: 'Corporate Partners', color: 'text-white' },
    { value: '100+', label: 'Global Awards', color: 'text-msi-blue' },
    { value: '21+', label: 'Press Clippings', color: 'text-msi-orange' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#271344] via-[#351c5a] to-[#1e0f33] py-20 md:py-28 text-white overflow-hidden">
      {/* Decorative Blur Spheres */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-msi-orange rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-msi-blue rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-msi-yellow mb-6"
        >
          <Sparkles className="w-4 h-4 text-msi-yellow" />
          Press &amp; Media Recognition
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-fredoka leading-tight"
        >
          Media Coverage &amp; Timeline
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/85 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Explore our journey in the global spotlight — from national business magazine cover stories to international leadership conclaves, broadcasts, and print press features.
        </motion.p>

        {/* Quick Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/15"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
            >
              <div className={`text-2xl md:text-3xl font-extrabold ${stat.color} font-fredoka`}>
                {stat.value}
              </div>
              <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
