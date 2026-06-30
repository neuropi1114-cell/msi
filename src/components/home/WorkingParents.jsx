import { motion } from 'framer-motion';

const agencies = [
  "Accenture-Logo.jpg.bv.webp", "TCS-Logo.jpg.bv.webp", "Microsoft-Logo.jpg.bv.webp", "KWE-Logo.jpg.bv.webp",
  "Broadcom-Logo.jpg.bv.webp", "ICICI-Bank-Logo.jpg.bv.webp", "Vodafone-Logo.jpg.bv.webp", "Amazon-Logo-1.jpg.bv.webp",
  "wipro-2.png.bv.webp", "ibm-1.png.bv.webp", "cognizant-1.png.bv.webp", "66d78f20fde2ae84afdc6040_optum-healthcare-logo.png.bv.webp",
  "Novartis-Logo.svg.png.bv_resized_desktop.png.bv.webp", "TSWREIS-Logo.jpg.bv.webp", "TTWREIS-Logo.jpg.bv.webp", "Tech-Mahindra-Logo.jpg.bv.webp",
  "Samudara-Infra-Logo.jpg.bv.webp", "Amaron-Logo.jpg.bv.webp", "QCIty.jpg.bv.webp", "Religare-Logo.jpg.bv.webp",
  "Amazon-Logo.jpg.bv.webp", "Vodafone-Logo-1.jpg.bv.webp", "hps.png.bv.webp", "novvvva.png.bv.webp",
  "hhimachal.png.bv.webp", "ppppresvas-1.png.bv.webp", "500px-Gemini-Consulting.svg.png.bv.webp", "ibm.svg",
  "images-1.png.bv.webp", "images-2.png.bv.webp", "proeves-logo.png.bv.webp"
];

export default function WorkingParents() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Column - Image */}
          <div className="md:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl relative"
            >
              <img 
              src="/images/working-parents/IMG_20221103_120159-1024x768-1.jpg.bv_resized_ipad.jpg.bv.webp" 
                alt="Working Parents" 
                className="w-full h-auto object-cover"
                onError={(e) => { e.target.src = '/images/working-parents/IMG_20241209_130110183_HDR_PORTRAIT-scaled-e1762244260784-1024x741.jpg.bv_resized_ipad.jpg.bv.webp'; }}
              />
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-schoolbell text-msi-purple font-bold mb-6"
            >
              Working Parents
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-8"
            >
              <p className="mb-4">
                Working parents look no further. We are a flexible nursery offering solutions and services to fit your schedule, from convenient locations and flexible hours, to meal service and tools that allow you to be connected to your child at any time.
              </p>
              <p>
                Always close to you, be it your home or your office. We care for over 1200 children daily!
              </p>
            </motion.div>

            {/* Small Grid for additional logos if needed, similar to the original site structure */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
                {agencies.map((agency, index) => (
                   <div key={index} className="bg-white rounded-lg p-2 flex items-center justify-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                     <img 
                       src={`/images/logos/working-parents/${agency}`} 
                       alt={`Partner ${index + 1}`} 
                       className="max-w-full h-12 object-contain"
                       onError={(e) => { e.target.style.display = 'none'; }}
                     />
                   </div>
                ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
