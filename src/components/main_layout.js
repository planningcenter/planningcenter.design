import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import "table.css";
import "@planningcenter/icons/css/symbol.css";
import "../styles/shared.css";
import "../styles/prism-ghcolors.css";

export default function({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          allMarkdownRemark {
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
      `}
      render={data => (
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
          <Helmet
            title="Planning Center Design"
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" },
            ]}
          />
          <div style={{ padding: "3rem" }}>{children}</div>
          <div style={{ padding: "3rem", backgroundColor: "#f8f8f8" }}>
            <nav>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {data.allMarkdownRemark.edges.map(
                  ({ node: { id, frontmatter: { path, title } } }) => (
                    <li
                      key={id}
                      style={{ paddingTop: ".25em", paddingBottom: ".25em" }}
                    >
                      <Link to={path} activeStyle={{ fontWeight: 800 }}>
                        {title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </div>
        </div>
      )}
    />
  );
}
