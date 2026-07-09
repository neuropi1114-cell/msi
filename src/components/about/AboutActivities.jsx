'use client';
import { motion } from 'framer-motion';

const activities = [
  {
    title: 'Robotics',
    description: 'Integrating robotics into early childhood education helps close gender and SES-based gaps in achievement in STEAM fields.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 640 512" fill="currentColor">
        <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"/>
      </svg>
    ),
  },
  {
    title: 'Gymnastics',
    description: 'Ours is the only Preschool to include Gymnastics in the Curriculum for 1.0 year to 10 years old children.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
        <path d="M231.39 243.48a285.56 285.56 0 0 0-22.7-105.7c-90.8 42.4-157.5 122.4-180.3 216.8a249 249 0 0 0 56.9 81.1 333.87 333.87 0 0 1 146.1-192.2zm-36.9-134.4a284.23 284.23 0 0 0-57.4-70.7c-91 49.8-144.8 152.9-125 262.2 33.4-83.1 98.4-152 182.4-191.5zm187.6 165.1c8.6-99.8-27.3-197.5-97.5-264.4-14.7-1.7-51.6-5.5-98.9 8.5A333.87 333.87 0 0 1 279.19 241a285 285 0 0 0 102.9 33.18zm-124.7 9.5a286.33 286.33 0 0 0-80.2 72.6c82 57.3 184.5 75.1 277.5 47.8a247.15 247.15 0 0 0 42.2-89.9 336.1 336.1 0 0 1-80.9 10.4c-54.6-.1-108.9-14.1-158.6-40.9zm-98.3 99.7c-15.2 26-25.7 54.4-32.1 84.2a247.07 247.07 0 0 0 289-22.1c-112.9 16.1-203.3-24.8-256.9-62.1zm180.3-360.6c55.3 70.4 82.5 161.2 74.6 253.6a286.59 286.59 0 0 0 89.7-14.2c0-2 .3-4 .3-6 0-107.8-68.7-199.1-164.6-233.4z"/>
      </svg>
    ),
  },
  {
    title: 'Games',
    description: 'The recognition of environments, objects and the regularity of routine generate self-confidence, security and a sense of well-being.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 576 512" fill="currentColor">
        <path d="M192 144a48 48 0 1 1 96 0 48 48 0 1 1-96 0zm96 176a48 48 0 1 1 0-96 48 48 0 1 1 0 96zM320 96a48 48 0 1 1 96 0 48 48 0 1 1-96 0zm0 224a48 48 0 1 1 96 0 48 48 0 1 1-96 0zM144 272a48 48 0 1 1 0-96 48 48 0 1 1 0 96zM512 0c-17.7 0-32 14.3-32 32 0 11.8 6.4 22.1 16 27.7V96c0 70.7-57.3 128-128 128H224c-70.7 0-128-57.3-128-128V59.7C5.6 53.7 0 43.4 0 32 0 14.3 14.3 0 32 0s32 14.3 32 32h32c0-17.7 14.3-32 32-32s32 14.3 32 32h32c0-17.7 14.3-32 32-32s32 14.3 32 32h32c0-17.7 14.3-32 32-32s32 14.3 32 32h32c0-17.7 14.3-32 32-32s32 14.3 32 32h32c0-17.7 14.3-32 32-32z"/>
      </svg>
    ),
  },
  {
    title: 'English Language',
    description: 'The English language is learned (understanding) in everyday life through playful activity and the emotional relationship with the teacher.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 640 512" fill="currentColor">
        <path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20H488v40h16c11 0 20 9 20 20s-9 20-20 20H488v44c0 11-9 20-20 20s-20-9-20-20V328H412c-11 0-20-9-20-20s9-20 20-20h36V248H412c-11 0-20-9-20-20s9-20 20-20h36v-4c0-11 9-20 20-20z"/>
      </svg>
    ),
  },
];

export default function AboutActivities() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-5xl  font-bold" style={{ color: '#E1872B' }}>
            Activities For Kids
          </h2>
          <h3 className="text-xl md:text-2xl  mt-2" style={{ color: '#1891CD' }}>
            Engagement
          </h3>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 rounded-full" style={{ backgroundColor: '#E1872B' }} />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-700 text-lg text-center max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Every activity is designed to nurture brain development, emotional balance, and social bonding, while keeping learning joyful and meaningful. Every giggle grows a brain cell. Every day builds confidence. The child gradually learns his own identity, learns to relate to peers, with the educator, with father and mother and the adult figures outside their family life.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#f7f9fc] rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: '#E1872B' }}>
                {activity.icon}
              </div>
              <h3 className="text-xl  font-bold mb-3" style={{ color: '#351C5A' }}>
                {activity.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {activity.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
