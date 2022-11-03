module.exports = {
  siteMetadata: {
    title: `Numérique pour toutes`,
    siteUrl: `https://numerique-pour-toutes.web.app`,
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Numérique pour toutes",
        short_name: "Numérique pour toutes",
        start_url: "/",
        display: "standalone",
        icon: "src/images/logo.png",
        orientation: "portrait",
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
  ],
};
