'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  lookingForOptions,
  spaceOptions,
  initialCorporateFormData,
} from '../../app/corporatechildcare/corporatecontactdata';

export default function CorporateContactUs() {
  const [formData, setFormData] = useState(initialCorporateFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => {
      const exists = prev.lookingFor.includes(option);
      const updated = exists
        ? prev.lookingFor.filter((item) => item !== option)
        : [...prev.lookingFor, option];
      return { ...prev, lookingFor: updated };
    });
  };

  const validate = () => {
    const errs = {};
    if (!formData.organisationName.trim()) errs.organisationName = 'Required';
    if (!formData.contactPerson.trim()) errs.contactPerson = 'Required';
    if (!formData.email.trim()) errs.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.phone.trim()) errs.phone = 'Required';
    return errs;
  };

  const handleSubmit = async (e, actionType = 'proposal') => {
    if (e) e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage('');

    try {
      const res = await fetch('/api/enrol', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, actionType }),
      });
      const data = await res.json();
      if (data.success || res.ok) {
        setSubmitStatus('success');
        setSubmitMessage(
          actionType === 'meeting'
            ? 'Thank you! We will reach out to schedule a meeting with your team.'
            : 'Thank you! Your corporate childcare proposal request has been received.'
        );
        setFormData(initialCorporateFormData);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Submission failed. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Thank you! Your request has been submitted successfully.');
      setFormData(initialCorporateFormData);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (name) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-msi-purple ${errors[name] ? 'border-red-400' : 'border-gray-300'
    }`;

  return (
    <section className="py-16 bg-[#f7f9fc]" id="corporate-proposal">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Side: Image & Context Card */}
          <div className="lg:w-5/12 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-6 md:p-8 space-y-6"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/images/hero/DSC00928-scaled-1-1024x684.jpg.bv_resized_ipad.jpg.bv.webp"
                  alt="Children playing at My School ITALY"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-msi-purple font-bold text-xl md:text-2xl mb-2">
                  Partner With My School ITALY
                </h3>
                <p className=" text-sm leading-relaxed">
                  Our corporate team works directly with HR, CXO, and Benefits teams to structure scalable, high-quality childcare solutions tailored for your workforce.
                </p>
              </div>
              <div className="p-4 bg-orange-50 rounded-xl border border-msi-orange/20 text-xs text-msi-orange font-bold space-y-1">
                <p>✔ Custom Delivery Models</p>
                <p>✔ On-Campus &amp; Near-Campus Options</p>
                <p>✔ Subsidies &amp; Reserved Seats</p>
                <p>✔ Extended Hours Support</p>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <div className="lg:w-7/12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gray-100"
            >
              <div className="mb-8">
                <p className="text-msi-purple font-bold text-sm uppercase tracking-wider mb-1">
                  Tell us what you need.
                </p>
                <h2 className="text-msi-orange font-linotte font-bold text-2xl md:text-[32px] leading-tight uppercase">
                  REQUEST A CORPORATE CHILDCARE PROPOSAL
                </h2>
              </div>

              <form onSubmit={(e) => handleSubmit(e, 'proposal')} className="space-y-6">
                {/* 2-Column Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="organisationName" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                      Organisation Name *
                    </label>
                    <input
                      id="organisationName"
                      type="text"
                      name="organisationName"
                      value={formData.organisationName}
                      onChange={handleChange}
                      className={inputClass('organisationName')}
                      placeholder="e.g. Acme Corporation"
                    />
                    {errors.organisationName && (
                      <p className="text-red-500 text-xs mt-1">{errors.organisationName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contactPerson" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                      Contact Person *
                    </label>
                    <input
                      id="contactPerson"
                      type="text"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      className={inputClass('contactPerson')}
                      placeholder="Your Full Name"
                    />
                    {errors.contactPerson && (
                      <p className="text-red-500 text-xs mt-1">{errors.contactPerson}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="designation" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                      Designation
                    </label>
                    <input
                      id="designation"
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      className={inputClass('designation')}
                      placeholder="e.g. Head of HR / Workplace Benefits"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                      Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                      placeholder="name@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass('phone')}
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="cityLocations" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                      City / Locations
                    </label>
                    <input
                      id="cityLocations"
                      type="text"
                      name="cityLocations"
                      value={formData.cityLocations}
                      onChange={handleChange}
                      className={inputClass('cityLocations')}
                      placeholder="e.g. Bengaluru, Hyderabad, Pune"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="employeeStrength" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                      Approx. Employee Strength
                    </label>
                    <input
                      id="employeeStrength"
                      type="text"
                      name="employeeStrength"
                      value={formData.employeeStrength}
                      onChange={handleChange}
                      className={inputClass('employeeStrength')}
                      placeholder="e.g. 500+"
                    />
                  </div>

                  <div>
                    <label htmlFor="childrenCount" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                      Est. Children Count
                    </label>
                    <input
                      id="childrenCount"
                      type="text"
                      name="childrenCount"
                      value={formData.childrenCount}
                      onChange={handleChange}
                      className={inputClass('childrenCount')}
                      placeholder="e.g. 30–50"
                    />
                  </div>

                  <div>
                    <label htmlFor="ageGroups" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                      Age Groups
                    </label>
                    <input
                      id="ageGroups"
                      type="text"
                      name="ageGroups"
                      value={formData.ageGroups}
                      onChange={handleChange}
                      className={inputClass('ageGroups')}
                      placeholder="e.g. 45 days - 6 yrs"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="shiftTimings" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                    Working / Shift Timings
                  </label>
                  <input
                    id="shiftTimings"
                    type="text"
                    name="shiftTimings"
                    value={formData.shiftTimings}
                    onChange={handleChange}
                    className={inputClass('shiftTimings')}
                    placeholder="e.g. 9 AM - 6 PM / 24x7 Shift Rotations"
                  />
                </div>

                {/* Do You Have Space Radio */}
                <div className="p-4 bg-[#f7f9fc] rounded-xl border border-gray-100">
                  <label className="block text-xs font-bold text-msi-purple uppercase mb-2">
                    Do You Have Space for an On-Campus Crèche?
                  </label>
                  <div className="flex flex-wrap items-center gap-6 text-sm ">
                    {spaceOptions.map((opt) => (
                      <label key={opt} className="flex items-center gap-2 cursor-pointer font-medium">
                        <input
                          type="radio"
                          name="hasSpace"
                          value={opt}
                          checked={formData.hasSpace === opt}
                          onChange={handleChange}
                          className="w-4 h-4 text-msi-purple focus:ring-msi-purple"
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* What Are You Looking For Checkboxes */}
                <div className="p-4 bg-[#f7f9fc] rounded-xl border border-gray-100">
                  <label className="block text-xs font-bold text-msi-purple uppercase mb-3">
                    What Are You Looking For? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm ">
                    {lookingForOptions.map((option) => {
                      const isChecked = formData.lookingFor.includes(option);
                      return (
                        <label
                          key={option}
                          className="flex items-center gap-2.5 cursor-pointer hover:text-msi-purple transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxChange(option)}
                            className="w-4 h-4 rounded text-msi-purple focus:ring-msi-purple border-gray-300"
                          />
                          <span className={isChecked ? 'font-semibold text-msi-purple' : ''}>
                            {option}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="additionalNotes" className="block text-xs font-bold text-msi-purple uppercase mb-1">
                    Tell Us Anything Else We Should Know
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                    rows={3}
                    className={inputClass('additionalNotes')}
                    placeholder="Provide any additional context, timeline requirements, or specific questions..."
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-1/2 bg-msi-orange hover:bg-msi-orange/90 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl transition-all duration-300 text-base shadow-md uppercase tracking-wider"
                  >
                    {submitting ? 'SUBMITTING...' : 'REQUEST A PROPOSAL'}
                  </button>
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={(e) => handleSubmit(e, 'meeting')}
                    className="w-full sm:w-1/2 bg-msi-purple hover:bg-msi-purple/90 disabled:bg-gray-400 text-white font-bold py-4 rounded-xl transition-all duration-300 text-base shadow-md uppercase tracking-wider"
                  >
                    SCHEDULE A MEETING
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-medium">
                    {submitMessage}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
                    {submitMessage}
                  </div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
