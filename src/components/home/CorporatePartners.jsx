import { motion } from 'framer-motion';

const partners = [
  { id: 1,  image: "/images/logos/working-parents/Accenture-Logo.jpg.bv.webp",       alt: "Accenture" },
  { id: 2,  image: "/images/logos/working-parents/TCS-Logo.jpg.bv.webp",              alt: "TCS" },
  { id: 3,  image: "/images/logos/working-parents/Microsoft-Logo.jpg.bv.webp",        alt: "Microsoft" },
  { id: 4,  image: "/images/logos/working-parents/Infosys_logo.svg.png.bv_resized_ipad.png.bv.webp", alt: "Infosys" },
  { id: 5,  image: "/images/logos/working-parents/wipro-2.png.bv.webp",               alt: "Wipro" },
  { id: 6,  image: "/images/logos/working-parents/ibm-1.png.bv.webp",                 alt: "IBM" },
  { id: 7,  image: "/images/logos/working-parents/Deloitte_Logo.png.bv_resized_ipad.png.bv.webp", alt: "Deloitte" },
  { id: 8,  image: "/images/logos/working-parents/Vodafone-Logo.jpg.bv.webp",         alt: "Vodafone" },
  { id: 9,  image: "/images/logos/working-parents/Amazon-Logo-1.jpg.bv.webp",         alt: "Amazon" },
  { id: 10, image: "/images/logos/working-parents/ICICI-Bank-Logo.jpg.bv.webp",       alt: "ICICI Bank" },
  { id: 11, image: "/images/logos/working-parents/cognizant-1.png.bv.webp",           alt: "Cognizant" },
  { id: 12, image: "/images/logos/working-parents/Tech-Mahindra-Logo.jpg.bv.webp",    alt: "Tech Mahindra" },
  { id: 13, image: "/images/logos/working-parents/hcl.png.bv_resized_ipad.png.bv.webp", alt: "HCL" },
  { id: 14, image: "/images/logos/working-parents/oracle_logo.png.bv_resized_ipad.png.bv.webp", alt: "Oracle" },
  { id: 15, image: "/images/logos/working-parents/Broadcom-Logo.jpg.bv.webp",         alt: "Broadcom" },
  { id: 16, image: "/images/logos/working-parents/KWE-Logo.jpg.bv.webp",              alt: "KWE" },
];

export default function CorporatePartners() {
  return (
    <section className="py-16 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-12 text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-schoolbell text-msi-purple font-bold mb-4"
        >
          Corporate Partners
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          We work with companies and corporations and provide tailor-made family solutions to employees.
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-hidden group py-4">
        <div className="animate-marquee flex whitespace-nowrap items-center min-w-full shrink-0">
          {partners.map((partner, index) => (
            <div key={index} className="mx-8 w-32 h-24 md:w-40 md:h-28 flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
              <img 
                src={partner.image} 
                alt={partner.alt} 
                className="max-w-full max-h-full object-contain transition-all duration-300"
                loading="lazy"
                onError={(e) => { e.target.src = '/images/logo/logo.png.bv.webp'; }}
              />
            </div>
          ))}
        </div>
        <div className="animate-marquee flex whitespace-nowrap items-center min-w-full shrink-0" aria-hidden="true">
          {partners.map((partner, index) => (
            <div key={`${index}-clone`} className="mx-8 w-32 h-24 md:w-40 md:h-28 flex-shrink-0 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
              <img 
                src={partner.image} 
                alt="" 
                className="max-w-full max-h-full object-contain transition-all duration-300"
                loading="lazy"
                onError={(e) => { e.target.src = '/images/logo/logo.png.bv.webp'; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
