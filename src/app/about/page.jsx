import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import AboutHero from '../../components/about/AboutHero';
import AboutPremises from '../../components/about/AboutPremises';
import AboutPhilosophy from '../../components/about/AboutPhilosophy';
import AboutVideo from '../../components/about/AboutVideo';
import AboutGuidingPrinciples from '../../components/about/AboutGuidingPrinciples';
import Activities from '../../components/home/Activities';
import AboutEnrol from '../../components/about/AboutEnrol';

export const metadata = {
  title: 'About Us',
  description: 'Discover the story behind My School ITALY — a neuroscience-based preschool founded by Dr. Jessy Costantino. Learn about our mission, values, and global network.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Us | My School ITALY',
    description: 'Discover the story behind My School ITALY — a neuroscience-based preschool founded by Dr. Jessy Costantino. Learn about our mission, values, and global network.',
    url: '/about',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | My School ITALY',
    description: 'Discover the story behind My School ITALY — a neuroscience-based preschool founded by Dr. Jessy Costantino. Learn about our mission, values, and global network.',
  },
};

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <AboutHero />
        <AboutPremises />
        <AboutPhilosophy />
        <AboutVideo />
        <AboutGuidingPrinciples />
        <Activities />
        <AboutEnrol />
      </main>
      <Footer />
    </>
  );
}
