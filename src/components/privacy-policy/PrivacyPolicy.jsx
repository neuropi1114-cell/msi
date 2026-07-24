'use client';

import React from 'react';
import Image from 'next/image';

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
        <ul>
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
        <ul>
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
      <ul>
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
    id: 'advertising',
    title: 'What About Advertising?',
    content: (
      <>
        <p><strong>Third-Party Advertisers and Links to Other Websites:</strong> MSI Services may include third-party advertising and links to other websites and apps. Third-party advertising partners may collect information about you when you interact with their content, advertising, and services. For more information about third-party advertising at MSI, including interest-based ads, please read our Interest-Based Ads policy. To adjust your advertising preferences, please go to the Advertising Preferences page.</p>
        <p><strong>Use of Third-Party Advertising Services:</strong> We provide ad companies with information that allows them to serve you with more useful and relevant My School ITALY ads and to measure their effectiveness. We never share your name or other information that directly identifies you when we do this. Instead, we use an advertising identifier like a cookie or other device identifier. For example, if you have already downloaded one of our apps, we will share your advertising identifier and data about that event so that you will not be served an ad to download the app again. Some ad companies also use this information to serve you relevant ads from other advertisers. You can learn more about how to opt-out of interest-based advertising by going to the Advertising Preferences page.</p>
      </>
    ),
  },
  {
    id: 'access',
    title: 'What Information Can I Access?',
    content: (
      <p>You can access your information, including your name, address, payment options, profile information, Prime membership, household settings, and purchase history in the &ldquo;Your Account&rdquo; section of the website or mobile application. To request access to personal information that is not available through Your Account you can submit a request here.</p>
    ),
  },
  {
    id: 'choices',
    title: 'What Choices Do I Have?',
    content: (
      <>
        <p>If you have any questions as to how we collect and use your personal information, please contact our Grievance Officer. Many of our MSI Services also include settings that provide you with options as to how your information is being used.</p>
        <p>As described above, you can always choose not to provide certain information, but then you might not be able to take advantage of many of the MSI Services.</p>
        <p>You can add or update certain information on pages such as those referenced in What Information Can I Access?. When you update information, we usually keep a copy of the prior version for our records.</p>
        <p>If you do not want to receive e-mail or other communications from us, please adjust your Customer Communication Preferences.</p>
        <p>If you don&rsquo;t want to receive in-app notifications from us, please adjust your notification settings in the app or device.</p>
        <p>If you do not want to see interest-based ads, please adjust your Advertising Preferences.</p>
        <p>The Help feature on most browsers and devices will tell you how to prevent your browser or device from accepting new cookies or other identifiers, how to have the browser notify you when you receive a new cookie or how to block cookies altogether. Because cookies and identifiers allow you to take advantage of some essential features of MSI Services, we recommend that you leave them turned on. For instance, if you block or otherwise reject our cookies, you will not be able to add items to your Shopping Cart, proceed to Checkout, or use any Services that require you to Sign in. For more information about cookies and other identifiers, see our Cookies Notice.</p>
        <p>If you want to browse our websites without linking the browsing history to your account, you may do so by logging out of your account here and blocking cookies on your browser. You will also be able to opt out of certain other types of data usage by updating your settings on the applicable My School ITALY website (e.g., in &ldquo;Manage Your Content and Devices&rdquo;).</p>
      </>
    ),
  },
  {
    id: 'children',
    title: 'Are Children Allowed to Use MSI Services?',
    content: (
      <p>My School ITALY does not sell products for purchase by children. We sell children&rsquo;s products for purchase by adults. If you are under the age of 18 years, you may use MSI Services only with the involvement of a parent or guardian.</p>
    ),
  },
  {
    id: 'conditions',
    title: 'Conditions of Use, Notices, and Revisions',
    content: (
      <>
        <p>If you choose to use MSI Services, your use and any dispute over privacy is subject to this Notice and our Conditions of Use, including limitations on damages, resolution of disputes, and application of the prevailing law in India. If you have any concern about privacy at My School ITALY, please contact us with a thorough description, and we will try to resolve it. Our business changes constantly, and our Privacy Notice will change also. You should check our websites frequently to see recent changes.</p>
        <p>Unless stated otherwise, our current Privacy Notice applies to all information that we have about you and your account. We stand behind the promises we make, however, and will never materially change our policies and practices to make them less protective of customer information collected in the past without the consent of affected clients.</p>
      </>
    ),
  },
  {
    id: 'information-given',
    title: 'Information You Give Us When You Use MSI Services',
    content: (
      <>
        <p><strong>You provide information to us when you:</strong></p>
        <ul>
          <li>search or shop for products or services in our marketplace;</li>
          <li>add or remove an item from your cart, or place an order through or use MSI Services;</li>
          <li>download, stream, view, or use content on a device or through a service or application on a device;</li>
          <li>provide information in Your Account (and you might have more than one if you have used more than one e-mail address or mobile number when shopping with us) or Your Profile;</li>
          <li>talk to or otherwise interact with our Alexa Voice service;</li>
          <li>upload your contacts, including access to mobile device contacts for certain services;</li>
          <li>configure your settings on, provide data access permissions for, or interact with an My School ITALY device or service;</li>
          <li>provide information in your Seller Account, Restaurant Central Account, Service Provider Account, or any other account we make available that allows you to develop or offer software, goods, or services to My School ITALY customers;</li>
          <li>offer your products or services on or through MSI Services;</li>
          <li>communicate with us by phone, e-mail, or otherwise;</li>
          <li>complete a questionnaire, a support ticket, or a contest entry form;</li>
          <li>upload or stream images, videos or audio or other files while using MSI Services;</li>
          <li>use our services such as Prime Video;</li>
          <li>compile Playlists, Watchlists, Wish Lists or other gift registries;</li>
          <li>participate in Discussion Boards or other community features;</li>
          <li>provide and rate Reviews;</li>
          <li>specify a Special Occasion Reminder; or</li>
          <li>employ Product Availability Alerts, such as Available to Order Notifications.</li>
        </ul>
        <p><strong>As a result of those actions, you might supply us with such information as:</strong></p>
        <ul>
          <li>identifying information such as your name, address and phone numbers;</li>
          <li>payment information;</li>
          <li>your age;</li>
          <li>your location information;</li>
          <li>your IP address;</li>
          <li>people, addresses and phone numbers listed in your Addresses;</li>
          <li>e-mail addresses of your friends and other people;</li>
          <li>content of reviews and e-mails to us;</li>
          <li>personal description and photograph in Your Profile;</li>
          <li>Financial information (including GST and PAN numbers), such as your GST or other tax identification information;</li>
          <li>image and video data; and</li>
          <li>Credit history information from credit bureaus.</li>
        </ul>
      </>
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
    <section className="w-full">
      {/* Content Sections */}
      <div className="mx-auto max-w-4xl px-4 py-12 md:px-8">
        {privacySections.map((section) => (
          <div key={section.id} className="mb-10">
            {section.title && (
              <h2 className="mb-4 text-2xl font-semibold text-gray-800 font-lato">{section.title}</h2>
            )}
            <div className="max-w-none text-gray-600 font-lato leading-relaxed text-justify [&_li]:ml-6 [&_li]:mb-2 [&_li]:list-disc [&_p]:mb-4">
              {section.content}
            </div>
          </div>
        ))}

        {/* Grievance Officer */}
        <div className="mb-10 font-lato">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Grievance Officer</h2>
          <div className="rounded-lg bg-gray-50 p-6">
            <p>Please find below the details of the grievance officer:</p>
            <p><strong>Name:</strong> {contactOfficer.grievance.name}</p>
            <p><strong>Designation:</strong> {contactOfficer.grievance.designation}</p>
            <p><strong>E-mail:</strong> {contactOfficer.grievance.email}</p>
          </div>
        </div>

        {/* Compliance Officer */}
        <div className="mb-10 font-lato">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">Compliance Officer</h2>
          <div className="rounded-lg bg-gray-50 p-6">
            <p>Please find below the details of the Compliance officer:</p>
            <p><strong>Name:</strong> {contactOfficer.compliance.name}</p>
            <p><strong>Designation:</strong> {contactOfficer.compliance.designation}</p>
            <p><strong>E-mail:</strong> {contactOfficer.compliance.email}</p>
            <p><strong>Address:</strong> {contactOfficer.compliance.address}</p>
            <p className="mt-4 text-sm text-gray-500">
              The Grievance Officer is identified above pursuant to the provisions of applicable laws including but not limited to the Information Technology Act, 2000 and the Consumer Protection Act, 2019, and the Rules enacted under those laws.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
