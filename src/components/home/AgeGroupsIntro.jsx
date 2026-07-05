import React from 'react';
import { motion } from 'framer-motion';

const AgeGroupsIntro = () => {
  const features = [
    { icon: '/images/growing-in-confidence/mortarboard.png', title: 'Awesome Careers' },
    { icon: '/images/growing-in-confidence/education.png', title: 'Global Certificate' },
    { icon: '/images/growing-in-confidence/atom.png', title: 'Best Program' },
    { icon: '/images/growing-in-confidence/school-bag.png', title: 'Child Support' },
  ];

  const images = [
    '/images/growing-in-confidence/img-01.png',
    '/images/growing-in-confidence/img-02.png',
    '/images/growing-in-confidence/img-03.png',
    '/images/growing-in-confidence/img-04.png',
    '/images/growing-in-confidence/img-05.png',
    '/images/growing-in-confidence/img-06.png',
    '/images/growing-in-confidence/img-07.png',
    '/images/growing-in-confidence/img-08.png',
    '/images/growing-in-confidence/img-09.png',
    '/images/growing-in-confidence/img-10.png',
    '/images/growing-in-confidence/img-11.png',
    '/images/growing-in-confidence/img-12.png',
  ];

  return (
    <section className="relative py-16 overflow-hidden" style={{ backgroundColor: '#FCF9F4' }}>
      {/* Cloud shape divider bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none" className="w-full h-auto">
          <path fill="currentColor" className="text-white" d="M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-12">
        {/* Age Groups Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#369bd0' }}>
            Age Groups (45 Days To 7 Years)
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-6" style={{ color: '#e4984d' }}>
            Сustomised Teaching To Maximise Learning At Every Age Group
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            To maximise your child's growth, My School ITALY has a different approach designed specifically for each stage of early development. Read below to see how at each stage, your child will receive personalised teaching, developing the optimal skills for their current age.
          </p>
        </motion.div>

        {/* Age Group Detail - Sproutlings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/age-groups/sproutlings.webp"
              alt="Sproutlings"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-sm font-semibold mb-2 tracking-wider" style={{ color: '#369bd0' }}>
              Age Groups (45 Days To 1 Years)
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#e4984d' }}>
              Sproutlings
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Observations that can provide a remarkable insight into the needs, abilities, and sensitivities of your new baby. Our Ciao Baby programs are delivered by expertly trained Practitioners across the country. We would love to welcome you to our classes or answer any questions you may have.
            </p>
            <a
              href="https://myschoolitaly.com/ciao-baby/"
              className="inline-block px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#e4984d' }}
            >
              Read More
            </a>
          </motion.div>
        </div>

        {/* Age Group Detail - Mini Maestros (Reversed) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg order-2 lg:order-1"
          >
            <h3 className="text-sm font-semibold mb-2 tracking-wider" style={{ color: '#369bd0' }}>
              1 - 2 Years
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#e4984d' }}>
              Mini Maestros
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We want you to enjoy every second of your baby's miraculous development. That's why everything we do has a purpose. We welcome you to feed or cuddle your baby during the session.
            </p>
            <a
              href="https://myschoolitaly.com/baby-sensory/"
              className="inline-block px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#e4984d' }}
            >
              Read More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <img
              src="/images/age-groups/mini-maestros.webp"
              alt="Mini Maestros"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>

        {/* Age Group Detail - Astro Architect */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/images/age-groups/astro-architect.webp"
              alt="Astro Architect"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-sm font-semibold mb-2 tracking-wider" style={{ color: '#369bd0' }}>
              2 - 3 Years
            </h3>
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#e4984d' }}>
              Astro Architect
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We provide a warm, safe and nurturing environment in which children can grow and develop. Children who are treated as individuals in a loving environment are happy & confident. During these early years, our aim is to inspire toddlers with an excitement for life. We use discovery teaching to nurture curiosity in children and build the confidence to explore the world around them.
            </p>
            <a
              href="https://myschoolitaly.com/day-care/"
              className="inline-block px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#e4984d' }}
            >
              Read More
            </a>
          </motion.div>
        </div>

        {/* Growing In Confidence Section */}
        <div className="mt-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left content */}
            <div className="lg:w-1/2 text-center">
              <span className="inline-block px-4 py-1 text-sm font-semibold mb-4" style={{ color: '#369bd0' }}>
                Preschool (3-7 Years)
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: '#e4984d' }}>
                Growing In Confidence
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-justify">
                Our philosophy, our people, our commitment and our resources are all focused on helping us to give the children an excellent start in life, exposing them to gymnastics and robotics along with academics.
              </p>

              {/* Features grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="w-14 h-14 mb-3 flex items-center justify-center">
                      <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-sm font-semibold" style={{ color: '#e4984d' }}>{feature.title}</h3>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <a
                  href="https://myschoolitaly.com/pre-school/"
                  className="inline-block px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: '#e4984d' }}
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Right image gallery */}
            <div className="lg:w-1/2 relative h-[500px]">
              <div className="grid grid-cols-5 gap-2 h-full">
                {/* Column 1 */}
                <div className="flex flex-col gap-2 pt-8">
                  <img src={images[0]} alt="" className="w-full rounded-lg object-cover" />
                  <img src={images[1]} alt="" className="w-full rounded-lg object-cover" />
                </div>
                {/* Column 2 */}
                <div className="flex flex-col gap-2">
                  <img src={images[2]} alt="" className="w-full rounded-lg object-cover" />
                  <img src={images[3]} alt="" className="w-full rounded-lg object-cover" />
                </div>
                {/* Column 3 */}
                <div className="flex flex-col gap-2 pt-12">
                  <img src={images[4]} alt="" className="w-full rounded-lg object-cover" />
                  <img src={images[5]} alt="" className="w-full rounded-lg object-cover" />
                  <img src={images[6]} alt="" className="w-full rounded-lg object-cover" />
                </div>
                {/* Column 4 */}
                <div className="flex flex-col gap-2 pt-4">
                  <img src={images[7]} alt="" className="w-full rounded-lg object-cover" />
                  <img src={images[8]} alt="" className="w-full rounded-lg object-cover" />
                </div>
                {/* Column 5 */}
                <div className="flex flex-col gap-2">
                  <img src={images[9]} alt="" className="w-full rounded-lg object-cover" />
                  <img src={images[10]} alt="" className="w-full rounded-lg object-cover" />
                  <img src={images[11]} alt="" className="w-full rounded-lg object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeGroupsIntro;
