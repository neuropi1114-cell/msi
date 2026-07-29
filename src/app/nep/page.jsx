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
        <section className="relative flex items-end min-h-screen bg-cover bg-top" style={{ backgroundImage: 'url(/images/nep/hero-classroom.webp)' }}>
          <div className="container mx-auto px-4 md:px-12 w-full">
            <div className="w-full md:w-[41.831%]" style={{ backgroundColor: '#159ED9', padding: '50px', borderRadius: '10px 10px 0 0' }}>
              <h2 className="font-fredoka text-[35px] font-bold text-white mb-6">ABOUT NEUROPI CHILDREN</h2>
              <p className="font-averia text-base text-white/90 leading-relaxed">
                Once upon a time, in the world of NeuroPi, every child was seen as a tiny universe - full of dreams, neurons, and sparkles of curiosity. Their laughter wasn&apos;t just joy - it was learning in motion, connecting the brain and heart in beautiful harmony. Each child here grows at their own rhythm, blooming in colours of confidence, calm, and creativity. We don&apos;t rush them toward the future - we walk beside them as they discover it. In every classroom, magic and science hold hands. Mindful play becomes their compass; empathy becomes their light. They learn to breathe before they speak, to listen before they lead, and to care before they conquer. Every giggle builds a pathway, every question unlocks a possibility, and every hug strengthens the science of love. At NeuroPi, children don&apos;t just learn - they awaken. Because here, childhood isn&apos;t a race... it&apos;s a beautiful unfolding of brilliance.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Design Philosophy - Desktop */}
        <section className="hidden md:block" style={{ background: 'linear-gradient(180deg, #271344 50%, #FFFFFF 3%)', padding: '50px 0' }}>
          <div className="container mx-auto px-4 md:px-12" style={{ maxWidth: '1240px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
              <div className="flex items-center justify-center">
                <div className="rounded-[10px] overflow-hidden relative w-full aspect-[4/3]">
                  <Image
                    src="/images/nep/hero-classroom.webp"
                    alt="My School ITALY classroom designed with neuroscience principles"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div style={{ padding: '30px 10px 10px 70px' }}>
                <p className="font-averia text-[18px] leading-[27px] text-white text-justify mb-6" style={{ maxWidth: '84.216%' }}>
                  Every My School ITALY space is designed like a gentle embrace – where design nurtures both calm and curiosity. Our classrooms are guided by neuroscience principles, shaping environments that help young minds focus, feel safe, and flourish. Soft pastel hues soothe the senses, natural light awakens energy, and open layouts invite exploration. Each corner has purpose — sensory pods for mindfulness, movement zones for balance, and creativity corners for imagination.
                </p>
                <div style={{ height: '104px' }}></div>
                <p className="font-averia text-[18px] leading-[27px] text-[#464646] text-justify" style={{ maxWidth: '84.216%' }}>
                  <strong>My School ITALY – Where design becomes a teacher :</strong><br />
                  Each space at My School ITALY nurtures the mind through beauty, balance, and belonging. We design with intention: rounded edges, cozy textures, and breathable air that mirrors nature&apos;s calm rhythm. Sound, colour, and scent are thoughtfully balanced to support emotional regulation and joyful engagement. Here the architecture becomes a teacher – guiding growth through comfort, connection, and discovery. Because the right space doesn&apos;t just hold learning, it creates it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2b: Design Philosophy - Mobile */}
        <section className="md:hidden" style={{ backgroundColor: '#271344', padding: '50px 0' }}>
          <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
            <div className="grid grid-cols-1 gap-0">
              <div className="flex items-center justify-center">
                <div className="rounded-[10px] overflow-hidden relative w-full aspect-[4/3]">
                  <Image
                    src="/images/nep/hero-classroom.webp"
                    alt="My School ITALY classroom designed with neuroscience principles"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div style={{ padding: '30px 10px 10px 10px' }}>
                <p className="font-averia text-[15px] leading-[27px] text-white text-justify mb-6 w-full">
                  My School ITALY is Designed To Give Authentic Experiences To Your Child At our Kindergarten, we believe in providing an environment that is appropriate for enhancing each child&apos;s development. It has been said that play is a child&apos;s work. We create opportunities for play, discovery, and exploration, to support each child&apos;s growth and development. We believe each child is unique, and the educator&apos;s role is to scaffold a child&apos;s development at the pace suitable to them.
                </p>
                <div style={{ height: '0px' }}></div>
                <p className="font-averia text-[15px] leading-[27px] text-white text-justify w-full">
                  It has been said that play is a child&apos;s work. We create opportunities for play, discovery, and exploration, to support each child&apos;s growth and development. We believe each child is unique, and the educator&apos;s role is to scaffold a child&apos;s development at the pace suitable to them.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Mission with Counters */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-12" style={{ maxWidth: '1240px' }}>
            <div className="hidden md:flex justify-between mb-4">
              <Image src="/images/nep/arrow1.webp" alt="" width={40} height={40} className="h-10 w-auto" />
              <Image src="/images/nep/arrow1.webp" alt="" width={40} height={40} className="h-10 w-auto" />
            </div>

            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-[23.033%] flex items-center justify-center md:justify-start mb-6 md:mb-0">
                <p className="font-averia text-[25px] leading-[27px] text-[#464646] italic text-center md:text-left md:max-w-[91.11%]"><em>Our Mission is to educate and empower the lives of</em></p>
              </div>

              <div className="w-full md:w-[21.048%] flex items-center justify-center mb-6 md:mb-0" style={{ margin: '0 16px' }}>
                <div className="w-full">
                  <div className="md:hidden border-t border-gray-300 my-3"></div>
                  <div style={{ backgroundColor: '#E1872B', padding: '19px', borderRadius: '40px', textAlign: 'center' }}>
                    <div className="font-fredoka text-[100px] font-semibold text-white leading-none">15</div>
                    <div className="font-fredoka text-[30px] font-semibold text-white">Million</div>
                  </div>
                  <div className="md:hidden border-t border-gray-300 my-3"></div>
                </div>
              </div>

              <div className="w-full md:w-[15.889%] flex items-center justify-center mb-6 md:mb-0">
                <h2 className="font-fredoka text-[30px] font-bold leading-[36px] text-[#464646] text-center md:text-end md:max-w-[89%]">Children, Teachers, Parents</h2>
                <div className="md:hidden border-t border-gray-300 my-3 w-full"></div>
              </div>

              <div className="hidden md:flex md:w-[14.59%] items-center justify-center">
                <h2 className="font-playfair text-[160px] font-normal leading-[57px] text-[#464646] text-end md:max-w-[89%]">{')'}</h2>
              </div>

              <div className="w-full md:w-[25.41%] flex items-center justify-center mb-6 md:mb-0">
                <h2 className="font-fredoka text-[60px] font-semibold text-[#464646] text-center md:max-w-[74.602%]">By 2027</h2>
              </div>
            </div>

            <div className="hidden md:flex justify-center mt-4">
              <Image src="/images/nep/arrow2.webp" alt="" width={40} height={40} className="h-10 w-auto" />
            </div>
          </div>
        </section>

        {/* Section 4: Image Gallery Strip */}
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

        {/* Section 5: What is the NeuroPi Approach? */}
        <section className="py-[70px] bg-white relative">
          <div className="container mx-auto px-4 md:px-12 relative z-10" style={{ maxWidth: '1240px', minHeight: '524px' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="flex flex-col items-end">
                <div className="rounded-[10px] overflow-hidden mb-6 relative aspect-[4/3] w-full">
                  <Image
                    src="/images/nep/neuropi-approach-1.webp"
                    alt="Children at play in NeuroPi classroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:max-w-[83%]" style={{ backgroundColor: '#2CB3E9', padding: '30px', borderRadius: '12px' }}>
                  <p className="font-averia text-[18px] text-white text-justify leading-relaxed">
                    The NeuroPi Approach is where the science of the brain meets the art of nurturing. Rooted in neuroscience, our philosophy understands how every experience — from play to emotion — shapes a child&apos;s developing brain. Every NeuroPi classroom is a living lab of growth — where teachers guide with compassion, and children learn through wonder. It&apos;s not just about early education; it&apos;s about raising emotionally intelligent, resilient, and joyful minds ready to thrive in life.
                  </p>
                </div>
              </div>
              <div>
                <div className="mb-10" style={{ marginTop: '60px', paddingRight: '200px' }}>
                  <h2 className="font-fredoka text-[45px] font-bold uppercase leading-[45px] text-[#E1872B]">WHAT IS THE NEUROPI APPROACH?</h2>
                </div>
                <div className="rounded-[10px] overflow-hidden mb-6 relative aspect-[4/3] w-full">
                  <Image
                    src="/images/nep/neuropi-approach-2.webp"
                    alt="Classroom activity at My School ITALY"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="w-full md:max-w-[88%]">
                  <p className="font-averia text-[18px] text-[#464646] text-justify leading-relaxed mb-4">
                    <span style={{ color: '#1891cd' }}><em><strong>We focus on five pillars of whole-child growth:</strong></em></span>
                  </p>
                  <div className="font-averia text-[18px] text-[#464646] text-justify leading-relaxed space-y-2">
                    <p><strong>Brain-Based Learning</strong> &ndash; Each activity is designed to build focus, memory, and creative thinking.</p>
                    <p><strong>Mindful Routines</strong> &ndash; Calm, predictable rhythms that strengthen emotional regulation and self-awareness.</p>
                    <p><strong>Nutrition &amp; Movement Integration</strong> &ndash; Healthy bodies that fuel strong neural connections and cognitive clarity.</p>
                    <p><strong>Social-Emotional Learning</strong> &ndash; Building empathy, confidence, and communication from the very start.</p>
                    <p><strong>Playful Discovery</strong> &ndash; Curiosity-driven exploration that transforms play into powerful learning.</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: '50px' }}></div>
            <div className="border-t border-[#D8D8D8] my-4"></div>

            {/* Section 6: Learning the NeuroPi Way */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
              <div style={{ marginRight: '30px' }}>
                <div className="mb-10" style={{ marginTop: '60px', paddingRight: '100px' }}>
                  <h2 className="font-fredoka text-[45px] font-bold uppercase leading-[45px] text-[#E1872B]">LEARNING THE NEUROPI WAY</h2>
                </div>
                <div className="font-averia text-[18px] text-[#464646] text-justify leading-relaxed space-y-3">
                  <p><strong>1. Think Smart</strong> &ndash; Cognitive curiosity through discovery learning</p>
                  <p><strong>2. Feel Deeply</strong> &ndash; Emotional literacy &amp; empathy through play</p>
                  <p><strong>3. Move Freely</strong> &ndash; Mind-body connection through rhythm &amp; movement</p>
                  <p><strong>4. Create Boldly</strong> &ndash; Imagination through art and storytelling</p>
                  <p><strong>5. Grow Calmly</strong> &ndash; Mindfulness and self-regulation woven into each day</p>
                  <p style={{ color: '#1891cd' }} className="font-semibold italic pt-4">My School ITALY &ndash; <em>Where Little Minds Grow with Science &amp; Soul.</em></p>
                  <p>Every child&apos;s brain is a world of wonder. Here, we blend neuroscience, play, and empathy to nurture calm, confident, and connected learners.</p>
                  <p style={{ color: '#1891cd' }} className="font-semibold italic"><em>Parent say</em></p>
                  <p className="italic">&ldquo;My child comes home peaceful, curious, and full of stories &ndash; NeuroPi feels like family. The perfect blend of heart and science.&rdquo;</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-[10px] overflow-hidden relative aspect-[4/3] w-full">
                  <Image
                    src="/images/nep/learning-neuropi.webp"
                    alt="Children learning the NeuroPi way"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Recent News */}
        <section className="relative" style={{ backgroundColor: '#FCF9F4', padding: '130px 0 60px 0' }}>
          <div className="container mx-auto px-4 md:px-12 relative z-10" style={{ maxWidth: '1200px', minHeight: '400px' }}>
            <h2 className="font-fredoka text-[45px] font-bold uppercase text-center text-[#E1872B] mb-2">Recent News</h2>
            <p className="font-averia text-[18px] text-[#464646] text-center mb-12">What&apos;s Going on in our Blog?</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ gridColumnGap: '30px', gridRowGap: '35px' }}>
              {blogPosts.map((post, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform hover:scale-[1.02]">
                  <a href={post.link} className="block relative aspect-[4/3] overflow-hidden">
                      <Image src={post.image} alt={post.title} fill className="object-cover" />
                  </a>
                  <div className="p-6">
                    <span className="inline-block font-averia text-[12px] font-medium text-white px-3 py-1 rounded-full mb-3" style={{ backgroundColor: '#E1872B', margin: '20px' }}>{post.category}</span>
                    <h3 className="font-fredoka text-[21px] font-bold uppercase leading-[30px] text-[#464646] mb-2 px-6">
                      <a href={post.link} className="hover:text-[#159ED9] transition-colors">{post.title}</a>
                    </h3>
                    <p className="font-averia text-[18px] text-[#464646] mb-4 px-6">{post.excerpt}</p>
                    <span className="font-averia text-[15px] text-[#464646] px-6 pb-6 block">{post.date}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-[30px]">
              <a
                href="/blog/"
                className="inline-block font-prompt text-[18px] font-normal text-white transition-colors"
                style={{ backgroundColor: '#E1872B', padding: '20px 30px', borderRadius: '12px 0 12px 0' }}
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
