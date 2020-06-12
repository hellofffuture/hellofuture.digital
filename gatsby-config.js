/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'hello future',
        short_name: 'hello future',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#945DFF',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/images/icon.svg' // This path is relative to the root of the site.
      }
    }
  ]
}
