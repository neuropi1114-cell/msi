import BabySensoryContent from './BabySensoryContent';

export const metadata = {
  title: 'Baby Sensory',
  description: 'Baby Sensory at My School ITALY — specially designed sensory classes for babies ages 45 days to 18 months. Stimulate your baby\'s senses through music, massage, and creative play.',
  alternates: { canonical: '/baby-sensory' },
  openGraph: {
    title: 'Baby Sensory | My School ITALY',
    description: 'Baby Sensory at My School ITALY — specially designed sensory classes for babies ages 45 days to 18 months. Stimulate your baby\'s senses through music, massage, and creative play.',
    url: '/baby-sensory',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baby Sensory | My School ITALY',
    description: 'Baby Sensory at My School ITALY — specially designed sensory classes for babies ages 45 days to 18 months.',
  },
};

export default function BabySensoryPage() {
  return <BabySensoryContent />;
}
