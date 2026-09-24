import React from 'react';

export const programVideos = [
  {
    id: 1,
    title: 'Program 1',
    url: 'https://vimeo.com/1228340625',
  },
  {
    id: 2,
    title: 'Program 2',
    url: 'https://vimeo.com/1228340627',
  },
  {
    id: 3,
    title: 'Program 3',
    url: 'https://vimeo.com/1228340631',
  },
  {
    id: 4,
    title: 'Program 4',
    url: 'https://vimeo.com/1228758873',
  },
];

export const programGalleryImages = [
  '/images/programs/Programs_2_1.png',
  '/images/programs/Aperna_5.png',
  '/images/programs/Programs_4.png',
  '/images/programs/Batch_3_6.png',
  '/images/programs/Daycare.png',
  '/images/programs/Programs_7.png',
  '/images/programs/Aperna_17.png',
  '/images/programs/Aperna_23.png',
  '/images/programs/Aperna_24.png',
  '/images/programs/Aperna_25.png',
  '/images/programs/Aperna_27.png',
  '/images/programs/Programs_Enrol.png',
];

export const metadata = {
  title: 'Programs | My School ITALY',
  description: 'Explore My School ITALY neuroscience-based programs: Infant (45 days–18 months), Toddler (18 months–3 years), Preschool (3–5 years), and Kindergarten (5–7 years).',
  alternates: { canonical: '/programs' },
  openGraph: {
    title: 'Programs | My School ITALY',
    description: 'Explore My School ITALY neuroscience-based programs: Infant (45 days–18 months), Toddler (18 months–3 years), Preschool (3–5 years), and Kindergarten (5–7 years).',
    url: '/programs',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programs | My School ITALY',
    description: 'Explore My School ITALY neuroscience-based programs: Infant (45 days–18 months), Toddler (18 months–3 years), Preschool (3–5 years), and Kindergarten (5–7 years).',
  },
};

/* --- Rich Beautiful Card Drawer Bodies --- */

export const ciaoBabyDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-orange-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        The Smallest Children Deserve Our Greatest Care
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        CIAO BABY: BABY CRÈCHE &mdash; 45 DAYS+
      </h3>
      <p>
        A warm, nurturing environment for babies beginning from 45 days, where care routines and early developmental experiences come together seamlessly.
      </p>
    </div>

    <div className="space-y-3">
      <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
        <h4 className="font-extrabold text-msi-purple text-base uppercase mb-1">Individual Rhythms</h4>
        <p>
          Our caregivers pay close attention to each baby&apos;s individual rhythms &mdash; feeding, sleep, comfort, movement, sensory experiences and interaction.
        </p>
      </div>

      <div className="p-4 bg-blue-50/90 border-l-4 border-msi-blue rounded-r-xl shadow-2xs">
        <h4 className="font-extrabold text-msi-blue text-base uppercase mb-1">Sensory Exploration</h4>
        <p>
          Gentle conversation, music, touch, tummy time, movement and sensory exploration make everyday care meaningful.
        </p>
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Care &bull; Comfort &bull; Connection &bull; Development
      </h4>
    </div>
  </div>
);

