import Image from 'next/image';

const galleryImages = [
  '/images/nep/gallery-1.webp',
  '/images/nep/gallery-2.webp',
  '/images/nep/gallery-3.webp',
  '/images/nep/gallery-4.webp',
  '/images/nep/gallery-5.webp',
  '/images/nep/gallery-6.webp',
  '/images/nep/gallery-7.webp',
  '/images/nep/gallery-8.webp',
];

export default function GalleryStrip() {
  return (
    <section className="py-8" style={{ backgroundColor: '#159ED9' }}>
      <div className="container mx-auto px-4 md:px-12" style={{ maxWidth: '1500px' }}>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
          {galleryImages.map((img, i) => (
            <div key={i} className="rounded-[10px] overflow-hidden relative aspect-[4/3]">
              <Image src={img} alt={`My School ITALY campus gallery ${i + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}