'use client';
import React from 'react';
import { motion } from 'framer-motion';

const workingParentLogos = [
  { src: "/images/logos/working-parents/Accenture-Logo.jpg.bv.webp", alt: "Accenture" },
  { src: "/images/logos/working-parents/TCS-Logo.jpg.bv.webp", alt: "TCS" },
  { src: "/images/logos/working-parents/Microsoft-Logo.jpg.bv.webp", alt: "Microsoft" },
  { src: "/images/logos/working-parents/KWE-Logo.jpg.bv.webp", alt: "KWE" },
  { src: "/images/logos/working-parents/Broadcom-Logo.jpg.bv.webp", alt: "Broadcom" },
  { src: "/images/logos/working-parents/ICICI-Bank-Logo.jpg.bv.webp", alt: "ICICI Bank" },
  { src: "/images/logos/working-parents/Vodafone-Logo.jpg.bv.webp", alt: "Vodafone" },
  { src: "/images/logos/working-parents/Amazon-Logo-1.jpg.bv.webp", alt: "Amazon" },
  { src: "/images/logos/working-parents/hcl.png.bv.webp", alt: "HCL" },
  { src: "/images/logos/working-parents/wipro-2.png.bv.webp", alt: "Wipro" },
  { src: "/images/logos/working-parents/ibm-1.png.bv.webp", alt: "IBM" },
  { src: "/images/logos/working-parents/Cyient_logo-1.jpg.bv.webp", alt: "Cyient" },
  { src: "/images/logos/working-parents/cognizant-1.png.bv.webp", alt: "Cognizant" },
  { src: "/images/logos/working-parents/ValueLabs_LLP_Logo.jpg.bv.webp", alt: "ValueLabs" },
  { src: "/images/logos/working-parents/oracle_logo.png.bv.webp", alt: "Oracle" },
  { src: "/images/logos/working-parents/optum-healthcare-logo.png.bv.webp", alt: "Optum" },
  { src: "/images/logos/working-parents/mc.png.bv.webp", alt: "MC" },
  { src: "/images/logos/working-parents/HSBC_logo.png.bv.webp", alt: "HSBC" },
  { src: "/images/logos/working-parents/Deloitte_Logo.png.bv.webp", alt: "Deloitte" },
  { src: "/images/logos/working-parents/Novartis-Logo.png.bv.webp", alt: "Novartis" },
  { src: "/images/logos/working-parents/6102f4c273c93700042f87ea.png.bv.webp", alt: "Partner" },
  { src: "/images/logos/working-parents/Infosys_logo.svg.png.bv.webp", alt: "Infosys" },
  { src: "/images/logos/working-parents/Wells_Fargo_Logo.png.bv.webp", alt: "Wells Fargo" },
];

