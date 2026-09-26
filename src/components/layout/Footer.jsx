import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

const FOOTER_LOGO = '/images/logo/The-Neuroscientific-European-Childcare-PDF_12-x-4-ft_Backside-1.png.bv_resized_desktop.png.bv.webp';

const HYDERABAD_BRANCHES = [
  'Hitex', 'The Square', 'Avance 1', 'Avance 2', 'Mindscape',
  'Kavuri Hills', 'Cyberabad Police Commissionerate', 'Miyapur',
  'Kukatpally', 'Kondapur', 'Manikonda'
];

const PAN_INDIA_BRANCHES = [
  'Berhampur – Odisha', 'Tanuku – AP', 'Tadepalligudem – AP',
  'Manpada – Thane', 'Balewadi – Pune', 'Purna Nagar – Pune',
  'Chakshu – Jaipur', 'Noida – UP'
];

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/whyus', label: 'Why Choose Us' },
  { href: '/about', label: 'About Us' },
  { href: '/programs', label: 'Programs' },
  { href: '/corporatechildcare', label: 'Corporate Childcare' },
  { href: '/policy-framework', label: 'Policy Framework' },
  { href: '/media-coverage', label: 'Media' },
  { href: '/blog', label: 'Blog' },
  { href: '/admissions', label: 'Enroll' },
  { href: '/contact', label: 'Book A Tour' },
];

