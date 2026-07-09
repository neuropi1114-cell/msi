'use client';

import React from 'react';
import Image from 'next/image';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';
import { Baby, BookOpen, Music } from 'lucide-react';
import { motion } from 'framer-motion';

export default function BabySensoryPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* HERO with shape dividers */}
        <section className="relative overflow-hidden text-white" style={{ minHeight: '400px' }}>
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/baby-sensory/hero-bg.jpg)' }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: '#31243A', opacity: 0.5 }} />

          {/* wave-brush top shape */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10" style={{ transform: 'rotate(180deg)' }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="none" className="block w-full relative" style={{ height: '15px', transform: 'translateX(-50%)', left: '50%', width: 'calc(100% + 1.3px)' }}>
              <path fill="#F4F4F4" d="M283.5,9.7c0,0-7.3,4.3-14,4.6c-6.8,0.3-12.6,0-20.9-1.5c-11.3-2-33.1-10.1-44.7-5.7s-12.1,4.6-18,7.4c-6.6,3.2-20,9.6-36.6,9.3C131.6,23.5,99.5,7.2,86.3,8c-1.4,0.1-6.6,0.8-10.5,2c-3.8,1.2-9.4,3.8-17,4.7c-3.2,0.4-8.3,1.1-14.2,0.9c-1.5-0.1-6.3-0.4-12-1.6c-5.7-1.2-11-3.1-15.8-3.7C6.5,9.2,0,10.8,0,10.8V0h283.5V9.7z M260.8,11.3c-0.7-1-2-0.4-4.3-0.4c-2.3,0-6.1-1.2-5.8-1.1c0.3,0.1,3.1,1.5,6,1.9C259.7,12.2,261.4,12.3,260.8,11.3z M242.4,8.6c0,0-2.4-0.2-5.6-0.9c-3.2-0.8-10.3-2.8-15.1-3.5c-8.2-1.1-15.8,0-15.1,0.1c0.8,0.1,9.6-0.6,17.6,1.1c3.3,0.7,9.3,2.2,12.4,2.7C239.9,8.7,242.4,8.6,242.4,8.6z M185.2,8.5c1.7-0.7-13.3,4.7-18.5,6.1c-2.1,0.6-6.2,1.6-10,2c-3.9,0.4-8.9,0.4-8.8,0.5c0,0.2,5.8,0.8,11.2,0c5.4-0.8,5.2-1.1,7.6-1.6C170.5,14.7,183.5,9.2,185.2,8.5z M199.1,6.9c0.2,0-0.8-0.4-4.8,1.1c-4,1.5-6.7,3.5-6.9,3.7c-0.2,0.1,3.5-1.8,6.6-3C197,7.5,199,6.9,199.1,6.9z M283,6c-0.1,0.1-1.9,1.1-4.8,2.5s-6.9,2.8-6.7,2.7c0.2,0,3.5-0.6,7.4-2.5C282.8,6.8,283.1,5.9,283,6z M31.3,11.6c0.1-0.2-1.9-0.2-4.5-1.2s-5.4-1.6-7.8-2C15,7.6,7.3,8.5,7.7,8.6C8,8.7,15.9,8.3,20.2,9.3c2.2,0.5,2.4,0.5,5.7,1.6S31.2,11.9,31.3,11.6z M73,9.2c0.4-0.1,3.5-1.6,8.4-2.6c4.9-1.1,8.9-0.5,8.9-0.8c0-0.3-1-0.9-6.2-0.3S72.6,9.3,73,9.2z M71.6,6.7C71.8,6.8,75,5.4,77.3,5c2.3-0.3,1.9-0.5,1.9-0.6c0-0.1-1.1-0.2-2.7,0.2C74.8,5.1,71.4,6.6,71.6,6.7z M93.6,4.4c0.1,0.2,3.5,0.8,5.6,1.8c2.1,1,1.8,0.6,1.9,0.5c0.1-0.1-0.8-0.8-2.4-1.3C97.1,4.8,93.5,4.2,93.6,4.4z M65.4,11.1c-0.1,0.3,0.3,0.5,1.9-0.2s2.6-1.3,2.2-1.2s-0.9,0.4-2.5,0.8C65.3,10.9,65.5,10.8,65.4,11.1z M34.5,12.4c-0.2,0,2.1,0.8,3.3,0.9c1.2,0.1,2,0.1,2-0.2c0-0.3-0.1-0.5-1.6-0.4C36.6,12.8,34.7,12.4,34.5,12.4z M152.2,21.1c-0.1,0.1-2.4-0.3-7.5-0.3c-5,0-13.6-2.4-17.2-3.5c-3.6-1.1,10,3.9,16.5,4.1C150.5,21.6,152.3,21,152.2,21.1z" />
              <path fill="#F4F4F4" d="M269.6,18c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3C267.7,18.8,269.7,18,269.6,18z" />
              <path fill="#F4F4F4" d="M227.4,9.8c-0.2-0.1-4.5-1-9.5-1.2c-5-0.2-12.7,0.6-12.3,0.5c0.3-0.1,5.9-1.8,13.3-1.2S227.6,9.9,227.4,9.8z" />
              <path fill="#F4F4F4" d="M204.5,13.4c-0.1-0.1,2-1,3.2-1.1c1.2-0.1,2,0,2,0.3c0,0.3-0.1,0.5-1.6,0.4C206.4,12.9,204.6,13.5,204.5,13.4z" />
              <path fill="#F4F4F4" d="M201,10.6c0-0.1-4.4,1.2-6.3,2.2c-1.9,0.9-6.2,3.1-6.1,3.1c0.1,0.1,4.2-1.6,6.3-2.6S201,10.7,201,10.6z" />
              <path fill="#F4F4F4" d="M154.5,26.7c-0.1-0.1-4.6,0.3-7.2,0c-7.3-0.7-17-3.2-16.6-2.9c0.4,0.3,13.7,3.1,17,3.3C152.6,27.5,154.6,26.8,154.5,26.7z" />
              <path fill="#F4F4F4" d="M41.9,19.3c0,0,1.2-0.3,2.9-0.1c1.7,0.2,5.8,0.9,8.2,0.7c4.2-0.4,7.4-2.7,7-2.6c-0.4,0-4.3,2.2-8.6,1.9c-1.8-0.1-5.1-0.5-6.7-0.4S41.9,19.3,41.9,19.3z" />
              <path fill="#F4F4F4" d="M75.5,12.6c0.2,0.1,2-0.8,4.3-1.1c2.3-0.2,2.1-0.3,2.1-0.5c0-0.1-1.8-0.4-3.4,0C76.9,11.5,75.3,12.5,75.5,12.6z" />
              <path fill="#F4F4F4" d="M15.6,13.2c0-0.1,4.3,0,6.7,0.5c2.4,0.5,5,1.9,5,2c0,0.1-2.7-0.8-5.1-1.4C19.9,13.7,15.7,13.3,15.6,13.2z" />
            </svg>
          </div>

          {/* clouds bottom shape */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 27.8" preserveAspectRatio="xMidYMax slice" className="block w-full relative" style={{ transform: 'translateX(-50%)', left: '50%', width: 'calc(100% + 1.3px)' }}>
              <path fill="#FFFFFF" d="M265.8 3.5c-10.9 0-15.9 6.2-15.9 6.2s-3.6-3.5-9.2-.9c-9.1 4.1-4.4 13.4-4.4 13.4s-1.2.2-1.9.9c-.6.7-.5 1.9-.5 1.9s-1-.5-2.3-.2c-1.3.3-1.6 1.4-1.6 1.4s.4-3.4-1.5-5c-3.9-3.4-8.3-.2-8.3-.2s-.6-.7-.9-.9c-.4-.2-1.2-.2-1.2-.2s-4.4-3.6-11.5-2.6-10.4 7.9-10.4 7.9-.5-3.3-3.9-4.9c-4.8-2.4-7.4 0-7.4 0s2.4-4.1-1.9-6.4-6.2 1.2-6.2 1.2-.9-.5-2.1-.5-2.3 1.1-2.3 1.1.1-.7-1.1-1.1c-1.2-.4-2 0-2 0s3.6-6.8-3.5-8.9c-6-1.8-7.9 2.6-8.4 4-.1-.3-.4-.7-.9-1.1-1-.7-1.3-.5-1.3-.5s1-4-1.7-5.2c-2.7-1.2-4.2 1.1-4.2 1.1s-3.1-1-5.7 1.4-2.1 5.5-2.1 5.5-.9 0-2.1.7-1.4 1.7-1.4 1.7-1.7-1.2-4.3-1.2c-2.6 0-4.5 1.2-4.5 1.2s-.7-1.5-2.8-2.4c-2.1-.9-4 0-4 0s2.6-5.9-4.7-9c-7.3-3.1-12.6 3.3-12.6 3.3s-.9 0-1.9.2c-.9.2-1.5.9-1.5.9S99.4 3 94.9 3.9c-4.5.9-5.7 5.7-5.7 5.7s-2.8-5-12.3-3.9-11.1 6-11.1 6-1.2-1.4-4-.7c-.8.2-1.3.5-1.8.9-.9-2.1-2.7-4.9-6.2-4.4-3.2.4-4 2.2-4 2.2s-.5-.7-1.2-.7h-1.4s-.5-.9-1.7-1.4-2.4 0-2.4 0-2.4-1.2-4.7 0-3.1 4.1-3.1 4.1-1.7-1.4-3.6-.7c-1.9.7-1.9 2.8-1.9 2.8s-.5-.5-1.7-.2c-1.2.2-1.4.7-1.4.7s-.7-2.3-2.8-2.8c-2.1-.5-4.3.2-4.3.2s-1.7-5-11.1-6c-3.8-.4-6.6.2-8.5 1v21.2h283.5V11.1c-.9.2-1.6.4-1.6.4s-5.2-8-16.1-8z" />
            </svg>
          </div>

          <div className="relative container mx-auto px-4 md:px-12 flex items-center justify-center" style={{ minHeight: '400px' }}>
            <h1 className="text-5xl md:text-7xl font-bold text-center">Baby Sensory</h1>
          </div>
        </section>

        {/* Welcome + Why unique */}
        <motion.section
          className="py-16 md:py-20"
          style={{ background: 'linear-gradient(135deg, #f8f4ff 0%, #ffffff 100%)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Image
                  src="/images/baby-sensory/welcome-baby.jpg"
                  alt="Baby Sensory class at My School ITALY"
                  width={600}
                  height={450}
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-msi-orange font-semibold uppercase tracking-wider text-lg mb-1">Welcome To</p>
                <h2 className="text-4xl md:text-5xl text-msi-purple font-bold mb-2">Baby Sensory</h2>
                <div className="w-20 h-1 bg-msi-orange mb-6" />
                <h3 className="text-2xl text-msi-purple font-bold mb-4">What makes BABY SENSORY unique?</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  What makes Baby Sensory unique is that every activity has been carefully designed to stimulate your baby&rsquo;s senses and move development and learning forwards.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features - 3 icon boxes */}
        <section className="py-16 md:py-20 bg-[#e0872b]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Baby, title: 'LESSON PLAN', text: 'And behind every Baby Sensory session, there\'s an incredibly detailed lesson plan backing up everything your baby touches, sees, hears, smells, and feels.' },
                { icon: BookOpen, title: 'CREATIVE PLAY', text: 'Baby Sensory provides ideas for creative play, massage, tummy time, movement, visual development, textures, scents, and music in simple practical ways that can be easily repeated at home.' },
                { icon: Music, title: 'SONG & RHYMES', text: 'We also use a combination of original and traditional songs and rhymes to develop early speech and language skills, and sensory signing activities to help you and your baby communicate from birth.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    className="text-center text-white"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                  >
                    <div className="flex justify-center mb-4">
                      <Icon className="w-[50px] h-[50px]" />
                    </div>
                    <h3 className="text-2xl font-bold uppercase mb-3">{item.title}</h3>
                    <p className="text-white/90 leading-relaxed">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Enrol CTA */}
        <motion.section
          className="py-16 bg-msi-purple text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 md:px-12 flex flex-col md:flex-row items-center justify-between max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-2">ENROL YOUR CHILD</h2>
              <p className="text-white/80 max-w-xl">
                Interested in a community of global learners, child psychologists, paediatricians and educators, who, like yourself, believe in the power of a progressive, quality education to make the world a better place?
              </p>
            </motion.div>
            <motion.a
              href="/admissions"
              className="inline-block bg-msi-orange text-white font-bold py-3 px-10 rounded-full hover:bg-msi-orange/90 transition-colors text-lg mt-6 md:mt-0 flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Enrol Now
            </motion.a>
          </div>
        </motion.section>

        {/* Early Learning for Babies */}
        <motion.section
          className="py-16 md:py-20 bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 md:px-12 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div />
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl text-msi-purple font-bold mb-4">Early Learning for Babies</h2>
                <p className="text-msi-orange font-semibold text-lg mb-4">It&rsquo;s your day, so is the treat!</p>
                <p className="text-gray-600 leading-relaxed mb-2">
                  We want you to enjoy every second of your baby&rsquo;s miraculous development. That&rsquo;s why everything we do has a purpose.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We welcome you to feed or cuddle your baby during the session.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* 3 Image Cards */}
        <motion.section
          className="py-16 md:py-20 bg-[#f7f9fc]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  img: '/images/baby-sensory/card-1.jpg',
                  alt: 'Sensory area arranged for baby visual development',
                  text: 'We\'ve arranged the sensory area to match the distance at which your baby sees objects clearly.',
                },
                {
                  img: '/images/baby-sensory/card-2.jpg',
                  alt: 'Instruments used for baby sensory stimulation',
                  text: 'We\'ve measured the decibel level of our instruments to make sure they are not too loud.',
                },
                {
                  img: '/images/baby-sensory/card-3.jpg',
                  alt: 'Soothing baby after sensory session',
                  text: 'We soothe your baby at the end of every session by mimicking the sounds of the womb.',
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-[10px] overflow-hidden shadow-lg group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <div className="overflow-hidden relative h-64">
                    <Image src={item.img} alt={item.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.01]" />
                  </div>
                  <div className="p-6 text-center bg-[#F9FAFA]">
                    <p className="text-gray-700 leading-relaxed text-lg">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
