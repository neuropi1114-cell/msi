'use client';

import React, { useState } from 'react';
import Drawer from './Drawer';
import ReadMoreButton from '../common/ReadMoreButton';

export default function SettlingInMore() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ReadMoreButton
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="mt-2 mb-6 font-bold"
      />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="STARTING SCHOOL & SETTLING IN"
        side="left"
      >
        <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          {/* Header Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-100 shadow-xs">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
              Small Steps Into A Big New World
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
              STARTING SCHOOL &amp; SETTLING IN
            </h3>
            <p className="mt-3 text-gray-800 font-bold leading-relaxed text-base sm:text-lg">
              For a young child, beginning preschool or daycare can mean a new environment, new adults, new children and a completely new routine.
            </p>
          </div>

          {/* Key Principles */}
          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md space-y-3">
            <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-2">
              Gentle Transition Partnership:
            </h4>
            <div className="p-3.5 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
              <p className="font-bold text-msi-purple text-sm sm:text-base">
                We do not expect every child to settle in the same way.
              </p>
              <p className="text-gray-700 text-xs sm:text-sm mt-1">
                Our educators work with families to understand familiar routines, comfort preferences, communication patterns and anything else that can make the transition gentler.
              </p>
            </div>
          </div>

          {/* Responses */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-100 shadow-2xs">
              <p className="font-extrabold text-msi-blue text-sm uppercase">Confident Beginnings</p>
              <p className="text-gray-700 text-xs sm:text-sm mt-1">Some children walk in confidently.</p>
            </div>
            <div className="p-4 rounded-xl bg-orange-50/80 border border-orange-100 shadow-2xs">
              <p className="font-extrabold text-msi-orange text-sm uppercase">Gradual Beginnings</p>
              <p className="text-gray-700 text-xs sm:text-sm mt-1">Some need more time.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-msi-cream border-l-4 border-msi-purple shadow-xs">
            <p className="font-semibold text-msi-purple text-sm sm:text-base">
              Both are perfectly valid beginnings.
            </p>
          </div>

          {/* Footer Accent Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-1">
            <p className="font-extrabold text-purple-200 text-sm sm:text-base uppercase tracking-wide">
              Our goal is not simply to stop the tears.
            </p>
            <p className="font-black text-msi-yellow text-lg sm:text-xl uppercase tracking-wide">
              It is to build trust.
            </p>
          </div>
        </div>
      </Drawer>
    </>
  );
}
