'use client';
import { motion } from 'framer-motion';

const stats = [
  {
    value: '30',
    suffix: '+',
    title: 'Years of Experience',
    description:
      'Flexible and Experiential Curriculum Crafted to Deliver with Imagination and Heart.',
  },
  {
    value: '30',
    suffix: 'K+',
    title: 'Students Empowered',
    description:
      'The aim of My School ITALY is to plant a love of learning by sprinkling your child\u2019s days with inspiring, thought-provoking opportunities filled with wonder and joy.',
  },
  {
    value: '15',
    suffix: 'K+',
    title: 'Teachers Empowered',
    description:
      'Our Preschools are the instruments for a new revolution of learning with our dedicated Team selected for their passion for education and love of children.',
  },
];

export default function FunFacts() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-msi-purple text-center mb-12"
        >
          Fun facts about our school and culture
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-md"
            >
              <div className="text-5xl md:text-6xl font-bold text-msi-orange mb-2">
                {stat.value}
                <span className="text-3xl">{stat.suffix}</span>
              </div>
              <h3 className="text-lg font-bold text-msi-purple mb-4">{stat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
