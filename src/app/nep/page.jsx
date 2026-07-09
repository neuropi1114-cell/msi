import React from 'react';
import Image from 'next/image';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';

export const metadata = {
  title: 'The Educational Project',
  description: 'Discover My School ITALY\'s educational project — a neuroscience-based approach that cultivates emotional intelligence, resilience, and a love for learning in every child.',
  alternates: { canonical: '/nep' },
  openGraph: {
    title: 'The Educational Project | My School ITALY',
    description: 'Discover My School ITALY\'s educational project — a neuroscience-based approach that cultivates emotional intelligence, resilience, and a love for learning in every child.',
    url: '/nep',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Educational Project | My School ITALY',
    description: 'Discover My School ITALY\'s educational project — a neuroscience-based approach that cultivates emotional intelligence, resilience, and a love for learning in every child.',
  },
};

const blogPosts = [
  {
    title: 'Magical Wonderland: My School ITALY opens the Best Preschool in Manpada!',
    excerpt: 'Step into a world of enchantment and learning as My School ITALY brings its unique neuroscience-based education to Manpada.',
    date: 'July 4, 2023',
    category: 'New Preschool',
    image: '/images/nep/blog-1.webp',
    link: '/blog/',
  },
  {
    title: 'Empower Your Child\'s Future with 5 Proven Neuroscience-Backed Learning Techniques',
    excerpt: 'Enhance your child\'s learning with My School Italy\'s Neuroscience-Backed Learning Programs. Experience the difference today.',
    date: 'February 13, 2023',
    category: 'Neuroscience',
    image: '/images/nep/blog-2.webp',
    link: '/blog/',
  },
  {
    title: 'A Legacy of Love: Children\'s Day Celebrations',
    excerpt: 'Explore our enchanting Children\'s Day celebrations. Join the laughter, love, and learning in this magical journey.',
    date: 'November 15, 2023',
    category: 'festivity',
    image: '/images/nep/blog-3.webp',
    link: '/blog/',
  },
];

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

