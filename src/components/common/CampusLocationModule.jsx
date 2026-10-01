'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function CampusLocationModule({
  // Multi-campus mode prop (Pass array of campus objects to show all maps with alternating sides)
  campuses = null,

  // Single-campus default props (backward compatible)
  eyebrow = "Find us in HiTech City, Hyderabad",
  campusName = "My School Italy — Hitex",
  subtitle = null,
  description = "My School ITALY HITEX brings MSI’s neuroscience-informed early-years approach closer to families in Izzathnagar, Shilpa Layout, Kothaguda, Kondapur, Hafeezpet, Madhapur and the wider HiTech City corridor. The centre offers families a convenient early-learning and care option that can fit naturally into everyday home-and-work routines.",
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
  directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Hitex&destination_place_id=ChIJnXoRncaTyzsRfNDdq4Nml8s",
  contactHref = "#enroll-hitex",
  contactText = "BOOK A CENTRE TOUR",
  slug = null,
  className = "py-12 md:py-16 bg-white border-t border-purple-100/60",
}) {
  // If campuses array is provided, render ALL campuses with alternating ("vice versa") sides
  if (campuses && campuses.length > 0) {
    return (
      <section id="campus-location" className="py-8 md:py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-12 max-w-[1240px]">
          
          {/* Render ALL Campuses Vertically with Alternating Sides ("Vice Versa") */}
          <div className="space-y-16 md:space-y-24">
            {campuses.map((c, index) => {
              const isEven = index % 2 === 0;

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
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold text-white bg-msi-purple px-3 py-0.5 rounded-full">
                            {c.zone || 'Hyderabad'}
                          </span>
                          {c.badge && (
                            <span className="text-xs font-semibold text-msi-orange bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full">
                              {c.badge}
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
              {/* Eyebrow */}
              {eyebrow && (
                <h3 className="text-msi-purple font-semibold text-sm tracking-wide block mb-1">
                  {eyebrow}
                </h3>
              )}

              {/* Campus Name */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-linotte font-bold text-msi-orange leading-tight uppercase mb-4">
                {campusName}
              </h2>

              {/* Subtitle / City */}
              {subtitle && (
                <p className="text-msi-purple/70 font-medium text-sm mb-4">
                  {subtitle}
                </p>
              )}

              {/* Short Description */}
              {description && (
                <p className="text-msi-purple text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {description}
                </p>
              )}

              {/* Address Box */}
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

              {/* Neighbourhood Drive-Time Block */}
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

              {/* Landmark Info */}
              {landmark && (
                <div className="space-y-2.5 text-xs sm:text-sm text-msi-purple">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-msi-purple min-w-[80px]">Landmark:</span>
                    <span className="text-msi-purple/80 font-medium">{landmark}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
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

          {/* Right Map Column (~60%) */}
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
