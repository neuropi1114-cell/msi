import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import VideoGalleryPage from '../../components/video-gallery/VideoGalleryPage';

export const metadata = {
  title: 'Video Gallery',
  description: 'Explore our collection of school videos, awards, and media coverage at My School ITALY.',
  alternates: { canonical: 'https://myschoolitaly.com/video-gallery' },
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
