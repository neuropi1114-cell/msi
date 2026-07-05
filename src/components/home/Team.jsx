import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "PRASAD GARAPATI",
    role: "Chairman",
    image: "/images/team/Untitled-design-5.png.bv_resized_ipad.png.bv.webp",
    link: "https://myschoolitaly.com/prasad-garapati/",
    linkedin: "https://www.linkedin.com/in/prasad-garapati/"
  },
  {
    name: "Dr Aperna Volluru",
    role: "Founder and Managing Director",
    image: "/images/team/Dr-Aperna-Volluru.png.bv.webp",
    link: "#",
    linkedin: "#",
    website: "https://www.volluruaperna.com/"
  },
  {
    name: "DR Dr Gseller Peter",
    role: "Venture Philanthropist",
    image: "/images/team/Dr-Dr-Gseller-Peter.png.bv.webp",
    link: "#",
    linkedin: "#"
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-12">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-schoolbell text-msi-orange font-bold mb-4"
          >
            People Behind
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-3xl mx-auto text-center"
          >
            The People Behind have been working together to create a culture of innovation, quality, develop policies, set goals, and guide the organisation in ensuring products or services meet parent and educator expectations and comply with regulatory requirements.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-2xl font-schoolbell text-msi-purple font-bold mb-2 uppercase">
                <a href={member.link} className="hover:text-msi-orange transition-colors">
                  {member.name}
                </a>
              </h3>
              <p className="text-msi-orange font-medium text-lg">
                {member.role}
              </p>
              {member.linkedin && member.linkedin !== "#" && (
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              )}
              {member.website && (
                <a 
                  href={member.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-3 text-gray-600 hover:text-gray-800 transition-colors ml-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
        >
            <img src="/images/team/image-bee.png.bv.webp" alt="Bee" className="w-24 h-auto" />
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 max-w-4xl mx-auto"
        >
            <h3 className="text-3xl md:text-4xl font-schoolbell text-msi-purple font-bold mb-4 text-center">
                Every Child's Potential Becomes Our Purpose
            </h3>
            <p className="text-msi-orange text-2xl md:text-3xl text-center mb-6">MSI venture philanthropy</p>
            <p className="text-gray-600 text-center mb-6 leading-relaxed text-center">
                My School ITALY aims to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all (SDG 4). Our Training and Hiring programmes align to decent work and sustainable growth (SDG 8 target 8.6) to substantially reduce the proportion of youth not in employment, education, or training.
            </p>
            <div className="border-t border-gray-200 pt-6 mt-6">
                <p className="text-gray-700 font-medium text-center mb-2">Ritzy Schools Educational Society</p>
                <p className="text-gray-600 text-center mb-1">Email : ritzyschools@gmail.com</p>
                <p className="text-gray-600 text-center mb-4">Contact: Ms Roja , Program Manager</p>
                <div className="text-center">
                    <a href="#" className="inline-block bg-msi-orange text-white px-8 py-3 rounded-full font-medium hover:bg-msi-orange/90 transition-colors">
                        Read More
                    </a>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
}
