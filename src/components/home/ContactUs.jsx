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

export default function ContactUs() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    mobile: '',
    program: '',
    country: '',
    phoneCode: '+91',
    agreePolicy: false
  });
  const [countryOpen, setCountryOpen] = useState(false);
  const [phoneOpen, setPhoneOpen] = useState(false);
  const countryRef = useRef(null);
  const phoneRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const selectedCountry = countries.find(c => c.name === formData.country);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (countryRef.current && !countryRef.current.contains(e.target)) {
        setCountryOpen(false);
      }
      if (phoneRef.current && !phoneRef.current.contains(e.target)) {
        setPhoneOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="py-16 bg-[#f7f9fc]">
      <div className="container mx-auto px-4 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          {/* Left Column - Image */}
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

          {/* Right Column - Enrolment Form */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#e85d26] mb-6 text-center">
                ENROL YOUR CHILD
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Parent Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Parent / Guardian Name</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e85d26]"
                    placeholder="Enter parent name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email ID</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e85d26]"
                    placeholder="Enter email address"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                  <div className="flex">
                    <div ref={phoneRef} className="relative">
                      <button
                        type="button"
                        onClick={() => setPhoneOpen(!phoneOpen)}
                        className="px-3 py-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-700 flex items-center gap-2 min-w-[90px]"
                      >
                        <img
                          src={`https://flagcdn.com/w20/${countries.find(c => c.phone === formData.phoneCode)?.code || 'in'}.png`}
                          alt="Flag"
                          className="w-4 h-auto rounded-sm"
                        />
                        <span className="text-sm">{formData.phoneCode}</span>
                        <svg className={`w-3 h-3 text-gray-400 transition-transform ${phoneOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {phoneOpen && (
                        <ul className="absolute z-10 left-0 mt-1 w-56 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                          {countries.map((country, idx) => (
                            <li
                              key={idx}
                              onClick={() => {
                                setFormData(prev => ({ ...prev, phoneCode: country.phone }));
                                setPhoneOpen(false);
                              }}
                              className={`px-3 py-2 cursor-pointer flex items-center gap-2 hover:bg-orange-50 text-sm ${formData.phoneCode === country.phone ? 'bg-orange-100' : ''}`}
                            >
                              <img
                                src={`https://flagcdn.com/w20/${country.code}.png`}
                                alt={country.name}
                                className="w-4 h-auto rounded-sm"
                              />
                              <span>{country.name}</span>
                              <span className="text-gray-500 ml-auto">{country.phone}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#e85d26]"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>

                {/* Program */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Program</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e85d26] bg-white"
                  >
                    <option value="">Select Program</option>
                    {programs.map((program, idx) => (
                      <option key={idx} value={program}>{program}</option>
                    ))}
                  </select>
                </div>

                {/* Country */}
                <div ref={countryRef} className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Country</label>
                  <button
                    type="button"
                    onClick={() => setCountryOpen(!countryOpen)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#e85d26] bg-white text-left flex items-center justify-between"
                  >
                    {selectedCountry ? (
                      <span className="flex items-center gap-2">
                        <img
                          src={`https://flagcdn.com/w20/${selectedCountry.code}.png`}
                          alt={selectedCountry.name}
                          className="w-5 h-auto rounded-sm"
                        />
                        {selectedCountry.name}
                      </span>
                    ) : (
                      <span className="text-gray-400">Select Country</span>
                    )}
                    <svg className={`w-5 h-5 text-gray-400 transition-transform ${countryOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {countryOpen && (
                    <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
                      {countries.map((country, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, country: country.name }));
                            setCountryOpen(false);
                          }}
                          className={`px-4 py-3 cursor-pointer flex items-center gap-2 hover:bg-orange-50 ${formData.country === country.name ? 'bg-orange-100' : ''}`}
                        >
                          <img
                            src={`https://flagcdn.com/w20/${country.code}.png`}
                            alt={country.name}
                            className="w-5 h-auto rounded-sm"
                          />
                          {country.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Privacy Policy */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreePolicy"
                    checked={formData.agreePolicy}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-[#e85d26] border-gray-300 rounded focus:ring-[#e85d26]"
                  />
                  <label className="text-sm text-gray-600">
                    I have read and agree to the{' '}
                    <a href="/privacy-policy" className="text-[#e85d26] underline">Privacy Policy</a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#e85d26] hover:bg-[#d14f1e] text-white font-bold py-4 rounded-lg transition-colors duration-300 text-lg"
                >
                  ENROL YOUR CHILD
                </button>
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
