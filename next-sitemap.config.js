module.exports = {
  siteUrl: process.env.SITE_URL || 'https://portfolio-dileep.vercel.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
