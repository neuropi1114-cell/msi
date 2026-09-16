import React from 'react';

const StepIntoADay = ({
  title = "BETTER UNDERSTANDING AROUND EVERY CHILD",
  subtitle = "Built in to",
  rightImage,
  altText = "Better Understanding Around Every Child"
}) => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid gap-12 lg:grid-cols-2 items-center">
        <div className="relative">
          <img
            src="/images/stepintoaday/kid_image.webp"
            alt="Child at play"
            className="w-full rounded-2xl"
            loading="lazy"
          />
          {/* Decorative offset frame */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-msi-gold/20 rounded-2xl -z-10" />
        </div>

        <div className="lg:pl-10">
          {title ? (
            <div className="mb-8">
              {subtitle && (
                <h3 className="mb-4">
                  {subtitle}
                </h3>
              )}
              <h3 className="font-linotte text-3xl md:text-4xl text-msi-orange font-bold leading-tight uppercase not-italic">
                {title}
              </h3>
            </div>
          ) : rightImage ? (
            <img
              src={rightImage}
              alt={altText}
              className="w-full mb-8"
              loading="lazy"
            />
          ) : null}
          <p className="mb-6">
            Children don't develop only while sitting at a table.
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6">
            <li>A story develops language and imagination.</li>
            <li>A puzzle can develop persistence.</li>
            <li>Gymnastics can develop coordination and confidence.</li>
            <li>Building can develop planning and problem-solving.</li>
            <li>Painting can develop expression.</li>
            <li>Sharing can develop social understanding.</li>
            <li>Eating independently can develop coordination and confidence.</li>
            <li>Pretend play can develop communication.</li>
            <li>Rest matters.</li>
            <li>Movement matters.</li>
            <li>Relationships matter.</li>
          </ul>
          <p>
            At MSI, the whole day is part of childhood.
          </p>
          <a
            href="/nep"
            className="group inline-flex items-center gap-2 font-medium text-lg text-msi-blue transition-colors mt-4"
          >
            <span className="border-b-2 border-msi-blue pb-1 group-hover:border-msi-blue/80">See a typical day</span>
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default StepIntoADay;
