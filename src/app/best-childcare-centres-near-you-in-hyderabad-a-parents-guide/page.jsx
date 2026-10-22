import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import JsonLd from '../../components/JsonLd';
import ContactUs from '../../components/common/ContactUs';
import { ArrowLeft, Calendar, ShieldCheck, HeartHandshake, MapPin, Sparkles, BookOpen, Clock, CheckCircle2 } from 'lucide-react';

const CANONICAL_URL = 'https://www.myschoolitaly.com/best-childcare-centres-near-you-in-hyderabad-a-parents-guide/';
const PAGE_TITLE = 'Best Childcare Centres Near You in Hyderabad: A Parent’s Guide | My School ITALY';
const PAGE_DESCRIPTION =
  'Looking for the best childcare centres near you in Hyderabad? Discover safety protocols, caregiver ratios, neuroscience learning, and campus hubs in Hitex, Kondapur, and Kukatpally.';

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
    publishedTime: '2025-06-15T09:00:00+05:30',
    modifiedTime: '2026-10-22T10:00:00+05:30',
    images: [
      {
        url: 'https://www.myschoolitaly.com/images/blog/top-childcare-centers-hyderabad-2.webp',
        width: 1024,
        height: 683,
        alt: 'Best Childcare Centres Near You in Hyderabad - Parent Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://www.myschoolitaly.com/images/blog/top-childcare-centers-hyderabad-2.webp'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Best Childcare Centres Near You in Hyderabad: A Parent’s Guide',
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  image: 'https://www.myschoolitaly.com/images/blog/top-childcare-centers-hyderabad-2.webp',
  datePublished: '2025-06-15T09:00:00+05:30',
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

export default function BestChildcareCentresGuidePage() {
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
            <p className="text-msi-orange font-bold uppercase tracking-wider mb-2">Parenting &amp; Early Years Guide</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              Best Childcare Centres Near You in Hyderabad: A Parent&rsquo;s Guide
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 mt-4 text-sm">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> Updated October 22, 2026
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" /> 6 min read
              </span>
            </div>
          </div>
        </section>
        <div data-nav-sentinel />

        {/* Content Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-12 max-w-4xl">
            {/* Featured Image */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-xl relative aspect-[1024/683]">
              <Image
                src="/images/blog/top-childcare-centers-hyderabad-2.webp"
                alt="Parents evaluating best childcare and preschool centres across Hyderabad"
                fill
                priority
                className="object-cover"
              />
            </div>

            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-800 leading-relaxed mb-6">
                Finding the right daycare and early learning campus is one of the most consequential decisions working parents face. With Hyderabad rapidly expanding as India&rsquo;s premier tech hub, parents in IT corridors need safe, dependable, and neuroscience-aligned early care within minutes of their commute.
              </p>

              <p className="mb-6">
                If you are actively seeking the{' '}
                <Link
                  href="/hyderabad/"
                  className="text-msi-orange font-semibold hover:underline"
                >
                  best preschool in Hyderabad
                </Link>
                , understanding what separates a basic day-sitting facility from an internationally accredited early learning centre will give your family complete peace of mind.
              </p>

              <div className="bg-[#f7f9fc] border-l-4 border-msi-purple p-6 rounded-r-2xl my-8">
                <h3 className="text-lg font-bold text-msi-purple mb-2">Key Highlights for Hyderabad Parents:</h3>
                <ul className="space-y-2 text-gray-700 text-base list-disc pl-5">
                  <li>Age-appropriate infant crèche facilities starting from 45 days up to 7 years.</li>
                  <li>Multi-point CCTV monitoring, biometric access, and paediatrician-vetted hygiene.</li>
                  <li>Locations strategically positioned across HITEX, Kondapur, Kukatpally, Madhapur, and Gachibowli.</li>
                  <li>Neuroscience-backed stimulation through our proprietary NeuroPi method.</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mt-10 mb-4">
                1. Location &amp; Commute: Proximity to Work and Home
              </h2>
              <p className="mb-4">
                In a city with bustling tech corridors like HITEC City, Financial District, and Madhapur, your child&rsquo;s centre should ideally be located close to your workplace or residence to minimize travel fatigue.
              </p>
              <p className="mb-6">
                For parents residing in western Hyderabad, choosing our flagship{' '}
                <Link href="/hitex/" className="text-msi-purple font-semibold hover:underline">
                  My School ITALY Hitex Campus
                </Link>{' '}
                or our dedicated facility in{' '}
                <Link href="/kondapur/" className="text-msi-purple font-semibold hover:underline">
                  Kondapur
                </Link>{' '}
                ensures minimal transit time and seamless drop-off and pick-up routines. Families situated near NH-65 can also access our spacious{' '}
                <Link href="/kukatpally/" className="text-msi-purple font-semibold hover:underline">
                  Kukatpally centre
                </Link>
                , while tech professionals working in corporate campuses can rely on our daycare hubs at{' '}
                <Link href="/mindspace/" className="text-msi-purple font-semibold hover:underline">
                  Mindspace Madhapur
                </Link>{' '}
                and{' '}
                <Link href="/qcity/" className="text-msi-purple font-semibold hover:underline">
                  Q-City Gachibowli
                </Link>.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mt-10 mb-4">
                2. European Neuroscience Curriculum vs. Rote Learning
              </h2>
              <p className="mb-4">
                During the first 2,000 days of a child&rsquo;s life, the brain forms more than 1 million neural connections every second. That is why parents looking for the{' '}
                <Link
                  href="/hyderabad/"
                  className="text-msi-orange font-semibold hover:underline"
                >
                  best preschool in Hyderabad
                </Link>{' '}
                consistently choose programs that nurture holistic cognitive, emotional, and sensory milestones rather than dry screen-based worksheets.
              </p>
              <p className="mb-6">
                At My School ITALY, our NeuroPi methodology draws upon European early-education standards. Children engage in tactile sensory labs, bilingual language exposure, motor coordination exercises, and collaborative social play that build lasting executive function.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mt-10 mb-4">
                3. Safety, Caregiver Ratios, and Medical Vigilance
              </h2>
              <p className="mb-4">
                High caregiver-to-child ratios are non-negotiable in early childhood care. At My School ITALY campuses:
              </p>
              <ul className="space-y-3 mb-6 pl-5 list-disc text-gray-700">
                <li><strong>Infant Crèche (45 days – 18 months):</strong> 1:2 to 1:3 ratio with certified nurses and trained caregivers.</li>
                <li><strong>Toddlers &amp; Preschoolers:</strong> Dedicated early childhood educators supported by attentive assistants.</li>
                <li><strong>Hygiene Protocols:</strong> Daily sanitization of sensory materials, touchpoints, and diaper-changing stations.</li>
                <li><strong>Nutritious Meal Plans:</strong> Freshly prepared, paediatrician-approved meals and snacks customized for growing toddlers.</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mt-10 mb-4">
                4. Comprehensive Network Across Hyderabad
              </h2>
              <p className="mb-6">
                Whether you work in HITEC City, Gachibowli, or Madhapur, exploring our complete directory helps you locate the{' '}
                <Link
                  href="/hyderabad/"
                  className="text-msi-orange font-semibold hover:underline"
                >
                  best preschool in Hyderabad
                </Link>{' '}
                nearest to your daily route. Our 11 centres feature purpose-built indoor play areas, child-safe rubberized flooring, and vibrant learning zones designed exclusively for little explorers.
              </p>

              {/* Call to action card */}
              <div className="bg-gradient-to-r from-purple-50 to-orange-50 border border-purple-200 rounded-3xl p-8 my-10 text-center shadow-sm">
                <h3 className="text-2xl font-bold text-msi-purple mb-3">
                  Visit a My School ITALY Campus in Hyderabad
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto mb-6 text-base">
                  Experience our warm classrooms, meet our certified educators, and discover why thousands of Hyderabad parents trust MSI for infant crèche and preschool education.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/hyderabad/#enroll-hyderabad"
                    className="inline-flex items-center px-6 py-3.5 bg-msi-orange text-white font-semibold rounded-full shadow hover:bg-orange-600 transition-colors"
                  >
                    Schedule a Campus Visit
                  </Link>
                  <Link
                    href="/hyderabad/"
                    className="inline-flex items-center px-6 py-3.5 bg-msi-purple text-white font-semibold rounded-full shadow hover:bg-purple-900 transition-colors"
                  >
                    Explore All 11 Centres
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
          title="SCHEDULE A TOUR AT YOUR NEAREST HYDERABAD CENTRE"
          buttonText="BOOK A CENTRE TOUR"
        />
      </div>

      <Footer />
    </>
  );
}
