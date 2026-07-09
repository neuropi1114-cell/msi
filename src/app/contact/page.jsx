import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';
import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with My School ITALY. Find a location near you, book a tour, or ask about our neuroscience-based preschool and daycare programs.',
  alternates: { canonical: 'https://myschoolitaly.com/contact' },
};

const offices = [
  {
    country: 'ITALY',
    address: 'Piazza Luigi Di Savoia 40, Bari 70121',
    phone: '+39 123 456 7890',
  },
  {
    country: 'UAE',
    address: 'Dubai Silicon Oasis, Dubai',
    phone: '+971 4 123 4567',
  },
  {
    country: 'INDIA (Head Office)',
    address: 'Hitex Road, next to Hitex Exhibition Centre Gate, Izzathnagar, Hyderabad, Telangana 500084',
    phone: '+91 70939 04680',
    email: 'info@myschoolitaly.com',
  },
];

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="bg-msi-purple py-20 text-white">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl  font-bold mb-4">Contact Us</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              We would love to hear from you. Reach out to learn more about our programs or book a visit.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <h2 className="text-3xl  text-msi-purple font-bold mb-4 text-center">Our Locations</h2>
            <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-14">
              Find the My School ITALY center nearest to you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {offices.map((office) => (
                <div key={office.country} className="bg-[#f7f9fc] p-8 rounded-3xl shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-msi-purple mb-4">{office.country}</h3>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-msi-orange mr-3 flex-shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </div>
                    {office.phone && (
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-msi-orange mr-3 flex-shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="hover:text-msi-orange transition-colors">
                          {office.phone}
                        </a>
                      </div>
                    )}
                    {office.email && (
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-msi-orange mr-3 flex-shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:text-msi-orange transition-colors">
                          {office.email}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-16 flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59927.31454784344!2d78.37483150622329!3d17.449553422203582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMy%20School%20ITALY%20!5e1!3m2!1sen!2sin!4v1783349653941!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0, borderRadius: '1.5rem' }} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" className="max-w-5xl shadow-lg"></iframe>
            </div>

            <div className="bg-msi-purple rounded-3xl p-10 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Have Questions?</h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Our admissions team is ready to help. Call, email, or visit any of our centers to learn more about our neuroscience-based preschool and daycare programs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="mailto:info@myschoolitaly.com" className="inline-block bg-msi-orange text-white font-bold py-3 px-8 rounded-full hover:bg-msi-orange/90 transition-colors">
                  Email Us
                </a>
                <a href="tel:+917093904680" className="inline-block bg-white/20 text-white font-bold py-3 px-8 rounded-full hover:bg-white/30 transition-colors">
                  Call (+91) 70939 04680
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ContactUs />
      <Footer />
    </>
  );
}
