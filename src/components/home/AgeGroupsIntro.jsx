'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Drawer from '../layout/Drawer';
import GrowingInConfidence from './GrowingInConfidence';

const AgeDetail = ({ group, reversed, first }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(group.accordion ? 0 : null);

  const content = (
    <motion.div
      initial={{ opacity: 0, x: reversed ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <h3>
        {group.ageRange}
      </h3>
      {group.accordion ? (
        <div className="mt-2">
          {group.accordion.map((item, i) => {
            const isOpen = openAccordion === i;
            return (
              <div key={i} className={i === 0 ? '' : 'border-t border-gray-100'}>
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : i)}
                  className="w-full flex items-center justify-between py-4 text-left cursor-pointer"
                >
                  <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#e4984d' }}>
                    {item.title}
                  </h2>
                  <span
                    className="text-2xl font-normal leading-none ml-4 transition-transform duration-300"
                    style={{ color: '#e4984d', transform: isOpen ? 'rotate(45deg)' : 'rotate(0)' }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-6 text-[#0A1539] leading-relaxed" style={{ color: '#0A1539' }}>{item.content}</p>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#e4984d' }}>
            {group.title}
          </h2>
          <p className="text-[#0A1539] mb-6 leading-relaxed" style={{ color: '#0A1539' }}>{group.description}</p>
        </>
      )}
      {!group.accordion && (group.drawer ? (
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
                <p key={i} className="text-[#0A1539] leading-relaxed" style={{ color: '#0A1539' }}>
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
      ))}
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
            <p className="text-[#0A1539] text-lg leading-relaxed" style={{ color: '#0A1539' }}>{data.header.description}</p>
          </motion.div>
        )}

        {data.groups.map((group, index) => (
          <AgeDetail key={index} group={group} reversed={group.reversed} first={index === 0} />
        ))}

        {data.growing && <GrowingInConfidence growing={data.growing} />}
      </div>
    </section>
  );
};

export default AgeGroupsIntro;