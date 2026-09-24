'use client';

import React from 'react';
import { FileText } from 'lucide-react';

const termsSections = [
  {
    id: 'intro',
    content: (
      <>
        <p><strong>Effective date:</strong> June 8, 2022</p>
        <p>
          These Terms govern your access to, usage of all content, Product and Services available at{' '}
          <a href="https://myschoolitaly.com" className="text-msi-purple underline hover:text-msi-orange transition-colors">
            https://myschoolitaly.com
          </a>{' '}
          website (the &ldquo;Service&rdquo;) operated by My School ITALY (&ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;).
        </p>
        <p>
          Your access to our services are subject to your acceptance, without modification, of all of the terms and conditions contained herein and all other operating rules and policies published and that may be published from time to time by us.
        </p>
        <p>
          Please read the Agreement carefully before accessing or using our Services. By accessing or using any part of our Services, you agree to be bound by these Terms. If you do not agree to any part of the terms of the Agreement, then you may not access or use our Services.
        </p>
      </>
    ),
  },
  {
    id: 'intellectual-property',
    title: 'Intellectual Property',
    content: (
      <p>
        The Agreement does not transfer from Us to you any of Ours or third party intellectual property, and all right, title, and interest in and to such property will remain (as between the parties) solely with My School ITALY and its licensors.
      </p>
    ),
  },
  {
    id: 'third-party-services',
    title: 'Third Party Services',
    content: (
      <>
        <p>
          In using the Services, you may use third-party services, products, software, embeds, or applications developed by a third party (&ldquo;Third Party Services&rdquo;).
        </p>
        <p className="mt-2 font-medium">If you use any Third Party Services, you understand that:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            Any use of a Third Party Service is at your own risk, and we shall not be responsible or liable to anyone for Third Party websites or Services.
          </li>
          <li>
            You acknowledge and agree that We shall not be responsible or liable for any damage or loss caused or alleged to be caused by or in connection with the use of any such content, goods or services available on or through any such web sites or services.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'accounts',
    title: 'Accounts',
    content: (
      <>
        <p>
          Where use of any part of our Services requires an account, you agree to provide us with complete and accurate information when you register for an account.
        </p>
        <p>
          You will be solely responsible and liable for any activity that occurs under your account. You are responsible for keeping your account information up-to-date and for keeping your password secure.
        </p>
        <p>
          You are responsible for maintaining the security of your account that you use to access the Service. You shall not share or misuse your access credentials. You must notify us immediately of any unauthorized uses of your account or upon becoming aware of any other breach of security.
        </p>
      </>
    ),
  },
  {
    id: 'termination',
    title: 'Termination',
    content: (
      <>
        <p>
          We may terminate or suspend your access to all or any part of our Services at any time, with or without cause, with or without notice, effective immediately.
        </p>
        <p>
          If you wish to terminate the Agreement or your My School ITALY account, you may simply discontinue using our Services.
        </p>
        <p>
          All provisions of the Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
        </p>
      </>
    ),
  },
  {
    id: 'disclaimer',
    title: 'Disclaimer',
    content: (
      <p>
        Our Services are provided &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis. My School ITALY and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither My School ITALY, nor its suppliers and licensors, makes any warranty that our Services will be error free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, our Services at your own discretion and risk.
      </p>
    ),
  },
  {
    id: 'jurisdiction',
    title: 'Jurisdiction and Applicable Law',
    content: (
      <>
        <p>
          Except to the extent any applicable law provides otherwise, the Agreement and any access to or use of our Services will be governed by the laws of India.
        </p>
        <p>
          The proper venue for any disputes arising out of or relating to the Agreement and any access to or use of our Services will be the state and federal courts located in India.
        </p>
      </>
    ),
  },
  {
    id: 'changes',
    title: 'Changes',
    content: (
      <>
        <p>
          My School ITALY reserves the right, at our sole discretion, to modify or replace these Terms at any time.
        </p>
        <p>
          If we make changes that are material, we will let you know by posting on our website, or by sending you an email or other communication before the changes take effect. The notice will designate a reasonable period of time after which the new terms will take effect.
        </p>
        <p>
          If you disagree with our changes, then you should stop using our Services within the designated notice period, or once the changes become effective.
        </p>
        <p>
          Your continued use of our Services will be subject to the new terms.
        </p>
      </>
    ),
  },
];

export default function Terms() {
  return (
    <div className="bg-slate-50/50 py-10">
      <div className="container mx-auto space-y-8">
        <section aria-labelledby="terms-heading">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
            
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <FileText className="shrink-0 text-msi-orange" />
              <div>
                <h1 id="terms-heading" className="text-2xl font-bold text-gray-900">
                  Terms and Conditions
                </h1>
                <p className="text-sm text-gray-600">
                  Terms of service governing access to and usage of My School ITALY web services and products.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {termsSections.map((section) => (
                <div key={section.id} className="bg-slate-50 p-6 rounded-xl border border-gray-100">
                  {section.title && (
                    <h2 className="text-lg font-bold text-msi-purple mb-3">
                      {section.title}
                    </h2>
                  )}
                  <div className="leading-relaxed space-y-3 text-gray-700 text-sm md:text-base">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
