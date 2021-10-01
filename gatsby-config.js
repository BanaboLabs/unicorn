module.exports = {
  siteMetadata: {
    title: `Banabo`,
    description: `The only growth tool you'll need`,
    author: `@Colin & Ben`,
    keywords: `marketing attribution, shopify growth marketing, cross-channel attribution scores, multi-channel conversions, startup marketing software`,
    siteUrl: "https://banabo.io",
    // Need to add image metadata
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-sitemap",
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
