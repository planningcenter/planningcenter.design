import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import Link from "gatsby-link";
import "../styles/remark-table.css";
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
                  category
                }
              }
            }
          }
        }
      `}
      render={data => {
        let categorizedArticles = {};

        data.allMarkdownRemark.edges.forEach(article => {
          let category = article.node.frontmatter.category || "Other";

          if (!categorizedArticles[category]) {
            categorizedArticles[category] = [];
          }

          categorizedArticles[category].push(article);
        });

        return (
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
            <Helmet
              title="Planning Center Design"
              meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" },
              ]}
            />
            <div style={{ padding: "3rem" }}>
              {typeof children === "function" ? children() : children}
            </div>
            <div style={{ padding: "3rem", backgroundColor: "#f8f8f8" }}>
              <nav>
                {Object.entries(categorizedArticles)
                  .slice()
                  .sort(([c1], [c2]) => {
                    if (c1 > c2) return -1;
                    if (c2 > c1) return 1;
                    return 0;
                  })
                  .map(([category, articles]) => (
                    <section>
                      <strong>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </strong>

                      <ul style={{ listStyle: "none", padding: 8 }}>
                        {articles
                          .slice()
                          .sort((a1, a2) => {
                            // this isn't doing shit
                            // can i do this in a GraphQL Query?
                            if (
                              a1.node.frontmatter.title >
                              a2.node.frontmatter.title
                            )
                              return -1;
                            if (
                              a1.node.frontmatter.title >
                              a2.node.frontmatter.title
                            )
                              return 1;
                            return 0;
                          })
                          .map(article => (
                            <li
                              key={article.node.id}
                              style={{
                                paddingTop: ".25em",
                                paddingBottom: ".25em",
                              }}
                            >
                              <Link
                                to={article.node.frontmatter.path}
                                activeStyle={{ fontWeight: 800 }}
                              >
                                {article.node.frontmatter.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </section>
                  ))}
              </nav>
            </div>
          </div>
        );
      }}
    />
  );
}
