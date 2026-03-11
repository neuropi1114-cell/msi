import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-msi-purple text-white pt-20 pb-10 font-averia">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        
        {/* Column 1: About */}
        <div>
          <h3 className="text-2xl font-schoolbell text-msi-orange mb-6 font-bold tracking-wider">
            About My School ITALY
          </h3>
          <p className="text-white/80 leading-relaxed mb-6 font-light">
            Rooted in neuroscience and dedicated to shaping the future of early childhood education. We build strong partnerships with parents and communities to provide a nurturing environment where children thrive unconditionally.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-msi-orange transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-msi-orange transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-msi-orange transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-msi-orange transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-2xl font-schoolbell text-msi-orange mb-6 font-bold tracking-wider">
            Quick Links
          </h3>
          <ul className="space-y-4 text-white/80">
            {['About Us', 'NeuroPi Study Technology', 'Franchise Opportunities', 'Gallery', 'Contact Us'].map((link) => (
              <li key={link}>
                <a href="#" className="flex items-center hover:text-msi-orange transition-colors">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-2xl font-schoolbell text-msi-orange mb-6 font-bold tracking-wider">
            Get In Touch
          </h3>
          <ul className="space-y-4 text-white/80">
            <li className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-msi-orange flex-shrink-0 mt-1" />
              <span>
                <strong>Headquarters:</strong><br/>
                Via Appia Nuova,<br/>
                00181 Roma RM, Italy
              </span>
            </li>
            <li className="flex items-center pt-2">
              <Phone className="w-5 h-5 mr-3 text-msi-orange" />
              <a href="tel:+917093904680" className="hover:text-msi-orange transition-colors">(+91) 70939 04680</a>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-3 text-msi-orange" />
              <a href="mailto:info@myschoolitaly.com" className="hover:text-msi-orange transition-colors">info@myschoolitaly.com</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/20 pt-8 mt-8 text-center text-white/60 text-sm">
        <p>
          &copy; {new Date().getFullYear()} My School ITALY. All Rights Reserved. Crafted with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
