import React from 'react';
import TopBar from '../../../components/layout/TopBar';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const galleryImages = [
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121617034_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_120904015_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_122744197_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121624289_HDR-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_122510808_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_120428418_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_141547607_HDR-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121122998_HDR-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121347700_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121201830_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121154972_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_120615434_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121020545_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121011373_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_122051184_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121350119_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_120844696_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_120730817_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121802996_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_120652208_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121754362_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_141448545_HDR-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_120338890_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121429576_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_141544996_HDR-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121115232_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_121510512_HDR_AE-scaled.jpg',
  'https://myschoolitaly.com/wp-content/uploads/2025/11/IMG_20251031_122319798_HDR_AE-scaled.jpg',
];

export const metadata = {
  title: 'Spooktacular Halloween Celebration at MySchoolITALY @ Hitex',
  description: 'This October, MySchoolITALY at Hitex turned into a festive wonderland of pumpkins, costumes, and spooky surprises as our students and teachers came together to celebrate Halloween 2025.',
  alternates: { canonical: 'https://myschoolitaly.com/blog/1' },
};

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function BlogPostPage() {
  const shuffledImages = shuffleArray(galleryImages);
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="bg-gradient-to-b from-msi-purple to-purple-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-12">
            <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
            </Link>
            <p className="text-msi-orange font-bold uppercase tracking-wider mb-2">Blog</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-schoolbell font-bold leading-tight">
              Spooktacular Halloween Celebration at MySchoolITALY @ Hitex!
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-12 max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              This October, MySchoolITALY at Hitex turned into a festive wonderland of pumpkins, costumes, and spooky surprises as our students and teachers came together to celebrate Halloween 2025 with fun and excitement!
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The school was beautifully decorated with cobwebs, ghosts, and glowing pumpkins — creating the perfect Halloween atmosphere. Students arrived dressed as witches, wizards, superheroes, and all kinds of creative characters, filling the campus with color and laughter.
            </p>
            <h2 className="text-2xl md:text-3xl font-schoolbell font-bold text-msi-purple mt-10 mb-6">Event Highlights</h2>
            <ol className="space-y-4 text-gray-700 list-decimal list-inside">
              <li>
                <strong className="text-msi-orange">Costume Parade:</strong> Students showcased their creativity and confidence, walking the ramp in their imaginative Halloween outfits.
              </li>
              <li>
                <strong className="text-msi-orange">Trick-or-Treat Adventure:</strong> Little ones had a great time collecting treats and sharing sweets with friends.
              </li>
              <li>
                <strong className="text-msi-orange">Games & Crafts:</strong> Engaging Halloween-themed activities and craft stations brought out the artistic side of every child.
              </li>
              <li>
                <strong className="text-msi-orange">Music & Dance:</strong> The celebration wrapped up with a lively dance party where everyone joined in the fun!
              </li>
            </ol>
            <p className="text-gray-700 leading-relaxed mt-6 mb-6">
              A big thank you to our dedicated teachers, supportive parents, and enthusiastic students for making this Halloween celebration truly special. Your spirit and creativity made the day unforgettable!
            </p>
            <p className="text-lg font-schoolbell text-msi-blue font-bold mt-10 mb-8">
              Check out the photos below to relive the spooky, joyful, and fun-filled moments from the Halloween Celebration at My School ITALY, Hitex!
            </p>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4 md:px-12 max-w-6xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
              {shuffledImages.map((src, index) => (
                <a
                  key={index}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  <img
                    src={src}
                    alt={`Halloween celebration photo ${index + 1}`}
                    className="w-full h-40 md:h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
