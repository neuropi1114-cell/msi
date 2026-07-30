'use client';
import { motion } from 'framer-motion';

export default function BrighterFuture() {
  return (
    <section className="relative py-32 bg-msi-purple overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/images/hero/DSC00928-scaled-1-1024x684.jpg.bv_resized_ipad.jpg.bv.webp')" }}>
      <div className="absolute inset-0 bg-gradient-to-r from-msi-purple/80 via-msi-purple/50 to-transparent" />
      <div className="grain-overlay absolute inset-0 pointer-events-none" />
      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="font-lato italic text-msi-gold text-lg mb-4">
            the first seven years change everything
          </p>
          <h3 className="font-lato text-display-md md:text-display-lg text-white mb-6 leading-tight">
            Childhood isn't a countdown. It's the foundation.
          </h3>
          <p className="text-white/70 text-lg leading-relaxed max-w-xl">
            We don't rush children through stages. We pay attention to what each child needs right now — and build an environment where they can grow at their own pace, with confidence and curiosity intact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
