'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutFounderMessage() {
  return (
    <section className="py-10 lg:py-14 bg-[#ffffff] text-[#111010] border-b border-black/[0.06]">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5"
          >
            <div className="space-y-2">
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#f4f2eb] text-[#78716c] text-[11px] font-bold uppercase tracking-widest border border-black/[0.05]">
                A WELCOME FROM OUR FOUNDER
              </div>
              <div className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight text-msi-green not-italic leading-tight">
                <h2>Dear Parents, Welcome to <br />My School ITALY.</h2>
              </div>
            </div>

            <div className="space-y-3 text-[#374151] text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Every child enters the world with a unique temperament, curiosity, rhythm and way of learning. Our responsibility is not to make children the same. It is to understand each child well enough to help them become more of who they can be.
              </p>
              <p>
                This belief has shaped My School ITALY — from our European early-years foundations to the neuroscience-informed approach we practise today through NeuroPi.
              </p>
              <p>
                We believe learning cannot be separated from care, emotional safety, movement, nutrition, relationships, stories, play and rest. And school cannot be separated from home.
              </p>
              <p>
                That is why My School ITALY is more than a preschool. It is a place where teachers observe, children explore, parents stay connected, and every child’s developmental journey is respected.
              </p>
              <p>
                Our hope is simple: that children leave us curious enough to question, confident enough to try, resilient enough to try again, and compassionate enough to make their world better.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-4 border-t border-black/[0.08] flex items-center justify-between">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-widest text-[#78716c] mb-0.5">
                  <p>FOUNDER & CHIEF PEDAGOGUE</p>
                </div>
                <div className="text-2xl sm:text-3xl font-schoolbell text-msi-orange tracking-tight">
                  <h3>Dr. Aperna Volluru</h3>
                </div>
              </div>
              <div className="text-right text-xs text-[#78716c] hidden sm:block">
                <div>My School ITALY</div>
                <div className="font-bold text-[#111010]">NeuroPi Pedagogy</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Portrait Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-end"
          >
            <div className="relative aspect-[4/5] w-full max-w-[420px] max-h-[460px]">
              <Image
                src="/images/aperna-founder.png"
                alt="Dr Aperna Volluru - Founder, My School ITALY"
                fill
                className="object-contain object-bottom"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}



