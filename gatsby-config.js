require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Living Type`,
    description: `Home of Living Type music Brisbane`,
    author: `Kiel`,
    menu: [
      { name: `Home`, link: `/` },
      { name: `Music`, link: `/music` },
      { name: `Shows`, link: `/shows` },
      { name: `Contact`, link: `/contact` },
    ],
    socials: [
      { name: `Facebook`, link: `https://www.facebook.com/livingtype` },
      { name: `Instagram`, link: `https://www.instagram.com/livingtypeofficial/` },
      { name: `Youtube`, link: `https://www.youtube.com/channel/UCgGeqr6xUH3C71ohNZcXb2w` },
      { name: `Spotify`, link: `https://open.spotify.com/artist/2IQEc43d5HvELQg2lSgBrD` },
      { name: `Apple Music`, link: `https://itunes.apple.com/au/artist/living-type/1439884608` },
      { name: `Google Play`, link: `https://play.google.com/store/music/album/Living_Type_Eleven_EP?id=Bfpyccvlitkyozku7gt7w5drvla` },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: `${process.env.AIRTABLE_API_KEY}`, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: `${process.env.AIRTABLE_LT_CRM_BASE_ID}`,
            tableName: `Shows`,
            tableView: `Website`, // optional
            queryName: `Shows`, // optionally default is false - makes all records in this table a separate node type, based on your tableView, or if not present, tableName, e.g. a table called "Fruit" would become "allAirtableFruit". Useful when pulling many airtables with similar structures or fields that have different types. See https://github.com/jbolda/gatsby-source-airtable/pull/52.
            // mapping: { Flyer: `fileNode` }, // optional, e.g. "text/markdown", "fileNode"
            // tableLinks: [`Venue`, `Bands`], // optional, for deep linking to records across tables.
            separateNodeType: true, // boolean, default is false, see the documentation on naming conflicts for more information
            // separateMapType: false, // boolean, default is false, see the documentation on using markdown and attachments for more information
          },
          {
            baseId: `${process.env.AIRTABLE_LT_CAT_BASE_ID}`,
            tableName: `Songs`,
            tableView: `Website`,
            queryName: `Songs`,
            // mapping: { Artwork: `fileNode` },
            // tableLinks: [`Album`],
            separateNodeType: true,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/living-type-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
