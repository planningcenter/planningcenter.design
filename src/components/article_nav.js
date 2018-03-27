import React from "react";
import Link from "gatsby-link";

export const ArticleNav = ({ data }) => (
  <ul>
    {data.allMarkdownRemark.edges
      .map(({ node: { id, frontmatter: { path } } }) => (
        <li key={id}>
          <Link to={path}>{path}</Link>
        </li>
      ))}
  </ul>
);

// TODO: learn about GraphQL fragaments and co locate required data
