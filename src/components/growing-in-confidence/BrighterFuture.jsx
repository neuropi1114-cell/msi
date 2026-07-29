'use client';
import { motion } from 'framer-motion';

export default function BrighterFuture() {
  return (
    <section className="relative flex items-center justify-center min-h-[944px] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/growing-in-confidence/brighter-future-bg.jpg')" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/images/growing-in-confidence/cloud-overlay.png')" }}
      />

      <div className="container mx-auto px-4 md:px-12 relative z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[49%] text-left rounded-t-[10px] p-[50px]"
          style={{ backgroundColor: '#E1872B91' }}
        >
          <h3
            className="text-white uppercase font-bold mb-4 leading-tight"
            style={{
              fontFamily: '"Fredoka One", "Fredoka", sans-serif',
              fontSize: '42px',
              letterSpacing: '1px',
            }}
          >
            A Brighter Future For All
          </h3>
          <p
            className="text-white leading-relaxed"
            style={{
              fontFamily: '"Averia Libre", serif',
              fontWeight: 400,
              fontSize: '16px',
            }}
          >
            My School ITALY is designed not just to teach — but to wire the brain for lifelong learning, focusing on pathways that strengthen attention, memory, creativity, empathy, and resilience during the most critical window of growth: the first seven years of life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
