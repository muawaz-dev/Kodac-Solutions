/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kodacsolutions.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
  },
};