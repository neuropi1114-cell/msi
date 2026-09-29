import Link from 'next/link';
import ReadMoreButton from '../common/ReadMoreButton';
import ScrollReveal from '../common/ScrollReveal';

const pressImages = [
  "/images/featured-in/press-1.webp",
  "/images/featured-in/press-2.webp",
  "/images/featured-in/press-3.webp",
  "/images/featured-in/press-4.webp",
  "/images/featured-in/press-5.webp",
  "/images/featured-in/press-6.webp",
  "/images/featured-in/press-7.webp",
  "/images/featured-in/press-8.webp"
];

export default function FeaturedIn() {
  return (
    <section className="py-20 bg-[#351c5a] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <ScrollReveal
            direction="right"
            duration={0.6}
            className="w-full md:w-1/2"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 grid grid-cols-2 gap-4">
              {pressImages.map((img, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-2"
                >
                  <img 
                    src={img} 
                    alt={`Featured in media coverage ${index + 1}`} 
                    className="w-full h-auto max-h-16 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction="left"
            duration={0.6}
            delay={0.2}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h2 className="text-white mb-6 whitespace-nowrap">
              As Featured in
            </h2>
            <p className="text-white/90 text-lg mb-8 leading-relaxed text-justify">
              Education is a journey, not a race, and students learn best when they&apos;re having fun while they do it.
            </p>
            <ReadMoreButton
              href="/media-coverage"
              bgColor="bg-[#d16827] hover:bg-[#d16827]/90"
            />
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}

