import React from 'react';

export const metadata = {
  title: 'Why My School ITALY | Early Years Preschool & Daycare',
  description: 'Discover the philosophy, learning environment, teachers, books, safety, emotional wellbeing and nutrition behind My School ITALY.',
  alternates: { canonical: 'https://www.myschoolitaly.com/why-msi/' },
  openGraph: {
    title: 'Why My School ITALY | Early Years Preschool & Daycare',
    description: 'Discover the philosophy, learning environment, teachers, books, safety, emotional wellbeing and nutrition behind My School ITALY.',
    url: 'https://www.myschoolitaly.com/why-msi/',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why My School ITALY | Early Years Preschool & Daycare',
    description: 'Discover the philosophy, learning environment, teachers, books, safety, emotional wellbeing and nutrition behind My School ITALY.',
  },
};

export const centreVideos = [
  {
    id: 1,
    title: "Hitex - HQ",
    url: "https://www.youtube.com/watch?v=IP8qcrDVeD0",
  },
  {
    id: 2,
    title: "Avance Business Hub",
    url: "https://www.youtube.com/watch?v=uN22Xcwa1Ps",
  },
  {
    id: 3,
    title: "Q-City Tech Park",
    url: "https://vimeo.com/1228236323",
  },
  {
    id: 4,
    title: "Mindspace",
    url: "https://www.youtube.com/watch?v=vCvldPecTG0",
  },
  {
    id: 5,
    title: "Avance SEZ",
    url: "https://www.youtube.com/watch?v=H3Cb_gJszBw",
  },
];

/* --- Rich Beautiful Card Drawer Bodies for /whyus --- */

export const storyDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-orange-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        European Early Education
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        OUR STORY
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        My School ITALY began with a simple belief: early childhood education should respect the individuality of every child.
      </p>
    </div>

    <div className="space-y-3">
      <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
        <h4 className="font-extrabold text-msi-purple text-base uppercase mb-1">An Integrated Ecosystem</h4>
        <p className="text-gray-800 font-medium text-sm sm:text-base">
          Over the years, that belief has grown into an integrated preschool, crèche and daycare ecosystem where learning, care, development and family partnership come together.
        </p>
      </div>

      <div className="p-4 bg-blue-50/90 border-l-4 border-msi-blue rounded-r-xl shadow-2xs">
        <h4 className="font-extrabold text-msi-blue text-base uppercase mb-1">Powered by NeuroPi</h4>
        <p className="text-gray-800 font-medium text-sm sm:text-base">
          Today, My School ITALY is Powered by NeuroPi, bringing neuroscience-informed thinking into everyday early-years practice.
        </p>
      </div>
    </div>

    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-blue text-base uppercase tracking-wider mb-2">
        More Than a Preschool. A Place to Understand Every Child.
      </h4>
      <p className="text-gray-700 font-medium text-sm sm:text-base">
        At My School ITALY, education and care come together in an environment designed around the developing child — combining European early-years principles, neuroscience-informed practice, meaningful relationships, movement, stories, nutrition and emotional wellbeing.
      </p>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Every Child &bull; Every Brain &bull; Every Future
      </h4>
    </div>
  </div>
);

