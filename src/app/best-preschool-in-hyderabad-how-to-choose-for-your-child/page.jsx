import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import JsonLd from '../../components/JsonLd';
import ContactUs from '../../components/common/ContactUs';
import { ArrowLeft, Calendar, Brain, Shield, Heart, Award, Clock, Compass } from 'lucide-react';

const CANONICAL_URL = 'https://www.myschoolitaly.com/best-preschool-in-hyderabad-how-to-choose-for-your-child/';
const PAGE_TITLE = 'Best Preschool in Hyderabad: How to Choose for Your Child | My School ITALY';
const PAGE_DESCRIPTION =
  'A parent’s guide to choosing the best preschool in Hyderabad. Compare curriculum, safety standards, neuroscience learning, and campus locations in Kondapur, Hitex, and Madhapur.';

export const metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  alternates: {
    canonical: CANONICAL_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: CANONICAL_URL,
    siteName: 'My School ITALY',
    locale: 'en_IN',
    type: 'article',
    publishedTime: '2025-05-10T09:00:00+05:30',
    modifiedTime: '2026-10-22T10:00:00+05:30',
    images: [
      {
        url: 'https://www.myschoolitaly.com/images/blog/little-boy-solving-puzzle-with-brain-background-1-scaled.jpg.bv_resized_desktop.jpg.bv.webp',
        width: 1200,
        height: 800,
        alt: 'Child engaged in neuroscience-based puzzle learning at My School ITALY Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://www.myschoolitaly.com/images/blog/little-boy-solving-puzzle-with-brain-background-1-scaled.jpg.bv_resized_desktop.jpg.bv.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Best Preschool in Hyderabad: How to Choose for Your Child',
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  image: 'https://www.myschoolitaly.com/images/blog/little-boy-solving-puzzle-with-brain-background-1-scaled.jpg.bv_resized_desktop.jpg.bv.webp',
  datePublished: '2025-05-10T09:00:00+05:30',
  dateModified: '2026-10-22T10:00:00+05:30',
  author: {
    '@type': 'Organization',
    name: 'My School ITALY',
    url: 'https://www.myschoolitaly.com/',
  },
  publisher: {
    '@type': 'Organization',
    name: 'My School ITALY',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.myschoolitaly.com/favicon.svg',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': CANONICAL_URL,
  },
};

export default function BestPreschoolHowToChoosePage() {
  return (
    <>
      <JsonLd schema={articleSchema} />
      <TopBar />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-msi-purple to-purple-800 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-12">
            <Link
              href="/blog/"
              className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Blog
            </Link>
            <p className="text-msi-orange font-bold uppercase tracking-wider mb-2">Preschool Selection Guide</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              Best Preschool in Hyderabad: How to Choose for Your Child
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 mt-4 text-sm">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> Updated October 22, 2026
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" /> 7 min read
              </span>
            </div>
          </div>
        </section>
        <div data-nav-sentinel />

        {/* Content Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-12 max-w-4xl">
            {/* Featured Image */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-xl relative aspect-[1200/800]">
              <Image
                src="/images/blog/little-boy-solving-puzzle-with-brain-background-1-scaled.jpg.bv_resized_desktop.jpg.bv.webp"
                alt="Preschooler developing analytical brain power at My School ITALY"
                fill
                priority
                className="object-cover"
              />
            </div>

            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-800 leading-relaxed mb-6">
                Every parent wants to give their child the best start in education. In a dynamic metropolitan city like Hyderabad, with dozens of early childhood options ranging from local play schools to international franchises, selecting the right environment can feel overwhelming.
              </p>

              <p className="mb-6">
                When evaluating the{' '}
                <Link
                  href="/hyderabad/"
                  className="text-msi-orange font-semibold hover:underline"
                >
                  best preschool in Hyderabad
                </Link>
                , parents must look beyond glossy brochures. The early years require an intentional blend of neuroscience-informed pedagogy, emotional warmth, uncompromised safety, and supportive caregiver partnerships.
              </p>

              {/* 5-Pillar Checklist */}
              <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                <div className="bg-[#f7f9fc] p-6 rounded-2xl border border-purple-100 shadow-sm flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl text-msi-purple">
                    <Brain className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">1. Brain-Based Pedagogy</h3>
                    <p className="text-gray-600 text-sm">Prioritize curricula informed by early neurodevelopment over rote memorization or early testing.</p>
                  </div>
                </div>

                <div className="bg-[#f7f9fc] p-6 rounded-2xl border border-purple-100 shadow-sm flex items-start space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl text-msi-orange">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">2. Rigorous Safety &amp; CCTV</h3>
                    <p className="text-gray-600 text-sm">Live camera monitoring, biometric gate security, and comprehensive background-checked staff.</p>
                  </div>
                </div>

                <div className="bg-[#f7f9fc] p-6 rounded-2xl border border-purple-100 shadow-sm flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">3. Low Child-to-Teacher Ratios</h3>
                    <p className="text-gray-600 text-sm">Individual attention ensures teachers observe and respond to unique emotional and cognitive milestones.</p>
                  </div>
                </div>

                <div className="bg-[#f7f9fc] p-6 rounded-2xl border border-purple-100 shadow-sm flex items-start space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl text-green-600">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">4. Convenient Neighborhood Access</h3>
                    <p className="text-gray-600 text-sm">Minimal traffic transit preserves child energy and simplifies morning routines for working families.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mt-10 mb-4">
                What Makes the NeuroPi Method Stand Out in Hyderabad?
              </h2>
              <p className="mb-4">
                Traditional preschools often rely on rote alphabet drills. In contrast, the European NeuroPi approach utilized across all My School ITALY centres focuses on multi-sensory stimulation, balance, motor coordination, and curiosity-driven exploration.
              </p>
              <p className="mb-6">
                Our classrooms are engineered to foster neural branching: language immersion, musical rhythm, sensory sand and water tables, and collaborative building challenges. For working parents seeking the{' '}
                <Link
                  href="/hyderabad/"
                  className="text-msi-orange font-semibold hover:underline"
                >
                  best preschool in Hyderabad
                </Link>
                , this evidence-based model provides the cognitive foundation for lifelong problem-solving and emotional resilience.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mt-10 mb-4">
                Evaluating Campuses Near You: Kondapur, Hitex, and Madhapur
              </h2>
              <p className="mb-4">
                Proximity matters tremendously in early childhood. Long commutes through Hyderabad peak-hour traffic can cause sensory fatigue for toddlers. Look for preschool chains with established facilities near major residential and commercial hubs:
              </p>
              <ul className="space-y-3 mb-6 pl-5 list-disc text-gray-700">
                <li>
                  <Link href="/kondapur/" className="text-msi-purple font-semibold hover:underline">
                    Kondapur Campus:
                  </Link>{' '}
                  Ideal for families living in Raghavendra Colony, Raja Rajeshwara Nagar, and near Botanical Garden Road.
                </li>
                <li>
                  <Link href="/hitex/" className="text-msi-purple font-semibold hover:underline">
                    Hitex Flagship Campus:
                  </Link>{' '}
                  Serving Izzathnagar, Kothaguda, Shilpa Layout, and the HiTech City exhibition corridor.
                </li>
                <li>
                  <Link href="/kavuri-hills/" className="text-msi-purple font-semibold hover:underline">
                    Kavuri Hills (Madhapur):
                  </Link>{' '}
                  Convenient for parents residing in Jubilee Hills, Durgam Cheruvu, and central Madhapur.
                </li>
                <li>
                  <Link href="/avance/" className="text-msi-purple font-semibold hover:underline">
                    Avance SEZ Campuses (H04 &amp; H06):
                  </Link>{' '}
                  On-site corporate childcare for tech employees working in Phoenix Avance SEZ.
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mt-10 mb-4">
                Questions to Ask on Your Campus Tour
              </h2>
              <p className="mb-4">
                When you schedule your physical walk-through to see why MSI is recognized as the{' '}
                <Link
                  href="/hyderabad/"
                  className="text-msi-orange font-semibold hover:underline"
                >
                  best preschool in Hyderabad
                </Link>
                , make sure to ask these vital questions:
              </p>
              <ol className="space-y-2 mb-6 pl-5 list-decimal text-gray-700">
                <li>What is your staff-to-child ratio in infant crèche and preschool batches?</li>
                <li>How are emergency protocols, first-aid, and paediatrician escalations managed?</li>
                <li>Are meals prepared fresh on-site with pediatric nutrition guidelines?</li>
                <li>What is the daily schedule balance between structured neuroscience activities and unstructured sensory play?</li>
                <li>How do educators update parents on milestones and daily routines?</li>
              </ol>

              {/* Campus Tour CTA */}
              <div className="bg-purple-900 text-white rounded-3xl p-8 my-10 text-center shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  Book a Personalized Campus Walk-Through
                </h3>
                <p className="text-purple-200 max-w-xl mx-auto mb-6 text-base">
                  See the NeuroPi difference firsthand. Tour our safe classrooms, sensory play gardens, and infant crèche facilities across Hyderabad.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/hyderabad/#enroll-hyderabad"
                    className="inline-flex items-center px-6 py-3.5 bg-msi-orange text-white font-semibold rounded-full shadow hover:bg-orange-600 transition-colors"
                  >
                    Book Campus Tour
                  </Link>
                  <Link
                    href="/hyderabad/"
                    className="inline-flex items-center px-6 py-3.5 bg-white text-msi-purple font-semibold rounded-full shadow hover:bg-gray-100 transition-colors"
                  >
                    View All Campus Locations
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>

      {/* Book Tour Form */}
      <div id="enroll">
        <ContactUs
          image="/images/whyus/Why_MSI_Enrol.png"
          title="SCHEDULE YOUR VISIT AT ANY HYDERABAD CAMPUS"
          buttonText="BOOK A CENTRE TOUR"
        />
      </div>

      <Footer />
    </>
  );
}
