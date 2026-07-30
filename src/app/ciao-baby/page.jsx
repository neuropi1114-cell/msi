import React from 'react';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ContactUs from '../../components/home/ContactUs';

export const metadata = {
  title: 'Ciao Baby – My School ITALY',
  description: 'Ciao Baby programs designed specifically for parents and their new babies. Observation, Baby Massage, Crying, Colic and Comfort workshops.',
  alternates: { canonical: '/ciao-baby' },
  openGraph: {
    title: 'Ciao Baby – My School ITALY',
    description: 'Ciao Baby programs designed specifically for parents and their new babies.',
    url: '/ciao-baby',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
  },
};

export default function CiaoBabyPage() {
  const programs = [
    {
      title: 'Ciao Baby Observation',
      image: '/images/ciao-baby/observation.jpg',
      description:
        'This is 30 to 40 minutes of time spent on observation of your baby. We will provide you with an insight into what your baby can do or finds stressful, how your baby communicates with you, how your baby self-soothes, and how to provide comfort.',
    },
    {
      title: 'Crying, Colic and Comfort',
      image: '/images/ciao-baby/crying-colic.jpg',
      description:
        '3 Workshops that last around 1 hour each. Discover the 5 main cries your baby uses to communicate with you, explore the causes of colic and how to reduce or manage the symptoms, and discover comfort techniques that effectively restore balance.',
    },
    {
      title: 'Ciao Baby Massage',
      image: '/images/ciao-baby/massage.jpg',
      description:
        'This is a one-hour session that includes: Baby Massage, Baby Yoga, Baby Reflexology, Sensory Integration, Containment and Comfort, Fun, Games, and Play, Bonding Experiences.',
      list: [
        'Baby Massage',
        'Baby Yoga',
        'Baby Reflexology',
        'Sensory Integration',
        'Containment and Comfort',
        'Fun, Games, and Play',
        'Bonding Experiences',
      ],
    },
  ];

  const benefitsList = [
    'Observe how your baby responds to the world and communicates with you by interpreting behavioural cues.',
    "Identify your baby's abilities, sensitivities, and needs.",
    'Recognise how your baby self-soothes to reduce stress.',
    'Explore the main causes of colic and how to manage or reduce symptoms.',
    'Recognise the five main cries of your baby.',
    'Investigate comfort techniques that can effectively reduce crying.',
    'Develop loving touch techniques through baby massage, reflexology, yoga, sensory integration, and containment.',
  ];

  const benefitCards = [
    {
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" viewBox="0 0 576 512" fill="currentColor">
          <path d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8z" />
        </svg>
      ),
      text: 'Understand what your baby is saying, so you can adapt caregiving responses to meet their needs.',
    },
    {
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" viewBox="0 0 448 512" fill="currentColor">
          <path d="M358.182 179.361c-19.493-24.768-52.679-31.945-79.872-19.098-15.127-15.687-36.182-22.487-56.595-19.629V67c0-36.944-29.736-67-66.286-67S89.143 30.056 89.143 67v161.129c-19.909-7.41-43.272-5.094-62.083 8.872-29.355 21.795-35.793 63.333-14.55 93.152l109.699 154.001C134.632 501.59 154.741 512 176 512h178.286c30.802 0 57.574-21.5 64.557-51.797l27.429-118.999A67.873 67.873 0 0 0 448 326v-84c0-46.844-46.625-79.273-89.818-62.639z" />
        </svg>
      ),
      text: 'Support your parent-baby bond through sensory integration techniques and positive touch experiences.',
    },
    {
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
          <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm-24 48h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V56c0-4.4 3.6-8 8-8zm0 208h48c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8zm208-208h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8z" />
        </svg>
      ),
      text: 'Learn new techniques that can help calm and relax your baby and promote sleep.',
    },
    {
      icon: (
        <svg aria-hidden="true" className="w-8 h-8" viewBox="0 0 640 512" fill="currentColor">
          <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-202.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
        </svg>
      ),
      text: 'Be part of a social experience where you can make friends with parents going through the same worries, challenges, and celebrations as you are.',
    },
  ];

  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden">
          <img
            src="/images/ciao-baby/birth-to-3-months.jpg"
            alt="Ciao Baby program - infant care"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20" />
          <div className="container mx-auto px-4 md:px-12 text-center relative z-10 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Ciao Baby
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto text-justify">
              Observations that can provide a remarkable insight into the needs, abilities, and sensitivities of your new baby.
            </p>
          </div>
        </section>
        <div data-nav-sentinel />

        {/* Birth to 3 Months */}
        <section className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/ciao-baby/birth-to-3-months.jpg"
                  alt="Baby from birth to 3 months"
                  className="w-full rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#e4984d' }}>
                  Birth to 3 Months
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 text-justify">
                  Renowned, dedicated, and passionate, Dr Aperna Volluru, has written and developed a new add-on feature to the already successful My School ITALY Kindergarten – <strong>Ciao Baby</strong>, designed specifically for parents and their new babies.
                </p>
                <p className="text-gray-600 leading-relaxed text-justify">
                  Our Ciao Baby programs are delivered by expertly trained Practitioners across the country. We would love to welcome you to our classes or answer any questions you may have. Please don&apos;t hesitate to contact us to see how you can take part in one or more of our unique Ciao Baby programs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ciao Baby Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#369bd0' }}>
                Ciao Baby Programs
              </h2>
              <p className="text-gray-600 text-lg text-justify">
                Our Ciao Baby programs can truly transform those first few months for you and your baby. Have a look at our three Ciao Baby programs below:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#e4984d' }}>
                      {program.title}
                    </h3>
                    <div className="text-gray-600 text-sm leading-relaxed mb-3 text-justify space-y-2">
                      {program.description.split('.').filter(Boolean).map((sentence, i) => (
                        <p key={i}>{sentence.trim()}.</p>
                      ))}
                    </div>
                    {program.list && (
                      <ul className="text-sm text-gray-600 space-y-1">
                        {program.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span style={{ color: '#369bd0' }}>&#8226;</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-[#f7f9fc]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#369bd0' }}>
                  An extraordinary opportunity for parents, our Ciao Baby programs help you to:
                </h2>
                <ul className="space-y-4">
                  {benefitsList.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 mt-1 flex-shrink-0" style={{ color: '#e4984d' }} viewBox="0 0 576 512" fill="currentColor">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                      </svg>
                      <span className="text-gray-600 text-justify">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <img
                  src="/images/ciao-baby/extraordinary.jpg"
                  alt="Parent and baby bonding"
                  className="w-full rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits of Programs */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="/images/ciao-baby/benefits.jpg"
                  alt="Benefits of Ciao Baby programs"
                  className="w-full rounded-2xl shadow-xl"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#369bd0' }}>
                  Benefits of our Ciao Baby Programs
                </h2>
                <p className="text-gray-600 mb-8 text-justify">
                  Ask questions from the experts giving you boosted confidence in your abilities.
                </p>
                <div className="space-y-6">
                  {benefitCards.map((card, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#e4984d20', color: '#e4984d' }}>
                        {card.icon}
                      </div>
                      <p className="text-gray-600 leading-relaxed text-justify flex-1">{card.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-[#f7f9fc]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="text-center max-w-4xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#369bd0' }}>
                What Parents Say
              </h2>
              <p className="text-gray-600 text-lg text-justify">
                Hear from parents who have experienced the Ciao Baby programs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The Ciao Baby Observation session gave me such incredible insight into my baby's behaviour. I finally understood what my baby was trying to tell me.",
                  name: "Priya Sharma",
                  role: "Mother of 2-month-old",
                },
                {
                  quote: "The Massage session was a game-changer. My baby sleeps so much better now, and the bonding experience has been absolutely beautiful for our family.",
                  name: "Sarah Williams",
                  role: "Mother of 4-month-old",
                },
                {
                  quote: "The Colic and Comfort workshops helped me understand the five main cries. I feel so much more confident as a new parent thanks to the expert guidance.",
                  name: "Aisha Khan",
                  role: "Mother of 3-month-old",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 inline" style={{ color: '#e4984d' }} viewBox="0 0 576 512" fill="currentColor">
                        <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed text-justify mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-bold" style={{ color: '#e4984d' }}>{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactUs intro="Interested in our Ciao Baby programs? Fill out the form below and we'll get back to you." />
      </main>
      <Footer />
    </>
  );
}
