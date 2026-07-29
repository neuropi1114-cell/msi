'use client';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/images/hero/Slider_1-scaled.jpg.bv.webp',
    accentImage: '/images/believe/DSC01240-684x1024-1.jpeg.bv.webp',
    tagline: 'where curious minds take root',
    title: 'Every child\'s brain is a world of wonder',
    body: 'Rooted in the science of early brain development, we create spaces where curiosity, calm, and connection thrive.',
    cta: { text: 'See how we do it', href: '/programs' },
  },
  {
    image: '/images/hero/Slider_2-scaled.jpg.bv.webp',
    accentImage: '/images/believe/DSC00795-1024x684-1.jpeg.bv_resized_ipad.jpeg.bv.webp',
    tagline: 'feelings come first here',
    title: 'We help children understand their world',
    body: 'Through guided social interactions, mindfulness, and a warm environment where every child feels seen and heard.',
    cta: { text: 'Explore our approach', href: '/nep' },
  },
  {
    image: '/images/hero/Slider_3-scaled.jpg.bv.webp',
    accentImage: '/images/age-groups/sproutlings.webp',
    tagline: 'play is how they learn',
    title: 'Discovery starts with a single question',
    body: 'Our play-based curriculum turns everyday moments into opportunities for exploration, creativity, and a lifelong love of learning.',
    cta: { text: 'Step into a day', href: '/day-care' },
  },
];

const fadeSlide = {
  enter: { opacity: 0, scale: 1.05 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const slide = slides[current];

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden bg-msi-charcoal"
      aria-label="Hero banner"
    >
      <h1 className="sr-only">
        My School ITALY — Neuroscience-Based Preschool and Daycare
      </h1>

      {/* Grain overlay */}
      <div className="grain-overlay absolute inset-0 z-30 pointer-events-none" />

      {/* Main background image */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          variants={fadeSlide}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 z-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center img-editorial"
            style={{
              backgroundImage: `url("${slide.image}")`,
              transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px) scale(1.05)`,
              transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
          {/* Cinematic gradient overlay — asymmetrical */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Floating accent image — editorial crop */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={`accent-${current}`}
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          exit={{ opacity: 0, y: -20, rotate: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute z-20 right-[8%] bottom-[12%] w-64 h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10"
          style={{
            transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px)`,
            transition: 'transform 1s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${slide.accentImage}")` }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content — left-aligned, editorial composition */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 h-full min-h-screen flex flex-col justify-center">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl pt-20"
          >
            {/* Handwritten-style tagline */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display italic text-msi-gold text-lg md:text-xl mb-4 tracking-wide"
            >
              {slide.tagline}
            </motion.p>

            {/* Oversized display title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-display-lg md:text-display-xl text-white font-medium mb-6 leading-[1.1]"
            >
              {slide.title}
            </motion.h2>

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
            >
              {slide.body}
            </motion.p>

            {/* Conversational CTA */}
            <motion.a
              href={slide.cta.href}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="group inline-flex items-center gap-3 text-white text-lg font-medium border-b-2 border-msi-gold/60 pb-1 hover:border-msi-gold transition-colors"
            >
              {slide.cta.text}
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicator — minimal, editorial */}
        <div className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex items-center gap-4 z-20">
          <span className="font-display text-white/40 text-sm tabular-nums">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-[2px] transition-all duration-500 ${
                  i === current ? 'w-8 bg-msi-gold' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Nav arrows — minimal */}
        <div className="absolute bottom-10 right-6 md:right-12 lg:right-20 flex items-center gap-3 z-20">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 text-white/60 flex items-center justify-center hover:border-msi-gold hover:text-msi-gold transition-colors"
            aria-label="Previous slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 text-white/60 flex items-center justify-center hover:border-msi-gold hover:text-msi-gold transition-colors"
            aria-label="Next slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
