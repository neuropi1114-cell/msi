import React from 'react';
import CorporateChildcarePage from '../page';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedTitle = slug
    ? slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : 'Corporate Childcare';

  return {
    title: `${formattedTitle} | My School ITALY`,
    description: `Corporate childcare solution: ${formattedTitle} by My School ITALY.`,
    alternates: { canonical: `/corporatechildcare/${slug}` },
  };
}

export default async function CorporateChildcareSlugPage({ params }) {
  const { slug } = await params;
  return <CorporateChildcarePage activeSlug={slug} />;
}
