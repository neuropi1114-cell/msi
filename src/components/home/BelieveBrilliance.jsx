'use client';
import React from 'react';
import { motion } from 'framer-motion';

const BelieveBrilliance = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative cursor-glow overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        {/* Left Images Collage — editorial overlapping */}
        <div className="md:w-1/2 relative min-h-[500px] lg:min-h-[600px] w-full mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 top-0 w-[75%] h-[420px] lg:h-[480px] rounded-tl-[40px] overflow-hidden shadow-2xl"
          >
            <img src="/images/believe/DSC01240-684x1024-1.jpeg.bv.webp" alt="Children learning" className="w-full h-full object-cover img-editorial" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 bottom-0 w-[55%] h-[320px] lg:h-[360px] rounded-br-[40px] overflow-hidden z-10 shadow-xl border-4 border-white"
          >
            <img src="/images/believe/DSC00795-1024x684-1.jpeg.bv_resized_ipad.jpeg.bv.webp" alt="Happy child" className="w-full h-full object-cover img-editorial" loading="lazy" />
          </motion.div>
          {/* Decorative handwritten note */}
          <motion.span
            initial={{ opacity: 0, rotate: -5 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-2 left-8 font-lato italic text-msi-gold/60 text-sm z-20 hidden md:block"
          >
            thirty years of watching them grow
          </motion.span>
        </div>

        {/* Right Content — with editorial spacing */}
        <div className="md:w-1/2 md:pl-4 lg:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-lato italic text-msi-gold text-xl md:text-2xl mb-2 tracking-wide">
              It starts with how they see the world
            </h3>
            <h2 className="font-lato text-display-md md:text-display-lg text-msi-purple mb-6 leading-tight">
              Building brilliant minds,{' '}
                <br />
                one small moment at a time
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed">
              Children don't learn from worksheets. They learn from wonder, from repetition, from the way a teacher kneels down to their level. At My School ITALY, we've spent over thirty years observing how young brains actually grow — and building our approach around what we've seen work.
            </p>

            <div className="border-l-4 border-msi-gold pl-6 my-8 py-2">
              <p className="text-gray-600 italic leading-relaxed">
                The first thing we notice isn't a curriculum. It's the way your child explores a room, or reaches for a new colour, or laughs when something unexpected happens. That's usually where the story begins.
              </p>
            </div>

            <h4 className="font-lato italic text-msi-gold text-lg mb-8">
              Where every small step matters
            </h4>

            <a href="/about" className="group inline-flex items-center gap-2 text-msi-purple font-medium text-lg border-b-2 border-msi-purple/30 pb-1 hover:border-msi-purple transition-colors">
              Learn about us
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BelieveBrilliance;
