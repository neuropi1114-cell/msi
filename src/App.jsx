import { lazy, Suspense } from 'react';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Hero from './components/home/Hero';

const BelieveBrilliance = lazy(() => import('./components/home/BelieveBrilliance'));
const Solutions = lazy(() => import('./components/home/Solutions'));
const CorporatePartners = lazy(() => import('./components/home/CorporatePartners'));
const AgeGroupsIntro = lazy(() => import('./components/home/AgeGroupsIntro'));
const VideoShowcase = lazy(() => import('./components/home/VideoShowcase'));
const Awards = lazy(() => import('./components/home/Awards'));
const Team = lazy(() => import('./components/home/Team'));
const FeaturedIn = lazy(() => import('./components/home/FeaturedIn'));
const Blogs = lazy(() => import('./components/home/Blogs'));
const StepIntoADay = lazy(() => import('./components/home/StepIntoADay'));
const Footer = lazy(() => import('./components/layout/Footer'));
const ContactUs = lazy(() => import('./components/home/ContactUs'));

function App() {
  return (
    <div className="font-averia text-gray-800 bg-[#f7f9fc] min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <BelieveBrilliance />
          <StepIntoADay />
        </Suspense>
        <Suspense fallback={null}>
          <Solutions />
          <CorporatePartners />
          <AgeGroupsIntro />
        </Suspense>
        <Suspense fallback={null}>
          <VideoShowcase />
          <Awards />
          <Team />
        </Suspense>
        <Suspense fallback={null}>
          <FeaturedIn />
          <Blogs />
          <ContactUs />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
