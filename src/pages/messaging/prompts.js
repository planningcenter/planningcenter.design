import React from "react";
import { PageList } from "../../components/all_site_page_list";
import Link from "gatsby-link";

const IndexPage = ({ data }) => (
  <div>
    <h1>Prompts</h1>
    <PageList data={data} />
  </div>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allSitePage {
      edges {
        node {
          id
          path
        }
      }
    }
  }
`;
