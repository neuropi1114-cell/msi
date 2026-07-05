'use client';
import { motion } from 'framer-motion';

export default function NeuroPiApproach() {
  return (
    <section className="py-20" style={{ backgroundColor: '#f4f0eb' }}>
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl" style={{ color: '#1891CD' }}>What makes Us Different?</p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-tight" style={{ color: '#E1872B' }}>
            The NeuroPi Approach — Aligned with NEP 2020
          </h2>
          <div className="mt-6 text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
            <p>At My School ITALY, our curriculum beautifully echoes the vision of NEP 2020 – to nurture holistic, joyful, and experiential learning from the earliest years. Rooted in neuroscience and child development, our pedagogy blends play, mindfulness, and inquiry to strengthen every dimension of growth — cognitive, emotional, social, and physical.</p>
            <p>We believe every brain learns differently — so our classrooms encourage curiosity, creativity, and collaboration through multi-sensory, activity-based learning. Language, art, movement, and rhythm are woven into each theme, creating a seamless connection between heart, mind, and body.</p>
            <p>Our educators act as facilitators of exploration, ensuring that each child learns through discovery, not pressure. From foundational literacy and numeracy to emotional regulation and mindfulness, NeuroPi mirrors the NEP&rsquo;s focus on whole-brain, whole-child learning. At My School ITALY, NEP 2020 isn&rsquo;t just a policy — it&rsquo;s our living philosophy. We create spaces where early education becomes a joyful, brain-enriching journey for every child.</p>
          </div>
          <div className="flex justify-center mt-4">
            <img src="/images/gallery/bee.png" alt="" className="w-auto h-6" loading="lazy" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 max-w-3xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            className="w-full h-full"
            src="https://player.vimeo.com/video/772982817?color=&autopause=0&loop=1&muted=0&title=0&portrait=0&byline=1"
            title="NeuroPi Approach"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
