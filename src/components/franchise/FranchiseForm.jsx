'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const countries = [
  'Afghanistan','Albania','Algeria','Andorra','Angola','Argentina','Armenia','Australia','Austria',
  'Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin',
  'Bhutan','Bolivia','Bosnia Herzegovina','Botswana','Brazil','Brunei','Bulgaria','Burkina',
  'Burundi','Cambodia','Cameroon','Canada','Chile','China','Colombia','Costa Rica','Croatia',
  'Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic',
  'Ecuador','Egypt','El Salvador','Eritrea','Estonia','Ethiopia','Fiji','Finland','France',
  'Gabon','Gambia','Georgia','Germany','Ghana','Greece','Guatemala','Guinea','Guyana','Haiti',
  'Honduras','Hungary','Iceland','India','Indonesia','Iran','Iraq','Ireland','Israel','Italy',
  'Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kuwait','Kyrgyzstan','Laos','Latvia','Lebanon',
  'Lesotho','Liberia','Libya','Lithuania','Luxembourg','Madagascar','Malawi','Malaysia','Maldives',
  'Mali','Malta','Mauritania','Mauritius','Mexico','Moldova','Monaco','Mongolia','Morocco',
  'Mozambique','Myanmar','Namibia','Nepal','Netherlands','New Zealand','Nigeria','Norway','Oman',
  'Pakistan','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Poland','Portugal',
  'Qatar','Romania','Russia','Rwanda','Saudi Arabia','Senegal','Serbia','Singapore','Slovakia',
  'Slovenia','Somalia','South Africa','South Korea','Spain','Sri Lanka','Sudan','Sweden',
  'Switzerland','Syria','Taiwan','Tanzania','Thailand','Tunisia','Turkey','Uganda','Ukraine',
  'United Arab Emirates','United Kingdom','United States','Uruguay','Uzbekistan','Venezuela',
  'Vietnam','Yemen','Zambia','Zimbabwe',
];

const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  pincode: '',
  country: '',
  message: '',
};

export default function FranchiseForm({ variant = 'top' }) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.firstName.trim()) errs.firstName = 'Required';
    if (!formData.lastName.trim()) errs.lastName = 'Required';
    if (!formData.email.trim()) errs.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.phone.trim()) errs.phone = 'Required';
    if (!formData.address.trim()) errs.address = 'Required';
    if (!formData.city.trim()) errs.city = 'Required';
    if (!formData.state.trim()) errs.state = 'Required';
    if (!formData.country) errs.country = 'Select a country';
    if (!formData.message.trim()) errs.message = 'Please tell us why you need a franchise';
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
      const res = await fetch('/api/franchise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitStatus('success');
        setSubmitMessage(data.message || 'Thank you! We will get back to you soon.');
        setFormData(initialFormData);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(data.message || 'Submission failed. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = (name) =>
    `w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-msi-accent bg-white text-gray-800 ${
      errors[name] ? 'border-red-400' : 'border-gray-300'
    }`;

  const isBottom = variant === 'bottom';

  return (
    <section
      className={`relative py-16 md:py-20 ${isBottom ? 'bg-white' : 'bg-msi-purple'}`}
      style={
        !isBottom
          ? { backgroundImage: 'url(/images/franchise/pentagon-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }
          : undefined
      }
    >
      {!isBottom && <div className="absolute inset-0 bg-msi-purple/90 pointer-events-none" />}
      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className={`flex flex-col ${isBottom ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 max-w-6xl mx-auto`}>
          {isBottom && (
            <div className="lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-2xl"
              >
                <img
                  src="/images/franchise/entrepreneur.jpg"
                  alt="Entrepreneur couple"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          )}

          <div className={isBottom ? 'lg:w-3/5' : 'w-full lg:w-2/3 mx-auto'}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`rounded-3xl shadow-xl p-8 md:p-10 ${isBottom ? 'bg-gray-50' : 'bg-white'}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-msi-purple mb-2 text-center">
                Franchise Form
              </h2>
              <p className="text-gray-600 text-center mb-8">
                Be an entrepreneur and own your own preschool.
              </p>

              {submitStatus && (
                <div
                  className={`mb-6 p-4 rounded-lg text-center font-medium ${
                    submitStatus === 'success'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className={inputClass('firstName')}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className={inputClass('lastName')}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone/Mobile *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      className={inputClass('phone')}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Address Line 1"
                      className={inputClass('address')}
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className={inputClass('city')}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="State"
                      className={inputClass('state')}
                    />
                    {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      placeholder="Pincode"
                      className={inputClass('pincode')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={inputClass('country')}
                    >
                      <option value="">- Select Country -</option>
                      {countries.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Why do you need a Franchise? *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your interest in franchising..."
                      className={inputClass('message')}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-msi-accent hover:bg-msi-accent/90 text-white font-bold py-4 rounded-lg transition-colors text-lg disabled:opacity-50"
                >
                  {submitting ? 'Submitting...' : 'Submit Form'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
