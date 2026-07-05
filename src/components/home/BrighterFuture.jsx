'use client';
import { motion } from 'framer-motion';

export default function BrighterFuture() {
  return (
    <section className="relative py-24 bg-msi-purple overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/hero/DSC00928-scaled-1-1024x684.jpg.bv_resized_ipad.jpg.bv.webp')" }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative container mx-auto px-4 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
            A Brighter Future For All
          </h3>
          <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            My School ITALY is designed not just to teach — but to wire the brain for lifelong learning, focusing on pathways that strengthen attention, memory, creativity, empathy, and resilience during the most critical window of growth: the first seven years of life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
