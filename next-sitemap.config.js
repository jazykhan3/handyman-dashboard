/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://handyman-service-fr-04-05-2023.vercel.app',
    generateRobotsTxt: true, // (optional)
    sitemapSize: 5000,
    outDir :'./Out'
  }