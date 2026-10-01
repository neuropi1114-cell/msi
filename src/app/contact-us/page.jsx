import ContactPage, { metadata as baseMetadata } from '../contact/page';

export const metadata = {
  ...baseMetadata,
  alternates: { canonical: '/contact-us' },
  openGraph: {
    ...baseMetadata?.openGraph,
    url: '/contact-us',
  },
};

export default ContactPage;
