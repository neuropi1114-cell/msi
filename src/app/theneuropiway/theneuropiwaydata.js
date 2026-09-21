import React from 'react';

export const neuroscientificVideos = [
  {
    id: 1,
    title: 'MSI Decant',
    url: 'https://vimeo.com/1222447980',
  },
  {
    id: 2,
    title: 'MSI Study Technology',
    url: 'https://vimeo.com/1222448223',
  },
  {
    id: 3,
    title: 'MSI Whole Child',
    url: 'https://vimeo.com/1228748945',
  },
];

export const riseObservationDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        Looking Beyond What a Child Knows
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        1. RISE &mdash; DEVELOPMENTAL OBSERVATION
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        Early development cannot be understood through worksheets and academic outcomes alone.<br />
        At MSI, RISE gives teachers a simple framework for noticing important aspects of children&rsquo;s everyday learning behaviour.
      </p>
    </div>

    {/* The 4 RISE Pillars */}
    <div className="space-y-3">
      {/* R - RESILIENCE */}
      <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
        <div className="flex items-center gap-2 mb-1">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-msi-purple text-white font-bold text-xs">
            R
          </span>
          <h4 className="font-extrabold text-msi-purple text-base uppercase">
            RESILIENCE
          </h4>
        </div>
        <p className="text-gray-800 font-medium text-sm sm:text-base pl-8">
          How does the child respond when something is difficult? Do they try again? Seek help? Adapt? Persist?
        </p>
      </div>

      {/* I - INDIVIDUAL LEARNING */}
      <div className="p-4 bg-blue-50/90 border-l-4 border-msi-blue rounded-r-xl shadow-2xs">
        <div className="flex items-center gap-2 mb-1">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-msi-blue text-white font-bold text-xs">
            I
          </span>
          <h4 className="font-extrabold text-msi-blue text-base uppercase">
            INDIVIDUAL LEARNING
          </h4>
        </div>
        <p className="text-gray-800 font-medium text-sm sm:text-base pl-8">
          How does this particular child approach experiences? What interests them? How do they explore? What supports their participation and understanding?
        </p>
      </div>

      {/* S - SAFETY - EMOTIONAL */}
      <div className="p-4 bg-orange-50/90 border-l-4 border-msi-orange rounded-r-xl shadow-2xs">
        <div className="flex items-center gap-2 mb-1">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-msi-orange text-white font-bold text-xs">
            S
          </span>
          <h4 className="font-extrabold text-msi-orange text-base uppercase">
            SAFETY &mdash; EMOTIONAL
          </h4>
        </div>
        <p className="text-gray-800 font-medium text-sm sm:text-base pl-8">
          Does the child feel secure enough to communicate, participate, make mistakes, ask for help and express emotions? Emotional safety is an essential foundation for engagement and learning.
        </p>
      </div>

      {/* E - ENGAGEMENT & READINESS */}
      <div className="p-4 bg-green-50/90 border-l-4 border-msi-green rounded-r-xl shadow-2xs">
        <div className="flex items-center gap-2 mb-1">
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-msi-green text-white font-bold text-xs">
            E
          </span>
          <h4 className="font-extrabold text-green-700 text-base uppercase">
            ENGAGEMENT &amp; READINESS
          </h4>
        </div>
        <p className="text-gray-800 font-medium text-sm sm:text-base pl-8">
          How does the child participate? What captures attention? What encourages curiosity, involvement and readiness for the next experience?
        </p>
      </div>
    </div>

    {/* Summary Callout Banner */}
    <div className="p-4 rounded-xl bg-msi-cream border-l-4 border-msi-purple shadow-xs">
      <p className="font-bold text-msi-purple text-sm sm:text-base leading-relaxed">
        RISE helps teachers notice patterns over time, rather than judge a child from one activity or one day.
      </p>
    </div>

    {/* Footer Accent Card */}
    <div className="p-5 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Observe Growth. Don&rsquo;t Simply Measure Performance
      </h4>
    </div>
  </div>
);

