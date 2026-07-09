'use client';

const images = [
  { src: '/images/franchise/carousel-06.png', alt: 'Preschool classroom' },
  { src: '/images/franchise/carousel-41.png', alt: 'Play area' },
  { src: '/images/franchise/carousel-61.png', alt: 'Activity corner' },
  { src: '/images/franchise/carousel-60.png', alt: 'Learning space' },
  { src: '/images/franchise/carousel-59.png', alt: 'Classroom setup' },
  { src: '/images/franchise/carousel-58.png', alt: 'Indoor play zone' },
  { src: '/images/franchise/carousel-56.png', alt: 'Preschool interior' },
  { src: '/images/franchise/carousel-55.png', alt: 'Children area' },
  { src: '/images/franchise/carousel-53.png', alt: 'Creative corner' },
  { src: '/images/franchise/carousel-51.png', alt: 'School facility' },
  { src: '/images/franchise/carousel-57.png', alt: 'Classroom decor' },
  { src: '/images/franchise/carousel-37.png', alt: 'Learning environment' },
  { src: '/images/franchise/carousel-36.png', alt: 'Preschool room' },
  { src: '/images/franchise/carousel-18.png', alt: 'Activity room' },
];

export default function ImageCarousel() {
  const duplicated = [...images, ...images];

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="w-full flex overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap items-center min-w-full shrink-0">
          {duplicated.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="inline-block mx-2 shrink-0 w-64 h-44 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="animate-marquee flex whitespace-nowrap items-center min-w-full shrink-0" aria-hidden="true">
          {duplicated.map((img, i) => (
            <div
              key={`${img.src}-dup-${i}`}
              className="inline-block mx-2 shrink-0 w-64 h-44 rounded-xl overflow-hidden shadow-md"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
