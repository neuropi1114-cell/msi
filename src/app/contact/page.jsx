import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/common/ContactUs';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with My School ITALY. Find a location near you, book a tour, or ask about our neuroscience-based preschool and daycare programs.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact Us | My School ITALY',
    description: 'Get in touch with My School ITALY. Find a location near you, book a tour, or ask about our neuroscience-based preschool and daycare programs.',
    url: '/contact',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us | My School ITALY',
    description: 'Get in touch with My School ITALY. Find a location near you, book a tour, or ask about our neuroscience-based preschool and daycare programs.',
  },
};

export default function ContactPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <section className="bg-msi-purple py-20 text-white">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
              My School ITALY Online Support gives 24/7 customer service and tech support and ensures that our friends, parents, and students are able to get their issues resolved no matter what day or time it is.
            </p>
            <p className="text-msi-orange font-medium text-lg max-w-2xl mx-auto">
              Get in touch today, and we’ll do our best to answer any questions you may have.
            </p>
          </div>
        </section>
        <div data-nav-sentinel />

        <ContactUs />

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-12">

            <div className="mb-16 flex justify-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d59927.31454784344!2d78.37483150622329!3d17.449553422203582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMy%20School%20ITALY%20!5e1!3m2!1sen!2sin!4v1783349653941!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0, borderRadius: '1.5rem' }} allowFullScreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin" className="max-w-5xl shadow-lg"></iframe>
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
      <Footer />
    </>
  );
}
