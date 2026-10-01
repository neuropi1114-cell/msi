import React from 'react';
import { Baby, Clock, Sparkles, CheckCircle2, Heart, ShieldCheck, Eye, Utensils, HelpCircle, Building2 } from 'lucide-react';
import { hitexGalleryImages } from '../hitex/hitexdata';

/* --- Rich Custom Drawer Components for The Square Campus --- */

export const qcityProgramsDrawer = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-orange-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        The Square Campus — One Place As Your Child Grows
      </span>
      <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-orange tracking-tight uppercase">
        FROM FIRST SEPARATIONS TO FIRST INDEPENDENCE
      </h3>
      <p className="mt-2 text-gray-700 text-xs sm:text-sm font-medium leading-relaxed">
        A child’s needs at six months are very different from their needs at five years. Our programs are designed to grow with them.
      </p>
    </div>

    {/* Section 1: Early Years Progression */}
    <div className="p-5 bg-orange-50/90 border-l-4 border-msi-orange rounded-r-2xl shadow-2xs space-y-2">
      <div className="flex items-center gap-2 text-msi-orange font-bold text-base uppercase font-linotte">
        <Baby className="w-5 h-5 text-msi-orange shrink-0" />
        <h4>Early Years Journey</h4>
      </div>
      <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-bold text-msi-purple">
        Baby Crèche &rarr; Toddler / Playgroup &rarr; Nursery &rarr; K1 &rarr; K2
      </p>
    </div>

    {/* Section 2: Extended Care */}
    <div className="p-5 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-2xl shadow-2xs space-y-2">
      <div className="flex items-center gap-2 text-msi-purple font-bold text-base uppercase font-linotte">
        <Clock className="w-5 h-5 text-msi-purple shrink-0" />
        <h4>Care Beyond The School Day</h4>
      </div>
      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
        And when the school day ends, care does not necessarily have to. Daycare, Extended Care, Early Drop-Off, Late Pick-Up, Saturday and Holiday Care give families flexibility, while Gymnastics, Neurobics, Robotics, Dance, Storytelling and Creative Arts add new dimensions to the child’s day.
      </p>
    </div>

    {/* Footer Accent Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-md text-center">
      <p className="font-bold text-amber-300 text-xs sm:text-sm tracking-wide uppercase font-linotte">
        “At MSI The Square, children don’t have to keep changing environments as they grow.”
      </p>
    </div>
  </div>
);

export const qcityWhyUsDrawer = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50 border border-orange-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-orange/10 text-msi-orange mb-2">
        Development, Not Just Academics.
      </span>
      <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-purple tracking-tight uppercase">
        WHY FAMILIES CHOOSE<br />MSI THE SQUARE?
      </h3>
      <p className="mt-2 text-msi-orange font-bold text-xs sm:text-sm uppercase tracking-wide">
        BECAUSE THE MOST IMPORTANT THINGS A YOUNG CHILD IS LEARNING MAY NOT FIT ON A WORKSHEET.
      </p>
    </div>

    <div className="p-4 bg-purple-50/90 border-l-4 border-msi-purple rounded-r-2xl space-y-2">
      <p className="font-bold text-msi-purple text-sm">
        Confidence. Curiosity. Communication. Independence. Resilience. Friendship. Emotional security.
      </p>
      <p className="text-xs italic text-msi-orange font-semibold">These matter too.</p>
    </div>

    <div className="space-y-3 text-xs sm:text-sm text-gray-700">
      <p>
        At MSI The Square, academics form part of a much bigger developmental picture. Our children encounter language, mathematics, science and the world around them through stories, conversations, play, movement, exploration and carefully designed experiences.
      </p>
    </div>

    <div className="p-4 rounded-xl bg-gradient-to-r from-msi-orange to-amber-500 text-white shadow-md text-center">
      <p className="font-bold text-xs sm:text-sm uppercase tracking-wide font-linotte">
        “Early education should develop the learner — not simply complete the lesson.”
      </p>
    </div>
  </div>
);

export const qcityNeuroPiDrawer = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-blue-50 border border-purple-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-purple/10 text-msi-purple mb-2">
        Observe Before You Assume
      </span>
      <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-purple tracking-tight uppercase">
        THE NEUROPI WAY™ — MSI&apos;s Neuroscience-Informed Early Childhood Pedagogy
      </h3>
      <p className="mt-2 text-msi-orange font-bold text-xs sm:text-sm uppercase">
        BEFORE WE LABEL A BEHAVIOUR, WE TRY TO UNDERSTAND IT.
      </p>
    </div>

    <div className="space-y-2 text-xs sm:text-sm">
      {[
        "A child who doesn't immediately join an activity may need more time to observe.",
        "A child who repeatedly asks questions may be exploring deeply.",
        "A child who moves constantly may engage more readily through movement.",
        "A child who struggles with one experience may flourish when it is presented differently."
      ].map((obs, idx) => (
        <div key={idx} className="p-3 bg-white border border-gray-100 rounded-xl shadow-2xs text-gray-800 font-medium flex items-start gap-2">
          <Eye className="w-4 h-4 text-msi-blue shrink-0 mt-0.5" />
          <span>{obs}</span>
        </div>
      ))}
    </div>

    <div className="p-4 bg-amber-50/90 border-l-4 border-amber-500 rounded-r-2xl space-y-1.5 text-xs sm:text-sm">
      <p className="font-bold text-msi-purple block">We observe to understand.</p>
      <p className="font-bold text-msi-purple block">We understand to respond.</p>
      <p className="font-bold text-msi-purple block">We respond to help the child grow.</p>
      <p className="font-extrabold text-msi-orange block pt-1">That is NeuroPi in practice.</p>
    </div>

    <div className="p-4 rounded-xl bg-gradient-to-r from-msi-purple to-[#271344] text-white shadow-md">
      <p className="text-xs sm:text-sm text-amber-200 leading-relaxed font-medium">
        The NeuroPi Way™ is My School ITALY&apos;s neuroscience-informed early childhood pedagogy that helps educators understand the child behind the learning — observing how each child engages and develops, and using that understanding to personalise what happens next.
      </p>
    </div>
  </div>
);

export const qcityParentsDrawer = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    {/* Header Banner */}
    <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50 via-white to-purple-50 border border-blue-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-msi-blue/10 text-msi-blue mb-2">
        Beyond “What Did You Learn Today?”
      </span>
      <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-purple tracking-tight uppercase">
        THERE ARE BETTER QUESTIONS THAN “WHAT DID YOU LEARN TODAY?”
      </h3>
    </div>

    <div className="p-4 bg-blue-50/90 border-l-4 border-msi-blue rounded-r-2xl space-y-2">
      <p className="font-bold text-msi-blue text-xs uppercase tracking-wider">Try Asking:</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-gray-800">
        {[
          "What made you laugh?",
          "What made you curious?",
          "Who did you play with?",
          "What was difficult?",
          "What did you try by yourself?",
          "What would you like to do again tomorrow?"
        ].map((q, idx) => (
          <li key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white border border-blue-100">
            <Heart className="w-4 h-4 text-msi-orange shrink-0" />
            <span>{q}</span>
          </li>
        ))}
      </ul>
    </div>

    <div className="space-y-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
      <p>
        At MSI The Square, conversations about progress can extend beyond letters, numbers and worksheets. We may talk with you about your child&apos;s communication, curiosity, engagement, confidence, independence, relationships and approach to challenge.
      </p>
      <p>
        Because childhood development is much richer than a checklist of academic achievements. We want parents to understand not only what their child knows — but who their child is becoming.
      </p>
    </div>

    <div className="p-4 rounded-xl bg-gradient-to-r from-msi-orange to-amber-500 text-white shadow-md text-center">
      <p className="font-bold text-xs sm:text-sm uppercase tracking-wide font-linotte">
        “YOU KNOW YOUR CHILD. WE GET TO KNOW YOUR CHILD TOO. TOGETHER, WE SUPPORT THE JOURNEY.”
      </p>
    </div>
  </div>
);

