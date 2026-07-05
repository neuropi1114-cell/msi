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
  outDir: 'public',
};
