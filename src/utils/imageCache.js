/**
 * Utility to preload and cache images in browser localStorage & memory for fast loading.
 */

const CACHE_PREFIX = 'msi_img_v1_';
const CACHE_META_KEY = 'msi_img_meta_v1';
const MAX_SINGLE_IMAGE_SIZE = 350 * 1024; // 350KB max per image to save localStorage space
const MAX_TOTAL_CACHE_ENTRIES = 30; // Keep most important images in localStorage

// In-memory cache for ultra-fast single session reads
const memoryCache = new Map();

/**
 * Synchronously retrieves a cached base64 image from localStorage or memory cache
 * @param {string} src 
 * @returns {string|null}
 */
export function getCachedImage(src) {
  if (!src || typeof window === 'undefined') return null;

  if (memoryCache.has(src)) {
    return memoryCache.get(src);
  }

  try {
    const key = CACHE_PREFIX + src;
    const cached = localStorage.getItem(key);
    if (cached) {
      memoryCache.set(src, cached);
      return cached;
    }
  } catch (e) {
    // LocalStorage access disabled or restricted
  }

  return null;
}

/**
 * Converts a Blob to a Base64 string
 */
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Clean up old cache entries if quota exceeded or entry limit reached
 */
function evictOldEntries() {
  try {
    const meta = JSON.parse(localStorage.getItem(CACHE_META_KEY) || '[]');
    if (meta.length > MAX_TOTAL_CACHE_ENTRIES) {
      const toRemove = meta.splice(0, meta.length - MAX_TOTAL_CACHE_ENTRIES);
      toRemove.forEach((url) => {
        localStorage.removeItem(CACHE_PREFIX + url);
        memoryCache.delete(url);
      });
      localStorage.setItem(CACHE_META_KEY, JSON.stringify(meta));
    }
  } catch (e) {
    // Ignore cleanup errors
  }
}

/**
 * Fetches an image, converts it to base64, and saves it in localStorage
 * @param {string} src 
 */
export async function cacheImageInLocalStorage(src) {
  if (!src || typeof window === 'undefined') return null;

  // Skip inline data URIs or blob URLs
  if (src.startsWith('data:') || src.startsWith('blob:')) return src;

  // Check if already cached
  const existing = getCachedImage(src);
  if (existing) return existing;

  try {
    const response = await fetch(src, { mode: 'cors' });
    if (!response.ok) return null;

    const blob = await response.blob();

    // Skip saving if single file is too large for localStorage to prevent quota overflow
    if (blob.size > MAX_SINGLE_IMAGE_SIZE) {
      const memoryUrl = URL.createObjectURL(blob);
      memoryCache.set(src, memoryUrl);
      return memoryUrl;
    }

    const base64Data = await blobToBase64(blob);
    const key = CACHE_PREFIX + src;

    try {
      localStorage.setItem(key, base64Data);

      const meta = JSON.parse(localStorage.getItem(CACHE_META_KEY) || '[]');
      if (!meta.includes(src)) {
        meta.push(src);
        localStorage.setItem(CACHE_META_KEY, JSON.stringify(meta));
      }
      evictOldEntries();
    } catch (quotaError) {
      // LocalStorage quota reached: evict half of cache and retry
      evictOldEntries();
    }

    memoryCache.set(src, base64Data);
    return base64Data;
  } catch (err) {
    return null;
  }
}

/**
 * Preloads a list of image URLs into DOM & localStorage
 * @param {Array<string>} urls 
 */
export function preloadAndCacheImages(urls = []) {
  if (typeof window === 'undefined') return;

  urls.forEach((src) => {
    if (!src) return;

    // Browser pre-loader
    const img = new Image();
    img.src = src;

    // Asynchronous background local storage cacher
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => cacheImageInLocalStorage(src));
    } else {
      setTimeout(() => cacheImageInLocalStorage(src), 300);
    }
  });
}
