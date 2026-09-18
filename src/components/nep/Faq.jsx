'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    question: 'At what age can my child join MSI?',
    answer:
      'MSI provides age-appropriate programs beginning from 45 days, subject to program and centre availability.',
  },
  {
    question: 'Can I visit before deciding?',
    answer:
      'Yes. We strongly encourage parents to book a school tour, meet the team and experience the environment before making their decision.',
  },
  {
    question: 'Do you provide daycare?',
    answer:
      'Yes. MSI provides daycare and, at selected centres, extended childcare options designed around the needs of working families.',
  },
  {
    question: 'How will I know what my child does during the day?',
    answer:
      'Parents can receive relevant updates through our parent-connectivity system and communication with the school team.',
  },
  {
    question: 'What if my child takes time to settle?',
    answer:
      'That is completely normal. We work with families to make the transition appropriate to the individual child.',
  },
  {
    question: 'Are meals provided?',
    answer:
      'Meals and snacks are available through INSPIRE ME EAT at applicable centres and programs. Availability should be confirmed with your chosen centre.',
  },
  {
    question: 'Do you provide transport?',
    answer:
      'Transport is available at selected locations and routes, subject to seat availability.',
  },
  {
    question: 'How do you assess children?',
    answer:
      "MSI uses age-appropriate developmental observations alongside everyday learning experiences. Our approach is designed to understand progress over time rather than reduce a young child to marks or grades.",
  },
  {
    question: 'Is NeuroPi a diagnostic system?',
    answer:
      "No. NeuroPi's educational and developmental observations are not medical or psychological diagnoses.",
  },
  {
    question: "Can I speak to someone about my child's development?",
    answer:
      'Yes. Parents can request a conversation with the appropriate teacher, counsellor or school team member.',
  },
  {
    question: 'Do all MSI centres offer exactly the same services?',
    answer:
      'Core MSI principles remain consistent, while services such as extended hours, transport, meals, holiday care and 24-hour care may vary by location.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      <div>
        {faqs.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={i} className="border-b border-gray-200">
              <button
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
                className="w-full flex items-center justify-between gap-4 py-5 text-left"
              >
                <span className="font-lato text-[19px] font-bold text-[#464646]">
                  {faq.question}
                </span>
                <span
                  className={`text-[#d16827] text-2xl font-light flex-shrink-0 transition-transform ${open ? 'rotate-45' : ''}`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              {open && (
                <p className="font-lato text-[18px] text-[#464646] leading-relaxed pb-6 pr-8">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <p className="font-lato text-[22px] font-bold text-[#464646] mb-5">
          Still have a question?
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-block bg-msi-purple text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            ASK MSI
          </Link>
          <a
            href="https://wa.me/917075947070"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-msi-orange text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            WHATSAPP US
          </a>
          <Link
            href="/book-your-tour"
            className="inline-block border-2 border-msi-purple text-msi-purple font-bold py-3 px-8 rounded-full hover:bg-msi-purple hover:text-white transition-colors"
          >
            BOOK A TOUR
          </Link>
        </div>
      </div>
    </div>
  );
}