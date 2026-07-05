import './globals.css';

export const metadata = {
  metadataBase: new URL('https://myschoolitaly.com'),
  title: 'My School ITALY | Neuroscience-Based Preschool & Daycare',
  description: 'My School ITALY: Neuroscience-based preschool & childcare for ages 45 days to 7 years. Our NeuroPi Study Technology nurtures young minds through play-based learning, emotional intelligence, and brain development.',
  robots: 'index, follow',
  openGraph: {
    title: 'My School ITALY | Neuroscience-Based Preschool & Daycare',
    description: 'Rooted in the science of early brain development, our preschool chain blends neuroscience, play-based learning, and emotional intelligence.',
    type: 'website',
    url: 'https://myschoolitaly.com',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My School ITALY | Neuroscience-Based Preschool & Daycare',
    description: 'Rooted in the science of early brain development, our preschool chain blends neuroscience, play-based learning, and emotional intelligence.',
  },
  icons: {
    icon: '/vite.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="preconnect" href="https://myschoolitaly.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/images/hero/Slider_1-scaled.jpg.bv.webp" fetchPriority="high" />
      </head>
      <body className="font-averia text-gray-800 bg-[#f7f9fc] min-h-screen">
        {children}
      </body>
    </html>
  );
}
