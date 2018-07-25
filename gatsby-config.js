module.exports = {
  siteMetadata: {
    url: 'https://thkrcms.netlify.com/',
    title: 'THKR CMS',
    tagline: 'Simple websites for small businesses'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      }
    },
    'gatsby-plugin-netlify'
  ]
}