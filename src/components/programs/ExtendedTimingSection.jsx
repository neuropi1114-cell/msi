import React from 'react';
import NepHero from '../nep/NepHero';
import FaqSection from '../common/FaqSection';

export default function ExtendedTimingSection({ topId = "extended-care", bottomId = "saturday-holiday-care" }) {
  return (
    <>
      <div id={topId} className="scroll-mt-24">
        <NepHero
          bgImage="/images/programs/Programs_7.png"
          eyebrow="More Flexibility Around Your Working Day."
          title="EARLY DROP-OFF & LATE PICK-UP"
          titleColor="text-msi-yellow"
          description={
            <div className="space-y-3">
              <p>
                An early meeting, a long commute or an unexpected late evening should not turn childcare into a daily struggle.
              </p>
              <p>
                Selected MSI centres provide Early Drop-Off and Late Pick-Up options designed around the realities of working families.
              </p>
            </div>
          }
          showReadMore={false}
        />
      </div>

      <div id={bottomId} className="scroll-mt-24">
        <FaqSection
          subheading="Because Your Working Calendar and the School Calendar Don't Always Match."
          heading="SATURDAY & HOLIDAY CARE"
        showFaq={false}
        imageSrc="/images/programs/Aperna_17.png"
        imageAlt="Saturday & Holiday Care"
        description={
          <div className="text-[#464646] font-lato text-[17px] leading-relaxed mt-4">
            <p>
              Selected centres provide childcare on Saturdays and designated holidays. Children spend their day in a familiar environment with opportunities for play, creativity, movement, stories, rest and social interaction.
            </p>
          </div>
        }
      />
      </div>
    </>
  );
}
