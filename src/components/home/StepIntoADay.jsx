'use client';
import React, { useState } from 'react';
import Drawer from '../layout/Drawer';
import ReadMoreButton from '../common/ReadMoreButton';

const connectionChain = [
  { name: 'CHILD', desc: 'Who is developing' },
  { name: 'TEACHER', desc: 'Who observes and engages' },
  { name: 'SCHOOL', desc: 'Where experiences unfold' },
  { name: 'HOME', desc: "Where the child's journey continues" },
];

const renderAcademicsDrawerContent = (title, subtitle) => (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed pt-2">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-purple-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-orange/10 text-msi-orange mb-2">
        {subtitle || "Built On Neuroscience & Joy"}
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        {title || "A DAY THAT DEVELOPS MORE THAN ACADEMICS"}
      </h3>
      <p className="mt-3 text-gray-800 font-bold leading-relaxed text-base sm:text-lg">
        Childhood is wonderfully individual. We make room for every child&apos;s unique way of learning.
      </p>
    </div>

    {/* Learning Styles Grid */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        Every Learner Is Welcome Here:
      </h4>
      <div className="space-y-2.5">
        {[
          "Some Children Learn By Listening.",
          "Some Need To See.",
          "Some Need To Touch It.",
          "Some Need To Build It.",
          "Some Need To Ask \"Why?\" Ten Times."
        ].map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-purple-50/80 text-msi-purple font-bold text-xs sm:text-sm border border-purple-100 shadow-2xs flex items-center gap-3"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-msi-orange shrink-0" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 font-bold text-msi-purple text-center text-sm sm:text-base">
        We make room for all of them.
      </p>
    </div>

    {/* Classroom Design Philosophy */}
    <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 shadow-xs space-y-3">
      <h4 className="font-extrabold text-msi-blue text-base uppercase tracking-wider">
        Classrooms Designed For Real Childhood:
      </h4>
      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
        Our classrooms are designed for conversation, stories, movement, exploration, creativity, experimentation and play &mdash; alongside purposeful early learning.
      </p>
    </div>

    {/* Footer Accent Card */}
    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-2">
      <p className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Because the objective is not simply to finish today&apos;s lesson.
      </p>
      <p className="text-purple-100 font-bold text-lg sm:text-xl">
        It is to keep tomorrow&apos;s curiosity alive.
      </p>
    </div>
  </div>
);

const renderNeuroPIDrawerContent = (title, subtitle) => (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed pt-2">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-blue/10 text-msi-blue mb-2">
        {subtitle || "Powered By NeuroPI"}
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        {title || "BETTER UNDERSTANDING AROUND EVERY CHILD"}
      </h3>
      <p className="mt-3 text-gray-800 font-bold leading-relaxed text-base sm:text-lg">
        NeuroPi brings a neuroscience-informed developmental approach into everyday MSI practice.
      </p>
    </div>

    {/* Connection Chain */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-4 text-center">
        The Connected Learning Ecosystem:
      </h4>
      <div className="space-y-3">
        {connectionChain.map((node, i) => (
          <React.Fragment key={node.name}>
            <div className="p-3.5 bg-gradient-to-r from-purple-50 to-amber-50 rounded-xl border border-purple-100 text-center shadow-2xs">
              <p className="font-black text-msi-purple text-base uppercase tracking-wide">{node.name}</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-0.5">{node.desc}</p>
            </div>
            {i < connectionChain.length - 1 && (
              <div className="text-center text-msi-blue font-black text-lg select-none">↕</div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>

    {/* Key Principles */}
    <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 shadow-xs space-y-2">
      <h4 className="font-extrabold text-msi-orange text-sm uppercase tracking-wider mb-1">
        Richer Developmental Picture:
      </h4>
      <ul className="space-y-1.5 text-xs sm:text-sm text-gray-800 font-medium">
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-msi-orange shrink-0" />
          <span><strong>Technology</strong> supports the connection.</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-msi-orange shrink-0" />
          <span><strong>Teachers</strong> bring professional observation.</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-msi-orange shrink-0" />
          <span><strong>Parents</strong> bring deep knowledge of their child.</span>
        </li>
      </ul>
      <p className="pt-2 font-bold text-msi-purple text-xs sm:text-sm border-t border-amber-200/60">
        And the child remains at the centre &mdash; not a report card or diagnosis, but a whole child.
      </p>
    </div>

    {/* CTA Card */}
    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-3">
      <p className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Where School & Home Become One
      </p>
      <ReadMoreButton
        href="/neuropiway"
        text="Discover NeuroPI"
        className="w-full text-center justify-center mt-2 font-bold"
      />
    </div>
  </div>
);

const StepIntoADay = ({
  title = "A DAY THAT DEVELOPS MORE THAN ACADEMICS",
  subtitle = "Built On Neuroscience & Joy",
  rightImage,
  image = "/images/stepintoaday/kid_image.webp",
  altText = "Step Into A Day",
  className = "py-16 md:py-20 bg-white",
  drawerTitle,
  drawerBody,
  drawerContent,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const isAcademicsSection = title?.toUpperCase().includes('ACADEMICS') || subtitle?.toUpperCase().includes('NEUROSCIENCE');
  const isNeuroPiSection = title?.toUpperCase().includes('BETTER UNDERSTANDING') || title?.toUpperCase().includes('NEUROPI') || subtitle?.toUpperCase().includes('NEUROPI');

  const resolvedDrawerTitle = drawerTitle || title || "Read More";

  const resolvedDrawerBody = drawerBody || drawerContent || (
    isNeuroPiSection
      ? renderNeuroPIDrawerContent(title, subtitle)
      : renderAcademicsDrawerContent(title, subtitle)
  );

  return (
    <section className={className}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <img
            src={image}
            alt={altText || title || "Child at play"}
            className="w-full rounded-2xl aspect-[4/3] object-cover"
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
              <h2>
                {title}
              </h2>
            </div>
          ) : rightImage ? (
            <img
              src={rightImage}
              alt={altText}
              className="w-full mb-8"
              loading="lazy"
            />
          ) : null}

          {isNeuroPiSection ? (
            <>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>CHILD &mdash; Who is developing</li>
                <li>TEACHER &mdash; Who observes and engages</li>
                <li>SCHOOL &mdash; Where experiences unfold</li>
                <li>HOME &mdash; Where the child&apos;s journey continues</li>
              </ul>
              <p className="leading-relaxed font-semibold text-msi-purple mb-4">
                A richer developmental picture around every child.
              </p>
            </>
          ) : (
            <>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Some Children Learn By Listening.</li>
                <li>Some Need To See.</li>
                <li>Some Need To Touch It.</li>
                <li>Some Need To Build It.</li>
                <li>Some Need To Ask &ldquo;Why?&rdquo; Ten Times.</li>
              </ul>
              <p className="leading-relaxed mb-4">
                We make room for all of them.
              </p>
            </>
          )}

          <ReadMoreButton
            onClick={() => setDrawerOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={drawerOpen}
            className="mt-2"
          />
        </div>
      </div>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        title={resolvedDrawerTitle}
        side="left"
      >
        {resolvedDrawerBody}
      </Drawer>
    </section>
  );
};

export default StepIntoADay;