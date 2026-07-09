'use client';
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
    { src: '/images/growing-in-confidence/img-01.png', alt: 'Child playing with building blocks' },
    { src: '/images/growing-in-confidence/img-02.png', alt: 'Child painting and exploring colors' },
    { src: '/images/growing-in-confidence/img-03.png', alt: 'Children reading books together' },
    { src: '/images/growing-in-confidence/img-04.png', alt: 'Child solving puzzles' },
    { src: '/images/growing-in-confidence/img-05.png', alt: 'Children playing outdoors' },
    { src: '/images/growing-in-confidence/img-06.png', alt: 'Child engaged in sensory play' },
    { src: '/images/growing-in-confidence/img-07.png', alt: 'Children in classroom activity' },
    { src: '/images/growing-in-confidence/img-08.png', alt: 'Child learning with educational toys' },
    { src: '/images/growing-in-confidence/img-09.png', alt: 'Children collaborating on a project' },
    { src: '/images/growing-in-confidence/img-10.png', alt: 'Child practicing motor skills' },
    { src: '/images/growing-in-confidence/img-11.png', alt: 'Children during music and movement' },
    { src: '/images/growing-in-confidence/img-12.png', alt: 'Child exploring nature and outdoors' },
  ];

  return (
    <section className="relative py-16 overflow-hidden" style={{ backgroundColor: '#FCF9F4' }}>


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
              loading="lazy"
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
              href="/ciao-baby/"
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
              href="/baby-sensory/"
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
              loading="lazy"
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
              loading="lazy"
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
              href="/day-care/"
              className="inline-block px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ backgroundColor: '#e4984d' }}
            >
              Read More
            </a>
          </motion.div>
        </div>

        {/* Growing In Confidence Section */}
        <div className="mt-24">
          <div className="text-center max-w-4xl mx-auto mb-12">
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
                    <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                  <h3 className="text-sm font-semibold" style={{ color: '#e4984d' }}>{feature.title}</h3>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/pre-school/"
                className="inline-block px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                style={{ backgroundColor: '#e4984d' }}
              >
                Read More
              </a>
            </div>
          </div>

          {/* Right image gallery */}
          <div className="w-full h-[400px]">
            <div className="flex gap-2 h-full">
              {/* Column 1 */}
              <div className="flex-1 flex flex-col gap-2 pt-8">
                <img src={images[0].src} alt={images[0].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
                <img src={images[1].src} alt={images[1].alt} className="w-full flex-[2] rounded-lg object-cover min-h-0" loading="lazy" />
              </div>
              {/* Column 2 */}
              <div className="flex-1 flex flex-col gap-2">
                <img src={images[2].src} alt={images[2].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
                <img src={images[3].src} alt={images[3].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
              </div>
              {/* Column 3 */}
              <div className="flex-1 flex flex-col gap-2 pt-12">
                <img src={images[4].src} alt={images[4].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
                <img src={images[5].src} alt={images[5].alt} className="w-full flex-[1.2] rounded-lg object-cover min-h-0" loading="lazy" />
                <img src={images[6].src} alt={images[6].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
              </div>
              {/* Column 4 */}
              <div className="flex-1 flex flex-col gap-2 pt-4">
                <img src={images[7].src} alt={images[7].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
                <img src={images[8].src} alt={images[8].alt} className="w-full flex-[1.3] rounded-lg object-cover min-h-0" loading="lazy" />
              </div>
              {/* Column 5 */}
              <div className="flex-1 flex flex-col gap-2">
                <img src={images[9].src} alt={images[9].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
                <img src={images[10].src} alt={images[10].alt} className="w-full flex-[1.2] rounded-lg object-cover min-h-0" loading="lazy" />
                <img src={images[11].src} alt={images[11].alt} className="w-full flex-[1.5] rounded-lg object-cover min-h-0" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgeGroupsIntro;
