import React from "react";
import { css } from "glamor";
import { ArticleNav } from "../components/article_nav";
import Helmet from "react-helmet";
import "../styles/page_main.css";

const IndexPage = ({ data }) => (
  <main className="page-main">
    <Helmet title="Front End Development &ndash; Planning Center Design" />
    <ArticleNav data={data} title="Frontend Development" />
    <h1>Fontend Development</h1>
  </main>
);

export default IndexPage;

export const query = graphql`
  query DevelopmentQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { regex: "/frontend-development/" } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
