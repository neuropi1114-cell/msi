'use client';

import React, { useState } from 'react';
import Drawer from '../layout/Drawer';
import ReadMoreButton from '../common/ReadMoreButton';

const examples = [
  'Observing an insect.',
  'Watering a plant.',
  'Remembering what happened during the day.',
];

export default function HomeLearningMore({
  text = "Discover",
  bgColor = "bg-msi-green hover:bg-msi-green/90",
}) {
  const [open, setOpen] = useState(false);

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
        title="Home Learning & Family Connection."
        side="left"
      >
        <div className="space-y-5 text-msi-purple leading-relaxed">
          {/* Header Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-100 shadow-xs">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
              Everyday Moments Matter
            </span>
            <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-orange tracking-tight uppercase">
              Learning Doesn&apos;t Stop at the School Gate
            </h3>
          </div>

          {/* Activity Examples Card */}
          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md space-y-3">
            <h4 className="font-extrabold text-msi-purple text-sm uppercase tracking-wider mb-2">
              Simple Everyday Learning:
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {examples.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-purple-50/70 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-msi-orange shrink-0"></span>
                  <p className="font-medium text-msi-purple text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* MSI Suggestion Box */}
          <div className="p-4.5 rounded-xl bg-blue-50/80 border border-blue-100 shadow-2xs">
            <p className="text-msi-purple text-sm sm:text-base leading-relaxed">
              Depending on the child&apos;s current experiences and interests, MSI can suggest simple ways for families to talk, play, read, move, explore and create together at home.
            </p>
          </div>

          {/* Footer Accent Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-1.5">
            <p className="font-extrabold text-amber-300 text-sm sm:text-base uppercase tracking-wider">
              No pressure. No unnecessary homework.
            </p>
            <p className="font-linotte font-bold text-msi-yellow text-lg sm:text-xl uppercase tracking-wide">
              Just meaningful moments together.
            </p>
          </div>
        </div>
      </Drawer>
    </>
  );
}