export const philosophyDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-purple-50 border border-yellow-200 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-yellow/20 text-msi-purple mb-2">
        Childhood Is Not Preparation for Life. Childhood Is Life.
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        OUR PHILOSOPHY
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        Children learn when they feel safe enough to explore, curious enough to question and confident enough to try.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        Core Pillars of Growth:
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {['Wonder & Curiosity', 'Communication', 'Active Movement', 'Imaginative Play', 'Experimentation', 'Hands-on Discovery'].map((item, idx) => (
          <span key={idx} className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-50/90 text-msi-orange border border-amber-100 shadow-2xs">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        We meet the child where they are &mdash; and help them grow from there.
      </h4>
    </div>
  </div>
);

export const europeanApproachDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-blue-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        Less Pressure. More Purposeful Learning.
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        THE EUROPEAN EARLY YEARS APPROACH
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        Our European-inspired approach respects childhood as a period of exploration and discovery rather than rigid instruction.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        Children Learn Through:
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {['Play', 'Stories', 'Conversation', 'Nature', 'Movement', 'Music', 'Art', 'Exploration', 'Hands-on Experiences'].map((item, idx) => (
          <span key={idx} className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-purple-50/90 text-msi-purple border border-purple-100 shadow-2xs">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
      <p className="text-gray-800 font-medium text-sm sm:text-base">
        Teachers guide rather than dominate. Questions are welcomed. Curiosity is encouraged, and learning connects naturally across language, mathematics, science and creativity.
      </p>
    </div>
  </div>
);

export const learningEnvironmentDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-green-50 border border-blue-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-blue/10 text-msi-blue mb-2">
        Designed for Growing Minds
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-blue tracking-tight uppercase">
        OUR LEARNING ENVIRONMENT
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        A child&apos;s environment influences how they feel, move, interact and learn. MSI environments are welcoming, organized, stimulating and child-friendly.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        Children Move Seamlessly Between:
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {['Learning Centers', 'Reading Corners', 'Creative Arts', 'Building & STEAM', 'Pretend Play', 'Movement', 'Rest', 'Social Interaction'].map((item, idx) => (
          <span key={idx} className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-50/90 text-msi-blue border border-blue-100 shadow-2xs">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Create an environment in which children feel secure enough to explore and inspired enough to learn.
      </h4>
    </div>
  </div>
);

export const booksStoriesDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-blue-50 border border-purple-100 shadow-xs">
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        OUR BOOKS &amp; STORIES
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        Stories are at the heart of My School ITALY. Our original books and learning materials take children into worlds of animals, nature, people, places and discovery.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-gradient-to-r from-msi-purple/10 to-msi-blue/5 border-l-4 border-msi-purple">
      <p className="font-bold text-msi-purple text-base mb-1">A story can lead into:</p>
      <p className="font-semibold text-msi-orange text-sm sm:text-base">
        Language &rarr; Mathematics &rarr; Science &rarr; Social Understanding &rarr; Creativity &rarr; Movement &rarr; Values
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-msi-blue/5 border-l-4 border-msi-blue">
      <p className="font-bold text-msi-purple text-base mb-1">Our learning journey follows a simple rhythm:</p>
      <p className="font-bold text-msi-blue tracking-wide text-xs sm:text-sm">
        LISTEN &rarr; WATCH &rarr; CONNECT &rarr; PRACTISE &rarr; MOVE &amp; CREATE &rarr; PERFORM
      </p>
    </div>
  </div>
);

export const teachersDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-purple-50 border border-orange-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-orange/10 text-msi-orange mb-2">
        The Most Important Technology In A Classroom Is Still A Caring Adult
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        OUR TEACHERS
      </h3>
      <div className="mt-3 space-y-1.5 font-bold text-msi-purple text-base sm:text-lg">
        <p>&bull; Children need teachers who notice.</p>
        <p>&bull; Teachers who listen.</p>
        <p>&bull; Teachers who observe.</p>
        <p>&bull; Teachers who understand when to guide &mdash; and when to allow discovery.</p>
      </div>
    </div>

    <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
      <p className="text-gray-800 font-medium text-sm sm:text-base">
        MSI educators receive continuous development in our classroom approach, child observation, communication, engagement and emotional wellbeing.
      </p>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Because a curriculum can provide direction. A great teacher brings it to life.
      </h4>
    </div>
  </div>
);

export const whyChooseUsParagraphs = [
  "European Early Years Approach",
  "Neuroscience-Informed Practice",
  "Original Books & Story-Based Learning",
  "Preschool + Crèche + Daycare",
  "Physical & Emotional Safety",
  "Nutrition & Wellbeing",
  "Continuously Developed Teachers",
];

export const whyChooseUsFooter = (
  <p className="font-bold text-msi-purple pt-2">
    We don&apos;t simply ask, &ldquo;What did the child learn today?&rdquo;<br />
    We ask, &ldquo;How is this child growing?&rdquo;
  </p>
);

export const whyUsGalleryImages = [
  '/images/whyus/Why_MSI_1.png',
  '/images/whyus/Why_MSI_2.png',
  '/images/whyus/Why_MSI_3.png',
  '/images/whyus/Why_MSI_4.png',
  '/images/whyus/Why_MSI_5.png',
  '/images/whyus/Why_MSI_6.png',
  '/images/whyus/Why_MSI_Enrol.png',
  '/images/whyus/hero_playroom.png',
];
