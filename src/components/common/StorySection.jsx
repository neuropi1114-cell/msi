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
          <>
            <div className="mb-5">
              <p className="text-msi-purple font-bold text-lg leading-snug">
                From Your First Enquiry to Your Child&rsquo;s First Day &mdash; And Beyond
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-2">
                Your relationship with MSI begins before admission. Our parent journey is designed to help you understand the school, choose the right program and allow your child to transition comfortably.
              </p>
            </div>
            <ol className="space-y-5">
              {defaultSteps.map((step) => (
                <li key={step.number} className="flex gap-3">
                  <span className="font-bold text-msi-orange text-lg flex-shrink-0">{step.number}</span>
                  <div>
                    <h4 className="font-bold text-msi-purple">{step.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mt-1">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6 pt-4 border-t border-gray-100 italic text-gray-500 text-sm">
              Admission is not the end of counselling. It is the beginning of a relationship.
            </p>
          </>
        )}
      </Drawer>
    </section>
  );
}
