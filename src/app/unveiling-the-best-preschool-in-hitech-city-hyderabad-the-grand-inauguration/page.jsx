import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import JsonLd from '../../components/JsonLd';
import ContactUs from '../../components/common/ContactUs';
import { ArrowLeft, Calendar, Sparkles, MapPin, Building, HeartHandshake, Clock, ShieldCheck } from 'lucide-react';

const CANONICAL_URL = 'https://www.myschoolitaly.com/unveiling-the-best-preschool-in-hitech-city-hyderabad-the-grand-inauguration/';
const PAGE_TITLE = 'Unveiling the Best Preschool in Hitech City, Hyderabad: The Grand Inauguration | My School ITALY';
const PAGE_DESCRIPTION =
  'Celebrate the grand inauguration of My School ITALY at HITEX, Hitech City Hyderabad. Discover our flagship European neuroscience preschool and baby crèche.';

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
    publishedTime: '2024-11-15T09:00:00+05:30',
    modifiedTime: '2026-10-22T10:00:00+05:30',
    images: [
      {
        url: 'https://www.myschoolitaly.com/images/hitex/HITEX_1.png',
        width: 1200,
        height: 675,
        alt: 'Grand Inauguration of My School ITALY Hitex Campus in Hitech City Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ['https://www.myschoolitaly.com/images/hitex/HITEX_1.png'],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Unveiling the Best Preschool in Hitech City, Hyderabad: The Grand Inauguration',
  description: PAGE_DESCRIPTION,
  url: CANONICAL_URL,
  image: 'https://www.myschoolitaly.com/images/hitex/HITEX_1.png',
  datePublished: '2024-11-15T09:00:00+05:30',
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

export default function UnveilingBestPreschoolHitechCityPage() {
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
            <p className="text-msi-orange font-bold uppercase tracking-wider mb-2">Campus Launch &amp; Celebration</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
              Unveiling the Best Preschool in Hitech City, Hyderabad: The Grand Inauguration
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 mt-4 text-sm">
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" /> Updated October 22, 2026
              </span>
              <span>•</span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" /> 5 min read
              </span>
            </div>
          </div>
        </section>
        <div data-nav-sentinel />

        {/* Content Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-12 max-w-4xl">
            {/* Featured Image */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-xl relative aspect-[16/9]">
              <Image
                src="/images/hitex/HITEX_1.png"
                alt="Flagship My School ITALY Hitex Campus Inauguration in Hitech City Hyderabad"
                fill
                priority
                className="object-cover"
              />
            </div>

            <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl font-medium text-gray-800 leading-relaxed mb-6">
                A major milestone in early childhood education has arrived in the cyber capital of Telangana. My School ITALY officially unveiled its state-of-the-art flagship campus located right next to the HITEX Exhibition Centre in Hitech City, Hyderabad.
              </p>

              <p className="mb-6">
                Designed to meet the burgeoning needs of IT leaders, corporate executives, and local families in Shilpa Layout, Izzathnagar, Kothaguda, and Kondapur, this campus sets a new benchmark as the{' '}
                <Link
                  href="/hyderabad/"
                  className="text-msi-orange font-semibold hover:underline"
                >
                  best preschool in Hyderabad
                </Link>
                .
              </p>

              <div className="bg-[#f7f9fc] border-l-4 border-msi-orange p-6 rounded-r-2xl my-8">
                <h3 className="text-lg font-bold text-msi-purple mb-2">Flagship Hitex Campus Features:</h3>
                <ul className="space-y-2 text-gray-700 text-base list-disc pl-5">
                  <li>Directly accessible on Hitex Road, right next to the HITEX Exhibition Centre Gate.</li>
                  <li>European NeuroPi curriculum focused on multi-sensory and cognitive development.</li>
                  <li>Specialized baby crèche from 45 days, toddler nursery, and full-day daycare.</li>
                  <li>Comprehensive campus CCTV, medical room, and biometric safety protocol.</li>
                </ul>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mt-10 mb-4">
                The Flagship Hitex Centre: European Architecture &amp; Warmth
              </h2>
              <p className="mb-4">
                Our new facility at{' '}
                <Link
                  href="/hitex/"
                  className="text-msi-purple font-semibold hover:underline"
                >
                  My School ITALY Hitex
                </Link>{' '}
                was engineered from the ground up to reflect Italian design aesthetics with child-centric safety. From rounded wood furnishings and child-height washrooms to shock-absorbing flooring in indoor gyms, every square foot is curated for safe exploration.
              </p>
              <p className="mb-6">
                Educators trained in international early childhood neurobiology guide children through phonics immersion, tactile math manipulatives, and creative arts. If you are searching for the{' '}
                <Link
                  href="/hyderabad/"
                  className="text-msi-orange font-semibold hover:underline"
                >
                  best preschool in Hyderabad
                </Link>
                , stepping into the Hitex campus makes the difference immediately apparent.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mt-10 mb-4">
                Connected Across Hyderabad’s Tech Belt
              </h2>
              <p className="mb-4">
                While the Hitex flagship serves as the crown jewel of our early learning network, My School ITALY provides seamless daycare and kindergarten across key IT and residential clusters:
              </p>
              <ul className="space-y-3 mb-6 pl-5 list-disc text-gray-700">
                <li>
                  <Link href="/hitex/" className="text-msi-purple font-semibold hover:underline">
                    HITEX Campus:
                  </Link>{' '}
                  Serving Hitech City, Shilpa Layout, Izzathnagar, and Kothaguda.
                </li>
                <li>
                  <Link href="/kondapur/" className="text-msi-purple font-semibold hover:underline">
                    Kondapur Centre:
                  </Link>{' '}
                  Minutes from Botanical Garden, Raghavendra Colony, and KIMS Hospital corridor.
                </li>
                <li>
                  <Link href="/mindspace/" className="text-msi-purple font-semibold hover:underline">
                    Mindspace Madhapur:
                  </Link>{' '}
                  Prime corporate crèche and daycare for IT professionals in Raheja Mindspace.
                </li>
                <li>
                  <Link href="/avance/" className="text-msi-purple font-semibold hover:underline">
                    Avance Tech Park (H04 &amp; H06):
                  </Link>{' '}
                  Dedicated on-campus corporate daycare inside Phoenix Avance SEZ.
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold text-msi-purple mt-10 mb-4">
                Join the MSI Family Today
              </h2>
              <p className="mb-6">
                Admissions are now open for Infant Crèche (from 45 days), Toddlers, Nursery, Junior KG, and Senior KG. Discover why families across HITEX and Madhapur rank My School ITALY as the{' '}
                <Link
                  href="/hyderabad/"
                  className="text-msi-orange font-semibold hover:underline"
                >
                  best preschool in Hyderabad
                </Link>
                .
              </p>

              {/* Call to action card */}
              <div className="bg-gradient-to-r from-purple-50 to-orange-50 border border-purple-200 rounded-3xl p-8 my-10 text-center shadow-sm">
                <h3 className="text-2xl font-bold text-msi-purple mb-3">
                  Experience the Hitex Campus
                </h3>
                <p className="text-gray-600 max-w-xl mx-auto mb-6 text-base">
                  Walk through our interactive learning studios, play gardens, and infant daycare suites. Meet our principal and admissions counsellors.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/hitex/#enroll"
                    className="inline-flex items-center px-6 py-3.5 bg-msi-orange text-white font-semibold rounded-full shadow hover:bg-orange-600 transition-colors"
                  >
                    Book Tour at Hitex
                  </Link>
                  <Link
                    href="/hyderabad/"
                    className="inline-flex items-center px-6 py-3.5 bg-msi-purple text-white font-semibold rounded-full shadow hover:bg-purple-900 transition-colors"
                  >
                    View All Hyderabad Centres
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
          title="VISIT OUR HITEX CAMPUS IN HITECH CITY"
          buttonText="BOOK A CENTRE TOUR"
        />
      </div>

      <Footer />
    </>
  );
}
