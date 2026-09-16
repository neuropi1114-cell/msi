'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Drawer from '../layout/Drawer';

const AgeDetail = ({ group, reversed, first }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const content = (
    <motion.div
      initial={{ opacity: 0, x: reversed ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <h3 className="text-sm font-semibold mb-2 tracking-wider" style={{ color: '#369bd0' }}>
        {group.ageRange}
      </h3>
      <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#e4984d' }}>
        {group.title}
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">{group.description}</p>
      {group.drawer ? (
        <>
          <button
            onClick={() => setDrawerOpen(true)}
            className="inline-block px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            style={{ backgroundColor: '#e4984d' }}
          >
            Read More
          </button>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title={group.drawer.title} side="left">
            <div className="space-y-4">
              {group.drawer.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </Drawer>
        </>
      ) : (
        <a
          href={group.link}
          className="inline-block px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          style={{ backgroundColor: '#e4984d' }}
        >
          Read More
        </a>
      )}
    </motion.div>
  );

  const media = (
    <motion.div
      initial={{ opacity: 0, x: reversed ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={group.image}
        alt={group.alt}
        className="w-full rounded-2xl shadow-xl"
        loading="lazy"
      />
    </motion.div>
  );

  return (
    <div className={`${first ? '' : 'mt-16 '}grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
      {reversed ? (
        <>
          <div className="order-2 lg:order-1">{content}</div>
          <div className="order-1 lg:order-2">{media}</div>
        </>
      ) : (
        <>
          <div>{media}</div>
          <div>{content}</div>
        </>
      )}
    </div>
  );
};

const GrowingInConfidence = ({ growing }) => {
  return (
    <div className="mt-24">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <span className="font-schoolbell text-[22px] font-normal text-msi-blue">
          {growing.span}
        </span>
        <h2>{growing.title}</h2>
        <p className="text-gray-600 mb-8 leading-relaxed text-justify">
          {growing.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {growing.features.map((feature, index) => (
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
            href={growing.link}
            className="inline-block px-6 py-3 text-white rounded-full font-semibold hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            style={{ backgroundColor: '#e4984d' }}
          >
            Read More
          </a>
        </div>
      </div>

      <div className="w-full h-[400px]">
        <div className="flex gap-2 h-full">
          <div className="flex-1 flex flex-col gap-2 pt-8">
            <img src={growing.images[0].src} alt={growing.images[0].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[1].src} alt={growing.images[1].alt} className="w-full flex-[2] rounded-lg object-cover min-h-0" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <img src={growing.images[2].src} alt={growing.images[2].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[3].src} alt={growing.images[3].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-2 pt-12">
            <img src={growing.images[4].src} alt={growing.images[4].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[5].src} alt={growing.images[5].alt} className="w-full flex-[1.2] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[6].src} alt={growing.images[6].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-2 pt-4">
            <img src={growing.images[7].src} alt={growing.images[7].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[8].src} alt={growing.images[8].alt} className="w-full flex-[1.3] rounded-lg object-cover min-h-0" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <img src={growing.images[9].src} alt={growing.images[9].alt} className="w-full flex-[1] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[10].src} alt={growing.images[10].alt} className="w-full flex-[1.2] rounded-lg object-cover min-h-0" loading="lazy" />
            <img src={growing.images[11].src} alt={growing.images[11].alt} className="w-full flex-[1.5] rounded-lg object-cover min-h-0" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AgeGroupsIntro = ({ data }) => {
  return (
    <section className="relative py-16 overflow-hidden" style={{ backgroundColor: '#FCF9F4' }}>
      <div className="container mx-auto px-4 md:px-12">
        {data.header && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#369bd0' }}>
              {data.header.title}
            </h2>
            <h2>{data.header.subtitle}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{data.header.description}</p>
          </motion.div>
        )}

        {data.groups.map((group, index) => (
          <AgeDetail key={index} group={group} reversed={group.reversed} first={index === 0} />
        ))}

        <GrowingInConfidence growing={data.growing} />
      </div>
    </section>
  );
};

export default AgeGroupsIntro;