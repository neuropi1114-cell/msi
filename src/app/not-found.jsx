import React from 'react';
import Link from 'next/link';
import { Home, MapPin, GraduationCap, PhoneCall } from 'lucide-react';
import TopBar from '../components/layout/TopBar';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

export const metadata = {
  title: '404 — Page Not Found | My School ITALY',
  description: 'The page you are looking for does not exist or has been moved. Return to My School ITALY homepage or explore our Hyderabad campuses.',
  robots: 'noindex, follow',
};

export default function NotFound() {
  return (
    <>
      <TopBar />
      <Header />

      <main className="min-h-[70vh] bg-gradient-to-b from-purple-50/60 via-white to-orange-50/40 flex items-center justify-center py-16 px-4">
        <div className="max-w-3xl w-full text-center">
          
          {/* Animated 404 Badge */}
          <div className="inline-block relative mb-6">
            <span className="text-8xl sm:text-9xl font-extrabold font-linotte text-transparent bg-clip-text bg-gradient-to-r from-msi-purple via-msi-orange to-msi-yellow tracking-wider drop-shadow-sm select-none">
              404
            </span>
            <div className="absolute -top-2 -right-4 bg-msi-orange text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest rotate-12 shadow-md">
              Oops!
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-linotte font-bold text-msi-purple uppercase mb-4">
            Page Not Found
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto mb-8 font-medium leading-relaxed">
            We couldn’t find the page you’re looking for. It might have been moved, renamed, or no longer exists.
          </p>

          {/* Quick Action Navigation Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-10 text-left">
            <Link
              href="/"
              className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-md hover:border-msi-purple transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-msi-purple flex items-center justify-center group-hover:bg-msi-purple group-hover:text-white transition-colors">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-msi-purple text-sm group-hover:text-msi-orange transition-colors">Homepage</h3>
                <p className="text-xs text-gray-500">Back to My School ITALY main page</p>
              </div>
            </Link>

            <Link
              href="/hyderabad"
              className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-md hover:border-msi-orange transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-msi-orange flex items-center justify-center group-hover:bg-msi-orange group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-msi-purple text-sm group-hover:text-msi-orange transition-colors">Hyderabad Hub</h3>
                <p className="text-xs text-gray-500">Explore all campus locations & maps</p>
              </div>
            </Link>

            <Link
              href="/programs"
              className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-md hover:border-msi-purple transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center group-hover:bg-msi-yellow group-hover:text-msi-purple transition-colors">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-msi-purple text-sm group-hover:text-msi-orange transition-colors">Our Programs</h3>
                <p className="text-xs text-gray-500">Preschool, Crèche & Daycare curricula</p>
              </div>
            </Link>

            <Link
              href="/contact-us"
              className="p-4 rounded-2xl bg-white border border-purple-100 shadow-sm hover:shadow-md hover:border-msi-orange transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center group-hover:bg-msi-blue group-hover:text-white transition-colors">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-msi-purple text-sm group-hover:text-msi-orange transition-colors">Contact Us</h3>
                <p className="text-xs text-gray-500">Book a tour or send an inquiry</p>
              </div>
            </Link>
          </div>

          <div className="flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-msi-orange hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-full text-base shadow-md transition-all hover:scale-105"
            >
              <span>RETURN TO HOMEPAGE &rarr;</span>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
