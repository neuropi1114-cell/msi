import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import MediaCoveragePage from '../../components/MediaCoverage/MediaCoveragePage';

export const metadata = {
  title: 'Media Coverage & Press Releases | My School ITALY',
  description: 'Explore media coverage, magazine cover stories, and press features for My School ITALY and Global CEO M.N.R. Gupta — including Prime Insights Magazine 2026, Global Times, TV5 news broadcasts, and press archives.',
  alternates: { canonical: '/media-coverage/' },
  openGraph: {
    title: 'Media Coverage & Press Releases | My School ITALY',
    description: 'Explore media coverage, magazine cover stories, and press features for My School ITALY and Global CEO M.N.R. Gupta — including Prime Insights Magazine 2026, Global Times, TV5 news broadcasts, and press archives.',
    url: '/media-coverage/',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/media-coverage/prime-insights-my-school-italy-2026.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Media Coverage & Press Releases | My School ITALY',
    description: 'Explore media coverage, magazine cover stories, and press features for My School ITALY — including Prime Insights 2026 and Global Times.',
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
