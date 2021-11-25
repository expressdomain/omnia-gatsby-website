require('dotenv').config({
  path: `.env`,
});

module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,

    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: process.env.WPGRAPHQL_URL,
        schema: {
          perPage: 20, // currently set to 100
          requestConcurrency: 5, // currently set to 5
          previewRequestConcurrency: 2, // currently set to 2
        },
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Omnia Consultancy`,
        short_name: `Omnia Consultancy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/omnia-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
