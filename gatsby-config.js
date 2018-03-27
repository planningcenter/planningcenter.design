module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/articles`,
        name: "markdown-pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [`gatsby-remark-prismjs`],
            },
          },
          // {
          //   resolve: `gatsby-remark-prismjs`,
          //   options: {
          //     // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/#gatsby-remark-prismjs
          //     // Class prefix for <pre> tags containing syntax highlighting;
          //     // defaults to 'language-' (eg <pre class="language-js">).
          //     // If your site loads Prism into the browser at runtime,
          //     // (eg for use with libraries like react-live),
          //     // you may use this to prevent Prism from re-processing syntax.
          //     // This is an uncommon use-case though;
          //     // If you're unsure, it's best to use the default value.
          //     classPrefix: "language-",
          //     // This is used to allow setting a language for inline code
          //     // (i.e. single backticks) by creating a separator.
          //     // This separator is a string and will do no white-space
          //     // stripping.
          //     // A suggested value for English speakers is the non-ascii
          //     // character '›'.
          //     inlineCodeMarker: null,
          //     // This lets you set up language aliases.  For example,
          //     // setting this to '{ sh: "bash" }' will let you use
          //     // the language "sh" which will highlight using the
          //     // bash highlighter.
          //     aliases: {},
          //   },
          // },
        ],
      },
    },
  ],
};
