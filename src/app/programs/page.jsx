import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export const metadata = {
  title: 'Programs',
  description: 'Explore My School ITALY neuroscience-based programs: Infant (45 days–18 months), Toddler (18 months–3 years), Preschool (3–5 years), and Kindergarten (5–7 years).',
  alternates: { canonical: 'https://myschoolitaly.com/programs' },
};

const programs = [
  {
    age: '45 days – 18 months',
    title: 'Infant Program',
    color: 'bg-pink-100 text-pink-800',
    features: [
      'Gentle sensory stimulation activities',
      'Attachment-based nurturing care',
      'Motor skill development through guided movement',
      'Soothing music and language exposure',
      'Low teacher-to-child ratio for individualized attention',
    ],
  },
  {
    age: '18 months – 3 years',
    title: 'Toddler Program',
    color: 'bg-blue-100 text-blue-800',
    features: [
      'Language acquisition and vocabulary building',
      'Coordination and fine motor skill activities',
      'Social interaction and parallel play guidance',
      'Introduction to routines and independence',
      'Sensory exploration and cause-effect learning',
    ],
  },
  {
    age: '3 – 5 years',
    title: 'Preschool Program',
    color: 'bg-green-100 text-green-800',
    features: [
      'NeuroPi Study Technology curriculum',
      'Pre-literacy and numeracy foundations',
      'Inquiry-based STEM exploration',
      'Emotional intelligence and mindfulness practices',
      'Creative arts, music, and movement',
    ],
  },
  {
    age: '5 – 7 years',
    title: 'Kindergarten Program',
    color: 'bg-purple-100 text-purple-800',
    features: [
      'School readiness and executive function training',
      'Critical thinking and problem-solving challenges',
      'Advanced literacy and mathematics',
      'Robotics, Gymnastics, and Neurobics electives',
      'Leadership and collaborative project work',
    ],
  },
];

export default function ProgramsPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="bg-msi-purple py-20 text-white">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-schoolbell font-bold mb-4">Our Programs</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Age-appropriate, neuroscience-based programs designed for every stage of early development.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <h2 className="text-3xl font-schoolbell text-msi-purple font-bold mb-4 text-center">
              A Program for Every Stage of Growth
            </h2>
            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-14">
              From infancy through kindergarten, each of our four core programs is built on the latest neuroscience research to ensure your child develops the cognitive, emotional, and social skills they need to thrive.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program) => (
                <article key={program.title} className="bg-[#f7f9fc] rounded-3xl p-8 shadow-lg border border-gray-100">
                  <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full mb-4 ${program.color}`}>
                    Ages {program.age}
                  </span>
                  <h3 className="text-2xl font-bold text-msi-purple mb-4">{program.title}</h3>
                  <ul className="space-y-2">
                    {program.features.map((f) => (
                      <li key={f} className="flex items-start text-gray-700">
                        <span className="text-msi-orange mr-2 mt-0.5">&#10003;</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-16 bg-msi-purple rounded-3xl p-10 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Enrichment Programs</h3>
              <p className="text-white/90 max-w-3xl mx-auto leading-relaxed">
                Beyond our core curriculum, we offer exciting extracurriculars including Robotics, Gymnastics, Neurobics (brain-boosting exercises), Dance, Storytelling, and Music — all designed to complement our neuroscience-based approach and give your child a well-rounded early education experience.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
