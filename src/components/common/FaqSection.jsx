import Image from 'next/image';
import Faq from '../nep/Faq';

export default function FaqSection({
  subheading = "You Have Questions. We Want You to Ask Them.",
  heading = "FREQUENTLY ASKED QUESTIONS",
  imageSrc = "/images/nep/learning-neuropi.webp",
  imageAlt = "Children learning at My School ITALY",
  className = "py-[70px] bg-white relative"
}) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 md:px-12 relative z-10" style={{ maxWidth: '1240px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div style={{ marginRight: '30px' }}>
            <div className="mb-10 pr-[100px]">
              {subheading && <h3>{subheading}</h3>}
              {heading && <h2>{heading}</h2>}
            </div>
            <Faq />
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-[10px] overflow-hidden relative aspect-[4/3] w-full shadow-lg">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
