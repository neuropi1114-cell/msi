'use client';
import React from 'react';
import { motion } from 'framer-motion';
import UnderlineArrowLink from '../common/UnderlineArrowLink';

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
            <img src="/images/believe/Web_15.png" alt="Happy child" className="w-full h-full object-cover img-editorial" loading="lazy" />
          </motion.div>
          {/* Decorative handwritten note */}

        </div>

        {/* Right Content — with editorial spacing */}
        <div className="md:w-1/2 md:pl-4 lg:pl-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>
              From 45 Days to 8 Years
            </h3>
            <h2 className="font-linotte text-display-md md:text-display-lg mb-6 leading-tight">
              EVERY CHILD IS DIFFERENT.
              <br />
              THEIR EARLY YEARS SHOULD UNDERSTAND THAT.
            </h2>
            <p className="font-linotte text-lg mb-6 leading-relaxed">
              A nurturing early childhood ecosystem where learning, care, development,
              movement, nutrition and emotional wellbeing come together around the individual
              child.
            </p>

            <div className="flex flex-wrap gap-6">
              <UnderlineArrowLink href="/book-your-tour" text="BOOK A SCHOOL TOUR" color="yellow" />
              <UnderlineArrowLink href="/contact" text="FIND A CENTRE" color="green" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BelieveBrilliance;
