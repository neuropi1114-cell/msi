'use client';
import React, { useState, useEffect, useRef, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ChevronDown, Phone, User, Sparkles } from 'lucide-react';

const mainLogo = '/images/logo/The-Neuroscientific-European-Childcare-PDF_12-x-4-ft_Backside-1.png.bv_resized_desktop.png.bv.webp';
const emptySubscribe = () => () => { };

const navLinks = [
  {
    name: 'WHY MSI',
    href: '/whyus',
    subLinks: [
      { name: 'Our Story', href: '/whyus/our-story' },
      { name: 'Our Philosophy', href: '/whyus/our-philosophy' },
      { name: 'Why the First 2,000 Days Matter', href: '/whyus/first-2000-days' },
      { name: 'The European Early Years Approach', href: '/whyus/european-approach' },
      { name: 'Our Learning Environment', href: '/whyus/learning-environment' },
      { name: 'Our Books & Stories', href: '/whyus/books-stories' },
      { name: 'Our Teachers', href: '/whyus/teachers' },
      { name: 'Safety & Emotional Wellbeing', href: '/whyus/safety-wellbeing' },
      { name: 'INSPIRE ME EAT — Nutrition & Food', href: '/whyus/inspire-me-eat' },
    ],
  },
  {
    name: 'PROGRAMS',
    href: '/programs',
    subLinks: [
      { name: 'Baby Crèche — 45 Days+', href: '/programs/baby-creche' },
      { name: 'Toddler / Playgroup', href: '/programs/toddler-playgroup' },
      { name: 'Nursery', href: '/programs/nursery' },
      { name: 'Kindergarten K1', href: '/programs/kindergarten-k1' },
      { name: 'Kindergarten K2', href: '/programs/kindergarten-k2' },
      { name: 'Daycare', href: '/programs/daycare' },
      { name: '24-Hour Care — Where Available', href: '/programs/24-hour-care' },
      { name: 'Early Drop-Off & Late Pick-Up', href: '/programs/extended-care' },
      { name: 'Saturday & Holiday Care', href: '/programs/saturday-holiday-care' },
      { name: 'Robotics', href: '/programs/robotics' },
      { name: 'Gymnastics', href: '/programs/gymnastics' },
      { name: 'Storytelling & Creative Arts', href: '/programs/storytelling-creative-arts' },
      { name: 'Dance & Creative Movement', href: '/programs/dance-creative-movement' },
      { name: 'Holiday & Summer Programs', href: '/programs/holiday-summer-programs' },
    ],
  },
  {
    name: 'THE NEUROPI WAY',
    href: '/neuropiway',
    subLinks: [
      { name: 'The NeuroPi Way', href: '/neuropiway' },
      { name: 'Five Pillars', href: '/neuropiway/five-pillars' },
      { name: 'Learning the NeuroPi Way', href: '/neuropiway/learning-neuropi-way' },
      { name: 'Reimagining The learning', href: '/neuropiway/reimagining-learning' },
      { name: 'What is NeuroPi?', href: '/neuropiway/what-is-neuropi' },
      { name: 'NeuroPi Connect', href: '/neuropiway/neuropi-connect' },
      { name: 'Learning Cycle', href: '/neuropiway/learning-cycle' },
      { name: 'The NeuroPi Classroom Method', href: '/neuropiway/classroom-method' },
      { name: 'RISE — Developmental Observation', href: '/neuropiway/rise' },
      { name: 'Developmental Milestones', href: '/neuropiway/developmental-milestones' },
      { name: 'One Developmental Profile', href: '/neuropiway/one-developmental-profile' },
      { name: 'NeuroPi Teacher Development', href: '/neuropiway/teacher-development' },
    ],
  },
  {
    name: 'PARENTS',
    href: '/parents',
    subLinks: [
      { name: 'Your Journey with MSI', href: '/parents/your-journey' },
      { name: 'Starting School & Settling In', href: '/parents/starting-school' },
      { name: "Your Child's Day at MSI", href: '/parents/childs-day' },
      { name: "Understanding Your Child's Progress", href: '/parents/childs-progress' },
      { name: 'Home Learning & Family Connection', href: '/parents/home-learning' },
      { name: 'Parent Handbook', href: '/parents/parent-handbook' },
      { name: 'Frequently Asked Questions', href: '/parents/faq' },
      { name: 'Parent Stories & Testimonials', href: '/parents/testimonials' },
    ],
  },
  {
    name: 'CORPORATE CHILDCARE',
    href: '/corporatechildcare',
    subLinks: [
      { name: 'Corporate Childcare Solutions', href: '/corporatechildcare/solutions' },
      { name: 'On-Campus Crèche', href: '/corporatechildcare/on-campus-creche' },
      { name: 'Near-Campus Preferred Centres', href: '/corporatechildcare/near-campus-centres' },
      { name: 'Corporate Subsidy Programs', href: '/corporatechildcare/subsidy-programs' },
      { name: 'Extended-Hours Childcare', href: '/corporatechildcare/extended-hours' },
      { name: 'Reserved Seats', href: '/corporatechildcare/reserved-seats' },
      { name: 'Multi-Location Solutions', href: '/corporatechildcare/multi-location-solutions' },
      { name: 'The Employee Childcare Journey', href: '/corporatechildcare/employee-journey' },
      { name: 'Our Corporate Experience', href: '/corporatechildcare/corporate-experience' },
      { name: 'Partner With My School ITALY', href: '/corporatechildcare/partner' },
    ],
  },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [expandedMobile, setExpandedMobile] = useState({});
  const timeoutRef = useRef(null);

  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const isLinkActive = (linkHref) => {
    if (!pathname) return false;
    if (linkHref === '/whyus') {
      return pathname === '/whyus' || pathname === '/about' || pathname.startsWith('/whyus');
    }
    return pathname === linkHref || (linkHref !== '/' && pathname.startsWith(linkHref));
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 200);
      }
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileCategory = (name) => {
    setExpandedMobile((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 bg-white ${
        isScrolled
          ? 'shadow-md py-2.5 border-b border-gray-200'
          : 'shadow-sm py-3.5 border-b border-gray-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center gap-6">
        {/* Brand Logo */}
        <div className="flex items-center shrink-0">
          <Link href="/" aria-label="Go to homepage">
            <img
              src={mainLogo}
              alt="My School ITALY Logo"
              width="200"
              height="50"
              className="h-10 sm:h-11 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
            />
          </Link>
        </div>

        {/* Mobile Social Media Icons & Phone Number */}
        <div className="flex flex-col items-center justify-center lg:hidden gap-1">
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <a href="https://wa.me/917075947070" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly WhatsApp" className="p-0.5 hover:opacity-80 transition-opacity">
              <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-4 h-4" />
            </a>
            <a href="https://facebook.com/myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly Facebook" className="p-0.5 hover:opacity-80 transition-opacity">
              <img src="/facebook-icon.svg" alt="Facebook" className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly Instagram" className="p-0.5 hover:opacity-80 transition-opacity">
              <img src="/instagram-icon.svg" alt="Instagram" className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/company/myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly LinkedIn" className="p-0.5 hover:opacity-80 transition-opacity">
              <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/@myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly YouTube" className="p-0.5 hover:opacity-80 transition-opacity">
              <img src="/youtube.svg" alt="YouTube" className="w-4 h-4" />
            </a>
            <Link href="/login" aria-label="Login" className="p-0.5 text-msi-purple hover:text-msi-green transition-colors flex items-center">
              <User className="w-4 h-4" />
            </Link>
          </div>
          <a
            href="tel:+917093904680"
            className="flex items-center gap-1 font-normal text-[11px] sm:text-xs text-msi-blue hover:text-msi-green transition-colors whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-msi-orange shrink-0" />
            <span>(+91) 70939 04680</span>
          </a>
        </div>

        {/* Inline Desktop Navigation with Dropdowns & Red Dot Dividers */}
        <nav aria-label="Desktop navigation" className="hidden lg:flex items-center gap-4 xl:gap-5">
          {navLinks.map((link, index) => {
            const isOpen = activeDropdown === link.name;
            const isActive = isLinkActive(link.href);
            const isMultiColumn = link.subLinks && link.subLinks.length > 8;

            return (
              <React.Fragment key={link.name}>
                {index > 0 && (
                  <span className="text-red-500 font-bold text-lg select-none leading-none opacity-80" aria-hidden="true">
                    •
                  </span>
                )}
                <div
                  className="relative py-2"
                  onMouseEnter={() => handleMouseEnter(link.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href={link.href}
                    className={`font-lato font-semibold text-[14px] xl:text-[15px] transition-colors flex items-center gap-1 group py-1 ${
                      isActive ? 'text-msi-green font-bold' : 'text-msi-purple hover:text-msi-orange'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen
                          ? 'rotate-180 text-msi-orange'
                          : isActive
                          ? 'text-msi-green'
                          : 'text-msi-purple/70 group-hover:text-msi-orange'
                      }`}
                    />
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 ${
                        isActive
                          ? 'w-full bg-msi-green'
                          : isOpen
                          ? 'w-full bg-msi-orange'
                          : 'w-0 bg-msi-orange group-hover:w-full'
                      }`}
                    />
                  </Link>

                  {/* Modern Solid Dropdown / Popover Mega-Menu */}
                  {isOpen && link.subLinks && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white shadow-2xl rounded-2xl border border-gray-200 p-5 z-50 transition-all duration-200 transform origin-top animate-in fade-in slide-in-from-top-1 ${
                        isMultiColumn ? 'w-[560px] xl:w-[620px]' : 'w-[320px]'
                      }`}
                    >
                      {/* Top Decorative Category Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-100">
                        <Link
                          href={link.href}
                          className="text-xs font-bold tracking-wider text-msi-purple uppercase hover:text-msi-orange transition-colors flex items-center gap-1.5"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <Sparkles className="w-3.5 h-3.5 text-msi-orange" />
                          <span>Explore {link.name}</span>
                        </Link>
                      </div>

                      {/* Sub-links grid */}
                      <div
                        className={
                          isMultiColumn
                            ? 'grid grid-cols-2 gap-x-4 gap-y-1'
                            : 'flex flex-col gap-1'
                        }
                      >
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={(e) => {
                              setActiveDropdown(null);
                              const lastSlash = sub.href.lastIndexOf('/');
                              if (lastSlash > 0) {
                                const basePath = sub.href.substring(0, lastSlash);
                                const targetId = sub.href.substring(lastSlash + 1);
                                if (window.location.pathname.startsWith(basePath)) {
                                  const el = document.getElementById(targetId);
                                  if (el) {
                                    e.preventDefault();
                                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    window.history.pushState(null, '', sub.href);
                                  }
                                }
                              }
                            }}
                            className="group/item flex items-center justify-between p-2 rounded-xl text-[13.5px] font-medium text-slate-800 hover:text-msi-purple hover:bg-slate-100 border-l-2 border-transparent hover:border-msi-orange transition-all duration-150"
                          >
                            <span className="truncate pr-2 group-hover/item:translate-x-1 transition-transform duration-200">
                              {sub.name}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-msi-orange opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </nav>

        {/* Right Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center gap-2 bg-msi-orange text-white font-bold text-base md:text-lg px-7 py-3 rounded-full shadow-md hover:bg-[#b8561b] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            <User className="w-5 h-5" />
            <span>LOGIN</span>
          </Link>

          <button
            className="p-2.5 rounded-full bg-msi-purple/10 text-msi-purple hover:bg-msi-purple hover:text-white transition-all duration-300 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer rendered via React Portal */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="fixed inset-0 bg-black/60" onClick={() => setIsMenuOpen(false)} />
            <div
              className={`fixed top-0 right-0 bottom-0 z-[10000] h-full w-[88%] max-w-sm bg-msi-orange shadow-2xl overflow-y-auto transition-transform duration-300 ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex justify-end items-center p-4 sticky top-0 bg-msi-orange z-10 border-b border-white/10">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-1.5 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-4 pb-8 pt-3">
                <nav aria-label="Mobile menu" className="flex flex-col gap-1 pb-6">
                  {navLinks.map((link) => {
                    const isExpanded = !!expandedMobile[link.name];
                    const isActive = isLinkActive(link.href);

                    return (
                      <div key={link.name} className="border-b border-white/15 py-1">
                        <div className="flex items-center justify-between">
                          <Link
                            href={link.href}
                            className={`font-bold px-2 py-2.5 text-sm uppercase tracking-wide transition-colors flex-1 ${
                              isActive ? 'text-msi-green font-extrabold' : 'text-white hover:text-msi-cream'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                          {link.subLinks && (
                            <button
                              onClick={() => toggleMobileCategory(link.name)}
                              className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                              aria-label={`Toggle ${link.name} sub-menu`}
                              aria-expanded={isExpanded}
                            >
                              <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${
                                  isExpanded ? 'rotate-180 text-white' : 'text-white/70'
                                }`}
                              />
                            </button>
                          )}
                        </div>

                        {/* Collapsible Mobile Sub-Links */}
                        {isExpanded && link.subLinks && (
                          <div className="flex flex-col gap-1 pl-3 my-2 border-l-2 border-white/30 animate-in fade-in duration-200">
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className="text-white/95 text-xs py-2 px-2.5 hover:bg-white/15 rounded-lg flex items-center justify-between font-normal transition-colors"
                                onClick={(e) => {
                                  setIsMenuOpen(false);
                                  const lastSlash = sub.href.lastIndexOf('/');
                                  if (lastSlash > 0) {
                                    const basePath = sub.href.substring(0, lastSlash);
                                    const targetId = sub.href.substring(lastSlash + 1);
                                    if (window.location.pathname.startsWith(basePath)) {
                                      const el = document.getElementById(targetId);
                                      if (el) {
                                        e.preventDefault();
                                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        window.history.pushState(null, '', sub.href);
                                      }
                                    }
                                  }
                                }}
                              >
                                <span>{sub.name}</span>
                                <ChevronRight className="w-3.5 h-3.5 text-white/50" />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}

                  <div className="mt-6 pt-2">
                    <Link
                      href="/login"
                      className="flex items-center justify-center gap-2 bg-white text-msi-purple font-bold text-base md:text-lg px-7 py-3.5 rounded-full shadow-lg hover:bg-msi-cream transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="w-5 h-5" />
                      <span>LOGIN</span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
};

export default Header;