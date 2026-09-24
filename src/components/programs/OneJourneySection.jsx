'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ReadMoreButton from '../common/ReadMoreButton';
import Drawer from '../layout/Drawer';

function getEmbedUrl(url) {
  if (!url) return '';
  const youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]+)/);
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
  }
  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return `https://player.vimeo.com/video/${vimeoMatch[1]}?title=0&byline=0&portrait=0&transparent=1`;
  }
  return url;
}

export default function OneJourneySection({
  eyebrow = null,
  eyebrowClass = "",
  title = "ONE JOURNEY. MANY POSSIBILITIES.",
  titleColor = "text-msi-purple",
  children,
  footerText = "And throughout that journey, the child remains at the centre.",
  imageSrc = "/images/programs/Aperna_28.png",
  bgImageSrc = "/images/programs/Aperna_28.png",
  imageAlt = "One Journey. Many Possibilities - My School ITALY",
  videoUrl = null,
  showBeeIcon = true,
  showReadMore = false,
  readMoreDrawerTitle = null,
  readMoreDrawerBody = null,
}) {
  const [open, setOpen] = useState(false);
  const hasDrawer = Boolean(readMoreDrawerBody);
  const isReadMoreVisible = showReadMore || hasDrawer;

  return (
    <>
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
              {eyebrow && (
                <h3 className={`mb-2 text-msi-purple ${eyebrowClass}`}>
                  {eyebrow}
                </h3>
              )}
              {title && (
                <h2 className={`mb-4 ${titleColor !== 'text-msi-orange' ? titleColor : ''}`}>
                  {title}
                </h2>
              )}

              <div className="mt-5 space-y-4">
                {children || (
                  <p>
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
                  <p>
                    {footerText}
                  </p>
                )}
              </div>

              {isReadMoreVisible && (
                <div className="mt-5">
                  <ReadMoreButton
                    onClick={() => setOpen(true)}
                    aria-haspopup="dialog"
                    aria-expanded={open}
                    className="font-bold shadow-md"
                  />
                </div>
              )}

              {showBeeIcon && (
                <div className="mt-4 flex items-center gap-2">
                  <img src="/images/gallery/bee.png" alt="" className="w-auto h-5" loading="lazy" />
                </div>
              )}
            </motion.div>

            {/* Right Side: Video or Image Card */}
            {videoUrl ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 aspect-video w-full relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black"
              >
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title={readMoreDrawerTitle || title || "Video"}
                />
              </motion.div>
            ) : imageSrc ? (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5 aspect-[16/9] w-full relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </motion.div>
            ) : null}

          </div>
        </div>
      </section>

      {hasDrawer && (
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title={readMoreDrawerTitle || title}
          side="left"
        >
          {readMoreDrawerBody}
        </Drawer>
      )}
    </>
  );
}
