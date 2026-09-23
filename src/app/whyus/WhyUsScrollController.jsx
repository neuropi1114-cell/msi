'use client';
import { useEffect } from 'react';

export default function WhyUsScrollController({ activeSlug }) {
  useEffect(() => {
    const targetId = activeSlug || (typeof window !== 'undefined' && window.location.hash ? window.location.hash.replace('#', '') : null);
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }
  }, [activeSlug]);

  return null;
}
