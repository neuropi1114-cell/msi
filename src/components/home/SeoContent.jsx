import React from 'react';
import { Brain, Heart, Sparkles } from 'lucide-react';

const programs = [
  {
    icon: Brain,
    title: 'Play-Based Learning & Brain Development',
    description:
      'Our NeuroPi Study Technology leverages neuroplasticity — the brain\'s remarkable ability to rewire itself through experience — to build strong neural pathways during the critical first years of life. Every game, song, and hands-on activity is intentionally designed to stimulate cognitive development, enhance memory retention, and foster problem-solving skills. From sensory exploration for infants to inquiry-based projects for preschoolers, our curriculum transforms natural curiosity into a lifelong love of learning. Research shows that 90% of brain development occurs before age 5, making every moment at My School ITALY a investment in your child\'s future.',
  },
  {
    icon: Heart,
    title: 'Emotional Intelligence & Social Growth',
    description:
      'We believe academic excellence and emotional well-being go hand in hand. Our educators are trained in mindfulness practices, conflict resolution, and relationship-building techniques that help children identify and regulate their emotions. Through guided group activities, storytelling circles, and collaborative projects, children develop empathy, resilience, and strong communication skills. Our inclusive, warm environment ensures every child feels seen, heard, and valued — laying the foundation for healthy relationships and self-confidence that will serve them for a lifetime.',
  },
  {
    icon: Sparkles,
    title: 'Early Brain Development Programs (45 Days – 7 Years)',
    description:
      'From our Infant Program (45 days–18 months) with gentle sensory stimulation and attachment-based care, to our Toddler Program (18 months–3 years) focused on language acquisition and motor skills, through our Preschool (3–5 years) and Kindergarten (5–7 years) programs that emphasize school readiness, critical thinking, and creativity — every stage is backed by the latest neuroscience research. We also offer enriching extracurriculars including Robotics, Gymnastics, Neurobics, Dance, and Storytelling to support holistic development.',
  },
];

export default function SeoContent() {
  return (
    <section className="py-24 bg-white" aria-labelledby="programs-heading">
      <div className="container mx-auto px-4 md:px-12">
        <div className="text-center mb-16">
          <h2 id="programs-heading" className="text-4xl md:text-5xl font-schoolbell text-msi-purple font-bold mb-4">
            A Neuroscience-Based Approach to Early Childhood Education
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            At My School ITALY, we blend cutting-edge brain science with the warmth of Italian-inspired education to nurture confident, curious, and compassionate children. Here is how our unique method prepares your child for a bright future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <article key={index} className="bg-[#f7f9fc] rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-msi-purple/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-msi-purple" />
                </div>
                <h3 className="text-xl font-bold text-msi-purple mb-4">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-16 bg-msi-purple rounded-3xl p-10 md:p-14 text-center text-white">
          <h3 className="text-3xl font-schoolbell font-bold mb-4">Why Parents Choose My School ITALY</h3>
          <p className="text-white/90 text-lg max-w-4xl mx-auto leading-relaxed mb-8">
            Our neuroscience-based preschool and daycare chain serves over 1,200 children daily across Italy, UAE, and India. With locations in Hyderabad, Pune, Mumbai, Jaipur, Noida, Odisha, Andhra Pradesh, and expanding globally, we make world-class early childhood education accessible to every family. Our flexible programs accommodate working parents with extended hours, nutritious meals, and real-time updates so you stay connected to your child throughout the day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/admissions" className="inline-block bg-msi-orange text-white font-bold py-3 px-8 rounded-full hover:bg-msi-orange/90 transition-colors">
              Enroll Now
            </a>
            <a href="/contact" className="inline-block bg-white/20 text-white font-bold py-3 px-8 rounded-full hover:bg-white/30 transition-colors">
              Book a Tour
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
