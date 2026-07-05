'use client';
import { motion } from 'framer-motion';

export default function AboutPremises() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-schoolbell font-bold" style={{ color: '#E1872B' }}>
            The Premises
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#E1872B' }} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            My School ITALY play school, kindergarten and primary school was conceived out of the desire to have a dedicated learning space for babies and young children, able to stimulate their curiosity and interpersonal relationships, but especially to promote the idea of community.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            My School ITALY is a place where children, teachers, parents meet and know each other. The spaces are carefully arranged in large surfaces that offer children the possibility to move, crawl, run and jump in complete freedom, but also soft corners to snuggle, jump, play and express all their liveliness. The Arcadia also has a delightful soft nap room with coloured lights and with background music and a perfumed humidifier to make children's nap pleasant and enveloping.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
