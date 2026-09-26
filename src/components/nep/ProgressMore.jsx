'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Drawer from '../layout/Drawer';
import ReadMoreButton from '../common/ReadMoreButton';

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
      <ReadMoreButton
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        bgColor="bg-msi-orange hover:bg-msi-orange/90"
        className="mt-6 font-bold"
      />
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        title="More Than How Many Letters Does My Child Know?"
        side="left"
      >
        <div className="space-y-5 text-msi-purple leading-relaxed">
          {/* Header Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-100 shadow-xs">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
              Holistic Growth Focus
            </span>
            <p className="mt-3 text-msi-purple text-sm sm:text-base leading-relaxed">
              Parents naturally want to know how their child is progressing. At MSI, conversations about progress go beyond academic achievement.
            </p>
          </div>

          {/* Key Areas Card */}
          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md space-y-3">
            <h4 className="font-extrabold text-msi-purple text-sm uppercase tracking-wider mb-2">
              We talk about development in areas such as:
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {areas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 p-2.5 bg-purple-50/70 border-l-3 border-msi-purple rounded-r-lg shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-msi-orange shrink-0"></span>
                  <span className="font-medium text-msi-purple text-xs sm:text-sm">
                    {area}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Meaningful Conversations Box */}
          <div className="p-4.5 rounded-xl bg-blue-50/80 border border-blue-100 shadow-2xs space-y-2">
            <p className="text-msi-purple text-xs sm:text-sm">
              Developmental observations help make parent conversations more meaningful and specific.
            </p>
            <p className="text-msi-purple font-semibold text-xs sm:text-sm">
              Rather than asking only: <em>&ldquo;How is my child performing?&rdquo;</em> we can also explore: <em>&ldquo;How is my child growing?&rdquo;</em>
            </p>
          </div>

          {/* Methodology Footer Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-2">
            <p className="text-xs sm:text-sm text-purple-200">
              For the methodology behind developmental observation:
            </p>
            <div>
              <Link href="/neuropiway" className="inline-block px-4 py-2 rounded-xl bg-msi-yellow text-msi-purple font-extrabold text-sm uppercase tracking-wide hover:bg-yellow-300 transition-colors shadow-xs">
                Explore The NeuroPi Way &rarr;
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}