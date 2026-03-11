import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/hero/IMG_20221103_120159-1024x768-1.jpg.bv_resized_ipad.jpg.bv.webp")' }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-12 relative z-10 flex h-full items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl w-full"
        >
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-schoolbell text-msi-orange font-bold uppercase mb-4 drop-shadow-md">
            PRE SCHOOL
          </h1>

          {/* Orange Box */}
          <div className="bg-msi-orange/90 backdrop-blur-sm p-8 rounded-tr-3xl rounded-bl-3xl rounded-tl-md rounded-br-md shadow-2xl mb-8 border-2 border-white/20">
            <p className="text-white text-lg leading-relaxed font-averia tracking-wide">
              Every child's brain is a world of wonder. Rooted in the science of early brain development and neuroplasticity, our preschool chain blends neuroscience, play-based learning, and emotional intelligence to create a nurturing ecosystem where curiosity, calm, and connection thrive.
            </p>
          </div>

          {/* CTA Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-msi-orange text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-msi-orange/90 hover:shadow-xl transition-all font-averia text-lg"
          >
            Read More
          </motion.button>
        </motion.div>
      </div>

      {/* Slider Controls Placeholder */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
        <button className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-msi-orange transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-msi-orange transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
