import React from 'react';
import Image from 'next/image';
import TopBar from '../../../components/layout/TopBar';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Brain-Boosting Activities You Can Do at Home',
  description: 'As parents, you play a powerful role in shaping your child\'s early brain development. Discover neuroscience-backed activities to support your child\'s development.',
  alternates: { canonical: 'https://myschoolitaly.com/blog/2' },
  openGraph: {
    title: 'Brain-Boosting Activities You Can Do at Home | My School ITALY',
    description: 'As parents, you play a powerful role in shaping your child\'s early brain development. Discover neuroscience-backed activities to support your child\'s development.',
    url: 'https://myschoolitaly.com/blog/2',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'article',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brain-Boosting Activities You Can Do at Home | My School ITALY',
    description: 'As parents, you play a powerful role in shaping your child\'s early brain development. Discover neuroscience-backed activities to support your child\'s development.',
  },
};

export default function BlogPost2Page() {
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl  font-bold leading-tight">
              Brain-Boosting Activities You Can Do at Home
            </h1>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-12 max-w-4xl">
            <div className="mb-10 rounded-xl overflow-hidden shadow-lg relative aspect-[1024/585]">
              <Image
                src="https://myschoolitaly.com/wp-content/uploads/2025/10/freepik__a-warm-and-inviting-home-setting-where-a-toddler-a__39143-1024x585.jpeg"
                alt="Brain-boosting activities at home"
                fill
                className="object-cover"
              />
            </div>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As parents, you play a powerful role in shaping your child&rsquo;s early brain development. From just a few minutes of fun each day, you can make a huge impact on your toddler or preschooler&rsquo;s memory, creativity, emotional skills, and language.
            </p>
            <p className="text-gray-700 leading-relaxed mb-8">
              At <strong>MySchoolITALY &ndash; preschool and daycare at Hitex, Kaveri Hills, Kondapur, Avance, KPHB, Miyapur, Jubilee Hills, Madhapur, Mindspace, and Q City</strong>, we believe that learning doesn&rsquo;t stop at school&mdash;it starts at home. These <strong>neuroscience-backed activities</strong> are designed to support your child&rsquo;s development in a natural, engaging way.
            </p>

            <hr className="my-8 border-gray-200" />

            <article className="mb-10">
              <h2 className="text-2xl md:text-3xl  font-bold text-msi-purple mb-4">1. Creative Play with Open-Ended Materials</h2>
              <p className="text-gray-700 mb-2"><strong className="text-msi-orange">Why it works:</strong> Open-ended play strengthens problem-solving, imagination, and fine motor skills.</p>
              <p className="text-gray-700 mb-4"><strong className="text-msi-orange">Try this at home:</strong> Provide simple items like clay, blocks, cardboard boxes, or cloth scraps. Let your child explore and invent their own games or &ldquo;build a world&rdquo; with minimal instructions.</p>
              <blockquote className="border-l-4 border-msi-blue bg-blue-50 p-4 rounded-r-lg italic text-gray-600">
                <strong>Brain Boost:</strong> Encourages divergent thinking&mdash;a skill linked to creativity and innovation.
              </blockquote>
            </article>

            <hr className="my-8 border-gray-200" />

            <article className="mb-10">
              <h2 className="text-2xl md:text-3xl  font-bold text-msi-purple mb-4">2. Music &amp; Movement</h2>
              <p className="text-gray-700 mb-2"><strong className="text-msi-orange">Why it works:</strong> Music helps activate both sides of the brain and supports language, memory, and coordination.</p>
              <p className="text-gray-700 mb-4"><strong className="text-msi-orange">Try this at home:</strong> Dance to music, sing nursery rhymes, or make simple instruments using household items (like rice in a bottle).</p>
              <blockquote className="border-l-4 border-msi-blue bg-blue-50 p-4 rounded-r-lg italic text-gray-600">
                <strong>Brain Boost:</strong> Repetitive songs help toddlers improve auditory memory and speech development.
              </blockquote>
            </article>

            <hr className="my-8 border-gray-200" />

            <article className="mb-10">
              <h2 className="text-2xl md:text-3xl  font-bold text-msi-purple mb-4">3. Puzzle Time &amp; Sorting Games</h2>
              <p className="text-gray-700 mb-2"><strong className="text-msi-orange">Why it works:</strong> These activities support logical thinking and early math skills.</p>
              <p className="text-gray-700 mb-4"><strong className="text-msi-orange">Try this at home:</strong> Use puzzles, shape sorters, or even kitchen items (sort spoons, lids, or fruits by color or size).</p>
              <blockquote className="border-l-4 border-msi-blue bg-blue-50 p-4 rounded-r-lg italic text-gray-600">
                <strong>Brain Boost:</strong> Builds spatial awareness and strengthens the brain&rsquo;s problem-solving networks.
              </blockquote>
            </article>

            <hr className="my-8 border-gray-200" />

            <article className="mb-10">
              <h2 className="text-2xl md:text-3xl  font-bold text-msi-purple mb-4">4. Story Time with a Twist</h2>
              <p className="text-gray-700 mb-2"><strong className="text-msi-orange">Why it works:</strong> Reading boosts vocabulary and comprehension, but asking questions during storytelling takes learning even further.</p>
              <p className="text-gray-700 mb-4"><strong className="text-msi-orange">Try this at home:</strong> Read a story aloud and pause to ask questions like &ldquo;What do you think happens next?&rdquo; or &ldquo;How do you think the bunny feels?&rdquo;</p>
              <blockquote className="border-l-4 border-msi-blue bg-blue-50 p-4 rounded-r-lg italic text-gray-600">
                <strong>Brain Boost:</strong> Strengthens language pathways and emotional intelligence.
              </blockquote>
            </article>

            <hr className="my-8 border-gray-200" />

            <article className="mb-10">
              <h2 className="text-2xl md:text-3xl  font-bold text-msi-purple mb-4">5. Sensory Play</h2>
              <p className="text-gray-700 mb-2"><strong className="text-msi-orange">Why it works:</strong> Sensory activities engage different parts of the brain and support fine motor and cognitive development.</p>
              <p className="text-gray-700 mb-4"><strong className="text-msi-orange">Try this at home:</strong> Set up a sensory bin with rice, beans, sand, or water. Let your child scoop, pour, and explore textures.</p>
              <blockquote className="border-l-4 border-msi-blue bg-blue-50 p-4 rounded-r-lg italic text-gray-600">
                <strong>Brain Boost:</strong> Encourages concentration and enhances neural connections.
              </blockquote>
            </article>

            <hr className="my-8 border-gray-200" />

            <h2 className="text-2xl md:text-3xl  font-bold text-msi-purple mt-10 mb-4">Where Learning Begins: MySchoolITALY</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At <strong>MySchoolITALY</strong>, we blend play-based learning with evidence-backed methods to help your child grow smarter, happier, and more confident. Our centers across <strong>Hitex, Kaveri Hills, Kondapur, Avance, Avance 2, KPHB, Miyapur, Jubilee Hills, Madhapur, Mindspace, and Q City</strong> are thoughtfully designed to support every stage of early childhood development.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Want your child to thrive both at home and at school? Contact us today to schedule a school tour or learn more about our <strong>preschool and daycare programs</strong>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
