'use client';
import { motion } from 'framer-motion';

export default function FranchiseHero() {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[700px] flex items-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/franchise/hero-bg.jpg)' }}
    >
      <div
        className="absolute inset-0 bg-bottom bg-no-repeat bg-contain opacity-30 pointer-events-none"
        style={{ backgroundImage: 'url(/images/franchise/cloud-overlay.png)' }}
      />
      <div className="absolute inset-0 bg-msi-purple/60" />

      <div className="container mx-auto px-4 md:px-12 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Franchise Overview
          </h1>
          <div className="space-y-4 text-white/90 text-lg leading-relaxed">
            <p>
              My School ITALY proposes its Kindergarten Franchising Projects for all those who
              would like to contribute to the Early Education System of the country. We believe
              strongly in what Thomas Edison, General Electric Co-founder, said: &ldquo;The value
              of an idea lies in the using of it.&rdquo;
            </p>
            <p>
              ITALY, being a non-English speaking European country, couldn&rsquo;t enter the world
              of International Kindergarten Franchising Industry. Like all other Italian products
              and brands that are known for quality, proficiency, excellence and pride, My School
              ITALY also cherishes the similar qualities. Just being an Italian Kindergarten &ndash;
              speaks for itself!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
