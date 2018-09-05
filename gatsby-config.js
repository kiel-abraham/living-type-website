module.exports = {
  siteMetadata: {
    siteUrl: 'https://thkrcms.netlify.com',
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ["/admin/*"]
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['/admin/*'] }]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-netlify'
  ]
}