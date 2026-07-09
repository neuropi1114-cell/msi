/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://myschoolitaly.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/api/', '/admin/'] },
    ],
    additionalSitemaps: [],
  },
  changefreq: 'daily',
  priority: 0.7,
  transform: (config, path) => {
    const priorityMap = {
      '/': 1.0,
      '/about': 0.8,
      '/programs': 0.9,
      '/admissions': 0.9,
      '/contact': 0.7,
      '/baby-sensory': 0.7,
      '/day-care': 0.8,
      '/franchise-overview': 0.8,
      '/handbook': 0.6,
      '/media-coverage': 0.6,
      '/msi-venture-philanthropy': 0.6,
      '/nep': 0.8,
      '/video-gallery': 0.6,
    };
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorityMap[path] ?? config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  outDir: 'public',
};
