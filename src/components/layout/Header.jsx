'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Search } from 'lucide-react';
const mainLogo = '/images/logo/The-Neuroscientific-European-Childcare-PDF_12-x-4-ft_Backside-1.png.bv_resized_desktop.png.bv.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const sentinel = document.querySelector('[data-nav-sentinel]');
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(entry.isIntersecting);
      },
      { rootMargin: '-60px 0px 0px 0px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: 'Why MSI', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'The NeuroPi Way', href: '/nep' },
    { name: 'Parents', href: '/handbook' },
    { name: 'Corporate Childcare', href: '/#corporate-childcare' },
    { name: 'Login', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent py-2">
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center gap-4">
        <div className="flex items-center">
          <Link href="/" aria-label="Go to homepage">
            <img src={mainLogo} alt="My School ITALY Logo" width="200" height="50" className="h-16 w-auto md:h-20" />
          </Link>
        </div>

        <button
          className="transition-colors bg-[#d16827] text-white p-2 rounded hover:bg-[#351c5a]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 md:w-80 bg-msi-orange shadow-xl overflow-y-auto transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-white hover:opacity-80">
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="px-4 mb-2">
            <img src="/images/navbar/7xm.xyz669204.jpg.bv.webp" alt="Nav banner" className="w-full h-auto rounded-lg" />
          </div>
          <div className="px-4 mb-3">
            <div className="e-search-input-wrapper relative">
              <input
                id="search-b067dab"
                placeholder="Looking for something specific?"
                className="e-search-input w-full bg-white/20 text-white placeholder-white/60 px-3 py-2 rounded-none outline-none focus:ring-2 focus:ring-white/40 text-sm"
                type="search"
                name="s"
                autoComplete="off"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded="false"
                aria-controls="results-b067dab"
                aria-haspopup="listbox"
              />
              <div className="absolute right-0 top-0 h-full flex items-center px-3 bg-[#351C5A] rounded-none pointer-events-none">
                <Search className="w-4 h-4 text-white" />
              </div>
              <output id="results-b067dab" className="e-search-results-container hide-loader" aria-live="polite" aria-atomic="true" aria-label="Results for search" tabIndex="0">
                <div className="e-search-results"></div>
              </output>
            </div>
          </div>
          <nav aria-label="Mobile navigation" className="px-4 pb-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-bold text-white px-2 py-2 border-b border-white/20 text-sm uppercase tracking-wide hover:bg-[#351C5A] hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;