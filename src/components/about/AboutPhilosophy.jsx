'use client';
import { motion } from 'framer-motion';

export default function AboutPhilosophy() {
  return (
    <section className="py-20" style={{ backgroundColor: '#f7f9fc' }}>
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://myschoolitaly.com/wp-content/uploads/al_opt_content/IMAGE/myschoolitaly.com/wp-content/uploads/2024/10/DSC00911-scaled-1-1024x684.jpg.bv.webp?bv_host=myschoolitaly.com"
                alt="Children at My School ITALY"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-5xl  font-bold mb-6" style={{ color: '#E1872B' }}>
              Our Philosophy
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                My School ITALY as a kindergarten in Bari, Italy was conceived with the intention of promoting an educational style focused on children, based on an education intended as a facilitation of growth, as a discovery by the child of his/her internal world. Central role in the growth process is attributed to emotions and experience.
              </p>
              <p>
                Even from an intellectual and cognitive point of view, children learn to relate to themselves, to others and to the world through their emotional experience. Emotions are the compass that guides the individual in his growth process.
              </p>
              <p>
                Only by helping children to get in touch and recognise their emotions will they be able to transform their experience into intellectual knowledge by integrating it cognitively. We believe this concept is fundamental for an education that knows how to provide the life skills necessary for the construction of an integrated and effective adult identity.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
