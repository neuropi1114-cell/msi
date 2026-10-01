'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const teamMembers = [
  {
    name: 'Mr. Prasad Garapati',
    role: 'Chairman',
    image: '/images/prasad-garapati-chairman.jpg',
    link: 'https://neuropi.ai/Prasad.html',
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
  const [activeMember, setActiveMember] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMember(null);
      }
    };
    if (activeMember) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeMember]);

  return (
    <>
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
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <button
                  type="button"
                  onClick={() => member.link && setActiveMember(member)}
                  className="w-full text-left h-full cursor-pointer focus:outline-none group"
                >
                  <div className="bg-white rounded-2xl p-4 border border-black/[0.08] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
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
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Embedded Iframe Modal */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 bg-black/70 backdrop-blur-sm"
            onClick={() => setActiveMember(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-5xl h-[85vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative border border-gray-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-msi-purple text-white">
                <div>
                  <h3 className="font-bold text-lg leading-tight">{activeMember.name}</h3>
                  <p className="text-xs text-white/80">{activeMember.role} — Profile</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveMember(null)}
                    className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Body / Iframe */}
              <div className="flex-1 w-full h-full bg-gray-50 relative">
                <iframe
                  src={activeMember.link}
                  title={`${activeMember.name} Profile`}
                  className="w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
