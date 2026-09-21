'use client';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';

const slides = [
  {
    image: '/images/hero/hero-slide-1.png',
    bgPosition: 'bg-[center_-120px]',
    accentImage: '/images/hero/hero-slide-1-accent.png',
    title: 'Every child\'s brain is a world of wonder',
    cta: { text: 'See how we do it', href: '/programs' },
  },
  {
    image: '/images/hero/hero-slide-2.png',
    bgPosition: 'bg-center',
    accentImage: '/images/hero/hero-slide-2-accent.webp',
    title: 'LET CHILDHOOD BE EXTRAORDINARY',
    cta: { text: 'Explore Why MSI', href: '/theneuropiway' },
  },
  {
    image: '/images/hero/Header_3.png',
    bgPosition: 'bg-center',
    accentImage: '/images/hero/Header_3a.png',
    title: 'Discovery starts with a single question',
    cta: { text: 'Explore Program', href: '/parents' },
  },
];

const fadeSlide = {
  enter: { opacity: 0, scale: 1.05 },
  center: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
};

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const bgRef = useRef(null);
  const accentRef = useRef(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (reduceMotion || isPaused) return;
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next, isPaused, reduceMotion]);

  const handleMouseMove = useCallback(
    (e) => {
      if (reduceMotion) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
      }
      if (accentRef.current) {
        accentRef.current.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
      }
    },
    [reduceMotion]
  );

  const resetParallax = useCallback(() => {
    if (bgRef.current) bgRef.current.style.transform = 'scale(1.05)';
    if (accentRef.current) accentRef.current.style.transform = '';
  }, []);

  const slide = slides[current];

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        resetParallax();
      }}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
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
            ref={bgRef}
            className={`absolute inset-0 bg-cover ${slide.bgPosition || 'bg-center'}`}
            style={{
              backgroundImage: `url("${slide.image}")`,
              transform: 'scale(1.05)',
              transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
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
          className="hidden lg:block absolute z-20 right-[4%] bottom-[8%] w-72 h-72 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 bg-white/10 backdrop-blur-sm"
        >
          <div
            ref={accentRef}
            className="absolute inset-0"
            style={{ transition: 'transform 1s cubic-bezier(0.22, 1, 0.36, 1)' }}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${slide.accentImage}")` }} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content — left-aligned, bottom composition */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-20 h-full min-h-screen flex flex-col justify-end pb-20 pt-28">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl w-full bg-black/15 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10 shadow-lg overflow-hidden mb-4"
          >
            {/* Oversized display title */}
            <h2
              className="font-linotte text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-8 leading-[1.15] break-words tracking-tight"
            >
              {slide.title}
            </h2>

            {/* Conversational CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Link
                href={slide.cta.href}
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
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicator — minimal, editorial */}
        <div className="absolute bottom-10 left-6 md:left-12 lg:left-20 flex items-center gap-4 z-20">
          <span className="font-linotte text-white/40 text-sm tabular-nums">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-[2px] transition-all duration-500 ${i === current ? 'w-8 bg-msi-gold' : 'w-4 bg-white/30 hover:bg-white/50'
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