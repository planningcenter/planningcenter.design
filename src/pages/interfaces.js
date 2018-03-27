import React from "react";
import { ArticleNav } from "../components/Article_nav";

const IndexPage = ({ data }) => (
  <div>
    <h1>Interfaces & Interactions</h1>
    <ArticleNav data={data} />
  </div>
);

export default IndexPage;

export const query = graphql`
  query InterfacesQuery {
    allMarkdownRemark(filter: {frontmatter: {group: {eq: "interfaces"}}}) {
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
