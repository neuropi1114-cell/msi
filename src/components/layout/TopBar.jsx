import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-msi-purple text-white text-sm py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center z-50 relative">
      <div className="flex flex-wrap items-center gap-4 mb-2 md:mb-0">
        <a href="tel:+917093904680" className="flex items-center hover:text-msi-orange transition-colors">
          <Phone className="w-4 h-4 mr-2" />
          (+91) 70939 04680
        </a>
        <a href="mailto:info@myschoolitaly.com" className="flex items-center hover:text-msi-orange transition-colors">
          <Mail className="w-4 h-4 mr-2" />
          info@myschoolitaly.com
        </a>
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-2 text-msi-orange" />
          ITALY, UAE & INDIA
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <a href="#" className="bg-msi-orange p-1.5 rounded hover:bg-white hover:text-msi-orange transition-colors">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="#" className="bg-msi-orange p-1.5 rounded hover:bg-white hover:text-msi-orange transition-colors">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#" className="bg-msi-orange p-1.5 rounded hover:bg-white hover:text-msi-orange transition-colors">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="#" className="bg-msi-orange p-1.5 rounded hover:bg-white hover:text-msi-orange transition-colors">
          <Youtube className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
