'use client';
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const programs = [
  { value: 'Toddler (1.5 - 2.5 years)', label: 'Toddler (1.5 - 2.5 years)' },
  { value: 'Nursery (2.5 - 3.5 years)', label: 'Nursery (2.5 - 3.5 years)' },
  { value: 'K1 (3.5 - 4.5 years)', label: 'K1 (3.5 - 4.5 years)' },
  { value: 'K2 (4.5 - 5.5 years)', label: 'K2 (4.5 - 5.5 years)' },
  { value: 'Grade 1 (5.5 - 6.5 years)', label: 'Grade 1 (5.5 - 6.5 years)' },
  { value: 'Grade 2 (6.5 - 7.5 years)', label: 'Grade 2 (6.5 - 7.5 years)' },
];

const BookTourForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    program: '',
    message: '',
    privacyPolicy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-msi-purple mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          We have received your tour request. Our team will contact you shortly
          to confirm your visit.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-msi-orange focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-msi-orange focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          placeholder="Enter Your Mobile Number"
          required
          pattern="[0-9()#&amp;+*-=.]+"
          title="Only numbers and phone characters (#, -, *, etc) are accepted."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-msi-orange focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
          Select Program
        </label>
        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-msi-orange focus:border-transparent outline-none transition-all bg-white"
        >
          <option value="">Select Program</option>
          {programs.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Message"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-msi-orange focus:border-transparent outline-none transition-all resize-none"
        />
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="privacyPolicy"
          name="privacyPolicy"
          checked={formData.privacyPolicy}
          onChange={handleChange}
          required
          className="mt-1 mr-3 h-4 w-4 text-msi-orange border-gray-300 rounded focus:ring-msi-orange"
        />
        <label htmlFor="privacyPolicy" className="text-sm text-gray-700">
          <strong>
            I have read and agree to the{' '}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-msi-orange hover:underline"
            >
              Privacy Policy
            </a>
            .
          </strong>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-msi-orange text-white font-bold py-3 px-8 rounded-lg hover:bg-msi-orange/90 transition-colors flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        Submit
      </button>
    </form>
  );
};

export default BookTourForm;
