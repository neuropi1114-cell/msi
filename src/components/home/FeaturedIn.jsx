import { motion } from 'framer-motion';

const pressImages = [
  "/images/ASFATUREDIN/press30.png.bv_resized_mobile.png.bv.webp",
  "/images/ASFATUREDIN/press29.png.bv.webp",
  "/images/ASFATUREDIN/press25.png.bv_resized_mobile.png.bv.webp",
  "/images/ASFATUREDIN/press24.png.bv_resized_mobile.png.bv.webp",
  "/images/ASFATUREDIN/press16.png.bv_resized_mobile.png.bv.webp",
  "/images/ASFATUREDIN/logoz.png.bv_resized_mobile.png.bv.webp",
  "/images/ASFATUREDIN/logo.png.bv_resized_mobile.png.bv.webp",
  "/images/ASFATUREDIN/90291873.png.bv_resized_mobile.png.bv.webp"
];

export default function FeaturedIn() {
  return (
    <section className="py-20 bg-[#351c5a] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 gap-4">
              {pressImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center justify-center"
                >
                  <img 
                    src={img} 
                    alt={`Featured in ${index + 1}`} 
                    className="w-full h-auto max-h-16 object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-schoolbell text-white font-bold mb-6 whitespace-nowrap">
              As Featured in
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed text-justify">
              Education is a journey, not a race, and students learn best when they're having fun while they do it.
            </p>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#f26522] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Read More
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
