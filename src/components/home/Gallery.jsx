'use client';
import { motion } from 'framer-motion';

const images = [
  { src: '/images/gallery/gallery-1.png', caption: 'morning circle time' },
  { src: '/images/gallery/gallery-2.png', caption: 'hands-on discovery' },
  { src: '/images/gallery/gallery-3.png', caption: 'outdoor adventures' },
  { src: '/images/gallery/gallery-4.png', caption: 'creative expression' },
  { src: '/images/gallery/gallery-5.png', caption: 'quiet moments' },
  { src: '/images/gallery/gallery-6.png', caption: 'learning together' },
  { src: '/images/gallery/gallery-7.png', caption: 'growing every day' },
  { src: '/images/gallery/gallery-8.png', caption: 'joy in the making' },
];

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Editorial header — left-aligned, not centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-lg"
        >
          <p className="font-lato italic text-msi-gold text-lg mb-3">
            glimpses of everyday life
          </p>
          <h2 className="font-lato text-display-md md:text-display-lg text-msi-purple leading-tight">
            A school made of small, beautiful moments
          </h2>
        </motion.div>

        {/* Masonry-style editorial grid with varied sizes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
          {images.map((img, i) => {
            const spanClasses = [
              'row-span-2',
              '',
              '',
              'row-span-2',
              '',
              'row-span-2',
              '',
              '',
            ];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative group overflow-hidden rounded-xl ${spanClasses[i]}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover img-editorial transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Handwritten-style caption on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-3 left-4 font-lato italic text-white/90 text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                  {img.caption}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
