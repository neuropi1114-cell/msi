'use client';

import React from 'react';
import Link from 'next/link';
import {
  BookOpen,
  ShieldCheck,
  HeartHandshake,
  Lock,
  LogIn,
  CheckCircle2,
  Sparkles,
  Award,
  Brain,
  Heart,
  Compass,
  ArrowRight
} from 'lucide-react';

const policyFramework = {
  title: 'THE MSI EARLY CHILDHOOD POLICY FRAMEWORK',
  subtitle: 'Development Before Performance • Understanding Before Expectation • The Child Before the System',
  intro:
    'At My School ITALY, every policy begins with the developing child. Our policies guide not only what we do, but also why it matters for a child’s learning, wellbeing, safety and development.',
  principles: [
    {
      number: '01',
      title: 'Development Before Performance',
      description: 'Prioritizing holistic developmental milestones over rigid academic pressure to ensure natural, joyful growth.',
      icon: Brain,
      accentBg: 'bg-[#488B27]/10 text-[#488B27] border-[#488B27]/30',
      borderHover: 'hover:border-[#488B27]',
      barColor: 'bg-[#488B27]',
    },
    {
      number: '02',
      title: 'Understanding Before Expectation',
      description: 'Empathetic guidance rooted in deep comprehension of early childhood psychology, brain development, and emotional readiness.',
      icon: Compass,
      accentBg: 'bg-[#D86B27]/10 text-[#D86B27] border-[#D86B27]/30',
      borderHover: 'hover:border-[#D86B27]',
      barColor: 'bg-[#D86B27]',
    },
    {
      number: '03',
      title: 'The Child Before the System',
      description: 'Placing the child’s individual pace, physical safety, and emotional happiness at the absolute center of every standard operating procedure.',
      icon: Heart,
      accentBg: 'bg-[#A62B82]/10 text-[#A62B82] border-[#A62B82]/30',
      borderHover: 'hover:border-[#A62B82]',
      barColor: 'bg-[#A62B82]',
    },
  ],
  categories: [
    {
      id: 'developmental',
      title: 'MSI DEVELOPMENTAL POLICIES',
      icon: BookOpen,
      count: 12,
      themeColor: '#488B27',
      titleClass: 'text-[#488B27]',
      headerBg: 'bg-gradient-to-r from-[#488B27]/10 via-[#488B27]/5 to-transparent',
      badgeBg: 'bg-[#488B27] text-white shadow-sm',
      pillBg: 'bg-[#488B27]/5 text-[#2d5717] border-[#488B27]/20 hover:bg-[#488B27]/15 hover:border-[#488B27]/40',
      description: 'Guiding foundational cognitive, physical, language, creative, and academic growth.',
      policies: [
        'Writing Readiness & Handwriting Policy',
        'Reading & Early Literacy Policy',
        'Mathematics Readiness Policy',
        'Screen & Digital Media Policy',
        'Play & Exploration Policy',
        'Movement & Physical Development Policy',
        'Individual Learning & Inclusion Policy',
        'Language & Communication Policy',
        'Storytelling & Books Policy',
        'Nature & Environmental Learning Policy',
        'Home Learning Policy',
        'Transition & School-Readiness Policy',
      ],
    },
    {
      id: 'care-protection',
      title: 'MSI CARE & PROTECTION POLICIES',
      icon: ShieldCheck,
      count: 23,
      themeColor: '#D86B27',
      titleClass: 'text-[#D86B27]',
      headerBg: 'bg-gradient-to-r from-[#D86B27]/10 via-[#D86B27]/5 to-transparent',
      badgeBg: 'bg-[#D86B27] text-white shadow-sm',
      pillBg: 'bg-[#D86B27]/5 text-[#9e4612] border-[#D86B27]/20 hover:bg-[#D86B27]/15 hover:border-[#D86B27]/40',
      description: 'Ensuring physical health, hygiene, emotional safety, and round-the-clock physical protection.',
      policies: [
        'INSPIRE ME EAT – Nutrition & Mealtime Policy',
        'Emotional Safety & Wellbeing Policy',
        'Positive Behaviour & Discipline Policy',
        'Settling-In & Separation Policy',
        'Sleep, Nap & Rest Policy',
        'Toilet Learning & Personal Care Policy',
        'Child Safeguarding & Protection Policy',
        'Physical Safety & Secure Handover Policy',
        'Health, Illness & Infection-Control Policy',
        'Medication Administration Policy',
        'Allergy & Anaphylaxis Policy',
        'First Aid, Accident & Incident Policy',
        'Emergency & Evacuation Policy',
        'Hygiene & Infection Prevention Policy',
        'Child Observation & Assessment Policy',
        'One Child – One Developmental Profile Policy',
        'Teacher-Child Interaction Policy',
        'Teacher Observation & Documentation Policy',
        'Inclusion, Diversity & Belonging Policy',
        'Outdoor Play & Weather Policy',
        'Transport & School Bus Safety Policy',
        'Birthday, Celebration & Food-from-Home Policy',
        'Toys, Personal Belongings & Comfort Objects Policy',
      ],
    },
    {
      id: 'partnership-practice',
      title: 'MSI PARTNERSHIP & PROFESSIONAL PRACTICE POLICIES',
      icon: HeartHandshake,
      count: 5,
      themeColor: '#A62B82',
      titleClass: 'text-[#A62B82]',
      headerBg: 'bg-gradient-to-r from-[#A62B82]/10 via-[#A62B82]/5 to-transparent',
      badgeBg: 'bg-[#A62B82] text-white shadow-sm',
      pillBg: 'bg-[#A62B82]/5 text-[#731a58] border-[#A62B82]/20 hover:bg-[#A62B82]/15 hover:border-[#A62B82]/40',
      description: 'Building transparent parent partnerships, data ethics, and high teacher standards.',
      policies: [
        'Parent Communication Policy',
        'Photography, CCTV & Child Digital Privacy Policy',
        'NeuroPi Data & Developmental Privacy Policy',
        'Visitors, Vendors & Contractors Policy',
        'Complaints, Concerns & Parent Escalation Policy',
      ],
    },
  ],
  cta: {
    heading: 'WANT TO KNOW MORE?',
    text: 'Please log in to explore each MSI Policy in detail and understand the principles and practices that guide everyday life at My School ITALY.',
  },
};

