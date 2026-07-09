import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';
const footerLogo = '/logo/The-Neuroscientific-European-Childcare-PDF_12-x-4-ft_Backside-1.png.bv_resized_desktop.png.bv.webp';

const Footer = () => {
  return (
    <footer className="bg-msi-purple text-white pt-16  overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Logo */}
        <div className="mb-4 text-center">
          <img src={footerLogo} alt="My School ITALY" className="h-20 md:h-28 mx-auto" />
        </div>

        {/* Tagline */}
        <p className="text-center text-white font-bold text-lg uppercase tracking-wider mb-4">
          Education Excellence Everywhere
        </p>

        {/* Locations under tagline */}
        <div className="text-center mb-10">
          <h4 className="text-msi-orange font-bold mb-2">HYDERABAD :</h4>
          <ul className="text-white/80 text-sm flex flex-wrap justify-center gap-x-1 gap-y-1 mb-4">
            {['Q-city', 'Hitex', 'Avance', 'Mindscape', 'Kavuri Hills', 'Avance 2', 'Cyberabad Police Commissionerate', 'Miyapur', 'Kukatpally', 'Kondapur', 'Manikonda'].map((branch, i, arr) => (
              <li key={branch} className="flex items-center">
                <span className="hover:text-msi-orange transition-colors cursor-pointer">{branch}</span>
                {i < arr.length - 1 && <span className="text-white/40 ml-1">|</span>}
              </li>
            ))}
          </ul>
          
          <h4 className="text-msi-orange font-bold mb-2">PAN – INDIA :</h4>
          <ul className="text-white/80 text-sm flex flex-wrap justify-center gap-x-1 gap-y-1">
            {['Berhampur – Odisha', 'Tanuku – AP', 'Tadepalligudem – AP', 'Manpada – Thane', 'Balewadi – Pune', 'Purna Nagar – Pune', 'Chakshu – Jaipur', 'Noida – UP'].map((branch, i, arr) => (
              <li key={branch} className="flex items-center">
                <span className="hover:text-msi-orange transition-colors cursor-pointer">{branch}</span>
                {i < arr.length - 1 && <span className="text-white/40 ml-1">|</span>}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: My School ITALY About */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white text-center font-sans">My School ITALY</h3>
            <p className="text-white/80 leading-relaxed text-sm mb-4 text-justify font-sans">
              Welcome to the enchanted world of "My School ITALY", where young minds flourish through neuroscience-based education. For over three decades, we've nurtured confident communicators from ages 45 days to 7 years. 👶 Our rainbow-hued classrooms and caring staff create a fairy tale setting 🧚‍♀️. Explore our tailored services for each stage of early development, from specialized baby creches to engaging preschool and foundation programs. ✨
            </p>
            <p className="text-white/80 leading-relaxed text-sm text-justify font-sans">
              We also offer a range of enriching extracurricular activities and special programs like Robotics, Gymnastics, Neurobics, Dance, and Storytelling to enhance your child's overall development. We're a network of preschools around the world, passionately championing accessible, top-tier, and high-quality education. 🏰
            </p>
          </div>

          {/* Column 2: Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white font-sans">Contact us</h3>
            
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-msi-orange flex-shrink-0 mt-1" />
                <span>
                  <strong>ITALY:</strong> Piazza Luigi Di Savoia 40, Bari 70121
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-msi-orange flex-shrink-0 mt-1" />
                <span>
                  <strong>UAE:</strong> Dubai Silicon Oasis, Dubai
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 text-msi-orange flex-shrink-0 mt-1" />
                <span>
                  <strong>INDIA:</strong> Hitex Road, next to Hitex Exhibition Centre Gate, Izzathnagar, Hyderabad, Telangana 500084
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-msi-orange" />
                <a href="tel:+917093904680" className="hover:text-msi-orange transition-colors">(+91) 70939 04680</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-msi-orange" />
                <a href="mailto:info@myschoolitaly.com" className="hover:text-msi-orange transition-colors">info@myschoolitaly.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-msi-orange" />
                <span>WhatsApp: <a href="https://wa.me/917093904680" className="hover:text-msi-orange transition-colors">(+91) 70939 04680</a></span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              <a href="https://www.facebook.com/myschoolitalyHQ/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-msi-orange flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/myschoolitaly" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-msi-orange flex items-center justify-center transition-all hover:scale-110">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/company/myschoolitaly" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-msi-orange flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://instagram.com/myschoolitaly" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-msi-orange flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@myschoolitaly" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded bg-msi-orange flex items-center justify-center transition-all hover:scale-110">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Navigation</h3>
            <ul className="flex flex-col gap-y-2 text-white/80 text-sm">
              <li><a href="/" className="hover:text-msi-orange transition-colors">Home</a></li>
              <li><a href="/programs" className="hover:text-msi-orange transition-colors">Pre School</a></li>
              <li><a href="/nep" className="hover:text-msi-orange transition-colors">The Educational Project</a></li>
              <li><a href="/day-care" className="hover:text-msi-orange transition-colors">Day Care</a></li>
              <li><a href="/about#team" className="hover:text-msi-orange transition-colors">Our Team</a></li>
              <li><a href="/msi-venture-philanthropy" className="hover:text-msi-orange transition-colors">Franchise Overview</a></li>
              <li><a href="/baby-sensory" className="hover:text-msi-orange transition-colors">Baby Sensory</a></li>
              <li><a href="/admissions" className="hover:text-msi-orange transition-colors">Enroll</a></li>
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
          <span className="text-white/60">&copy; 2002 – 2025 My School ITALY. All Rights Reserved.</span>
          <div className="flex items-center gap-2">
            <span className="text-white/40">|</span>
            <a href="/privacy-policy" className="text-msi-orange hover:underline transition-colors">Privacy Policy</a>
            <span className="text-white/40">|</span>
            <a href="/terms" className="text-msi-orange hover:underline transition-colors">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
