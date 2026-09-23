'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Drawer from '../layout/Drawer';
import ReadMoreButton from '../common/ReadMoreButton';

function renderRichDrawerContent(drawer, ageRange) {
  if (!drawer || !drawer.paragraphs) return null;

  const paragraphs = drawer.paragraphs;
  const title = drawer.title;

  // Custom rich renderer for "THE FIRST YEARS ARE NOT LITTLE YEARS."
  if (title.includes("THE FIRST YEARS ARE NOT LITTLE YEARS")) {
    const listItems = [
      "In the questions they ask.",
      "The stories they love.",
      "The things they build again and again.",
      "The way they make friends.",
      "The way they move.",
      "The things that make them laugh.",
      "The moments they hesitate.",
    ];

    return (
      <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
        {/* Header Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-100 shadow-xs">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
            {ageRange || "Connected Around One Child"}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
            {title}
          </h3>
          <p className="mt-3 text-gray-800 font-bold leading-relaxed text-base sm:text-lg">
            Before children can explain who they are, they are already showing us.
          </p>
        </div>

        {/* List of Observations */}
        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
          <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
            We see it in:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {listItems.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-purple-50/80 text-msi-purple font-semibold text-xs sm:text-sm border border-purple-100 shadow-2xs flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-msi-purple flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Breakthrough Moment Callout */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-orange-200 shadow-xs text-center space-y-1">
          <p className="text-xs font-bold text-msi-orange uppercase tracking-wider">
            And the moments they suddenly say:
          </p>
          <p className="text-2xl font-black text-msi-purple py-1">
            &ldquo;I can do it!&rdquo;
          </p>
        </div>

        {/* Footer Accent Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-2">
          <p className="font-bold text-msi-yellow text-base sm:text-lg">
            At My School ITALY, we believe early education begins by noticing these moments.
          </p>
          <p className="text-purple-100 font-medium text-sm sm:text-base">
            Because before we teach a child, we should first try to understand them.
          </p>
        </div>
      </div>
    );
  }

  // Custom rich renderer for "WHAT IF A PRESCHOOL COULD NOTICE MORE?"
  if (title.includes("NOTICE MORE")) {
    const questions = [
      "What makes them curious?",
      "How they approach something new.",
      "What keeps them engaged.",
      "How they respond when something is difficult.",
      "How they communicate.",
      "How they interact with other children.",
      "What they are beginning to do independently.",
      "What makes their eyes light up.",
    ];

    return (
      <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-100 shadow-xs">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-blue/10 text-msi-blue mb-2">
            {ageRange || "Everything A Child Needs"}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
            {title}
          </h3>
          <p className="mt-3 text-gray-800 font-bold leading-relaxed text-base sm:text-lg">
            Not only what your child knows. But:
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {questions.map((q, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-blue-50/80 text-msi-blue font-bold text-xs sm:text-sm border border-blue-100 shadow-2xs flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-msi-blue flex-shrink-0" />
                {q}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center space-y-2">
          <p className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
            This is where the MSI experience becomes different.
          </p>
          <div className="text-base sm:text-lg font-black text-white space-y-1">
            <p>WE DON&rsquo;T JUST TEACH THE CHILD.</p>
            <p className="text-msi-yellow">WE LEARN FROM THE CHILD TOO.</p>
          </div>
        </div>
      </div>
    );
  }

  // Custom rich renderer for "STORIES ARE WHERE OUR CLASSROOMS COME ALIVE"
  if (title.includes("STORIES ARE WHERE OUR CLASSROOMS COME ALIVE")) {
    const steps = ["LISTEN", "WATCH", "CONNECT", "PRACTISE", "MOVE & CREATE", "PERFORM"];
    const subjects = ["English", "Mathematics", "Science", "Understanding the World", "Creativity", "Values"];

    return (
      <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-50 via-white to-purple-50 border border-orange-100 shadow-xs">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-orange/10 text-msi-orange mb-2">
            Story-Based Learning
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-msi-purple tracking-tight uppercase">
            {title}
          </h3>
          <p className="mt-3 text-gray-800 font-bold leading-relaxed text-base sm:text-lg">
            Once Upon a Time Can Lead Almost Anywhere.
          </p>
          <p className="mt-2 text-gray-700 font-medium leading-relaxed">
            At My School ITALY, stories are not something we save for the end of the lesson. Stories can become the lesson.
          </p>
        </div>

        {/* Story Cycle Steps */}
        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
          <h4 className="font-extrabold text-msi-purple text-base uppercase tracking-wider mb-3">
            The Story Learning Flow:
          </h4>
          <div className="flex flex-wrap gap-2">
            {steps.map((step, idx) => (
              <span
                key={idx}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold bg-orange-50 text-msi-orange border border-orange-100 shadow-2xs"
              >
                {idx + 1}. {step}
              </span>
            ))}
          </div>
        </div>

        {/* Integrated Subjects */}
        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md">
          <h4 className="font-extrabold text-msi-blue text-base uppercase tracking-wider mb-3">
            All connected through meaningful experiences:
          </h4>
          <div className="flex flex-wrap gap-2">
            {subjects.map((sub, idx) => (
              <span
                key={idx}
                className="px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold bg-blue-50 text-msi-blue border border-blue-100 shadow-2xs"
              >
                • {sub}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
          <p className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
            All connected through experiences children can remember.
          </p>
        </div>
      </div>
    );
  }

  // Custom rich renderer for "SMALL TUMMIES. BIG DEVELOPMENTAL NEEDS."
  if (title.includes("SMALL TUMMIES")) {
    return (
      <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50 via-white to-amber-50 border border-green-100 shadow-xs">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-green/10 text-green-700 mb-2">
            INSPIRE ME EAT
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-msi-orange tracking-tight uppercase">
            {title}
          </h3>
          <p className="mt-3 text-gray-800 font-bold leading-relaxed text-base sm:text-lg">
            Breakfast. Lunch. Snacks.
          </p>
          <p className="mt-2 text-gray-700 font-medium leading-relaxed">
            Mealtimes are about more than food. Children learn to hold, pour, choose, communicate, wait, share, taste and gradually become more independent.
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-md space-y-2">
          <p className="font-semibold text-gray-800 leading-relaxed">
            Nutrition, age-appropriate textures, portions, hygiene and positive mealtime experiences are part of every MSI day.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-lg text-center">
          <p className="font-extrabold text-msi-yellow text-base sm:text-lg uppercase tracking-wide">
            Because even a spoon can become a learning tool.
          </p>
        </div>
      </div>
    );
  }

  // Fallback for any other drawer payloads
  return (
    <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed p-2">
      {paragraphs.map((paragraph, i) => (
        <div key={i} className="p-3.5 bg-purple-50/60 rounded-xl border border-purple-100 shadow-2xs">
          <p dangerouslySetInnerHTML={{ __html: paragraph }} />
        </div>
      ))}
    </div>
  );
}

const AgeDetail = ({ group, reversed, first }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openAccordions, setOpenAccordions] = useState(() =>
    group.accordion ? group.accordion.map((_, i) => i) : []
  );

  const toggleAccordion = (i) => {
    setOpenAccordions((prev) =>
      prev.includes(i) ? prev.filter((item) => item !== i) : [...prev, i]
    );
  };

  const content = (
    <motion.div
      initial={{ opacity: 0, x: reversed ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white p-8 rounded-2xl shadow-lg"
    >
      <h3>
        {group.ageRange}
      </h3>
      {group.accordion ? (
        <div className="mt-3 space-y-3">
          {group.accordion.map((item, i) => {
            const isOpen = openAccordions.includes(i);
            return (
              <React.Fragment key={i}>
                {i > 0 && (
                  <div className="flex items-center gap-3 my-3">
                    <span className="text-msi-blue font-bold text-3xl md:text-4xl select-none">+</span>
                  </div>
                )}
                <div>
                  <button
                    onClick={() => toggleAccordion(i)}
                    className="w-full py-1 text-left cursor-pointer focus:outline-none"
                  >
                    <h2>
                      {item.title}
                    </h2>
                  </button>
                  {isOpen && (
                    <div className="mt-1 pb-1">
                      <p className="leading-relaxed">{item.content}</p>
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      ) : (
        <>
          <h2 className="mb-4">
            {group.title}
          </h2>
          <p className="mb-6 leading-relaxed">{group.description}</p>
        </>
      )}
      {!group.accordion && (group.drawer ? (
        <>
          <div className="mt-4">
            <ReadMoreButton
              onClick={() => setDrawerOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={drawerOpen}
            />
          </div>
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} title={group.drawer.title} side="left">
            {renderRichDrawerContent(group.drawer, group.ageRange)}
          </Drawer>
        </>
      ) : (
        <div className="mt-4">
          <ReadMoreButton href={group.link} />
        </div>
      ))}
    </motion.div>
  );

  const media = (
    <motion.div
      initial={{ opacity: 0, x: reversed ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={group.image}
        alt={group.alt}
        className="w-full rounded-2xl shadow-xl object-cover"
        loading="lazy"
      />
    </motion.div>
  );

  return (
    <div className={`${first ? '' : 'mt-16 '}grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
      {reversed ? (
        <>
          <div className="order-2 lg:order-1">{content}</div>
          <div className="order-1 lg:order-2">{media}</div>
        </>
      ) : (
        <>
          <div>{media}</div>
          <div>{content}</div>
        </>
      )}
    </div>
  );
};

const AgeGroupsIntro = ({ data }) => {
  return (
    <section className="relative py-16 overflow-hidden" style={{ backgroundColor: '#FCF9F4' }}>
      <div className="container mx-auto px-4 md:px-12">
        {data.header && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h2 className="mb-4 text-msi-purple">
              {data.header.title}
            </h2>
            <h2>{data.header.subtitle}</h2>
            <p className="text-lg leading-relaxed">{data.header.description}</p>
          </motion.div>
        )}

        {data.groups.map((group, index) => (
          <AgeDetail key={index} group={group} reversed={group.reversed} first={index === 0} />
        ))}
      </div>
    </section>
  );
};

export default AgeGroupsIntro;