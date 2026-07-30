import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { ArrowRight, Calendar } from 'lucide-react';

export const metadata = {
  title: 'Blog',
  description: 'Explore the My School ITALY blog — insights on neuroscience-based early childhood education, parenting tips, school activities, and child development milestones.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | My School ITALY',
    description: 'Explore the My School ITALY blog — insights on neuroscience-based early childhood education, parenting tips, school activities, and child development milestones.',
    url: '/blog',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | My School ITALY',
    description: 'Explore the My School ITALY blog — insights on neuroscience-based early childhood education, parenting tips, and more.',
  },
};

const posts = [
  {
    id: 1,
    title: 'Spooktacular Halloween Celebration at MySchoolITALY @ Hitex',
    excerpt: 'This October, MySchoolITALY at Hitex turned into a festive wonderland of pumpkins, costumes, and spooky surprises as our students and teachers came together to celebrate Halloween 2025.',
    date: 'October 2025',
    slug: '/blog/1',
    image: '/images/blog/halloween/halloween-01.jpg',
  },
  {
    id: 2,
    title: 'Brain-Boosting Activities You Can Do at Home',
    excerpt: 'As parents, you play a powerful role in shaping your child\'s early brain development. Discover neuroscience-backed activities to support your child\'s development at home.',
    date: '2025',
    slug: '/blog/2',
    image: '/images/blog/brain-boosting-activities-featured.jpg',
  },
  {
    id: 3,
    title: 'What is Neuroscience-Based Early Childhood Education',
    excerpt: 'Early childhood is a critical period for brain development. Discover how neuroscience-based education uses brain science to design teaching methods for young children.',
    date: 'September 19, 2025',
    slug: '/blog/3',
    image: '/images/blog/neuroscience-education-featured.jpg',
  },
];

export default function BlogPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="bg-msi-purple py-20 text-white">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Blog</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Insights, updates, and stories from the My School ITALY community
            </p>
          </div>
        </section>
        <div data-nav-sentinel />

        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-12 max-w-5xl">
            <div className="grid gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={post.slug}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col md:flex-row"
                >
                  <div className="relative w-full md:w-72 h-48 md:h-auto flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center flex-1">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-msi-purple group-hover:text-msi-orange transition-colors mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center text-msi-orange font-semibold text-sm">
                      Read More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