export default function PolicyFramework() {
  return (
    <div className="w-full bg-gradient-to-b from-slate-50 via-white to-slate-50 py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* ========================================================= */}
        {/* SECTION 1: HERO HEADER BLOCK */}
        {/* ========================================================= */}
        <section aria-labelledby="framework-heading" className="space-y-12">
          
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple border border-msi-purple/20 shadow-xs">
              <Award className="w-4 h-4 text-msi-orange" />
              <span>Institutional Excellence Standards</span>
            </div>

            <h1 
              id="framework-heading" 
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-msi-purple tracking-tight leading-tight"
            >
              {policyFramework.title}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium max-w-3xl mx-auto">
              {policyFramework.intro}
            </p>

            <div className="flex items-center justify-center gap-2 pt-2">
              <span className="h-1 w-12 rounded-full bg-msi-orange" />
              <Sparkles className="w-4 h-4 text-msi-yellow" />
              <span className="h-1 w-12 rounded-full bg-msi-green" />
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION 2: THREE CORE GUIDING PRINCIPLES */}
          {/* ========================================================= */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {policyFramework.principles.map((item) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={item.title} 
                  className={`group relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100/90 ${item.borderHover} flex flex-col justify-between overflow-hidden`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${item.barColor}`} />

                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${item.accentBg} shadow-xs`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                    </div>

                    <h2 className="text-xl font-extrabold text-gray-900 group-hover:text-msi-purple transition-colors leading-snug">
                      {item.title}
                    </h2>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-wider">
                    <span>Guiding Principle</span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-msi-orange group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* ========================================================= */}
          {/* SECTION 3: COMPREHENSIVE FRAMEWORK COVERAGE (HORIZONTAL CARDS) */}
          {/* ========================================================= */}
          <div className="space-y-10 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-gray-200 pb-5 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-msi-orange">
                  Framework Directory
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-msi-purple tracking-tight">
                  Comprehensive Framework Coverage
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Our framework covers 40 institutional policies across 3 core operational and developmental pillars.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-100 text-xs font-semibold text-gray-700 shrink-0">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600" />
                <span>40 Active Institutional Policies</span>
              </div>
            </div>

            {/* Horizontal Cards Layout */}
            <div className="space-y-8">
              {policyFramework.categories.map((category) => {
                const CategoryIcon = category.icon;
                return (
                  <div 
                    key={category.id} 
                    className="w-full bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Horizontal Card Header Banner */}
                    <div className={`p-6 sm:p-8 ${category.headerBg} border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white shadow-sm shrink-0 ${category.titleClass}`}>
                          <CategoryIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className={`text-xl font-black tracking-tight ${category.titleClass}`}>
                            {category.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-gray-600 font-medium mt-0.5">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      <div className="shrink-0">
                        <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-extrabold ${category.badgeBg}`}>
                          {category.count} Standardized Policies
                        </span>
                      </div>
                    </div>

                    {/* Horizontal Card Content: Policy Grid */}
                    <div className="p-6 sm:p-8 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                        {category.policies.map((policyName, idx) => (
                          <div
                            key={idx}
                            className={`flex items-center px-4 py-3 rounded-2xl border transition-all ${category.pillBg}`}
                          >
                            <span className="text-xs font-semibold leading-snug">
                              {policyName}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Card Footer Banner */}
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4 text-xs font-bold text-gray-800">
                        <div className="flex items-center gap-2.5">
                          <CheckCircle2 className="w-6 h-6 text-[#488B27] shrink-0" />
                          <span className="text-lg font-semibold">Enforced across all MSI centers</span>
                        </div>
                        <span className="text-gray-400 uppercase tracking-wider text-[11px]">
                          Pillar Category: {category.title}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION 4: CALL TO ACTION / LOG IN BANNER */}
          {/* ========================================================= */}
          <div className="relative overflow-hidden bg-msi-yellow rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-6 border border-amber-300">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-white/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-msi-purple text-white mb-2 shadow-md">
                <Lock className="w-7 h-7" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-msi-purple">
                {policyFramework.cta.heading}
              </h2>

              <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-semibold">
                {policyFramework.cta.text}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-bold text-sm bg-msi-purple hover:bg-msi-purple-deep text-white shadow-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Log In to Parent / Staff Portal</span>
                </Link>
                
                <Link
                  href="/book-your-tour"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-white/80 hover:bg-white text-msi-purple border border-msi-purple/20 transition-all"
                >
                  <span>Book a Campus Tour</span>
                </Link>
              </div>
            </div>
          </div>

        </section>

      </div>
    </div>
  );
}
