'use client';
import { motion } from 'framer-motion';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: "PRASAD GARAPATI",
    role: "Chairman",
    image: "/images/team/Untitled-design-5.png.bv_resized_ipad.png.bv.webp",
    link: "/prasad-garapati/",
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
            className="font-lato text-display-md md:text-display-lg text-msi-purple mb-4"
          >
            The people who make it happen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Behind every classroom, every programme, and every child&rsquo;s breakthrough — there&rsquo;s a team that cares deeply about getting it right.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <img src="/images/team/image-bee.png.bv.webp" alt="My School ITALY mascot bee" className="w-24 h-auto" loading="lazy" />
        </motion.div>

      </div>
    </section>
  );
}