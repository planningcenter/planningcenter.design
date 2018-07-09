import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/main_layout";
import Helmet from "react-helmet";
import { ArticleNav } from "../components/article_nav";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
  ...rest
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <main className="page-main">
        <Helmet title={`${frontmatter.title} — Planning Center Design`} />
        <ArticleNav
          data={data}
          title="Interfaces & Interactions"
          category={rest.location.pathname.split("/")[1]}
        />
        <article className="article">
          <div style={{ textAlign: "right" }}>
            <small>
              <a
                target="_blank"
                rel="noreferrer"
                href={
                  "https://github.com/planningcenter/planningcenter.design/tree/master/src" +
                  markdownRemark.fileAbsolutePath.split("/src")[1]
                }
              >
                Improve this page
              </a>
            </small>
          </div>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
    </Layout>
  );
}

export const pageQuery = graphql`
  query MarkdownPageByPath($path: String!) {
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
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
      fileAbsolutePath
    }
  }
`;
