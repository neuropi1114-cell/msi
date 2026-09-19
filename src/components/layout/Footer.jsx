import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLogo = '/images/logo/The-Neuroscientific-European-Childcare-PDF_12-x-4-ft_Backside-1.png.bv_resized_desktop.png.bv.webp';

const Footer = () => {
  return (
    <footer className="bg-msi-purple text-white pt-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">

        {/* Logo */}
        <div className="mb-4 text-center">
          <img src={footerLogo} alt="My School ITALY" className="h-20 md:h-28 mx-auto" />
        </div>

        {/* Tagline */}
        <p className="text-center !text-white font-bold text-lg uppercase tracking-wider mb-2">

          While you build their future, we care for their childhood.
        </p>

        {/* Locations under tagline */}
        <div className="text-center mb-10">
          <h4 className="text-msi-orange font-bold mb-2">HYDERABAD</h4>
          <ul className="!text-white text-sm flex flex-wrap justify-center gap-x-1 gap-y-1 mb-4">
            {['Hitex', 'Q-city', 'Avance 1', 'Avance 2', 'Mindscape', 'Kavuri Hills', 'Cyberabad Police Commissionerate', 'Miyapur', 'Kukatpally', 'Kondapur', 'Manikonda'].map((branch, i, arr) => (
              <li key={branch} className="flex items-center !text-white">
                <span className="!text-white cursor-pointer hover:text-msi-orange transition-colors">{branch}</span>
                {i < arr.length - 1 && <span className="!text-white/40 ml-1">|</span>}
              </li>
            ))}
          </ul>

          <h4 className="text-msi-orange font-bold mb-2">PAN – INDIA </h4>
          <ul className="!text-white text-sm flex flex-wrap justify-center gap-x-1 gap-y-1">
            {['Berhampur – Odisha', 'Tanuku – AP', 'Tadepalligudem – AP', 'Manpada – Thane', 'Balewadi – Pune', 'Purna Nagar – Pune', 'Chakshu – Jaipur', 'Noida – UP'].map((branch, i, arr) => (
              <li key={branch} className="flex items-center !text-white">
                <span className="!text-white cursor-pointer hover:text-msi-orange transition-colors">{branch}</span>
                {i < arr.length - 1 && <span className="!text-white/40 ml-1">|</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Column 1: My School ITALY About */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white text-center md:text-left">My School ITALY</h3>
            <p className="!text-white leading-relaxed text-sm mb-4 text-justify">
              Welcome to My School ITALY that brings together neuroscience-informed learning, European early-years principles, nurturing care and developmental understanding in a safe, joyful environment for children from 45 days to the growing years. Our learning journey extends beyond the classroom through Gymnastics, Neurobics, Robotics, Dance, Storytelling and Creative Arts, while NeuroPi helps connect developmental understanding across school and home.
            </p>
            <p className="!text-white leading-relaxed text-sm text-justify font-medium">
              Every child is different. We begin by understanding the child.
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact us</h3>

            <ul className="space-y-3 !text-white text-sm">
              <li className="flex items-start !text-white">
                <img src="/googleMaps.svg" alt="Location" className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                <span className="!text-white">
                  <strong className="!text-white">ITALY:</strong> Piazza Luigi Di Savoia 40, Bari 70121
                </span>
              </li>

              <li className="flex items-start !text-white">
                <img src="/googleMaps.svg" alt="Location" className="w-4 h-4 mr-2 flex-shrink-0 mt-1" />
                <span className="!text-white">
                  <strong className="!text-white">INDIA:</strong> Hitex, HiTech City, Hyderabad, 500084</span>
              </li>
              <li className="flex items-center !text-white">
                <Phone className="w-4 h-4 mr-2 text-msi-orange" />
                <a href="tel:+917093904680" className="!text-white hover:text-msi-orange transition-colors font-normal">(+91) 70939 04680</a>
              </li>
              <li className="flex items-center !text-white">
                <img src="/gmail.svg" alt="Gmail" className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="mailto:info@myschoolitaly.com" className="!text-white hover:text-msi-orange transition-colors font-normal">info@myschoolitaly.com</a>
              </li>
              <li className="flex items-center !text-white">
                <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-4 h-4 mr-2 flex-shrink-0" />
                <a href="https://wa.me/917093904680" target="_blank" rel="noopener noreferrer" className="!text-white hover:text-msi-orange transition-colors font-normal">(+91) 70939 04680</a>
              </li>
            </ul>

            {/* Social Icons brought from top header */}
            <div className="flex items-center space-x-3 mt-6">
              <a href="https://facebook.com/myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded bg-msi-orange flex items-center justify-center transition-all hover:scale-110">
                <img src="/facebook-icon.svg" alt="Facebook" className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded bg-msi-orange flex items-center justify-center transition-all hover:scale-110">
                <img src="/instagram-icon.svg" alt="Instagram" className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded bg-msi-orange flex items-center justify-center transition-all hover:scale-110">
                <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-9 h-9 rounded bg-msi-orange flex items-center justify-center transition-all hover:scale-110">
                <img src="/youtube.svg" alt="YouTube" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Navigation</h3>
            <ul className="flex flex-col gap-y-2 !text-white text-sm">
              <li><a href="/" className="!text-white hover:text-msi-orange transition-colors">Home</a></li>
              <li><a href="/whyus" className="!text-white hover:text-msi-orange transition-colors">Why Choose Us</a></li>
              <li><a href="/about" className="!text-white hover:text-msi-orange transition-colors">About Us</a></li>
              <li><a href="/programs" className="!text-white hover:text-msi-orange transition-colors">Programs</a></li>
              <li><a href="/franchise-overview" className="!text-white hover:text-msi-orange transition-colors">For School Owners</a></li>
              <li><a href="/privacy-policy" className="!text-white hover:text-msi-orange transition-colors">Policy Framework</a></li>

              <li><a href="/media" className="!text-white hover:text-msi-orange transition-colors">Media</a></li>
              <li><a href="/blogs" className="!text-white hover:text-msi-orange transition-colors">Blog</a></li>
              <li><a href="/admissions" className="!text-white hover:text-msi-orange transition-colors">Enroll</a></li>
              <li><a href="/contact" className="!text-white hover:text-msi-orange transition-colors">Book A Tour</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Mountain Effect + Characters */}
      <div className="relative w-full">
        <svg className="w-full h-40 md:h-56" viewBox="0 0 1440 220" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,0 L0,220 L1440,220 L1440,0 L1100,140 L720,20 L340,140 L0,0 Z" fill="#271344" />
        </svg>
        {/* Character scene centered over the mountain */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <img src="/images/footer/bg-bottom.png.bv.webp" alt="Footer decoration" className="w-1/3 max-w-sm" loading="lazy" />
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#1e0e3a] py-4">
        <div className="container mx-auto px-4 md:px-12 flex items-center justify-between text-sm flex-wrap gap-y-1">
          <span className="!text-white/80">&copy; 2002 &ndash; {new Date().getFullYear()} My School ITALY. All Rights Reserved.</span>
          <div className="flex items-center gap-2">
            <span className="!text-white/40">|</span>
            <a href="/privacy-policy" className="text-msi-orange hover:underline transition-colors">Privacy Policy</a>
            <span className="!text-white/40">|</span>
            <a href="/terms" className="text-msi-orange hover:underline transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
