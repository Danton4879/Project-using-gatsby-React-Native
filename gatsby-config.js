module.exports = {
  siteMetadata: {
    title: "Gatsby Bootstrap",
    description: "essa é uma descrição do meu website usando gatsby e SEO",
    keywords: "gatsby, gatsby-bootstrap, gatsby-react, seo, wordpress",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {resolve: `gatsby-transformer-remark`},
    {
      resolve: `gatsby-source-wordpress`, 
      options: {
      baseUrl: `practice.codingsrc.com`,
      protocol: `https`,
      hostingWPCOM: false,
    }},
    `gatsby-plugin-react-helmet`
  ]
}