import React from 'react';
import { Baby, Clock, Sparkles, CheckCircle2, Heart, ShieldCheck, Users, Building2, Eye, Compass, Utensils, HelpCircle } from 'lucide-react';

/* --- Rich Beautiful Drawer Bodies for HITEX Campus --- */

export const hitexProgramsDrawer = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-orange-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        HITEX Campus Offerings
      </span>
      <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-orange tracking-tight uppercase">
        Programs Designed Around Your Child’s Day
      </h3>
      <p className="mt-2 text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">
        At My School ITALY HITEX, learning and care come together under one roof. From a baby’s first experience away from home to Kindergarten, families can choose programs that evolve with their child.
      </p>
    </div>

    {/* Section 1: Early Years */}
    <div className="p-5 bg-orange-50/90 border-l-4 border-msi-orange rounded-r-2xl shadow-2xs space-y-2">
      <div className="flex items-center gap-2 text-msi-orange font-bold text-base uppercase font-linotte">
        <Baby className="w-5 h-5 text-msi-orange shrink-0" />
        <h4>Early Years Learning</h4>
      </div>
      <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-medium">
        Baby Crèche (From 45 Days) &bull; Toddler / Playgroup &bull; Nursery &bull; K1 (Junior KG) &bull; K2 (Senior KG)
      </p>
      <p className="text-gray-600 text-xs italic">
        Nurturing curiosity, motor development, sensory discovery and social confidence in safe, age-appropriate spaces.
      </p>
    </div>

    {/* Section 2: Care */}
    <div className="p-5 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-2xl shadow-2xs space-y-2">
      <div className="flex items-center gap-2 text-msi-purple font-bold text-base uppercase font-linotte">
        <Clock className="w-5 h-5 text-msi-purple shrink-0" />
        <h4>Care & Extended Support</h4>
      </div>
      <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-medium">
        Full Daycare &bull; Extended Daycare &bull; Early Drop-Off &bull; Late Pick-Up &bull; Saturday & Holiday Care
      </p>
      <p className="text-gray-600 text-xs italic">
        Designed around working parents' schedules, providing continuous warmth, healthy meals, and restful care.
      </p>
    </div>

    {/* Section 3: Beyond Classroom */}
    <div className="p-5 bg-teal-50/90 border-l-4 border-teal-600 rounded-r-2xl shadow-2xs space-y-2">
      <div className="flex items-center gap-2 text-teal-700 font-bold text-base uppercase font-linotte">
        <Sparkles className="w-5 h-5 text-teal-600 shrink-0" />
        <h4>Beyond the Classroom</h4>
      </div>
      <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-medium">
        Gymnastics &bull; Neurobics &bull; Robotics &bull; Dance &bull; Storytelling &bull; Creative Arts &bull; Summer Camps
      </p>
      <p className="text-gray-600 text-xs italic">
        Expanding creative expression, physical agility, and cognitive curiosity through expert-guided activities.
      </p>
    </div>

    {/* Footer Accent Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-md text-center">
      <p className="font-bold text-amber-300 text-xs sm:text-sm tracking-wide uppercase font-linotte">
        “The result is continuity — one familiar environment for learning, care, development and enrichment.”
      </p>
    </div>
  </div>
);

export const hitexWhyUsDrawer = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-orange-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-orange/10 text-msi-orange mb-2">
        Why Families Choose MSI HITEX
      </span>
      <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-purple tracking-tight uppercase">
        Every Child Deserves To Be Known Before They Are Taught
      </h3>
      <p className="mt-2 text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">
        No two children arrive with the same temperament, confidence, curiosity, interests or way of learning. At MSI HITEX, we begin by observing and understanding the child — not by expecting every child to fit the same mould.
      </p>
    </div>

    {/* Pillars List */}
    <div className="space-y-3">
      <h4 className="font-bold text-msi-purple text-sm uppercase font-linotte">Our Core Foundations:</h4>
      {[
        { title: 'European Early-Years Foundations', icon: Compass, color: 'text-msi-purple' },
        { title: 'Neuroscience-Informed Practice', icon: Eye, color: 'text-msi-orange' },
        { title: 'Original Story-Based Learning', icon: Heart, color: 'text-msi-blue' },
        { title: 'Caring Teachers & Nutritious Meals', icon: Utensils, color: 'text-msi-green' },
        { title: 'Physical & Emotional Safety', icon: ShieldCheck, color: 'text-teal-700' }
      ].map((p, idx) => {
        const Icon = p.icon;
        return (
          <div key={idx} className="flex items-center gap-3 p-3.5 bg-white border border-gray-100 rounded-xl shadow-2xs">
            <div className={`w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 ${p.color}`}>
              <Icon className="w-4 h-4" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-800">{p.title}</span>
          </div>
        );
      })}
    </div>

    {/* The 4 Observational Questions */}
    <div className="p-5 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-2xl shadow-2xs space-y-3">
      <h4 className="font-bold text-msi-purple text-sm uppercase font-linotte">
        We Don't Only Ask: “What Did Your Child Learn Today?”
      </h4>
      <p className="text-xs sm:text-sm text-gray-700 font-medium">We also ask:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
        <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-purple-100">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>What interested them?</span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-purple-100">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>What challenged them?</span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-purple-100">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>What made them participate?</span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded-lg bg-white border border-purple-100">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>And how are they growing?</span>
        </div>
      </div>
    </div>

    {/* Footer Quote Banner */}
    <div className="p-4 rounded-xl bg-gradient-to-r from-msi-orange to-amber-500 text-white shadow-md text-center">
      <p className="font-bold text-xs sm:text-sm uppercase tracking-wide font-linotte">
        “Because understanding the child changes how we teach the child.”
      </p>
    </div>
  </div>
);

