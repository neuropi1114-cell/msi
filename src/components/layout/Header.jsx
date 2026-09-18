'use client';
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { Menu, X, Search, ChevronRight, Phone, User } from 'lucide-react';

const mainLogo = '/images/logo/The-Neuroscientific-European-Childcare-PDF_12-x-4-ft_Backside-1.png.bv_resized_desktop.png.bv.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  const navLinks = [
    { name: 'Why MSI', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'The NeuroPi Way', href: '/nep' },
    { name: 'Parents', href: '/parents' },
    { name: 'Corporate Childcare', href: '/#corporate-childcare' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-white/80 backdrop-blur-sm py-3.5 border-b border-gray-100/80'
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
            <Link href="#" aria-label="Login" className="p-0.5 text-msi-purple hover:text-msi-green transition-colors flex items-center">
              <User className="w-4 h-4" />
            </Link>
          </div>
          <a
            href="tel:+917093904680"
            className="flex items-center gap-1 font-bold text-[11px] sm:text-xs text-msi-blue hover:text-msi-green transition-colors whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-msi-orange shrink-0" />
            <span>(+91) 70939 04680</span>
          </a>
        </div>

        {/* Inline Desktop Navigation */}
        <nav aria-label="Desktop navigation" className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-lato font-semibold text-[15px] text-msi-blue hover:text-msi-green transition-colors relative py-1 group"
            >
              <h3 className="m-0 p-0 text-inherit font-inherit not-italic inline">{link.name}</h3>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-msi-green transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
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

      {/* Mobile Slide-Out Drawer rendered via React Portal to prevent sticky header CSS clipping */}
      {mounted &&
        createPortal(
          <div
            className={`fixed inset-0 z-[9999] transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setIsMenuOpen(false)} />
            <div
              className={`fixed top-0 right-0 bottom-0 z-[10000] h-full w-[85%] max-w-sm bg-msi-orange shadow-2xl overflow-y-auto transition-transform duration-300 ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
            >
              <div className="flex justify-end items-center p-4 sticky top-0 bg-msi-orange z-10">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white p-1.5 rounded-full hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="px-4 pb-6 pt-2">
                <nav aria-label="Mobile menu" className="flex flex-col gap-1 pb-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="font-bold text-white px-3 py-3 border-b border-white/15 text-sm uppercase tracking-wide hover:bg-[#351C5A] hover:text-white rounded-lg transition-all flex justify-between items-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <h3 className="m-0 p-0 text-inherit font-inherit not-italic">{link.name}</h3>
                      <ChevronRight className="w-4 h-4 text-white/60" />
                    </Link>
                  ))}
                  <div className="mt-4 pt-2">
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