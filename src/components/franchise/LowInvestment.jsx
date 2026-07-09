'use client';
import { motion } from 'framer-motion';

export default function LowInvestment() {
  return (
    <section className="py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img
              src="/images/franchise/pic-2.jpg"
              alt="My School ITALY preschool classroom"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
            <p className="mt-6 text-gray-700 leading-relaxed text-justify">
              Parents look out for the best early learning and care environment for their children
              since their birth and now a days it is trend to start schooling at play school right
              after second birthday of a child. So to run a successful International Kindergarten
              such as ours, is not only a lucrative business but is also an entertaining and a
              pleasurable one.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed text-justify">
              As you get to know more about us, you will see that My School ITALY is more than a
              school. It&rsquo;s the very essence of what we do. Our philosophy, our people, our
              commitment, and our resources are all focused on helping us to give the children an
              excellent start in life, exposing them to the best of both oriental and occidental
              ethos. When this is achieved, success of our franchisee is guaranteed and high returns
              on investment are expected.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-msi-purple mb-6 text-center lg:text-left">
              Low Investment With High Returns
            </h2>
            <img
              src="/images/franchise/classroom-1.jpg"
              alt="Children learning at My School ITALY"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
