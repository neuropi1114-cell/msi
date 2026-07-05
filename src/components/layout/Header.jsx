'use client';
import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
const mainLogo = '/logo/The-Neuroscientific-European-Childcare-PDF_12-x-4-ft_Backside-1.png.bv_resized_desktop.png.bv.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      children: [
        { name: 'Our Story', href: '/about' },
        { name: 'Our Team', href: '/about#team' },
        { name: 'Message from Founder', href: '/about' },
      ],
    },
    { name: 'Programs', href: '/programs' },
    { name: 'The Educational Project', href: '/nep' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Blog', href: '#' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Franchise', href: '#' },
    { name: 'Enrol', href: '/admissions' },
    { name: 'Book Your Tour', href: '/contact' },
    { name: 'Work With us', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Media Coverage', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'Login', href: '#' },
    { name: 'HR', href: '#' },
    { name: 'Handbook', href: '#' },
    { name: 'Handbook Video', href: '#' },
    { name: 'Video Gallery', href: '#' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-transparent py-2">
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" aria-label="Go to homepage">
            <img src={mainLogo} alt="My School ITALY Logo" className="h-12 w-auto" />
          </a>
        </div>

        <button
          className="text-white hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 md:w-80 shadow-xl overflow-y-auto transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ backgroundColor: 'rgb(225, 135, 43)' }}>
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
          <nav className="px-4 pb-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name}>
                  <button
                    className="w-full flex justify-between items-center font-bold text-white px-2 py-2 border-b border-white/20 text-sm uppercase tracking-wide hover:bg-[#351C5A] hover:text-white transition-colors"
                    onClick={() => setExpandedSection(expandedSection === link.name ? null : link.name)}
                  >
                    {link.name}
                    <span className={`transition-transform duration-200 ${expandedSection === link.name ? 'rotate-90' : ''}`}>{'>'}</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-200 ${expandedSection === link.name ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="pl-4 flex flex-col">
                      {link.children.map((child) => (
                        <a
                          key={child.name}
                          href={child.href}
                          className="text-white/90 px-2 py-1.5 border-b border-white/10 text-xs uppercase tracking-wide hover:bg-[#351C5A] hover:text-white transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-bold text-white px-2 py-2 border-b border-white/20 text-sm uppercase tracking-wide hover:bg-[#351C5A] hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
