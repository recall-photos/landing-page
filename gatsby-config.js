module.exports = {
  siteMetadata: {
    title: 'Recall',
  },
  plugins: [
    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-128387699-1",
      // Puts tracking script in the head instead of the body
      head: false,
      // Setting this parameter is optional
      anonymize: true,
      // Setting this parameter is also optional
      respectDNT: true,
      // Any additional create only fields (optional)
      sampleRate: 5,
      siteSpeedSampleRate: 10,
      cookieDomain: "recall.photos",
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
    resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /svgs/
          }
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'recall-landing-page',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
