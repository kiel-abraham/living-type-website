module.exports = {
  siteMetadata: {
    title: 'THKR CMS',
    tagline: 'Simple websites for small businesses'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-transformer-remark`,
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify'
  ]
}