const SOCIAL_LINKS = [
  { href: 'https://facebook.com/myschoolitaly', label: 'Facebook', icon: '/facebook-icon.svg' },
  { href: 'https://instagram.com/myschoolitaly', label: 'Instagram', icon: '/instagram-icon.svg' },
  { href: 'https://linkedin.com/company/myschoolitaly', label: 'LinkedIn', icon: '/linkedin.svg' },
  { href: 'https://youtube.com/@myschoolitaly', label: 'YouTube', icon: '/youtube.svg' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-msi-purple text-white pt-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        {/* Logo */}
        <div className="mb-4 text-center">
          <Image
            src={FOOTER_LOGO}
            alt="My School ITALY Logo"
            width={350}
            height={112}
            className="h-20 md:h-28 w-auto mx-auto object-contain"
          />
        </div>

        {/* Tagline */}
        <p className="text-center font-bold text-lg uppercase tracking-wider mb-2 !text-white">
          While you build their future, we care for their childhood.
        </p>

        {/* Locations under tagline */}
        <div className="text-center mb-10">
          <h3 className="!text-msi-orange font-bold mb-2 text-sm tracking-wider uppercase">HYDERABAD</h3>
          <ul className="text-sm flex flex-wrap justify-center gap-x-1 gap-y-1 mb-4 !text-white">
            {HYDERABAD_BRANCHES.map((branch, i) => (
              <li key={branch} className="flex items-center !text-white">
                {branch === 'Hitex' ? (
                  <Link href="/hitex" className="!text-white hover:!text-msi-orange transition-colors font-medium underline underline-offset-2 decoration-msi-orange">
                    {branch}
                  </Link>
                ) : branch === 'The Square' || branch === 'Q-city' || branch === 'Q-City' ? (
                  <Link href="/qcity" className="!text-white hover:!text-msi-orange transition-colors font-medium underline underline-offset-2 decoration-msi-orange">
                    {branch}
                  </Link>
                ) : (
                  <span className="!text-white hover:!text-msi-orange transition-colors">{branch}</span>
                )}
                {i < HYDERABAD_BRANCHES.length - 1 && <span className="!text-white/40 ml-1">|</span>}
              </li>
            ))}
          </ul>

          <h3 className="!text-msi-orange font-bold mb-2 text-sm tracking-wider uppercase">PAN – INDIA</h3>
          <ul className="text-sm flex flex-wrap justify-center gap-x-1 gap-y-1 !text-white">
            {PAN_INDIA_BRANCHES.map((branch, i) => (
              <li key={branch} className="flex items-center !text-white">
                <span className="!text-white hover:!text-msi-orange transition-colors">{branch}</span>
                {i < PAN_INDIA_BRANCHES.length - 1 && <span className="!text-white/40 ml-1">|</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-6 !text-white text-center md:text-left">My School ITALY</h3>
            <p className="leading-relaxed text-sm mb-4 text-justify !text-white/90">
              Welcome to My School ITALY that brings together neuroscience-informed learning, European early-years principles, nurturing care and developmental understanding in a safe, joyful environment for children from 45 days to the growing years. Our learning journey extends beyond the classroom through Gymnastics, Neurobics, Robotics, Dance, Storytelling and Creative Arts, while NeuroPi helps connect developmental understanding across school and home.
            </p>
            <p className="leading-relaxed text-sm text-justify font-medium !text-white">
              Every child is different. We begin by understanding the child.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 !text-white">Contact us</h3>

            <ul className="space-y-3 text-sm !text-white">
              <li className="flex items-start !text-white">
                <Image src="/googleMaps.svg" alt="" width={16} height={16} className="mr-2 flex-shrink-0 mt-1" />
                <span className="!text-white">
                  <strong className="font-semibold !text-white">ITALY:</strong> Piazza Luigi Di Savoia 40, Bari 70121
                </span>
              </li>

              <li className="flex items-start !text-white">
                <Image src="/googleMaps.svg" alt="" width={16} height={16} className="mr-2 flex-shrink-0 mt-1" />
                <span className="!text-white">
                  <strong className="font-semibold !text-white">INDIA:</strong> Hitex, HiTech City, Hyderabad, 500084
                </span>
              </li>
              <li className="flex items-center !text-white">
                <Phone className="w-4 h-4 mr-2 text-msi-orange flex-shrink-0" />
                <a href="tel:+917093904680" className="!text-white hover:!text-msi-orange transition-colors font-normal">
                  (+91) 70939 04680
                </a>
              </li>
              <li className="flex items-center !text-white">
                <Image src="/gmail.svg" alt="" width={16} height={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@myschoolitaly.com" className="!text-white hover:!text-msi-orange transition-colors font-normal">
                  info@myschoolitaly.com
                </a>
              </li>
              <li className="flex items-center !text-white">
                <Image src="/whatsapp-icon.svg" alt="" width={16} height={16} className="mr-2 flex-shrink-0" />
                <a href="https://wa.me/917093904680" target="_blank" rel="noopener noreferrer" className="!text-white hover:!text-msi-orange transition-colors font-normal">
                  (+91) 70939 04680
                </a>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded bg-msi-orange flex items-center justify-center transition-all hover:scale-110"
                >
                  <Image src={social.icon} alt="" width={16} height={16} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 !text-white">Navigation</h3>
            <ul className="flex flex-col gap-y-2 text-sm !text-white">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="!text-white">
                  <Link href={link.href} className="!text-white hover:!text-msi-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Mountain Effect + Characters */}
      <div className="relative w-full">
        <svg className="w-full h-40 md:h-56" viewBox="0 0 1440 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,220 L1440,220 L1440,0 L1100,140 L720,20 L340,140 L0,0 Z" fill="#271344" />
        </svg>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <Image
            src="/images/footer/bg-bottom.png.bv.webp"
            alt="Footer decorative illustration"
            width={400}
            height={200}
            className="w-1/3 max-w-sm h-auto"
          />
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#1e0e3a] py-4">
        <div className="container mx-auto px-4 md:px-12 flex items-center justify-between text-sm flex-wrap gap-y-1">
          <span className="!text-white/80">&copy; 2002 &ndash; {currentYear} My School ITALY. All Rights Reserved.</span>
          <div className="flex items-center gap-2">
            <span className="!text-white/40">|</span>
            <Link href="/privacy-policy" className="!text-msi-orange hover:underline transition-colors">
              Privacy Policy
            </Link>
            <span className="!text-white/40">|</span>
            <Link href="/terms" className="!text-msi-orange hover:underline transition-colors">
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

