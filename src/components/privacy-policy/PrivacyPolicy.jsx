'use client';

import React from 'react';
import { FileText } from 'lucide-react';

const privacySections = [
  {
    id: 'intro',
    content: (
      <>
        <p><strong>Last updated:</strong> JUNE 01, 2022.</p>
        <p>We know that you care how information about you is used and shared, and we appreciate your trust that we will do so carefully and sensibly. This Privacy Notice describes how My School ITALY collects and processes your personal information through myschoolitaly.com website, devices, products, services, online marketplace and applications that reference this Privacy Notice (together &ldquo;MSI Services&rdquo;).</p>
        <p>By using MSI Services you agree to our use of your personal information (including sensitive personal information) in accordance with this Privacy Notice, as may be amended from time to time by us at our discretion. You also agree and consent to us collecting, storing, processing, transferring, and sharing your personal information (including sensitive personal information) with third parties or service providers for the purposes set out in this Privacy Notice.</p>
        <p>Personal information subject to this Privacy Notice will be collected and retained by My School ITALY, with a registered office: Q city Block B, Grd Flr, RR District, Hyderabad, Telangana, 500032 India.</p>
      </>
    ),
  },
  {
    id: 'what-personal-info',
    title: 'What Personal Information About Customers Does My School ITALY Collect?',
    content: (
      <>
        <p>We collect your personal information in order to provide and continually improve our products and services. Here are the types of personal information we collect:</p>
        <p><strong>Information You Give Us:</strong> We receive and store any information you provide in relation to MSI Services. You can choose not to provide certain information, but then you might not be able to take advantage of many of our MSI Services.</p>
        <p><strong>Automatic Information:</strong> We automatically collect and store certain types of information about your use of MSI Services, including information about your interaction with content and services available through MSI Services. Like many websites, we use cookies and other unique identifiers, and we obtain certain types of information when your web browser or device accesses MSI Services and other content served by or on behalf of My School ITALY on other websites.</p>
        <p><strong>Information from Other Sources:</strong> We might receive information about you from other sources, such as updated delivery and address information from our carriers, which we use to correct our records and deliver your next purchase more easily.</p>
      </>
    ),
  },
  {
    id: 'purposes',
    title: 'For What Purposes Does My School ITALY Use Your Personal Information?',
    content: (
      <>
        <p>We use your personal information to operate, provide, develop, and improve the products and services that we offer our customers. These purposes include:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>Purchase and delivery of products and services. We use your personal information to take and fulfil orders, deliver products and services, process payments, and communicate with you about orders, products and services, and promotional offers.</li>
          <li>Provide, troubleshoot, and improve MSI Services. We use your personal information to provide functionality, analyse performance, fix errors, and improve the usability and effectiveness of the MSI Services.</li>
          <li>Recommendations and personalisation. We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences, and personalise your experience with MSI Services.</li>
          <li>Provide voice, image and camera services. When you use our voice, image and camera services, we use your voice input, images, videos, and other personal information to respond to your requests, provide the requested service to you, and improve our services.</li>
          <li>Comply with legal obligations. In certain cases, we collect and use your personal information to comply with laws. For instance, we collect from sellers information regarding place of establishment and bank account information for identity verification and other purposes.</li>
          <li>Communicate with you. We use your personal information to communicate with you in relation to MSI Services via different channels (e.g., by phone, e-mail, chat).</li>
          <li>We use your personal information to display interest-based ads for features, products, and services that might be of interest to you. We do not use information that personally identifies you to display interest-based ads.</li>
          <li>Fraud Prevention and Credit Risks. We use personal information to prevent and detect fraud and abuse in order to protect the security of our customers. We may also use scoring methods to assess and manage credit risks.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'What About Cookies and Other Identifiers?',
    content: (
      <p>To enable our systems to recognise your browser or device and to provide and improve MSI Services, we use cookies and other identifiers. For more information about cookies and how we use them, please read our Cookies Notice.</p>
    ),
  },
  {
    id: 'sharing',
    title: 'Does My School ITALY Share Your Personal Information?',
    content: (
      <>
        <p>Information about our customers is an important part of our business and we are not in the business of selling our customers&rsquo; personal information to others. We share customers&rsquo; personal information only as described below and with myschoolitaly.com and subsidiaries that My School ITALY controls that either are subject to this Privacy Notice or follow practices at least as protective as those described in this Privacy Notice.</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li><strong>Transactions involving Third Parties:</strong> We make available to you services, products, applications, or skills provided by third parties for use on or through MSI Services.</li>
          <li><strong>Business Transfers:</strong> As we continue to develop our business, we might sell or buy other businesses or services. In such transactions, customer information generally is one of the transferred business assets but remains subject to the promises made in any pre-existing Privacy Notice (unless, of course, the customer consents otherwise). Also, in the unlikely event that myschoolitaly.com, or My School ITALY or any of its affiliates, or substantially all of their assets are acquired, customer information will of course be one of the transferred assets.</li>
          <li><strong>Protection of My School ITALY and Others:</strong> We release account and other personal information when we believe release is appropriate to comply with the law; enforce or apply our Conditions of Use and other agreements; or protect the rights, property, or safety of MSI, our users, or others. This includes exchanging information with other companies and organisations for fraud protection and credit risk reduction.</li>
          <li>Other than as set out above, you will receive notice when personal information about you might be shared with third parties, and you will have an opportunity to choose not to share the information.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'security',
    title: 'How Secure Is Information About Me?',
    content: (
      <ul className="list-disc pl-6 space-y-2">
        <li>We design our systems with your security and privacy in mind.</li>
        <li>We work to protect the security of your personal information during transmission by using encryption protocols and software.</li>
        <li>We follow the Payment Card Industry Data Security Standard (PCI DSS) when handling payment card data.</li>
        <li>We maintain physical, electronic, and procedural safeguards in connection with the collection, storage, processing, and disclosure of personal customer information. Our security procedures mean that we may occasionally request proof of identity before we disclose personal information to you.</li>
        <li>Our devices offer security features to protect them against unauthorised access and loss of data. You can control these features and configure them based on your needs.</li>
        <li>It is important for you to protect against unauthorised access to your password and to your computers, devices and applications. Be sure to sign off when finished using a shared computer.</li>
      </ul>
    ),
  },
  {
    id: 'children',
    title: 'Are Children Allowed to Use MSI Services?',
    content: (
      <p>My School ITALY does not sell products for purchase by children. We sell children&rsquo;s products for purchase by adults. If you are under the age of 18 years, you may use MSI Services only with the involvement of a parent or guardian.</p>
    ),
  },
];

const contactOfficer = {
  grievance: {
    name: 'Mr Nipun Bera',
    designation: 'Grievance Officer',
    email: 'info@myschoolitaly.com',
  },
  compliance: {
    name: 'Mr Antonio Andreazzo',
    designation: 'Compliance Officer',
    email: 'info@myschoolitaly.com',
    address: 'My School ITALY, Q-City Block B, Grd Flr, RR District, Hyderabad, Telangana, India 500032',
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-50/50 py-10">
      <div className="container mx-auto space-y-8">
        <section aria-labelledby="privacy-notice-heading">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 space-y-6">
            
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <FileText className="shrink-0" />
              <div>
                <h1 id="privacy-notice-heading">
                  Digital Data Privacy Notice & Statutory Disclosures
                </h1>
                <p>
                  Information collection, cookies usage, compliance, and Grievance Officer details.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {privacySections.map((section) => (
                <div key={section.id} className="bg-slate-50 p-6 rounded-xl border border-gray-100">
                  {section.title && (
                    <h2>
                      {section.title}
                    </h2>
                  )}
                  <div className="leading-relaxed space-y-3">
                    {section.content}
                  </div>
                </div>
              ))}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="bg-slate-50 p-6 rounded-xl border border-gray-200 space-y-2">
                  <h2>
                    Grievance Officer
                  </h2>
                  <p>Please find below the details of the designated grievance officer:</p>
                  <div className="pt-2 space-y-1 font-medium">
                    <p><span className="font-normal">Name:</span> {contactOfficer.grievance.name}</p>
                    <p><span className="font-normal">Designation:</span> {contactOfficer.grievance.designation}</p>
                    <p><span className="font-normal">E-mail:</span> <a href={`mailto:${contactOfficer.grievance.email}`} className="underline">{contactOfficer.grievance.email}</a></p>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-gray-200 space-y-2">
                  <h2>
                    Compliance Officer
                  </h2>
                  <p>Details of statutory compliance & corporate office:</p>
                  <div className="pt-2 space-y-1 font-medium">
                    <p><span className="font-normal">Name:</span> {contactOfficer.compliance.name}</p>
                    <p><span className="font-normal">Designation:</span> {contactOfficer.compliance.designation}</p>
                    <p><span className="font-normal">E-mail:</span> <a href={`mailto:${contactOfficer.compliance.email}`} className="underline">{contactOfficer.compliance.email}</a></p>
                    <p><span className="font-semibold">Address:</span> {contactOfficer.compliance.address}</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-2">
                <p>
                  The Grievance Officer is identified above pursuant to the provisions of applicable laws including but not limited to the Information Technology Act, 2000 and the Consumer Protection Act, 2019.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
