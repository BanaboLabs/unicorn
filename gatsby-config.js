//
module.exports = {
  siteMetadata: {
    description: `Unicorn Haus`,
    author: `Unicorn Haus`,
    keywords: `Unicorn Haus`,
    siteUrl: "https://unicornhaus.xyz",
    // Need to add image metadata
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-image`,
    `gatsby-plugin-web-font-loader`,
    `babel-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby starter default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `./src/images/unicornlogo.png`,
      },
    },
  ],
};