export const qcityCorporateDrawer = (
  <div className="space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
    <div className="p-5 rounded-2xl bg-gradient-to-br from-teal-50 via-white to-purple-50 border border-teal-100 shadow-xs">
      <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-600/10 text-teal-700 mb-2">
        A Benefit Employees Can Actually Use.
      </span>
      <h3 className="text-xl sm:text-2xl font-linotte font-bold text-msi-purple tracking-tight uppercase">
        THE BEST EMPLOYEE BENEFITS SOLVE REAL-LIFE PROBLEMS.
      </h3>
      <p className="mt-2 text-gray-700 text-xs sm:text-sm font-medium">
        Childcare is one of them. A working parent does not simply need a crèche listed in an employee-benefits document. They need somewhere they can genuinely trust with their child.
      </p>
    </div>

    <div className="p-4 bg-teal-50/90 border-l-4 border-teal-600 rounded-r-2xl space-y-2">
      <p className="font-bold text-teal-700 text-xs uppercase tracking-wider">
        MSI The Square Practical Corporate Models:
      </p>
      <p className="text-xs sm:text-sm font-bold text-gray-800">
        Corporate Subsidy &bull; Reserved Seats &bull; Preferred Access &bull; Extended Hours &bull; Near-Workplace Childcare
      </p>
    </div>

    <div className="space-y-2 text-xs sm:text-sm text-gray-700">
      <p>&bull; Employees gain access to an established early-years environment.</p>
      <p>&bull; HR teams gain a structured childcare partner.</p>
      <p>&bull; And the organisation turns a policy into something a parent can actually use.</p>
    </div>

    <div className="p-4 rounded-xl bg-gradient-to-r from-teal-600 to-msi-purple text-white shadow-md text-center">
      <p className="font-bold text-xs sm:text-sm uppercase tracking-wide font-linotte">
        “Because a benefit becomes meaningful when it works in real life.”
      </p>
    </div>
  </div>
);

