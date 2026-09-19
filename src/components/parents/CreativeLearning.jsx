import Image from 'next/image';
import UnderlineArrowLink from '../common/UnderlineArrowLink';
import ScrollReveal from '../common/ScrollReveal';

const defaultParagraphs = [
  "You may be at work.",
  "You may be travelling.",
  "You may simply be wondering whether your child ate lunch, enjoyed the story or finally tried the activity they were hesitant about yesterday.",
  "We understand why those little things matter.",
  "At My School ITALY, the parent experience is built around communication, continuity and trust.",
  "Because early childhood works best when the important adults surrounding a child understand one another.",
];

export default function CreativeLearning({
  title = "YOUR CHILD'S SCHOOL SHOULD NEVER FEEL FAR AWAY",
  paragraphs = defaultParagraphs,
  footerContent = null,
  showFooter = true,
}) {
  return (
    <section className="pt-3 md:pt-5 pb-12 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <ScrollReveal direction="right" delay={0.1}>
            <h2 className="text-center md:text-left">
              {title}
            </h2>
            <div className="text-gray-600 mb-6 leading-relaxed space-y-2 font-lato text-[17px] text-center md:text-left">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
              {footerContent ? (
                footerContent
              ) : showFooter ? (
                <>
                  <p className="font-bold text-msi-purple pt-2">
                    YOU KNOW YOUR CHILD.<br />
                    WE GET TO KNOW YOUR CHILD TOO.
                  </p>
                  <p>And together, we support the journey.</p>
                </>
              ) : null}
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-6">
              <UnderlineArrowLink href="/contact" text="FIND A CENTRE" color="green" />
              <UnderlineArrowLink href="/book-your-tour" text="BOOK A TOUR" color="yellow" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.25}>
            <Image
              src="/images/parents/batch-3-16.png"
              alt="Children taking part in creative learning activities at My School ITALY daycare"
              width={800}
              height={534}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
