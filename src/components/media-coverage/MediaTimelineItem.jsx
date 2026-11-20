'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Calendar,
  ExternalLink,
  Share2,
  Maximize2,
  CheckCircle2,
  Brain,
} from 'lucide-react';
import {
  getPlatformIcon,
  PartnershipFlags,
  getVideoUrl,
} from './mediaCoverageData';

export default function MediaTimelineItem({ item, index, onSelectImage }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: 0.05 }}
      className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
    >
      {/* Timeline Year Marker on Central Line (Desktop) */}
      <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-white border-4 border-msi-purple shadow-md flex items-center justify-center font-bold text-xs text-msi-purple">
          {item.year}
        </div>
      </div>

      {/* Content Card */}
      <div
        className={`bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 ${
          isEven ? 'lg:order-1 lg:mr-8' : 'lg:order-2 lg:ml-8'
        }`}
      >
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span
              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}
            >
              {item.category}
            </span>
            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-400" />
              {item.date}
            </span>
          </div>
          <span className="text-xs font-semibold text-gray-600 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
            {item.source}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl md:text-2xl font-bold text-msi-purple leading-snug mb-2 font-fredoka flex flex-wrap items-center">
          <span>{item.title}</span>
          {item.showPartnershipFlags && <PartnershipFlags />}
        </h3>

        {item.subtitle && (
          <p className="text-xs md:text-sm font-semibold text-msi-orange mb-4">
            {item.subtitle}
          </p>
        )}

        {/* Summary */}
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
          {item.summary}
        </p>

        {/* Key Highlights */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="mb-6 space-y-2 bg-gray-50/70 p-4 rounded-2xl border border-gray-100">
            <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
              Key Highlights
            </div>
            <ul className="space-y-1.5">
              {item.highlights.map((h, i) => (
                <li key={i} className="text-xs md:text-sm text-gray-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-msi-green shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Interactive Link Buttons */}
        {item.links && item.links.length > 0 && (
          <div className="flex flex-wrap gap-2.5 pt-2 border-t border-gray-100">
            {item.links.map((link, lIdx) => (
              <a
                key={lIdx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${
                  link.primary
                    ? 'bg-msi-purple text-white hover:bg-msi-purple-deep shadow-sm hover:shadow'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {link.icon === 'share' ? (
                  <Share2 className="w-3.5 h-3.5" />
                ) : (
                  <ExternalLink className="w-3.5 h-3.5" />
                )}
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}

        {/* Social Media & Broadcasts Section */}
        {item.socialLinks && item.socialLinks.length > 0 && (
          <div className="mt-4 pt-3.5 border-t border-gray-100">
            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
              <Share2 className="w-3 h-3 text-msi-orange" />
              Official Social Media Broadcasts &amp; Coverage
            </div>
            <div className="flex flex-wrap gap-2">
              {item.socialLinks.map((sLink, sIdx) => (
                <a
                  key={sIdx}
                  href={sLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 transition-colors shadow-2xs hover:border-gray-300"
                >
                  {getPlatformIcon(sLink.platform)}
                  <span>{sLink.label}</span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Internal Navigation Link */}
        {item.isNeuroPi && (
          <div className="mt-4 pt-3 border-t border-dashed border-gray-100 flex items-center justify-between">
            <Link
              href="/neuropi-way/"
              className="inline-flex items-center gap-1 text-xs font-bold text-msi-purple hover:text-msi-orange transition"
            >
              <Brain className="w-3.5 h-3.5 text-msi-orange" />
              Explore The NeuroPi Way Curriculum &amp; Pedagogy →
            </Link>
          </div>
        )}
      </div>

      {/* Media / Visual Side */}
      <div
        className={`${
          isEven ? 'lg:order-2 lg:ml-8' : 'lg:order-1 lg:mr-8'
        } flex flex-col justify-center`}
      >
        {item.video ? (
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-black">
            <iframe
              src={getVideoUrl(item.video)}
              title={item.title}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        ) : item.image ? (
          <div
            className={`relative group rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white w-full ${
              item.imageAspect?.includes('3/4') ? 'max-w-md mx-auto' : ''
            }`}
          >
            <div
              className={`relative overflow-hidden ${
                item.imageAspect || 'aspect-[4/3] md:aspect-[16/10]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full ${
                  item.imageObjectPosition || 'object-contain'
                } group-hover:scale-105 transition-transform duration-500 cursor-pointer`}
                loading="lazy"
                onClick={() => onSelectImage({ src: item.image, alt: item.title })}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4 md:p-6 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 text-xs text-white font-medium bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                  <Maximize2 className="w-3.5 h-3.5" />
                  View Full Pic
                </span>
                {item.links && item.links[0] && (
                  <a
                    href={item.links[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pointer-events-auto inline-flex items-center gap-1.5 text-xs text-white font-semibold bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 hover:bg-white/30 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Open Source
                  </a>
                )}
              </div>
            </div>

            {/* Secondary Image if Available (e.g. Magazine Flipbook Cover) */}
            {item.secondaryImage && (
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={item.secondaryImage}
                    alt="Magazine cover thumbnail"
                    className="w-12 h-16 object-cover rounded-md shadow-sm border border-gray-200 cursor-pointer"
                    onClick={() =>
                      onSelectImage({
                        src: item.secondaryImage,
                        alt: `${item.title} - Cover`,
                      })
                    }
                  />
                  <div>
                    <div className="text-xs font-bold text-gray-900">
                      {item.flipbookInfo?.edition || 'Magazine Edition'}
                    </div>
                    <div className="text-[11px] text-gray-500">
                      Interactive Digital Edition Available
                    </div>
                  </div>
                </div>

                {item.flipbookInfo && (
                  <div className="flex items-center gap-2">
                    <a
                      href={item.flipbookInfo.coverUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-white border border-gray-200 text-gray-700 hover:border-msi-purple hover:text-msi-purple transition shadow-2xs"
                    >
                      {item.flipbookInfo.coverLabel}
                    </a>
                    <a
                      href={item.flipbookInfo.storyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-msi-purple text-white hover:bg-msi-purple-deep transition shadow-2xs"
                    >
                      {item.flipbookInfo.storyLabel}
                    </a>
                  </div>
                )}
              </div>
            )}

            {/* Gallery Thumbnails if Available */}
            {item.gallery && item.gallery.length > 0 && (
              <div className="p-4 bg-gray-50 border-t border-gray-100">
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2.5">
                  Event &amp; Delegation Gallery (Click to enlarge)
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {item.gallery.map((gImg, gIdx) => (
                    <div
                      key={gIdx}
                      onClick={() =>
                        onSelectImage({ src: gImg.src, alt: gImg.caption })
                      }
                      className="group/thumb relative rounded-xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-md transition-all cursor-pointer aspect-square bg-gray-100"
                    >
                      <img
                        src={gImg.src}
                        alt={gImg.caption}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}
