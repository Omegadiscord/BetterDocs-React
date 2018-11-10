module.exports = {
  siteMetadata: {
    title: 'BetterDocs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `themes`,
        path: `${__dirname}/src/themes/`,
        ignore: ['_defaults'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `plugins`,
        path: `${__dirname}/src/plugins/`,
        ignore: ['_defaults'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'BetterDocs Discord #1 Plugins & Themes',
        short_name: 'BetterDocs',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#262626',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sourceMap: true,
        outFile: './src/styles/main.css',
        includePaths: ['src/styles'],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-offline',
  ],
}
