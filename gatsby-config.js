const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.jam-spread-ninja.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`
    },
    {
      resolve: 'gatsby-plugin-styled-components'
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-118401527-3",
        head: true
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JAM Spread Ninja`,
        short_name: `JAM`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `blog`),
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `img`),
      }
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`
  ],
}