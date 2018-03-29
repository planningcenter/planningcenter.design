import React from "react";
import Link from "gatsby-link";
import { css } from "glamor";

export const ArticleNav = ({ data, title, category, ...props }) => (
  <div
    {...props}
    {...css({
      backgroundColor: "#f3f3f3",
      height: "100%",
      left: 70,
      padding: 24,
      position: "fixed",
      top: 0,
      width: 260,
    })}
  >
    <h4
      style={{
        fontWeight: 600,
        color: "#484848",
        marginBottom: "1.25em",
        marginTop: 24,
        display: "block",
      }}
    >
      {title}
    </h4>
    <nav>
      <ul {...css({ listStyle: "none", margin: 0, padding: 0 })}>
        {data.allMarkdownRemark.edges
          .filter(
            el => (category ? el.node.frontmatter.path.includes(category) : el)
          )
          .map(({ node: { id, frontmatter: { path, title } } }) => (
            <li
              key={id}
              style={{ paddingTop: ".25em", paddingBottom: ".25em" }}
            >
              <Link
                to={path}
                {...css({
                  color: "#404040",
                  textDecoration: "none",
                  lineHeight: "1.5em",
                  display: "inline-block",
                  width: "100%",
                })}
                activeStyle={{ fontWeight: 800 }}
              >
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  </div>
);

// TODO: learn about GraphQL fragaments and co locate required data
