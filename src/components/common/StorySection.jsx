'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Drawer from '../layout/Drawer';
import ReadMoreButton from './ReadMoreButton';
import ScrollReveal from './ScrollReveal';

const defaultSteps = [
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

export default function StorySection({
  imageSrc = "/images/parents/parent-journey.jpg",
  imageAlt = "Children learning and playing at My School ITALY daycare",
  eyebrow = "Your Child. Your Questions. \nYour Journey With Us.",
  title = "YOUR JOURNEY WITH MSI",
  p1 = "At My School ITALY, we want parents to know not only what their child is learning, but also how their child is spending the day, settling in, eating, resting, participating, making friends and growing.",
  p2 = "From your first visit to everyday communication, we aim to make your experience with MSI connected, transparent and reassuring.",
  drawerTitle = "YOUR JOURNEY WITH MSI",
  drawerBody = null,
  className = "py-20 bg-[#f7f9fc]",
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className={className}>
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <ScrollReveal direction="right" delay={0.1}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={800}
              height={534}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.2}>
            {typeof eyebrow === 'string' ? (
              <h3>
                {eyebrow.split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < eyebrow.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h3>
            ) : (
              <h3>{eyebrow}</h3>
            )}
            <h2>{title}</h2>
            {p1 && <p>{p1}</p>}
            {p2 && <p>{p2}</p>}

            <ReadMoreButton
              onClick={() => setOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={open}
              className="mt-8 font-bold"
            />
          </ScrollReveal>
        </div>
      </div>

      <Drawer open={open} onClose={() => setOpen(false)} title={drawerTitle} side="left">
        {drawerBody ? (
          drawerBody
        ) : (
          <div className="space-y-5 text-gray-700 leading-relaxed">
            {/* Header Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-100 shadow-xs">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
                A Transparent Partnership
              </span>
              <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-orange tracking-tight uppercase">
                From First Enquiry to First Day &mdash; And Beyond
              </h3>
              <p className="mt-3 text-gray-700 text-xs sm:text-sm leading-relaxed">
                Your relationship with MSI begins before admission. Our parent journey helps you understand the school, choose the right program, and transition comfortably.
              </p>
            </div>

            {/* Steps List */}
            <div className="space-y-3">
              {defaultSteps.map((step) => (
                <div key={step.number} className="flex gap-3.5 p-3.5 bg-white border border-gray-100 rounded-xl shadow-2xs hover:shadow-xs transition-shadow">
                  <span className="w-8 h-8 rounded-full bg-msi-orange/10 text-msi-orange font-black text-sm flex items-center justify-center shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h4 className="font-bold text-msi-purple text-sm sm:text-base">{step.title}</h4>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mt-0.5">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Accent Card */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-md text-center">
              <p className="font-semibold text-amber-300 text-xs sm:text-sm italic">
                &ldquo;Admission is not the end of counselling. It is the beginning of a relationship.&rdquo;
              </p>
            </div>
          </div>
        )}
      </Drawer>
    </section>
  );
}
