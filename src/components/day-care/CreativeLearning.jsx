import Image from 'next/image';
import UnderlineArrowLink from '../common/UnderlineArrowLink';

export default function CreativeLearning() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 >
              YOUR CHILD&apos;S SCHOOL SHOULD NEVER FEEL FAR AWAY
            </h2>
            <div className="text-gray-600 mb-6 leading-relaxed space-y-1 font-lato text-[17px]">
              <p>You may be at work.</p>
              <p>You may be travelling.</p>
              <p>
                You may simply be wondering whether your child ate lunch, enjoyed the story or finally tried the activity they were hesitant about yesterday.
              </p>
              <p>We understand why those little things matter.</p>
              <p>
                At My School ITALY, the parent experience is built around communication, continuity and trust.
              </p>
              <p>
                Because early childhood works best when the important adults surrounding a child understand one another.
              </p>
              <p className="font-bold text-msi-purple pt-2">
                YOU KNOW YOUR CHILD.<br />
                WE GET TO KNOW YOUR CHILD TOO.
              </p>
              <p>And together, we support the journey.</p>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-6">
              <UnderlineArrowLink href="/contact" text="FIND A CENTRE" color="green" />
              <UnderlineArrowLink href="/book-your-tour" text="BOOK A TOUR" color="yellow" />
            </div>
          </div>
          <div>
            <Image
              src="/images/day-care/batch-3-16.png"
              alt="Children taking part in creative learning activities at My School ITALY daycare"
              width={800}
              height={534}
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}