import React from 'react';
import UnderlineArrowLink from '../common/UnderlineArrowLink';
import ScrollReveal from '../common/ScrollReveal';

const BelieveBrilliance = () => {
  return (
    <section className="py-24 md:py-32 bg-white relative cursor-glow overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
        {/* Left Images Collage — editorial overlapping */}
        <div className="md:w-1/2 relative min-h-[500px] lg:min-h-[600px] w-full mt-10 md:mt-0">
          <ScrollReveal
            direction="zoom"
            duration={0.9}
            className="absolute left-0 top-0 w-[75%] h-[420px] lg:h-[480px] rounded-tl-[40px] overflow-hidden shadow-2xl"
          >
            <img src="/images/believe/believe-brilliance-hero.webp" alt="Children learning" className="w-full h-full object-[95%_top] object-cover img-editorial" loading="lazy" />
          </ScrollReveal>
          <ScrollReveal
            direction="up"
            delay={0.2}
            duration={0.8}
            className="absolute right-0 bottom-0 w-[55%] h-[320px] lg:h-[360px] rounded-br-[40px] overflow-hidden z-10 shadow-xl border-4 border-white"
          >
            <img src="/images/believe/believe-brilliance-collage.png" alt="Happy child" className="w-full h-full object-cover img-editorial" loading="lazy" />
          </ScrollReveal>
        </div>

        {/* Right Content — with editorial spacing */}
        <div className="md:w-1/2 md:pl-4 lg:pl-8">
          <ScrollReveal direction="up" duration={0.6}>
            <h3>
              From 45 Days to 8 Years
            </h3>
            <h2 className="mb-6">
              EVERY CHILD IS DIFFERENT.
              <br />
              THEIR EARLY YEARS SHOULD UNDERSTAND THAT.
            </h2>
            <p className="font-linotte text-lg mb-6 leading-relaxed">
              A nurturing early childhood ecosystem where learning, care, development,
              movement, nutrition and emotional wellbeing come together around the individual
              child.
            </p>

            <div className="flex flex-wrap gap-6">
              <UnderlineArrowLink href="/book-your-tour" text="BOOK A SCHOOL TOUR" color="yellow" />
              <UnderlineArrowLink href="/hyderabad" text="FIND A CENTRE" color="green" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default BelieveBrilliance;