export const preNurseryDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-blue/10 text-msi-blue mb-2">
        Little Feet. Big Curiosity.
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        PRE NURSERY
      </h3>
      <p>
        Toddlers learn by doing. They touch, move, imitate, experiment, repeat, question and discover the world around them.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        Key Developmental Focus:
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {['Sensory Exploration', 'Language Building', 'Imaginative Play', 'Social Interaction', 'Independent Movement', 'Emotional Security'].map((item, idx) => (
          <span key={idx} className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-50/90 text-msi-blue border border-blue-100 shadow-2xs">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="p-4 rounded-xl bg-msi-cream border-l-4 border-msi-purple shadow-xs">
      <p>
        The environment gives children freedom to explore while providing the security of familiar routines and caring adults.
      </p>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Explore &bull; Move &bull; Communicate &bull; Discover
      </h4>
    </div>
  </div>
);

export const nurseryDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-purple-50 border border-yellow-200 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-yellow/20 text-msi-purple mb-2">
        Where Curiosity Begins To Become Learning
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        NURSERY
      </h3>
      <p>
        Nursery transforms children&apos;s natural curiosity into purposeful experiences across all domains of growth.
      </p>
    </div>

    <div className="space-y-3">
      <div className="p-4 bg-yellow-50/90 border-l-4 border-msi-yellow rounded-r-xl shadow-2xs">
        <h4 className="font-extrabold text-msi-purple text-base uppercase mb-1">Foundational Skills</h4>
        <p>
          Through stories, conversation, play, movement, art, music and hands-on discovery, children begin developing language, early literacy, numeracy, communication, physical and social-emotional skills.
        </p>
      </div>

      <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
        <h4 className="font-extrabold text-msi-purple text-base uppercase mb-1">Connected Learning</h4>
        <p>
          Rather than separating learning into isolated subjects, experiences are connected so children begin to understand relationships between ideas.
        </p>
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Ask &bull; Explore &bull; Connect &bull; Create
      </h4>
    </div>
  </div>
);

export const booksStoriesDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-blue-50 border border-purple-100 shadow-xs">
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        BOOKS &amp; STORIES
      </h3>
      <p>
        Stories are at the heart of My School ITALY. Our original books and learning materials take children into worlds of animals, nature, people, places and discovery.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-gradient-to-r from-msi-purple/10 to-msi-blue/5 border-l-4 border-msi-purple">
      <p>A story can lead into:</p>
      <p>
        Language &rarr; Mathematics &rarr; Science &rarr; Social Understanding &rarr; Creativity &rarr; Movement &rarr; Values
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-msi-blue/5 border-l-4 border-msi-blue">
      <p>Our learning journey follows a simple rhythm:</p>
      <p>
        LISTEN &rarr; WATCH &rarr; CONNECT &rarr; PRACTISE &rarr; MOVE &amp; CREATE &rarr; PERFORM
      </p>
    </div>
  </div>
);

export const k1DrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-yellow-50 border border-blue-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-blue/10 text-msi-blue mb-2">
        Exploring The World To Making Connections
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        KINDERGARTEN K1
      </h3>
      <p>
        As children&apos;s language, attention and independence develop, K1 introduces increasingly structured learning while preserving the joy of discovery.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        Core Pillars of K1:
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {['Language & Literacy', 'Mathematics', 'Science & World Exploration', 'Social-Emotional Learning', 'Creativity & Arts', 'Physical Development'].map((item, idx) => (
          <span key={idx} className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-50/90 text-msi-blue border border-blue-100 shadow-2xs">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Learning becomes meaningful when children can connect it.
      </h4>
    </div>
  </div>
);

export const k2DrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-purple-50 border border-orange-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-orange/10 text-msi-orange mb-2">
        Ready For School. Ready To Think.
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        KINDERGARTEN K2
      </h3>
      <p>
        K2 builds confidence and independence as children prepare for the next stage of formal schooling.
      </p>
    </div>

    <div className="space-y-3">
      <div className="p-4 bg-orange-50/90 border-l-4 border-msi-orange rounded-r-xl shadow-2xs">
        <h4 className="font-extrabold text-msi-orange text-base uppercase mb-1">Academic Readiness</h4>
        <p>
          Children strengthen reading readiness, writing, mathematical thinking, scientific curiosity, communication, problem-solving and independent learning habits.
        </p>
      </div>

      <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
        <h4 className="font-extrabold text-msi-purple text-base uppercase mb-1">Enthusiastic Learners</h4>
        <p>
          Our objective is not simply to prepare children for the next classroom. It is to help them become curious thinkers, confident communicators and enthusiastic learners.
        </p>
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Ready for School &bull; Ready for Learning &bull; Ready for What Comes Next
      </h4>
    </div>
  </div>
);

export const daycareDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 via-white to-purple-50 border border-green-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-green/20 text-msi-purple mb-2">
        Your Child&apos;s Day Continues With Purpose
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        DAYCARE
      </h3>
      <p>
        Daycare at MSI is more than supervision after school. Children remain within a familiar environment where care, relationships, play, meals, rest, movement, learning and friendships continue naturally.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        Integrated Daycare Rhythm:
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {['Supervised Play', 'Nutritious Meals', 'Rest & Relaxation', 'Guided Movement', 'Enrichment Learning', 'Parent Updates'].map((item, idx) => (
          <span key={idx} className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-green-50/90 text-green-700 border border-green-100 shadow-2xs">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        You focus on your work. We remain focused on your child.
      </h4>
    </div>
  </div>
);

export const gymnasticsDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-yellow-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        Strong Bodies Support Growing Minds
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        GYMNASTICS
      </h3>
      <p>
        Gymnastics gives children opportunities to develop balance, coordination, flexibility, strength, spatial awareness and body confidence.
      </p>
    </div>

    <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
      <p>
        Through age-appropriate movement experiences, children learn to control their bodies, follow sequences, attempt challenges and experience the satisfaction of mastering a new movement.
      </p>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Move &bull; Balance &bull; Persist &bull; Achieve
      </h4>
    </div>
  </div>
);

export const roboticsDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-orange-50 border border-yellow-200 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-yellow/20 text-msi-purple mb-2">
        From “How Does It Work?” to “Can I Make It Work?”
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        ROBOTICS &amp; STEAM
      </h3>
      <p>
        Our age-appropriate robotics experiences introduce children to early STEAM thinking, sequencing, patterns, cause and effect, construction and problem-solving.
      </p>
    </div>

    <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
      <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
        STEAM Learning Foundations:
      </h4>
      <div className="flex flex-wrap gap-2.5">
        {['Pattern Recognition', 'Sequencing & Logic', 'Cause & Effect', 'Tactile Construction', 'Problem Solving'].map((item, idx) => (
          <span key={idx} className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-amber-50/90 text-msi-orange border border-amber-100 shadow-2xs">
            {item}
          </span>
        ))}
      </div>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        &ldquo;What happens if I try this?&rdquo;
      </h4>
    </div>
  </div>
);

export const danceCreativeMovementDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-yellow-50 via-white to-purple-50 border border-yellow-200 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-yellow/20 text-msi-purple mb-2">
        Let the Body Become Another Language
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
        DANCE &amp; CREATIVE MOVEMENT
      </h3>
      <p>
        Through music, rhythm, dance and creative movement, children develop coordination, body awareness, rhythm, expression, confidence and social participation.
      </p>
    </div>

    <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-xl shadow-2xs">
      <p>
        Sometimes children communicate best not through words &mdash; but through movement.
      </p>
    </div>
  </div>
);

