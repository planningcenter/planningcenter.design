import React from "react";
import Link from "gatsby-link";
import { css } from "glamor";

export const ArticleNav = ({ data, title, category, ...props }) => (
  <div
    {...props}
    {...css({
      backgroundColor: "#f3f3f3",
      marginRight: "3rem",
      padding: 24,
      width: 260,
    })}
  >
    <span
      className="h4"
      style={{
        fontWeight: 600,
        color: "#484848",
        marginBottom: "1.25em",
        display: "block",
      }}
    >
      {title}
    </span>
    <nav>
      <ul {...css({ listStyle: "none", margin: 0, padding: 0 })}>
        {data.allMarkdownRemark.edges.filter((el) => category ? el.node.frontmatter.path.includes(category) : el).map(
          ({ node: { id, frontmatter: { path, title } } }) => (
            <li key={id} style={{paddingTop: ".25em", paddingBottom: ".25em"}}>
              <Link
                to={path}
                {...css({ color: "#404040", textDecoration: "none", lineHeight: "1.5em", display: "inline-block", width: "100%" })}
                activeStyle={{ fontWeight: 800 }}
              >
                {title}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  </div>
);

// TODO: learn about GraphQL fragaments and co locate required data
