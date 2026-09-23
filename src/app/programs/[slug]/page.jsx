import React from 'react';
import ProgramsPage from '../page';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedTitle = slug
    ? slug
        .split('-')
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ')
    : 'Programs';

  return {
    title: `${formattedTitle} | My School ITALY`,
    description: `Explore ${formattedTitle} at My School ITALY — European early childhood education & daycare.`,
    alternates: { canonical: `/programs/${slug}` },
  };
}

export default async function ProgramsSlugPage({ params }) {
  const { slug } = await params;
  return <ProgramsPage activeSlug={slug} />;
}
