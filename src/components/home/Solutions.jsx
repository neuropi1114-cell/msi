import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Heart } from 'lucide-react';

const Solutions = () => {
  const cards = [
    {
      title: "Working Parents",
      icon: <Briefcase className="w-12 h-12 text-msi-orange mb-4" />,
      desc: "Flexible timings and extended daycare solutions tailored for modern working professionals to ensure peace of mind."
    },
    {
      title: "Corporate Partners",
      icon: <Users className="w-12 h-12 text-msi-orange mb-4" />,
      desc: "Partnering with corporate organizations to provide world-class onsite or near-site childcare facilities."
    },
    {
      title: "Customised Teaching",
      icon: <Heart className="w-12 h-12 text-msi-orange mb-4" />,
      desc: "Individualized learning plans that cater to the unique developmental pace and style of every child."
    }
  ];

  return (
    <section className="py-24 bg-msi-orange">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-schoolbell text-white font-bold uppercase mb-4 tracking-wider">
            SOLUTIONS FOR ALL LIFESTYLES
          </h2>
          <p className="text-white/90 text-lg uppercase tracking-widest font-bold font-averia">
            WE OFFER FAMILY SOLUTIONS FOR THE DIVERSE AND MULTI-CULTURAL GLOBAL COMMUNITY.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-3xl p-10 flex flex-col items-center text-center shadow-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-orange-50 p-4 rounded-full mb-6">
                {card.icon}
              </div>
              <h3 className="text-2xl font-schoolbell text-msi-purple font-bold mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 text-lg">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
