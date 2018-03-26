import React from "react";
import Link from "gatsby-link";

export const PageList = ({ data }) => (
  <ul>
    {data.allSitePage.edges
      .filter(
        ({ node: { path } }) =>
          !["/dev-404-page/", "/404/", , "/404.html"].includes(path)
      )
      .map(({ node: { id, path } }) => (
        <li key={id}>
          <Link to={path}>{path}</Link>
        </li>
      ))}
  </ul>
);

// TODO: learn about GraphQL fragaments and co locate required data
