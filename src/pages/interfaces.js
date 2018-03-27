import React from "react";
import { css } from "glamor";
import { ArticleNav } from "../components/Article_nav";
import Helmet from "react-helmet";
import "../styles/page_main.css";

const IndexPage = ({ data }) => (
  <main className="page-main">
    <Helmet title="Interfaces &amp; Interactions &ndash; Planning Center Design" />
    <ArticleNav data={data} title="Interfaces & Interactions" />
    <h1>Interfaces & Interactions</h1>
  </main>
);

export default IndexPage;

export const query = graphql`
  query InterfacesQuery {
    allMarkdownRemark(
      filter: { frontmatter: { group: { eq: "interfaces" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            group
          }
        }
      }
    }
  }
`;