export const hitexNeuroPiDrawer = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-amber-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        The NeuroPi Way™
      </span>
      <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-purple tracking-tight uppercase">
        WE DON'T BEGIN WITH THE LESSON. WE BEGIN WITH THE CHILD.
      </h3>
      <p className="mt-2 text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">
        Traditional teaching often begins by asking: “What should we teach today?” The NeuroPi Way begins one step earlier: “Who is the child we are teaching?”
      </p>
    </div>

    {/* Observational Cycle */}
    <div className="p-5 bg-amber-50/90 border-l-4 border-amber-500 rounded-r-2xl shadow-2xs space-y-3">
      <h4 className="font-bold text-msi-purple text-sm uppercase font-linotte">
        5-Step Observational Cycle
      </h4>
      <div className="space-y-2 text-xs sm:text-sm">
        <div className="p-2.5 rounded-xl bg-white border border-amber-200">
          <strong className="text-msi-orange">01. OBSERVE:</strong> How the child approaches experiences & captured attention.
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-amber-200">
          <strong className="text-msi-orange">02. UNDERSTAND:</strong> Identifying curiosity, emotional responses, persistence & communication.
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-amber-200">
          <strong className="text-msi-orange">03. PERSONALISE:</strong> Designing thoughtful next steps tailored to individual readiness.
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-amber-200">
          <strong className="text-msi-orange">04. ENGAGE:</strong> Interactive, story-led learning activities that naturally motivate.
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-amber-200">
          <strong className="text-msi-orange">05. TRACK:</strong> Documenting developmental milestones and sharing progress with parents.
        </div>
      </div>
    </div>

    {/* Pedagogy Summary */}
    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
      At MSI HITEX, teachers observe how a child approaches an experience. What captures their attention? What makes them curious? How do they communicate? What happens when something becomes difficult? When do they persist, withdraw, ask for help or try another way? These observations help teachers make thoughtful decisions about what should happen next.
    </p>

    {/* Footer Accent Banner */}
    <div className="p-4 rounded-xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-md text-center">
      <p className="font-bold text-amber-300 text-xs sm:text-sm uppercase tracking-wide font-linotte">
        “Because when we understand the child better, we can teach the child better.”
      </p>
    </div>
  </div>
);

