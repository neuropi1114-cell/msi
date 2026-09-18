'use client';

import React, { useState } from 'react';
import Drawer from '../layout/Drawer';

const moreLines = [
  'Observing an insect.',
  'Watering a plant.',
  'Remembering what happened during the day.',
  'Depending on the child\u2019s current experiences and interests, MSI can suggest simple ways for families to talk, play, read, move, explore and create together at home.',
  'No pressure.',
  'No unnecessary homework.',
  'Just meaningful moments together.',
];

export default function HomeLearningMore() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="mt-6 inline-block bg-msi-orange text-white font-bold py-3 px-10 rounded-full hover:bg-msi-orange/90 transition-colors"
      >
        Read More
      </button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Home Learning & Family Connection"
        side="left"
      >
        <p className="text-msi-purple font-bold text-lg leading-snug">
          Learning Doesn&apos;t Stop at the School Gate
        </p>
        <div className="mt-4 space-y-3">
          {moreLines.map((line, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </Drawer>
    </>
  );
}