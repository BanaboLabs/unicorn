module.exports = {
  siteMetadata: {
    title: `Sandbox`,
    description: `The only growth tool you'll need`,
    author: `@Colin & Ben`,
    keywords: `growth, marketing, attribution, cross-channel, conversion`,
    // Need to add image metadata
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby starter default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `./src/images/logo-white.svg`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
