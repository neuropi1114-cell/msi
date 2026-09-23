import React from 'react';
import FaqSection from '../common/FaqSection';

export default function HolidayProgramsSection({ id = "holiday-summer-programs" }) {
  return (
    <div id={id} className="scroll-mt-24">
      <FaqSection
      subheading="Holidays Become Adventures."
      heading="HOLIDAY & SUMMER PROGRAMS"
      showFaq={false}
      imageSrc="/images/programs/Aperna_27.png"
      imageAlt="Holiday & Summer Programs"
      imageAspect="aspect-[16/9]"
      description={
        <div className="text-[#464646] font-lato text-[17px] leading-relaxed space-y-3 mt-4">
          <p>
            Our holiday and summer programs transform school breaks into opportunities for exploration.
          </p>
          <p>
            Programs can combine:
          </p>
          <p className="font-semibold text-msi-purple">
            Stories &bull; Science &bull; Nature &bull; Art &bull; Cooking &bull; Movement &bull; Gymnastics &bull; Robotics &bull; Music &bull; Drama &bull; Games &bull; Creative Projects
          </p>
          <p>
            Themes and activities change so children can experience something different while remaining within MSI&apos;s familiar environment.
          </p>
          <p className="font-semibold text-msi-purple">
            Different Days. New Experiences. Endless Discovery.
          </p>
        </div>
      }
    />
    </div>
  );
}

