import React from "react";
import { css } from "glamor";
import { ArticleNav } from "../components/Article_nav";
import Helmet from "react-helmet";
import "../styles/page_main.css";

const IndexPage = ({ data }) => (
  <main className="page-main">
    <Helmet title="Front End Development &ndash; Planning Center Design" />
    <ArticleNav data={data} />
    <h1>Fontend Development</h1>
  </main>
);

export default IndexPage;

export const query = graphql`
  query DevelopmentQuery {
    allMarkdownRemark(
      filter: { frontmatter: { group: { eq: "development" } } }
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