const corporatePartnerLogos = [
  { src: "/images/logos/corporate-partners/TSWREIS-Logo.jpg.bv.webp", alt: "TSWREIS" },
  { src: "/images/logos/corporate-partners/TTWREIS-Logo.jpg.bv.webp", alt: "TTWREIS" },
  { src: "/images/logos/corporate-partners/Tech-Mahindra-Logo.jpg.bv.webp", alt: "Tech Mahindra" },
  { src: "/images/logos/corporate-partners/Samudara-Infra-Logo.jpg.bv.webp", alt: "Samudara Infra" },
  { src: "/images/logos/corporate-partners/Amaron-Logo.jpg.bv.webp", alt: "Amaron" },
  { src: "/images/logos/corporate-partners/QCIty.jpg.bv.webp", alt: "QCity" },
  { src: "/images/logos/corporate-partners/ICICI-Bank-Logo.jpg.bv.webp", alt: "ICICI Bank" },
  { src: "/images/logos/corporate-partners/Religare-Logo.jpg.bv.webp", alt: "Religare" },
  { src: "/images/logos/corporate-partners/Amazon-Logo.jpg.bv.webp", alt: "Amazon" },
  { src: "/images/logos/corporate-partners/Vodafone-Logo-1.jpg.bv.webp", alt: "Vodafone" },
  { src: "/images/logos/corporate-partners/hps.png.bv.webp", alt: "HPS" },
  { src: "/images/logos/corporate-partners/novvvva.png.bv.webp", alt: "Novartis" },
  { src: "/images/logos/corporate-partners/hhimachal.png.bv.webp", alt: "Himachal" },
  { src: "/images/logos/corporate-partners/ppppresvas-1.png.bv.webp", alt: "Presvas" },
  { src: "/images/logos/corporate-partners/granules_logo.png.bv.webp", alt: "Granules" },
  { src: "/images/logos/corporate-partners/Siemens-Logo.png.bv.webp", alt: "Siemens" },
  { src: "/images/logos/corporate-partners/Xoriant-Logo.png.bv.webp", alt: "Xoriant" },
  { src: "/images/logos/corporate-partners/Genpact_logo.svg.png.bv.webp", alt: "Genpact" },
  { src: "/images/logos/corporate-partners/SSC_Technologies_logo.png.bv.webp", alt: "SS&C Technologies" },
  { src: "/images/logos/corporate-partners/Gemini-Consulting.png.bv.webp", alt: "Gemini Consulting" },
  { src: "/images/logos/corporate-partners/348423720_n.jpg.bv.webp", alt: "Partner" },
  { src: "/images/logos/corporate-partners/ibm.svg", alt: "IBM" },
  { src: "/images/logos/corporate-partners/images-1.png.bv.webp", alt: "Partner" },
  { src: "/images/logos/corporate-partners/images-2.png.bv.webp", alt: "Partner" },
  { src: "/images/logos/corporate-partners/kidzen-logo.png.bv.webp", alt: "Kidzen" },
  { src: "/images/logos/corporate-partners/proeves-logo.png.bv.webp", alt: "Proeves" },
  { src: "/images/logos/corporate-partners/Zinnia-Home-1.png.bv.webp", alt: "Zinnia" },
];

const LogoGrid = ({ logos }) => (
  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
    {logos.map((logo, i) => (
      <div
        key={i}
        className="aspect-square bg-white rounded-lg flex items-center justify-center p-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      >
        <img
          src={logo.src}
          alt={logo.alt}
          className="max-w-full max-h-full object-contain"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>
    ))}
  </div>
);

const Solutions = () => {
  return (
    <section className="py-24 bg-[#e0872b] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12 text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-schoolbell text-white font-bold mb-4"
        >
          Solutions For All Lifestyles
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/90 max-w-2xl mx-auto text-lg"
        >
          We offer family solutions for the diverse and multi-cultural global community.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 shadow-xl"
        >
          <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
            <img
              src="https://myschoolitaly.com/wp-content/uploads/al_opt_content/IMAGE/myschoolitaly.com/wp-content/uploads/2024/10/happy-indian-family-portrait-generative-ai.jpg.bv.webp?bv_host=myschoolitaly.com"
              alt="Working Parents"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-2xl font-schoolbell text-[#2f9ed9] font-bold mb-3 text-center">
            Working Parents
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-center">
            Working parents look no further. We are a flexible nursery offering solutions and services to fit your schedule, from convenient locations and flexible hours, to meal service and tools that allow you to be connected to your child at any time. Always close to you, be it your home or your office. We care for over 1200 children daily!
          </p>
          <LogoGrid logos={workingParentLogos} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-10 shadow-xl"
        >
          <div className="rounded-2xl overflow-hidden mb-6 shadow-lg">
            <img
              src="https://myschoolitaly.com/wp-content/uploads/al_opt_content/IMAGE/myschoolitaly.com/wp-content/uploads/2024/10/asian-indian-business-people-corporate-culture-working-office-concept-with-laptop-papers-meetings-presentations-discussions.jpg.bv.webp?bv_host=myschoolitaly.com"
              alt="Corporate Partners"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="text-2xl font-schoolbell text-[#2f9ed9] font-bold mb-3 text-center">
            Corporate Partners
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-center">
            We work with companies and corporations and provide tailor-made family solutions to employees. Our goal is to become an asset to your work place by sharing your employees' family responsibility, thereby allowing them to become a more productive part of your business.
          </p>
          <LogoGrid logos={corporatePartnerLogos} />
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
