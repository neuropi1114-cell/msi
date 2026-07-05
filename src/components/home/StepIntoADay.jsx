import React from 'react';

const StepIntoADay = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-12 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <img
            src="/images/stepintoaday/kid_image.webp"
            alt="Child at play"
            className="w-full"
            loading="lazy"
          />
        </div>

        <div className="lg:pl-10">
          <img
            src="/images/stepintoaday/Built-on-Neuroscience-and-Joy-STEP-INTO-A-DAY-5.png.bv.webp"
            alt="Built on Neuroscience and Joy"
            className="w-full"
            loading="lazy"
          />
          <p className="text-gray-700 text-lg mb-6 leading-8">
            In the enchanted world of My School ITALY, every day begins with a sparkle of wonder. Little dreamers play, explore, and grow — guided by the quiet magic of neuroscience. Here, every laugh writes a new story of learning, love, and light.
          </p>
          <p className="text-gray-700 text-lg mb-10 leading-8">
            And as sunlight fills their colourful classrooms, imagination takes flight like a thousand butterflies. Kind words bloom like petals, and every discovery twinkles brighter than the stars above. At My School ITALY, childhood becomes a symphony — where science hums softly beneath the melody of joy in our programs for ages 45 days old babies to 12 years old kids in our Creche, Daycare, Preschool, After School and Summer Camps with healthy meals and activities.
          </p>
          <a
            href="/the-educational-project/"
            className="inline-flex items-center justify-center bg-msi-orange text-white font-bold py-4 px-10 rounded-full font-averia text-lg"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default StepIntoADay;
