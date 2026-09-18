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

const closingLines = [
  'Babies and younger children follow routines appropriate to their individual feeding, sleep and care requirements.',
  'There is a time to learn.',
  'A time to move.',
  'A time to eat.',
  'A time to rest.',
  'And plenty of time to simply be a child.',
];

export default function ChildDay() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ReadMoreButton
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}

        className="mt-6 font-bold"
      />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="Your Child's Day At MSI"
        side="left"
      >
        <p className="text-msi-purple font-bold text-lg leading-snug">
          Care, Learning and Childhood &mdash; All in One Day
        </p>
        <div className="mt-4 space-y-1">
          {dayFlow.map((step, i) => (
            <div key={i}>
              <p className="font-semibold text-msi-purple">{step}</p>
              {i < dayFlow.length - 1 && (
                <p className="text-msi-orange text-sm text-center my-1" aria-hidden="true">
                  &darr;
                </p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100 space-y-3">
          {closingLines.map((line, i) => (
            <p key={i} className="text-gray-600 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </Drawer>
    </>
  );
}