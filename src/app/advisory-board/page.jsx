import React from 'react';
import Image from 'next/image';
import TopBar from '../../components/layout/TopBar';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export const metadata = {
  title: 'Our Advisory Board',
  description:
    'Meet the expert advisory board of My School ITALY — leading paediatricians and surgeons guiding our neuroscientific approach to early childhood education and childcare.',
  alternates: { canonical: '/advisory-board' },
  openGraph: {
    title: 'Our Advisory Board | My School ITALY',
    description:
      'Meet the expert advisory board of My School ITALY — leading paediatricians and surgeons guiding our neuroscientific approach to early childhood education and childcare.',
    url: '/advisory-board',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/advisory-board/dr-ferdinando-amendola.webp',
        width: 800,
        height: 800,
        alt: 'Dr Ferdinando Amendola — Advisory Board Member',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Advisory Board | My School ITALY',
    description:
      'Meet the expert advisory board of My School ITALY — leading paediatricians and surgeons guiding our neuroscientific approach to early childhood education and childcare.',
  },
};

const advisoryMembers = [
  {
    name: 'Dr Ferdinando Amendola',
    country: 'Italy',
    image: '/images/advisory-board/dr-ferdinando-amendola.webp',
    qualifications: 'MBBS, MD Paediatrics — Università degli Studi di Bari Aldo Moro',
    specialisation: 'Paediatric Cardiology',
    experience: 'Over 5 decades of clinical experience; currently Sports Medicine Doctor for junior football players of Bari Team (Italy)',
    bio: 'Cardio Paediatrician specialising in diagnosing and treating heart problems in children. With advanced training in paediatric cardiology, he cares for babies, children, and adolescents with a wide range of heart conditions — from congenital heart defects to acquired heart diseases. In the kindergarten setting, he advises on screening and assessments, education and awareness, consultation and referrals, emergency preparedness, supporting inclusive activities, and monitoring and follow-up.',
    responsibilities: [
      'Screening and Assessments',
      'Education and Awareness',
      'Consultation and Referrals',
      'Emergency Preparedness',
      'Supporting Inclusive Activities',
      'Monitoring and Follow-up',
    ],
  },
  {
    name: 'Dr Deepthi Geddam',
    country: 'India',
    image: '/images/advisory-board/dr-deepthi-geddam.webp',
    qualifications: 'MBBS, MD Paediatrics — Postgraduate Institute of Medical Education and Research (PGIMER), Chandigarh',
    specialisation: 'Neonatology & Paediatrics',
    experience: '13 years of experience across top paediatric centres',
    bio: 'Paediatrician with 13 years of experience who has worked in some of the top paediatric centres as a Neonatologist. She established a top-care Paediatric Center at Naidupet, Tirupathi, India, serving many underprivileged children. She shares the advisory responsibilities to help the organisation craft the best Indo-Italian policies for child development and child care.',
    responsibilities: [
      'Indo-Italian Child Development Policy',
      'Child Care Best Practices',
      'Neonatal Health Guidance',
      'Community Health Outreach',
    ],
  },
  {
    name: 'Dr Sandeep Adavaram',
    country: 'India',
    image: '/images/advisory-board/dr-sandeep-adavaram.webp',
    qualifications:
      'MBBS, D.Ortho, DNB Ortho, Fellowship in FAOI, FIP, Ilizarov — University Topper in Orthopaedics 2012',
    specialisation: 'Orthopaedic Surgery',
    experience: '12 years of experience; over 8,000 surgeries performed',
    bio: 'Orthopaedic surgeon with 12 years of experience in trauma, joint replacement, and spine cases, having performed over 8,000 surgeries. He is a pioneer in Ozone Nucleolysis — an innovative, non-surgical approach to treating back pain — and established a tertiary-level hospital in a rural area a decade ago. In the kindergarten setting, he focuses on promoting musculoskeletal health, early detection of orthopaedic issues, educating staff and parents about common musculoskeletal conditions, advising on safety measures and ergonomic considerations, and collaborating with paediatricians, physical therapists, and occupational therapists.',
    responsibilities: [
      'Musculoskeletal Health Promotion',
      'Early Detection of Orthopaedic Issues',
      'Staff and Parent Education',
      'Safety and Ergonomic Advisory',
      'Multidisciplinary Collaboration',
    ],
  },
];

export default function AdvisoryBoardPage() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-msi-purple py-20 text-white">
          <div className="container mx-auto px-4 md:px-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our Advisory Board
            </h1>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              Distinguished medical professionals guiding My School ITALY&apos;s
              neuroscientific approach to early childhood education and childcare.
            </p>
          </div>
        </section>

        {/* Advisory Members */}
        <section className="bg-[#f7f9fc] py-20">
          <div className="container mx-auto px-4 md:px-12">
            <div className="space-y-16">
              {advisoryMembers.map((member, index) => (
                <article
                  key={member.name}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-10 items-start bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden`}
                >
                  {/* Image */}
                  <div className="lg:w-1/3 w-full flex-shrink-0">
                    <div className="relative w-full aspect-square">
                      <Image
                        src={member.image}
                        alt={`${member.name} — Advisory Board Member, ${member.country}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3 w-full p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl md:text-3xl font-bold text-msi-purple">
                        {member.name}
                      </h2>
                      <span className="inline-block bg-msi-orange text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                        {member.country}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 mb-1">
                      {member.qualifications}
                    </p>
                    <p className="text-msi-blue font-semibold text-sm mb-1">
                      {member.specialisation}
                    </p>
                    <p className="text-gray-600 text-sm italic mb-4">
                      {member.experience}
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      {member.bio}
                    </p>

                    {member.responsibilities.length > 0 && (
                      <div>
                        <h3 className="text-sm font-bold text-msi-purple uppercase tracking-wide mb-3">
                          Advisory Focus
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {member.responsibilities.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-msi-orange" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-msi-purple py-16 text-white text-center">
          <div className="container mx-auto px-4 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Guided by Excellence
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
              Our advisory board ensures that every policy and practice at My
              School ITALY meets the highest standards of child health,
              safety, and developmental science.
            </p>
            <a
              href="/contact"
              className="inline-block bg-msi-orange hover:bg-[#c9731f] text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
