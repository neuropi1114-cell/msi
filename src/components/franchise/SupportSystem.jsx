'use client';
import { motion } from 'framer-motion';

const supportItems = [
  {
    title: 'Branch design',
    text: 'My School ITALY\u2019s franchisors will help you with interior designers, carpenters, painters and so on to set up your school.',
  },
  {
    title: 'Training',
    text: 'Extensive management and teachers\u2019 training is given to My School ITALY\u2019s franchisees at the franchised location. Counselling session & training, thrice in a year for updating latest initiatives & developments.',
  },
  {
    title: 'Ongoing Assistance',
    text: 'You will keep receiving intensive on-site assistance from My School ITALY\u2019s Support Team which is also available round the clock.',
  },
  {
    title: 'Technical Support',
    text: 'My School ITALY will provide space in its website with a in-built software to manage the school as well as for parents to keep themselves updated about their children activities for the coming week.',
  },
  {
    title: 'Comprehensive Operations Manual',
    text: 'This will enable the franchisee to set and maintain standards of My School ITALY\u2019s concept and service without much effort.',
  },
  {
    title: 'Central Management',
    text: 'This is a system that is set up to support the staff, management and to monitor the performance of franchisees.',
  },
  {
    title: 'Advertising and Promotions',
    text: 'The management will work with you to execute highly professional, cost efficient and effective marketing efforts for a booming business.',
  },
];

export default function SupportSystem() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-msi-purple mb-6">
              OUR SUPPORT SYSTEM
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              My School ITALY&rsquo;s support mechanism is very fascinating. Here is just a brief summary:
            </p>
            <div className="space-y-5">
              {supportItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <h3 className="font-bold text-msi-orange mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <img
              src="/images/franchise/classroom-2.jpg"
              alt="My School ITALY support system"
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
