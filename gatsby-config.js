//
module.exports = {
  siteMetadata: {
    title: `Banabo`,
    description: `With Banabo, you can completely map every unique visitor's journey with your brand through conversion.`,
    author: `@Colin & Ben`,
    keywords: `marketing attribution, channel growth, cross-channel attribution scores, multi-channel conversions, startup marketing software`,
    siteUrl: "https://banabo.io",
    // Need to add image metadata
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-image`,
    `gatsby-plugin-manifest`,
    `gatsby-plugin-web-font-loader`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby starter default`,
        short_name: `starter`,
        start_url: `/`,
        icon: `./src/images/banabologowhite.svg`,
      },
    },
  ],
};
