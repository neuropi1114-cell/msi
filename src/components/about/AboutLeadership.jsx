'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Mr. Prasad Garapati',
    role: 'Chairman',
    image: '/images/prasad-garapati-chairman.jpg',
    link: 'https://www.linkedin.com/in/pgarapati/',
  },
  {
    name: 'Dr. Aperna Volluru',
    role: 'Founder',
    image: '/images/about/Aperna_in_blue_half.jpeg',
    link: 'https://www.volluruaperna.com/',
  },
  {
    name: 'Dr. Dr. Peter Gseller',
    role: 'Venture Philanthropist',
    image: '/images/peter-gseller-founding-investor.jpg',
    link: 'https://neuropi.ai/Peter.html',
  },
  {
    name: 'Eng. MNR Gupta',
    role: 'CEO',
    image: '/images/maddula-gupta-coo.jpg',
    link: 'https://mnrgupta.com/',
  },
  {
    name: 'Dr. Antonio Andreazzo',
    role: 'Managing Director',
    image: '/images/antonio-andreazzo-cpo.webp',
    link: 'https://neuropi.ai/Antonio.html',
  },
];

export default function AboutLeadership() {
  return (
    <section className="py-20 lg:py-28 bg-[#ffffff] border-b border-black/[0.06]">
      <div className="container mx-auto px-4 md:px-12 max-w-7xl space-y-16">

        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-3"
          >
            <div className="inline-block px-3.5 py-1 rounded-full bg-[#f4f2eb] text-[#78716c] text-xs font-bold uppercase tracking-widest border border-black/[0.05]">
              EXECUTIVE GOVERNANCE
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-msi-green not-italic leading-[1.18]">
              <h2>Leadership Team</h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 text-[#4b5563] text-base sm:text-lg leading-relaxed font-normal"
          >
            <p>
              Our leadership brings together entrepreneurship, philanthropy, global experience, technology and human development, united by a shared commitment to giving every child the strongest possible start in life.
            </p>
          </motion.div>
        </div>

        {/* Executive Board Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, idx) => {
            const cardContent = (
              <div className="bg-white rounded-2xl p-4 border border-black/[0.08] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group h-full">
                <div className="space-y-3">
                  <div className="aspect-[4/5] rounded-xl overflow-hidden relative bg-[#f5f5f7] border border-black/[0.04]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-0.5 pt-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-msi-orange">
                      {member.role}
                    </div>
                    <div className="text-base font-bold text-msi-blue tracking-tight group-hover:text-msi-orange transition-colors leading-snug flex items-center justify-between gap-1">
                      <span>{member.name}</span>
                      {member.link && (
                        <svg className="w-3.5 h-3.5 text-msi-orange shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-black/[0.05] text-[11px] font-semibold text-[#78716c] uppercase tracking-wider">
                  My School ITALY
                </div>
              </div>
            );

            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                {member.link ? (
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Visit ${member.name}'s official website`}
                    className="block h-full cursor-pointer"
                  >
                    {cardContent}
                  </a>
                ) : (
                  cardContent
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}





