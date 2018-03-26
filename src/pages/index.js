import React from "react";
import { PageList } from "../components/all_site_page_list";

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <h2>Pages</h2>
    <PageList data={data} />
  </div>
);

export default IndexPage;

export const query = graphql`
  query AboutQuery {
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
