'use client';
import { motion } from 'framer-motion';

const activities = [
  {
    title: 'Robotics',
    desc: 'Integrating robotics into early childhood education helps close gender and SES-based gaps in achievement in STEAM fields.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 640 512" fill="currentColor">
        <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z" />
      </svg>
    ),
  },
  {
    title: 'Gymnastics',
    desc: 'Ours is the only Preschool to include Gymnastics in the Curriculum for 1.0 year to 10 years old children.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
        <path d="M231.39 243.48a285.56 285.56 0 0 0-22.7-105.7c-90.8 42.4-157.5 122.4-180.3 216.8a249 249 0 0 0 56.9 81.1 333.87 333.87 0 0 1 146.1-192.2zm-36.9-134.4a284.23 284.23 0 0 0-57.4-70.7c-91 49.8-144.8 152.9-125 262.2 33.4-83.1 98.4-152 182.4-191.5zm187.6 165.1c8.6-99.8-27.3-197.5-97.5-264.4-14.7-1.7-51.6-5.5-98.9 8.5A333.87 333.87 0 0 1 279.19 241a285 285 0 0 0 102.9 33.18zm-124.7 9.5a286.33 286.33 0 0 0-80.2 72.6c82 57.3 184.5 75.1 277.5 47.8a247.15 247.15 0 0 0 42.2-89.9 336.1 336.1 0 0 1-80.9 10.4c-54.6-.1-108.9-14.1-158.6-40.9zm-98.3 99.7c-15.2 26-25.7 54.4-32.1 84.2a247.07 247.07 0 0 0 289-22.1c-112.9 16.1-203.3-24.8-256.9-62.1zm180.3-360.6c55.3 70.4 82.5 161.2 74.6 253.6a286.59 286.59 0 0 0 89.7-14.2c0-2 .3-4 .3-6 0-107.8-68.7-199.1-164.6-233.4z" />
      </svg>
    ),
  },
  {
    title: 'Games',
    desc: 'The recognition of environments, objects and the regularity of routine generate self-confidence, security and a sense of well-being.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 576 512" fill="currentColor">
        <path d="M552 64H112C57.8 64 16 105.8 16 160v224c0 54.2 41.8 96 96 96h440c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM192 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm192 0c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" />
      </svg>
    ),
  },
  {
    title: 'English Language',
    desc: 'The English language is learned (understanding) in everyday life through playful activity and the emotional relationship with the teacher.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 640 512" fill="currentColor">
        <path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" />
      </svg>
    ),
  },
];

export default function Activities() {
  return (
    <section className="py-20" style={{ backgroundColor: '#f4f0eb' }}>
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl" style={{ color: '#1891CD' }}>Activities For Kids</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ color: '#E1872B' }}>Engagement</h2>
          <p className="max-w-4xl mx-auto mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            Every activity is designed to nurture brain development, emotional balance, and social bonding, while keeping learning joyful and meaningful. Every giggle grows a brain cell. Every day builds confidence. The child gradually learns his own identity, learns to relate to peers, with the educator, with father and mother and the adult figures outside their family life.
          </p>
          <div className="flex items-center justify-center gap-2 my-8">
            <span className="block w-16 h-px bg-gray-300" />
            <span className="block w-2 h-2 rounded-full" style={{ backgroundColor: '#E1872B' }} />
            <span className="block w-16 h-px bg-gray-300" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="space-y-8">
            {activities.slice(0, 2).map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex items-start gap-4"
              >
                <span className="min-w-[56px] h-14 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#E1872B' }}>
                  {a.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: '#1891CD' }}>{a.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src="/images/gallery/child-man.png"
              alt="Child activities"
              className="w-full max-w-[300px] h-auto"
              loading="lazy"
            />
          </motion.div>

          <div className="space-y-8">
            {activities.slice(2, 4).map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex items-start gap-4 lg:flex-row-reverse text-right lg:text-left"
              >
                <span className="min-w-[56px] h-14 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#E1872B' }}>
                  {a.icon}
                </span>
                <div>
                  <h3 className="text-lg font-bold" style={{ color: '#1891CD' }}>{a.title}</h3>
                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">{a.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
