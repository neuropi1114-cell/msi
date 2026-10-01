'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const campusCoords = {
  hitex: { lat: 17.4767, lng: 78.3705 },
  qcity: { lat: 17.4398, lng: 78.3478 },
  'q-city': { lat: 17.4398, lng: 78.3478 },
  avance: { lat: 17.4474, lng: 78.3772 },
  'avance-1': { lat: 17.4474, lng: 78.3772 },
  avance2: { lat: 17.4485, lng: 78.3780 },
  'avance-2': { lat: 17.4485, lng: 78.3780 },
  mindspace: { lat: 17.4435, lng: 78.3800 },
  kavuriHills: { lat: 17.4420, lng: 78.3890 },
  'kavuri-hills': { lat: 17.4420, lng: 78.3890 },
  cyberabad: { lat: 17.4260, lng: 78.3680 },
  'cyberabad-police-commissionerate': { lat: 17.4260, lng: 78.3680 },
  miyapur: { lat: 17.4960, lng: 78.3600 },
  kukatpally: { lat: 17.4849, lng: 78.4018 },
  kondapur: { lat: 17.4622, lng: 78.3668 },
  manikonda: { lat: 17.4018, lng: 78.3897 },
};

const LANDMARK_PRESETS = [
  { name: 'My Home Bhooja / Kondapur', campusId: 'kondapur', lat: 17.4640, lng: 78.3680, keywords: 'bhooja kondapur botanical garden apartment luxury gated community' },
  { name: 'Kondapur / Kothaguda Junction', campusId: 'kondapur', lat: 17.4622, lng: 78.3668, keywords: 'kondapur kothaguda chanda nagar hafeezpet' },
  { name: 'Aparna Sarovar / Nallagandla', campusId: 'kondapur', lat: 17.4680, lng: 78.3450, keywords: 'aparna sarovar zenith cyberzon nallagandla bhel' },
  { name: 'Hitex Exhibition Centre / Novotel', campusId: 'hitex', lat: 17.4767, lng: 78.3705, keywords: 'hitex novotel izzathnagar shilpa layout exhibition' },
  { name: 'Shilpa Layout / Kothaguda', campusId: 'hitex', lat: 17.4740, lng: 78.3720, keywords: 'shilpa layout izzathnagar hitex road' },
  { name: 'Cyber Towers / Hitec City Main Road', campusId: 'avance', lat: 17.4500, lng: 78.3810, keywords: 'cyber towers hitec city metro station madhapur' },
  { name: 'Avance Business Hub / Phoenix IT', campusId: 'avance', lat: 17.4474, lng: 78.3772, keywords: 'avance phoenix hub hitec city madhapur' },
  { name: 'Jayabheri Silicon County / Hitec City', campusId: 'avance', lat: 17.4485, lng: 78.3780, keywords: 'jayabheri silicon county valley apartment' },
  { name: 'Raheja Mindspace IT Park', campusId: 'mindspace', lat: 17.4435, lng: 78.3800, keywords: 'mindspace raheja building 12 building 20 inorbit' },
  { name: 'Inorbit Mall / Durgam Cheruvu Bridge', campusId: 'mindspace', lat: 17.4380, lng: 78.3880, keywords: 'inorbit mall cable bridge raidurg madhapur' },
  { name: 'Financial District / Nanakramguda / Q City', campusId: 'qcity', lat: 17.4398, lng: 78.3478, keywords: 'financial district nanakramguda q city waverock amazon capgemini' },
  { name: 'Wipro Circle / Gachibowli Financial Dist', campusId: 'qcity', lat: 17.4350, lng: 78.3480, keywords: 'wipro circle microsoft icici towers nanakramguda' },
  { name: 'Kavuri Hills / Jubilee Hills Checkpost', campusId: 'kavuri-hills', lat: 17.4420, lng: 78.3890, keywords: 'kavuri hills jubilee hills road 36 peddamma temple' },
  { name: 'Gachibowli / Cyberabad Police Commissionerate', campusId: 'cyberabad', lat: 17.4260, lng: 78.3680, keywords: 'gachibowli cyberabad commissionerate dlf bio diversity' },
  { name: 'DLF Cyber City / Gachibowli', campusId: 'cyberabad', lat: 17.4280, lng: 78.3620, keywords: 'dlf cyber city street food gachibowli gate 1 gate 2' },
  { name: 'Miyapur Metro / Allwyn X Roads', campusId: 'miyapur', lat: 17.4960, lng: 78.3600, keywords: 'miyapur metro station allwyn cross road hafeezpet' },
  { name: 'Kukatpally / KPHB / Nexus Forum Sujana Mall', campusId: 'kukatpally', lat: 17.4849, lng: 78.4018, keywords: 'kukatpally kphb forum sujana mall housing board' },
  { name: 'Manikonda / Puppalguda / Lanco Hills', campusId: 'manikonda', lat: 17.4018, lng: 78.3897, keywords: 'manikonda puppalguda lanco hills narsingi khajaguda' },
];

function getDistanceInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return parseFloat((R * c).toFixed(1));
}

export default function CampusLocationModule({
  campuses = null,
  eyebrow = "Find us in HiTech City, Hyderabad",
  campusName = "My School Italy — Hitex",
  subtitle = null,
  description = "My School ITALY HITEX brings MSI’s neuroscience-informed early-years approach closer to families in Izzathnagar, Shilpa Layout, Kothaguda, Kondapur, Hafeezpet, Madhapur and the wider HiTech City corridor.",
  address = "Hitex Road, next to HITEX Exhibition Centre Gate, Shilpa Layout, Izzathnagar, Hyderabad 500084",
  nearby = "Izzathnagar • Shilpa Layout • Kothaguda • Kondapur • Hafeezpet • Madhapur • HiTech City",
  landmark = "Next to HITEX Exhibition Centre Gate",
  distanceHeading = "How Close Is MSI HITEX to Your Neighbourhood?",
  distanceBlock = [
    { area: "Izzathnagar", distance: "0.5–2 km", time: "3–8 min" },
    { area: "Shilpa Layout", distance: "0.5–2 km", time: "3–8 min" },
    { area: "Kothaguda", distance: "2–4 km", time: "8–15 min" },
    { area: "Kondapur", distance: "3–5 km", time: "10–18 min" },
    { area: "Hafeezpet", distance: "4–7 km", time: "12–25 min" },
    { area: "Madhapur", distance: "4–7 km", time: "12–25 min" },
  ],
  googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.436156515814!2d78.3705013!3d17.4766957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c69d117a9d%3A0xcb96668338dda37c!2sMy%20School%20ITALY%20%7C%20Hitex!5e0!3m2!1sen!2sin!4v1790392418324!5m2!1sen!2sin",
  directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Hitex",
  contactHref = "#enroll-hitex",
  contactText = "BOOK A CENTRE TOUR",
  slug = null,
  className = "py-12 md:py-16 bg-white border-t border-purple-100/60",
}) {
  const [nearestCampus, setNearestCampus] = useState(null);
  const [nearestDistance, setNearestDistance] = useState(null);
  const [selectedArea, setSelectedArea] = useState('');
  const [campusDistances, setCampusDistances] = useState({});
  const [selectedLandmarkName, setSelectedLandmarkName] = useState('');

  const processCoordinates = (lat, lng, areaName = '') => {
    let closest = null;
    let minDistance = Infinity;
    const distancesMap = {};

    const activeCampuses = campuses || [];
    activeCampuses.forEach((c) => {
      const coords = campusCoords[c.id] || { lat: 17.4474, lng: 78.3772 };
      const dist = getDistanceInKm(lat, lng, coords.lat, coords.lng);
      distancesMap[c.id] = dist;
      if (dist < minDistance) {
        minDistance = dist;
        closest = c;
      }
    });

    setCampusDistances(distancesMap);
    if (closest) {
      setNearestCampus(closest);
      setNearestDistance(minDistance);
      setSelectedLandmarkName(areaName);

      setTimeout(() => {
        const cardEl = document.getElementById(`campus-card-${closest.id}`);
        if (cardEl) {
          cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  };

  const handleSelectArea = (e) => {
    const areaVal = e.target.value;
    setSelectedArea(areaVal);

    if (!areaVal) {
      setNearestCampus(null);
      setNearestDistance(null);
      setCampusDistances({});
      setSelectedLandmarkName('');
      return;
    }

    const preset = LANDMARK_PRESETS.find((p) => p.name === areaVal);
    if (preset) {
      processCoordinates(preset.lat, preset.lng, preset.name);
    }
  };

  // If campuses array is provided, render ALL campuses with alternating sides and nearest center finder
  if (campuses && campuses.length > 0) {
    return (
      <section id="campus-location" className="py-8 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
          
          {/* Geolocation / Nearest Center Interactive Finder (Swiggy/Zomato Pinpoint Style) */}
          <div className="mb-12 md:mb-16 bg-gradient-to-r from-purple-50 via-white to-orange-50 border border-purple-200/80 rounded-3xl p-6 sm:p-8 shadow-md text-center relative">
            <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-purple uppercase mb-2 flex items-center justify-center gap-2">
              <MapPin className="w-6 h-6 text-msi-orange shrink-0 animate-bounce" />
              Find Nearest Center to Me
            </h3>
            <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Select your area or landmark from the dropdown below to instantly locate the closest My School ITALY campus.
            </p>

            {/* Pure Dropdown Selector */}
            <div className="max-w-md mx-auto relative">
              <select
                value={selectedArea}
                onChange={handleSelectArea}
                className="w-full appearance-none bg-white border-2 border-purple-200 rounded-full px-6 py-4 pr-12 text-sm sm:text-base font-bold text-msi-purple focus:outline-none focus:ring-2 focus:ring-msi-purple shadow-sm cursor-pointer hover:border-msi-orange transition-colors"
              >
                <option value="">Select Your Area / Landmark</option>
                {LANDMARK_PRESETS.map((preset) => (
                  <option key={preset.name} value={preset.name}>
                    📍 {preset.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-msi-purple">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Selected Landmark Result Card */}
            {nearestCampus && (
              <div className="mt-6 p-4 sm:p-5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-2xl max-w-xl mx-auto text-left shadow-md">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    Closest Center Matched!
                  </span>
                  <span className="text-xs font-bold bg-green-600 text-white px-3 py-1 rounded-full shadow-xs">
                    ~{nearestDistance} km away
                  </span>
                </div>

                {selectedLandmarkName && (
                  <div className="mb-2 p-2.5 bg-white/80 border border-green-200 rounded-xl text-xs text-gray-700 flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-msi-orange shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-gray-900 block">Selected Area / Landmark:</span>
                      <span>{selectedLandmarkName}</span>
                    </div>
                  </div>
                )}

                <h4 className="text-lg font-bold text-msi-purple font-linotte uppercase">
                  {nearestCampus.fullName || nearestCampus.name}
                </h4>
                <p className="text-xs text-gray-600 mt-1">{nearestCampus.address}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      const el = document.getElementById(`campus-card-${nearestCampus.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="text-xs font-bold bg-msi-orange text-white px-4 py-2 rounded-xl shadow-xs hover:bg-orange-600 transition-colors cursor-pointer"
                  >
                    View Details &rarr;
                  </button>
                  {nearestCampus.directionsUrl && (
                    <a
                      href={nearestCampus.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold bg-white text-blue-600 border border-blue-200 px-4 py-2 rounded-xl shadow-xs hover:bg-blue-50 transition-colors"
                    >
                      Open Directions in Maps &rarr;
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Render ALL Campuses Vertically with Alternating Sides ("Vice Versa") */}
          <div className="space-y-16 md:space-y-24">
            {campuses.map((c, index) => {
              const isEven = index % 2 === 0;
              const distToUser = campusDistances[c.id];

              return (
                <div
                  key={c.id}
                  id={`campus-card-${c.id}`}
                  className="scroll-mt-24 pb-12 md:pb-20 border-b border-purple-100/80 last:border-0 last:pb-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
                    
                    {/* Details Column with ScrollReveal */}
                    <ScrollReveal
                      direction={isEven ? 'right' : 'left'}
                      delay={0.1}
                      duration={0.6}
                      className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div>
                        {/* Zone / Eyebrow Badge */}
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <span className="text-xs font-bold text-white bg-msi-purple px-3 py-0.5 rounded-full">
                            {c.zone || 'Hyderabad'}
                          </span>
                          {c.badge && (
                            <span className="text-xs font-semibold text-msi-orange bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
                              {c.badge}
                            </span>
                          )}
                          {distToUser !== undefined && (
                            <span className="text-xs font-bold text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full">
                              📍 {distToUser} km from you
                            </span>
                          )}
                        </div>

                        {/* Campus Name */}
                        <h2 className="text-2xl sm:text-3xl font-linotte font-bold text-msi-orange leading-tight uppercase mb-3">
                          {c.fullName || c.name}
                        </h2>

                        {/* Description */}
                        {c.description && (
                          <p className="text-msi-purple text-sm sm:text-base leading-relaxed mb-5 font-normal">
                            {c.description}
                          </p>
                        )}

                        {/* Address Box */}
                        {c.address && (
                          <div className="flex items-start gap-3 p-4 rounded-[12px] bg-purple-50/50 border border-purple-100 mb-5">
                            <Image
                              src="/images/googleMaps.svg"
                              alt="Location Pin"
                              width={22}
                              height={22}
                              className="w-5.5 h-5.5 shrink-0 mt-0.5 object-contain"
                            />
                            <div>
                              <span className="text-xs uppercase font-bold text-msi-purple/70 tracking-wider block mb-0.5">Address</span>
                              <p className="text-sm font-semibold text-msi-purple-deep leading-snug">
                                {c.address}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Drive Times Matrix */}
                        {c.driveTimes && c.driveTimes.length > 0 && (
                          <div className="mb-5 p-4 rounded-[12px] bg-purple-50/30 border border-purple-100/80">
                            <span className="text-xs uppercase font-bold text-msi-purple tracking-wider block mb-2">
                              Drive-Times to {c.name}
                            </span>
                            <div className="grid grid-cols-2 gap-2 text-xs">
                              {c.driveTimes.map((item, idx) => (
                                <div key={idx} className="flex flex-col bg-white p-2 rounded-[8px] border border-purple-100/60 shadow-2xs">
                                  <span className="font-bold text-msi-purple">{item.area}</span>
                                  <span className="text-[11px] text-msi-purple/75">
                                    {item.distance ? `Approx. ${item.distance} • ` : ''}{item.time}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Landmark Info */}
                        {c.landmark && (
                          <div className="text-xs sm:text-sm text-msi-purple">
                            <span className="font-bold text-msi-purple">Landmark: </span>
                            <span className="text-msi-purple/80 font-medium">{c.landmark}</span>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        {c.directionsUrl && (
                          <a
                            href={c.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[12px] bg-msi-yellow hover:bg-yellow-400 text-msi-purple-deep font-bold text-xs sm:text-sm shadow-xs transition-colors hover:scale-102"
                          >
                            <Image
                              src="/images/navigate.png"
                              alt="Navigate Directions"
                              width={18}
                              height={18}
                              className="w-4 h-4 shrink-0 object-contain"
                            />
                            <span>Get Directions</span>
                          </a>
                        )}

                        {c.slug && (
                          <Link
                            href={c.slug}
                            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[12px] bg-msi-purple hover:bg-purple-900 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xs transition-colors hover:scale-102"
                          >
                            <span>Explore Campus</span>
                          </Link>
                        )}
                      </div>

                    </ScrollReveal>

                    {/* Google Maps Column with ScrollReveal */}
                    <ScrollReveal
                      direction={isEven ? 'left' : 'right'}
                      delay={0.2}
                      duration={0.6}
                      className={`lg:col-span-7 flex ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div className="w-full h-[360px] lg:h-full min-h-[380px] lg:min-h-[440px] rounded-[16px] overflow-hidden border border-purple-100/80 shadow-md">
                        <iframe
                          src={c.googleMapsUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                          title={`${c.fullName || c.name} Google Maps Location`}
                          className="w-full h-full"
                        />
                      </div>
                    </ScrollReveal>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    );
  }

  // Standard Single-Campus Mode (backward compatible)
  return (
    <section id="campus-location" className={`${className} overflow-hidden`}>
      <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* Left Content Column (~40%) */}
          <ScrollReveal direction="right" delay={0.1} duration={0.6} className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              {eyebrow && (
                <h3 className="text-msi-purple font-semibold text-sm tracking-wide block mb-1">
                  {eyebrow}
                </h3>
              )}

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-linotte font-bold text-msi-orange leading-tight uppercase mb-4">
                {campusName}
              </h2>

              {subtitle && (
                <p className="text-msi-purple/70 font-medium text-sm mb-4">
                  {subtitle}
                </p>
              )}

              {description && (
                <p className="text-msi-purple text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {description}
                </p>
              )}

              {address && (
                <div className="flex items-start gap-3 p-4 rounded-[12px] bg-purple-50/50 border border-purple-100 mb-6">
                  <Image
                    src="/images/googleMaps.svg"
                    alt="Location Pin"
                    width={22}
                    height={22}
                    className="w-5.5 h-5.5 shrink-0 mt-0.5 object-contain"
                  />
                  <div>
                    <span className="text-xs uppercase font-bold text-msi-purple/70 tracking-wider block mb-0.5">Address</span>
                    <p className="text-sm font-semibold text-msi-purple-deep leading-snug">
                      {address}
                    </p>
                  </div>
                </div>
              )}

              {distanceBlock && distanceBlock.length > 0 && (
                <div className="mb-6 p-4 rounded-[12px] bg-purple-50/30 border border-purple-100/80">
                  <span className="text-xs uppercase font-bold text-msi-purple tracking-wider block mb-2.5">
                    {distanceHeading}
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {distanceBlock.map((item, idx) => (
                      <div key={idx} className="flex flex-col bg-white p-2 rounded-[8px] border border-purple-100/60 shadow-2xs">
                        <span className="font-bold text-msi-purple">{item.area}</span>
                        <span className="text-[11px] text-msi-purple/75">
                          {item.distance ? `Approx. ${item.distance} • ` : ''}{item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {landmark && (
                <div className="space-y-2.5 text-xs sm:text-sm text-msi-purple">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-msi-purple min-w-[80px]">Landmark:</span>
                    <span className="text-msi-purple/80 font-medium">{landmark}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              {directionsUrl && (
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-[12px] bg-msi-yellow hover:bg-yellow-400 text-msi-purple-deep font-bold text-sm shadow-xs transition-colors hover:scale-102"
                >
                  <Image
                    src="/images/navigate.png"
                    alt="Navigate Directions"
                    width={20}
                    height={20}
                    className="w-5 h-5 shrink-0 object-contain"
                  />
                  <span>Get Directions</span>
                </a>
              )}

              {slug && (
                <Link
                  href={slug}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[12px] bg-msi-purple hover:bg-purple-900 text-white font-bold text-sm uppercase tracking-wider shadow-xs transition-colors hover:scale-102"
                >
                  <span>Explore Campus</span>
                </Link>
              )}

              {contactHref && !slug && (
                <a
                  href={contactHref}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-[12px] bg-msi-blue hover:bg-msi-blue/90 text-white font-bold text-sm uppercase tracking-wider shadow-xs transition-colors hover:scale-102"
                >
                  <span>{contactText}</span>
                </a>
              )}
            </div>

          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.25} duration={0.6} className="lg:col-span-7 flex">
            <div className="w-full h-[340px] lg:h-full min-h-[380px] lg:min-h-[460px] rounded-[16px] overflow-hidden border border-purple-100/80 shadow-md relative">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={`${campusName} Google Maps Location`}
                className="w-full h-full"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
