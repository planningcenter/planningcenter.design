import React from "react";
import Link from "gatsby-link";
import { css } from "glamor";

export const ArticleNav = ({ data }) => (
  <nav
    {...css({
      backgroundColor: "#f3f3f3",
      marginRight: "3rem",
      padding: 24,
      width: 260,
    })}
  >
    <ul {...css({ listStyle: "none", margin: 0, padding: 0 })}>
      {data.allMarkdownRemark.edges.map(
        ({ node: { id, frontmatter: { path, title } } }) => (
          <li key={id} style={{ lineHeight: 2 }}>
            <Link
              to={path}
              {...css({ color: "#404040", textDecoration: "none" })}
              activeStyle={{ fontWeight: 800 }}
            >
              {title}
            </Link>
          </li>
        )
      )}
    </ul>
  </nav>
);

// TODO: learn about GraphQL fragaments and co locate required data