export default function EducationalProjectPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>

        {/* Section 1: Hero - About NeuroPi Children */}
        <section className="bg-msi-purple py-24 text-white flex items-end min-h-[60vh] bg-cover bg-center" style={{ backgroundImage: 'url(/images/nep/hero-classroom.webp)' }}>
          <div className="container mx-auto px-4 md:px-12">
            <div className="max-w-2xl bg-msi-purple/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl md:text-5xl  font-bold mb-6">ABOUT NEUROPI CHILDREN</h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Once upon a time, in the world of NeuroPi, every child was seen as a tiny universe - full of dreams, neurons, and sparkles of curiosity. Their laughter wasn&apos;t just joy - it was learning in motion, connecting the brain and heart in beautiful harmony. Each child here grows at their own rhythm, blooming in colours of confidence, calm, and creativity. We don&apos;t rush them toward the future - we walk beside them as they discover it. In every classroom, magic and science hold hands. Mindful play becomes their compass; empathy becomes their light. They learn to breathe before they speak, to listen before they lead, and to care before they conquer. Every giggle builds a pathway, every question unlocks a possibility, and every hug strengthens the science of love. At NeuroPi, children don&apos;t just learn - they awaken. Because here, childhood isn&apos;t a race... it&apos;s a beautiful unfolding of brilliance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Design Philosophy - Desktop */}
        <section className="py-16 bg-gradient-to-b from-msi-purple to-white hidden md:block">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
              <div className="rounded-2xl overflow-hidden relative min-h-[400px]">
                <Image
                  src="/images/nep/hero-classroom.webp"
                  alt="My School ITALY classroom designed with neuroscience principles"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="max-w-lg">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    Every My School ITALY space is designed like a gentle embrace – where design nurtures both calm and curiosity. Our classrooms are guided by neuroscience principles, shaping environments that help young minds focus, feel safe, and flourish. Soft pastel hues soothe the senses, natural light awakens energy, and open layouts invite exploration. Each corner has purpose — sensory pods for mindfulness, movement zones for balance, and creativity corners for imagination.
                  </p>
                  <div className="h-8"></div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    <strong>My School ITALY – Where design becomes a teacher :</strong><br />
                    Each space at My School ITALY nurtures the mind through beauty, balance, and belonging. We design with intention: rounded edges, cozy textures, and breathable air that mirrors nature&apos;s calm rhythm. Sound, colour, and scent are thoughtfully balanced to support emotional regulation and joyful engagement. Here the architecture becomes a teacher – guiding growth through comfort, connection, and discovery. Because the right space doesn&apos;t just hold learning, it creates it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2b: Design Philosophy - Mobile */}
        <section className="py-16 bg-[#f7f9fc] md:hidden">
          <div className="container mx-auto px-4">
            <div className="rounded-2xl overflow-hidden mb-6 relative aspect-[4/3]">
              <Image
                src="/images/nep/hero-classroom.webp"
                alt="My School ITALY classroom designed with neuroscience principles"
                fill
                className="object-cover"
              />
            </div>
            <div className="max-w-lg mx-auto">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                My School ITALY is Designed To Give Authentic Experiences To Your Child At our Kindergarten, we believe in providing an environment that is appropriate for enhancing each child&apos;s development. It has been said that play is a child&apos;s work. We create opportunities for play, discovery, and exploration, to support each child&apos;s growth and development. We believe each child is unique, and the educator&apos;s role is to scaffold a child&apos;s development at the pace suitable to them.
              </p>
              <div className="h-4"></div>
              <p className="text-gray-700 text-base leading-relaxed">
                It has been said that play is a child&apos;s work. We create opportunities for play, discovery, and exploration, to support each child&apos;s growth and development. We believe each child is unique, and the educator&apos;s role is to scaffold a child&apos;s development at the pace suitable to them.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Mission with Counters */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            {/* Arrows - Desktop */}
            <div className="hidden md:flex justify-between mb-4">
              <Image src="/images/nep/arrow1.webp" alt="" width={40} height={40} className="h-10 w-auto" />
              <Image src="/images/nep/arrow1.webp" alt="" width={40} height={40} className="h-10 w-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
              <div className="md:col-span-1">
                <p className="text-gray-700 text-lg italic"><em>Our Mission is to educate and empower the lives of</em></p>
              </div>

              <div className="md:col-span-1 text-center">
                <div className="md:hidden border-t border-gray-300 my-3"></div>
                <div className="text-5xl md:text-6xl font-bold text-msi-purple">15</div>
                <div className="text-lg text-gray-500">Million</div>
                <div className="md:hidden border-t border-gray-300 my-3"></div>
              </div>

              <div className="md:col-span-1 text-center">
                <h2 className="text-xl md:text-2xl font-bold text-msi-purple">Children, Teachers, Parents</h2>
                <div className="md:hidden border-t border-gray-300 my-3"></div>
              </div>

              <div className="md:col-span-1 text-center hidden md:block">
                <h2 className="text-6xl font-bold text-msi-purple">{')'}</h2>
              </div>

              <div className="md:col-span-1 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-msi-purple">By 2027</h2>
              </div>
            </div>

            {/* Bottom Arrow - Desktop */}
            <div className="hidden md:flex justify-center mt-4">
              <Image src="/images/nep/arrow2.webp" alt="" width={40} height={40} className="h-10 w-auto" />
            </div>
          </div>
        </section>

        {/* Section 4: Image Gallery Strip */}
        <section className="py-8 bg-[#f7f9fc]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2 md:gap-4">
              {galleryImages.map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden relative aspect-[4/3]">
                  <Image src={img} alt={`My School ITALY campus gallery ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: What is the NeuroPi Approach? */}
        <section className="py-16 bg-msi-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container mx-auto px-4 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="rounded-2xl overflow-hidden mb-6 relative aspect-[4/3]">
                  <Image
                    src="/images/nep/neuropi-approach-1.webp"
                    alt="Children at play in NeuroPi classroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                  The NeuroPi Approach is where the science of the brain meets the art of nurturing. Rooted in neuroscience, our philosophy understands how every experience — from play to emotion — shapes a child&apos;s developing brain. Every NeuroPi classroom is a living lab of growth — where teachers guide with compassion, and children learn through wonder. It&apos;s not just about early education; it&apos;s about raising emotionally intelligent, resilient, and joyful minds ready to thrive in life.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl  font-bold mb-6">WHAT IS THE NEUROPI APPROACH?</h2>
                <div className="rounded-2xl overflow-hidden mb-6 relative aspect-[4/3]">
                  <Image
                    src="/images/nep/neuropi-approach-2.webp"
                    alt="Classroom activity at My School ITALY"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-white/90 text-lg leading-relaxed space-y-4">
                  <p className="text-blue-300 italic font-semibold">We focus on five pillars of whole-child growth:</p>
                  <p><strong>Brain-Based Learning</strong> – Each activity is designed to build focus, memory, and creative thinking.</p>
                  <p><strong>Mindful Routines</strong> – Calm, predictable rhythms that strengthen emotional regulation and self-awareness.</p>
                  <p><strong>Nutrition & Movement Integration</strong> – Healthy bodies that fuel strong neural connections and cognitive clarity.</p>
                  <p><strong>Social-Emotional Learning</strong> – Building empathy, confidence, and communication from the very start.</p>
                  <p><strong>Playful Discovery</strong> – Curiosity-driven exploration that transforms play into powerful learning.</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white/20 my-12"></div>

            {/* Section 6: Learning the NeuroPi Way */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl  font-bold mb-6">LEARNING THE NEUROPI WAY</h2>
                <div className="text-white/90 text-lg leading-relaxed space-y-3">
                  <p><strong>1. Think Smart</strong> – Cognitive curiosity through discovery learning</p>
                  <p><strong>2. Feel Deeply</strong> – Emotional literacy & empathy through play</p>
                  <p><strong>3. Move Freely</strong> – Mind-body connection through rhythm & movement</p>
                  <p><strong>4. Create Boldly</strong> – Imagination through art and storytelling</p>
                  <p><strong>5. Grow Calmly</strong> – Mindfulness and self-regulation woven into each day</p>
                  <p className="text-blue-300 font-semibold italic pt-4">My School ITALY – <em>Where Little Minds Grow with Science & Soul.</em></p>
                  <p>Every child&apos;s brain is a world of wonder. Here, we blend neuroscience, play, and empathy to nurture calm, confident, and connected learners.</p>
                  <p className="text-blue-300 font-semibold italic"><em>Parent say</em></p>
                  <p className="italic">&ldquo;My child comes home peaceful, curious, and full of stories – NeuroPi feels like family. The perfect blend of heart and science.&rdquo;</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden relative aspect-[4/3]">
                <Image
                  src="/images/nep/learning-neuropi.webp"
                  alt="Children learning the NeuroPi way"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Recent News */}
        <section className="py-16 bg-white relative">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-full h-16">
              <path className="fill-msi-purple" d="M0,6V0h1000v100L0,6z"></path>
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" className="relative block w-full h-16">
              <path className="fill-msi-purple" d="M0,6V0h1000v100L0,6z"></path>
            </svg>
          </div>
          <div className="container mx-auto px-4 md:px-12 relative z-10 pt-20 pb-20">
            <h2 className="text-3xl md:text-4xl  text-msi-purple font-bold text-center mb-2">Recent News</h2>
            <p className="text-gray-500 text-lg text-center mb-12">What&apos;s Going on in our Blog?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02]">
                  <a href={post.link} className="block relative aspect-[4/3] overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </a>
                  <div className="p-6">
                    <span className="inline-block bg-msi-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{post.category}</span>
                    <h3 className="text-lg font-bold text-msi-purple mb-2">
                      <a href={post.link} className="hover:text-msi-orange transition-colors">{post.title}</a>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                    <span className="text-gray-400 text-xs">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <a
                href="/blog/"
                className="inline-block bg-msi-orange hover:bg-msi-orange/90 text-white font-bold py-3 px-8 rounded-full transition-colors"
              >
                Read More
              </a>
            </div>
          </div>
        </section>

      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
