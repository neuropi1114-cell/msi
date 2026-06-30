import React from 'react';
import { motion } from 'framer-motion';

const AgeGroups = () => {
  const groups = [
    {
      title: "CIAO BABY",
      age: "0 TO 1 YRS",
      img: "/images/age-groups/msi-pre-school-60-qe02ffm6dp65shw5feu5k38prjcjsofqe1825w4kcq.png.bv.webp"
    },
    {
      title: "SPROUTLINGS",
      age: "1 TO 2 YRS",
      img: "/images/age-groups/msi-pre-school-37-qe02feob0bpp518u5m7i7nsjocjir3373kpqb0hsma.png.bv.webp"
    },
    {
      title: "MINI MAESTROS",
      age: "2 TO 3 YRS",
      img: "/images/age-groups/msi-pre-school-41-qe02feob0bpewqkozkv9y3vjhfbf453lstytaj8b3i.png.bv.webp"
    },
    {
      title: "ASTRO ARCHITECTS",
      age: "3 TO 4 YRS",
      img: "/images/age-groups/msi-pre-school-48-qe02feob0bp4vt2skawyytpu3fvk6utxbto9wdtyys.png.bv.webp"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-schoolbell text-msi-purple font-bold uppercase mb-4 tracking-wider">
            AT EVERY AGE GROUP
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto italic font-averia">
            Nurturing young minds through scientifically designed programs for different developmental stages.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative w-full aspect-square rounded-[2.5rem] overflow-hidden mb-6 shadow-xl border-4 border-white group-hover:border-msi-orange transition-colors duration-300">
                <img 
                  src={group.img} 
                  alt={group.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-schoolbell text-msi-blue font-bold mb-1">
                  {group.title}
                </h3>
                <p className="text-msi-orange font-bold tracking-widest text-sm">
                  {group.age}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgeGroups;
