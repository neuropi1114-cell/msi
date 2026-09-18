'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Drawer from '../layout/Drawer';

const areas = [
  'Communication',
  'Confidence',
  'Participation',
  'Attention',
  'Independence',
  'Social Interaction',
  'Emotional Expression',
  'Movement',
  'Creativity',
  'Early Literacy & Numeracy',
  'Interests',
  'Emerging Skills',
];

export default function ProgressMore() {
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
        title="More Than How Many Letters Does My Child Know?"
        side="left"
      >
        <p className="text-msi-purple font-bold text-lg leading-snug">
          More Than &ldquo;How Many Letters Does My Child Know?&rdquo;
        </p>
        <p className="text-gray-600 leading-relaxed mt-2">
          Parents naturally want to know how their child is progressing.
        </p>
        <p className="text-gray-600 leading-relaxed mt-2">
          At MSI, conversations about progress can go beyond academic achievement.
        </p>
        <p className="text-gray-600 leading-relaxed mt-2">
          We may talk about how your child is developing in areas such as:
        </p>
        <ul className="mt-4 space-y-2">
          {areas.map((area, i) => (
            <li key={i} className="text-gray-600 leading-relaxed">
              {area}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed mt-4">
          Developmental observations help make parent conversations more meaningful and specific.
        </p>
        <p className="text-gray-600 leading-relaxed mt-2">
          Rather than asking only: <em>&ldquo;How is my child performing?&rdquo;</em> we can also
          explore: <em>&ldquo;How is my child growing?&rdquo;</em>
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          For the methodology behind developmental observation, parents can explore{' '}
          <Link href="/nep" className="text-msi-orange font-bold underline">
            The NeuroPi Way
          </Link>
          .
        </p>
      </Drawer>
    </>
  );
}