import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Corporate Childcare Solutions',
  description: 'Empower your workforce with My School ITALY Corporate Childcare solutions. Tailor-made early childhood care and neuroscience-based learning for working parents.',
  alternates: { canonical: '/corporatechildcare' },
  openGraph: {
    title: 'Corporate Childcare Solutions | My School ITALY',
    description: 'Empower your workforce with My School ITALY Corporate Childcare solutions. Tailor-made early childhood care and neuroscience-based learning for working parents.',
    url: '/corporatechildcare',
    siteName: 'My School ITALY',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero/Slider_1-scaled.jpg.bv.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Childcare Solutions | My School ITALY',
    description: 'Empower your workforce with My School ITALY Corporate Childcare solutions. Tailor-made early childhood care and neuroscience-based learning for working parents.',
  },
};

export const corporateChildcareDrawerBody = (
  <div className="space-y-6 text-gray-700 leading-relaxed font-lato text-base pt-2">
    {/* Highlight Quote Box */}
    <div className="bg-gradient-to-r from-msi-purple/10 via-msi-orange/5 to-transparent p-5 rounded-2xl border-l-4 border-msi-orange shadow-xs">
      <p className="font-semibold text-msi-purple text-lg leading-snug">
        &ldquo;When employees know their children are cared for, they can focus on their work.&rdquo;
      </p>
    </div>

    {/* Paragraph 1 */}
    <p className="text-gray-600">
      For working parents, childcare is not simply a family issue. It can directly influence <strong className="text-gray-800">return to work</strong>, <strong className="text-gray-800">attendance</strong>, <strong className="text-gray-800">productivity</strong>, <strong className="text-gray-800">employee retention</strong>, and complete peace of mind.
    </p>

    {/* Key Highlights Card List */}
    <div className="bg-[#f7f9fc] p-5 rounded-2xl border border-gray-100 space-y-3">
      <h4 className="font-bold text-msi-purple text-sm uppercase tracking-wider mb-2">
        Tailored Workplace Solutions
      </h4>
      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
        <span className="text-sm text-gray-700">
          <strong>Professionally Managed Solutions:</strong> Crèche, daycare, and extended childcare tailored for today&apos;s corporate realities.
        </span>
      </div>
      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
        <span className="text-sm text-gray-700">
          <strong>Flexible Campus Models:</strong> From on-site corporate crèches to reserved seats across multiple MSI centers.
        </span>
      </div>
      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-5 h-5 text-msi-orange shrink-0 mt-0.5" />
        <span className="text-sm text-gray-700">
          <strong>Aligned Patterns:</strong> Custom models crafted around your organization&apos;s work shifts and policy goals.
        </span>
      </div>
    </div>

    {/* Final Callout Banner */}
    <div className="bg-msi-purple text-white p-5 rounded-2xl shadow-md text-center">
      <p className="text-xs uppercase tracking-widest text-msi-yellow font-bold mb-1">
        Our Promise To Your Workforce
      </p>
      <p className="font-bold text-lg md:text-xl text-white">
        You Take Care of Your People. <br />
        <span className="text-msi-orange">We Help Take Care of Their Little People.</span>
      </p>
    </div>
  </div>
);
