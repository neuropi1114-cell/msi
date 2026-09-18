'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Drawer from '../layout/Drawer';

const steps = [
  {
    number: '01',
    title: 'Discover MSI',
    description: 'Explore our programs, philosophy, environment and approach.',
  },
  {
    number: '02',
    title: 'Book a School Tour',
    description: 'Visit the centre, meet our team and experience the environment for yourself.',
  },
  {
    number: '03',
    title: 'Parent Counselling',
    description:
      "Tell us about your child — their routines, interests, personality, previous experiences and your family's childcare needs.",
  },
  {
    number: '04',
    title: 'Choose Your Program',
    description:
      'We help you identify the appropriate preschool, crèche, daycare or extended-care option.',
  },
  {
    number: '05',
    title: 'Experience MSI',
    description:
      'Where offered, families can experience MSI before completing the transition through our trial/settling process.',
  },
  {
    number: '06',
    title: 'Onboarding',
    description: 'We learn the important details that help us care for your child consistently.',
  },
  {
    number: '07',
    title: 'Begin the Journey',
    description: 'Your child joins MSI and you remain connected to their everyday experience.',
  },
];

export default function ParentJourney() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <Image
              src="/images/hero/DSC00795-1024x684-1.jpeg.bv.webp"
              alt="Children learning and playing at My School ITALY daycare"
              width={800}
              height={534}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div>
            <h3>Your Child. Your Questions. <br />Your Journey With Us.</h3>
            <h2>YOUR JOURNEY WITH MSI</h2>
            <p>At My School ITALY, we want parents to know not only what their child is learning, but also how their child is spending the day, settling in, eating, resting, participating, making friends and growing.</p>
            <p>From your first visit to everyday communication, we aim to make your experience with MSI connected, transparent and reassuring.</p>

            <button
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={open}
              className="mt-8 inline-block bg-msi-orange text-white font-bold py-3 px-10 rounded-full hover:bg-msi-orange/90 transition-colors"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      <Drawer open={open} onClose={() => setOpen(false)} title="YOUR JOURNEY WITH MSI" side="left">
        <div className="mb-5">
          <p className="text-msi-purple font-bold text-lg leading-snug">From Your First Enquiry to Your Child&rsquo;s First Day &mdash; And Beyond</p>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">Your relationship with MSI begins before admission. Our parent journey is designed to help you understand the school, choose the right program and allow your child to transition comfortably.</p>
        </div>
        <ol className="space-y-5">
          {steps.map((step) => (
            <li key={step.number} className="flex gap-3">
              <span className="font-bold text-msi-orange text-lg flex-shrink-0">{step.number}</span>
              <div>
                <h4 className="font-bold text-msi-purple">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed mt-1">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 pt-4 border-t border-gray-100 italic text-gray-500 text-sm">Admission is not the end of counselling. It is the beginning of a relationship.</p>
      </Drawer>
    </section>
  );
}
