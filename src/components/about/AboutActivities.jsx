'use client';
import { motion } from 'framer-motion';

const defaultActivitiesLeft = [
  {
    title: 'How does the child engage?',
    description: '',
    icon: '/images/nep/The_NeuroPi_Way_Icon_1.png',
  },
  {
    title: 'What captures their attention?',
    description: '',
    icon: '/images/nep/The_NeuroPi_Way_Icon_2.png',
  },
  {
    title: 'How do they communicate?',
    description: '',
    icon: '/images/nep/The_NeuroPi_Way_Icon_3.png',
  },
];

const defaultActivitiesRight = [
  {
    title: 'How do they respond to challenge?',
    description: '',
    icon: '/images/nep/The_NeuroPi_Way_Icon_4.png',
  },
  {
    title: 'What interests are emerging?',
    description: '',
    icon: '/images/nep/The_NeuroPi_Way_Icon_5.png',
  },
  {
    title: 'Where are they becoming more confident and independent?',
    description: '',
    icon: '/images/nep/The_NeuroPi_Way_Icon_6.png',
  },
];

export default function AboutActivities({
  title = "Activities For Kids",
  subtitle = "Engagement",
  description = "Every activity is designed to nurture brain development, emotional balance, and social bonding, while keeping learning joyful and meaningful. Every giggle grows a brain cell. Every day builds confidence. The child gradually learns his own identity, learns to relate to peers, with the educator, with father and mother and the adult figures outside their family life.",
  itemsLeft = null,
  itemsRight = null,
}) {
  const leftList = itemsLeft || defaultActivitiesLeft;
  const rightList = itemsRight || defaultActivitiesRight;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {title && <h2>{title}</h2>}
          {subtitle && <h3>{subtitle}</h3>}
        </motion.div>

        {description && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center max-w-3xl mx-auto my-8"
          >
            {description}
          </motion.p>
        )}

        <div className="flex justify-center items-center mb-12">
          <div className="flex items-center w-full max-w-md">
            <div className="flex-1 h-px bg-gray-300" />
            <div className="mx-4 w-3 h-3 rounded-full bg-gray-400" />
            <div className="flex-1 h-px bg-gray-300" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-10">
            {leftList.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {typeof activity.icon === 'string' ? (
                    <img src={activity.icon} alt="" className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <div className="w-full h-full rounded-full flex items-center justify-center text-white bg-msi-orange p-2">
                      {activity.icon}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-msi-purple">
                    {activity.title}
                  </h3>
                  {activity.description ? (
                    <p>
                      {activity.description}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <img
              src="/images/about/child-man.png"
              alt="Child and parent at My School ITALY"
              className="w-full max-w-[383px] h-auto"
              loading="lazy"
            />
          </motion.div>

          <div className="space-y-10">
            {rightList.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 flex-row-reverse"
              >
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {typeof activity.icon === 'string' ? (
                    <img src={activity.icon} alt="" className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <div className="w-full h-full rounded-full flex items-center justify-center text-white bg-msi-orange p-2">
                      {activity.icon}
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <h3 className="text-msi-purple">
                    {activity.title}
                  </h3>
                  {activity.description ? (
                    <p>
                      {activity.description}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
