import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: "PRASAD GARAPATI",
    role: "Chairman",
    image: "/images/team/Untitled-design-5.png.bv_resized_ipad.png.bv.webp",
    link: "#"
  },
  {
    name: "Dr Aperna Volluru",
    role: "Founder and Managing Director",
    image: "/images/team/Dr-Aperna-Volluru.png.bv.webp",
    link: "#"
  },
  {
    name: "DR Dr Gseller Peter",
    role: "Venture Philanthropist",
    image: "/images/team/Dr-Dr-Gseller-Peter.png.bv.webp",
    link: "#"
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
            className="text-4xl md:text-5xl font-schoolbell text-msi-purple font-bold mb-4"
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
                {member.name}
              </h3>
              <p className="text-msi-orange font-medium text-lg">
                {member.role}
              </p>
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

      </div>
    </section>
  );
}
