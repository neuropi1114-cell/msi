'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Drawer from '../layout/Drawer';

const AgeDetail = ({ group, reversed, first }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState(() =>
    group.accordion ? group.accordion.map((_, i) => i) : []
  );

  const toggleAccordion = (i) => {
    setOpenAccordions((prev) =>
      prev.includes(i) ? prev.filter((item) => item !== i) : [...prev, i]
    );
  };

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
        <div className="mt-3 space-y-3">
          {group.accordion.map((item, i) => {
            const isOpen = openAccordions.includes(i);
            return (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div className="flex items-center gap-3 my-3">
                    <span className="text-msi-blue font-bold text-3xl md:text-4xl select-none">+</span>
                  </div>
                )}
                <div>
                  <button
                    onClick={() => toggleAccordion(i)}
                    className="w-full py-1 text-left cursor-pointer focus:outline-none"
                  >
                    <h2 className="text-2xl md:text-3xl font-bold">
                      {item.title}
                    </h2>
                  </button>
                  {isOpen && (
                    <div className="mt-1 pb-1">
                      <p className="leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {group.title}
          </h2>
          <p className="mb-6 leading-relaxed">{group.description}</p>
        </>
      )}
      {!group.accordion && (group.drawer ? (
        <>
          <button
            onClick={() => setDrawerOpen(true)}
            className="font-linotte inline-block px-6 py-3 bg-msi-blue text-white rounded-full font-[200] hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
          >
            Read More
          </button>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title={group.drawer.title} side="left">
            <div className="space-y-3">
              {group.drawer.paragraphs.map((paragraph, i) => (
                <p key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
          </Drawer>
        </>
      ) : (
        <a
          href={group.link}
          className="font-linotte inline-block px-6 py-3 bg-msi-blue text-white rounded-full font-[200] hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-msi-blue">
              {data.header.title}
            </h2>
            <h2>{data.header.subtitle}</h2>
            <p className="text-lg leading-relaxed">{data.header.description}</p>
          </motion.div>
        )}

        {data.groups.map((group, index) => (
          <AgeDetail key={index} group={group} reversed={group.reversed} first={index === 0} />
        ))}
      </div>
    </section>
  );
};

export default AgeGroupsIntro;