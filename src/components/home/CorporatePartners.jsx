'use client';
import { motion } from 'framer-motion';
import data from '../../data/corporate-partners.json';

const { title: defaultTitle, description: defaultDescription, partners } = data;

export default function CorporatePartners({ title = defaultTitle, description = defaultDescription, reverse = false, id }) {
  const marqueeClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';
  return (
    <section id={id} className="py-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-12 text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl  text-msi-purple font-bold mb-4"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group py-4">
        <div className={`${marqueeClass} flex whitespace-nowrap items-center min-w-full shrink-0`}>
          {partners.map((partner, index) => (
            <div key={index} className="mx-8 w-32 h-24 md:w-40 md:h-28 flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
              <img 
                src={partner.image} 
                alt={partner.alt} 
                className="max-w-full max-h-full object-contain transition-all duration-300"
                loading="lazy"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/logo/logo.png.bv.webp'; }}
              />
            </div>
          ))}
        </div>
        <div className={`${marqueeClass} flex whitespace-nowrap items-center min-w-full shrink-0`} aria-hidden="true">
          {partners.map((partner, index) => (
            <div key={`${index}-clone`} className="mx-8 w-32 h-24 md:w-40 md:h-28 flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
              <img 
                src={partner.image} 
                alt="" 
                className="max-w-full max-h-full object-contain transition-all duration-300"
                loading="lazy"
                onError={(e) => { e.target.onerror = null; e.target.src = '/images/logo/logo.png.bv.webp'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
