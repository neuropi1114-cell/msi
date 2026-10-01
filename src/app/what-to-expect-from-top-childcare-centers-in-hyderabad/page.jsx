import React from 'react';
import Image from 'next/image';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, ShieldCheck, HeartHandshake, BookOpen, Utensils, Sparkles, Trees, PartyPopper, MessageCircle, Palette, Heart } from 'lucide-react';

const ROUTE_PATH = '/what-to-expect-from-top-childcare-centers-in-hyderabad';

export const metadata = {
  title: 'What to Expect from Top Childcare Centers in Hyderabad',
  description: 'Searching for top childcare centers in Hyderabad? Discover what sets the best daycare and preschool centers apart — safety, caring staff, nutrition, play, and emotional well-being.',
  alternates: { canonical: ROUTE_PATH },
  openGraph: {
    title: 'What to Expect from Top Childcare Centers in Hyderabad | My School ITALY',
    description: 'Discover what sets top childcare centers in Hyderabad apart — safety, caring staff, nutrition, play, and emotional well-being.',
    url: ROUTE_PATH,
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'article',
    article: { publishedTime: '2025-10-01', modifiedTime: '2025-10-01' },
    images: [{ url: '/images/blog/top-childcare-centers-hyderabad-1.webp', width: 1024, height: 683 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What to Expect from Top Childcare Centers in Hyderabad | My School ITALY',
    description: 'Discover what sets top childcare centers in Hyderabad apart — safety, caring staff, nutrition, play, and emotional well-being.',
  },
};

const tocItems = [
  { id: 'section-1', title: '1. A Safe and Secure Environment 🛡️' },
  { id: 'section-2', title: '2. Warm and Caring Staff 🤗' },
  { id: 'section-3', title: '3. Age-Appropriate Learning Programs 📖' },
  { id: 'section-4', title: '4. Healthy Meals and Nutrition 🥗' },
  { id: 'section-5', title: '5. Cleanliness and Hygiene 🧼' },
  { id: 'section-6', title: '6. Engaging Indoor & Outdoor Play Areas 🌳' },
  { id: 'section-7', title: '7. Cultural and Festival Celebrations 🎉' },
  { id: 'section-8', title: '8. Regular Parent Communication 📱' },
  { id: 'section-9', title: '9. Extracurricular Activities 🎨' },
  { id: 'section-10', title: '10. Focus on Emotional Well-being 💖' },
  { id: 'final-thoughts', title: 'Final Thoughts ✨' },
];

export default function TopChildcareCentersBlogPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="bg-gradient-to-b from-msi-purple to-purple-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-12">
            <Link href="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
            <p className="text-msi-orange font-bold uppercase tracking-wider mb-2">Childcare Guide</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              What to Expect from Top Childcare Centers in Hyderabad
            </h1>
            <div className="flex items-center text-white/80 mt-4 text-sm">
              <Calendar className="w-4 h-4 mr-2" /> October 2025
            </div>
          </div>
        </section>
        <div data-nav-sentinel />

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-12 max-w-4xl">
            {/* Featured Image */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-xl relative aspect-[1024/683]">
              <Image
                src="/images/blog/top-childcare-centers-hyderabad-1.webp"
                alt="Top Childcare Centers in Hyderabad - My School ITALY"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Intro */}
            <div className="prose max-w-none text-gray-700 leading-relaxed text-lg mb-8">
              <p className="text-xl font-medium text-gray-800 leading-relaxed mb-6">
                When parents search for &ldquo;<strong className="text-msi-purple">top childcare centers in Hyderabad</strong>&rdquo;, they&rsquo;re looking for far more than a safe place to leave their little ones. They want a nurturing environment where children can learn, grow, and thrive — a space that feels like a second home. ❤️
              </p>
              <p className="mb-8">
                In this blog, we&rsquo;ll explore what truly sets the best childcare centers apart and what you should expect when you find the right one for your child.
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-[#f7f9fc] border border-gray-200 rounded-2xl p-6 md:p-8 mb-12 shadow-sm">
              <h2 className="text-xl font-bold text-msi-purple mb-4 flex items-center">
                📋 Table of Contents
              </h2>
              <nav>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="text-gray-700 hover:text-msi-orange transition-colors font-medium hover:underline">
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Section 1 */}
            <article id="section-1" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4 flex items-center">
                <ShieldCheck className="w-7 h-7 text-msi-orange mr-3 flex-shrink-0" />
                1️⃣ A Safe and Secure Environment 🛡️
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The first priority of any top childcare center is safety. Parents should feel confident that their child is in a secure space at all times.
              </p>
              <div className="bg-purple-50 border-l-4 border-msi-purple p-5 rounded-r-xl mb-4">
                <p className="font-semibold text-msi-purple mb-3">Here&rsquo;s what to look for:</p>
                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                  <li><strong>CCTV monitoring 📹</strong> (for internal safety)</li>
                  <li><strong>Controlled entry and exit points 🚪</strong></li>
                  <li><strong>Childproof furniture and play areas</strong></li>
                  <li><strong>Trained staff for emergency response 🆘</strong></li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed font-medium">
                A quality childcare center will not just meet safety regulations — it will exceed them. Safety is non-negotiable.
              </p>
            </article>

            <hr className="my-8 border-gray-200" />

            {/* Section 2 */}
            <article id="section-2" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4 flex items-center">
                <HeartHandshake className="w-7 h-7 text-msi-orange mr-3 flex-shrink-0" />
                2️⃣ Warm and Caring Staff 🤗
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A childcare center is only as good as the people who run it. The best childcare centers in Hyderabad have teachers and caregivers who are:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700 mb-4">
                <li className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-center">
                  <span className="text-msi-orange font-semibold mr-2">❤️</span> Compassionate caregivers
                </li>
                <li className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-center">
                  <span className="text-msi-orange font-semibold mr-2">🕊️</span> Patient & understanding
                </li>
                <li className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-center">
                  <span className="text-msi-orange font-semibold mr-2">📚</span> Skilled in early childhood education
                </li>
                <li className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-center">
                  <span className="text-msi-orange font-semibold mr-2">🩺</span> Trained in first aid & child psychology
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Children thrive when they feel loved and valued, and a warm smile from a caregiver can make all the difference in their day.
              </p>
            </article>

            <hr className="my-8 border-gray-200" />

            {/* Section 3 */}
            <article id="section-3" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4 flex items-center">
                <BookOpen className="w-7 h-7 text-msi-orange mr-3 flex-shrink-0" />
                3️⃣ Age-Appropriate Learning Programs 📖
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The early years are the foundation for lifelong learning. Top childcare centers focus on play-based learning, blending fun with early skill development.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 font-semibold">
                You can expect programs that focus on:
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start bg-gray-50 p-4 rounded-xl">
                  <span className="mr-3 text-lg">🏃‍♀️</span>
                  <div>
                    <strong className="text-msi-purple">Motor skills:</strong> Through play, puzzles, sensory bins, and outdoor physical activities.
                  </div>
                </li>
                <li className="flex items-start bg-gray-50 p-4 rounded-xl">
                  <span className="mr-3 text-lg">🧠</span>
                  <div>
                    <strong className="text-msi-purple">Cognitive skills:</strong> Through problem-solving games, neurobics, and guided storytelling.
                  </div>
                </li>
                <li className="flex items-start bg-gray-50 p-4 rounded-xl">
                  <span className="mr-3 text-lg">🗣️</span>
                  <div>
                    <strong className="text-msi-purple">Language development:</strong> Through songs, interactive reading, and daily conversations.
                  </div>
                </li>
                <li className="flex items-start bg-gray-50 p-4 rounded-xl">
                  <span className="mr-3 text-lg">🤝</span>
                  <div>
                    <strong className="text-msi-purple">Social skills:</strong> Through group play, sharing, and collaborative learning activities.
                  </div>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Look for centers that follow globally respected methods like Montessori, Reggio Emilia, or European EYFS frameworks adapted thoughtfully to suit the Indian context.
              </p>
            </article>

            {/* Second Image Inserted */}
            <div className="my-10 rounded-2xl overflow-hidden shadow-xl relative aspect-[1024/683]">
              <Image
                src="/images/blog/top-childcare-centers-hyderabad-2.webp"
                alt="Children engaging in activities at My School ITALY Hyderabad"
                fill
                className="object-cover"
              />
            </div>

            <hr className="my-8 border-gray-200" />

            {/* Section 4 */}
            <article id="section-4" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4 flex items-center">
                <Utensils className="w-7 h-7 text-msi-orange mr-3 flex-shrink-0" />
                4️⃣ Healthy Meals and Nutrition 🥗
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nutrition plays a big role in a child&rsquo;s growth, immunity, and daily focus. The best centers either:
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside mb-4">
                <li>Provide nutritious, balanced meals planned by a dietitian 🥦</li>
                <li>Or guide parents with healthy lunchbox options and meal plans 🍎</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Hygiene in food preparation and serving is equally important — clean kitchens, safe storage, and child-friendly utensils make a huge difference.
              </p>
            </article>

            <hr className="my-8 border-gray-200" />

            {/* Section 5 */}
            <article id="section-5" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4 flex items-center">
                <Sparkles className="w-7 h-7 text-msi-orange mr-3 flex-shrink-0" />
                5️⃣ Cleanliness and Hygiene 🧼
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A clean environment isn&rsquo;t just about looks — it&rsquo;s about preventing illness and teaching kids healthy habits from day one.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="font-bold text-msi-purple mb-1">🧽 Sanitization</p>
                  <p className="text-sm text-gray-700">Regular sanitization of toys, mats, and indoor play equipment.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="font-bold text-msi-purple mb-1">✋💧 Hand Hygiene</p>
                  <p className="text-sm text-gray-700">Guided handwashing routines before meals and after playtime.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="font-bold text-msi-purple mb-1">🚻 Washrooms</p>
                  <p className="text-sm text-gray-700">Separate, child-sized washrooms maintained with high hygiene standards.</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                  <p className="font-bold text-msi-purple mb-1">🛡️ Staff Protocols</p>
                  <p className="text-sm text-gray-700">Caregivers strictly trained in health, hygiene, and cleanliness protocols.</p>
                </div>
              </div>
            </article>

            <hr className="my-8 border-gray-200" />

            {/* Section 6 */}
            <article id="section-6" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4 flex items-center">
                <Trees className="w-7 h-7 text-msi-orange mr-3 flex-shrink-0" />
                6️⃣ Engaging Indoor &amp; Outdoor Play Areas 🌳
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Play is the language of childhood. Top childcare centers in Hyderabad offer:
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside mb-4">
                <li>Safe outdoor playgrounds with grass or cushioned flooring</li>
                <li>Climate-controlled indoor play areas for rainy or hot days</li>
                <li>Age-appropriate toys, slides, balance beams, and climbing structures 🧸</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Outdoor time helps children stay active, build motor strength, and connect with nature.
              </p>
            </article>

            <hr className="my-8 border-gray-200" />

            {/* Section 7 */}
            <article id="section-7" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4 flex items-center">
                <PartyPopper className="w-7 h-7 text-msi-orange mr-3 flex-shrink-0" />
                7️⃣ Cultural and Festival Celebrations 🎉
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Hyderabad is a city rich in culture and diversity. The best childcare centers celebrate festivals like:
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-purple-100 text-msi-purple font-semibold px-4 py-2 rounded-full text-sm">🪁 Sankranti</span>
                <span className="bg-purple-100 text-msi-purple font-semibold px-4 py-2 rounded-full text-sm">🪔 Diwali</span>
                <span className="bg-purple-100 text-msi-purple font-semibold px-4 py-2 rounded-full text-sm">🌙 Eid</span>
                <span className="bg-purple-100 text-msi-purple font-semibold px-4 py-2 rounded-full text-sm">🎄 Christmas</span>
                <span className="bg-purple-100 text-msi-purple font-semibold px-4 py-2 rounded-full text-sm">🎃 Halloween</span>
              </div>
              <p className="text-gray-700 leading-relaxed">
                These celebrations teach children about traditions, unity, empathy, and respect for all cultures.
              </p>
            </article>

            <hr className="my-8 border-gray-200" />

            {/* Section 8 */}
            <article id="section-8" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4 flex items-center">
                <MessageCircle className="w-7 h-7 text-msi-orange mr-3 flex-shrink-0" />
                8️⃣ Regular Parent Communication 📱
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A great childcare center keeps parents informed through:
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside mb-4">
                <li>Daily activity & meal updates (via mobile app, WhatsApp, or email)</li>
                <li>Monthly developmental progress reports 📊</li>
                <li>Open parent-teacher meetings 🗣️</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This builds deep trust and allows working parents to be an active part of their child&rsquo;s daily journey.
              </p>
            </article>

            <hr className="my-8 border-gray-200" />

            {/* Section 9 */}
            <article id="section-9" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4 flex items-center">
                <Palette className="w-7 h-7 text-msi-orange mr-3 flex-shrink-0" />
                9️⃣ Extracurricular Activities 🎨
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beyond core early learning, many top centers offer extra developmental programs like:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-4">
                <div className="bg-orange-50 p-3 rounded-xl font-medium text-gray-700">🖌️ Art & Craft</div>
                <div className="bg-orange-50 p-3 rounded-xl font-medium text-gray-700">🎶 Music & Dance</div>
                <div className="bg-orange-50 p-3 rounded-xl font-medium text-gray-700">🧘‍♂️ Mindfulness & Gymnastics</div>
                <div className="bg-orange-50 p-3 rounded-xl font-medium text-gray-700">📚 Storytelling Sessions</div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                These help children discover their unique talents, build confidence, and express themselves creatively.
              </p>
            </article>

            <hr className="my-8 border-gray-200" />

            {/* Section 10 */}
            <article id="section-10" className="mb-12 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4 flex items-center">
                <Heart className="w-7 h-7 text-msi-orange mr-3 flex-shrink-0" />
                🔟 Focus on Emotional Well-being 💖
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The early years are when children learn to navigate feelings and friendships. The best childcare centers:
              </p>
              <ul className="space-y-2 text-gray-700 list-disc list-inside mb-4">
                <li>Encourage positive discipline and emotional self-regulation ✅</li>
                <li>Teach empathy, kindness, and sharing 💕</li>
                <li>Provide safe, quiet spaces for children to rest and reflect</li>
              </ul>
              <p className="text-gray-700 leading-relaxed font-semibold text-msi-purple">
                A happy child learns better — emotionally, socially, and academically.
              </p>
            </article>

            <hr className="my-8 border-gray-200" />

            {/* Final Thoughts */}
            <article id="final-thoughts" className="mb-12 scroll-mt-24 bg-gradient-to-br from-purple-50 to-orange-50 p-8 rounded-3xl border border-purple-100">
              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mb-4">
                Final Thoughts ✨
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                When you&rsquo;re searching for &ldquo;<strong>top childcare centers in Hyderabad</strong>&rdquo;, remember — it&rsquo;s not just about location or cost. The right center is one that combines safety, love, neuroscience-based learning, and joy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Take the time to visit centers, meet the staff, and observe the environment. Your child deserves a place where they are not just cared for, but cherished. 🌈
              </p>
              <div className="text-center pt-2">
                <Link
                  href="/contact-us"
                  className="inline-block bg-msi-orange text-white font-bold py-4 px-8 rounded-full hover:bg-msi-orange/90 transition-colors shadow-md text-lg"
                >
                  Book A School Tour Today
                </Link>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
