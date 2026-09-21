'use client';
import React, { useState } from 'react';
import Drawer from '../layout/Drawer';

const connectionChain = [
  { name: 'CHILD', desc: 'Who is developing' },
  { name: 'TEACHER', desc: 'Who observes and engages' },
  { name: 'SCHOOL', desc: 'Where experiences unfold' },
  { name: 'HOME', desc: "Where the child's journey continues" },
];

const StepIntoADay = ({
  title = "BETTER UNDERSTANDING AROUND EVERY CHILD",
  subtitle = "Built in to",
  rightImage,
  image = "/images/stepintoaday/kid_image.webp",
  altText = "Better Understanding Around Every Child",
  className = "py-16 md:py-20 bg-white"
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <section className={className}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <img
            src={image}
            alt="Child at play"
            className="w-full rounded-2xl"
            loading="lazy"
          />
          {/* Decorative offset frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-msi-gold/20 rounded-2xl -z-10" />
        </div>

        <div className="lg:pl-10">
          {title ? (
            <div className="mb-8">
              {subtitle && (
                <h3 className="mb-4">
                  {subtitle}
                </h3>
              )}
              <h3 className="font-linotte text-3xl md:text-4xl text-msi-orange font-bold leading-tight uppercase not-italic">
                {title}
              </h3>
            </div>
          ) : rightImage ? (
            <img
              src={rightImage}
              alt={altText}
              className="w-full mb-8"
              loading="lazy"
            />
          ) : null}
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>SOME CHILDREN LEARN BY LISTENING.</li>
            <li>SOME NEED TO SEE.</li>
            <li>SOME NEED TO TOUCH IT.</li>
            <li>SOME NEED TO BUILD IT.</li>
            <li>SOME NEED TO ASK &ldquo;WHY?&rdquo; TEN TIMES.</li>
          </ul>
          <p>
            We make room for all of them.
          </p>
          <button
            onClick={() => setDrawerOpen(true)}
            className="font-linotte inline-block px-6 py-3 bg-msi-blue text-white rounded-full font-[200] hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer mt-4"
          >
            Read More
          </button>
        </div>
      </div>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title="Read More" side="left">
        <div className="space-y-6 pt-4">
          <ul className="space-y-2">
            <li className="font-bold">SOME CHILDREN LEARN BY LISTENING.</li>
            <li className="font-bold">SOME NEED TO SEE.</li>
            <li className="font-bold">SOME NEED TO TOUCH IT.</li>
            <li className="font-bold">SOME NEED TO BUILD IT.</li>
            <li className="font-bold">SOME NEED TO ASK &ldquo;WHY?&rdquo; TEN TIMES.</li>
          </ul>
          <p className="leading-relaxed">We make room for all of them.</p>

          <p className="leading-relaxed">Childhood is wonderfully individual.</p>
          <p className="leading-relaxed">
            That is why our classrooms are designed for conversation, stories, movement, exploration, creativity, experimentation and play — alongside purposeful early learning.
          </p>
          <p className="leading-relaxed">Because the objective is not simply to finish today's lesson.</p>
          <p className="leading-relaxed">It is to keep tomorrow's curiosity alive.</p>

          <h2 className="text-2xl font-bold uppercase text-msi-orange">Powered by NeuroPI</h2>
          <p className="leading-relaxed">Better Understanding Around Every Child.</p>
          <p className="leading-relaxed">
            NeuroPi brings a neuroscience-informed developmental approach into everyday MSI practice.
          </p>
          <p className="leading-relaxed">It helps connect:</p>

          <div className="space-y-4">
            {connectionChain.map((node, i) => (
              <div key={node.name}>
                <div className="text-center">
                  <p className="font-bold uppercase">{node.name}</p>
                  <p className="text-sm text-gray-600">{node.desc}</p>
                </div>
                {i < connectionChain.length - 1 && (
                  <div className="text-center text-msi-blue font-bold select-none">↕</div>
                )}
              </div>
            ))}
          </div>

          <p className="leading-relaxed">Technology supports the connection.</p>
          <p className="leading-relaxed">Teachers bring observation.</p>
          <p className="leading-relaxed">Parents bring knowledge of their child.</p>
          <p className="leading-relaxed">And the child remains at the centre.</p>
          <p className="leading-relaxed">Not a report card. Not a diagnosis.</p>
          <p className="leading-relaxed">A richer developmental picture of the child.</p>

          <a
            href="/theneuropiway"
            className="font-linotte inline-block px-6 py-3 bg-msi-blue text-white rounded-full font-[200] hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Discover NeuroPI
          </a>
        </div>
      </Drawer>
    </section>
  );
};

export default StepIntoADay;