export const hitexParentsDrawer = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-blue/10 text-msi-blue mb-2">
        Parent Partnership
      </span>
      <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-purple tracking-tight uppercase">
        PARENTS: YOU ARE NOT DROPPING YOUR CHILD AT SCHOOL. YOU ARE JOINING THEIR JOURNEY.
      </h3>
      <p className="mt-2 text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">
        Starting preschool or daycare is a milestone for the whole family. At MSI HITEX, we want you to know more than what your child “did” today — we want you to understand how they are settling in, participating, eating, resting, making friends, exploring, communicating and growing.
      </p>
    </div>

    {/* Formula Card */}
    <div className="p-5 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-2xl shadow-2xs text-center space-y-1">
      <span className="text-xs uppercase font-bold text-msi-purple tracking-wider block">Our Alignment</span>
      <h4 className="font-extrabold text-msi-purple text-base sm:text-lg font-linotte uppercase">
        HOME + SCHOOL = ONE CHILD, ONE CONNECTED JOURNEY.
      </h4>
      <p className="text-gray-600 text-xs">
        Because the people who understand a young child best should never feel like two separate teams.
      </p>
    </div>

    {/* Commitment Promise */}
    <div className="p-4 rounded-xl bg-gradient-to-r from-msi-orange to-amber-500 text-white shadow-md text-center">
      <p className="font-bold text-xs sm:text-sm uppercase tracking-wide font-linotte">
        “YOU KNOW YOUR CHILD. WE GET TO KNOW YOUR CHILD TOO. TOGETHER, WE SUPPORT THE JOURNEY.”
      </p>
    </div>
  </div>
);

export const hitexCorporateDrawer = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-50 via-white to-purple-50 border border-teal-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-600/10 text-teal-700 mb-2">
        HITEX – HiTech City Corridor
      </span>
      <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-purple tracking-tight uppercase">
        CORPORATE CHILDCARE: WHEN CHILDCARE IS CLOSER, THE WORKING DAY CAN FEEL DIFFERENT.
      </h3>
      <p className="mt-2 text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">
        For a working parent, distance is not measured only in kilometres. It is measured in the time between an office and a child. MSI HITEX gives companies in and around the HITEX–HiTech City corridor an opportunity to connect employees with professional childcare closer to where they work.
      </p>
    </div>

    {/* 4 Corporate Offerings */}
    <div className="p-5 bg-teal-50/90 border-l-4 border-teal-600 rounded-r-2xl shadow-2xs space-y-2">
      <h4 className="font-bold text-teal-700 text-sm uppercase font-linotte">
        Corporate Partnership Frameworks:
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-teal-100">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Corporate Preferred Access</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-teal-100">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Subsidy & Sponsorship Programs</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-teal-100">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Reserved Seats Guarantee</span>
        </div>
        <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-teal-100">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Extended-Hours Childcare</span>
        </div>
      </div>
    </div>

    {/* 3 Impact Cards */}
    <div className="space-y-3">
      <div className="p-3.5 bg-orange-50/80 border border-orange-200 rounded-xl text-xs sm:text-sm">
        <strong className="text-msi-orange block uppercase font-bold mb-0.5">For Employees:</strong>
        <span>Less uncertainty around childcare & peace of mind throughout the working day.</span>
      </div>
      <div className="p-3.5 bg-purple-50/80 border border-purple-200 rounded-xl text-xs sm:text-sm">
        <strong className="text-msi-purple block uppercase font-bold mb-0.5">For Employers:</strong>
        <span>A more family-supportive workplace, higher retention, and reduced absenteeism.</span>
      </div>
      <div className="p-3.5 bg-teal-50/80 border border-teal-200 rounded-xl text-xs sm:text-sm">
        <strong className="text-teal-700 block uppercase font-bold mb-0.5">For Children:</strong>
        <span>Something even simpler: Mummy or Daddy isn't quite so far away.</span>
      </div>
    </div>
  </div>
);

export const hitexGalleryImages = [
  '/images/hitex/HITEX_1.png',
  '/images/hitex/Hitex_2.png',
  '/images/hitex/Hitex_3.png',
  '/images/hitex/Hitex_4.png',
  '/images/hitex/Hitex_5.png',
  '/images/hitex/Hitex_6.png',
  '/images/hitex/Hitex_7.png',
];
