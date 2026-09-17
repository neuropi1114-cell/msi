'use client';
import React from 'react';
import ageGroupsData from '../../data/age-groups.json';

const defaultGrowingData = ageGroupsData.sections[2]?.growing;

const GrowingInConfidence = ({ growing = defaultGrowingData }) => {
  if (!growing) return null;

  return (
    <section className="py-16 bg-[#FCF9F4] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="font-schoolbell text-[22px] font-normal text-msi-blue block mb-2">
            {growing.span}
          </span>
          <h2 className="text-3xl md:text-5xl text-msi-orange font-bold uppercase tracking-wide mb-4">
            {growing.title}
          </h2>
          <p className="mb-8 leading-relaxed text-center text-gray-700 max-w-3xl mx-auto">
            {growing.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto">
            {growing.features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100/50"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-lg font-bold text-msi-blue italic font-linotte text-center">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={growing.link || '/growing-in-confidence/'}
              className="font-linotte inline-block px-8 py-3 bg-msi-orange text-white rounded-full font-[200] hover:opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer shadow-md"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Gallery / Image Collage */}
        {growing.images && growing.images.length >= 12 && (
          <div className="w-full h-[420px] mt-12">
            <div className="flex gap-3 h-full">
              <div className="flex-1 flex flex-col gap-3 pt-8">
                <img src={growing.images[0].src} alt={growing.images[0].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
                <img src={growing.images[1].src} alt={growing.images[1].alt} className="w-full flex-[2] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <img src={growing.images[2].src} alt={growing.images[2].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
                <img src={growing.images[3].src} alt={growing.images[3].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
              </div>
              <div className="flex-1 flex flex-col gap-3 pt-12">
                <img src={growing.images[4].src} alt={growing.images[4].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
                <img src={growing.images[5].src} alt={growing.images[5].alt} className="w-full flex-[1.2] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
                <img src={growing.images[6].src} alt={growing.images[6].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
              </div>
              <div className="flex-1 flex flex-col gap-3 pt-4">
                <img src={growing.images[7].src} alt={growing.images[7].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
                <img src={growing.images[8].src} alt={growing.images[8].alt} className="w-full flex-[1.3] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <img src={growing.images[9].src} alt={growing.images[9].alt} className="w-full flex-[1] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
                <img src={growing.images[10].src} alt={growing.images[10].alt} className="w-full flex-[1.2] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
                <img src={growing.images[11].src} alt={growing.images[11].alt} className="w-full flex-[1.5] rounded-xl object-cover min-h-0 shadow-sm" loading="lazy" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GrowingInConfidence;