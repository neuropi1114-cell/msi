import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import mainLogo from '../../logo/The-Neuroscientific-European-Childcare-PDF_12-x-4-ft_Backside-1.png.bv_resized_desktop.png.bv.webp';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Early Childhood Program', href: '#' },
    { name: 'Franchise', href: '#' },
    { name: 'Login', href: '#' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-3'}`}>
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={mainLogo} alt="My School ITALY Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-bold text-gray-700 hover:text-msi-blue transition-colors text-[15px] uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <button className="text-gray-700 hover:text-msi-orange transition-colors">
            <Menu className="w-7 h-7" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-bold text-gray-700 hover:text-msi-blue px-2 py-1 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
