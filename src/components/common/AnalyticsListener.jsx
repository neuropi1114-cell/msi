'use client';
import { useEffect } from 'react';

/**
 * Global analytics event listener for tracking user interactions with:
 * - Phone numbers (tel: links) -> click_call
 * - WhatsApp links (wa.me / whatsapp.com) -> click_whatsapp
 * - Email addresses (mailto: links) -> click_email
 */
export default function AnalyticsListener() {
  useEffect(() => {
    const handleGlobalClick = (event) => {
      const anchor = event.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (!href) return;

      if (typeof window === 'undefined' || typeof window.gtag !== 'function') {
        return;
      }

      // 1. Phone link clicked
      if (href.startsWith('tel:')) {
        const phone = href.replace('tel:', '').trim();
        window.gtag('event', 'click_call', {
          event_category: 'contact',
          event_label: phone || href,
          link_url: href,
        });
      }
      // 2. WhatsApp link clicked
      else if (href.includes('wa.me') || href.includes('whatsapp.com')) {
        window.gtag('event', 'click_whatsapp', {
          event_category: 'contact',
          event_label: href,
          link_url: href,
        });
      }
      // 3. Email link clicked
      else if (href.startsWith('mailto:')) {
        const email = href.replace('mailto:', '').split('?')[0].trim();
        window.gtag('event', 'click_email', {
          event_category: 'contact',
          event_label: email || href,
          link_url: href,
        });
      }
    };

    document.addEventListener('click', handleGlobalClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleGlobalClick, { capture: true });
    };
  }, []);

  return null;
}
