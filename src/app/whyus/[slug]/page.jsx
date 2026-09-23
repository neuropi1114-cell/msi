import React from 'react';
import WhyUsPage from '../page';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedTitle = slug
    ? slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : 'Why Us';

  return {
    title: `${formattedTitle} | My School ITALY`,
    description: `Learn about ${formattedTitle} at My School ITALY — European neuroscience-based early childhood education.`,
    alternates: { canonical: `/whyus/${slug}` },
  };
}

export default async function WhyUsSlugPage({ params }) {
  const { slug } = await params;
  return <WhyUsPage activeSlug={slug} />;
}
