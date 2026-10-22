'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ExternalLink,
  Calendar,
  Award,
  BookOpen,
  Video,
  Newspaper,
  Sparkles,
  Share2,
  X,
  Maximize2,
  CheckCircle2,
  Brain,
} from 'lucide-react';

function getPlatformIcon(platform) {
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

function PartnershipFlags() {
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
          <rect width="640" height="480" fill="#003399" />
          <g fill="#ffcc00">
            <circle cx="320" cy="90" r="14" />
            <circle cx="320" cy="390" r="14" />
            <circle cx="170" cy="240" r="14" />
            <circle cx="470" cy="240" r="14" />
            <circle cx="214" cy="134" r="14" />
            <circle cx="426" cy="134" r="14" />
            <circle cx="214" cy="346" r="14" />
            <circle cx="426" cy="346" r="14" />
            <circle cx="134" cy="214" r="14" />
            <circle cx="134" cy="266" r="14" />
            <circle cx="506" cy="214" r="14" />
            <circle cx="506" cy="266" r="14" />
          </g>
        </svg>
      </span>
    </span>
  );
}

const timelineEvents = [
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
    imageAspect: 'aspect-[16/10] md:aspect-[16/10]',
    imageObjectPosition: 'object-cover object-center',
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
    imageAspect: 'aspect-square md:aspect-[4/3] lg:aspect-square',
    imageObjectPosition: 'object-cover object-top',
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
    imageAspect: 'aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3]',
    imageObjectPosition: 'object-cover object-top',
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

const pressImages = [
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

function getVideoUrl(video) {
  if (video.platform === 'youtube') {
    return `https://www.youtube.com/embed/${video.videoId}`;
  }
  return `https://player.vimeo.com/video/${video.videoId}`;
}

export default function MediaCoveragePage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'All Milestones' },
    { id: 'neuropi', label: '🧠 NeuroPi Features' },
    { id: '2026', label: '2026 Features' },
    { id: '2025', label: '2025 Milestones' },
    { id: '2023', label: '2023 Events' },
    { id: '2019', label: '2019 European Awards' },
    { id: 'clippings', label: 'Print Press Archive (21)' },
  ];

  const filteredTimeline = useMemo(() => {
    if (activeFilter === 'all') return timelineEvents;
    if (activeFilter === 'neuropi') return timelineEvents.filter((item) => item.isNeuroPi);
    if (activeFilter === '2026') return timelineEvents.filter((item) => item.year === '2026');
    if (activeFilter === '2025') return timelineEvents.filter((item) => item.year === '2025');
    if (activeFilter === '2023') return timelineEvents.filter((item) => item.year === '2023');
    if (activeFilter === '2019') return timelineEvents.filter((item) => item.year === '2019');
    return [];
  }, [activeFilter]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#271344] via-[#351c5a] to-[#1e0f33] py-20 md:py-28 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-msi-orange rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-msi-blue rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-wide uppercase text-msi-yellow mb-6"
          >
            <Sparkles className="w-4 h-4 text-msi-yellow" />
            Press &amp; Media Recognition
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 font-fredoka leading-tight"
          >
            Media Coverage &amp; Timeline
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/85 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Explore our journey in the global spotlight — from national business magazine cover stories to international leadership conclaves, broadcasts, and print press features.
          </motion.p>

          {/* Quick Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/15"
          >
            <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl md:text-3xl font-extrabold text-msi-yellow font-fredoka">August 2026</div>
              <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">Latest Cover Story</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl md:text-3xl font-extrabold text-white font-fredoka">300+</div>
              <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">Corporate Partners</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl md:text-3xl font-extrabold text-msi-blue font-fredoka">100+</div>
              <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">Global Awards</div>
            </div>
            <div className="p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <div className="text-2xl md:text-3xl font-extrabold text-msi-orange font-fredoka">21+</div>
              <div className="text-xs text-white/70 mt-1 uppercase tracking-wider">Press Clippings</div>
            </div>
          </motion.div>
        </div>
      </section>

      <div data-nav-sentinel />

      {/* Filter / Timeline Tabs */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-4">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 cursor-pointer ${activeFilter === tab.id
                    ? 'bg-msi-purple text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Chronological Timeline Section */}
      {activeFilter !== 'clippings' && (
        <section className="py-16 md:py-24 bg-[#fbfbfd]">
          <div className="container mx-auto px-4 md:px-12 max-w-6xl">
            <div className="text-center mb-16">
              <span className="text-xs md:text-sm uppercase tracking-wider text-msi-orange font-bold font-fredoka">
                Milestones &amp; Media Releases
              </span>
              <h2 className="text-3xl md:text-4xl text-msi-purple font-bold mt-2 font-fredoka">
                Chronological Media Timeline
              </h2>
              <div className="w-16 h-1 bg-msi-orange mx-auto rounded-full mt-4" />
            </div>

            {/* Vertical Timeline Container */}
            <div className="relative">
              {/* Central Line for desktop */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />

              <div className="space-y-12 lg:space-y-16">
                {filteredTimeline.map((item, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 35 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, delay: 0.05 }}
                      className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                      {/* Timeline Year Marker on Central Line (Desktop) */}
                      <div className="hidden lg:flex absolute left-1/2 top-8 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white border-4 border-msi-purple shadow-md flex items-center justify-center font-bold text-xs text-msi-purple">
                          {item.year}
                        </div>
                      </div>

                      {/* Content Card */}
                      <div
                        className={`bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 ${isEven ? 'lg:order-1 lg:mr-8' : 'lg:order-2 lg:ml-8'
                          }`}
                      >
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${item.badgeColor}`}
                            >
                              {item.category}
                            </span>
                            <span className="text-xs text-gray-500 font-medium flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-gray-400" />
                              {item.date}
                            </span>
                          </div>
                          <span className="text-xs font-semibold text-gray-600 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                            {item.source}
                          </span>
                        </div>

                        {/* Title & Subtitle */}
                        <h3 className="text-xl md:text-2xl font-bold text-msi-purple leading-snug mb-2 font-fredoka flex flex-wrap items-center">
                          <span>{item.title}</span>
                          {item.showPartnershipFlags && <PartnershipFlags />}
                        </h3>
                        {item.subtitle && (
                          <p className="text-xs md:text-sm font-semibold text-msi-orange mb-4">
                            {item.subtitle}
                          </p>
                        )}

                        {/* Summary */}
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-5">
                          {item.summary}
                        </p>

                        {/* Key Highlights */}
                        {item.highlights && item.highlights.length > 0 && (
                          <div className="mb-6 space-y-2 bg-gray-50/70 p-4 rounded-2xl border border-gray-100">
                            <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                              Key Highlights
                            </div>
                            <ul className="space-y-1.5">
                              {item.highlights.map((h, i) => (
                                <li key={i} className="text-xs md:text-sm text-gray-700 flex items-start gap-2">
                                  <CheckCircle2 className="w-4 h-4 text-msi-green shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Interactive Link Buttons */}
                        {item.links && item.links.length > 0 && (
                          <div className="flex flex-wrap gap-2.5 pt-2 border-t border-gray-100">
                            {item.links.map((link, lIdx) => (
                              <a
                                key={lIdx}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all duration-200 ${link.primary
                                    ? 'bg-msi-purple text-white hover:bg-msi-purple-deep shadow-sm hover:shadow'
                                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                  }`}
                              >
                                {link.icon === 'share' ? (
                                  <Share2 className="w-3.5 h-3.5" />
                                ) : (
                                  <ExternalLink className="w-3.5 h-3.5" />
                                )}
                                <span>{link.label}</span>
                              </a>
                            ))}
                          </div>
                        )}

                        {/* Social Media & Broadcasts Section */}
                        {item.socialLinks && item.socialLinks.length > 0 && (
                          <div className="mt-4 pt-3.5 border-t border-gray-100">
                            <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5 flex items-center gap-1.5">
                              <Share2 className="w-3 h-3 text-msi-orange" />
                              Official Social Media Broadcasts &amp; Coverage
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {item.socialLinks.map((sLink, sIdx) => (
                                <a
                                  key={sIdx}
                                  href={sLink.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 transition-colors shadow-2xs hover:border-gray-300"
                                >
                                  {getPlatformIcon(sLink.platform)}
                                  <span>{sLink.label}</span>
                                </a>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Internal Navigation Link */}
                        {item.isNeuroPi && (
                          <div className="mt-4 pt-3 border-t border-dashed border-gray-100 flex items-center justify-between">
                            <Link
                              href="/neuropi-way/"
                              className="inline-flex items-center gap-1 text-xs font-bold text-msi-purple hover:text-msi-orange transition"
                            >
                              <Brain className="w-3.5 h-3.5 text-msi-orange" />
                              Explore The NeuroPi Way Curriculum &amp; Pedagogy →
                            </Link>
                          </div>
                        )}
                      </div>

                      {/* Media / Visual Side */}
                      <div
                        className={`${isEven ? 'lg:order-2 lg:ml-8' : 'lg:order-1 lg:mr-8'
                          }`}
                      >
                        {item.video ? (
                          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-black">
                            <iframe
                              src={getVideoUrl(item.video)}
                              title={item.title}
                              className="absolute inset-0 w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              loading="lazy"
                            />
                          </div>
                        ) : item.image ? (
                          <div className="relative group rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-white">
                            <div className={`relative overflow-hidden ${item.imageAspect || 'aspect-[4/3] md:aspect-[16/10]'}`}>
                              <img
                                src={item.image}
                                alt={item.title}
                                className={`w-full h-full ${item.imageObjectPosition || 'object-cover'} group-hover:scale-105 transition-transform duration-500 cursor-pointer`}
                                loading="lazy"
                                onClick={() => setSelectedImage({ src: item.image, alt: item.title })}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                {item.links && item.links[0] && (
                                  <a
                                    href={item.links[0].url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-xs text-white font-semibold bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/30 hover:bg-white/30"
                                  >
                                    <ExternalLink className="w-3.5 h-3.5" />
                                    Open Coverage Source
                                  </a>
                                )}
                              </div>
                            </div>

                            {/* Secondary Image if Available (e.g. Magazine Flipbook Cover) */}
                            {item.secondaryImage && (
                              <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                  <img
                                    src={item.secondaryImage}
                                    alt="Magazine cover thumbnail"
                                    className="w-12 h-16 object-cover rounded-md shadow-sm border border-gray-200 cursor-pointer"
                                    onClick={() => setSelectedImage({ src: item.secondaryImage, alt: `${item.title} - Cover` })}
                                  />
                                  <div>
                                    <div className="text-xs font-bold text-gray-800">
                                      Digital Flipbook Issue
                                    </div>
                                    <div className="text-[11px] text-gray-500">
                                      {item.flipbookInfo?.edition || `${item.date} Edition`}
                                    </div>
                                  </div>
                                </div>
                                {item.flipbookInfo && (
                                  <div className="flex gap-2">
                                    <a
                                      href={item.flipbookInfo.coverUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs font-semibold text-msi-purple hover:text-msi-orange underline"
                                    >
                                      {item.flipbookInfo.coverLabel}
                                    </a>
                                    <span className="text-gray-300">•</span>
                                    <a
                                      href={item.flipbookInfo.storyUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs font-semibold text-msi-purple hover:text-msi-orange underline"
                                    >
                                      {item.flipbookInfo.storyLabel}
                                    </a>
                                  </div>
                                )}
                              </div>
                            )}

                            {/* Event Photo Glimpses / Gallery */}
                            {item.gallery && item.gallery.length > 0 && (
                              <div className="p-4 bg-gray-50/90 border-t border-gray-100">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2 flex items-center justify-between">
                                  <span>Event Glimpses ({item.gallery.length} Photos)</span>
                                  <span className="text-[10px] text-gray-400 font-normal">Click to enlarge</span>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                  {item.gallery.map((gImg, gIdx) => (
                                    <div
                                      key={gIdx}
                                      className="group/thumb relative rounded-xl overflow-hidden border border-gray-200 shadow-2xs hover:shadow-md transition-all cursor-pointer aspect-square bg-gray-100"
                                      onClick={() => setSelectedImage({ src: gImg.src, alt: gImg.caption || item.title })}
                                    >
                                      <img
                                        src={gImg.src}
                                        alt={gImg.caption || `Gallery ${gIdx + 1}`}
                                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300"
                                      />
                                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                                        <Maximize2 className="w-4 h-4 text-white drop-shadow" />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : null}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Print Press Clippings Section */}
      {(activeFilter === 'all' || activeFilter === 'clippings') && (
        <section className="py-20 bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 md:px-12">
            <div className="text-center mb-14 max-w-3xl mx-auto">
              <span className="text-xs md:text-sm uppercase tracking-wider text-msi-purple font-bold font-fredoka flex items-center justify-center gap-1.5">
                <Newspaper className="w-4 h-4 text-msi-orange" />
                Print Media Archive
              </span>
              <h2 className="text-3xl md:text-4xl text-msi-purple font-bold mt-2 font-fredoka">
                In The Press (21 Features)
              </h2>
              <div className="w-20 h-1 bg-msi-orange mx-auto rounded-full mt-4 mb-4" />
              <p className="text-gray-600 text-sm md:text-base">
                Click any newspaper clipping below to open and inspect the article in high resolution.
              </p>
            </div>

            <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
              {pressImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: (index % 6) * 0.04 }}
                  className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-gray-50"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-white">
                    <span className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                      <Maximize2 className="w-3.5 h-3.5" />
                      View Clipping
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal for Press Clippings */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center cursor-pointer"
          >
            <div
              className="relative max-w-5xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full max-h-[85vh] object-contain p-2"
              />
              <div className="p-3 bg-gray-900 text-white text-xs text-center">
                {selectedImage.alt}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
