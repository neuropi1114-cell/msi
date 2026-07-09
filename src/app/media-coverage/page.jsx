import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import MediaCoveragePage from '../../components/media-coverage/MediaCoveragePage';

export const metadata = {
  title: 'Media Coverage',
  description: 'Media coverage and press mentions for My School ITALY.',
  alternates: { canonical: 'https://myschoolitaly.com/media-coverage' },
  openGraph: {
    title: 'Media Coverage | My School ITALY',
    description: 'Media coverage and press mentions for My School ITALY.',
    url: 'https://myschoolitaly.com/media-coverage',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Coverage | My School ITALY',
    description: 'Media coverage and press mentions for My School ITALY.',
  },
};

export default function MediaCoverageRoute() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <MediaCoveragePage />
      </main>
      <Footer />
    </>
  );
}
