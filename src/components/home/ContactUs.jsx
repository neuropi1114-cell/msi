'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const programs = [
  "Toddler (1.5 years - 2.5 years)",
  "Nursery (2.5 years - 3.5 years)",
  "K1 (3.5 years - 4.5 years)",
  "K2 (4.5 years - 5.5 years)",
  "Grade 1 (5.5 years - 6.5 years)",
  "Grade 2 (6.5 years - 7.5 years)"
];

const countries = [
  { name: "Bangladesh", code: "bd", phone: "+880" },
  { name: "India", code: "in", phone: "+91" },
  { name: "Italy", code: "it", phone: "+39" },
  { name: "Ghana", code: "gh", phone: "+233" },
  { name: "Germany", code: "de", phone: "+49" },
  { name: "Romania", code: "ro", phone: "+40" },
  { name: "United Arab Emirates", code: "ae", phone: "+971" }
];

const initialFormData = {
  parentName: '',
  email: '',
  mobile: '',
  program: '',
  country: '',
  phoneCode: '+91',
  message: '',
  agreePolicy: false
};

export default function ContactUs({ intro }) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [countryOpen, setCountryOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');
  const countryRef = useRef(null);
  const phoneRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.parentName.trim()) errs.parentName = 'Required';
    if (!formData.email.trim()) errs.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.mobile.trim()) errs.mobile = 'Required';
    if (!formData.program) errs.program = 'Select a program';
    if (!formData.country) errs.country = 'Select a country';
    if (!formData.agreePolicy) errs.agreePolicy = 'You must agree to the Privacy Policy';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus('success');
        setSubmitMessage(data.message);
        setFormData(initialFormData);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Submission failed.');
        if (data.errors) setErrors(data.errors);
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const selectedCountry = countries.find(c => c.name === formData.country);

  useEffect(() => {
    const handler = (e) => {
      if (countryRef.current && !countryRef.current.contains(e.target)) setCountryOpen(false);
      if (phoneRef.current && !phoneRef.current.contains(e.target)) setPhoneOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const inputClass = (name) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-msi-accent ${
      errors[name] ? 'border-red-400' : 'border-gray-300'
    }`;

  return (
    <section className="py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/images/hero/DSC00928-scaled-1-1024x684.jpg.bv_resized_ipad.jpg.bv.webp"
                alt="Children playing at My School Italy"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
            >
              {intro && <div className="text-gray-600 text-center mb-6 leading-relaxed">{intro}</div>}
              <h2 className="text-3xl md:text-4xl  font-bold text-msi-accent mb-6 text-center">
                ENROL YOUR CHILD
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="parentName" className="block text-sm font-medium text-gray-700 mb-1">Parent / Guardian Name</label>
                  <input
                    id="parentName"
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className={inputClass('parentName')}
                    placeholder="Enter parent name"
                  />
                  {errors.parentName && <p className="text-red-500 text-xs mt-1">{errors.parentName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass('email')}
                    placeholder="Enter email address"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <div className="flex">
                    <div ref={phoneRef} className="relative">
                      <button
                        type="button"
                        onClick={() => setPhoneOpen(!phoneOpen)}
                        onKeyDown={(e) => { if (e.key === 'Escape') setPhoneOpen(false); }}
                        className="px-3 py-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-700 flex items-center gap-2 min-w-[90px]"
                        aria-expanded={phoneOpen}
                        aria-haspopup="listbox"
                      >
                        <img
                          src={`/images/flags/${countries.find(c => c.phone === formData.phoneCode)?.code || 'in'}.png`}
                          alt=""
                          className="w-4 h-auto rounded-sm"
                        />
                        <span className="text-sm">{formData.phoneCode}</span>
                        <svg className={`w-3 h-3 text-gray-400 transition-transform ${phoneOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {phoneOpen && (
                        <ul className="absolute z-10 left-0 mt-1 w-56 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto" role="listbox">
                          {countries.map((country) => (
                            <li
                              key={country.code}
                              role="option"
                              aria-selected={formData.phoneCode === country.phone}
                              tabIndex={0}
                              onClick={() => {
                                setFormData(prev => ({ ...prev, phoneCode: country.phone }));
                                setPhoneOpen(false);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  setFormData(prev => ({ ...prev, phoneCode: country.phone }));
                                  setPhoneOpen(false);
                                }
                              }}
                              className={`px-3 py-2 cursor-pointer flex items-center gap-2 hover:bg-orange-50 text-sm ${formData.phoneCode === country.phone ? 'bg-orange-100' : ''}`}
                            >
                              <img src={`/images/flags/${country.code}.png`} alt="" className="w-4 h-auto rounded-sm" />
                              <span>{country.name}</span>
                              <span className="text-gray-500 ml-auto">{country.phone}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <input
                      id="mobile"
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-msi-accent ${errors.mobile ? 'border-red-400' : 'border-gray-300'}`}
                      placeholder="Enter mobile number"
                    />
                  </div>
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">Select Program</label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className={inputClass('program') + ' bg-white'}
                  >
                    <option value="">Select Program</option>
                    {programs.map((program, idx) => (
                      <option key={idx} value={program}>{program}</option>
                    ))}
                  </select>
                  {errors.program && <p className="text-red-500 text-xs mt-1">{errors.program}</p>}
                </div>

                <div ref={countryRef} className="relative">
                  <label id="country-label" className="block text-sm font-medium text-gray-700 mb-1">Select Country</label>
                  <button
                    type="button"
                    onClick={() => setCountryOpen(!countryOpen)}
                    onKeyDown={(e) => { if (e.key === 'Escape') setCountryOpen(false); }}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-msi-accent bg-white text-left flex items-center justify-between ${errors.country ? 'border-red-400' : 'border-gray-300'}`}
                    aria-expanded={countryOpen}
                    aria-haspopup="listbox"
                    aria-labelledby="country-label"
                  >
                    {selectedCountry ? (
                      <span className="flex items-center gap-2">
                        <img src={`/images/flags/${selectedCountry.code}.png`} alt="" className="w-5 h-auto rounded-sm" />
                        {selectedCountry.name}
                      </span>
                    ) : (
                      <span className="text-gray-400">Select Country</span>
                    )}
                    <svg className={`w-5 h-5 text-gray-400 transition-transform ${countryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                  {countryOpen && (
                    <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto" role="listbox" aria-labelledby="country-label">
                      {countries.map((country) => (
                        <li
                          key={country.code}
                          role="option"
                          aria-selected={formData.country === country.name}
                          tabIndex={0}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, country: country.name }));
                            setCountryOpen(false);
                            setErrors(prev => ({ ...prev, country: '' }));
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setFormData(prev => ({ ...prev, country: country.name }));
                              setCountryOpen(false);
                              setErrors(prev => ({ ...prev, country: '' }));
                            }
                          }}
                          className={`px-4 py-3 cursor-pointer flex items-center gap-2 hover:bg-orange-50 ${formData.country === country.name ? 'bg-orange-100' : ''}`}
                        >
                          <img src={`/images/flags/${country.code}.png`} alt="" className="w-5 h-auto rounded-sm" />
                          {country.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message / Inquiry</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={inputClass('message')}
                    placeholder="Tell us about your child, questions, or preferred campus..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="agreePolicy"
                    type="checkbox"
                    name="agreePolicy"
                    checked={formData.agreePolicy}
                    onChange={handleChange}
                    className={`mt-1 w-5 h-5 text-msi-accent border-gray-300 rounded focus:ring-msi-accent ${errors.agreePolicy ? 'border-red-400' : ''}`}
                  />
                  <label htmlFor="agreePolicy" className="text-sm text-gray-600">
                    I have read and agree to the{' '}
                    <a href="/privacy-policy" className="text-msi-accent underline">Privacy Policy</a>
                  </label>
                </div>
                {errors.agreePolicy && <p className="text-red-500 text-xs -mt-3">{errors.agreePolicy}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-msi-accent hover:bg-msi-accent/90 disabled:bg-gray-400 text-white font-bold py-4 rounded-lg transition-colors duration-300 text-lg"
                >
                  {submitting ? 'SUBMITTING...' : 'ENROL YOUR CHILD'}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                    {submitMessage}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {submitMessage}
                  </div>
                )}
              </form>

              <p className="mt-6 text-gray-600 text-center text-sm leading-relaxed">
                At My School ITALY, we turn everyday moments into brain-building adventures – where play fuels curiosity, emotions shape empathy, and each child discovers the joy of learning through science and love.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
