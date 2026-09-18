import React from 'react';
import ageGroupsData from '../../data/age-groups.json';

const defaultImages = ageGroupsData.sections[2]?.growing?.images || [];

export default function ImageCollage({ images = defaultImages, title = "Glimpses from Our Schools" }) {
  if (!images || images.length < 12) return null;

  return (
    <div className="w-full mt-12">
      {title && (
        <h2 className="text-3xl md:text-4xl text-msi-orange font-bold uppercase tracking-wide text-center mb-8">
          {title}
        </h2>
      )}
      <div className="w-full h-[420px]">
        <div className="flex gap-3 h-full">
          <div className="flex-1 flex flex-col gap-3 pt-8">
            <img src={images[0].src} alt={images[0].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
            <img src={images[1].src} alt={images[1].alt} className="w-full flex-[2] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <img src={images[2].src} alt={images[2].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
            <img src={images[3].src} alt={images[3].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-3 pt-12">
            <img src={images[4].src} alt={images[4].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
            <img src={images[5].src} alt={images[5].alt} className="w-full flex-[1.2] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
            <img src={images[6].src} alt={images[6].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-3 pt-4">
            <img src={images[7].src} alt={images[7].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
            <img src={images[8].src} alt={images[8].alt} className="w-full flex-[1.3] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
          </div>
          <div className="flex-1 flex flex-col gap-3">
            <img src={images[9].src} alt={images[9].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
            <img src={images[10].src} alt={images[10].alt} className="w-full flex-[1.2] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
            <img src={images[11].src} alt={images[11].alt} className="w-full flex-[1.5] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
}