export const qcityGalleryImages = hitexGalleryImages;

export const qcityCampusLocation = {
  id: 'qcity',
  name: 'The Square (Q-City)',
  fullName: 'My School ITALY — The Square',
  slug: '/qcity',
  zone: 'Financial District & Gachibowli',
  description: 'My School ITALY The Square brings MSI’s neuroscience-informed early-years approach closer to families in Nanakramguda, Financial District, Gachibowli, Khajaguda, Puppalaguda, Narsingi, Kokapet and Gopanpally. The centre offers families a convenient early-learning and care option that fits naturally into everyday home-and-work routines.',
  address: 'The Square Tech Park, Wipro Circle Road, Nanakramguda, Financial District, Hyderabad 500032',
  landmark: 'Near Wipro Circle & Financial District Corridor',
  nearby: ['Nanakramguda', 'Financial District', 'Gachibowli', 'Khajaguda', 'Puppalaguda', 'Narsingi', 'Kokapet'],
  driveTimes: [
    { area: 'Nanakramguda', distance: '0.5–2 km', time: '3–8 min' },
    { area: 'Financial District', distance: '0.5–2 km', time: '3–8 min' },
    { area: 'Gachibowli', distance: '2–4 km', time: '8–15 min' },
    { area: 'Kokapet', distance: '4–7 km', time: '12–22 min' },
  ],
  googleMapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.6785965778686!2d78.32855267577976!3d17.427205301655526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb930c4010ef93%3A0x13e1808c1f420e4!2sMy%20School%20ITALY%20%7C%20Q-City!5e0!3m2!1sen!2sin!4v1790410256498!5m2!1sen!2sin',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=My+School+ITALY+%7C+Q-City',
  phone: '+917093904680',
  badge: 'Tech Park Hub',
  badgeBg: 'bg-blue-600 text-white',
};

