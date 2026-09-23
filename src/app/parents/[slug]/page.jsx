import React from 'react';
import ParentsPage from '../page';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedTitle = slug
    ? slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : 'Parents';

  return {
    title: `${formattedTitle} | My School ITALY`,
    description: `Information on ${formattedTitle} for parents at My School ITALY.`,
    alternates: { canonical: `/parents/${slug}` },
  };
}

export default async function ParentsSlugPage({ params }) {
  const { slug } = await params;
  return <ParentsPage activeSlug={slug} />;
}
