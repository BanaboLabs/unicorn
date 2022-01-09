//
module.exports = {
  siteMetadata: {
    description: `With Banabo, you can completely map every unique visitor's journey with your brand through conversion.`,
    author: `@Colin & Ben`,
    keywords: `marketing attribution, multi-touch attribution, cross-channel attribution, attribution model`,
    siteUrl: "https://banabo.io",
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
        icon: `./src/images/banabologocolor.svg`,
      },
    },
  ],
};
