'use client';
import React from 'react';
import { motion } from 'framer-motion';

const BelieveBrilliance = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center gap-12">
        {/* Left Images Collage */}
        <div className="md:w-1/2 relative min-h-[500px] w-full mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-0 w-[80%] h-[400px] rounded-tl-[40px] overflow-hidden"
          >
            <img src="/images/believe/DSC01240-684x1024-1.jpeg.bv.webp" alt="Children learning" className="w-full h-full object-contain" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute right-0 bottom-0 w-[60%] h-[300px] rounded-br-[40px] overflow-hidden z-10"
          >
            <img src="/images/believe/DSC00795-1024x684-1.jpeg.bv_resized_ipad.jpeg.bv.webp" alt="Happy child" className="w-full h-full object-cover" loading="lazy" />

          </motion.div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-msi-blue  text-xl md:text-2xl mb-2 tracking-wider whitespace-nowrap">
              A 21st Century Education Elixir
            </h3>
            <h2 className="text-4xl md:text-5xl  text-msi-orange font-bold uppercase mb-6 leading-tigher">
              SHAPING YOUNG MINDS{' '}
                <br />
                THROUGH NEUROSCIENCE
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed text-justify">
              At My School ITALY, we believe brilliance can be built – one neural connection at a time. Our NeuroPi Study Technology, grounded in modern neuroscience research, helps children shine through proven, research-based instruction that has empowered young learners around the world. Using the powerful concept of Neuroplasticity – the brain's ability to grow and rewire through experience – we nurture learning pathways right from Pre Nursery days.
            </p>

            <div className="border-l-4 border-msi-orange pl-6 my-8 py-2">
              <p className="text-gray-600 italic text-justify">
                Every activity is designed to strengthen focus, confidence, and communication – helping children become curious thinkers, capable learners, and compassionate leaders. At NeuroPi, education is not about memorizing facts – it's about building the brain for the future.
              </p>
            </div>

            <h4 className="text-xl text-msi-blue  mb-8">
              EDUCATION EXCELLENCE EVERYWHERE Is Our Vision
            </h4>

            <a href="/about" className="bg-msi-orange text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-msi-orange/90 transition-all  text-lg inline-block">
              About Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BelieveBrilliance;
