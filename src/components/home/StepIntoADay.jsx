import React from 'react';

const StepIntoADay = () => {
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
          <img
            src="/images/stepintoaday/Built-on-Neuroscience-and-Joy-STEP-INTO-A-DAY-5.png.bv.webp"
            alt="Built on Neuroscience and Joy"
            className="w-full mb-8"
            loading="lazy"
          />
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Every morning at My School ITALY begins the same way — with a room full of small people discovering something new. A child stacks one more block than yesterday. Another notices the light changing through the window. A teacher sits quietly beside someone learning to tie their shoes.
          </p>
          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            These aren't scripted moments. They're the real ones — the kind that shape how a child sees themselves and the world around them. We've designed our days around these quiet breakthroughs, for children from infancy through primary school.
          </p>
          <a
            href="/nep"
            className="group inline-flex items-center gap-2 text-msi-purple font-medium text-lg border-b-2 border-msi-purple/30 pb-1 hover:border-msi-purple transition-colors"
          >
            See a typical day
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
