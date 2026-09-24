'use client';

import { useEffect } from 'react';
import { preloadAndCacheImages, cacheImageInLocalStorage, getCachedImage } from '../../utils/imageCache';

// Key critical assets to preload and store in localStorage on page load
const DEFAULT_PRELOAD_IMAGES = [
  '/images/hero/Slider_1-scaled.jpg.bv.webp',
  '/favicon.png',
  '/images/logo/logo.png',
  '/images/nep/inspire_me_eat.png',
  '/images/programs/Aperna_28.png',
  '/images/nep/hero-classroom.webp',
  '/images/about-hero.jpg',
];

export default function LocalStorageImageCache({ customImages = [] }) {
  useEffect(() => {
    // 1. Instantly preload and cache critical hero and UI images in localStorage
    const imagesToPreload = Array.from(new Set([...DEFAULT_PRELOAD_IMAGES, ...customImages]));
    preloadAndCacheImages(imagesToPreload);

    // 2. Scan DOM for <img> tags and serve cached base64 images from localStorage
    const applyAndCacheDOMImages = () => {
      const imgElements = document.querySelectorAll('img');
      imgElements.forEach((img) => {
        const originalSrc = img.getAttribute('src');
        if (originalSrc && !originalSrc.startsWith('data:')) {
          const cachedData = getCachedImage(originalSrc);
          if (cachedData && img.src !== cachedData) {
            img.src = cachedData;
          } else if (!cachedData) {
            // Asynchronously cache into localStorage during idle time
            if ('requestIdleCallback' in window) {
              window.requestIdleCallback(() => cacheImageInLocalStorage(originalSrc));
            } else {
              setTimeout(() => cacheImageInLocalStorage(originalSrc), 800);
            }
          }
        }
      });
    };

    // Run after initial page render
    const timerId = setTimeout(applyAndCacheDOMImages, 150);

    // 3. Observe dynamic DOM changes to auto-cache newly loaded images
    const observer = new MutationObserver((mutations) => {
      let hasNewNodes = false;
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          hasNewNodes = true;
          break;
        }
      }
      if (hasNewNodes) {
        applyAndCacheDOMImages();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timerId);
      observer.disconnect();
    };
  }, [customImages]);

  return null;
}
