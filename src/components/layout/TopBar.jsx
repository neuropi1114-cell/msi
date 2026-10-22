import React from 'react';
import { Home, Phone } from 'lucide-react';

const formatPhoneHref = (phone, phoneHref) => {
  if (phoneHref) return phoneHref;
  const digits = String(phone).replace(/[^\d+]/g, '');
  if (digits.startsWith('+')) return `tel:${digits}`;
  if (digits.length === 10) return `tel:+91${digits}`;
  return `tel:${digits}`;
};

const formatWhatsappHref = (whatsapp, whatsappHref) => {
  if (whatsappHref) return whatsappHref;
  const digits = String(whatsapp).replace(/[^\d]/g, '');
  if (digits.length === 10) return `https://wa.me/91${digits}`;
  return `https://wa.me/${digits}`;
};

const TopBar = ({
  phone = '(+91) 70939 04680',
  phoneHref,
  whatsapp = '(+91) 70759 47070',
  whatsappHref,
  email = 'info@myschoolitaly.com',
  emailHref,
}) => {
  const actualPhoneHref = formatPhoneHref(phone, phoneHref);
  const actualWhatsappHref = formatWhatsappHref(whatsapp, whatsappHref);
  const emailList = Array.isArray(email)
    ? email
    : typeof email === 'string' && email.includes('/')
    ? email.split('/').map((e) => e.trim()).filter(Boolean)
    : [email];

  return (
    <div className="hidden md:flex bg-msi-purple text-white text-xs lg:text-sm py-2 px-4 md:px-12 justify-between items-center z-50 relative">
      <div className="flex flex-wrap items-center gap-4 mb-2 md:mb-0">
        <a href="/" className="flex items-center text-msi-cream" aria-label="Home">
          <Home className="w-4 h-4 mr-2" />
          Home
        </a>
        <a href={actualPhoneHref} className="flex items-center text-msi-cream">
          <Phone className="w-4 h-4 mr-2" />
          {phone}
        </a>
        <a href={actualWhatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center text-msi-cream">
          <img src="/whatsapp-icon.svg" alt="WhatsApp" className="w-4 h-4 mr-2" />
          {whatsapp}
        </a>
        <div className="flex items-center text-msi-cream gap-1.5">
          <img src="/gmail.svg" alt="Gmail" className="w-4 h-4 mr-1 shrink-0" />
          {emailList.map((item, idx) => (
            <React.Fragment key={item}>
              {idx > 0 && <span className="text-msi-cream/50">/</span>}
              <a href={`mailto:${item}`} className="text-msi-cream hover:text-msi-orange transition-colors">
                {item}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <a href="https://www.facebook.com/myschoolitaly/" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly Facebook">
          <img src="/facebook-icon.svg" alt="Facebook" className="w-4 h-4" />
        </a>
        <a href="https://www.instagram.com/myschoolitaly/" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly Instagram">
          <img src="/instagram-icon.svg" alt="Instagram" className="w-4 h-4" />
        </a>
        <a href="https://linkedin.com/company/myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly LinkedIn">
          <img src="/linkedin.svg" alt="LinkedIn" className="w-4 h-4" />
        </a>
        <a href="https://www.youtube.com/@myschoolitaly" target="_blank" rel="noopener noreferrer" aria-label="MySchoolItaly YouTube">
          <img src="/youtube.svg" alt="YouTube" className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
