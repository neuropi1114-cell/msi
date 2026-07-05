'use client';
import { motion } from 'framer-motion';

const principles = [
  {
    title: 'Children',
    description: 'Children are central to everything we do.',
    image: 'https://myschoolitaly.com/wp-content/uploads/al_opt_content/IMAGE/myschoolitaly.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-17-at-7.46.47-AM.jpeg.bv.webp?bv_host=myschoolitaly.com',
  },
  {
    title: 'Family',
    description: 'Families are our primary partners.',
    image: 'https://myschoolitaly.com/wp-content/uploads/al_opt_content/IMAGE/myschoolitaly.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-17-at-7.46.46-AM.jpeg.bv.webp?bv_host=myschoolitaly.com',
  },
  {
    title: 'Community',
    description: 'Being a valued part of each unique community.',
    image: 'https://myschoolitaly.com/wp-content/uploads/al_opt_content/IMAGE/myschoolitaly.com/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-17-at-7.46.47-AM-1.jpeg.bv.webp?bv_host=myschoolitaly.com',
  },
];

export default function AboutGuidingPrinciples() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #351C5A 0%, #1a0d33 100%)' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ background: 'radial-gradient(circle at 30% 50%, rgba(225,135,43,0.3) 0%, transparent 50%)' }} />
      </div>
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-schoolbell font-bold text-white mb-4">
            Our Guiding Principles
          </h2>
          <div className="flex justify-center">
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#E1872B' }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={principle.image}
                  alt={principle.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-schoolbell font-bold text-white mb-2">
                  {principle.title}
                </h3>
                <p className="text-white/80">
                  {principle.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
