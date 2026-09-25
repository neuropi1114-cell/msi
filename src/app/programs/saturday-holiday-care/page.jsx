import React from 'react';
import TopBar from '../../../components/layout/TopBar';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ContactUs from '../../../components/common/ContactUs';
import SectionHeader from '../../../components/common/SectionHeader';
import { buildPageMetadata, getSeoData } from '../../../utils/seo';

export const metadata = buildPageMetadata('/programs/saturday-holiday-care/');

export default function Page() {
  const seo = getSeoData('/programs/saturday-holiday-care/');

  return (
    <>
      <TopBar />
      <Header />
      <main className="min-h-screen bg-[#f7f9fc]">
        <div className="pt-8">
          <SectionHeader
            title={seo.h1}
            subtitle={seo.primaryKeyword}
            description={seo.description}
          />
        </div>

        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
            <h2 className="text-2xl font-bold text-msi-purple">{seo.title}</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{seo.description}</p>
            {seo.notes && (
              <div className="p-4 rounded-xl bg-amber-50 border-l-4 border-amber-400 text-amber-900 text-sm">
                <strong>Note:</strong> {seo.notes}
              </div>
            )}
            <div className="pt-4 flex flex-wrap gap-2">
              {seo.keywords.map((kw, i) => (
                <span key={i} className="px-3 py-1 bg-purple-50 text-msi-purple text-xs font-semibold rounded-full border border-purple-100">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        <ContactUs />
      </main>
      <Footer />
    </>
  );
}
