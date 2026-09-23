'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Drawer from '../layout/Drawer';

const defaultCards = [
  {
    img: '/images/baby-sensory/Why_MSI_9.png',
    alt: 'Early childhood development',
    text: 'Early childhood deserves much more than supervision or early academics.',
    objectPos: 'object-center',
  },
  {
    img: '/images/baby-sensory/meaningful_experiences.png',
    alt: 'Everyday experiences in child development',
    text: 'At MSI, everyday experiences are treated as meaningful parts of development.',
  },
  {
    img: '/images/baby-sensory/early_years_influence.png',
    alt: 'Early years influence in child development',
    text: 'The early years are small in number, but enormous in influence.',
    objectPos: 'center 5%',
  },
];

export default function SensoryCardsSection({
  cards = defaultCards,
  className = "pt-10 md:pt-14 pb-4 md:pb-6 bg-[#f7f9fc]",
}) {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <motion.section
        className={className}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cards.map((item, i) => {
              const isClickable = Boolean(item.drawerBody || item.onClick);
              return (
                <motion.div
                  key={i}
                  onClick={() => {
                    if (item.onClick) item.onClick();
                    else if (item.drawerBody) setActiveCard(item);
                  }}
                  className={`rounded-[10px] overflow-hidden shadow-lg group bg-white ${isClickable ? 'cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1' : ''
                    }`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className={`overflow-hidden relative ${item.aspect || (item.text ? 'h-72 sm:h-80' : 'aspect-[4/5] w-full')}`}>
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      style={{ objectPosition: item.objectPos || 'top' }}
                      className={`${item.objectFit || 'object-cover'} transition-transform duration-300 group-hover:scale-[1.03]`}
                    />
                  </div>
                  {item.text && (
                    <div className="p-6 text-center bg-[#F9FAFA]">
                      <p className="text-gray-700 leading-relaxed text-lg">{item.text}</p>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {activeCard && (
        <Drawer
          open={Boolean(activeCard)}
          onClose={() => setActiveCard(null)}
          title={activeCard.drawerTitle || activeCard.alt || "Details"}
          side="left"
        >
          {activeCard.drawerBody}
        </Drawer>
      )}
    </>
  );
}
