import { Averia_Libre } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import JsonLd from '../components/JsonLd';

const averiaLibre = Averia_Libre({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-averia',
});

export const metadata = {
  metadataBase: new URL('https://myschoolitaly.com'),
  title: {
    default: 'My School ITALY | Neuroscience-Based Preschool & Daycare',
    template: '%s | My School ITALY',
  },
  description: 'My School ITALY is a neuroscience-based preschool & daycare for ages 45 days to 7 years. Our NeuroPi method nurtures young minds through play-based learning and emotional growth.',
  keywords: ['preschool', 'daycare', 'neuroscience', 'childcare', 'early childhood education', 'My School Italy', 'NeuroPi', 'play-based learning', 'brain development'],
  robots: 'index, follow',
  openGraph: {
    title: 'My School ITALY | Neuroscience-Based Preschool & Daycare',
    description: 'Rooted in the science of early brain development, our preschool chain blends neuroscience, play-based learning, and emotional intelligence.',
    type: 'website',
    url: 'https://myschoolitaly.com',
    siteName: 'My School ITALY',
    locale: 'en_US',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My School ITALY | Neuroscience-Based Preschool & Daycare',
    description: 'Rooted in the science of early brain development, our preschool chain blends neuroscience, play-based learning, and emotional intelligence.',
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: 'https://myschoolitaly.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={averiaLibre.variable}>
      <head>
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="preconnect" href="https://myschoolitaly.com" />
        <link rel="preload" as="image" href="/images/hero/Slider_1-scaled.jpg.bv.webp" fetchPriority="high" />
      </head>
      <body className="text-gray-800 bg-[#f7f9fc] min-h-screen" style={{ fontFamily: 'var(--font-averia)' }}>
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
