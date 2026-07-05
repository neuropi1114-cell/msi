import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export const metadata = {
  title: 'About Us',
  description: 'Discover the story behind My School ITALY — a neuroscience-based preschool founded by Dr. Jessy Costantino. Learn about our mission, values, and global network.',
  alternates: { canonical: 'https://myschoolitaly.com/about' },
};

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="bg-msi-purple py-20 text-white">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-schoolbell font-bold mb-4">About My School ITALY</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Where neuroscience meets nurture — a global community of early learners.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-12 max-w-4xl">
            <h2 className="text-3xl font-schoolbell text-msi-purple font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Founded in 2017 by Dr. Jessy Costantino, My School ITALY was born from a simple yet powerful vision: to revolutionize early childhood education by putting brain science at the heart of every classroom. Dr. Costantino, a passionate advocate for neurodevelopmental research, recognized that the first seven years of life represent a once-in-a-lifetime window of opportunity for shaping a child's cognitive, emotional, and social foundation.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              What started as a single preschool in Italy has grown into an international network of neuroscience-based early learning centers spanning Italy, the United Arab Emirates, and India. Today, we care for over 1,200 children daily across multiple locations, partnering with leading corporations to provide accessible, high-quality childcare solutions for working families.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Our proprietary NeuroPi Study Technology — grounded in the science of neuroplasticity — sets us apart. Every activity, from sensory play for infants to inquiry-based projects for kindergarteners, is designed to strengthen neural connections, build executive function, and nurture a lifelong love of learning.
            </p>

            <h2 className="text-3xl font-schoolbell text-msi-purple font-bold mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To make neuroscience-based early childhood education accessible to every child, everywhere. We believe that every child is born brilliant — and with the right environment, guidance, and stimulation, that brilliance can flourish.
            </p>

            <h2 className="text-3xl font-schoolbell text-msi-purple font-bold mb-6">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { title: 'Science-Driven', text: 'Every practice is rooted in peer-reviewed neuroscience research on early brain development.' },
                { title: 'Holistic Nurture', text: 'We care for the whole child — mind, body, and emotional well-being.' },
                { title: 'Global Community', text: 'We build bridges across cultures, serving families in Italy, UAE, India, and beyond.' },
              ].map((v) => (
                <div key={v.title} className="bg-[#f7f9fc] p-6 rounded-2xl">
                  <h3 className="text-xl font-bold text-msi-purple mb-2">{v.title}</h3>
                  <p className="text-gray-600">{v.text}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-schoolbell text-msi-purple font-bold mb-6">Our Locations</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              From our roots in Bari, Italy, to our flagship centers in Hyderabad, India, and Dubai, UAE — My School ITALY is proud to serve diverse communities worldwide. We are rapidly expanding across India with centers in Pune, Mumbai, Jaipur, Noida, Odisha, and Andhra Pradesh.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
