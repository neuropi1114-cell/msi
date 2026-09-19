'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NeuroPiApproach() {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-16 relative overflow-hidden bg-white">
      {/* Blurred Background Image Layer */}
      <div className="absolute inset-0 z-0 scale-105 filter blur-xl opacity-20">
        <Image
          src="/images/nep/inspire_me_eat.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Clean White Overlay */}
      <div className="absolute inset-0 z-0 bg-white/70" />

      <div className="container mx-auto px-4 md:px-12 max-w-[1240px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100"
          >
            <h3>Small Tummies Have Big Developmental Needs.</h3>
            <div className="my-3">
              <Image
                src="/images/nep/inspire_me_eat_logo.png"
                alt="INSPIRE ME EAT"
                width={350}
                height={109}
                className="w-auto h-16 sm:h-20 md:h-24 object-contain"
                priority
              />
            </div>

            <div className="mt-5 space-y-4">
              <p>
                <strong>Food is not an add-on to childcare. It is part of a child&apos;s daily development and wellbeing.</strong>
              </p>

              <p>
                Through <strong>INSPIRE ME EAT</strong>, we bring attention to age-appropriate meals, portions, textures, variety, hygiene, and positive mealtime experiences.
              </p>

              <div>
                <p className="font-medium text-gray-800 mb-2">
                  Depending on the centre and program, children can receive:
                </p>
                <div className="flex flex-wrap items-center gap-2 my-2">
                  <span className="bg-orange-50 text-msi-orange font-bold px-4 py-1.5 rounded-full text-sm border border-msi-orange/20">
                    Breakfast
                  </span>
                  <span className="text-msi-purple font-bold hidden sm:inline">&bull;</span>
                  <span className="bg-orange-50 text-msi-orange font-bold px-4 py-1.5 rounded-full text-sm border border-msi-orange/20">
                    Lunch
                  </span>
                  <span className="text-msi-purple font-bold hidden sm:inline">&bull;</span>
                  <span className="bg-orange-50 text-msi-orange font-bold px-4 py-1.5 rounded-full text-sm border border-msi-orange/20">
                    Snacks
                  </span>
                </div>
              </div>

              <p>
                We also recognise that mealtimes develop much more than appetite. Children practise independence, coordination, communication, social interaction, and everyday routines.
              </p>

              <div className="pt-4 border-t border-gray-200 mt-5">
                <p className="italic text-msi-purple font-bold">
                  &ldquo;At MSI, even a spoon can become a learning tool.&rdquo;
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <img src="/images/gallery/bee.png" alt="" className="w-auto h-5" loading="lazy" />
            </div>
          </motion.div>

          {/* Right Side: Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 h-[350px] sm:h-[420px] lg:h-[480px] w-full relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
          >
            <Image
              src="/images/nep/inspire_me_eat.png"
              alt="INSPIRE ME EAT - Children mealtime at My School ITALY"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
