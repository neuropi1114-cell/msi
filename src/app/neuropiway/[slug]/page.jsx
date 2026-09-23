import React from 'react';
import NeuroPiWayPage from '../page';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedTitle = slug
    ? slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : 'The NeuroPi Way';

  return {
    title: `${formattedTitle} | My School ITALY`,
    description: `Discover ${formattedTitle} at My School ITALY — Neuroscience-informed pedagogy.`,
    alternates: { canonical: `/neuropiway/${slug}` },
  };
}

export default async function NeuroPiWaySlugPage({ params }) {
  const { slug } = await params;
  return <NeuroPiWayPage activeSlug={slug} />;
}
