import React from 'react';
import ageGroupsData from '../../data/age-groups.json';
import ImageCollage from './ImageCollage';

const defaultGrowingData = ageGroupsData.sections[2]?.growing;

const GrowingInConfidence = ({ growing = defaultGrowingData }) => {
  if (!growing) return null;

  return (
    <section className="py-16 bg-[#FCF9F4] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center max-w-4xl mx-auto mb-12">
          {growing.span && (
            <span className="font-schoolbell text-[22px] font-normal text-msi-blue block mb-2">
              {growing.span}
            </span>
          )}
          <h2 className="text-3xl md:text-5xl text-msi-orange font-bold uppercase tracking-wide mb-4">
            {growing.title}
          </h2>
          <p className="mb-8 leading-relaxed text-center  max-w-3xl mx-auto">
            {growing.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-5xl mx-auto items-center">
            {growing.features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-36 md:h-44 w-auto object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Gallery / Image Collage */}
        <ImageCollage images={growing.images} />
      </div>
    </section>
  );
};

export default GrowingInConfidence;