export const milestonesObservationDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-blue/10 text-msi-blue mb-2">
        Development Is a Journey, Not a Race
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        2. DEVELOPMENTAL MILESTONES &amp; OBSERVATIONS
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        Children do not all develop at exactly the same pace or in exactly the same way.<br />
        MSI teachers use age-appropriate developmental milestones and structured observations to help them notice progress across different areas of development.
      </p>
    </div>

    {/* Areas of Development Badges */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        These areas of development can include:
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {[
          'Communication & Language',
          'Cognitive Development',
          'Social Development',
          'Emotional Development',
          'Physical & Motor Development',
          'Independence',
          'Attention & Engagement',
          'Creativity & Expression',
          'Early Literacy',
          'Early Numeracy',
          'Understanding the World',
          'Learning Dispositions',
        ].map((item, idx) => (
          <span
            key={idx}
            className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-50/90 text-msi-blue border border-blue-100 shadow-2xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Everyday Experiences Section */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-msi-orange" />
      <p className="font-semibold text-gray-800 leading-relaxed mb-3">
        Observations happen naturally through children&rsquo;s everyday experiences &mdash; during stories, conversations, play, movement, meals, projects, group experiences and independent exploration.
      </p>
      <p className="text-gray-700 font-medium text-xs sm:text-sm pt-2 border-t border-gray-100">
        They are used to help educators plan appropriate learning opportunities and understand progress over time.
      </p>
    </div>

    {/* Disclaimer Callout Banner */}
    <div className="p-4 rounded-xl bg-amber-50/90 border-l-4 border-amber-400 shadow-xs">
      <p className="font-semibold text-amber-900 text-xs sm:text-sm">
        Notice: They are not intended to diagnose medical, psychological or developmental conditions.
      </p>
    </div>

    {/* Footer Accent Card */}
    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-2">
      <p className="font-bold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Milestones provide reference points.
      </p>
      <p className="font-extrabold text-white text-lg sm:text-xl pt-1">
        The individual child remains the starting point.
      </p>
    </div>
  </div>
);

export const onePictureDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-purple-50 border border-orange-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-orange/10 text-msi-orange mb-2">
        A Living Picture of the Child
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        3. THE NEUROPI WAY IN ONE PICTURE
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        Every child at MSI can have a continuously evolving NeuroPi Child Profile.<br />
        Rather than reducing development to marks or grades, the profile brings together meaningful observations across the child&rsquo;s journey.
      </p>
    </div>

    {/* Profile Features Badges */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        It can include:
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {[
          'Developmental observations',
          'Interests',
          'Strengths',
          'Emerging skills',
          'Participation patterns',
          'Learning preferences',
          'Communication',
          'Social interaction',
          'Emotional expression',
          'Physical development',
          'Creativity',
          'Learning progress',
        ].map((item, idx) => (
          <span
            key={idx}
            className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-orange-50/90 text-msi-orange border border-orange-100 shadow-2xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* School and Home Callout */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-msi-blue" />
      <p className="font-semibold text-msi-purple leading-relaxed">
        Where appropriate, information from both school and home can contribute to a richer understanding of the child.
      </p>
    </div>

    {/* NOT A REPORT CARD / NOT A DIAGNOSIS Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 border border-orange-200 shadow-xs flex flex-col sm:flex-row items-center justify-around gap-3 text-center">
      <span className="px-4 py-2 rounded-xl bg-white text-red-600 font-black text-xs sm:text-sm uppercase shadow-xs tracking-wider border border-red-100">
        NOT A REPORT CARD
      </span>
      <span className="px-4 py-2 rounded-xl bg-white text-red-600 font-black text-xs sm:text-sm uppercase shadow-xs tracking-wider border border-red-100">
        NOT A DIAGNOSIS
      </span>
      <span className="font-extrabold text-msi-purple text-sm sm:text-base">
        A living developmental picture of the child.
      </span>
    </div>

    {/* Footer Accent Card */}
    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-2">
      <p className="font-bold text-purple-200 text-sm sm:text-base">
        The purpose is not to compare one child with another.
      </p>
      <p className="font-extrabold text-msi-yellow text-lg sm:text-xl pt-1">
        It is to understand how this child is growing over time.
      </p>
    </div>
  </div>
);

export const neuroPiSensoryCards = [
  {
    img: '/images/nep/The_NeuroPi_Way_10.png',
    alt: 'RISE — DEVELOPMENTAL OBSERVATION',
    drawerTitle: 'RISE — DEVELOPMENTAL OBSERVATION',
    drawerBody: riseObservationDrawerBody,
  },
  {
    img: '/images/nep/The_NeuroPi_Way_11.png',
    alt: 'DEVELOPMENTAL MILESTONES & OBSERVATIONS',
    drawerTitle: 'DEVELOPMENTAL MILESTONES & OBSERVATIONS',
    drawerBody: milestonesObservationDrawerBody,
  },
  {
    img: '/images/nep/The_NeuroPi_Way_12.png',
    alt: 'THE NEUROPI WAY IN ONE PICTURE',
    drawerTitle: 'THE NEUROPI WAY IN ONE PICTURE',
    drawerBody: onePictureDrawerBody,
  },
];

export const metadata = {
  title: 'The Educational Project - The NeuroPi Way',
  description: 'Discover My School ITALY\'s educational project — a neuroscience-based approach that cultivates emotional intelligence, resilience, and a love for learning in every child.',
  alternates: { canonical: '/theneuropiway' },
  openGraph: {
    title: 'The Educational Project - The NeuroPi Way | My School ITALY',
    description: 'Discover My School ITALY\'s educational project — a neuroscience-based approach that cultivates emotional intelligence, resilience, and a love for learning in every child.',
    url: '/theneuropiway',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Educational Project - The NeuroPi Way | My School ITALY',
    description: 'Discover My School ITALY\'s educational project — a neuroscience-based approach that cultivates emotional intelligence, resilience, and a love for learning in every child.',
  },
};

export const nepHeroDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-orange-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        One Child Lives In Two Important Worlds
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        NEUROPI CONNECT &mdash; SCHOOL + HOME
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        Teachers know the child they see at school.<br />
        Parents know the child they see at home.<br />
        <span className="text-msi-purple font-bold">Both perspectives matter.</span> NeuroPi Connect helps bring those worlds together.
      </p>
    </div>

    {/* Section 1: AT SCHOOL */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-msi-purple" />
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-msi-purple" />
        <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider">
          AT SCHOOL
        </h4>
      </div>
      <p className="font-semibold text-msi-orange mb-3 text-sm sm:text-base">
        Teachers can share and record:
      </p>
      <div className="flex flex-wrap gap-2">
        {[
          'Daily experiences',
          'Attendance',
          'Meals',
          'Rest',
          'Activities',
          'Photos',
          'Developmental observations',
          'Emerging interests',
          'Learning progress',
        ].map((item, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-50 text-msi-purple border border-purple-100 shadow-2xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Section 2: AT HOME */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-msi-blue" />
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2.5 h-2.5 rounded-full bg-msi-blue" />
        <h4 className="font-extrabold text-msi-blue text-base uppercase tracking-wider">
          AT HOME
        </h4>
      </div>
      <p className="font-semibold text-msi-orange mb-3 text-sm sm:text-base">
        Parents can remain connected through:
      </p>
      <div className="flex flex-wrap gap-2">
        {[
          'Daily updates',
          'Developmental information',
          'Home suggestions',
          'Notices',
          'Calendars',
          'Teacher communication',
          'Parent observations',
          'Workshops & support',
        ].map((item, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-msi-blue border border-blue-100 shadow-2xs"
          >
            {item}
          </span>
        ))}
      </div>
    </div>

    {/* Section 3: Callout Banner */}
    <div className="p-4 rounded-xl bg-msi-cream border-l-4 border-msi-green shadow-xs">
      <p className="font-bold text-msi-purple italic text-sm sm:text-base">
        &ldquo;Together, these create greater continuity around the child.&rdquo;
      </p>
    </div>

    {/* Section 4: Footer Highlight */}
    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-black text-msi-yellow text-lg sm:text-xl uppercase tracking-wide mb-2">
        SCHOOL AND HOME &mdash; ONE LEARNING PARTNERSHIP
      </h4>
      <div className="mt-3 space-y-1.5 text-base sm:text-lg text-white font-bold">
        <p className="text-white drop-shadow-xs">Teachers see the child at school.</p>
        <p className="text-white drop-shadow-xs">Parents understand the child at home.</p>
        <p className="text-msi-yellow font-extrabold pt-2 text-lg sm:text-xl">
          NeuroPi connects the developmental journey.
        </p>
      </div>
    </div>
  </div>
);

export const nepHeroLearningDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        Where Little Minds Grow With Science &amp; Soul.
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        LEARNING THE NEUROPI WAY
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        Every NeuroPi classroom is a living lab of growth &mdash; where teachers guide with compassion, and children learn through wonder. It&rsquo;s not just about early education; it&rsquo;s about raising emotionally intelligent, resilient, and joyful minds ready to thrive in life.
      </p>
    </div>

    {/* The 5 Pillars Cards */}
    <div className="space-y-3">
      <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs flex items-start gap-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-msi-purple text-white font-bold text-xs flex-shrink-0">
          1
        </span>
        <div>
          <p className="font-bold text-msi-purple text-base">Think Smart</p>
          <p className="text-gray-700 text-sm">Cognitive curiosity through discovery learning</p>
        </div>
      </div>

      <div className="p-4 bg-blue-50/90 border-l-4 border-msi-blue rounded-r-xl shadow-2xs flex items-start gap-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-msi-blue text-white font-bold text-xs flex-shrink-0">
          2
        </span>
        <div>
          <p className="font-bold text-msi-blue text-base">Feel Deeply</p>
          <p className="text-gray-700 text-sm">Emotional Literacy &amp; empathy through play</p>
        </div>
      </div>

      <div className="p-4 bg-orange-50/90 border-l-4 border-msi-orange rounded-r-xl shadow-2xs flex items-start gap-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-msi-orange text-white font-bold text-xs flex-shrink-0">
          3
        </span>
        <div>
          <p className="font-bold text-msi-orange text-base">Move Freely</p>
          <p className="text-gray-700 text-sm">Mind-body connection through rhythm &amp; movement</p>
        </div>
      </div>

      <div className="p-4 bg-pink-50/90 border-l-4 border-pink-500 rounded-r-xl shadow-2xs flex items-start gap-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-pink-500 text-white font-bold text-xs flex-shrink-0">
          4
        </span>
        <div>
          <p className="font-bold text-pink-700 text-base">Create Boldly</p>
          <p className="text-gray-700 text-sm">Imagination through art and storytelling</p>
        </div>
      </div>

      <div className="p-4 bg-green-50/90 border-l-4 border-msi-green rounded-r-xl shadow-2xs flex items-start gap-3">
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-msi-green text-white font-bold text-xs flex-shrink-0">
          5
        </span>
        <div>
          <p className="font-bold text-green-700 text-base">Grow Calmly</p>
          <p className="text-gray-700 text-sm">Mindfulness and self regulation woven into each day</p>
        </div>
      </div>
    </div>

    {/* Footer Accent Card */}
    <div className="p-5 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-black text-msi-yellow text-lg sm:text-xl uppercase tracking-wide">
        MY SCHOOL ITALY
      </h4>
      <p className="text-purple-100 font-medium text-sm sm:text-base mt-1">
        Where Little Minds Grow with Science &amp; Soul.
      </p>
    </div>

    {/* Parent Testimonial Quote */}
    <div className="p-4 bg-amber-50/90 border border-amber-200/80 rounded-2xl shadow-xs">
      <p className="text-xs font-bold text-msi-orange uppercase tracking-wider mb-1">
        Parents Say:
      </p>
      <p className="italic text-gray-800 text-sm font-semibold leading-relaxed">
        &ldquo;My child comes home peaceful, curious, and full of stories &ndash; NeuroPi feels like family. The perfect blend of heart and science.&rdquo;
      </p>
    </div>
  </div>
);

export const neuropiLearningCycleDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-blue-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        The NeuroPi Learning Cycle
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        OBSERVE &rarr; UNDERSTAND &rarr; PERSONALISE &rarr; ENGAGE &rarr; TRACK
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        The NeuroPi Way follows a continuous cycle.
      </p>
    </div>

    {/* Center Node: ONE CHILD */}
    <div className="text-center my-2">
      <span className="inline-block px-6 py-2.5 rounded-full bg-msi-purple text-white font-extrabold text-base tracking-wider shadow-md">
        ONE CHILD
      </span>
    </div>

    {/* Cycle Steps */}
    <div className="space-y-4">
      {/* Step 1: OBSERVE */}
      <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-msi-purple" />
        <p className="text-xs font-bold text-msi-purple uppercase tracking-wider mb-1">
          What is happening?
        </p>
        <h4 className="text-lg font-black text-msi-purple uppercase tracking-wide mb-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-msi-purple text-white text-xs flex items-center justify-center font-bold">1</span>
          OBSERVE
        </h4>
        <p className="text-gray-800 leading-relaxed">
          Teachers notice how the child participates, communicates, explores, responds and interacts during everyday experiences.
        </p>
      </div>

      {/* Step 2: UNDERSTAND */}
      <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-msi-blue" />
        <p className="text-xs font-bold text-msi-blue uppercase tracking-wider mb-1">
          What might this tell us about this child?
        </p>
        <h4 className="text-lg font-black text-msi-blue uppercase tracking-wide mb-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-msi-blue text-white text-xs flex items-center justify-center font-bold">2</span>
          UNDERSTAND
        </h4>
        <p className="text-gray-800 leading-relaxed">
          Individual observations are considered over time to identify emerging interests, strengths, needs and developmental patterns.
        </p>
      </div>

      {/* Step 3: PERSONALISE */}
      <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-msi-orange" />
        <p className="text-xs font-bold text-msi-orange uppercase tracking-wider mb-1">
          How can we respond?
        </p>
        <h4 className="text-lg font-black text-msi-orange uppercase tracking-wide mb-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-msi-orange text-white text-xs flex items-center justify-center font-bold">3</span>
          PERSONALISE
        </h4>
        <p className="text-gray-800 leading-relaxed">
          Teachers can adapt experiences &mdash; the level of support, type of activity, questions, materials, grouping or pace &mdash; according to what they are observing.
        </p>
      </div>

      {/* Step 4: ENGAGE */}
      <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-pink-500" />
        <p className="text-xs font-bold text-pink-600 uppercase tracking-wider mb-1">
          What experience will help the child participate and grow?
        </p>
        <h4 className="text-lg font-black text-pink-600 uppercase tracking-wide mb-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-pink-500 text-white text-xs flex items-center justify-center font-bold">4</span>
          ENGAGE
        </h4>
        <p className="text-gray-800 leading-relaxed">
          Children are given meaningful opportunities to participate, experiment, communicate, move, create and discover.
        </p>
      </div>

      {/* Step 5: TRACK */}
      <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-msi-green" />
        <p className="text-xs font-bold text-green-700 uppercase tracking-wider mb-1">
          What is changing over time?
        </p>
        <h4 className="text-lg font-black text-green-700 uppercase tracking-wide mb-2 flex items-center gap-2">
          <span className="w-6 h-6 rounded-full bg-msi-green text-white text-xs flex items-center justify-center font-bold">5</span>
          TRACK
        </h4>
        <p className="text-gray-800 leading-relaxed">
          Developmental observations are recorded over time so that teachers and families can see growth, emerging abilities and areas where additional opportunities may help.
        </p>
      </div>
    </div>

    {/* Cycle Loop Footer Card */}
    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-2">
      <p className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Because development never stands still &mdash; OBSERVE AGAIN
      </p>
      <p className="text-purple-100 text-sm sm:text-base font-medium leading-relaxed">
        Then the cycle begins again. Because children keep changing. Our understanding of them should keep changing too.
      </p>
    </div>
  </div>
);

export const neuropiDrawerBody = (
  <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
    <p className="font-semibold text-msi-purple text-base">
      The NeuroPi Approach is where the science of the brain meets the art of nurturing.
    </p>
    <p>
      <strong>NeuroPi brings together:</strong><br />
      <span className="text-msi-blue font-bold">
        The Child + The Teacher + The Classroom + Developmental Observation + The Parent + The Home
      </span>{' '}
      into one connected learning and developmental ecosystem.
    </p>
    <ul className="space-y-1 pl-3 border-l-2 border-msi-blue/40 text-gray-800">
      <li>Technology supports the process.</li>
      <li>Teachers bring professional observation.</li>
      <li>Parents bring knowledge of their child.</li>
    </ul>
    <div className="bg-orange-50/90 border-l-4 border-msi-orange p-4 rounded-r-xl">
      <p className="font-bold text-msi-orange text-xs uppercase tracking-wider">
        And at the centre of everything remains:
      </p>
      <p className="text-xl font-extrabold text-msi-purple my-1">ONE CHILD.</p>
      <div className="space-y-1 text-gray-800 font-medium">
        <p>Not compared.</p>
        <p>Not labelled.</p>
        <p>Not reduced to a score.</p>
        <p className="text-msi-purple font-bold">Observed. Understood. Engaged. Supported.</p>
      </div>
    </div>
    <div className="pt-3 border-t border-gray-200">
      <p className="font-extrabold text-msi-purple text-base">
        MY SCHOOL ITALY &mdash; Powered by NeuroPi
      </p>
      <p className="italic text-msi-orange font-semibold text-sm">
        Where School and Home Become One Learning Partnership.
      </p>
    </div>
  </div>
);

export const fivePillarsDrawerBody = (
  <div className="space-y-4 text-gray-700 text-[15px] leading-relaxed">
    <p className="font-semibold text-msi-purple text-base">
      Every child’s brain is a world of wonder. Here, we blend neuroscience, play, and empathy to nurture calm, confident, and connected learners.
    </p>

    <div className="space-y-3 pt-2">
      <div className="p-3.5 bg-purple-50/80 border-l-4 border-msi-purple rounded-r-xl">
        <p className="font-extrabold text-msi-purple text-base">Brain-Based Learning</p>
        <p className="text-gray-700 text-sm mt-0.5">
          Each activity is designed to build focus, memory, and creative thinking.
        </p>
      </div>

      <div className="p-3.5 bg-blue-50/80 border-l-4 border-msi-blue rounded-r-xl">
        <p className="font-extrabold text-msi-blue text-base">Mindful Routines</p>
        <p className="text-gray-700 text-sm mt-0.5">
          Calm, predictable rhythms that strengthen emotional regulation and self-awareness.
        </p>
      </div>

      <div className="p-3.5 bg-orange-50/80 border-l-4 border-msi-orange rounded-r-xl">
        <p className="font-extrabold text-msi-orange text-base">Nutrition & Movement Integration</p>
        <p className="text-gray-700 text-sm mt-0.5">
          Healthy bodies that fuel strong neural connections and cognitive clarity.
        </p>
      </div>

      <div className="p-3.5 bg-green-50/80 border-l-4 border-msi-green rounded-r-xl">
        <p className="font-extrabold text-green-700 text-base">Social-Emotional Learning</p>
        <p className="text-gray-700 text-sm mt-0.5">
          Building empathy, confidence, and communication from the very start.
        </p>
      </div>

      <div className="p-3.5 bg-yellow-50/80 border-l-4 text-amber-900 border-msi-yellow rounded-r-xl">
        <p className="font-extrabold text-amber-800 text-base">Playful Discovery</p>
        <p className="text-gray-700 text-sm mt-0.5">
          Curiosity-driven exploration that transforms play into powerful learning.
        </p>
      </div>
    </div>
  </div>
);

export const k1DrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      As children&apos;s language, attention and independence develop, K1 introduces increasingly structured learning while preserving the joy of discovery.
    </p>
    <p>
      Children build foundations in language and literacy, mathematics, science, understanding the world, communication, creativity, physical development and social-emotional learning.
    </p>
    <p>
      Stories and real experiences help children connect what they learn with the world around them.
    </p>
    <p className="font-semibold text-msi-purple">
      Learning becomes meaningful when children can connect it.
    </p>
  </div>
);

export const k2DrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      K2 builds confidence and independence as children prepare for the next stage of formal schooling.
    </p>
    <p>
      Children strengthen reading readiness, writing, mathematical thinking, scientific curiosity, communication, problem-solving, creativity and independent learning habits.
    </p>
    <p>
      Our objective is not simply to prepare children for the next classroom. It is to help them become curious thinkers, confident communicators and enthusiastic learners.
    </p>
    <p className="font-semibold text-msi-purple">
      Ready for School. Ready for Learning. Ready for What Comes Next.
    </p>
  </div>
);

export const daycareDrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      Daycare at MSI is more than supervision after school.
    </p>
    <p>
      Children remain within a familiar environment where care, relationships, play, meals, rest, movement, learning and friendships continue naturally throughout the day.
    </p>
    <p>
      Parents remain connected to their child&apos;s experiences, helping create continuity between home, school and daycare.
    </p>
    <p className="font-semibold text-msi-purple">
      You focus on your work. We remain focused on your child.
    </p>
  </div>
);

export const twentyFourHourCareDrawerBody = (
  <div className="mt-4 space-y-4 text-gray-600 text-base leading-relaxed">
    <p>
      Some professions don&apos;t operate from nine to five.
    </p>
    <p>
      At selected locations, MSI can provide extended childcare solutions designed for parents working night shifts, rotating schedules, healthcare, technology, emergency services and other non-traditional working hours.
    </p>
    <p>
      Availability and operating hours vary by centre.
    </p>
    <p className="font-semibold text-msi-purple">
      Because modern families need modern childcare.
    </p>
  </div>
);

export const earlyLearningDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-orange-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        Where Neuroscience-Informed Philosophy Becomes Daily Classroom Practice
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        THE NEUROPI CLASSROOM METHOD
      </h3>
      <p className="mt-3 text-gray-700 font-medium leading-relaxed">
        A philosophy becomes meaningful only when a teacher can use it.<br />
        The NeuroPi Classroom Method provides MSI educators with a consistent approach for turning observation into better classroom experiences.
      </p>
    </div>

    {/* Three Important Principles */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        It brings together three important principles:
      </h4>
      <div className="space-y-3">
        <div className="p-3.5 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-msi-purple flex-shrink-0" />
          <p className="font-bold text-msi-purple text-sm sm:text-base uppercase tracking-wide">
            1. UNDERSTAND EVERY CHILD
          </p>
        </div>
        <div className="p-3.5 bg-blue-50/90 border-l-4 border-msi-blue rounded-r-xl shadow-2xs flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-msi-blue flex-shrink-0" />
          <p className="font-bold text-msi-blue text-sm sm:text-base uppercase tracking-wide">
            2. ONE CONSISTENT METHOD
          </p>
        </div>
        <div className="p-3.5 bg-orange-50/90 border-l-4 border-msi-orange rounded-r-xl shadow-2xs flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-msi-orange flex-shrink-0" />
          <p className="font-bold text-msi-orange text-sm sm:text-base uppercase tracking-wide">
            3. CONTINUOUSLY DEVELOP EVERY TEACHER
          </p>
        </div>
      </div>
    </div>

    {/* Transformation Highlight Card */}
    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-3">
      <p className="font-bold text-purple-200 text-xs sm:text-sm uppercase tracking-widest">
        The result is a classroom where the question changes from:
      </p>
      <div className="p-3.5 rounded-xl bg-white/10 border border-white/20">
        <p className="text-gray-300 line-through font-semibold text-sm sm:text-base">
          &ldquo;Did I teach today&rsquo;s lesson?&rdquo;
        </p>
      </div>
      <p className="font-bold text-msi-yellow text-xs sm:text-sm uppercase tracking-widest pt-1">
        to:
      </p>
      <div className="p-4 rounded-xl bg-msi-yellow/20 border border-msi-yellow/40">
        <p className="text-msi-yellow font-extrabold text-base sm:text-lg">
          &ldquo;How did each child experience today&rsquo;s learning?&rdquo;
        </p>
      </div>
    </div>
  </div>
);

export const teacherDevelopmentDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        Continuous Professional Growth
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        NEUROPI TEACHER DEVELOPMENT
      </h3>
      <p className="mt-3 text-gray-800 font-bold leading-relaxed text-base sm:text-lg">
        To Understand Children Better, We Must Keep Developing the Adults Around Them.
      </p>
      <p className="mt-2 text-gray-700 font-medium leading-relaxed">
        The NeuroPi Way depends on the teacher. That is why teacher development is not treated as a one-time induction program. MSI educators continue developing their understanding.
      </p>
    </div>

    {/* Areas of Understanding Badges */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        MSI educators continue developing their understanding of:
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {[
          'Child Development',
          'Observation',
          'Learning Dispositions',
          'Classroom Engagement',
          'Emotional Safety',
          'Communication',
          'Story-Based Learning',
          'Movement & Creativity',
          'Developmental Documentation',
          'Parent Partnership',
          'Reflective Teaching Practice',
        ].map((item, idx) => (
          <span
            key={idx}
            className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-purple-50/90 text-msi-purple border border-purple-100 shadow-2xs"
          >
            • {item}
          </span>
        ))}
      </div>
    </div>

    {/* Developmental Pathway */}
    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md space-y-4">
      <h4 className="font-extrabold text-msi-orange text-base sm:text-lg uppercase tracking-wider">
        Teachers can progress through a developmental pathway:
      </h4>

      <div className="space-y-3">
        {/* 1. FOUNDATION EDUCATOR */}
        <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
          <p className="font-extrabold text-msi-purple text-base uppercase">
            FOUNDATION EDUCATOR
          </p>
          <p className="text-gray-700 text-sm font-medium mt-1">
            Understanding the NeuroPi philosophy and classroom foundations.
          </p>
        </div>

        <div className="text-center text-msi-purple font-black text-xl">↓</div>

        {/* 2. PRACTITIONER */}
        <div className="p-4 bg-blue-50/90 border-l-4 border-msi-blue rounded-r-xl shadow-2xs">
          <p className="font-extrabold text-msi-blue text-base uppercase">
            PRACTITIONER
          </p>
          <p className="text-gray-700 text-sm font-medium mt-1">
            Applying the method consistently in everyday teaching.
          </p>
        </div>

        <div className="text-center text-msi-blue font-black text-xl">↓</div>

        {/* 3. LEAD EDUCATOR */}
        <div className="p-4 bg-orange-50/90 border-l-4 border-msi-orange rounded-r-xl shadow-2xs">
          <p className="font-extrabold text-msi-orange text-base uppercase">
            LEAD EDUCATOR
          </p>
          <p className="text-gray-700 text-sm font-medium mt-1">
            Supporting quality practice within the classroom and team.
          </p>
        </div>

        <div className="text-center text-msi-orange font-black text-xl">↓</div>

        {/* 4. MENTOR */}
        <div className="p-4 bg-amber-50/90 border-l-4 border-amber-500 rounded-r-xl shadow-2xs">
          <p className="font-extrabold text-amber-800 text-base uppercase">
            MENTOR
          </p>
          <p className="text-gray-700 text-sm font-medium mt-1">
            Helping other educators strengthen their practice.
          </p>
        </div>

        <div className="text-center text-amber-600 font-black text-xl">↓</div>

        {/* 5. SCHOOL LEADER */}
        <div className="p-4 bg-green-50/90 border-l-4 border-msi-green rounded-r-xl shadow-2xs">
          <p className="font-extrabold text-green-800 text-base uppercase">
            SCHOOL LEADER
          </p>
          <p className="text-gray-700 text-sm font-medium mt-1">
            Building a consistent NeuroPi learning culture across the school.
          </p>
        </div>
      </div>
    </div>

    {/* Summary Callout Banner */}
    <div className="p-4 rounded-xl bg-msi-cream border-l-4 border-msi-purple shadow-xs">
      <p className="font-semibold text-msi-purple text-sm sm:text-base leading-relaxed">
        Because the quality of an early-years system ultimately depends upon the quality of the interactions a child experiences every day.
      </p>
    </div>

    {/* Footer Accent Card */}
    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-1.5">
      <p className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Develop the Teacher.
      </p>
      <p className="font-extrabold text-white text-base sm:text-lg uppercase tracking-wide">
        Strengthen the Classroom.
      </p>
      <p className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Support the Child.
      </p>
    </div>
  </div>
);

export const neuroPiWayGalleryImages = [
  '/images/nep/The_NeuroPi_Way_1.png',
  '/images/nep/The_NeuroPi_Way_2.png',
  '/images/nep/The_NeuroPi_Way_3.png',
  '/images/nep/The_NeuroPi_Way_4.png',
  '/images/nep/The_NeuroPi_Way_5.jpeg',
  '/images/nep/The_NeuroPi_Way_6.png',
  '/images/nep/The_NeuroPi_Way_9.png',
  '/images/nep/The_NeuroPi_Way_13.png',
];


