import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: '/images/hero/Slider_1-scaled.jpg.bv.webp',
    title: 'PRE SCHOOL',
    description: "Every child's brain is a world of wonder. Rooted in the science of early brain development and neuroplasticity, our preschool chain blends neuroscience, play-based learning, and emotional intelligence to create a nurturing ecosystem where curiosity, calm, and connection thrive."
  },
  {
    image: '/images/hero/Slider_2-scaled.jpg.bv.webp',
    title: 'NURTURE',
    description: 'We cultivate emotional intelligence and resilience through guided social interactions, mindfulness practices, and a warm, inclusive environment where every child feels seen, heard, and valued.'
  },
  {
    image: '/images/hero/Slider_3-scaled.jpg.bv.webp',
    title: 'DISCOVER',
    description: 'Our play-based curriculum sparks curiosity and critical thinking, turning everyday moments into opportunities for exploration, creativity, and a lifelong love of learning.'
  }
];

const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 }
};

const Hero = () => {
  const [[current, direction], setSlide] = useState([0, 0]);

  const goUp = useCallback(() => {
    setSlide(([cur]) => [(cur - 1 + slides.length) % slides.length, -1]);
  }, []);

  const goDown = useCallback(() => {
    setSlide(([cur]) => [(cur + 1) % slides.length, 1]);
  }, []);

  useEffect(() => {
    const timer = setInterval(goDown, 5000);
    return () => clearInterval(timer);
  }, [goDown]);

  const slide = slides[current];

  return (
    <section className="relative -mt-16 pt-16 h-[calc(85vh+4rem)] min-h-[calc(600px+4rem)] w-full flex items-center">
      {/* Background Image with Overlay */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${slide.image}")` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className={`container mx-auto px-4 md:px-12 relative z-10 flex h-full items-center ${current % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={current}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="max-w-xl w-full"
          >
            <h1 className="text-5xl md:text-7xl font-schoolbell text-msi-orange font-bold uppercase mb-4 drop-shadow-md">
              {slide.title}
            </h1>

            <div className={`${current === 1 ? 'bg-[#351C5A]' : 'bg-msi-orange/90'} backdrop-blur-sm p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md shadow-2xl mb-8 border-2 border-white/20`}>
              <p className="text-white text-lg leading-relaxed font-averia tracking-wide">
                {slide.description}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-msi-orange text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-msi-orange/90 hover:shadow-xl transition-all font-averia text-lg"
            >
              Read More
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slider Controls */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
        <button
          onClick={goUp}
          className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-msi-orange transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          onClick={goDown}
          className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-msi-orange transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
