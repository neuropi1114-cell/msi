'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Harshitha Umashankar',
    text: 'Good understanding between students and teachers. Excellent infrastructure with outstanding education. Classrooms are very clean and very good facilities are provided for students, happy to see that they maintain hygiene which is really helpful. Teaching and non-teaching academic staffs are very cooperative. This helps to approach the management easily. Would definitely suggest and prefer this School.',
  },
  {
    name: 'Seenu S',
    text: 'The online classes are really remarkable. My child is able to gain knowledge from the class. It has relieved me out of stress about the academic year due the pandemic. The activities are engaging and it helps in reflecting his understanding of the concepts.',
  },
  {
    name: 'Manju Melvin',
    text: 'I highly recommend this school all the teachers over here are so kind and truly encouraging each to their strength.....kids enjoy going to school and love the atmosphere over there.',
  },
  {
    name: 'Mullaivalavan M',
    text: 'Very Good education. Children thinking level is high. From grade 1 children Will take seminar in front of parents in classroom. Awesome. They\'re making children participate in all programs…from Grade 6 only exams ….',
  },
  {
    name: 'Lakshmi Kante',
    text: 'Very Good education. Training for behaviour modifications, teaching techniques and strategies are extraordinary. Trainers are very patient. Trainers answers all doubts and give encouragements to trainees. They are make us to full involvement to special field.',
  },
  {
    name: 'Bhavani K',
    text: 'Very Good education. Great school, teachers are very supportive and understanding good interaction between parents and teachers even virtually.',
  },
];

function Stars() {
  return (
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" viewBox="0 0 576 512" fill="currentColor">
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      ))}
    </div>
  );
}

export default function Feedback() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);

  const scroll = (dir) => {
    const container = containerRef.current;
    if (!container) return;
    const cardWidth = container.querySelector('div:first-child')?.offsetWidth || 320;
    const gap = 16;
    const scrollAmount = cardWidth + gap;
    const newScroll = container.scrollLeft + (dir === 'next' ? scrollAmount : -scrollAmount);
    container.scrollTo({ left: newScroll, behavior: 'smooth' });
    const idx = Math.round(newScroll / scrollAmount);
    setCurrent(Math.max(0, Math.min(idx, testimonials.length - 1)));
  };

  return (
    <section id="Testimonials" className="py-20 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-lg md:text-xl" style={{ color: '#1891CD' }}>What do parents say about us</p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2" style={{ color: '#E1872B' }}>Testimonials</h2>
          <div className="max-w-4xl mx-auto mt-6 text-gray-600 text-sm md:text-base leading-relaxed">
            <p>At My School ITALY, every parent&rsquo;s story reflects the heart of our mission &mdash; blending neuroscience and nurturing care to shape confident, happy learners. Our testimonials capture how families experience the NeuroPi difference &mdash; from emotional well-being to academic readiness and joyful curiosity.</p>
            <p className="mt-4">Parents consistently share how their children show remarkable emotional growth, learning to express feelings calmly and connect meaningfully with peers. The brain-based curriculum has improved attention, curiosity, and creative thinking at home and school. Teachers&rsquo; warmth and individual attention make every child feel seen, supported, and celebrated. The environment&rsquo;s soft colours, sensory-rich zones, and mindful routines create a sense of peace and belonging. Daily updates and parent workshops empower them to continue brain-nurturing practices at home. Together, these heartfelt testimonials showcase the essence of My School ITALY &mdash; where parents don&rsquo;t just see progress, they feel transformation.</p>
          </div>
          <div className="flex justify-center mt-4">
            <img src="/images/gallery/bee.png" alt="" className="w-auto h-6" loading="lazy" />
          </div>
        </motion.div>

        <div className="relative mt-12">
          <button
            onClick={() => scroll('prev')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 1000 1000" fill="currentColor">
              <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
            </svg>
          </button>
          <button
            onClick={() => scroll('next')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 1000 1000" fill="currentColor">
              <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
            </svg>
          </button>

          <div
            ref={containerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[320px] md:min-w-[400px] snap-start">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col h-full">
                  <Stars />
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <strong style={{ color: '#1891CD' }}>{t.name}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const container = containerRef.current;
                  if (!container) return;
                  const cardWidth = container.querySelector('div:first-child')?.offsetWidth || 320;
                  container.scrollTo({ left: i * (cardWidth + 16), behavior: 'smooth' });
                  setCurrent(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-[#E1872B]' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
