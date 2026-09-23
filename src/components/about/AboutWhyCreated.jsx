'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

/* Sub-component: Bullet Row Item */
function BulletItem({ text, color = 'bg-msi-blue', className = '' }) {
  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <span className={`w-2.5 h-2.5 rounded-full ${color} mt-2 shrink-0`} />
      <p>{text}</p>
    </div>
  );
}

/* Sub-component: Clean Editorial Accordion Card */
function AccordionCard({ title, isOpen, onToggle, children, delay = 0.1 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl border border-black/[0.06] shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full p-6 sm:p-8 flex items-center justify-between text-left gap-4 hover:bg-[#faf9f6] transition-colors focus:outline-none group"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl sm:text-2xl font-bold  not-italic tracking-tight leading-snug group-hover:text-msi-orange transition-colors">
          {title}
        </h3>
        <div className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-msi-orange text-white rotate-180' : 'bg-[#f4f2eb] text-[#78716c] group-hover:bg-msi-orange group-hover:text-white'}`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-2 border-t border-black/[0.05] text-[#374151] text-base md:text-lg leading-relaxed font-normal">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* Sub-component: Section Title Block */
function SectionTitle({ title, subtitle, badge, titleSize = 'text-2xl sm:text-3xl lg:text-4xl' }) {
  return (
    <div className="space-y-2">
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-2"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-msi-orange/10 text-msi-orange text-xs font-bold uppercase tracking-widest border border-msi-orange/20">
            {badge}
          </span>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className={`${titleSize} font-bold tracking-tight text-msi-green not-italic leading-tight`}>
          {title}
        </h3>
      </motion.div>

      {subtitle && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[#6b7280] text-base sm:text-lg font-medium"
        >
          <p>{subtitle}</p>
        </motion.div>
      )}
    </div>
  );
}

/* Data Arrays for Accordions */
const block1Questions = [
  'Do we see a three-year-old who must learn the alphabet?',
  'A four-year-old who must learn numbers?',
  'A five-year-old who must become “school ready”?',
];

const block1Observations = [
  "I began thinking about the child who stands quietly at the classroom door, holding a parent's hand a little tighter because everything inside is new.",
  "The child who knows the answer but doesn't yet have the confidence to say it.",
  "The child who cannot sit still because the world is simply too interesting.",
  "The child who asks “Why?” again and again until the adults become tired of answering.",
  "The child who eats slowly.",
  "The child who needs one more hug before Mum leaves.",
  "The child who builds the same tower ten times — and watches it fall ten times — before discovering how to make it stand.",
];

const block2Points = [
  'What if that tower was teaching persistence?',
  'What if all those “whys” were the beginnings of scientific thinking?',
  'What if movement was part of learning?',
  'What if the child who was quiet was observing more than we realised?',
];

const block3Points = [
  'That question became the beginning of My School ITALY.',
  'I wanted to create a school where childhood would not be hurried.',
  'Where a teacher would notice before she judged.',
  'Where questions would matter as much as answers.',
  'Where stories would open doors to mathematics, science, language, nature and imagination.',
  'Where children could move, make noise, create, fail, try again and discover.',
  'Where emotional safety would matter as much as physical safety.',
  'Where food, sleep, movement and relationships would be understood as part of development — not interruptions to education.',
  "And where parents would never feel that handing their child over at the school gate meant being disconnected from their child's world.",
];

const block4PointsNoTwoChildren = [
  'One speaks early.',
  'Another watches quietly.',
  'One runs towards everything new.',
  'Another first needs to know that it is safe.',
  'One learns through a story.',
  'Another needs to touch it.',
  'Build it.',
  'Move it.',
  'Draw it.',
  'Ask about it.',
  'Take it apart.',
  'And perhaps put it together again.',
];

const block4PointsExpectSameWay = [
  'That question eventually took our journey further — into neuroscience, developmental observation and NeuroPi.',
  'But technology was never meant to replace the teacher.',
  'Data was never meant to define the child.',
  'And observation was never meant to label them.',
];

const block5Moments = [
  'Because when we notice more, we can understand more.',
  'And when we understand more, perhaps we can teach better, care better and respond better.',
  "Today, when I think about My School ITALY, I don't imagine a building.",
  'I imagine thousands of very small moments.',
  'A baby reaching for her caregiver.',
  'A toddler saying a new word.',
  'A little boy finally balancing on one foot.',
  'A child comforting a friend.',
  'A teacher noticing that the child who rarely speaks has created an extraordinary picture.',
  'A parent opening an update at work and smiling.',
  'A classroom suddenly becoming silent because everyone wants to know what happens on the next page of a story.',
  'A child going home and asking a question nobody expected.',
  'Those moments may never appear on an examination paper.',
  'But they are childhood.',
  'And childhood is where our work begins.',
];

const block6ProtectionPoints = [
  'Not to fill childhood with more information.',
  'But to protect curiosity.',
  'Not simply to prepare children for the next school.',
  'But to help build the foundations for the person who will one day walk out into the world.',
  'And if, many years from now, an MSI child remembers only one thing about us, I hope it is not a worksheet or a classroom.',
];

export default function AboutWhyCreated() {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordionId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 lg:py-28 bg-[#faf9f6] relative border-b border-black/[0.06] overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 max-w-4xl relative z-10 space-y-12">

        {/* Block 1 */}
        <div className="space-y-6">
          <SectionTitle
            badge="FOUNDER'S PERSPECTIVE"
            title="It Began With a Question About One Child."
            subtitle="Years ago, one question stayed with me:"
            titleSize="text-3xl sm:text-4xl lg:text-5xl"
          />

          <AccordionCard
            title="When a little child walks into a classroom, what do we see?"
            isOpen={openAccordionId === 1}
            onToggle={() => toggleAccordion(1)}
            delay={0.1}
          >
            <div className="space-y-3 pt-2">
              {block1Questions.map((q, idx) => (
                <BulletItem key={idx} text={q} color="bg-msi-orange" />
              ))}
              <BulletItem
                text="Or do we see something much bigger?"
                color="bg-msi-blue"
                className="font-bold  text-lg pt-2"
              />
            </div>

            <div className="space-y-3 pt-6 border-t border-black/[0.06]">
              {block1Observations.map((obs, idx) => (
                <BulletItem key={idx} text={obs} color="bg-msi-purple" />
              ))}
            </div>
          </AccordionCard>
        </div>

        {/* Block 2 */}
        <div className="space-y-6 pt-2">
          <SectionTitle
            title="And I kept coming back to the same thought:"
            titleSize="text-2xl sm:text-3xl lg:text-4xl"
          />

          <AccordionCard
            title="What if none of these were little things?"
            isOpen={openAccordionId === 2}
            onToggle={() => toggleAccordion(2)}
            delay={0.1}
          >
            <div className="space-y-3 pt-2">
              {block2Points.map((point, idx) => (
                <BulletItem key={idx} text={point} color="bg-msi-blue" />
              ))}
              <BulletItem
                text="What if mealtime, storytelling, friendships, disappointment, imagination, sleep, play and even saying goodbye to a parent each morning were all part of development?"
                color="bg-msi-orange"
                className="font-semibold "
              />
            </div>
          </AccordionCard>
        </div>

        {/* Block 3 */}
        <div className="space-y-6 pt-2">
          <SectionTitle
            title="Then another question became impossible for me to ignore:"
            titleSize="text-2xl sm:text-3xl lg:text-4xl"
          />

          <AccordionCard
            title="Why do we spend so much time preparing children for the future that we sometimes forget to understand the child standing in front of us today?"
            isOpen={openAccordionId === 3}
            onToggle={() => toggleAccordion(3)}
            delay={0.1}
          >
            <div className="space-y-3 pt-2">
              {block3Points.map((point, idx) => (
                <BulletItem key={idx} text={point} color={idx === 0 ? 'bg-msi-orange' : 'bg-msi-blue'} />
              ))}
            </div>
          </AccordionCard>
        </div>

        {/* Block 4 */}
        <div className="space-y-6 pt-2">
          <SectionTitle
            title="Over time, one belief became stronger than all the others:"
            titleSize="text-2xl sm:text-3xl lg:text-4xl"
          />

          <AccordionCard
            title="No two children arrive at childhood in exactly the same way."
            isOpen={openAccordionId === 4}
            onToggle={() => toggleAccordion(4)}
            delay={0.1}
          >
            <div className="space-y-3 pt-2">
              {block4PointsNoTwoChildren.map((point, idx) => (
                <BulletItem key={idx} text={point} color="bg-msi-purple" />
              ))}
            </div>
          </AccordionCard>

          <AccordionCard
            title="Why, then, should we expect every child to learn in exactly the same way?"
            isOpen={openAccordionId === 5}
            onToggle={() => toggleAccordion(5)}
            delay={0.15}
          >
            <div className="space-y-3 pt-2">
              {block4PointsExpectSameWay.map((point, idx) => (
                <BulletItem key={idx} text={point} color="bg-msi-orange" />
              ))}
            </div>
          </AccordionCard>
        </div>

        {/* Block 5 */}
        <div className="space-y-6 pt-2">
          <SectionTitle
            title="The purpose was much simpler:"
            titleSize="text-2xl sm:text-3xl lg:text-4xl"
          />

          <AccordionCard
            title="To help the adults around a child notice more."
            isOpen={openAccordionId === 6}
            onToggle={() => toggleAccordion(6)}
            delay={0.1}
          >
            <div className="space-y-3 pt-2">
              {block5Moments.map((moment, idx) => (
                <BulletItem key={idx} text={moment} color={idx < 2 ? 'bg-msi-blue' : 'bg-msi-purple'} />
              ))}
            </div>
          </AccordionCard>
        </div>

        {/* Block 6 */}
        <div className="space-y-6 pt-2">
          <SectionTitle
            title="That is why I created My School ITALY."
            titleSize="text-2xl sm:text-3xl lg:text-4xl"
          />

          <AccordionCard
            title="Not to create children who are ahead of other children. But to create an environment where every child has the opportunity to move forward from where they are."
            isOpen={openAccordionId === 7}
            onToggle={() => toggleAccordion(7)}
            delay={0.1}
          >
            <div className="space-y-3 pt-2">
              {block6ProtectionPoints.map((point, idx) => (
                <BulletItem key={idx} text={point} color="bg-msi-orange" />
              ))}
            </div>
          </AccordionCard>
        </div>

        {/* Block 7: Warm Editorial Manifesto Quote Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pt-6 space-y-6"
        >
          <SectionTitle
            title="I hope somewhere inside them remains the feeling:"
            titleSize="text-2xl sm:text-3xl lg:text-4xl"
          />

          <div className="bg-[#f4f2eb] rounded-3xl p-8 sm:p-12 border border-black/[0.08] shadow-sm space-y-8">
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-msi-blue leading-snug tracking-tight space-y-2">
              <p className="text-msi-blue">“They saw me.</p>
              <p className="text-msi-blue">They listened to me.</p>
              <p className="text-msi-blue">They let me wonder.</p>
              <p className="text-msi-blue">And they believed I could discover.”</p>
            </blockquote>

            <div className="space-y-1 text-[#374151] text-lg sm:text-xl font-medium pt-6 border-t border-black/[0.08]">
              <p>That is the school I wanted to build.</p>
              <p>
                That is <span className="font-bold text-msi-orange">My School ITALY.</span>
              </p>
            </div>

            <div className="pt-6 border-t border-black/[0.08] flex items-center justify-between">
              <div>
                <div className="text-3xl sm:text-4xl font-schoolbell text-msi-orange tracking-tight">
                  <h3>Dr. Aperna Volluru</h3>
                </div>
                <div className="text-xs text-[#78716c] mt-0.5">
                  <p>Founder, My School ITALY & CEO, NeuroPi</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}


