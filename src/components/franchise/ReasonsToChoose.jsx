'use client';
import { motion } from 'framer-motion';

const reasons = [
  {
    num: '01',
    text: 'We are the only Italian Kindergarten with truly English Teaching and Learning material in the world of Early Learning.',
  },
  {
    num: '02',
    text: 'We are an ISO 9001 certified, professionally managed, and technically up-to-date Kindergarten offering 2-in-1 business opportunity of schooling and after schooling.',
  },
  {
    num: '03',
    text: 'Our Curriculum is our backbone and our Pedagogy is par excellence. Our Kindergarten Model is well researched and developed by professionals with over 20 years of global experience in the education domain.',
  },
  {
    num: '04',
    text: 'Our Teaching Tool – MSIK Decant is the only one of its kind in the world of Early Education. It\u2019s used in all our Learning material.',
  },
  {
    num: '05',
    text: 'Fast launch of the project with the help of our team of designers, suppliers and workers.',
  },
  {
    num: '06',
    text: 'Continuous day to day expert guidance and 360 degree support system resulting in a higher success rate.',
  },
  {
    num: '07',
    text: 'Centralised procurement and supply system catering to the requirements of the school and the students.',
  },
  {
    num: '08',
    text: 'Our Parents and School Manuals are Hand-holding tools for both parents and franchisees that provide detailed description and solution for every operational need of our centre.',
  },
  {
    num: '09',
    text: 'With our 24/7 technical support for our Franchisee and our grievance and redressal cell for parents, we are one of those few Kindergartens in the world that have Collaborative Partnerships with Families and Franchisee policy.',
  },
];

export default function ReasonsToChoose() {
  return (
    <section
      className="py-16 md:py-20"
      style={{
        background: 'linear-gradient(135deg, #351c5a 0%, #5a2d82 50%, #351c5a 100%)',
      }}
    >
      <div className="container mx-auto px-4 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          REASONS TO CHOOSE US
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
            >
              <span className="text-4xl font-bold text-msi-orange">{reason.num}</span>
              <p className="mt-4 text-white/90 leading-relaxed text-sm">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
