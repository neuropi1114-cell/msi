import React from 'react';
import { Home, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-msi-purple text-white text-sm py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center z-50 relative">
      <div className="flex flex-wrap items-center gap-4 mb-2 md:mb-0">
        <a href="/" className="flex items-center text-msi-cream" aria-label="Home">
          <Home className="w-4 h-4 mr-2" />
          Home
        </a>
        <a href="tel:+917093904680" className="flex items-center text-msi-cream">
          <Phone className="w-4 h-4 mr-2" />
          (+91) 70939 04680
        </a>
        <a href="https://wa.me/917075947070" target="_blank" rel="noopener noreferrer" className="flex items-center text-msi-cream">
          <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-4 h-4 mr-2" />
          (+91) 70759 47070
        </a>
        <a href="mailto:info@myschoolitaly.com" className="flex items-center text-msi-cream">
          <img src="/gmail.svg" alt="Gmail" className="w-4 h-4 mr-2" />
          info@myschoolitaly.com
        </a>
        </div>
      
      <div className="flex items-center space-x-3">
        <a href="https://facebook.com/myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly Facebook">
          <img src="/facebook-icon.svg" alt="Facebook" className="w-4 h-4" />
        </a>
        <a href="https://instagram.com/myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly Instagram">
          <img src="/instagram-icon.svg" alt="Instagram" className="w-4 h-4" />
        </a>
        <a href="https://linkedin.com/company/myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly LinkedIn">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
        </a>
        <a href="https://youtube.com/@myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly YouTube">
          <img src="/youtube.svg" alt="YouTube" className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
