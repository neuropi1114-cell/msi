import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

import { buildPageMetadata } from '../../utils/seo';

export const metadata = buildPageMetadata('/corporate-childcare/');

export const corporateChildcareDrawerBody = (
  <div className="space-y-6 leading-relaxed pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple leading-snug">
        &ldquo;When employees know their children are cared for, they can focus on their work.&rdquo;
      </p>
    </div>

    {/* Paragraph 1 */}
    <p>
      For working parents, childcare is not simply a family issue. It can directly influence <strong>return to work</strong>, <strong>attendance</strong>, <strong>productivity</strong>, <strong>employee retention</strong>, and complete peace of mind.
    </p>

    {/* Key Highlights Card List */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-3">
      <h4 className="font-bold text-msi-purple uppercase tracking-wider mb-2">
        Tailored Workplace Solutions
      </h4>
      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
        <span>
          <strong>Professionally Managed Solutions:</strong> Crèche, daycare, and extended childcare tailored for today&apos;s corporate realities.
        </span>
      </div>
      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
        <span>
          <strong>Flexible Campus Models:</strong> From on-site corporate crèches to reserved seats across multiple MSI centers.
        </span>
      </div>
      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
        <span>
          <strong>Aligned Patterns:</strong> Custom models crafted around your organization&apos;s work shifts and policy goals.
        </span>
      </div>
    </div>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="uppercase tracking-widest text-msi-yellow font-bold mb-1">
        Our Promise To Your Workforce
      </p>
      <p className="font-bold text-white">
        You Take Care of Your People. <br />
        <span className="text-msi-orange">We Help Take Care of Their Little People.</span>
      </p>
    </div>
  </div>
);

export const corporateChildcareSolutionsDrawerBody = (
  <div className="space-y-6 leading-relaxed pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple leading-snug">
        One Organisation. Different Employees. Different Childcare Needs.
      </p>
    </div>

    {/* Paragraph */}
    <p>
      A single childcare model may not work for every workplace. The requirement depends on employee numbers, location, shifts, available space, commuting patterns and the ages of employees&apos; children.
    </p>

    {/* Delivery Models Card */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-4">
      <h4 className="font-bold text-msi-purple uppercase tracking-wider mb-2">
        MSI Delivery Models
      </h4>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
          <span>
            <strong>On-Campus Crèche:</strong> Childcare within or adjacent to the corporate campus.
          </span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
          <span>
            <strong>Near-Campus Preferred Centres:</strong> Access to an MSI centre conveniently located near the workplace.
          </span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
          <span>
            <strong>Corporate Subsidy Programs:</strong> Employer-supported childcare with preferential arrangements for eligible employees.
          </span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
          <span>
            <strong>Reserved Seats:</strong> A defined number of childcare places reserved for the organisation&apos;s employees.
          </span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
          <span>
            <strong>Extended-Hours Childcare:</strong> Additional support for longer or non-standard working schedules.
          </span>
        </div>
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
          <span>
            <strong>Multi-Location Solutions:</strong> Childcare access across multiple locations for distributed workforces.
          </span>
        </div>
      </div>
    </div>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="font-bold text-white">
        One Childcare Partner. <br />
        <span className="text-msi-orange">Multiple Ways to Deliver.</span>
      </p>
    </div>
  </div>
);

export const onCampusCrecheDrawerBody = (
  <div className="space-y-6 leading-relaxed pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple leading-snug">
        Childcare Where Your Employees Work
      </p>
    </div>

    {/* Intro Paragraph */}
    <p>
      MSI can work with organisations to establish and operate childcare facilities within corporate campuses or designated workplace premises.
    </p>

    {/* Supported Areas Grid */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-3">
      <h4 className="font-bold text-msi-purple uppercase tracking-wider mb-2">
        Depending on the engagement, MSI can support areas including:
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Space Planning &amp; Childcare Layout</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Program Design</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Centre Operations</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Staffing</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Caregiver &amp; Teacher Training</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Learning Programs</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Safety Procedures</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Daily Operations</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Meals &amp; Nutrition</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Parent Communication</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Developmental Experiences</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Quality Monitoring</span>
        </div>
      </div>
    </div>

    {/* Concluding Paragraph */}
    <p>
      The result is a childcare environment that gives parents the reassurance of having their child close to their workplace while the organisation benefits from a professionally managed childcare partner.
    </p>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="font-bold text-white">
        Closer to Work. <span className="text-msi-orange">Closer to Their Child.</span>
      </p>
    </div>
  </div>
);

export const nearCampusPreferredDrawerBody = (
  <div className="space-y-6 leading-relaxed pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple leading-snug">
        Corporate Childcare Without Building a Crèche
      </p>
    </div>

    {/* Intro Paragraph */}
    <p>
      Not every organisation needs — or has the space for — an on-campus childcare centre. Employees can instead receive preferred access to an MSI centre located conveniently near their workplace.
    </p>

    {/* Agreement Benefits Card */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-3">
      <h4 className="font-bold text-msi-purple uppercase tracking-wider mb-2">
        Depending on the agreement, this can include:
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Priority Access</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Preferential Corporate Fees</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Reserved Capacity</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Preschool + Daycare</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Extended Care</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Meals</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Enrichment</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Parent Connectivity</span>
        </div>
      </div>
    </div>

    {/* Concluding Paragraph */}
    <p>
      This model allows organisations to provide meaningful childcare support without establishing an entire childcare operation within their own premises.
    </p>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="font-bold text-white">
        Your Employees Get the Childcare Support. <br />
        <span className="text-msi-orange">You Don&apos;t Have to Build the Childcare Infrastructure.</span>
      </p>
    </div>
  </div>
);

export const corporateSubsidyDrawerBody = (
  <div className="space-y-6 leading-relaxed pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple leading-snug">
        Turn Childcare Into a Meaningful Employee Benefit
      </p>
    </div>

    {/* Intro Paragraph */}
    <p>
      Organisations can support eligible employees by contributing towards childcare costs through a structured corporate subsidy arrangement.
    </p>

    {/* Model Definition Card */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-3">
      <h4 className="font-bold text-msi-purple uppercase tracking-wider mb-2">
        MSI can work with the organisation to define an appropriate model based on:
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Employee Eligibility</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Childcare Program</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Corporate Contribution</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Employee Contribution</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Locations</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Billing Structure</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Duration</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Utilisation</span>
        </div>
      </div>
    </div>

    {/* Concluding Paragraph */}
    <p>
      Employees receive access to professional childcare at a corporate preferred arrangement while the organisation can offer a benefit that directly supports working families.
    </p>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="font-bold text-white">
        A Benefit Employees Can Actually Use Every Working Day
      </p>
    </div>
  </div>
);

export const extendedHoursChildcareDrawerBody = (
  <div className="space-y-6 leading-relaxed pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple leading-snug">
        Because Modern Work Doesn&apos;t Always End at 5 PM
      </p>
    </div>

    {/* Intro Paragraph */}
    <p>
      Technology, healthcare, global services, customer support, operations and many other industries work beyond conventional school hours. MSI can design extended childcare arrangements around employee working patterns.
    </p>

    {/* Supported Arrangements Card */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-3">
      <h4 className="font-bold text-msi-purple uppercase tracking-wider mb-2">
        Depending on the location, these can include:
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Early Drop-Off</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Late Pick-Up</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Extended Daycare</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Saturday Care</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Holiday Care</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Emergency Extended Care</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Shift-Aligned Care</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>24-Hour Childcare — Where Available</span>
        </div>
      </div>
    </div>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="font-bold text-white">
        Childcare Designed Around the Working Day — <span className="text-msi-orange">Not Just the School Day.</span>
      </p>
    </div>
  </div>
);

export const reservedSeatsDrawerBody = (
  <div className="space-y-6 leading-relaxed pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple leading-snug">
        Childcare Capacity When Your Employees Need It
      </p>
    </div>

    {/* Intro Paragraph */}
    <p>
      Childcare availability can become a challenge when employees need to return to work quickly. Under a Reserved Seats arrangement, an organisation can secure an agreed number of places for eligible employees at selected MSI centres.
    </p>

    {/* Useful For Card */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-3">
      <h4 className="font-bold text-msi-purple uppercase tracking-wider mb-2">
        This can be particularly useful for:
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Return-to-Work Programs</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Large Employee Campuses</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>New Office Locations</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Employee Relocations</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Workforce Expansion</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>High-Demand Childcare Locations</span>
        </div>
      </div>
    </div>

    {/* Concluding Paragraph */}
    <p>
      Instead of employees beginning their childcare search from zero, the organisation can provide access to a pre-arranged childcare network.
    </p>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="font-bold text-white">
        Guaranteed Places. <span className="text-msi-orange">Seamless Employee Transition.</span>
      </p>
    </div>
  </div>
);

export const multiLocationSolutionsContent = (
  <div className="text-[#464646] font-lato leading-relaxed space-y-4 mt-4">
    <p>
      Large organisations may have employees working across different campuses, business parks or cities.
    </p>
    <p>
      MSI can structure childcare arrangements across multiple locations through a combination of:
    </p>
    <div className="bg-[#f7f9fc] p-4 sm:p-5 rounded-2xl border border-gray-100 my-3">
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 font-semibold">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>On-Campus Centres</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Near-Campus Centres</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Reserved Seats</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Corporate Subsidy</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Extended Care</span>
        </div>
      </div>
    </div>
    <p>
      This gives HR teams a more consistent childcare proposition while allowing delivery to reflect the needs of each location.
    </p>
    <div className="pt-3 border-t border-gray-200">
      <p className="font-bold text-msi-purple">
        One Corporate Childcare Strategy. Flexible Local Delivery.
      </p>
    </div>
  </div>
);

export const employeeChildcareJourneyDrawerBody = (
  <div className="space-y-6 leading-relaxed pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple leading-snug">
        Make Access Simple for Parents
      </p>
    </div>

    {/* Intro Paragraph */}
    <p>
      Corporate childcare should not create another complicated process for employees. We can create a clear journey:
    </p>

    {/* Step by Step Timeline/Process List */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-3">
      <h4 className="font-bold text-msi-purple uppercase tracking-wider mb-2">
        The Employee Childcare Journey
      </h4>
      <div className="space-y-3">
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-2xs">
          <p className="font-bold text-msi-purple tracking-wider uppercase mb-1">
            01 &mdash; CORPORATE REGISTRATION
          </p>
          <p>
            The employee identifies themselves through the agreed corporate program.
          </p>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-2xs">
          <p className="font-bold text-msi-purple tracking-wider uppercase mb-1">
            02 &mdash; PRIORITY COUNSELLING
          </p>
          <p>
            Our team understands the child&apos;s age, childcare requirements, working hours and preferred location.
          </p>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-2xs">
          <p className="font-bold text-msi-purple tracking-wider uppercase mb-1">
            03 &mdash; CENTRE SELECTION
          </p>
          <p>
            The family identifies the most suitable participating MSI centre or on-campus facility.
          </p>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-2xs">
          <p className="font-bold text-msi-purple tracking-wider uppercase mb-1">
            04 &mdash; EXPERIENCE / TRIAL
          </p>
          <p>
            Where applicable, the family can experience the centre and settling process.
          </p>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-2xs">
          <p className="font-bold text-msi-purple tracking-wider uppercase mb-1">
            05 &mdash; CORPORATE-PREFERRED ARRANGEMENT
          </p>
          <p>
            Applicable corporate benefits, reserved access or preferential fees are applied.
          </p>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-2xs">
          <p className="font-bold text-msi-purple tracking-wider uppercase mb-1">
            06 &mdash; ONBOARDING
          </p>
          <p>
            The child&apos;s care requirements, routines and relevant information are captured.
          </p>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-2xs">
          <p className="font-bold text-msi-purple tracking-wider uppercase mb-1">
            07 &mdash; DAILY CARE + LEARNING
          </p>
          <p>
            The child begins their MSI journey.
          </p>
        </div>
        <div className="p-3 bg-white rounded-xl border border-gray-100 shadow-2xs">
          <p className="font-bold text-msi-purple tracking-wider uppercase mb-1">
            08 &mdash; PARENT CONNECTIVITY
          </p>
          <p>
            Parents remain connected through MSI&apos;s communication ecosystem.
          </p>
        </div>
      </div>
    </div>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="font-bold text-white">
        From Employee Benefit <span className="text-msi-orange">to Everyday Support.</span>
      </p>
    </div>
  </div>
);

export const partnerWithMsiDrawerBody = (
  <div className="space-y-6 leading-relaxed pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple leading-snug">
        Tell Us About Your Workforce. We will Help Design The Childcare Model.
      </p>
    </div>

    {/* Intro Paragraph */}
    <p>
      Every organisation has a different childcare requirement. You may need:
    </p>

    {/* Options List */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-2.5">
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
        <span>An On-Campus Crèche</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
        <span>A Preferred Centre Near Your Campus</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
        <span>Reserved Seats for Employees</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
        <span>A Corporate Childcare Subsidy</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
        <span>Extended-Hours Support</span>
      </div>
      <div className="flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
        <span>A Multi-Location Childcare Program</span>
      </div>
      <p className="font-semibold text-msi-purple pt-1">
        ...or a combination of several models.
      </p>
    </div>

    {/* Team Understanding Criteria */}
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-3">
      <h4 className="font-bold text-msi-purple uppercase tracking-wider mb-2">
        Our corporate team can work with you to understand:
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Number of Employees</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Work Location(s)</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Employee Childcare Demand</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Age Groups</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Working Hours &amp; Shifts</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Available Space</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Current Childcare Provision</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Expected Capacity</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Corporate Contribution Model</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-msi-orange shrink-0" />
          <span>Required Launch Timeline</span>
        </div>
      </div>
    </div>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="font-bold text-white">
        From Analysis <span className="text-msi-orange">to Recommended Structure.</span>
      </p>
    </div>
  </div>
);

export const ourCorporateExperienceDrawerBody = (
  <div className="space-y-6 leading-relaxed pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple leading-snug">
        Childcare Is Not New To Us. Operating It At Workplace Scale Isn&apos;t Either.
      </p>
    </div>

    {/* Intro Paragraph */}
    <p>
      My School ITALY has experience delivering early-years care and education within corporate and institutional environments.
    </p>

    {/* Model Brings Together Card */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-3">
      <h4 className="font-bold text-msi-purple uppercase tracking-wider mb-2">
        Our model brings together:
      </h4>
      <p className="font-semibold text-msi-orange leading-relaxed">
        Crèche + Preschool + Daycare + Extended Care + Learning + Nutrition + Safety + Parent Connectivity
      </p>
    </div>

    {/* Both Sides Card */}
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs space-y-4">
      <p>
        This allows organisations to work with a childcare partner capable of understanding both sides of the relationship:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-4 bg-[#f7f9fc] rounded-xl border border-gray-100">
          <h5 className="font-bold text-msi-purple tracking-wider uppercase mb-1">
            For the Organisation
          </h5>
          <p>
            Structured operations, defined processes and a scalable childcare model.
          </p>
        </div>
        <div className="p-4 bg-[#f7f9fc] rounded-xl border border-gray-100">
          <h5 className="font-bold text-msi-purple tracking-wider uppercase mb-1">
            For Employees
          </h5>
          <p>
            Knowing that while they are at work, their child is being cared for, engaged and understood.
          </p>
        </div>
      </div>
    </div>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="font-bold text-white">
        Proven Experience. <span className="text-msi-orange">Scalable Corporate Care.</span>
      </p>
    </div>
  </div>
);

export const moreThanACrecheContent = (
  <div className="text-[#464646] leading-snug space-y-2.5 mt-3">
    <p className="mb-2">
      Corporate childcare through MSI can bring together:
    </p>

    <div className="space-y-0">
      <p className="font-bold text-msi-purple uppercase tracking-wider leading-none m-0 p-0">CARE</p>
      <p className="leading-snug m-0 p-0">Cr&egrave;che &bull; Daycare &bull; Extended Care</p>
    </div>

    <div className="space-y-0">
      <p className="font-bold text-msi-purple uppercase tracking-wider leading-none m-0 p-0">LEARNING</p>
      <p className="leading-snug m-0 p-0">Preschool &bull; Nursery &bull; Kindergarten</p>
    </div>

    <div className="space-y-0">
      <p className="font-bold text-msi-purple uppercase tracking-wider leading-none m-0 p-0">DEVELOPMENT</p>
      <p className="leading-snug m-0 p-0">Communication &bull; Cognitive &bull; Social-Emotional &bull; Physical &bull; Creative</p>
    </div>

    <div className="space-y-0">
      <p className="font-bold text-msi-purple uppercase tracking-wider leading-none m-0 p-0">ENRICHMENT</p>
      <p className="leading-snug m-0 p-0">Gymnastics &bull; Neurobics &bull; Robotics &bull; Dance &bull; Storytelling</p>
    </div>

    <div className="space-y-0">
      <p className="font-bold text-msi-purple uppercase tracking-wider leading-none m-0 p-0">WELLBEING</p>
      <p className="leading-snug m-0 p-0">INSPIRE ME EAT &bull; Meals &bull; Rest &bull; Physical &amp; Emotional Safety</p>
    </div>

    <div className="space-y-0">
      <p className="font-bold text-msi-purple uppercase tracking-wider leading-none m-0 p-0">CONNECTIVITY</p>
      <p className="leading-snug m-0 p-0">Parent Updates &bull; Communication &bull; Developmental Observations</p>
    </div>

    <div className="pt-3 border-t border-gray-200 mt-4">
      <p className="font-bold text-msi-purple leading-tight">
        One Childcare Partnership. A Complete Ecosystem Around the Child.
      </p>
    </div>
  </div>
);

export const childcareWorksContent = (
  <div className="space-y-2.5">
    <p className="mb-1">
      An employee should not have to choose between:
    </p>

    <div className="my-1.5 leading-snug">
      <p className="font-bold text-msi-purple">
        Being present for their child
      </p>
      <p className="text-msi-orange font-bold uppercase tracking-wider my-0.5">
        and
      </p>
      <p className="font-bold text-msi-purple">
        being present at work.
      </p>
    </div>

    <div className="pt-1 space-y-1">
      <p>Organisations cannot remove every challenge working parents face.</p>
      <p>But the right childcare infrastructure can remove one of the biggest.</p>
    </div>

    <div className="pt-3 border-t border-gray-200 mt-4 space-y-1.5">
      <div className="my-1">
        <Image
          src="/images/logo/The-Neuroscientific-European-Childcare-PDF_12-x-4-ft_Backside-1.png.bv_resized_desktop.png.bv.webp"
          alt="My School ITALY"
          width={280}
          height={80}
          className="w-auto h-12 md:h-16 object-contain"
        />
      </div>
      <p className="font-semibold">
        Corporate Early Childhood Learning &amp; Care
      </p>
      <p className="font-bold text-msi-orange tracking-wide uppercase">
        On-Campus &bull; Near-Campus &bull; Subsidised &bull; Reserved &bull; Extended &bull; Multi-Location
      </p>
    </div>
  </div>
);
