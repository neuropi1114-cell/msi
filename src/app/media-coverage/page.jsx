import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import MediaCoveragePage from '../../components/media-coverage/MediaCoveragePage';

export const metadata = {
  title: 'Media Coverage',
  description: 'Media coverage and press mentions for My School ITALY.',
  alternates: { canonical: 'https://myschoolitaly.com/media-coverage' },
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
