/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: 'https://myschoolitaly.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
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