export const storytellingCreativeArtsDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-purple-50 border border-orange-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-orange/10 text-msi-orange mb-2">
        Imagine It. Tell It. Create It.
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        STORYTELLING &amp; CREATIVE ARTS
      </h3>
      <p>
        Stories, drama, drawing, painting, music, puppetry and creative expression give children opportunities to transform imagination into something they can share.
      </p>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Because creativity isn&apos;t an extra subject. It is another way of thinking.
      </h4>
    </div>
  </div>
);

export const extendedDaycareDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-blue-50 border border-purple-100 shadow-xs">
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        EXTENDED DAYCARE
      </h3>
      <p>
        Working days don&apos;t always fit neatly around school hours. Our Extended Daycare provides families with additional childcare beyond regular program timings.
      </p>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        You focus on your work. We remain focused on your child.
      </h4>
    </div>
  </div>
);

export const emergencyExtendedCareDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-100 shadow-xs">
      <h3 className="text-xl sm:text-2xl font-black text-msi-blue tracking-tight uppercase">
        EMERGENCY EXTENDED CARE
      </h3>
      <p>
        Meetings run late. Travel gets delayed. Emergencies happen. Where available, MSI&apos;s Emergency Extended Care gives enrolled families additional support when unexpected circumstances arise.
      </p>
    </div>
  </div>
);

export const twentyFourHourCareDrawerBody = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-blue/10 text-msi-blue mb-2">
        Childcare Beyond Conventional Working Hours
      </span>
      <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
        24-HOUR CARE &mdash; WHERE AVAILABLE
      </h3>
      <p>
        Some professions don&apos;t operate from nine to five. At selected locations, MSI can provide extended childcare solutions designed for parents working night shifts, rotating schedules, healthcare, technology, emergency services and non-traditional hours.
      </p>
    </div>

    <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
      <h4 className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
        Because modern families need modern childcare.
      </h4>
    </div>
  </div>
);
