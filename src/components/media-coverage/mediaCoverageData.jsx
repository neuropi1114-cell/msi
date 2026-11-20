import React from 'react';
import { ExternalLink, Share2 } from 'lucide-react';

export function getPlatformIcon(platform) {
  switch (platform) {
    case 'linkedin':
      return <img src="/linkedin.svg" alt="LinkedIn" className="w-3.5 h-3.5 inline-block" />;
    case 'facebook':
      return <img src="/facebook-icon.svg" alt="Facebook" className="w-3.5 h-3.5 inline-block" />;
    case 'instagram':
      return <img src="/instagram-icon.svg" alt="Instagram" className="w-3.5 h-3.5 inline-block" />;
    case 'x':
      return (
        <svg className="w-3.5 h-3.5 fill-current inline-block" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'share':
      return <Share2 className="w-3.5 h-3.5" />;
    default:
      return <ExternalLink className="w-3.5 h-3.5" />;
  }
}

export function PartnershipFlags() {
  return (
    <span className="inline-flex items-center gap-1.5 ml-2 align-middle not-italic">
      <span
        title="India"
        className="inline-flex items-center justify-center w-6 h-4 rounded-xs overflow-hidden shadow-xs border border-gray-200"
      >
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <path fill="#f93" d="M0 0h640v160H0z" />
          <path fill="#fff" d="M0 160h640v160H0z" />
          <path fill="#128807" d="M0 320h640v160H0z" />
          <circle cx="320" cy="240" r="56" fill="none" stroke="#008" strokeWidth="8" />
          <circle cx="320" cy="240" r="14" fill="#008" />
        </svg>
      </span>
      <span
        title="European Union"
        className="inline-flex items-center justify-center w-6 h-4 rounded-xs overflow-hidden shadow-xs border border-blue-900"
      >
        <svg viewBox="0 0 640 480" className="w-full h-full">
          <rect width="640" height="480" fill="#039" />
          <g fill="#fc0" transform="translate(320 240) scale(40)">
            <circle cx="0" cy="-3" r="0.4" />
            <circle cx="1.5" cy="-2.6" r="0.4" />
            <circle cx="2.6" cy="-1.5" r="0.4" />
            <circle cx="3" cy="0" r="0.4" />
            <circle cx="2.6" cy="1.5" r="0.4" />
            <circle cx="1.5" cy="2.6" r="0.4" />
            <circle cx="0" cy="3" r="0.4" />
            <circle cx="-1.5" cy="2.6" r="0.4" />
            <circle cx="-2.6" cy="1.5" r="0.4" />
            <circle cx="-3" cy="0" r="0.4" />
            <circle cx="-2.6" cy="-1.5" r="0.4" />
            <circle cx="-1.5" cy="-2.6" r="0.4" />
          </g>
        </svg>
      </span>
    </span>
  );
}

export function getVideoUrl(video) {
  if (video.platform === 'youtube') {
    return `https://www.youtube.com/embed/${video.videoId}`;
  }
  return `https://player.vimeo.com/video/${video.videoId}`;
}

export const filterTabs = [
  { id: 'all', label: 'All Milestones' },
  { id: 'neuropi', label: '🧠 NeuroPi Features' },
  { id: '2026', label: '2026 Features' },
  { id: '2025', label: '2025 Milestones' },
  { id: '2023', label: '2023 Events' },
  { id: '2019', label: '2019 European Awards' },
  { id: 'clippings', label: 'Print Press Archive (21)' },
];

export const timelineEvents = [
  {
    id: 'meridian-curriculum-innovation-award-2026',
    year: '2026',
    date: '2026',
    category: 'Curriculum & Innovation Award',
    source: 'Excellence in Early Education Awards 2026 (Meridian)',
    title: 'Excellence in Early Education Award 2026 — Innovation for Preschool Curriculum',
    subtitle: 'Founder & CEO Dr. Aperna Volluru & My School ITALY Hitex Felicitated Across Top Preschool Brands',
    summary:
      'My School ITALY founder Dr. Aperna Volluru and the My School ITALY Hitex campus received the prestigious "Innovation for Preschool Curriculum" accolade at the Excellence in Early Education Awards 2026, competing alongside top preschool brands and being celebrated for pioneering neuroscience-backed early learning models.',
    highlights: [
      'Honored with the "Innovation for Preschool Curriculum" award at the Excellence in Early Education Awards 2026',
      'Recognized in competition with all top preschool brands across the region',
      'Presented by Meridian Schools in celebration of outstanding contribution towards nurturing young minds',
      'Validation of The NeuroPi Way — combining European pedagogical standards with cognitive early neuroscience',
    ],
    image: '/images/media-coverage/innovation-in-curriculum-award.jpeg',
    imageAspect: 'aspect-[16/9]',
    imageObjectPosition: 'object-contain bg-white',
    links: [
      {
        label: 'Explore Our Award-Winning Curriculum',
        url: '/neuropi-way/',
        primary: true,
      },
      {
        label: 'Visit MSI Hitex Campus',
        url: '/hitex/',
        primary: false,
      },
    ],
    badgeColor: 'bg-[#ABCD52]/25 text-[#3f630e] border-[#ABCD52]/40',
    type: 'award',
    isNeuroPi: true,
  },
  {
    id: 'prime-insights-hdi-2026',
    year: '2026',
    date: 'August 2026',
    category: 'NeuroPi & Thought Leadership',
    source: 'Prime Insights Magazine',
    title: 'NeuroPi: Designing the Future Through Human Development Intelligence (HDI)',
    subtitle: 'Transforming Early Childhood Infrastructure & 21st Century Brain Architecture',
    summary:
      'An in-depth thought leadership column spotlighting the NeuroPi methodology and examining how societal investment must shift from traditional physical infrastructure to human development intelligence, emphasizing the foundational early years where 90% of brain architecture is formed.',
    highlights: [
      'Spotlight on the NeuroPi methodology: combining neuroscience with compassionate, whole-child early education',
      'Explores the science of Human Development Intelligence (HDI) in preschool and daycare ecosystems',
      'Neural connection building: how early sensory and cognitive environments sculpt lifelong adaptability',
      'Published across Prime Insights digital magazine, LinkedIn, Instagram, X (Twitter), and Facebook',
    ],
    image: '/images/media-coverage/prime-insights-cover-aug-2026.jpg',
    imageAspect: 'aspect-[3/4]',
    imageObjectPosition: 'object-contain bg-slate-900',
    links: [
      {
        label: 'Read Full Editorial on Prime Insights',
        url: 'https://primeinsights.in/the-future-through-human-development-intelligence/',
        primary: true,
      },
    ],
    socialLinks: [
      {
        label: 'LinkedIn Post 1',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7486394196187303936',
        platform: 'linkedin',
      },
      {
        label: 'LinkedIn Post 2',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7486394258686496768',
        platform: 'linkedin',
      },
      {
        label: 'LinkedIn Post 3',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7486394552988119040',
        platform: 'linkedin',
      },
      {
        label: 'Facebook Feature',
        url: 'https://www.facebook.com/Primeinsightsmagazine/posts/pfbid02YqEo5PbrMjkEn27jvpmMoA4Nv1Cyo98xU3d9aWGjGQoCURXrPayCmFtt2RovoUo1l',
        platform: 'facebook',
      },
      {
        label: 'Instagram Reel',
        url: 'https://www.instagram.com/reel/DbLOrfPNGWD/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        platform: 'instagram',
      },
    ],
    badgeColor: 'bg-[#159ED9]/10 text-[#159ED9] border-[#159ED9]/30',
    type: 'article',
    isNeuroPi: true,
  },
  {
    id: 'prime-insights-cover-2026',
    year: '2026',
    date: 'August 2026',
    category: 'Magazine Cover Story',
    source: 'Prime Insights Business Magazine',
    title: 'My School ITALY: The Visionary Passionate Leader with Ethics & Integrity',
    subtitle: 'Featured in "The 10 Most Caring Pre-Schools Cultivating Future-Ready Kids – 2026"',
    summary:
      'Prime Insights Magazine’s August 2026 edition spotlights My School ITALY and Global CEO M.N.R. Gupta, recognizing transformative leadership bridging infrastructure, global networks, and early childhood neuroscience.',
    highlights: [
      'Built 300+ Corporate Collaborations with global brands (IBM, Amazon, Hyundai Mobis, OPTUM, ICICI Bank)',
      'Achieved 500% revenue growth for My School ITALY within a single year through strategic execution',
      'Recognized among "The 10 Most Caring Pre-Schools Cultivating Future-Ready Kids — 2026"',
      'Spotlight on NeuroPi neuroscience-based pedagogy & European early years framework',
    ],
    image: '/images/media-coverage/prime-insights-my-school-italy-2026.webp',
    imageAspect: 'aspect-[16/10]',
    imageObjectPosition: 'object-contain bg-slate-950',
    secondaryImage: '/images/media-coverage/prime-insights-cover-aug-2026.jpg',
    flipbookInfo: {
      edition: 'August 2026 Edition',
      coverUrl: 'https://primeinsights.in/prime-insights-issue-august-2026/#1',
      storyUrl: 'https://primeinsights.in/prime-insights-issue-august-2026/#10',
      coverLabel: 'Page #1 Cover',
      storyLabel: 'Page #10 Story',
    },
    links: [
      {
        label: 'Magazine Cover (#1)',
        url: 'https://primeinsights.in/prime-insights-issue-august-2026/#1',
        primary: true,
      },
      {
        label: 'Feature Story Page (#10)',
        url: 'https://primeinsights.in/prime-insights-issue-august-2026/#10',
        primary: true,
      },
      {
        label: 'Read Full Web Article',
        url: 'https://primeinsights.in/my-school-italy/',
        primary: false,
      },
    ],
    socialLinks: [
      {
        label: 'LinkedIn Announcement (Post 1)',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7486376633071718401',
        platform: 'linkedin',
      },
      {
        label: 'LinkedIn Feature (Post 2)',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7486376656614346752',
        platform: 'linkedin',
      },
      {
        label: 'LinkedIn Spotlight (Post 3)',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7486377111046283264',
        platform: 'linkedin',
      },
      {
        label: 'Facebook Feature',
        url: 'https://www.facebook.com/Primeinsightsmagazine/posts/pfbid0r3xzJ1YyjKLSKG7YUE4YMdCj56Y9fPZi8Pi9b3MWUJPsK8VL7caBJJkqawEoMhSEl',
        platform: 'facebook',
      },
      {
        label: 'Instagram Reel',
        url: 'https://www.instagram.com/reel/DbLGc7Ctvah/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        platform: 'instagram',
      },
    ],
    badgeColor: 'bg-[#d16827]/10 text-[#d16827] border-[#d16827]/30',
    type: 'article',
    isNeuroPi: true,
  },
  {
    id: 'siliconindia-west-hyderabad-2026',
    year: '2026',
    date: 'March 2026',
    category: 'Top 10 Ranking & Feature',
    source: 'SiliconIndia Magazine',
    title: 'MY SCHOOL ITALY: Leading the Quiet Revolution in Early Education',
    subtitle: 'Ranked in "Top 10 Preschools From West Hyderabad — 2026" (Pages 22 & 28)',
    summary:
      'SiliconIndia Magazine’s March 2026 edition recognized My School ITALY among the Top 10 Preschools in West Hyderabad, featuring Founder & CEO Dr. Aperna Volluru in an exclusive profile highlighting how the school re-architects early childhood through science-led environments and the NeuroPi platform.',
    highlights: [
      'Ranked among the Top 10 Preschools From West Hyderabad — 2026 (Pages 22 & 23)',
      'Featured in-depth profile: "Leading the Quiet Revolution in Early Education" (Page 28)',
      'Spotlight on Dr. Aperna Volluru, Founder & CEO, and 30+ years of neuroscience & human development expertise',
      'Special section on "Building NeuroPi — A Unified Intelligence Backbone" for whole-child cognitive growth',
      'Serving major tech corridors across HITEC City, Madhapur, Gachibowli, Financial District, and Kondapur',
    ],
    image: '/images/media-coverage/siliconindia-march-2026-page-28.jpg',
    imageAspect: 'aspect-[3/4]',
    imageObjectPosition: 'object-contain bg-white',
    secondaryImage: '/images/media-coverage/siliconindia-march-2026-page-22.jpg',
    flipbookInfo: {
      edition: 'March 2026 Edition',
      coverUrl: 'https://www.siliconindia.com/digital-magazine/preschools-from-west-hyderabad-march-2026/#page=22',
      storyUrl: 'https://www.siliconindia.com/digital-magazine/preschools-from-west-hyderabad-march-2026/#page=28',
      coverLabel: 'Page #22 Top 10 Listing',
      storyLabel: 'Page #28 Feature Story',
    },
    links: [
      {
        label: 'View Feature Story (Page #28)',
        url: 'https://www.siliconindia.com/digital-magazine/preschools-from-west-hyderabad-march-2026/#page=28',
        primary: true,
      },
      {
        label: 'Top 10 Listing (Page #22)',
        url: 'https://www.siliconindia.com/digital-magazine/preschools-from-west-hyderabad-march-2026/#page=22',
        primary: true,
      },
      {
        label: 'Magazine Cover (#1)',
        url: 'https://www.siliconindia.com/digital-magazine/preschools-from-west-hyderabad-march-2026/#page=1',
        primary: false,
      },
      {
        label: 'Text-Only Archive',
        url: 'https://www.siliconindia.com/digital-magazine/preschools-from-west-hyderabad-march-2026/index.php?page=28',
        primary: false,
      },
    ],
    badgeColor: 'bg-[#ABCD52]/20 text-[#3f630e] border-[#ABCD52]/40',
    type: 'article',
    isNeuroPi: true,
  },
  {
    id: 'cohort-conclave-2025',
    year: '2025',
    date: 'October 22, 2025',
    category: 'Leadership Award & Conclave',
    source: 'Global Times TV & MediaBoss Network',
    title: 'MNR Gupta Honored with Global Entrepreneur Prestigious Leadership Award',
    subtitle: 'COHORT Foundation Conclave Held at T-Hub 2, Hyderabad',
    summary:
      'At the prestigious Leadership Conclave organized by the COHORT Foundation at T-Hub 2 (the world’s largest innovation hub), Global CEO M.N.R. Gupta was felicitated with the Global Entrepreneur Leadership Award for decades of exemplary contributions across education, infrastructure, and child welfare.',
    highlights: [
      'Held at T-Hub 2 Hyderabad, bringing together top MNC executives and national innovators',
      'Awarded for pioneering vision in early years education and global entrepreneurship',
      'Celebrated for fostering ethics, youth mentorship, and international collaborations',
    ],
    image: '/images/media-coverage/global-times-cohort-award-2025.jpeg',
    imageAspect: 'aspect-[16/10]',
    imageObjectPosition: 'object-contain bg-slate-900/5',
    links: [
      {
        label: 'Read Global Times Feature',
        url: 'https://www.globaltimes.tv/mnr-gupta-honored-with-global-entrepreneur-prestigious-leadership-award-at-cohort-foundation-conclave/',
        primary: true,
      },
      {
        label: 'Global Times October 2025 Edition',
        url: 'https://www.globaltimes.tv/2025/10/',
        primary: false,
      },
    ],
    badgeColor: 'bg-[#FFC000]/20 text-[#855300] border-[#FFC000]/50',
    type: 'award',
  },
  {
    id: 'ap-cm-delegation-2025',
    year: '2025',
    date: 'March 24, 2025',
    category: 'State Partnership & Leadership',
    source: 'AP CM Office, Amaravati',
    title: 'Empowering the Next Generation: MY School ITALY as Knowledge Partner for Andhra Pradesh',
    showPartnershipFlags: true,
    subtitle: 'MY School ITALY delegation interacting with Chief Minister Shri N. Chandrababu Naidu.',
    summary:
      'Our leadership team delivered a comprehensive proposal presentation to the Hon’ble Chief Minister of Andhra Pradesh, Shri N. Chandrababu Naidu, at the AP Chief Minister’s Office in Amaravati on March 24, 2025.',
    highlights: [
      'High-level leadership delegation at the AP Chief Minister’s Office in Amaravati on March 24, 2025',
      'Comprehensive proposal presentation reviewed directly with Hon’ble Chief Minister Shri N. Chandrababu Naidu',
      'Strategic roadmap as Knowledge Partner for Andhra Pradesh in early childhood neuroscience and European pedagogical standards',
      'Statewide transformation of early childhood learning, crèche infrastructure, and whole-child development',
    ],
    image: '/images/media-coverage/cm-chandrababu-naidu-delegation.jpg',
    imageAspect: 'aspect-square',
    imageObjectPosition: 'object-contain bg-[#f9f7f2]',
    links: [
      {
        label: 'Explore The NeuroPi Way',
        url: '/neuropi-way/',
        primary: true,
      },
      {
        label: 'Corporate & State Solutions',
        url: '/corporatechildcare/',
        primary: false,
      },
    ],
    badgeColor: 'bg-[#FFC000]/25 text-[#734700] border-[#FFC000]/50',
    type: 'partnership',
    isNeuroPi: true,
  },
  {
    id: 'independence-day-2023',
    year: '2023',
    date: 'August 2023',
    category: 'School Broadcast',
    source: 'YouTube Broadcast',
    title: 'Independence Day Celebrations at My School ITALY',
    subtitle: 'Nurturing Global Citizens Rooted in Cultural Pride',
    summary:
      'Glimpses of vibrant patriotic celebrations, creative performances, and cultural showcases presented by young learners and teachers across My School ITALY campuses.',
    highlights: [
      'Interactive student performances and tricolor cultural pageants',
      'Fostering unity, creative expression, and early community values',
    ],
    video: {
      platform: 'youtube',
      videoId: '9AMASl4HNtw',
    },
    links: [
      {
        label: 'Watch on YouTube',
        url: 'https://www.youtube.com/watch?v=9AMASl4HNtw',
        primary: true,
      },
    ],
    badgeColor: 'bg-[#ABCD52]/20 text-[#496d13] border-[#ABCD52]/40',
    type: 'video',
  },
  {
    id: 'womens-day-2023',
    year: '2023',
    date: 'March 2023',
    category: 'Community Event',
    source: 'YouTube Broadcast',
    title: "Women's Day Celebrations — Mom & Kids Fashion Show",
    subtitle: 'Honoring Motherhood, Confidence, and Parent Partnership',
    summary:
      'A heartwarming celebration of mothers and children walking the runway together, emphasizing joyful bonding, self-esteem, and collaborative parent engagement.',
    highlights: [
      'Empowering mother-child runway presentation and fun learning games',
      'Showcasing the tight-knit family culture at My School ITALY',
    ],
    video: {
      platform: 'youtube',
      videoId: 'WiavfXZ60LE',
    },
    links: [
      {
        label: 'Watch on YouTube',
        url: 'https://www.youtube.com/watch?v=WiavfXZ60LE',
        primary: true,
      },
    ],
    badgeColor: 'bg-[#351c5a]/10 text-[#351c5a] border-[#351c5a]/25',
    type: 'video',
  },
  {
    id: 'european-business-awards-2019',
    year: '2019',
    date: 'December 2019',
    category: 'European Business Awards & Global Honor',
    source: 'European Business Awards, Warsaw, Poland',
    title: 'European Business Awards 2019 — National Winner of ITALY (Poland)',
    subtitle: 'My School ITALY Crowned National Winner of Italy at the European Business Awards Gala in Warsaw, Poland',
    summary:
      'At the prestigious European Business Awards in Warsaw, Poland, My School ITALY was crowned the National Winner of Italy. Founder Dr. Aperna Volluru and Global CEO M.N.R. Gupta represented the organization, receiving the official National Winner Gold Medal and certificate celebrating European excellence in early childhood education.',
    highlights: [
      'Crowned National Winner of ITALY at the European Business Awards 2019 grand gala in Warsaw, Poland',
      'Global CEO M.N.R. Gupta presented with the official National Winner Gold Medal and honors citation',
      'Founder & CEO Dr. Aperna Volluru honored on the European stage alongside top international enterprise leaders',
      'Pedagogical showcase presented directly to European business dignitaries and international juries',
    ],
    image: '/images/media-coverage/eba-2019-national-winner-medal-box.jpeg',
    imageAspect: 'aspect-[3/2]',
    imageObjectPosition: 'object-contain bg-slate-900/5',
    gallery: [
      {
        src: '/images/media-coverage/eba-2019-national-winner-medal-box.jpeg',
        caption: 'Global CEO M.N.R. Gupta with the European Business Awards National Winner Gold Medal',
      },
      {
        src: '/images/media-coverage/european-business-awards-poland-2019.jpeg',
        caption: 'Founder & CEO Dr. Aperna Volluru at the European Business Awards Backdrop in Warsaw, Poland',
      },
      {
        src: '/images/media-coverage/eba-2019-national-winner-italy-certificate.jpeg',
        caption: 'Global CEO M.N.R. Gupta presenting My School ITALY curriculum showcase to European dignitary',
      },
    ],
    links: [
      {
        label: 'Watch EBA Feature',
        url: 'https://www.youtube.com/watch?v=yF_yosN1t0s',
        primary: true,
      },
      {
        label: 'Explore Our European Roots',
        url: '/about/',
        primary: false,
      },
    ],
    badgeColor: 'bg-[#003399]/15 text-[#003399] border-[#003399]/30',
    type: 'award',
  },
];

export const pressImages = [
  { src: '/images/media-coverage/press-01.jpeg', alt: 'Press Clipping 1 - My School ITALY in the news' },
  { src: '/images/media-coverage/press-02.jpeg', alt: 'Press Clipping 2 - My School ITALY feature' },
  { src: '/images/media-coverage/press-03.jpeg', alt: 'Press Clipping 3 - Education feature' },
  { src: '/images/media-coverage/press-04.jpeg', alt: 'Press Clipping 4 - Early learning milestone' },
  { src: '/images/media-coverage/press-05.jpeg', alt: 'Press Clipping 5 - Campus launch news' },
  { src: '/images/media-coverage/press-06.jpeg', alt: 'Press Clipping 6 - Preschool award ceremony' },
  { src: '/images/media-coverage/press-07.jpeg', alt: 'Press Clipping 7 - Regional newspaper mention' },
  { src: '/images/media-coverage/press-08.jpeg', alt: 'Press Clipping 8 - Neuroscience curriculum coverage' },
  { src: '/images/media-coverage/press-09.jpeg', alt: 'Press Clipping 9 - Daycare excellence news' },
  { src: '/images/media-coverage/press-10.jpeg', alt: 'Press Clipping 10 - Child development seminar' },
  { src: '/images/media-coverage/press-11.jpeg', alt: 'Press Clipping 11 - National press feature' },
  { src: '/images/media-coverage/press-12.jpeg', alt: 'Press Clipping 12 - Educational leadership recognition' },
  { src: '/images/media-coverage/press-13.jpeg', alt: 'Press Clipping 13 - Preschool innovation spotlight' },
  { src: '/images/media-coverage/press-14.jpeg', alt: 'Press Clipping 14 - Community event coverage' },
  { src: '/images/media-coverage/press-15.jpeg', alt: 'Press Clipping 15 - Teacher excellence celebration' },
  { src: '/images/media-coverage/press-16.jpeg', alt: 'Press Clipping 16 - European preschool milestone' },
  { src: '/images/media-coverage/press-17.jpeg', alt: 'Press Clipping 17 - Corporate childcare feature' },
  { src: '/images/media-coverage/press-18.jpeg', alt: 'Press Clipping 18 - Parenting & child wellbeing' },
  { src: '/images/media-coverage/press-19.jpeg', alt: 'Press Clipping 19 - International conference coverage' },
  { src: '/images/media-coverage/press-20.jpeg', alt: 'Press Clipping 20 - Education leadership awards' },
  { src: '/images/media-coverage/press-21.jpeg', alt: 'Press Clipping 21 - My School ITALY news archive' },
];
