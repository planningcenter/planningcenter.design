import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/main_layout";
import Helmet from "react-helmet";

export default function Template({ data, ...rest }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <main>
        <Helmet title={`${frontmatter.title} — Planning Center Design`} />
        <article style={{ maxWidth: "32rem" }}>
          <h1 style={{ marginTop: 0 }}>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
        <div>
          <small>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                "https://github.com/planningcenter/planningcenter.design/tree/master/src" +
                markdownRemark.fileAbsolutePath.split("/src")[1]
              }
            >
              Improve this page
            </a>
          </small>
        </div>
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
        date
        path
        title
      }
      fileAbsolutePath
    }
  }
`;
