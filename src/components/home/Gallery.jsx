'use client';
import { motion } from 'framer-motion';

const images = [
  '/images/gallery/gallery-1.png',
  '/images/gallery/gallery-2.png',
  '/images/gallery/gallery-3.png',
  '/images/gallery/gallery-4.png',
  '/images/gallery/gallery-5.png',
  '/images/gallery/gallery-6.png',
  '/images/gallery/gallery-7.png',
  '/images/gallery/gallery-8.png',
];

export default function Gallery() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#1891CD] text-lg mb-2">Discover Our School</p>
          <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#E1872B' }}>GALLERY</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="overflow-hidden"
            >
              <img
                src={src}
                alt={`School gallery image ${i + 1}`}
                className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
