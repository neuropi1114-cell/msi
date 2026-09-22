'use client';
import { motion } from 'framer-motion';

const awards = [
  { id: 1, image: "/images/awards/iconic-brand-award.webp", alt: "Iconic Brand" },
  { id: 2, image: "/images/awards/ida-award.webp", alt: "IDA Awards" },
  { id: 3, image: "/images/awards/eba-national-winner-award.webp", alt: "EBA National Winner" },
  { id: 4, image: "/images/awards/eba-one-to-watch-award.webp", alt: "EBA One to Watch" },
  { id: 5, image: "/images/awards/msme-award.webp", alt: "MSME Award" },
  { id: 6, image: "/images/awards/queens-award.webp", alt: "Queens Award" }
];

export default function Awards() {
  return (
    <section className="py-16 bg-[#2f9ed9] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="md:w-1/3 text-center md:text-left">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl  text-white font-bold"
            >
              AWARDS & ACCOLADES
            </motion.h2>
          </div>

          <div className="md:w-2/3 w-full">
            {/* Simple CSS Marquee for infinite scrolling logos */}
            <div className="relative flex overflow-hidden group border-l-2 border-black">
              <div className="animate-marquee flex whitespace-nowrap items-center min-w-full shrink-0">
                {awards.map((award, index) => (
                  <div key={index} className="mx-8 w-40 h-32 flex-shrink-0 flex items-center justify-center bg-white rounded-lg">
                    <img 
                      src={award.image} 
                      alt={award.alt} 
                      className="max-w-full max-h-full object-contain transition-all duration-300" 
                      loading="lazy"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/logo/logo.png.bv.webp'; }}
                    />
                  </div>
                ))}
              </div>
              <div className="animate-marquee flex whitespace-nowrap items-center min-w-full shrink-0" aria-hidden="true">
                {awards.map((award, index) => (
                  <div key={`${index}-clone`} className="mx-8 w-40 h-32 flex-shrink-0 flex items-center justify-center bg-white rounded-lg">
                    <img 
                      src={award.image} 
                      alt="" 
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                      loading="lazy"
                      onError={(e) => { e.target.onerror = null; e.target.src = '/images/logo/logo.png.bv.webp'; }} 
                    />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
      {/* Tailwind specific custom animation in App.jsx or index.css */}
    </section>
  );
}
