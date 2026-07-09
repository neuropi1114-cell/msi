export const metadata = {
  title: 'Baby Sensory',
  description: 'Baby Sensory at My School ITALY. Stimulating activities designed to develop your baby\'s senses through sight, sound, touch, and movement.',
  alternates: { canonical: 'https://myschoolitaly.com/baby-sensory' },
  openGraph: {
    title: 'Baby Sensory | My School ITALY',
    description: 'Baby Sensory at My School ITALY. Stimulating activities designed to develop your baby\'s senses through sight, sound, touch, and movement.',
    url: 'https://myschoolitaly.com/baby-sensory',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baby Sensory | My School ITALY',
    description: 'Baby Sensory at My School ITALY. Stimulating activities designed to develop your baby\'s senses through sight, sound, touch, and movement.',
  },
};

export default function BabySensoryLayout({ children }) {
  return children;
}
