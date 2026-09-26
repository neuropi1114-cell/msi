'use client';

import React, { useState } from 'react';
import Drawer from '../layout/Drawer';
import ReadMoreButton from '../common/ReadMoreButton';

const dayFlow = [
  'Arrival & Welcome',
  'Conversation & Circle Time',
  'Stories & Learning Experiences',
  'Movement & Outdoor Play',
  'Creative & Hands-On Activities',
  'Meals & Snacks',
  'Rest & Quiet Time',
  'Exploration & Enrichment',
  'Daycare / Extended Activities',
  'Home Time',
];

export default function ChildDay({
  showButton = true,
  text = "Know More",
  bgColor = "bg-msi-green hover:bg-msi-green/90",
}) {
  const [open, setOpen] = useState(false);

  if (!showButton) return null;

  return (
    <>
      <ReadMoreButton
        onClick={() => setOpen(true)}
        text={text}
        bgColor={bgColor}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="mt-6 font-bold"
      />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Your Child's Day At MSI."
        side="left"
      >
        <div className="space-y-5 text-msi-purple leading-relaxed">
          {/* Header Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-100 shadow-xs">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
              Rhythm Over Rigid Routine
            </span>
            <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-orange tracking-tight uppercase">
              Care, Learning and Childhood &mdash; All in One Day
            </h3>
          </div>

          {/* Daily Schedule Timeline Card */}
          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md space-y-2">
            <h4 className="font-extrabold text-msi-purple text-sm uppercase tracking-wider mb-3">
              Daily Rhythm Flow:
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {dayFlow.map((step, i) => (
                <div key={i} className="flex items-center gap-3 p-2.5 bg-purple-50/60 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
                  <span className="w-6 h-6 rounded-full bg-msi-orange/15 text-msi-orange font-extrabold text-xs flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="font-bold text-msi-purple text-xs sm:text-sm">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Infant Care Note */}
          <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100 shadow-2xs">
            <p className="text-msi-purple text-xs sm:text-sm leading-relaxed">
              Babies and younger children follow routines appropriate to their individual feeding, sleep and care requirements.
            </p>
          </div>

          {/* Footer Accent Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-1">
            <p className="text-xs sm:text-sm text-purple-200">
              There is a time to learn, to move, to eat, and to rest...
            </p>
            <p className="font-linotte font-bold text-msi-yellow text-lg sm:text-xl uppercase tracking-wide">
              And plenty of time to simply be a child.
            </p>
          </div>
        </div>
      </Drawer>
    </>
  );
}