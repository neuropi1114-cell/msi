'use client';

import React, { useState } from 'react';
import Drawer from './Drawer';

const drawerContent = [
  'For a young child, beginning preschool or daycare can mean a new environment, new adults, new children and a completely new routine.',
  'We do not expect every child to settle in the same way.',
  'Our educators work with families to understand familiar routines, comfort preferences, communication patterns and anything else that can make the transition gentler.',
  "Depending on the child's age and individual response, settling can happen gradually.",
  'Some children walk in confidently.',
  'Some need more time.',
  'Both are perfectly valid beginnings.',
  'Our goal is not simply to stop the tears.',
  'It is to build trust.',
];

export default function SettlingInMore() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="mt-2 mb-6 inline-block bg-msi-orange text-white font-bold py-3 px-10 rounded-full hover:bg-msi-orange/90 transition-colors"
      >
        Read More
      </button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="STARTING SCHOOL & SETTLING IN"
        side="left"
      >
        <p className="text-msi-purple font-bold text-lg leading-snug">
          Small Steps Into A Big New World
        </p>
        <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
          {drawerContent.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </Drawer>
    </>
  );
}
