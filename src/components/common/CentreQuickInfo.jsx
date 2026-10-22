import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Phone, Sparkles } from 'lucide-react';

export default function CentreQuickInfo({
  campusName,
  address,
  landmark,
  timings = 'Monday – Friday: 8:00 AM – 7:30 PM | Saturday: 8:30 AM – 2:00 PM',
  phone = '+91 70939 04680',
  phoneTel = '+917093904680',
  intro,
  catchmentAreas = [],
  directionsUrl,
  tourHref = '#enroll',
}) {
  return (
    <section className="py-8 bg-gradient-to-b from-white via-purple-50/30 to-white border-y border-purple-100/60">
      <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
        {/* Intro Highlight Banner */}
        {intro && (
          <div className="mb-6 p-6 rounded-2xl bg-white border border-purple-100 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-msi-orange shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider text-msi-purple">
                About Our {campusName}
              </span>
            </div>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed font-normal">
              {intro}
            </p>
            {catchmentAreas.length > 0 && (
              <div className="mt-4 pt-3 border-t border-purple-50 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  Key Catchment Areas:
                </span>
                {catchmentAreas.map((area, idx) => (
                  <span
                    key={idx}
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-msi-purple border border-purple-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 3 Key Details Cards: Address, Timings, Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Address & Landmark */}
          <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2 text-msi-purple font-linotte font-bold text-base uppercase">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-msi-purple flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3>Campus Address</h3>
              </div>
              <address className="not-italic text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                {address}
              </address>
              {landmark && (
                <p className="text-xs text-msi-orange font-semibold mt-1.5">
                  Landmark: {landmark}
                </p>
              )}
            </div>
            {directionsUrl && (
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center text-xs font-bold text-msi-purple hover:text-msi-orange transition-colors"
              >
                Get Directions on Google Maps &rarr;
              </a>
            )}
          </div>

          {/* Card 2: Operating Timings */}
          <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2 text-msi-orange font-linotte font-bold text-base uppercase">
                <div className="w-8 h-8 rounded-lg bg-orange-50 text-msi-orange flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <h3>Operating Timings</h3>
              </div>
              <div className="text-xs sm:text-sm text-gray-700 space-y-1 font-medium">
                <p>{timings}</p>
                <p className="text-xs text-gray-500 italic mt-1">
                  Flexible drop-off and extended-hours daycare available.
                </p>
              </div>
            </div>
            <span className="mt-4 inline-block text-xs font-semibold text-teal-700">
              Open Monday to Saturday
            </span>
          </div>

          {/* Card 3: Phone & School Tour */}
          <div className="p-5 rounded-2xl bg-white border border-purple-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 mb-2 text-teal-700 font-linotte font-bold text-base uppercase">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <h3>Admissions & Tour</h3>
              </div>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                Direct Desk:{' '}
                <a
                  href={`tel:${phoneTel}`}
                  className="font-bold text-msi-purple hover:underline"
                >
                  {phone}
                </a>
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Speak directly with our centre team or book an in-person campus walkthrough.
              </p>
            </div>
            <Link
              href={tourHref}
              className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-msi-purple hover:bg-[#271344] transition-colors shadow-xs"
            >
              Book School Tour
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
