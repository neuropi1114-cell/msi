'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: 'Welcome to Our Handbook',
    subtitle: 'Your Guide to My School ITALY',
    description: 'Discover everything you need to know about our neuroscience-based approach, policies, and the enriching journey that awaits your child at My School ITALY.',
    cta: 'Explore the Handbook',
    bg: '/images/hero/DSC00928-scaled-1-1024x684.jpg.bv_resized_ipad.jpg.bv.webp',
  },
  {
    title: 'Our Philosophy',
    subtitle: 'Science Meets Soul',
    description: 'Rooted in neuroscience and powered by love — every page reflects our commitment to nurturing calm, confident, and curious minds through brain-based learning and mindful care.',
    cta: 'Learn Our Approach',
    bg: '/images/hero/Built-on-Neuroscience-and-Joy-STEP-INTO-A-DAY-5.png.bv_resized_ipad.png.bv.webp',
  },
  {
    title: 'Policies & Procedures',
    subtitle: 'Transparency You Can Trust',
    description: 'From enrollment to daily routines, health & safety to parent partnerships — our handbook provides clear guidance for every step of your family\'s journey with us.',
    cta: 'View Policies',
    bg: '/images/hero/DSC01069-scaled-1.jpg.bv_resized_ipad.jpg.bv.webp',
  },
];

const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};

const HandbookFader = () => {
  const [[current, direction], setSlide] = useState([0, 0]);

  const goNext = useCallback(() => {
    setSlide(([cur]) => [(cur + 1) % slides.length, 1]);
  }, []);

  const goPrev = useCallback(() => {
    setSlide(([cur]) => [(cur - 1 + slides.length) % slides.length, -1]);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNext, 6000);
    return () => clearInterval(timer);
  }, [goNext]);

  const slide = slides[current];

  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${slide.bg}")` }}
        >
          <div className="absolute inset-0 bg-msi-purple/60" />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="max-w-2xl"
          >
            <p className="text-msi-orange font-bold text-lg md:text-xl uppercase tracking-wider mb-2">
              {slide.subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-schoolbell font-bold text-white mb-6">
              {slide.title}
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
              {slide.description}
            </p>
            <a
              href="#handbook-content"
              className="inline-block bg-msi-orange hover:bg-msi-orange/90 text-white font-bold py-3 px-8 rounded-full transition-colors text-lg"
            >
              {slide.cta}
            </a>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col space-y-4 z-20">
        <button
          onClick={goPrev}
          className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-msi-orange transition-colors backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={goNext}
          className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-msi-orange transition-colors backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide([i, i > current ? 1 : -1])}
            className={`w-3 h-3 rounded-full transition-all ${i === current ? 'bg-msi-orange w-8' : 'bg-white/50 hover:bg-white/80'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HandbookFader;
