import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import VideoGalleryPage from '../../components/video-gallery/VideoGalleryPage';

export const metadata = {
  title: 'Video Gallery',
  description: 'Explore our collection of school videos, awards, and media coverage at My School ITALY.',
  alternates: { canonical: '/video-gallery' },
  openGraph: {
    title: 'Video Gallery | My School ITALY',
    description: 'Explore our collection of school videos, awards, and media coverage at My School ITALY.',
    url: '/video-gallery',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Video Gallery | My School ITALY',
    description: 'Explore our collection of school videos, awards, and media coverage at My School ITALY.',
  },
};

export default function VideoGalleryRoute() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <VideoGalleryPage />
      </main>
      <Footer />
    </>
  );
}
