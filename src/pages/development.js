import React from "react";
import { ArticleNav } from "../components/Article_nav";

const IndexPage = ({ data }) => (
  <div>
    <h1>Fontend Development</h1>
    <ArticleNav data={data} />
  </div>
);

export default IndexPage;

export const query = graphql`
  query DevelopmentQuery {
    allMarkdownRemark(filter: {frontmatter: {group: {eq: "development"}}}) {
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